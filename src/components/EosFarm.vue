<template>
  <el-row>


    <el-row type="flex" justify="center" align="middle" style="margin-top: 50px;">
      <el-col :span="4"></el-col>
      <el-col :span="16" justify="center" align="middle">
        <el-alert
          title=""
          type="success">
          <div>公告</div>
          <div style="text-align: center">所有补偿已经发放完毕，合约即将关闭，夺宝争霸周日晚八点上线</div>
          <div></div>
        </el-alert>
        <br/>
        <br/>


      </el-col>
      <el-col :span="4"></el-col>
    </el-row>



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
        <div class="p3d-green farm-title-size">{{last_reward_pool}}</div>
      </el-col>
      <el-col :span="8"></el-col>
    </el-row>
    <el-row type="flex" justify="center" align="middle">
      <el-col :xs="1" :sm="3" :md="5" :lg="6" :xl="7">
      </el-col>
      <el-col :xs="22" :sm="18" :md="14" :lg="12" :xl="10">
        <el-progress :text-inside="true" :color="airdropcolor" :stroke-width="18" :percentage="airdropperc"
                     status="success"></el-progress>
      </el-col>
      <el-col :xs="1" :sm="3" :md="5" :lg="6" :xl="7">
      </el-col>
    </el-row>
    <el-row type="flex" justify="center" align="middle">
      <el-col :xs="1" :sm="3" :md="5" :lg="6" :xl="7">
      </el-col>
      <el-col :xs="11" :sm="9" :md="7" :lg="6" :xl="5">
        <div class="p3d-green farm-title3-size">{{$t('eosfarm.need')}}</div>
      </el-col>
      <el-col :xs="11" :sm="9" :md="7" :lg="6" :xl="5">
        <div class="p3d-green farm-title3-size" style="text-align: right">{{$t('eosfarm.award')}}:{{mayairdrop_min}}~{{mayairdrop_max}}EOS</div>
      </el-col>
      <el-col :xs="1" :sm="3" :md="5" :lg="6" :xl="7">
      </el-col>
    </el-row>





    <el-row type="flex" justify="center" align="middle"
            style="margin-top: 50px;margin-bottom: 50px;padding-left: 5%;padding-right: 5%;">
      <el-col :xs="1" :sm="3" :md="5" :lg="6" :xl="6">
        <div>&nbsp;</div>
      </el-col>
      <el-col :xs="22" :sm="18" :md="14" :lg="12" :xl="12" style="background-color: #f5f5f5;border-radius: 5px;">
        <mu-tabs :value.sync="tabBuyActive" color="#009688" style="border-radius: 5px 5px 0px 0px;" center>
          <mu-tab>{{$t('eosfarm.buytree')}}</mu-tab>
          <mu-tab>{{$t('eosfarm.watchother')}}</mu-tab>
          <!--<mu-tab>回收站</mu-tab>-->
        </mu-tabs>
        <div style="padding: 20px;" class="demo-text" v-if="tabBuyActive === 0">
          <el-row type="flex" justify="center" align="middle">
            <el-col :span="20">
              <el-input placeholder="请输入EOS数量" v-model="buyeos">
                <template slot="append">≈{{maybeBuyAmount}} trees</template>
              </el-input>
            </el-col>
          </el-row>
          <el-row type="flex" class="row-bg" justify="space-around" style="padding: 0px 10px 0px 10px;">
            <el-col :span="20">
              <div class="text-gray">1 tree = {{treePrice}} EOS</div>
            </el-col>
          </el-row>
          <el-row type="flex" class="row-bg" justify="space-around" style="padding: 0 10px 20px 10px;">
            <el-col :span="3">
              <el-button @click="setBuyAmount(18)" size="mini" round>18</el-button>
            </el-col>
            <el-col :span="3">
              <el-button @click="setBuyAmount(28)" size="mini" round>28</el-button>
            </el-col>
            <el-col :span="3">
              <el-button @click="setBuyAmount(88)" size="mini" round>88</el-button>
            </el-col>
            <el-col :span="3">
              <el-button @click="setBuyAmount(188)" size="mini" round>188</el-button>
            </el-col>
          </el-row>

          <el-row class="top_margin" type="flex" justify="center" align="middle">
            <el-col :span="20" justify="center" align="middle">
              <mu-button full-width ripple color="secondary" @click="btnBuy">
                {{$t('eosfarm.buy')}}
              </mu-button>
            </el-col>
          </el-row>
        </div>
        <div style="padding: 20px;" class="demo-text" v-if="tabBuyActive === 1">
          <el-row type="flex" justify="center" align="middle">
            <el-col :span="20">
              <el-autocomplete
                style="width: 100%"
                v-model="inputSwitchUser"
                :placeholder="$t('eosfarm.askinputacnt')"
                :fetch-suggestions="queryEosAccount"
                @select="setSwitchUser">
              </el-autocomplete>
            </el-col>
          </el-row>
          <el-row style="margin-top: 20px;" type="flex" justify="center" align="middle">
            <el-col :span="7" justify="center" align="middle">
              <mu-button full-width ripple color="secondary" @click="btnSwitchUser">
                {{$t('eosfarm.watchhim')}}
              </mu-button>
            </el-col>
            <el-col :span="6" justify="center" align="middle">
            </el-col>
            <el-col :span="7" justify="center" align="middle">
              <mu-button full-width ripple color="secondary" @click="btnResetSwitchUser">
                {{$t('eosfarm.backme')}}
              </mu-button>
            </el-col>
          </el-row>
        </div>
      </el-col>
      <el-col :xs="1" :sm="3" :md="5" :lg="6" :xl="6">
        <div>&nbsp;</div>
      </el-col>
    </el-row>

    <el-row type="flex" justify="center" align="middle" v-show="false">
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
          <mu-tab>{{$t('eosfarm.summary')}}</mu-tab>
          <mu-tab>{{$t('eosfarm.howtoplay')}}</mu-tab>
          <mu-tab>{{$t('eosfarm.ranklist')}}</mu-tab>
        </mu-tabs>
        <div class="demo-text" v-if="tab1active === 0">
          <el-row>
            <el-col :span="24">
              <mu-list toggle-nested>
                <mu-sub-header>{{$t('eosfarm.userdata')}}</mu-sub-header>
                <mu-list-item button>
                  <mu-list-item-action>
                    <icon name="tree3" scale="3"></icon>
                  </mu-list-item-action>
                  <mu-list-item-content>
                    <mu-list-item-sub-title>{{$t('eosfarm.treeamount')}}:{{myplayerinfo.tree_amount}}</mu-list-item-sub-title>
                    <mu-list-item-sub-title>{{$t('eosfarm.incomesync')}}:{{myplayerinfo.income_sync}}</mu-list-item-sub-title>
                  </mu-list-item-content>
                  <mu-list-item-action>
                    <mu-button small flat color="pink" @click="openBuyDialog">
                      {{$t('eosfarm.buy')}}
                    </mu-button>
                  </mu-list-item-action>
                </mu-list-item>
                <mu-list-item button>
                  <mu-list-item-action>
                    <icon name="wallet2" scale="3"></icon>
                  </mu-list-item-action>
                  <mu-list-item-content>
                    <mu-list-item-sub-title>{{$t('eosfarm.canwith')}}:{{myplayerinfo.income_total}}</mu-list-item-sub-title>
                    <mu-list-item-sub-title>{{$t('eosfarm.haswith')}}:{{myplayerinfo.income_total_with}}</mu-list-item-sub-title>
                  </mu-list-item-content>
                  <mu-list-item-action >
                    <!--<mu-button icon color="primary">-->
                      <!--<mu-icon value="grade"></mu-icon>-->
                    <!--</mu-button>-->
                    <mu-button icon small color="pink" @click="btnChkMyTree">
                      <mu-icon value="sync"></mu-icon>
                    </mu-button>
                  </mu-list-item-action>
                  <mu-list-item-action>
                    <mu-button small flat color="pink" @click="btnWithdrawAll">
                      {{$t('eosfarm.withdraw')}}
                    </mu-button>
                  </mu-list-item-action>
                </mu-list-item>
                <mu-list-item button>
                  <mu-list-item-action>
                    <icon name="wallet" scale="3"></icon>
                  </mu-list-item-action>
                  <mu-list-item-content>
                    <mu-list-item-sub-title>{{$t('eosfarm.eosbalance')}}:{{myEosAmount}}</mu-list-item-sub-title>
                    <mu-list-item-sub-title>{{$t('eosfarm.justbalance')}}:{{myJustAmount}}</mu-list-item-sub-title>
                  </mu-list-item-content>
                  <mu-list-item-action>
                    <mu-button small flat color="pink" @click="btnOpenEosflare">
                      {{$t('eosfarm.view')}}
                    </mu-button>
                  </mu-list-item-action>
                </mu-list-item>
                <mu-list-item button>
                  <mu-list-item-action>
                    <icon name="share" scale="3"></icon>
                  </mu-list-item-action>
                  <mu-list-item-content>
                    <mu-list-item-sub-title>{{$t('eosfarm.reflink')}}:</mu-list-item-sub-title>
                    <mu-list-item-sub-title>{{myplayerinfo.share_url}}</mu-list-item-sub-title>
                  </mu-list-item-content>
                  <mu-list-item-action>
                    <mu-button small flat color="pink" @click="copyShareUrl">
                      {{$t('eosfarm.copy')}}
                    </mu-button>
                  </mu-list-item-action>
                </mu-list-item>
                <mu-list-item button nested :open="infoDetailOpen === 'player_detail'"
                              @toggle-nested="infoDetailOpen = arguments[0] ? 'player_detail' : ''">
                  <mu-list-item-sub-title>{{$t('eosfarm.detail')}}</mu-list-item-sub-title>
                  <mu-list-item-action>
                    <mu-icon class="toggle-icon" size="24" value="keyboard_arrow_down"></mu-icon>
                  </mu-list-item-action>
                  <mu-list-item button slot="nested">
                    <mu-list-item-content>
                      <mu-list-item-sub-title>{{$t('eosfarm.treeincome')}}:{{myplayerinfo.income_tree}}</mu-list-item-sub-title>
                      <mu-list-item-sub-title>{{$t('eosfarm.treeincomewith')}}:{{myplayerinfo.income_tree_with}}</mu-list-item-sub-title>
                    </mu-list-item-content>
                  </mu-list-item>
                  <mu-list-item button slot="nested">
                    <mu-list-item-content>
                      <mu-list-item-sub-title>{{$t('eosfarm.airdropincome')}}:{{myplayerinfo.income_airdrop}}</mu-list-item-sub-title>
                      <mu-list-item-sub-title>{{$t('eosfarm.airdropincomewith')}}:{{myplayerinfo.income_airdrop_with}}</mu-list-item-sub-title>
                    </mu-list-item-content>
                    <mu-list-item-content>
                      <mu-list-item-sub-title>{{$t('eosfarm.refincome')}}:{{myplayerinfo.income_invited}}</mu-list-item-sub-title>
                      <mu-list-item-sub-title>{{$t('eosfarm.refincomewith')}}:{{myplayerinfo.income_invited_with}}</mu-list-item-sub-title>
                    </mu-list-item-content>
                  </mu-list-item>
                  <mu-list-item button slot="nested">
                    <mu-list-item-content>
                      <mu-list-item-sub-title>{{$t('eosfarm.shareincome')}}:{{myplayerinfo.income_share}}</mu-list-item-sub-title>
                      <mu-list-item-sub-title>{{$t('eosfarm.shareincomewith')}}:{{myplayerinfo.income_share_with}}</mu-list-item-sub-title>
                    </mu-list-item-content>
                    <mu-list-item-content>
                      <mu-list-item-sub-title>{{$t('eosfarm.lastawardincome')}}:{{myplayerinfo.income_award}}</mu-list-item-sub-title>
                      <mu-list-item-sub-title>{{$t('eosfarm.lastawardincomewith')}}:{{myplayerinfo.income_award_with}}</mu-list-item-sub-title>
                    </mu-list-item-content>
                  </mu-list-item>
                </mu-list-item>
              </mu-list>
              <mu-divider></mu-divider>
              <mu-list>
                <mu-sub-header>{{$t('eosfarm.gamedata')}}</mu-sub-header>
                <mu-list-item button>
                  <mu-list-item-action>
                    <icon name="tree3" scale="3"></icon>
                  </mu-list-item-action>
                  <mu-list-item-content>
                    <mu-list-item-sub-title>{{$t('eosfarm.treeamount')}}:{{mygameinfo.supply}}</mu-list-item-sub-title>
                    <mu-list-item-sub-title>{{$t('eosfarm.landnum')}}:{{mygameinfo.tree_cnt}}</mu-list-item-sub-title>
                  </mu-list-item-content>
                </mu-list-item>
                <mu-list-item button>
                  <mu-list-item-action>
                    <icon name="gift" scale="3"></icon>
                  </mu-list-item-action>
                  <mu-list-item-sub-title>{{$t('eosfarm.totaleos')}}:{{totaleos}}</mu-list-item-sub-title>
                </mu-list-item>
                <mu-list-item button>
                  <mu-list-item-action>
                    <icon name="airdrop" scale="3"></icon>
                  </mu-list-item-action>
                  <mu-list-item-sub-title>{{$t('eosfarm.airdroppool')}}:{{mygameinfo.airdrop_pool}}</mu-list-item-sub-title>
                </mu-list-item>
                <mu-list-item button>
                  <mu-list-item-action>
                    <icon name="vip" scale="3"></icon>
                  </mu-list-item-action>
                  <mu-list-item-sub-title>{{$t('eosfarm.lastwinner')}}:{{mygameinfo.last_one}}</mu-list-item-sub-title>
                </mu-list-item>
              </mu-list>
            </el-col>
          </el-row>
        </div>
        <div class="demo-text" v-if="tab1active === 1">
          <el-row style="padding: 20px;">

            <p>
            <h3>游戏规则</h3></p>
            <p>1.玩家可以购买树苗，初始价格0.005一颗，随着卖出量的增加，树苗越来越贵</p>
            <p>
              2.购买树苗后资金用途：<br/>
              &nbsp;&nbsp;&nbsp;60% 分红给之前玩家，11%进入空投池，10%作为最终大奖<br/>
              &nbsp;&nbsp;&nbsp;3%奖励推广玩家，3%支付合约内存费用，10%进入bancor池，提高JUST代币价格<br/>
              &nbsp;&nbsp;&nbsp;3%奖励本轮股东，股东为上一轮购买树苗最多的玩家，第一轮没有股东，奖励给当前购买树苗最多的玩家<br/>
            </p>
            <p>
              3.树苗收益达到成本的130%，出现30分钟倒计时<br/>
              &nbsp;&nbsp;&nbsp;可通过浇水延续分红时间，价格为成本1%，每次递增树苗成本1%，每次续命2小时
            </p>
            <p>
              4.树苗倒计时结束，不再享受分红，由此树苗发行量下降，购买新树苗价格将降低
            </p>
            <p>
              5.玩家固定16块土地，用完即不能再购买树苗<br/>
              &nbsp;&nbsp;&nbsp;如果还需购买树苗，需要将树苗铲除，已铲除的树苗不再享受分红
            </p>
            <p>
              6.每售出500 EOS的树苗，从空投池中发送3~7%的EOS奖励买家<br/>
              &nbsp;&nbsp;&nbsp;空投池初始资金1000 EOS
            </p>
            <p>
              7.游戏倒计时24小时，每购买一颗树苗延长5秒<br/>
              &nbsp;&nbsp;&nbsp;游戏后期无人购买，倒计时结束，最终大奖发给最后一个买入的玩家
            </p>

            <p>
            <h3>操作说明</h3></p>
            <p>1.点击空土地<img class="img-in-text" src="../assets/tudi1_text.png"/>购买树苗</p>
            <p>2.树苗出现倒计时，说明收益已超过130%<img class="img-in-text" src="../assets/tree_countdown.png"/>此时需要点击树苗浇水<img
              class="img-in-text" src="../assets/a_buydrug.png"/><br/>
              &nbsp;&nbsp;&nbsp;否则树枯死后，便不再享受分红<img class="img-in-text" src="../assets/tree_dead.png"/>
            </p>
            <p>3.由于游戏是定时更新收益的，所以玩家的收益值不一定是最新的，玩家可以手动刷新收益值<br/>
              &nbsp;&nbsp;&nbsp;此操作不消耗EOS<img style="width: 50%;height: auto;" src="../assets/intro_refresh.png"/>
            </p>
          </el-row>
        </div>
        <div class="demo-text" v-if="tab1active === 2">
          <el-row>
            <mu-list>
              <mu-list-item button v-for="rankUser in myRankUsers" :key="rankUser.user">
                <mu-list-item-action>
                  <mu-avatar>
                    <img :src="rankUser.imgUrl"/>
                  </mu-avatar>
                </mu-list-item-action>
                <mu-list-item-content>
                  <mu-list-item-sub-title>{{$t('eosfarm.account')}} : {{rankUser.user}}</mu-list-item-sub-title>
                  <mu-list-item-sub-title>{{$t('eosfarm.treeamount')}} : {{rankUser.tree_amount}}</mu-list-item-sub-title>
                </mu-list-item-content>
                <mu-list-item-action v-show="rankUser.inx==0">
                  <mu-list-item-after-text>{{$t('eosfarm.maywinshare')}}</mu-list-item-after-text>
                </mu-list-item-action>
              </mu-list-item>
            </mu-list>
          </el-row>
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
                <mu-list-item-content>
                  <mu-list-item-sub-title>{{$t('eosfarm.watering')}}--{{drugPrice}}</mu-list-item-sub-title>
                  <mu-list-item-sub-title>{{$t('eosfarm.continuediv')}}</mu-list-item-sub-title>
                </mu-list-item-content>
              </mu-list-item>
              <mu-list-item button @click="btnDeleteTree">
                <mu-list-item-action>
                  <mu-avatar>
                    <img style="width: 100%;height: auto;" src="../assets/a_remove.png"/>
                  </mu-avatar>
                </mu-list-item-action>
                <mu-list-item-sub-title>{{$t('eosfarm.remove')}}</mu-list-item-sub-title>
              </mu-list-item>
              <mu-list-item button @click="btnWithDrawTree">
                <mu-list-item-action>
                  <mu-avatar>
                    <img style="width: 100%;height: auto;" src="../assets/a_withdraw.png"/>
                  </mu-avatar>
                </mu-list-item-action>
                <mu-list-item-content>
                  <mu-list-item-sub-title>{{$t('eosfarm.geteos')}}</mu-list-item-sub-title>
                  <mu-list-item-sub-title>{{$t('eosfarm.canget')}}:{{selectTreeIncome}}，{{$t('eosfarm.hasget')}}:{{selectTreeWith}}</mu-list-item-sub-title>
                </mu-list-item-content>

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
              <el-input placeholder="请输入EOS数量" v-model="buyeos">
                <template slot="append">≈{{maybeBuyAmount}} trees</template>
              </el-input>
            </el-col>
          </el-row>
          <el-row type="flex" class="row-bg" justify="space-around" style="padding: 0px 10px 0px 10px;">
            <el-col :span="20">
              <div class="text-gray">1 tree = {{treePrice}} EOS</div>
            </el-col>
          </el-row>
          <el-row type="flex" class="row-bg" justify="space-around" style="padding: 0 10px 20px 10px;">
            <el-col :span="3">
              <el-button @click="setBuyAmount(18)" size="mini" round>18</el-button>
            </el-col>
            <el-col :span="3">
              <el-button @click="setBuyAmount(28)" size="mini" round>28</el-button>
            </el-col>
            <el-col :span="3">
              <el-button @click="setBuyAmount(88)" size="mini" round>88</el-button>
            </el-col>
            <el-col :span="3">
              <el-button @click="setBuyAmount(188)" size="mini" round>188</el-button>
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
  import Identicon from "identicon.js";
  import Big from 'big.js';
  import copy from 'clipboard-copy';
  var hash = require('object-hash');
  import MyLand from '@/components/MyLand';

  export default {
    name: "eosfarm",
    components: {
      MyLand,
    },
    data() {
      return {
        tab1active: 0,
        tabBuyActive: 0,
        bottomActionOpen: false,
        buyDialogOpen: false,
        timerLoop: true,
        infoDetailOpen: '',
        inviterName: "",
        inputSwitchUser:"",
        nowSwitchUser:"",
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

        PRICE_DIV:100000,
        PRICE_START:50,
        //input form
        buyeos: 10,
        selectTree: null,
        drugPrice:"",
        selectTreeIncome:"",
        selectTreeWith:"",
        //table info
        globalinfo: null,
        gameinfo: null,
        eostrees: null,
        alleostrees: null,
        playerinfo: null,
        //display info
        countdown: "24:00:00",
        totaleos: "0.0000 EOS",
        last_reward_pool:"0.0000 EOS",
        airdropcolor: "rgba(142, 113, 199, 0.7)",
        airdropperc: 0,
        needairdrop: "0",
        mayairdrop_min: "0",
        mayairdrop_max: "0",
        maybeBuyAmount: null,
        rankusers: [],
        //caculate info
        mygameinfo: new Object(),
        myplayerinfo: new Object(),
        myEosAmount: "",
        myJustAmount: "",
        myeostrees: [],
        myRankUsers: [],
        treePrice:"",
        testEosAccounts:[
          { "value": "justtest1111" },
          { "value": "justtest2222" },
        ],

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
      if (that.$route.query.ref) {
        that.inviterName = that.$route.query.ref;
      } else {
        that.inviterName = "";
      }
      console.log("inviter:" + that.inviterName);

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
        if (that.$store.state.eosUserName) {
          that.requestPlayerInfo();
          that.requestEosTreeInfo();
          that.requestMyEosAmount();
          that.requestMyJustAmount();
        }
        return that.timerLoop;
      });
      that.requestGameInfo();
      that.requestRankUsers();
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
        this.selectTree = null;
        this.bottomActionOpen = false;
      },
      openBuyDialog() {
        this.buyDialogOpen = true;
      },
      closeBuyDialog() {
        this.selectTree = null;
        this.buyDialogOpen = false;
      },
      queryEosAccount(queryString, cb){
        var results=[];
        if(this.myRankUsers){
          for(var i=0;i<this.myRankUsers.length;i++){
            var item=new Object();
            item.value=this.myRankUsers[i].user;
            results.push(item);
          }
        }
        cb(results);

        var that = this;
        var eossdkutil = window.eossdkutil;
        eossdkutil.getEosTableRows(
          {
            json: true,
            code: that.farmcontract,
            scope: that.farmcontract,
            table: 'playerinfo',
            limit: 100
          }
        ).then(function (result) {
          var rows = result.data.rows;
          if(rows&&rows.length>0){
            for(var i=0;i<rows.length;i++){
              var item=new Object();
              item.value=rows[i].user;
              results.push(item);
            }
          }
        }).catch(function (error) {

        });
      },
      setSwitchUser(item){
        console.log(item);
      },
      btnSwitchUser(){
        if(this.inputSwitchUser){
          this.nowSwitchUser=this.inputSwitchUser;
        }
      },
      btnResetSwitchUser(){
        this.nowSwitchUser=null;
        this.inputSwitchUser=null;
      },
      onMyLandClick(eostree) {
        this.selectTree = eostree;
        if (eostree && eostree.id > -1) {
          var buyDrugTimes=this.selectTree.continue_times+1;
          var priceAmount = this.selectTree.eos_amount * buyDrugTimes / 100;
          if(priceAmount<1){
            priceAmount=1;
          }
          this.drugPrice=(priceAmount / 10000).toFixed(4)+ " EOS";
          this.selectTreeIncome=((this.selectTree.income-this.selectTree.has_withdraw) / 10000).toFixed(4)+ " EOS";
          this.selectTreeWith=(this.selectTree.has_withdraw / 10000).toFixed(4)+ " EOS";
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
          that.$message(error);
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
          that.$message(error);
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
          that.$message(error);
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
          that.$message(error);
        });
      },
      btnOpenEosflare() {
        window.open("https://eosflare.io/account/" + this.$store.state.eosUserName);
      },
      btnBuy() {
        if(this.nowSwitchUser){
          this.$message("观察者模式禁止此操作");
          return;
        }
        if (!this.buyeos) {
          this.$message("请输入要购买的eos值");
          return;
        }
        var that = this;
        var memo="";
        if (this.selectTree) {
          memo="buytree:" + that.selectTree.pos + ";" + that.inviterName + ";";
        }
        var eossdkutil = window.eossdkutil;

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
                memo: memo,
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
            message: error,
            type: 'warning'
          });
        });
      },
      setBuyAmount(amount) {
        this.buyeos = amount;
      },
      copyShareUrl() {
        var that = this;
        copy(this.myplayerinfo.share_url);
        that.$message({
          message: '复制成功',
          type: 'success'
        });
      },
      btnBuyDrug() {
        if(this.nowSwitchUser){
          this.$message("观察者模式禁止此操作");
          return;
        }
        var eossdkutil = window.eossdkutil;
        var that = this;
        if (!that.selectTree) {
          this.$message("请选择操作的位置");
          return;
        }
        if (that.selectTree.id < 0) {
          this.$message("此位置不可操作");
          return;
        }
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
                quantity: that.drugPrice,
                memo: "buydrug:" + that.selectTree.id + ";",
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
          that.$message(error);
        });
      },
      btnDeleteTree() {
        if(this.nowSwitchUser){
          this.$message("观察者模式禁止此操作");
          return;
        }
        var eossdkutil = window.eossdkutil;
        var that = this;
        if (!that.selectTree) {
          this.$message("请选择操作的位置");
          return;
        }
        if (that.selectTree.id < 0) {
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
                treeid: that.selectTree.id,
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
          that.$message(error);
        });
      },
      btnWithdrawAll() {
        if(this.nowSwitchUser){
          this.$message("观察者模式禁止此操作");
          return;
        }
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
          that.$message(error);
        });
      },
      btnWithDrawTree() {
        if(this.nowSwitchUser){
          this.$message("观察者模式禁止此操作");
          return;
        }
        var eossdkutil = window.eossdkutil;
        var that = this;
        var selectId = 0;
        if (!that.selectTree) {
          this.$message("请选择操作的位置");
          return;
        }
        if (that.selectTree.id < 0) {
          this.$message("此位置不可操作");
          return;
        }
        selectId = that.selectTree.id;
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
          that.$message(error);
        });
      },
      btnChkMyTree() {
        var eossdkutil = window.eossdkutil;
        var that = this;
        var rqUser="";
        if(this.nowSwitchUser!=null&&this.nowSwitchUser.length>0){
          rqUser=this.nowSwitchUser;
        }else{
          rqUser=that.$store.state.eosUserName;
        }
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
                user: rqUser
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
          that.$message(error);
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
          that.$message(error);
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
          that.treePrice = that.getTreePrice();
          if(that.buyeos){
            that.getMaybeBuyAmount(that.buyeos);
          }
        }).catch(function (error) {

        });
      },
      requestPlayerInfo() {
        var that = this;
        var eossdkutil = window.eossdkutil;
        var rqUser="";
        if(this.nowSwitchUser!=null&&this.nowSwitchUser.length>0){
          rqUser=this.nowSwitchUser;
        }else{
          rqUser=that.$store.state.eosUserName;
        }
        eossdkutil.getEosTableRows(
          {
            json: true,
            code: that.farmcontract,
            scope: that.farmcontract,
            lower_bound: rqUser,
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
        var rqUser="";
        if(this.nowSwitchUser!=null&&this.nowSwitchUser.length>0){
          rqUser=this.nowSwitchUser;
        }else{
          rqUser=that.$store.state.eosUserName;
        }
        eossdkutil.getEosTableRows(
          {
            json: true,
            code: that.farmcontract,
            scope: rqUser,
            table: 'eostree',
            limit: 20
          }
        ).then(function (result) {
          var rows = result.data.rows;
          that.eostrees = rows;
        }).catch(function (error) {

        });
      },
      requestRankUsers() {
        var that = this;
        var eossdkutil = window.eossdkutil;
        eossdkutil.getEosTableRows(
          {
            json: true,
            code: that.farmcontract,
            scope: that.farmcontract,
            table: 'playerrank',
            limit: 20
          }
        ).then(function (result) {
          var rows = result.data.rows;
          that.rankusers = rows;
          that.refreshRankUser();
        }).catch(function (error) {

        });
      },
      requestMyEosAmount() {
        var that = this;
        var eossdkutil = window.eossdkutil;
        var rqUser="";
        if(this.nowSwitchUser!=null&&this.nowSwitchUser.length>0){
          rqUser=this.nowSwitchUser;
        }else{
          rqUser=that.$store.state.eosUserName;
        }
        eossdkutil.getEosTableRows(
          {
            json: true,
            code: that.eostokencontract,
            scope: rqUser,
            table: 'accounts',
            limit: 20
          }
        ).then(function (result) {
          var rows = result.data.rows;
          var len = rows.length;
          if(len>0){
            var inx = len - 1;
            var accounts = rows[inx];
            that.myEosAmount = accounts.balance;
          }else{
            that.myEosAmount ="0.0000 EOS";
          }

        }).catch(function (error) {

        });
      },
      requestMyJustAmount() {
        var that = this;
        var eossdkutil = window.eossdkutil;
        var rqUser="";
        if(this.nowSwitchUser!=null&&this.nowSwitchUser.length>0){
          rqUser=this.nowSwitchUser;
        }else{
          rqUser=that.$store.state.eosUserName;
        }
        eossdkutil.getEosTableRows(
          {
            json: true,
            code: that.justtokencontract,
            scope: rqUser,
            table: 'accounts',
            limit: 20
          }
        ).then(function (result) {
          var rows = result.data.rows;
          var len = rows.length;
          if(len>0){
            var inx = len - 1;
            var accounts = rows[inx];
            that.myJustAmount = accounts.balance;
          }else{
            that.myJustAmount = "0.0000 JUST";
          }

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
      }, get_buy_amount(amount, supply) {
        var supply_2 = Big(supply).mul(supply);
        var PRICE_DIV_2 = Big(this.PRICE_DIV).mul(this.PRICE_DIV);
        //TODO overflow
        var PRICE_START_2 = PRICE_DIV_2.mul(this.PRICE_START);
        var buy_amount = PRICE_DIV_2.mul(amount);
        var buy_amount128 = buy_amount.div((supply_2.add(PRICE_START_2)));
        return buy_amount128.toFixed(0);
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
      refreshRankUser(){
        if(this.rankusers){
          var sortRankUser = this.rankusers.sort(this.sortRankFun);
          if(sortRankUser.length!=this.myRankUsers.length){
            this.myRankUsers.splice(0, this.myRankUsers.length);
          }
          for (var i = 0; i < sortRankUser.length; i++) {
            sortRankUser[i].imgUrl=this.getImgByStr(sortRankUser[i].user);
            sortRankUser[i].inx=i;
            this.myRankUsers.splice(i, 1, sortRankUser[i]);
          }
        }
      },
      getImgByStr(str){
        console.log(str);
        var hstr=hash(str);
        console.log(hstr);
        var data = new Identicon(hstr, 50).toString();

        var base64="data:image/png;base64,"+data;
        return base64;
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
      },
      sortRankFun(user1, user2) {
        if (user1.tree_amount < user2.tree_amount) {
          return 1;
        } else {
          return -1;
        }
      },
      getTreePrice(){
        var amount = this.get_buy_amount(10000, this.gameinfo.supply);
        var price=Big(1).div(amount).toFixed(4);
        return price;
      },
      getMaybeBuyAmount(val){
        var buyEosAmount = parseFloat(val);
        var eosRealAmount = parseInt(buyEosAmount * 10000);
        this.maybeBuyAmount = this.get_buy_amount(eosRealAmount, this.gameinfo.supply);
      }
    }, watch: {
      buyeos: function (val) {
        this.getMaybeBuyAmount(val);
      },
      gameinfo: function (val) {
        var that = this;
        that.totaleos = Big(val.total_pool).div(10000).toFixed(4) + " EOS";

        that.mygameinfo.tree_cnt = val.tree_id + 1;
        that.mygameinfo.end_time = val.end_time;
        that.mygameinfo.last_one = val.last_one;
        that.mygameinfo.share_user = val.share_user;
        that.mygameinfo.supply = val.supply;
        that.mygameinfo.airdrop_pool = Big(val.airdrop_pool).div(10000).toFixed(4) + " EOS";
        that.mygameinfo.last_reward_pool = Big(val.last_reward_pool).div(10000).toFixed(4) + " EOS";
        that.last_reward_pool=that.mygameinfo.last_reward_pool;
        that.mygameinfo.total_pool = Big(val.total_pool).div(10000).toFixed(4) + " EOS";
        var airdrop1 = (val.total_pool / 10000) % 500;
        that.airdropperc = parseInt(airdrop1 / 5);
        that.needairdrop = (500 - airdrop1).toFixed(2);
        var expAirDropPool = (val.airdrop_pool / 10000) + that.needairdrop / 10;
        that.mayairdrop_min = (expAirDropPool * 0.03).toFixed(2);
        that.mayairdrop_max = (expAirDropPool * 0.07).toFixed(2);
        that.airdropcolor = "rgba(" + 50 + ", " + 200 + ", 0, 1)";
        if (that.airdropperc > 0 && that.airdropperc < 50) {
          that.airdropcolor = "rgba(" + (50 + that.airdropperc * 4) + ", " + 200 + ", 0, 1)";
        } else {
          that.airdropcolor = "rgba(" + 250 + ", " + (400 - that.airdropperc * 4) + ", 0, 1)";
        }
        that.mygameinfo.dividend_pool = Big(val.dividend_pool).div(10000).toFixed(4) + " EOS";
        that.mygameinfo.game_state = val.game_state;
      }, playerinfo: function (val) {
        var that = this;
        if(this.nowSwitchUser&&this.nowSwitchUser.length>0){

        }else{
          if(val.user!=that.$store.state.eosUserName){
            return;
          }
        }
        that.myplayerinfo.tree_amount = val.tree_amount;
        that.myplayerinfo.share_url = "购买后获得";
        if (val.tree_amount > 0) {
          that.myplayerinfo.share_url = "https://www.eosjust.com/#/eosfarm?ref=" + val.user;
        }
        that.myplayerinfo.income_sync = val.income_inx + 1;
        that.myplayerinfo.income_tree = Big(val.income_tree - val.income_tree_with).div(10000).toFixed(4);
        that.myplayerinfo.income_tree_with = Big(val.income_tree_with).div(10000).toFixed(4);
        that.myplayerinfo.income_airdrop = Big(val.income_airdrop - val.income_airdrop_with).div(10000).toFixed(4);
        that.myplayerinfo.income_airdrop_with = Big(val.income_airdrop_with).div(10000).toFixed(4);
        that.myplayerinfo.income_invited = Big(val.income_invited - val.income_invited_with).div(10000).toFixed(4);
        that.myplayerinfo.income_invited_with = Big(val.income_invited_with).div(10000).toFixed(4);
        that.myplayerinfo.income_award = Big(val.income_award - val.income_award_with).div(10000).toFixed(4);
        that.myplayerinfo.income_award_with = Big(val.income_award_with).div(10000).toFixed(4);
        that.myplayerinfo.income_share = Big(val.income_share - val.income_share_with).div(10000).toFixed(4);
        that.myplayerinfo.income_share_with = Big(val.income_share_with).div(10000).toFixed(4);
        //
        that.myplayerinfo.income_total_1 = Big(val.income_tree).add(val.income_airdrop)
          .add(val.income_invited).add(val.income_award).add(val.income_share).div(10000);
        that.myplayerinfo.income_total_2 = Big(val.income_tree_with).add(val.income_airdrop_with)
          .add(val.income_invited_with).add(val.income_award_with).add(val.income_share_with).div(10000);
        that.myplayerinfo.income_total = that.myplayerinfo.income_total_1.minus(that.myplayerinfo.income_total_2).toFixed(4);
        that.myplayerinfo.income_total_with = that.myplayerinfo.income_total_2.toFixed(4);
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

  .farm-title3-size {
    font-size: 1.4em;
  }

  .img-in-text {
    width: 5em;
    height: auto;
  }

  .text-gray {
    color:#888888;
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
