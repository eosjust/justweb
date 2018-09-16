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
          <el-col :span="20">
            <el-tabs type="border-card" >
              <el-tab-pane label="购买" >
                <el-row type="flex" justify="center" align="middle" >
                  <el-col :span="20">
                    <el-input placeholder="请输入购买数量" v-model="buyeos">
                      <template slot="append">≈{{maybeBuyAmount}} seeds</template>
                    </el-input>
                  </el-col>
                </el-row>
                <el-row class="top_margin" type="flex" justify="center" align="middle">
                  <el-col :span="20" justify="center" align="middle">
                    <mu-button full-width ripple color="primary" @click="btnBuy">
                      Buy
                    </mu-button>
                  </el-col>
                </el-row>
              </el-tab-pane >
              <el-tab-pane label="提现" style="background-color: #9e9e9e">
                <el-row type="flex" justify="center" align="middle">
                  <el-col :span="20">
                    <div>
                      Dividend Income {{mydividend}}
                    </div>
                    <div>
                      Dividend Income {{myinviteAwards}}
                    </div>
                    <div>
                      Dividend Income {{myairdrop}}
                    </div>
                  </el-col>
                </el-row>
              </el-tab-pane>
              <el-tab-pane label="返佣">返佣</el-tab-pane>
            </el-tabs>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="$store.state.ismobile?24:12" style="margin-top: 50px;">
        <el-row type="flex" justify="center" align="middle">
          <el-col :span="20">
            <el-tabs type="border-card">
              <el-tab-pane label="游戏状态">
                <el-row type="flex" justify="center" align="middle">
                  <el-col :span="20">
                    <div>
                      最后赢家 {{last_one}}
                    </div>
                    <div>
                      售出种子 {{supply}}
                    </div>
                    <div>
                      空投池 {{airdrop_pool}}
                    </div>
                    <div>
                      分红池 {{dividend_pool}}
                    </div>
                    <div>
                      最终大奖 {{last_reward_pool}}
                    </div>
                  </el-col>
                </el-row>
              </el-tab-pane>
              <el-tab-pane label="近期交易">近期交易</el-tab-pane>
            </el-tabs>
          </el-col>
        </el-row>

      </el-col>
    </el-row>
    <el-row>
      <el-col :span="$store.state.ismobile?24:12" style="margin-top: 50px;">
        <el-row type="flex" justify="center" align="middle">
          <el-col :span="20" style="background-color: #f5f5f5;border-radius: 5px;">
            <mu-tabs :value.sync="tab1active" center color="#607d8b" style="border-radius: 5px 5px 0px 0px;">
              <mu-tab>购买</mu-tab>
              <mu-tab>提现</mu-tab>
              <mu-tab>返佣</mu-tab>
            </mu-tabs>
            <div class="demo-text" v-if="tab1active === 0" style="padding: 20px;">
              <el-row type="flex" justify="center" align="middle" >
                <el-col :span="20">
                  <el-input placeholder="请输入购买数量" v-model="buyeos">
                    <template slot="append">≈{{maybeBuyAmount}} seeds</template>
                  </el-input>
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

            </div>
            <div class="demo-text" v-if="tab1active === 2">

            </div>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="$store.state.ismobile?24:12" style="margin-top: 50px;">
        <el-row type="flex" justify="center" align="middle">
          <el-col :span="20">
            <mu-tabs :value.sync="tab2active" inverse>
              <mu-tab>TAB ITEM 1</mu-tab>
              <mu-tab>TAB ITEM 2</mu-tab>
              <mu-tab>TAB ITEM 3</mu-tab>
            </mu-tabs>
            <div class="demo-text" v-if="tab2active === 0">
              <p>“……是的，我承认从很早以前我都害怕死亡，在医院里被人研究的时候，以前做出布局的时候，其实我很怕死的，因为除了死以外，我没有值得珍惜的东西，很奇怪是吧？恰好是这样我真的很怕死，因为我想要有值得珍惜的东西之后，死亡之后才会不寂寞，我才能够安然的面对死亡……”</p>
            </div>
            <div class="demo-text" v-if="tab2active === 1">
              <p>“我的心从来没有这么坚定过，所以我会为了补偿而死，也可以为了补偿而死……一辈子，急辈子都无所谓，我绝不后退！”</p>
              <p>“如果我后退呢？如果我想要死呢？我不想你再次背对着我逃跑了……”</p>
              <p>“那么就去地狱找到你，我绝对不逃！”</p>
              <p>“白痴，你也哭了？因为那些软弱拖累你的脚步？”</p>
            </div>
            <div class="demo-text" v-if="tab2active === 2">
              <p>“不，这泪水……是因为勇气，因为力量，因为信任，……你不会懂的！”</p>
              <p>“我不会帮你，想要什么样的未来……自己去追寻吧！”</p>
              <p>“我不需要你的帮忙！未来我会一手开启，什么样的敌人我也不会惧怕……还有，其实我们可以成为朋友的……”</p>
              <p>“也许吧，未来……给你了。”</p>
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
        tab1active:0,
        tab2active:0,
        //const info
        walletinfo: "ooooooo",
        farmcontract: "eosjustaward",

        //input form
        buyeos: null,
        //table info
        globalinfo: null,
        gameinfo: null,
        eostree: null,
        userinfo: null,
        tradeinfo: null,
        //display info
        countdown: null,
        totaleos: null,
        endtime: null,
        //display info tab buy
        maybeBuyAmount:null,

        //display info tab widthdraw
        mydividend: "100.0000 EOS",
        myinviteAwards: "100.0000 EOS",
        myairdrop: "100.0000 EOS",
        //display info tab invite

        //display info tab gamestate
        last_one: null,
        supply: null,
        airdrop_pool: null,
        dividend_pool: null,
        last_reward_pool: null,

        //display info tab rcentbuy
      }
    },
    created() {
      this.endtime = Date.parse(new Date()) / 1000 + 86400;
      var that = this;
      timeout.timeout(1000, function () {
        that.requestGameInfo();
        var delta = that.endtime - Date.parse(new Date()) / 1000;
        that.countdown = that.formatSeconds(delta);
        return true;
      });

      timeout.timeout(3000, function () {
        that.requestGameInfo();
        return true;
      });
    },
    methods: {
      btnStart() {
        var eossdkutil = window.eossdkutil;
        var that = this;
        eossdkutil.pushEosAction({
          actions: [
            {
              account: "eosjustaward",
              name: "start",
              authorization: [
                {
                  actor: "eosjustaward",
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
              account: "eosjustaward",
              name: "reset",
              authorization: [
                {
                  actor: "eosjustaward",
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
              account: "eosjustaward",
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
            code: 'eosjustaward',
            scope: 'eosjustaward',
            table: 'gameinfo',
            limit: 20
          }
        ).then(function (result) {
          var rows = result.data.rows;
          var len = rows.length;
          var inx = len - 1;
          var gameinfo = rows[inx];
          that.gameinfo = gameinfo;
          that.endtime = that.gameinfo.end_time;
          var bigtotal = Big(gameinfo.total_pool).div(10000).toFixed(4) + " EOS";
          that.totaleos = bigtotal;
          that.last_one = gameinfo.last_one;

          that.supply = gameinfo.supply + " seeds";
          that.airdrop_pool = Big(gameinfo.airdrop_pool).div(10000).toFixed(4) + " EOS";
          that.dividend_pool = Big(gameinfo.dividend_pool).div(10000).toFixed(4) + " EOS";
          that.last_reward_pool = Big(gameinfo.last_reward_pool).div(10000).toFixed(4) + " EOS";

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
          mid = parseInt((st + ed) / 2) ;
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
        var tmp = parseInt(((t_st + t_ed) * (t_ed - t_st + 1)) / 2) ;
        return tmp;
      }
    },watch: {
      buyeos: function (val) {
        var buyEosAmount = parseFloat(val);
        var eosRealAmount=parseInt(buyEosAmount*10000);
        this.maybeBuyAmount=this.get_buy_amount(eosRealAmount,this.gameinfo.supply);
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
