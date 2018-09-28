<template>
  <el-row>


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

    <el-row type="flex" justify="center" align="middle" style="margin-top: 50px;margin-bottom: 50px;padding-left: 5%;padding-right: 5%;">
      <el-col :xs="1" :sm="3" :md="5" :lg="6" :xl="6">
        <div>&nbsp;</div>
      </el-col>
      <el-col :xs="22" :sm="18" :md="14" :lg="12" :xl="12" style="background-color: #f5f5f5;border-radius: 5px;">
        <mu-tabs :value.sync="tab1active" color="#009688" style="border-radius: 5px 5px 0px 0px;" center>
          <mu-tab>买树苗🌱</mu-tab>
          <mu-tab>邀请奖励</mu-tab>
          <mu-tab>游戏数据</mu-tab>
          <mu-tab>玩法说明</mu-tab>
        </mu-tabs>
        <div class="demo-text" v-if="tab1active === 0" style="padding: 20px;">
          <el-row type="flex" justify="center" align="middle">
            <el-col :span="20">
              <el-input placeholder="请输入购买数量" v-model="buyeos">
                <template slot="append">≈{{maybeBuyAmount}} trees</template>
              </el-input>
            </el-col>
          </el-row>
          <el-row type="flex" class="row-bg" justify="space-around" style="padding: 10px;">
            <el-col :span="3">
              <el-button @click="setBuyAmount(buyeos+88)" size="mini" round>88</el-button>
            </el-col>
            <el-col :span="3">
              <el-button @click="setBuyAmount(buyeos+188)" size="mini" round>188</el-button>
            </el-col>
            <el-col :span="3">
              <el-button @click="setBuyAmount(buyeos+588)" size="mini" round>588</el-button>
            </el-col>
            <el-col :span="3">
              <el-button @click="setBuyAmount(buyeos+888)" size="mini" round>888</el-button>
            </el-col>
          </el-row>
          <el-row class="top_margin" type="flex" justify="center" align="middle">
            <el-col :span="20" justify="center" align="middle">
              <mu-button full-width ripple color="secondary" @click="btnBuy">
                Buy
              </mu-button>
            </el-col>
          </el-row>

        </div>
        <div class="demo-text" v-if="tab1active === 1">
          hehe
        </div>
        <div class="demo-text" v-if="tab1active === 2">
          <mu-divider style="margin: 10px;"></mu-divider>
          <el-row>
            <el-col :span="12">
              <div>我的树苗: 12333225</div>
              <div>我的成本: 1003.1324</div>
              <div>可摘柚子:1003.1324</div>
              <div>邀请佣金:1233.0321</div>
              <div>累积收益:1233.0321</div>
            </el-col>
            <el-col :span="12">
              <div>全部树苗:50000000</div>
              <div>总金额:702343.9012</div>
              <div>空投池:1000.0123</div>
              <div>空投概率:10%</div>
              <div>最终大奖:1500.0143</div>
            </el-col>
          </el-row>
          <div></div>
        </div>
        <div class="demo-text" v-if="tab1active === 3">
          hehe
        </div>
      </el-col>
      <el-col :xs="1" :sm="3" :md="5" :lg="6" :xl="6">
        <div>&nbsp;</div>
      </el-col>
    </el-row>

    <el-col :span="24">
      <el-row>
        <el-col :xs="1" :sm="3" :md="5" :lg="6" :xl="7">
          <div>&nbsp;</div>
        </el-col>
        <el-col :xs="22" :sm="18" :md="14" :lg="12" :xl="10">
          <div>
            <MyLand @clickland="onMyLandClick" :data="this.myeostrees"></MyLand>
          </div>

        </el-col>
        <el-col :xs="1" :sm="3" :md="5" :lg="6" :xl="7">
          <div>&nbsp;</div>
        </el-col>
      </el-row>
    </el-col>
    <el-col :span="24">
      <mu-container>
        <mu-bottom-sheet :open.sync="bottomActionOpen">
          <mu-list>
            <mu-list-item button @click="btnBuyDrug">
              <mu-list-item-action>
                <mu-avatar>
                  <img style="width: 100%;height: auto;" src="../assets/a_buydrug.png"/>
                </mu-avatar>
              </mu-list-item-action>
              <mu-list-item-title>watering</mu-list-item-title>
            </mu-list-item>
            <mu-list-item button @click="btnDeleteTree">
              <mu-list-item-action>
                <mu-avatar>
                  <img style="width: 100%;height: auto;" src="../assets/a_remove.png"/>
                </mu-avatar>
              </mu-list-item-action>
              <mu-list-item-title>remove</mu-list-item-title>
            </mu-list-item>
            <mu-list-item button @click="btnWithDrawTree">
              <mu-list-item-action>
                <mu-avatar>
                  <img style="width: 100%;height: auto;" src="../assets/a_withdraw.png"/>
                </mu-avatar>
              </mu-list-item-action>
              <mu-list-item-title>withdraw</mu-list-item-title>
            </mu-list-item>
          </mu-list>
        </mu-bottom-sheet>
      </mu-container>
    </el-col>
    <el-col :span="24">
      <mu-container>
        <mu-dialog title="买树苗" width="90%" :open.sync="buyDialogOpen">
          <el-row type="flex" justify="center" align="middle">
            <el-col :span="20">
              <el-input placeholder="请输入购买数量" v-model="buyeos">
                <template slot="append">≈{{maybeBuyAmount}} trees</template>
              </el-input>
            </el-col>
          </el-row>
          <el-row type="flex" class="row-bg" justify="space-around" style="padding: 10px;">
            <el-col :span="3">
              <el-button @click="setBuyAmount(buyeos+88)" size="mini" round>88</el-button>
            </el-col>
            <el-col :span="3">
              <el-button @click="setBuyAmount(buyeos+188)" size="mini" round>188</el-button>
            </el-col>
            <el-col :span="3">
              <el-button @click="setBuyAmount(buyeos+588)" size="mini" round>588</el-button>
            </el-col>
            <el-col :span="3">
              <el-button @click="setBuyAmount(buyeos+888)" size="mini" round>888</el-button>
            </el-col>
          </el-row>
          <el-row class="top_margin" type="flex" justify="center" align="middle">
            <el-col :span="20" justify="center" align="middle">
              <mu-button full-width ripple color="secondary" @click="btnBuy">
                Buy
              </mu-button>
            </el-col>
          </el-row>
          <mu-button slot="actions" flat color="primary" @click="closeBuyDialog">Close</mu-button>
        </mu-dialog>
      </mu-container>
    </el-col>
  </el-row>


</template>

<script>
  import timeout from 'timeout';
  import bigInt from "big-integer";
  import Big from 'big.js';
  import MyLand from '@/components/MyLand'

  export default {
    name: "eosfarm",
    components: {
      MyLand,
    },
    data() {
      return {
        tab1active: 0,
        bottomActionOpen: false,
        buyDialogOpen:false,
        //tab
        //const info
        farmcontract: "eosjustaward",
        LIFE_ALIVE: 20,
        LIFE_SICK: 18,
        LIFE_DEAD: 16,
        LIFE_VOID: 14,
        //input form
        buyeos: 1,
        selecttree:null,
        //table info
        globalinfo: null,
        gameinfo: null,
        eostrees: null,
        alleostrees: null,
        userinfo: null,
        //display info
        countdown: null,
        totaleos: "1000.0012 EOS",
        endtime: null,
        //display info tab buy
        maybeBuyAmount: null,
        //display info tab widthdraw
        myeostrees: [],
        //display info tab invite
        //display info tab gamestate
        mygameinfo: new Object(),
        //display info tab rcentbuy

      }
    },
    mounted() {
      this.endtime = Date.parse(new Date()) / 1000 + 86400;
      var that = this;
      timeout.timeout(1000, function () {
        let delta = that.endtime - Date.parse(new Date()) / 1000;
        that.countdown = that.formatSeconds(delta);
        that.refreshMyEosTree();
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
      openBotttomSheet() {
        this.bottomActionOpen = true;
      },
      closeBottomSheet() {
        this.selecttree=null;
        this.bottomActionOpen = false;
      },
      openBuyDialog() {
        this.buyDialogOpen = true;
      },
      closeBuyDialog(){
        this.selecttree=null;
        this.buyDialogOpen = false;
      },
      onMyLandClick(eostree) {
        this.selecttree=eostree;
        if(eostree&&eostree.id>-1){
          this.openBotttomSheet();
        }else{
          this.openBuyDialog();
        }
      },
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
        if (!this.selecttree) {
          this.$message("请选择购买的位置");
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
                pos:that.selecttree.pos,
                inviter: "justtest2222"
              }
            }
          ]
        }).then(function (result) {
          that.closeBottomSheet();
          that.closeBuyDialog();
          that.$message({
            message: '购买成功',
            type: 'success'
          });
        }).catch(function (error) {
          that.closeBottomSheet();
          that.closeBuyDialog();
          that.$message({
            message: '购买失败',
            type: 'warning'
          });
        });
      },
      setBuyAmount(amount){
        this.buyeos=amount;
      },
      btnBuyDrug() {
        var eossdkutil = window.eossdkutil;
        var that = this;
        if(!that.selecttree){
          this.$message("请选择操作的位置");
          return;
        }
        if(that.selecttree.id<0){
          this.$message("此位置不可操作");
          return;
        }
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
                treeid: that.selecttree.id,
                user: that.$store.state.eosUserName,
                quantity: "1.0000 EOS"
              }
            }
          ]
        }).then(function (result) {
          that.closeBottomSheet();
          that.closeBuyDialog();
          that.$message("购买成功");
        }).catch(function (error) {
          that.closeBottomSheet();
          that.closeBuyDialog();
          that.$message("购买失败");
        });
      },
      btnDeleteTree() {
        var eossdkutil = window.eossdkutil;
        var that = this;
        if(!that.selecttree){
          this.$message("请选择操作的位置");
          return;
        }
        if(that.selecttree.id<0){
          this.$message("此位置不可操作");
          return;
        }
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
                treeid: that.selecttree.id,
                user: that.$store.state.eosUserName
              }
            }
          ]
        }).then(function (result) {
          that.closeBottomSheet();
          that.closeBuyDialog();
          that.$message("操作成功");
        }).catch(function (error) {
          that.closeBottomSheet();
          that.closeBuyDialog();
          that.$message("操作失败");
        });
      },
      btnWithDrawTree() {
        var eossdkutil = window.eossdkutil;
        var that = this;
        if(!that.selecttree){
          this.$message("请选择操作的位置");
          return;
        }
        if(that.selecttree.id<0){
          this.$message("此位置不可操作");
          return;
        }
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
                treeid: that.selecttree.id,
                all: 0,
                user: that.$store.state.eosUserName
              }
            }
          ]
        }).then(function (result) {
          that.closeBottomSheet();
          that.closeBuyDialog();
          that.$message("操作成功");
        }).catch(function (error) {
          that.closeBottomSheet();
          that.closeBuyDialog();
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
      }, convertChex(chex) {
        chex = chex.substring(2);
        var jhex = "";
        var len = chex.length / 2;
        for (var i = 0; i < len; i++) {
          var j = len - 1 - i;
          var c1 = chex[2 * j];
          var c2 = chex[2 * j + 1];
          jhex = jhex + c1 + c2;
        }
        var bbb = bigInt(jhex, 16);
        // var ccc=bbb.toArray(256);
        // ccc.value.reverse();
        // var ddd=bigInt.fromArray(ccc.value,256,false);
        return bbb;
      }, refreshMyEosTree() {
        var userinfo = this.userinfo;
        var landNum=16;
        if(userinfo){
          landNum=userinfo.land_num;
        }
        this.myeostrees.splice(0,this.myeostrees.length);
        for(var i=0;i<landNum;i++){
          var tmpeostree=new Object();
          tmpeostree.id=-1;
          tmpeostree.pos=i;
          tmpeostree.life_ret=0;
          tmpeostree.eos_amount_show="";
          tmpeostree.income_show="";
          tmpeostree.has_withdraw_show="";
          tmpeostree.tree_amount="";
          this.myeostrees.push(tmpeostree);
        }
        var eostrees = this.eostrees;
        if (!eostrees) {
          return;
        }
        for (var i = 0; i < eostrees.length; i++) {
          if(eostrees[i].life_ret!=this.LIFE_VOID){
            this.calEosTreeShow(eostrees[i]);
            var tmppos=eostrees[i].pos;
            if(tmppos&&tmppos>-1){
              this.myeostrees.splice(tmppos,1,eostrees[i]);
            }
          }
        }
      },
      calEosTreeShow(eostree) {
        eostree.eos_amount_show = (eostree.eos_amount / 10000).toFixed(4);
        eostree.income_show = (eostree.income / 10000).toFixed(4);
        eostree.has_withdraw_show = (eostree.has_withdraw / 10000).toFixed(4);
        var end_time_show = "";
        var end_time = eostree.end_time;
        var life_ret = eostree.life_ret;
        if(life_ret==this.LIFE_SICK){
          if (end_time > 0) {
            var delta = end_time - Date.parse(new Date()) / 1000;
            end_time_show = this.formatSeconds(delta);
          }
        }
        eostree.end_time_show = end_time_show;
      }
    },watch: {
      buyeos: function (val) {
        var buyEosAmount = parseFloat(val);
        var eosRealAmount = parseInt(buyEosAmount * 10000);
        this.maybeBuyAmount = this.get_buy_amount(eosRealAmount, this.gameinfo.supply);
      },
      eostrees: function (val) {

      },
      gameinfo: function (val) {
        var that = this;
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

  .farm-tools {
    left: 0;
    position: fixed;
    bottom: 0;
    width: 100%;
    z-index: 100;
  }
  .p3d-green {
    text-shadow: rgb(43, 0, 43) 0px 0px 5px, rgb(0, 204, 0) 0px 0px 20px, rgb(0, 255, 0) 0px 0px 10px;
    font-size: 2.4em;
    color: white;
  }

  .p3d-purple {
    text-shadow: rgb(43, 0, 43) 0px 0px 5px, rgb(204, 0, 204) 0px 0px 20px, rgb(255, 0, 255) 0px 0px 10px;
    font-size: 2.4em;
    color: white;
  }

</style>
