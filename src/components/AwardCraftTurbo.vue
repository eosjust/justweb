<template>
  <el-row>
    <el-row type="flex" justify="space-around" align="bottom" style="margin-top: 30px;margin-bottom: 30px;">
      <el-col :xs="7" :sm="7" :md="5" :lg="4" :xl="4" v-show="false">
        <div style="text-align: center;" class="award-big-title2">
          2366.00 EOS
        </div>
        <div style="background:linear-gradient(to left,#ffffff,#e91e63,#ffffff);height:1px;margin: 5px;"></div>
        <div style="text-align: center" class="award-big-title2">
          奖池
        </div>
      </el-col>
      <el-col :xs="7" :sm="7" :md="5" :lg="4" :xl="4">
        <div style="text-align: center;" class="award-big-title1">
          {{countdown}}
        </div>
        <div style="background:linear-gradient(to left,#ffffff,#e91e63,#ffffff);height:1px;margin: 5px;"></div>
        <div style="text-align: center" class="award-big-title1">
          游戏开始倒计时
        </div>
      </el-col>
      <el-col :xs="7" :sm="7" :md="5" :lg="4" :xl="4" v-show="false">
        <div style="text-align: center;" class="award-big-title2">
          justtest1111
        </div>
        <div style="background:linear-gradient(to left,#ffffff,#e91e63,#ffffff);height:1px;margin: 5px;"></div>
        <div style="text-align: center" class="award-big-title2">
          最终赢家
        </div>
      </el-col>
    </el-row>
    <!--<el-row type="flex" justify="center">-->
    <!--<el-carousel :interval="4000" type="card" height="200px">-->
    <!--<el-carousel-item>-->

    <!--</el-carousel-item>-->
    <!--</el-carousel>-->
    <!--</el-row>-->
    <el-row>
      <mu-dialog title="参与夺宝" :width="$store.state.ismobile?'90%':'60%'" :open.sync="joinDialogOpen">
        <el-row type="flex" justify="center" align="middle">
          <el-col :span="20">
            <el-input placeholder="请输入EOS数量" v-model="buyeos">
              <!--<template slot="append">≈{{maybeRate}}</template>-->
            </el-input>
          </el-col>
        </el-row>
        <el-row class="top_margin" type="flex" justify="center" align="middle">
          <el-col :span="20" justify="center" align="middle">
            <mu-button full-width ripple color="secondary" @click="btnJoin">
              购买
            </mu-button>
          </el-col>
        </el-row>
        <mu-button slot="actions" flat color="primary" @click="closeJoinDialog">Close</mu-button>
      </mu-dialog>
    </el-row>
    <mu-divider></mu-divider>
    <el-row type="flex" justify="center" style="margin-top: 15px;">
      <el-col :span="1">
      </el-col>
      <el-col :span="22">
        <el-row type="flex" justify="space-between" style="margin-left: 12px;margin-right: 12px;">
          <el-col :span="6">
            <div class="award-sub-title">即将完成</div>
          </el-col>
          <el-col :span="6">
            <div class="award-sub-title-link" style="text-align: right"></div>
          </el-col>
        </el-row>
        <el-row>
          <AwardSlot @onJoin="btnOnJoin" v-for="slot in allslotinfo" :key="slot.key" :data="slot">

          </AwardSlot>
        </el-row>
      </el-col>
      <el-col :span="1">
      </el-col>
    </el-row>
    <mu-divider></mu-divider>
    <el-row type="flex" justify="center" style="margin-top: 15px;">
      <el-col :span="1">
      </el-col>
      <el-col :span="22">
        <el-row type="flex" justify="space-between" style="margin-left: 12px;margin-right: 12px;">
          <el-col :span="6">
            <div class="award-sub-title">全部</div>
          </el-col>
          <el-col :span="6">
            <div class="award-sub-title-link" style="text-align: right"></div>
          </el-col>
        </el-row>
        <el-row>
          <AwardSlot @onJoin="btnOnJoin" v-for="slot in allslotinfo" :key="slot.key" :data="slot">

          </AwardSlot>
        </el-row>
      </el-col>
      <el-col :span="1">
      </el-col>
    </el-row>
  </el-row>
</template>

<script>
  import timeout from 'timeout';
  import bigInt from "big-integer";
  import Identicon from "identicon.js";
  import Big from 'big.js';
  import copy from 'clipboard-copy';

  var hash = require('object-hash');
  import AwardSlot from '@/components/AwardSlot';

  export default {
    name: "AwardCraftTurbo",
    props: ['timerLoop'],
    components: {
      AwardSlot,
    },
    data() {
      return {
        startTime:1540209600,
        countdown:"24:00:00",
        joinDialogOpen:false,

        buyeos:10.00,
        maybeRate:"20%",
        infoDetailOpen: '',
        curUser: "",
        curJoinSlot:{},
        inviterName:"",
        allslotinfo:[],
        currentDate: new Date(),
        loading: false,
      }
    },
    created() {

    },
    mounted() {
      var that=this;
      that.requestAllSlot();
      timeout.timeout(1000, function () {
        let delta = that.startTime - Date.parse(new Date()) / 1000;
        that.countdown = that.formatSeconds(delta);
        return true;
      });
      timeout.timeout(3000, function () {
        that.requestAllSlot();
        return true;
      });
      if (that.$route.query.ref) {
        that.inviterName = that.$route.query.ref;
      } else {
        that.inviterName = "";
      }

    },
    destroyed: function () {

    },
    methods: {
      btnGetImg64() {
      },

      closeJoinDialog(){
        this.joinDialogOpen=false;
      },
      openJoinDialog(){
        this.joinDialogOpen=true;
      },
      requestAllSlot() {
        var that = this;
        var eossdkutil = window.eossdkutil;
        eossdkutil.getEosTableRows(
          {
            json: true,
            code: "eosjustturbo",
            scope: "eosjustturbo",
            table: 'slot',
            limit: 1000
          }
        ).then(function (result) {
          var rows = result.data.rows;
          that.allslotinfo = rows;
        }).catch(function (error) {

        });
      },
      btnOnJoin(slot){
        this.curJoinSlot=slot;
        this.openJoinDialog();
      },
      btnJoin() {
        var that = this;
        if(that.curJoinSlot&&that.curJoinSlot.key){

        }else{
          that.$message("请选择一个商品");
        }
        var eossdkutil = window.eossdkutil;
        var memo="";
        memo="joinslot:" + that.curJoinSlot.key + ";" + that.inviterName + ";";
        eossdkutil.pushEosAction({
          actions: [
            {
              account: "eosio.token",
              name: "transfer",
              authorization: [
                {
                  actor: that.$store.state.eosUserName,
                  permission: "active"
                }
              ],
              data: {
                from: that.$store.state.eosUserName,
                to: "eosjustturbo",
                quantity: Big(that.buyeos).toFixed(4) + " EOS",
                memo: memo,
              }
            }
          ]
        }).then(function (result) {
          that.$message("保存成功");
          that.myCroppa.remove();
        }).catch(function (error) {
          that.$message(error);
        });
      },
      formatSeconds(value) {
        var secondTime = parseInt(value);
        var minuteTime = 0;
        var hourTime = 0;
        if (secondTime > 60) {
          minuteTime = parseInt(secondTime / 60);
          secondTime = parseInt(secondTime % 60);
          if (minuteTime > 60) {
            hourTime = parseInt(minuteTime / 60);
            minuteTime = parseInt(minuteTime % 60);
          }
        }
        var result = this.time2Str(hourTime) + ":" + this.time2Str(minuteTime) + ":" + this.time2Str(secondTime);
        return result;
      }, time2Str(time) {
        var str = "00";
        if (time > 0) {
          str = time < 10 ? "0" + time : "" + time;
        }
        return str;
      },
      load() {
        // var that = this;
        // timeout.timeout(1000, function () {
        //   that.loading = false;
        // });
        // this.loading = true;
      }
    },
    watch: {}
  }
</script>

<style scoped>
  .award-sub-title {
    color: #9e9e9e;
    font-size: 1.2em;
  }

  .award-sub-title-link {
    color: #2196f3;
    font-size: 1.2em;
  }
  .award-big-title1 {
    color: #e91e63;
    font-size: 1.6em;
    line-height: 1.0em;
  }
  .award-big-title2 {
    color: #e91e63;
    font-size: 1.2em;
    line-height: 1.0em;
  }
</style>
