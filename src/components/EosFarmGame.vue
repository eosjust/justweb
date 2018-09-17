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
            <mu-tabs :value.sync="tab1active" color="#607d8b" style="border-radius: 5px 5px 0px 0px;">
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
              <mu-paper :z-depth="1">
                <el-table :data="myeostrees" border style="width: 100%">
                  <el-table-column type="selection" width="35"/>
                  <el-table-column prop="tree_amount" label="数量"></el-table-column>
                  <el-table-column prop="eos_amount" label="花费"></el-table-column>
                  <el-table-column prop="has_withdraw" label="已摘取"></el-table-column>
                  <el-table-column prop="income" label="待摘取"></el-table-column>
                  <el-table-column prop="end_time" label="倒计时"></el-table-column>
                </el-table>
              </mu-paper>
            </div>
            <div class="demo-text" v-if="tab1active === 2">

            </div>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="$store.state.ismobile?24:12" style="margin-top: 50px;">
        <el-row type="flex" justify="center" align="middle">
          <el-col :span="20" style="background-color: #f5f5f5;border-radius: 5px;">
            <mu-tabs :value.sync="tab2active" color="#607d8b" style="border-radius: 5px 5px 0px 0px;">
              <mu-tab>游戏状态</mu-tab>
              <mu-tab>近期交易</mu-tab>
            </mu-tabs>
            <div class="demo-text" v-if="tab2active === 0" style="padding: 20px;">
              <div>
                最后赢家 {{this.mygameinfo.last_one}}
              </div>
              <div>
                售出种子 {{this.mygameinfo.supply}}
              </div>
              <div>
                空投池 {{this.mygameinfo.airdrop_pool}}
              </div>
              <div>
                分红池 {{this.mygameinfo.dividend_pool}}
              </div>
              <div>
                最终大奖 {{this.mygameinfo.last_reward_pool}}
              </div>
            </div>
            <div class="demo-text" v-if="tab2active === 1">

            </div>
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

  export default {
    name: "EosFarmGame",
    data() {
      return {
        //tab
        tab1active: 0,
        tab2active: 0,
        //const info
        walletinfo: "ooooooo",
        farmcontract: "eosjustaward",

        //input form
        buyeos: null,
        //table info
        globalinfo: null,
        gameinfo: null,
        eostrees: null,
        userinfo: null,
        alleostrees: null,
        //display info
        countdown: null,
        totaleos: null,
        endtime: null,
        //display info tab buy
        maybeBuyAmount: null,
        //display info tab widthdraw
        myeostrees:null,
        //display info tab invite
        //display info tab gamestate
        mygameinfo:new Object(),
        //display info tab rcentbuy
      }
    },
    created() {

    },
    mounted() {
      this.endtime = Date.parse(new Date()) / 1000 + 86400;
      var that = this;
      timeout.timeout(1000, function () {
        var delta = that.endtime - Date.parse(new Date()) / 1000;
        that.countdown = that.formatSeconds(delta);
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
              name: "test",
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
        var bbb=bigInt(chex,16);
        var ccc=bbb.toArray(256);
        ccc.value.reverse();
        var ddd=bigInt.fromArray(ccc.value,256,false);
        return ddd;
      },
    }, watch: {
      buyeos: function (val) {
        var buyEosAmount = parseFloat(val);
        var eosRealAmount = parseInt(buyEosAmount * 10000);
        this.maybeBuyAmount = this.get_buy_amount(eosRealAmount, this.gameinfo.supply);
      },
      eostrees:function (val) {
        this.myeostrees=new Array();
        if(val){
          for(var i=0;i<val.length;i++){
            var eostree=new Object();
            eostree.eos_amount= (val[i].eos_amount/10000).toFixed(4);
            eostree.tree_amount=val[i].tree_amount;
            eostree.has_withdraw=val[i].has_withdraw;
            var pow=(this.gameinfo.dividend_num-val[i].dividend_num);
            var weight=bigInt(val[i].tree_amount);
            var dividend_weight=this.convertChex(this.gameinfo.dividend_weight);
            var incomebig=bigInt(0);
            if(!dividend_weight.eq(0)){
              incomebig=weight.multiply(pow).multiply(this.gameinfo.dividend_pool).divide(dividend_weight);
            }


            eostree.income=(parseFloat(incomebig.toJSNumber())/10000).toFixed(4).toString();
            eostree.end_time=val[i].end_time;
            this.myeostrees.push(eostree);
          }
        }
      },
      gameinfo:function (val) {
        var that=this;
        that.endtime = val.end_time;
        that.totaleos = Big(val.total_pool).div(10000).toFixed(4) + " EOS";
        that.mygameinfo.last_one = val.last_one;
        that.mygameinfo.supply = val.supply + " seeds";
        that.mygameinfo.airdrop_pool = Big(val.airdrop_pool).div(10000).toFixed(4) + " EOS";
        that.mygameinfo.dividend_pool = Big(val.dividend_pool).div(10000).toFixed(4) + " EOS";
        that.mygameinfo.last_reward_pool = Big(val.last_reward_pool).div(10000).toFixed(4) + " EOS";
        var dividend_weight=this.convertChex(val.dividend_weight);
        that.mygameinfo.dividend_weight=dividend_weight;

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

  .p3d-green {
    text-shadow: rgb(43, 0, 43) 0px 0px 5px, rgb(0, 204, 0) 0px 0px 20px, rgb(0, 255, 0) 0px 0px 10px;
    font-size: 1.9em;
    color: white;
  }
</style>
