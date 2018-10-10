<template>
  <el-row>
    <el-row type="flex" justify="center" align="middle" style="margin-top: 50px;">
      <el-col :span="8"></el-col>
      <el-col :span="8" justify="center" align="middle">
        <div class="p3d-green farm-title-size">{{countdown+""}}</div>
      </el-col>
      <el-col :span="8"></el-col>
    </el-row>
    <el-row type="flex" justify="center" align="middle">
      <el-col :span="8"></el-col>
      <el-col :span="8" justify="center" align="middle">
        <div class="p3d-green farm-title-size">{{totaleos}}</div>
      </el-col>
      <el-col :span="8"></el-col>
    </el-row>
    <el-row type="flex" justify="center" align="middle">
      <el-col :xs="1" :sm="3" :md="5" :lg="6" :xl="7">
      </el-col>
      <el-col :xs="22" :sm="18" :md="14" :lg="12" :xl="10">
        <el-progress :text-inside="true" :color="airdropcolor" :stroke-width="18" :percentage="airdropperc" status="success"></el-progress>
      </el-col>
      <el-col :xs="1" :sm="3" :md="5" :lg="6" :xl="7">
      </el-col>
    </el-row>
    <el-row type="flex" justify="center" align="middle">
      <el-col :xs="1" :sm="3" :md="5" :lg="6" :xl="7">
      </el-col>
      <el-col :xs="11" :sm="9" :md="7" :lg="6" :xl="5">
        <div class="p3d-green farm-title2-size" >{{needairdrop}}EOS</div>
      </el-col>
      <el-col :xs="11" :sm="9" :md="7" :lg="6" :xl="5">
        <div class="p3d-green farm-title2-size" style="text-align: right">{{mayairdrop_min}}~{{mayairdrop_max}}EOS</div>
      </el-col>
      <el-col :xs="1" :sm="3" :md="5" :lg="6" :xl="7">
      </el-col>
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
        <mu-button ripple color="primary" @click="btnFinish">
          finish
        </mu-button>
        <mu-button ripple color="primary" @click="btnCheck">
          check
        </mu-button>
      </el-col>
      <el-col :span="8"></el-col>
    </el-row>
    <el-row type="flex" justify="center" align="middle"
            style="margin-top: 50px;margin-bottom: 50px;padding-left: 5%;padding-right: 5%;">
      <el-col :xs="1" :sm="3" :md="5" :lg="6" :xl="6">
        <div>&nbsp;</div>
      </el-col>
      <el-col :xs="22" :sm="18" :md="14" :lg="12" :xl="12" style="background-color: #f5f5f5;border-radius: 5px;">
        <mu-tabs :value.sync="tab1active" color="#009688" style="border-radius: 5px 5px 0px 0px;" center>
          <!--<mu-tab>买树苗</mu-tab>-->
          <mu-tab>统计信息</mu-tab>
          <mu-tab>玩法说明</mu-tab>
        </mu-tabs>
        <div class="demo-text" v-if="tab1active === 0">
          <el-row>
            <el-col :span="24">
              <mu-list toggle-nested >
                <mu-sub-header>个人数据</mu-sub-header>
                <mu-list-item button>
                  <mu-list-item-action>
                    <icon name="tree3" scale="3"></icon>
                  </mu-list-item-action>
                  <mu-list-item-sub-title>树苗数量:{{myplayerinfo.tree_amount}}</mu-list-item-sub-title>
                </mu-list-item>
                <mu-list-item button>
                  <mu-list-item-action>
                    <icon name="wallet" scale="3"></icon>
                  </mu-list-item-action>
                  <mu-list-item-content>
                    <mu-list-item-sub-title>可提现:{{myplayerinfo.income_total}}</mu-list-item-sub-title>
                    <mu-list-item-sub-title>已提现:{{myplayerinfo.income_total_with}}</mu-list-item-sub-title>
                  </mu-list-item-content>
                </mu-list-item>
                <mu-list-item button :ripple="false" nested :open="infoDetailOpen === 'player_detail'"
                              @toggle-nested="infoDetailOpen = arguments[0] ? 'player_detail' : ''">
                  <mu-list-item-sub-title>详情</mu-list-item-sub-title>
                  <mu-list-item-action>
                    <mu-icon class="toggle-icon" size="24" value="keyboard_arrow_down"></mu-icon>
                  </mu-list-item-action>
                  <mu-list-item button :ripple="false" slot="nested">
                    <mu-list-item-content>
                      <mu-list-item-sub-title>EOS余额:{{myEosAmount}}</mu-list-item-sub-title>
                      <mu-list-item-sub-title>JUST余额:{{myJustAmount}}</mu-list-item-sub-title>
                    </mu-list-item-content>
                    <mu-list-item-content>
                      <mu-list-item-sub-title>树苗可提:{{myplayerinfo.income_tree}}</mu-list-item-sub-title>
                      <mu-list-item-sub-title>树苗已提:{{myplayerinfo.income_tree_with}}</mu-list-item-sub-title>
                    </mu-list-item-content>
                  </mu-list-item>
                  <mu-list-item button :ripple="false" slot="nested">
                    <mu-list-item-content>
                      <mu-list-item-sub-title>空投可提:{{myplayerinfo.income_airdrop}}</mu-list-item-sub-title>
                      <mu-list-item-sub-title>空投已提:{{myplayerinfo.income_airdrop_with}}</mu-list-item-sub-title>
                    </mu-list-item-content>
                    <mu-list-item-content>
                      <mu-list-item-sub-title>邀请可提:{{myplayerinfo.income_invited}}</mu-list-item-sub-title>
                      <mu-list-item-sub-title>邀请已提:{{myplayerinfo.income_invited_with}}</mu-list-item-sub-title>
                    </mu-list-item-content>
                  </mu-list-item>
                  <mu-list-item button :ripple="false" slot="nested">
                    <mu-list-item-content>
                      <mu-list-item-sub-title>股东可提:{{myplayerinfo.income_share}}</mu-list-item-sub-title>
                      <mu-list-item-sub-title>股东已提:{{myplayerinfo.income_share_with}}</mu-list-item-sub-title>
                    </mu-list-item-content>
                    <mu-list-item-content>
                      <mu-list-item-sub-title>最终大奖:{{myplayerinfo.income_award}}</mu-list-item-sub-title>
                      <mu-list-item-sub-title>大奖已提:{{myplayerinfo.income_award_with}}</mu-list-item-sub-title>
                    </mu-list-item-content>
                  </mu-list-item>
                </mu-list-item>
              </mu-list>
              <mu-divider></mu-divider>
              <mu-list toggle-nested >
                <mu-sub-header>游戏数据</mu-sub-header>
                <mu-list-item button>
                  <mu-list-item-action>
                    <icon name="tree3" scale="3"></icon>
                  </mu-list-item-action>
                  <mu-list-item-sub-title>树苗数量:{{mygameinfo.supply}}</mu-list-item-sub-title>
                </mu-list-item>
                <mu-list-item button>
                  <mu-list-item-action>
                    <icon name="airdrop" scale="3"></icon>
                  </mu-list-item-action>
                  <mu-list-item-sub-title>空投奖池:{{mygameinfo.airdrop_pool}}</mu-list-item-sub-title>
                </mu-list-item>
                <mu-list-item button>
                  <mu-list-item-action>
                    <icon name="gift" scale="3"></icon>
                  </mu-list-item-action>
                  <mu-list-item-sub-title>最终奖池:{{mygameinfo.last_reward_pool}}</mu-list-item-sub-title>
                </mu-list-item>
                <mu-list-item button>
                  <mu-list-item-action>
                    <icon name="vip" scale="3"></icon>
                  </mu-list-item-action>
                  <mu-list-item-sub-title>最终赢家:{{mygameinfo.last_one}}</mu-list-item-sub-title>
                </mu-list-item>
                <mu-list-item button>
                  <mu-list-item-action>
                    <icon name="bglass" scale="3"></icon>
                  </mu-list-item-action>
                  <mu-list-item-sub-title>下轮股东:{{mygameinfo.share_user}}</mu-list-item-sub-title>
                </mu-list-item>
                <mu-list-item button :ripple="false" nested :open="infoDetailOpen === 'game_detail'"
                              @toggle-nested="infoDetailOpen = arguments[0] ? 'game_detail' : ''">
                  <mu-list-item-sub-title>详情</mu-list-item-sub-title>
                  <mu-list-item-action>
                    <mu-icon class="toggle-icon" size="24" value="keyboard_arrow_down"></mu-icon>
                  </mu-list-item-action>
                  <mu-list-item button :ripple="false" slot="nested">
                    <mu-list-item-sub-title>树苗收益:</mu-list-item-sub-title>
                  </mu-list-item>
                  <mu-list-item button :ripple="false" slot="nested">
                    <mu-list-item-sub-title>List Item 2</mu-list-item-sub-title>
                  </mu-list-item>
                  <mu-list-item button :ripple="false" slot="nested">
                    <mu-list-item-sub-title>List Item 3</mu-list-item-sub-title>
                  </mu-list-item>
                </mu-list-item>
              </mu-list>

            </el-col>
          </el-row>
        </div>
        <div class="demo-text" v-if="tab1active === 1">
          <el-row type="flex" class="row-bg" justify="space-around">
            <el-col :span="6">
              <mu-button @click="btnChkMyTree">更新收益</mu-button>
            </el-col>
            <el-col :span="6">
              <mu-button @click="btnWithdrawAward">提现奖励</mu-button>
            </el-col>
            <el-col :span="6">
              <mu-button @click="btnWithDrawTree(1)">提现柚子</mu-button>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <div>我的EOS: {{myEosAmount}}</div>
              <div>我的JUST: {{myJustAmount}}</div>
              <div>我的树苗: {{myplayerinfo.tree_amount}}</div>
              <div>我的成本:</div>
              <div>收益同步: {{myplayerinfo.income_inx}}</div>
              <div>树苗收益: {{myplayerinfo.income_tree}}</div>
              <div>树苗已提现: {{myplayerinfo.income_tree_with}}</div>
              <div>空投收益: {{myplayerinfo.income_airdrop}}</div>
              <div>空投已提现: {{myplayerinfo.income_airdrop_with}}</div>
              <div>邀请奖励: {{myplayerinfo.income_invited}}</div>
              <div>邀请已提现: {{myplayerinfo.income_invited_with}}</div>
              <div>最终大奖: {{myplayerinfo.income_award}}</div>
              <div>最终大奖已提现: {{myplayerinfo.income_award_with}}</div>
              <div>股东收益: {{myplayerinfo.income_share}}</div>
              <div>股东收益提现: {{myplayerinfo.income_share_with}}</div>
            </el-col>
            <el-col :span="12">
              <div>全部树苗:{{mygameinfo.supply}}</div>
              <div>已开垦:{{mygameinfo.tree_id}}</div>
              <div>总金额:{{mygameinfo.total_pool}}</div>
              <div>最后赢家:{{mygameinfo.last_one}}</div>
              <div>下轮股东:{{mygameinfo.share_user}}</div>
              <div>空投池:{{mygameinfo.airdrop_pool}}</div>
              <div>最终大奖:{{mygameinfo.last_reward_pool}}</div>
              <div>开发分成:{{mygameinfo.dev_pool}}</div>
              <div>分红累积:{{mygameinfo.dividend_pool}}</div>
            </el-col>
          </el-row>
          <div></div>
        </div>
      </el-col>
      <el-col :xs="1" :sm="3" :md="5" :lg="6" :xl="6">
        <div>&nbsp;</div>
      </el-col>
    </el-row>

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

    <el-row>
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
                <mu-list-item-sub-title>watering</mu-list-item-sub-title>
              </mu-list-item>
              <mu-list-item button @click="btnDeleteTree">
                <mu-list-item-action>
                  <mu-avatar>
                    <img style="width: 100%;height: auto;" src="../assets/a_remove.png"/>
                  </mu-avatar>
                </mu-list-item-action>
                <mu-list-item-sub-title>remove</mu-list-item-sub-title>
              </mu-list-item>
              <mu-list-item button @click="btnWithDrawTree(0)">
                <mu-list-item-action>
                  <mu-avatar>
                    <img style="width: 100%;height: auto;" src="../assets/a_withdraw.png"/>
                  </mu-avatar>
                </mu-list-item-action>
                <mu-list-item-sub-title>withdraw</mu-list-item-sub-title>
              </mu-list-item>
            </mu-list>
          </mu-bottom-sheet>
        </mu-container>
      </el-col>
    </el-row>

    <el-col :span="10">
      <mu-container>
        <mu-dialog title="买树苗" :width="$store.state.ismobile?'90%':'60%'" :open.sync="buyDialogOpen">
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
        buyDialogOpen: false,
        timerLoop: true,
        infoDetailOpen:'',
        inviterName:"",
        //tab
        //const info
        farmcontract: "eosjustaward",
        eostokencontract: "eosio.token",
        justtokencontract: "eosjusttoken",
        LIFE_ALIVE: 20,
        LIFE_SICK: 18,
        LIFE_DEAD: 16,
        LIFE_VOID: 14,

        GAME_INIT: 2,
        GAME_START: 4,
        GAME_CHK: 6,
        GAME_DEL: 8,
        GAME_END: 10,
        //input form
        buyeos: 1,
        selecttree: null,
        //table info
        globalinfo: null,
        gameinfo: null,
        eostrees: null,
        alleostrees: null,
        playerinfo: null,
        //display info
        countdown: null,
        totaleos: "0.0000 EOS",
        airdropcolor:"rgba(142, 113, 199, 0.7)",
        airdropperc:0,
        needairdrop: "0",
        mayairdrop_min: "0",
        mayairdrop_max: "0",
        //display info tab buy
        maybeBuyAmount: null,
        //display info tab widthdraw
        myeostrees: [],
        //display info tab invite
        //display info tab gamestate
        mygameinfo: new Object(),
        //display info tab rcentbuy
        myplayerinfo: new Object(),
        myEosAmount: "",
        myJustAmount: "",

      }
    },
    created() {
      this.timerLoop = true;
      var cacheEosTree = this.$store.state.myEostreesCache;
      if (cacheEosTree && cacheEosTree.length > 0) {
        this.myeostrees = cacheEosTree;
      }

    },
    mounted() {
      var that = this;
      that.timerLoop = true;
      if(that.$route.query.ref){
        that.inviterName=that.$route.query.ref;
      }else{
        that.inviterName="";
      }
      console.log("inviter:"+that.inviterName);

      timeout.timeout(1000, function () {
        if (that.mygameinfo && that.mygameinfo.game_state == that.GAME_START) {
          let delta = that.mygameinfo.end_time - Date.parse(new Date()) / 1000;
          that.countdown = that.formatSeconds(delta);

        } else if (that.mygameinfo.game_state == that.GAME_INIT) {
          that.countdown = that.formatSeconds(86400);
        } else {
          that.countdown = that.formatSeconds(0);
        }
        that.refreshMyEosTree();
        return that.timerLoop;
      });

      timeout.timeout(3000, function () {
        that.requestGameInfo();
        that.requestPlayerInfo();
        that.requestEosTreeInfo();
        that.requestAllEosTreeInfo();
        that.requestMyEosAmount();
        that.requestMyJustAmount();
        return that.timerLoop;
      });
      that.requestGameInfo();
    },
    destroyed: function () {
      this.timerLoop = false;
      if (this.myeostrees.length > 0) {
        this.$store.commit('changeMyEosTree', this.myeostrees);
      }
    },
    methods: {
      openBotttomSheet() {
        this.bottomActionOpen = true;
      },
      closeBottomSheet() {
        this.selecttree = null;
        this.bottomActionOpen = false;
      },
      openBuyDialog() {
        this.buyDialogOpen = true;
      },
      closeBuyDialog() {
        this.selecttree = null;
        this.buyDialogOpen = false;
      },
      onMyLandClick(eostree) {
        this.selecttree = eostree;
        if (eostree && eostree.id > -1) {
          this.openBotttomSheet();
        } else {
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
      btnFinish() {
        var eossdkutil = window.eossdkutil;
        var that = this;
        eossdkutil.pushEosAction({
          actions: [
            {
              account: that.farmcontract,
              name: "finish",
              authorization: [
                {
                  actor: that.$store.state.eosUserName,
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
      btnCheck() {
        var eossdkutil = window.eossdkutil;
        var that = this;
        eossdkutil.pushEosAction({
          actions: [
            {
              account: that.farmcontract,
              name: "chkalltree",
              authorization: [
                {
                  actor: that.$store.state.eosUserName,
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
              account: that.eostokencontract,
              name: "transfer",
              authorization: [
                {
                  actor: that.$store.state.eosUserName,
                  permission: "active"
                }
              ],
              data: {
                from: that.$store.state.eosUserName,
                to: that.farmcontract,
                quantity: Big(that.buyeos).toFixed(4) + " EOS",
                memo: "buytree:" + that.selecttree.pos + ";" + that.inviterName+";",
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
      setBuyAmount(amount) {
        this.buyeos = amount;
      },
      btnBuyDrug() {
        var eossdkutil = window.eossdkutil;
        var that = this;
        if (!that.selecttree) {
          this.$message("请选择操作的位置");
          return;
        }
        if (that.selecttree.id < 0) {
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
                  actor: that.$store.state.eosUserName,
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
        if (!that.selecttree) {
          this.$message("请选择操作的位置");
          return;
        }
        if (that.selecttree.id < 0) {
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
                  actor: that.$store.state.eosUserName,
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
      btnWithdrawAward() {
        var eossdkutil = window.eossdkutil;
        var that = this;
        eossdkutil.pushEosAction({
          actions: [
            {
              account: that.farmcontract,
              name: "withdraw2",
              authorization: [
                {
                  actor: that.$store.state.eosUserName,
                  permission: "active"
                }
              ],
              data: {
                user: that.$store.state.eosUserName,
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
      btnWithDrawTree(all) {
        var eossdkutil = window.eossdkutil;
        var that = this;
        var selectId = 0;
        if (all == 0) {
          if (!that.selecttree) {
            this.$message("请选择操作的位置");
            return;
          }
          if (that.selecttree.id < 0) {
            this.$message("此位置不可操作");
            return;
          }
          selectId = that.selecttree.id;
        }
        eossdkutil.pushEosAction({
          actions: [
            {
              account: that.farmcontract,
              name: "withdraw",
              authorization: [
                {
                  actor: that.$store.state.eosUserName,
                  permission: "active"
                }
              ],
              data: {
                treeid: selectId,
                all: all,
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
      btnChkMyTree() {
        var eossdkutil = window.eossdkutil;
        var that = this;
        eossdkutil.pushEosAction({
          actions: [
            {
              account: that.farmcontract,
              name: "chkmytree",
              authorization: [
                {
                  actor: that.$store.state.eosUserName,
                  permission: "active"
                }
              ],
              data: {
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
      btnChkAllTree() {
        var eossdkutil = window.eossdkutil;
        var that = this;
        eossdkutil.pushEosAction({
          actions: [
            {
              account: that.farmcontract,
              name: "chkalltree",
              authorization: [
                {
                  actor: that.$store.state.eosUserName,
                  permission: "active"
                }
              ],
              data: {}
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
      requestPlayerInfo() {
        var that = this;
        var eossdkutil = window.eossdkutil;
        eossdkutil.getEosTableRows(
          {
            json: true,
            code: that.farmcontract,
            scope: that.farmcontract,
            lower_bound: that.$store.state.eosUserName,
            table: 'playerinfo',
            limit: 1
          }
        ).then(function (result) {
          var rows = result.data.rows;
          var len = rows.length;
          var inx = len - 1;
          var playerinfo = rows[inx];
          that.playerinfo = playerinfo;
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
      requestMyEosAmount() {
        var that = this;
        var eossdkutil = window.eossdkutil;
        eossdkutil.getEosTableRows(
          {
            json: true,
            code: that.eostokencontract,
            scope: that.$store.state.eosUserName,
            table: 'accounts',
            limit: 20
          }
        ).then(function (result) {
          var rows = result.data.rows;
          var len = rows.length;
          var inx = len - 1;
          var accounts = rows[inx];
          that.myEosAmount = accounts.balance;
        }).catch(function (error) {

        });
      },
      requestMyJustAmount() {
        var that = this;
        var eossdkutil = window.eossdkutil;
        eossdkutil.getEosTableRows(
          {
            json: true,
            code: that.justtokencontract,
            scope: that.$store.state.eosUserName,
            table: 'accounts',
            limit: 20
          }
        ).then(function (result) {
          var rows = result.data.rows;
          var len = rows.length;
          var inx = len - 1;
          var accounts = rows[inx];
          that.myJustAmount = accounts.balance;
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
        var playerinfo = this.playerinfo;
        var landNum = 16;
        if (playerinfo) {
          landNum = playerinfo.land_num;
        }
        this.myeostrees.splice(0, this.myeostrees.length);
        for (var i = 0; i < landNum; i++) {
          var tmpeostree = new Object();
          tmpeostree.id = -1;
          tmpeostree.pos = i;
          tmpeostree.life_ret = 0;
          tmpeostree.eos_amount_show = "";
          tmpeostree.income_show = "";
          tmpeostree.has_withdraw_show = "";
          tmpeostree.tree_amount = "";
          this.myeostrees.push(tmpeostree);
        }
        var eostrees = this.eostrees;
        if (!eostrees) {
          return;
        }
        for (var i = 0; i < eostrees.length; i++) {
          if (eostrees[i].life_ret != this.LIFE_VOID) {
            this.calEosTreeShow(eostrees[i]);
            var tmppos = eostrees[i].pos;
            if (tmppos != undefined && tmppos > -1) {
              this.myeostrees.splice(tmppos, 1, eostrees[i]);
            }
          }
        }

      },
      calEosTreeShow(eostree) {
        eostree.eos_amount_show = (eostree.eos_amount / 10000).toFixed(4);
        eostree.income_show = ((eostree.income - eostree.has_withdraw) / 10000).toFixed(4);
        eostree.has_withdraw_show = (eostree.has_withdraw / 10000).toFixed(4);
        var end_time_show = "";
        var end_time = eostree.end_time;
        var life_ret = eostree.life_ret;
        if (life_ret == this.LIFE_SICK) {
          if (end_time > 0) {
            var delta = end_time - Date.parse(new Date()) / 1000;
            end_time_show = this.formatSeconds(delta);
          }
        }
        eostree.end_time_show = end_time_show;
      }
    }, watch: {
      buyeos: function (val) {
        var buyEosAmount = parseFloat(val);
        var eosRealAmount = parseInt(buyEosAmount * 10000);
        this.maybeBuyAmount = this.get_buy_amount(eosRealAmount, this.gameinfo.supply);
      },
      eostrees: function (val) {

      },
      gameinfo: function (val) {
        var that = this;
        that.totaleos = Big(val.total_pool).div(10000).toFixed(4) + " EOS";
        that.mygameinfo.tree_id = val.tree_id;
        that.mygameinfo.end_time = val.end_time;
        that.mygameinfo.last_one = val.last_one;
        that.mygameinfo.share_user = val.share_user;
        that.mygameinfo.supply = val.supply;
        that.mygameinfo.airdrop_pool = Big(val.airdrop_pool).div(10000).toFixed(4) + " EOS";
        that.mygameinfo.last_reward_pool = Big(val.last_reward_pool).div(10000).toFixed(4) + " EOS";
        that.mygameinfo.total_pool = Big(val.total_pool).div(10000).toFixed(4) + " EOS";
        var airdrop1=(val.total_pool/10000)%1000;
        that.airdropperc=parseInt(airdrop1/10);
        that.needairdrop=(1000-airdrop1).toFixed(2);
        var expAirDropPool=(val.airdrop_pool/10000)+that.needairdrop/10;
          that.mayairdrop_min=(expAirDropPool*0.04).toFixed(2);
          that.mayairdrop_max=(expAirDropPool*0.12).toFixed(2);
        that.airdropcolor="rgba("+50+", "+200+", 0, 1)";
        if(that.airdropperc>0&&that.airdropperc<50){
          that.airdropcolor="rgba("+(50+that.airdropperc*4)+", "+200+", 0, 1)";
        }else{
          that.airdropcolor="rgba("+250+", "+(400-that.airdropperc*4)+", 0, 1)";
        }

        console.log(that.airdropperc);
        that.mygameinfo.dev_pool = Big(val.dev_pool).div(10000).toFixed(4) + " EOS";
        that.mygameinfo.dividend_pool = Big(val.dividend_pool).div(10000).toFixed(4) + " EOS";
        that.mygameinfo.game_state = val.game_state;
      }, playerinfo: function (val) {
        var that = this;
        that.myplayerinfo.tree_amount = val.tree_amount;
        that.myplayerinfo.income_inx = val.income_inx;
        that.myplayerinfo.income_tree = Big(val.income_tree-val.income_tree_with).div(10000).toFixed(4);
        that.myplayerinfo.income_tree_with = Big(val.income_tree_with).div(10000).toFixed(4);
        that.myplayerinfo.income_airdrop = Big(val.income_airdrop-val.income_airdrop_with).div(10000).toFixed(4);
        that.myplayerinfo.income_airdrop_with = Big(val.income_airdrop_with).div(10000).toFixed(4);
        that.myplayerinfo.income_invited = Big(val.income_invited-val.income_invited_with).div(10000).toFixed(4);
        that.myplayerinfo.income_invited_with = Big(val.income_invited_with).div(10000).toFixed(4);
        that.myplayerinfo.income_award = Big(val.income_award-val.income_award_with).div(10000).toFixed(4);
        that.myplayerinfo.income_award_with = Big(val.income_award_with).div(10000).toFixed(4);
        that.myplayerinfo.income_share = Big(val.income_share-val.income_share_with).div(10000).toFixed(4);
        that.myplayerinfo.income_share_with = Big(val.income_share_with).div(10000).toFixed(4);
        //
        that.myplayerinfo.income_total_1=Big(val.income_tree).add(val.income_airdrop)
          .add(val.income_invited).add(val.income_award).add(val.income_share).div(10000);
        that.myplayerinfo.income_total_2=Big(val.income_tree_with).add(val.income_airdrop_with)
          .add(val.income_invited_with).add(val.income_award_with).add(val.income_share_with).div(10000);
        that.myplayerinfo.income_total=that.myplayerinfo.income_total_1.minus(that.myplayerinfo.income_total_2).toFixed(4);
        that.myplayerinfo.income_total_with=that.myplayerinfo.income_total_2.toFixed(4);
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

  .farm-title-size {
    font-size: 2.4em;
  }

  .farm-title2-size {
    font-size: 1.6em;
  }

  .p3d-green {
    text-shadow: rgb(43, 0, 43) 0px 0px 5px, rgb(0, 204, 0) 0px 0px 20px, rgb(0, 255, 0) 0px 0px 10px;
    color: white;
  }

  .p3d-purple {
    text-shadow: rgb(43, 0, 43) 0px 0px 5px, rgb(204, 0, 204) 0px 0px 20px, rgb(255, 0, 255) 0px 0px 10px;
    color: white;
  }

</style>
