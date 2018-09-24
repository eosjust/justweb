<template>
  <div id="eosfarm-content">
    <el-row type="flex" justify="center" align="middle" style="margin-top: 50px;">
      <el-col :span="8"></el-col>
      <el-col :span="8" justify="center" align="middle">
        <div class="p3d-green">{{countdown+""}}</div>
      </el-col>
      <el-col :span="8"></el-col>
    </el-row>
    <el-row type="flex" justify="center" align="middle">
      <el-col :span="8"></el-col>
      <el-col :span="8" justify="center" align="middle">
        <div class="p3d-green">{{totaleos}}</div>
      </el-col>
      <el-col :span="8"></el-col>
    </el-row>
    <el-row type="flex" justify="center" align="middle">
      <el-col :span="8"></el-col>
      <el-col :span="8" justify="center" align="middle">
        <mu-button ripple color="primary" @click="btnStart">
          start
        </mu-button>
        <mu-button ripple color="primary" @click="btnReset">
          reset
        </mu-button>
      </el-col>
      <el-col :span="8"></el-col>
    </el-row>
    <el-row type="flex" justify="center" align="middle">
      <el-col :span="8"></el-col>
      <el-col :span="8" justify="center" align="middle"><h4>{{walletinfo}}</h4></el-col>
      <el-col :span="8"></el-col>
    </el-row>

    <el-row>
      <el-col :span="$store.state.ismobile?24:12" style="margin-top: 50px;">
        <el-row type="flex" justify="center" align="middle">
          <el-col :span="20" style="background-color: #f5f5f5;border-radius: 5px;">
            <mu-tabs :value.sync="tab1active" color="#009688" style="border-radius: 5px 5px 0px 0px;">
              <mu-tab>买树苗🌱</mu-tab>
              <mu-tab>摘柚子</mu-tab>
              <mu-tab>邀请奖励</mu-tab>
            </mu-tabs>
            <div class="demo-text" v-if="tab1active === 0" style="padding: 20px;">
              <el-row type="flex" justify="center" align="middle">
                <el-col :span="20">
                  <el-input placeholder="请输入购买数量" v-model="buyeos">
                    <template slot="append">≈{{maybeBuyAmount}} trees</template>
                  </el-input>
                </el-col>
              </el-row>
              <el-row type="flex" style="margin-top: 20px;" justify="center" align="middle">
                <el-col :span="3">
                  <el-button type="primary" size="mini" round>88</el-button>
                </el-col>
                <el-col :span="3">
                  <el-button type="primary" size="mini" round>188</el-button>
                </el-col>
                <el-col :span="3">
                  <el-button type="primary" size="mini" round>588</el-button>
                </el-col>
                <el-col :span="3">
                  <el-button type="primary" size="mini" round>888</el-button>
                </el-col>
                <el-col :span="4">
                  <el-button type="primary" size="mini" round>8888</el-button>
                </el-col>
              </el-row>

              <el-row class="top_margin" type="flex" justify="center" align="middle">
                <el-col :span="20" justify="center" align="middle">
                  <mu-button full-width ripple color="primary" @click="btnBuy">
                    Buy
                  </mu-button>
                </el-col>
              </el-row>
            </div>
            <div class="demo-text" v-if="tab1active === 1">

              <mu-paper class="demo-paper" :z-depth="3">
              <el-table :data="myeostrees" border style="width: 100%;margin-bottom: 5px;">
                <el-table-column type="expand">
                  <template slot-scope="props">
                    <el-row type="flex" class="row-bg" justify="space-between">
                      <el-col :span="6"><mu-button ripple color="primary" @click="btnBuyDrug(props.row.id)">治疗</mu-button></el-col>
                      <el-col :span="6"><mu-button ripple color="primary" @click="btnWithDrawTree(props.row.id)">摘取</mu-button></el-col>
                      <el-col :span="6"><mu-button ripple color="primary" @click="btnDeleteTree(props.row.id)">铲除</mu-button></el-col>
                    </el-row>
                  </template>
                </el-table-column>
                <el-table-column prop="tree_amount" label="数量"></el-table-column>
                <el-table-column prop="eos_amount_show" label="花费"></el-table-column>
                <el-table-column prop="has_withdraw_show" label="已摘取"></el-table-column>
                <el-table-column prop="income_show" label="待摘取"></el-table-column>
                <el-table-column prop="end_time_show" label="寿命"></el-table-column>
              </el-table>
              </mu-paper>
            </div>
            <div class="demo-text" v-if="tab1active === 2">
              <el-row >
                <MyLand state="1"></MyLand>
                <MyLand state="2"></MyLand>
                <MyLand state="3"></MyLand>
                <MyLand state="2"></MyLand>
                <MyLand state="2"></MyLand>
                <MyLand state="2"></MyLand>
                <MyLand state="2"></MyLand>
                <MyLand state="3"></MyLand>
                <MyLand state="3"></MyLand>
              </el-row>
            </div>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="$store.state.ismobile?24:12" style="margin-top: 50px;">
        <el-row type="flex" justify="center" align="middle">
          <el-col :span="20" style="background-color: #f5f5f5;border-radius: 5px;">
            <mu-tabs :value.sync="tab2active" color="#009688" style="border-radius: 5px 5px 0px 0px;">
              <mu-tab>游戏状态</mu-tab>
              <mu-tab>近期交易</mu-tab>
            </mu-tabs>
            <el-row type="flex" justify="center" align="middle" v-if="tab2active === 0">
              <el-col :span="24">
                <div class="demo-text"  style="padding: 20px;">
                  <div>
                    最后赢家 {{this.mygameinfo.last_one}}
                  </div>
                  <div>
                    售出树苗 {{this.mygameinfo.supply}}
                  </div>
                  <div>
                    空投池 {{this.mygameinfo.airdrop_pool}}
                  </div>
                  <div>
                    分红池 {{this.mygameinfo.dividend_pool}}
                  </div>
                  <div>
                    分红池恒定 {{this.mygameinfo.dividend_pool_const}}
                  </div>
                  <div>
                    最终大奖 {{this.mygameinfo.last_reward_pool}}
                  </div>
                </div>
              </el-col>
            </el-row>

            <el-row v-if="tab2active === 1">
              <el-row type="flex" justify="space-between">
                <el-col :span="12" class="farm-text-left">
                  最后赢家
                </el-col>
                <el-col :span="12" class="farm-text-right">
                  {{this.mygameinfo.last_one}}
                </el-col>
              </el-row>
              <el-row type="flex" justify="space-between">
                <el-col :span="12" class="farm-text-left">
                  最后赢家
                </el-col>
                <el-col :span="12" class="farm-text-right">
                  {{this.mygameinfo.last_one}}
                </el-col>
              </el-row>

            </el-row>
          </el-col>
        </el-row>
      </el-col>
    </el-row>

  </div>
</template>

<script>
  import timeout from 'timeout';
  import bigInt from "big-integer";
  import Big from 'big.js';
  import MyLand from '@/components/MyLand'

  export default {
    name: "EosFarmGame",
    components: {
      MyLand,
    },
    data() {
      return {
        //tab
        tab1active: 0,
        tab2active: 0,
        //const info
        walletinfo: "ooooooo",
        farmcontract: "eosjustaward",
        LIFE_ALIVE : 20,
      LIFE_SICK : 18,
      LIFE_DEAD : 16,
      LIFE_VOID : 14,
        //input form
        buyeos: null,
        //table info
        globalinfo: null,
        gameinfo: null,
        eostrees: null,
        alleostrees:null,
        userinfo: null,
        //display info
        countdown: null,
        totaleos: null,
        endtime: null,
        //display info tab buy
        maybeBuyAmount: null,
        //display info tab widthdraw
        myeostrees:new Array(),
        //display info tab invite
        //display info tab gamestate
        mygameinfo:new Object(),
        //display info tab rcentbuy
        imgEosLand:require("../assets/eos_land_1.png"),
      }
    },
    created() {

    },
    mounted() {
      this.endtime = Date.parse(new Date()) / 1000 + 86400;
      var that = this;
      timeout.timeout(1000, function () {
        let delta = that.endtime - Date.parse(new Date()) / 1000;
        that.countdown = that.formatSeconds(delta);
        var eostrees=that.eostrees;
        that.refreshMyEosTree(eostrees);
        return true;
      });

      timeout.timeout(3000, function () {
        that.requestGameInfo();
        that.requestUserInfo();
        that.requestEosTreeInfo();
        that.requestAllEosTreeInfo();
        return true;
      });
      that.requestGameInfo();
    },
    methods: {
      btnStart() {
        var eossdkutil = window.eossdkutil;
        var that = this;
        eossdkutil.pushEosAction({
          actions: [
            {
              account: that.farmcontract,
              name: "start",
              authorization: [
                {
                  actor: that.farmcontract,
                  permission: "active"
                }
              ],
              data: {}
            }
          ]
        }).then(function (result) {
          that.$message("ok");
        }).catch(function (error) {
          that.$message("fail");
        });
      },
      btnReset() {
        var eossdkutil = window.eossdkutil;
        var that = this;
        eossdkutil.pushEosAction({
          actions: [
            {
              account: that.farmcontract,
              name: "reset",
              authorization: [
                {
                  actor: that.farmcontract,
                  permission: "active"
                }
              ],
              data: {}
            }
          ]
        }).then(function (result) {
          that.$message("yes");
        }).catch(function (error) {
          that.$message("fail");
        });
      },
      btnBuy() {
        if (!this.buyeos) {
          this.$message("请输入要购买的eos值");
          return;
        }
        var eossdkutil = window.eossdkutil;
        var that = this;
        eossdkutil.pushEosAction({
          actions: [
            {
              account: that.farmcontract,
              name: "buytree",
              authorization: [
                {
                  actor: that.$store.state.eosUserName,
                  permission: "active"
                }
              ],
              data: {
                user: that.$store.state.eosUserName,
                quantity: Big(that.buyeos).toFixed(4) + " EOS",
                inviter: "justtest2222"
              }
            }
          ]
        }).then(function (result) {
          that.$message({
            message: '购买成功',
            type: 'success'
          });
        }).catch(function (error) {
          that.$message({
            message: '购买失败',
            type: 'warning'
          });
        });
      },
      btnBuyDrug(treeid) {
        var eossdkutil = window.eossdkutil;
        var that = this;
        eossdkutil.pushEosAction({
          actions: [
            {
              account: that.farmcontract,
              name: "buydrug",
              authorization: [
                {
                  actor: that.farmcontract,
                  permission: "active"
                }
              ],
              data: {
                treeid:treeid,
                user:that.$store.state.eosUserName,
                quantity:"1.0000 EOS"
              }
            }
          ]
        }).then(function (result) {
          that.$message("购买成功");
        }).catch(function (error) {
          that.$message("购买失败");
        });
      },
      btnDeleteTree(treeid) {
        var eossdkutil = window.eossdkutil;
        var that = this;
        eossdkutil.pushEosAction({
          actions: [
            {
              account: that.farmcontract,
              name: "deltree",
              authorization: [
                {
                  actor: that.farmcontract,
                  permission: "active"
                }
              ],
              data: {
                treeid:treeid,
                user:that.$store.state.eosUserName
              }
            }
          ]
        }).then(function (result) {
          that.$message("操作成功");
        }).catch(function (error) {
          that.$message("操作失败");
        });
      },
      btnWithDrawTree(treeid) {
        var eossdkutil = window.eossdkutil;
        var that = this;
        eossdkutil.pushEosAction({
          actions: [
            {
              account: that.farmcontract,
              name: "withdraw",
              authorization: [
                {
                  actor: that.farmcontract,
                  permission: "active"
                }
              ],
              data: {
                treeid:treeid,
                all:0,
                user:that.$store.state.eosUserName
              }
            }
          ]
        }).then(function (result) {
          that.$message("操作成功");
        }).catch(function (error) {
          that.$message("操作失败");
        });
      },
      btnWithDraw() {
        var eossdkutil = window.eossdkutil;
        var that = this;
        eossdkutil.pushEosAction({
          actions: [
            {
              account: that.farmcontract,
              name: "withdraw",
              authorization: [
                {
                  actor: that.farmcontract,
                  permission: "active"
                }
              ],
              data: {
                treeid:0,
                all:1,
                user:that.$store.state.eosUserName
              }
            }
          ]
        }).then(function (result) {
          that.$message("操作成功");
        }).catch(function (error) {
          that.$message("操作失败");
        });
      },
      requestGameInfo() {
        var that = this;
        var eossdkutil = window.eossdkutil;
        eossdkutil.getEosTableRows(
          {
            json: true,
            code: that.farmcontract,
            scope: that.farmcontract,
            table: 'gameinfo',
            limit: 20
          }
        ).then(function (result) {
          var rows = result.data.rows;
          var len = rows.length;
          var inx = len - 1;
          var gameinfo = rows[inx];
          that.gameinfo = gameinfo;
        }).catch(function (error) {

        });
      },
      requestUserInfo() {
        var that = this;
        var eossdkutil = window.eossdkutil;
        eossdkutil.getEosTableRows(
          {
            json: true,
            code: that.farmcontract,
            scope: that.$store.state.eosUserName,
            table: 'userinfo',
            limit: 20
          }
        ).then(function (result) {
          var rows = result.data.rows;
          var len = rows.length;
          var inx = len - 1;
          var userinfo = rows[inx];
          that.userinfo = userinfo;
        }).catch(function (error) {

        });
      },
      requestEosTreeInfo() {
        var that = this;
        var eossdkutil = window.eossdkutil;
        eossdkutil.getEosTableRows(
          {
            json: true,
            code: that.farmcontract,
            scope: that.$store.state.eosUserName,
            table: 'eostree',
            limit: 20
          }
        ).then(function (result) {
          var rows = result.data.rows;
          that.eostrees = rows;
        }).catch(function (error) {

        });
      },
      requestAllEosTreeInfo() {
        var that = this;
        var eossdkutil = window.eossdkutil;
        eossdkutil.getEosTableRows(
          {
            json: true,
            code: that.farmcontract,
            scope: that.farmcontract,
            table: 'eostree',
            limit: 20
          }
        ).then(function (result) {
          var rows = result.data.rows;
          that.alleostrees = rows;
        }).catch(function (error) {

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
      }, get_buy_amount(quant, supply) {
        var total_amount = quant;
        total_amount = total_amount * 10000;
        var st = supply;
        var ed = 500000000;
        var mid;
        while (st + 1 < ed) {
          mid = parseInt((st + ed) / 2);
          if (this.calc_range(supply + 1, mid) <= total_amount) {
            st = mid;
          } else {
            ed = mid;
          }
        }
        return st - supply;
      }, calc_range(st, ed) {
        if (st > ed) {
          return 0;
        }
        var t_st = st;
        var t_ed = ed;
        var tmp = parseInt(((t_st + t_ed) * (t_ed - t_st + 1)) / 2);
        return tmp;
      },convertChex(chex){
        chex=chex.substring(2);
        var jhex="";
        var len=chex.length/2;
        for(var i=0;i<len;i++){
          var j=len-1-i;
          var c1=chex[2*j];
          var c2=chex[2*j+1];
          jhex=jhex+c1+c2;
        }
        var bbb=bigInt(jhex,16);
        // var ccc=bbb.toArray(256);
        // ccc.value.reverse();
        // var ddd=bigInt.fromArray(ccc.value,256,false);
        return bbb;
      },refreshMyEosTree(eostrees){
        if(eostrees){
          var notmatch=false;
          for(var i=0;i<this.myeostrees.length;i++){
            var match=false;
            for(var j=0;j<eostrees.length;j++){
              if(eostrees[i].id==this.myeostrees[j].id){
                match=true;
              }
            }
            if(!match){
              notmatch=true;
            }
          }
          if(notmatch){
            //存在id不匹配的，则认为更换了账户，清空重建
            this.myeostrees.splice(0,this.myeostrees.length);
          }
          for(var i=0;i<eostrees.length;i++){
            var match=false;
            for(var j=0;j<this.myeostrees.length;j++){
              if(eostrees[i].id==this.myeostrees[j].id){
                match=true;
                this.myeostrees[j]=eostrees[i];
              }
            }
            if(!match){
              this.myeostrees.push(eostrees[i]);
            }
          }
          for(var i=0;i<this.myeostrees.length;i++){

            this.myeostrees[i].eos_amount_show= (this.myeostrees[i].eos_amount/10000).toFixed(4);
            this.myeostrees[i].income_show= (this.myeostrees[i].income/10000).toFixed(4);
            this.myeostrees[i].has_withdraw_show= (this.myeostrees[i].has_withdraw/10000).toFixed(4);
            var end_time_show="∞";
            var end_time=this.myeostrees[i].end_time;
            var life_ret=this.myeostrees[i].life_ret;
            if(life_ret==this.LIFE_DEAD){
              end_time_show="dead";
            }else{
              if(end_time>0){
                let delta=end_time-Date.parse(new Date()) / 1000;
                end_time_show=this.formatSeconds(delta);
              }else{
                end_time_show="∞";
              }
            }
            this.myeostrees[i].end_time_show=end_time_show;
          }
        }
      },
    }, watch: {
      buyeos: function (val) {
        var buyEosAmount = parseFloat(val);
        var eosRealAmount = parseInt(buyEosAmount * 10000);
        this.maybeBuyAmount = this.get_buy_amount(eosRealAmount, this.gameinfo.supply);
      },
      gameinfo:function (val) {
        var that=this;
        that.endtime = val.end_time;
        that.totaleos = Big(val.total_pool).div(10000).toFixed(4) + " EOS";
        that.mygameinfo.last_one = val.last_one;
        that.mygameinfo.supply = val.supply + " trees";
        that.mygameinfo.airdrop_pool = Big(val.airdrop_pool).div(10000).toFixed(4) + " EOS";
        that.mygameinfo.dividend_pool = Big(val.dividend_pool).div(10000).toFixed(4) + " EOS";
        that.mygameinfo.dividend_pool_const = Big(val.dividend_pool_const).div(10000).toFixed(4) + " EOS";
        that.mygameinfo.last_reward_pool = Big(val.last_reward_pool).div(10000).toFixed(4) + " EOS";
      }
    }
  }
</script>

<style scoped>
  .just-button-transform {
    text-transform: none;
  }

  .top_margin {
    margin-top: 20px;
  }

  .farm-text-left{
    padding: 2px;
    font-size: 1.8em;
  }

  .farm-text-right{
    padding: 2px;
    font-size: 1.8em;
    text-align: right;
  }


  .p3d-green {
    text-shadow: rgb(43, 0, 43) 0px 0px 5px, rgb(0, 204, 0) 0px 0px 20px, rgb(0, 255, 0) 0px 0px 10px;
    font-size: 1.9em;
    color: white;
  }
</style>
