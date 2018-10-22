<template>
  <el-row>
    <el-row type="flex" justify="space-around" align="bottom" style="margin-top: 30px;margin-bottom: 30px;">
      <el-col :xs="7" :sm="7" :md="5" :lg="4" :xl="4" >
        <div style="text-align: center;" class="award-big-title2">
          {{award_pool}}
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
          倒计时
        </div>
      </el-col>
      <el-col :xs="7" :sm="7" :md="5" :lg="4" :xl="4" >
        <div style="text-align: center;" class="award-big-title2">
          {{last_winner}}
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
      <mu-dialog title="" :width="$store.state.ismobile?'90%':'60%'" :open.sync="joinDialogOpen">
        <div class="award-title3">参与夺宝有机会获得商品等值奖金，每一轮夺宝结束，本轮所有玩家将获得奖池中的部分奖金</div>
        <el-row type="flex" justify="center" align="middle" style="padding:10px;">
          <el-col :span="20">
            <el-input placeholder="请输入EOS数量" v-model="buyeos">
              <template slot="append">EOS</template>
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
    <el-row>
      <mu-dialog title="" :width="$store.state.ismobile?'90%':'60%'" :open.sync="buyDialogOpen">
        <div class="award-title3">买下商品经营权可以获得夺宝2%收益，自由上传图片到区块链上，并且经营权易主后立即回本，并获得15%回报</div>
        <el-row type="flex" justify="center" align="middle" style="padding:10px;">
          <el-col :span="20">
            <el-input placeholder="请输入EOS数量" v-model="slotPrice">
              <template slot="append">EOS</template>
            </el-input>
          </el-col>
        </el-row>
        <el-row class="top_margin" type="flex" justify="center" align="middle">
          <el-col :span="20" justify="center" align="middle">
            <mu-button full-width ripple color="secondary" @click="btnBuy">
              购买
            </mu-button>
          </el-col>
        </el-row>
        <mu-button slot="actions" flat color="primary" @click="closeBuyDialog">Close</mu-button>
      </mu-dialog>
    </el-row>
    <!--<mu-divider></mu-divider>-->
    <!--<el-row type="flex" justify="center" style="margin-top: 15px;">-->
      <!--<el-col :span="1">-->
      <!--</el-col>-->
      <!--<el-col :span="22">-->
        <!--<el-row type="flex" justify="space-between" style="margin-left: 12px;margin-right: 12px;">-->
          <!--<el-col :span="6">-->
            <!--<div class="award-sub-title">即将完成</div>-->
          <!--</el-col>-->
          <!--<el-col :span="6">-->
            <!--<div class="award-sub-title-link" style="text-align: right"></div>-->
          <!--</el-col>-->
        <!--</el-row>-->
        <!--<el-row>-->
          <!--<AwardSlot @onJoin="btnOnJoin" v-for="slot in allslotinfo" :key="slot.key" :data="slot">-->

          <!--</AwardSlot>-->
        <!--</el-row>-->
      <!--</el-col>-->
      <!--<el-col :span="1">-->
      <!--</el-col>-->
    <!--</el-row>-->
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
          <AwardSlot @onJoin="btnOnJoin" @onBuy="btnOnBuy" v-for="slot in allslotinfo" :key="slot.key" :data="slot">

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
        endTime:1540209600,
        countdown:"24:00:00",
        award_pool:"0.0000 EOS",
        last_winner:"",
        joinDialogOpen:false,
        buyDialogOpen:false,
        myglobalinfo:{},
        buyeos:10.00,
        slotPrice:0.100,
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
      var that=this;
      that.requestAllSlot();
      that.requestGlobal();
    },
    mounted() {
      var that=this;
      if (that.$route.query.ref) {
        that.inviterName = that.$route.query.ref;
      } else {
        that.inviterName = "";
      }
      that.requestLoop();
      timeout.timeout(1000, function () {
        let delta = that.endTime - Date.parse(new Date()) / 1000;
        that.countdown = that.formatSeconds(delta);
        return that.timerLoop;
      });

    },
    destroyed: function () {

    },
    methods: {
      btnGetImg64() {
      },
      requestLoop(){
        var that=this;
        timeout.timeout(3000, function () {
          that.requestAllSlot();
          that.requestGlobal();
          console.log("turbo");
          return that.timerLoop;
        });
      },
      closeJoinDialog(){
        this.joinDialogOpen=false;
      },
      openJoinDialog(){
        this.joinDialogOpen=true;
      },
      closeBuyDialog(){
        this.buyDialogOpen=false;
      },
      openBuyDialog(){
        this.buyDialogOpen=true;
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
          if(rows&&rows.length>0){
            that.allslotinfo.splice(0,that.allslotinfo.length);
            for(var i=0;i<rows.length;i++){
              that.allslotinfo.splice(i,1,rows[i]);
            }
          }
        }).catch(function (error) {

        });
      },
      requestGlobal() {
        var that = this;
        var eossdkutil = window.eossdkutil;
        eossdkutil.getEosTableRows(
          {
            json: true,
            code: "eosjustturbo",
            scope: "eosjustturbo",
            table: 'globalinfo',
            limit: 1
          }
        ).then(function (result) {
          var rows = result.data.rows;
          if(rows&&rows.length>0){
            that.myglobalinfo=rows[0];
            that.endTime=that.myglobalinfo.end_time;
            that.last_winner=that.myglobalinfo.last_winner;
            that.award_pool=that.parseEosAmount(that.myglobalinfo.award_pool) ;
          }
        }).catch(function (error) {

        });
      },
      btnOnJoin(slot){
        this.curJoinSlot=slot;
        if(slot){
          this.buyeos=((slot.goods_price-slot.progress)/10000).toFixed(4);
        }
        this.openJoinDialog();
      },
      btnOnBuy(slot){
        this.curJoinSlot=slot;
        if(slot){
          this.slotPrice=((slot.slot_price)/10000).toFixed(4);
        }
        this.openBuyDialog();
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
          that.$message("购买成功");
          that.closeBuyDialog();
          that.closeJoinDialog();
        }).catch(function (error) {
          that.$message(error);
          that.closeBuyDialog();
          that.closeJoinDialog();
        });
      },
      btnBuy() {
        var that = this;
        if(that.curJoinSlot&&that.curJoinSlot.key){

        }else{
          that.$message("请选择一个商品");
        }
        var slotPirce=Big(this.curJoinSlot.slot_price);
        slotPirce=slotPirce.div(10000);
        if(!slotPirce.gt(0)){
          that.$message("橱窗价格错误");
        }
        var eossdkutil = window.eossdkutil;
        var memo="buyslot:" + that.curJoinSlot.key + ";" + that.inviterName + ";";
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
                quantity: slotPirce.toFixed(4) + " EOS",
                memo: memo,
              }
            }
          ]
        }).then(function (result) {
          that.$message("购买成功");
          that.closeBuyDialog();
          that.closeJoinDialog();
        }).catch(function (error) {
          that.$message(error);
          that.closeBuyDialog();
          that.closeJoinDialog();
        });
      },
      parseEosAmount(amount) {
        return (parseFloat(amount) / 10000).toFixed(4);
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
    watch: {
      timerLoop:function (val) {
        this.requestLoop();
      }
    }
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
  .award-title3 {
    color: #9e9e9e;
    font-size: 0.9em;
  }
</style>
