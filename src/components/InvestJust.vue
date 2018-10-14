<template>
  <div id="investjust-content">
    <el-row>
      <el-col :span="24" class="investjust-bg investjust-bg-hg">
        <el-row class="investjust-height100">
          <el-col :span="$store.state.ismobile?24:16"
                  :class="$store.state.ismobile?'investjust-height50':'investjust-height100'">
            <el-row type="flex" justify="center" align="middle" class="investjust-height100">
              <el-col :span="24">
                <div :class="$store.state.ismobile?'just-small-title':'just-big-title'">{{$t('investjust.title')}}</div>
                <div :class="$store.state.ismobile?'just-small-desc':'just-big-desc'">{{$t('investjust.desc1')}}</div>
                <div :class="$store.state.ismobile?'just-small-desc':'just-big-desc'">{{$t('investjust.desc2')}}</div>
                <div :class="$store.state.ismobile?'just-small-desc':'just-big-desc'">{{$t('investjust.desc3')}}</div>
              </el-col>
            </el-row>
          </el-col>
          <el-col :span="$store.state.ismobile?24:8"
                  :class="$store.state.ismobile?'investjust-height50':'investjust-height100'">
            <el-row type="flex" justify="center" align="middle" class="investjust-height100">
              <el-col :span="$store.state.ismobile?8:2">
                &nbsp;
              </el-col>
              <el-col :span="$store.state.ismobile?8:20">
                <img src="../assets/just-plant.png" style="width: 100%;height: auto;"/>
              </el-col>
              <el-col :span="$store.state.ismobile?8:2">
                &nbsp;
              </el-col>
            </el-row>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
    <el-row type="flex" justify="center" align="middle">
      <div class="p3d-white investjust-ex-title" style="margin-top: 20px;">JUST Token 交易中心</div>
    </el-row>
    <el-row>
      <el-col :span="$store.state.ismobile?24:12" style="margin-top: 50px;margin-bottom: 20px;">
        <el-row class="investjust-row" type="flex" justify="center" >
          <el-col :span="$store.state.ismobile?20:16">
            <el-input type="number" :step="0.001" placeholder="" v-model="inputBuyAmount">
              <template slot="append">EOS</template>
            </el-input>
          </el-col>
        </el-row>
        <el-row class="investjust-row" type="flex" justify="center" >
          <el-col :span="$store.state.ismobile?20:16">
            <label class="p3d-white investjust-ex-may-amount">可购买JUST: {{mayBuyAmount}}</label>
          </el-col>
        </el-row>
        <el-row class="investjust-row" type="flex" justify="center" >
          <el-col :span="$store.state.ismobile?20:16">
            <mu-button full-width color="success" @click="btnBuyJust">BUY JUST</mu-button>
          </el-col>
        </el-row>
        <el-row class="investjust-row" type="flex" justify="center" >
          <el-col :span="$store.state.ismobile?20:16">
            <mu-paper :z-depth="1" :round="true">
              <mu-list>
                <mu-list-item button>
                  <mu-list-item-content>
                    <mu-list-item-title>JUST 价格:</mu-list-item-title>
                  </mu-list-item-content>
                  <mu-list-item-action>
                    <mu-list-item-sub-title>{{justPrice}}</mu-list-item-sub-title>
                  </mu-list-item-action>
                </mu-list-item>
                <mu-list-item button>
                  <mu-list-item-content>
                    <mu-list-item-title>EOS 储备金:</mu-list-item-title>
                  </mu-list-item-content>
                  <mu-list-item-action>
                    <mu-list-item-sub-title>{{eosRest}}</mu-list-item-sub-title>
                  </mu-list-item-action>
                </mu-list-item>
                <mu-list-item button>
                  <mu-list-item-content>
                    <mu-list-item-title>JUST 储备金:</mu-list-item-title>
                  </mu-list-item-content>
                  <mu-list-item-action>
                    <mu-list-item-sub-title>{{justRest}}</mu-list-item-sub-title>
                  </mu-list-item-action>
                </mu-list-item>
                <mu-list-item button>
                  <mu-list-item-content>
                    <mu-list-item-title>JUST 流通量:</mu-list-item-title>
                  </mu-list-item-content>
                  <mu-list-item-action>
                    <mu-list-item-sub-title>{{justTurnover}}</mu-list-item-sub-title>
                  </mu-list-item-action>
                </mu-list-item>
                <mu-list-item button>
                  <mu-list-item-content>
                    <mu-list-item-title>矿池:</mu-list-item-title>
                  </mu-list-item-content>
                  <mu-list-item-action>
                    <mu-list-item-sub-title>{{justMineRest}}</mu-list-item-sub-title>
                  </mu-list-item-action>
                </mu-list-item>
                <mu-list-item button>
                  <mu-list-item-content>
                    <mu-list-item-title>JUST 发行量:</mu-list-item-title>
                  </mu-list-item-content>
                  <mu-list-item-action>
                    <mu-list-item-sub-title>{{justSupply}}</mu-list-item-sub-title>
                  </mu-list-item-action>
                </mu-list-item>
                <mu-list-item button>
                  <mu-list-item-content>
                    <mu-list-item-title>JUST 最大发行量:</mu-list-item-title>
                  </mu-list-item-content>
                  <mu-list-item-action>
                    <mu-list-item-sub-title>{{justMaxSupply}}</mu-list-item-sub-title>
                  </mu-list-item-action>
                </mu-list-item>
              </mu-list>
            </mu-paper>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="$store.state.ismobile?24:12" style="margin-top: 50px;margin-bottom: 20px;">
        <el-row class="investjust-row" type="flex" justify="center" >
          <el-col :span="$store.state.ismobile?20:16">
            <el-input type="number" :step="0.001" placeholder="" v-model="inputSellAmount">
              <template slot="append">JUST</template>
            </el-input>
          </el-col>
        </el-row>
        <el-row class="investjust-row" type="flex" justify="center" >
          <el-col :span="$store.state.ismobile?20:16">
            <label class="p3d-white investjust-ex-may-amount">可获得EOS: {{maySellAmount}} </label>
          </el-col>
        </el-row>
        <el-row class="investjust-row" type="flex" justify="center" >
          <el-col :span="$store.state.ismobile?20:16">
            <mu-button full-width color="error" @click="btnSellJust">SELL JUST</mu-button>
          </el-col>
        </el-row>
        <el-row class="investjust-row" type="flex" justify="center" >
          <el-col :span="$store.state.ismobile?20:16">
            <mu-paper :z-depth="1" :round="true">
              <mu-list>
                <mu-list-item button>
                  <mu-list-item-content>
                    <mu-list-item-title>EOS 余额:</mu-list-item-title>
                  </mu-list-item-content>
                  <mu-list-item-action>
                    <mu-list-item-sub-title>{{myEosAmount}}</mu-list-item-sub-title>
                  </mu-list-item-action>
                </mu-list-item>
                <mu-list-item button>
                  <mu-list-item-content>
                    <mu-list-item-title>JUST 余额:</mu-list-item-title>
                  </mu-list-item-content>
                  <mu-list-item-action>
                    <mu-list-item-sub-title>{{myJustAmount}}</mu-list-item-sub-title>
                  </mu-list-item-action>
                </mu-list-item>
                <mu-list-item button>
                  <mu-list-item-content>
                    <mu-list-item-title>当前手续费:</mu-list-item-title>
                  </mu-list-item-content>
                  <mu-list-item-action>
                    <mu-list-item-sub-title>{{chargeShow}}</mu-list-item-sub-title>
                  </mu-list-item-action>
                </mu-list-item>
              </mu-list>
            </mu-paper>
          </el-col>
        </el-row>
      </el-col>
    </el-row>

    <el-row style="background-color: #263238">
      <el-col>
        <el-row type="flex" justify="center" align="middle">
          <div class="p3d-white investjust-ex-title" style="margin-top: 20px;">JUST Token 说明</div>
        </el-row>
      </el-col>
      <el-col>
        <div class="just-small-desc">
          <p>1.JUST TOKEN是EOSJUST的通证，可自由转移和流通。</p>
          <p>2.JUST发行总量上限为1亿，其中500w用于初始化bancor池，4500w可以通过挖矿方式获得，1000w保留锁定，4000w项目团队锁仓</p>
          <p>3.项目团队通过两种方式解锁，a.平台每挖出10个通证，开发者解锁1个。b.从2019年10月1日开始，2年内逐渐解锁</p>
          <p>4.bancor池初始化EOS储备500EOS，JUST储备500w，初始币价1 JUST = 0.0001 EOS</p>
          <p>5.持币者成为EOSJUST股东，按持股比例享受包括不限于持币增值，收入分红，福利空投，源代码查看等权利</p>
          <p>6.早期市场深度低，为了保护JUST股东的权益，单个账号购买的Token不能超过初始bancor池大小的20%即100w，卖出JUST Token会收取15%手续费</p>
          <p>7.流通量超过bancor池的一半后，不限制买入数量，手续费也随着流通量上升线性减少，流通超过2000w时，手续费维持0.5%不变</p>
          <p>8.所有资产公开透明，任意第三方EOS区块浏览器可查，规则人人平等。</p>
        </div>
      </el-col>
    </el-row>

  </div>

</template>

<script>

  import timeout from 'timeout';
  import Big from 'big.js';

  export default {
    name: 'InvestJust',
    data() {
      return {
        chosecss: true,
        timerLoop:true,
        bancorcontract:"eosjustioexe",
        justtokencontract:"eosjusttoken",
        justminecontract:"justminepool",
        eostokencontract:"eosio.token",
        justSymbolName:"JUST",
        justPrice: "0.0000 EOS/JUST",
        justSupplyAmount:Big(0),
        justSupply: "0.0000",
        justMaxSupplyAmount:Big(0),
        justMaxSupply: "0.0000",
        justTurnoverAmount:Big(0),
        justTurnover: "0.0000",
        eosRestAmount:Big(0),
        eosRest: "0.0000",
        justRestAmount:Big(0),
        justRest: "0.0000",
        justMineRestAmount:Big(0),
        justMineRest:"0.0000",

        chargeAmount:Big(0),
        chargeShow:"",
        myEosAmount: "0.0000",
        myJustAmount: "0.0000",
        mayBuyAmount:"0.0000",
        maySellAmount:"0.0000",
        inputBuyAmount:"0.0000",
        inputSellAmount:"0.0000",
      }
    },
    created() {
      this.timerLoop=true;
    },
    mounted() {
      var that = this;
      that.timerLoop=true;
      timeout.timeout(3000, function () {
        that.requestMyEosAmount();
        that.requestMyJustAmount();
        that.requestMarketInfo();
        that.requestSupplyInfo();
        that.requestMineAmount();
        return that.timerLoop;
      });
    },
    destroyed: function () {
      this.timerLoop=false;
    },
    methods: {
      btnBuyJust() {
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
                  permission: "active",
                }
              ],
              data: {
                from:that.$store.state.eosUserName,
                to:that.bancorcontract,
                quantity:Big(that.inputBuyAmount).toFixed(4)+" EOS",
                memo:""
              }
            }
          ]
        }).then(function (result) {
          that.$message("操作成功");
        }).catch(function (error) {
          that.$message(error);
        });
      },
      btnSellJust() {
        var eossdkutil = window.eossdkutil;
        var that = this;
        eossdkutil.pushEosAction({
          actions: [
            {
              account: that.justtokencontract,
              name: "transfer",
              authorization: [
                {
                  actor: that.$store.state.eosUserName,
                  permission: "active",
                }
              ],
              data: {
                from:that.$store.state.eosUserName,
                to:that.bancorcontract,
                quantity:Big(that.inputSellAmount).toFixed(4)+" JUST",
                memo:""
              }
            }
          ]
        }).then(function (result) {
          that.$message("操作成功");
        }).catch(function (error) {
          that.$message(error);
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
          that.myEosAmount=accounts.balance;
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
          that.myJustAmount=accounts.balance;
        }).catch(function (error) {

        });
      },
      requestMarketInfo() {
        var that = this;
        var eossdkutil = window.eossdkutil;
        eossdkutil.getEosTableRows(
          {
            json: true,
            code: that.bancorcontract,
            scope: that.bancorcontract,
            table: 'tokenmarket',
            limit: 20
          }
        ).then(function (result) {
          var rows = result.data.rows;
          var len = rows.length;
          var inx = len - 1;
          var marketinfo = rows[inx];
          try{
            if(marketinfo.quote){
              that.eosRest=marketinfo.quote.balance;
              var assetAry=that.eosRest.split(" ");
              that.eosRestAmount=Big(assetAry[0]);
            }
            if(marketinfo.base){
              that.justRest=marketinfo.base.balance;
              var assetAry=that.justRest.split(" ");
              that.justRestAmount=Big(assetAry[0]);
            }
            if(that.eosRest&&that.justRest){
              that.justPrice=(that.eosRestAmount/that.justRestAmount).toFixed(4)+" EOS/JUST";
            }
            if(that.justSupplyAmount.gt(0)&&that.justRestAmount.gt(0)&&that.justMineRestAmount.gt(0)){
              that.justTurnoverAmount=that.justSupplyAmount.minus(that.justRestAmount).minus(that.justMineRestAmount);
              that.justTurnover=that.justTurnoverAmount.toFixed(4) +" JUST";
              if(that.justTurnoverAmount.gt(20000000)){
                that.chargeAmount=Big(0.005);
                that.chargeShow=that.chargeAmount.mul(100).toFixed(2)+"%";
              }else{
                var chargem = Big(150).minus(that.justTurnoverAmount.div(20000000).mul(150-5)) ;
                that.chargeAmount=chargem.div(1000);
                that.chargeShow=that.chargeAmount.mul(100).toFixed(2)+"%";
              }

            }

          }catch (exex){

          }

        }).catch(function (error) {

        });
      },
      requestSupplyInfo() {
        var that = this;
        var eossdkutil = window.eossdkutil;
        eossdkutil.getEosTableRows(
          {
            json: true,
            code: that.justtokencontract,
            scope: that.justSymbolName,
            table: 'stat',
            limit: 20
          }
        ).then(function (result) {
          var rows = result.data.rows;
          var len = rows.length;
          var inx = len - 1;
          var statinfo=rows[inx];
          that.justMaxSupply=statinfo.max_supply;
          that.justSupply=statinfo.supply;
          if(that.justMaxSupply){
            var assetAry=that.justMaxSupply.split(" ");
            that.justMaxSupplyAmount=Big(assetAry[0]);
          }
          if(that.justSupply){
            var assetAry=that.justSupply.split(" ");
            that.justSupplyAmount=Big(assetAry[0]);
          }
        }).catch(function (error) {

        });
      },
      requestMineAmount() {
        var that = this;
        var eossdkutil = window.eossdkutil;
        eossdkutil.getEosTableRows(
          {
            json: true,
            code: that.justtokencontract,
            scope: that.justminecontract,
            table: 'accounts',
            limit: 20
          }
        ).then(function (result) {
          var rows = result.data.rows;
          var len = rows.length;
          var inx = len - 1;
          var accounts=rows[inx];
          that.justMineRest=accounts.balance;
          if(that.justMineRest){
            var assetAry=that.justMineRest.split(" ");
            that.justMineRestAmount=Big(assetAry[0]);
          }
        }).catch(function (error) {

        });
      },
      calChargeAmount() {

      }
    },watch: {
      inputBuyAmount: function (val) {
        try{
          this.mayBuyAmount= this.justRestAmount.mul(Big(val)).div(Big(this.eosRestAmount).plus(Big(val))).toFixed(4);
        }catch (e){
          this.mayBuyAmount="0.0000";
        }
      },
      inputSellAmount: function (val) {
        try{
          if(Big(this.justRestAmount).minus(Big(val))>0  ){
            var maySellAmountPure= Big(this.eosRestAmount).mul(Big(val)).div(Big(this.justRestAmount).minus(Big(val)));
            if(this.chargeAmount.gt(0)){
              maySellAmountPure=maySellAmountPure.minus(maySellAmountPure.mul(this.chargeAmount));
            }
            this.maySellAmount=maySellAmountPure.toFixed(4);
          }else{
            this.maySellAmount="0.0000";
          }
          // this.maySellAmount= Big(this.eosRest*val/(this.justRest-val)).toFixed(4);
        }catch (e){
          this.maySellAmount="0.0000";
        }
      },
    }
  }
</script>

<style scoped>


  .investjust-height100 {
    height: 100%;
  }

  .investjust-height50 {
    height: 50%;
  }

  .investjust-bg-hg {
    min-height: 400px;
  }

  .investjust-bg {
    /*background-image: url("../assets/just-invest-bg.jpg");*/
    background-image: linear-gradient(300deg,#4a148c,#212121);
    background-repeat: no-repeat;
    background-position: center top;
    background-size: 100% auto;
    width: 100%;
    height: 400px;
  }

  .investjust-row {
    margin-top: 20px;
  }

  .investjust-card {
    margin: 15px 45px;
    background-color: transparent;
    border-color: transparent;
  }

  .investjust-reserve-panel-up {
    text-align: center;
    width: 100%;
    height: 70px;
    background: #8e71c7;
    color: #fff;
    border-radius: .4rem .4rem 0 0;
  }

  .investjust-reserve-panel-down {
    text-align: center;
    width: 100%;
    height: 70px;
    background: #4caf50;
    color: #fff;
    border-radius: 0 0 .4rem .4rem;
  }

  .investjust-reserve-amount {
    position: relative;
    font-size: 1.8em;
    font-weight: bold;
    top: 30%;
  }

  .investjust-supply-text {
    font-size: 1em;
    font-weight: bold;
    text-align: right;
    padding-right: 30px;
    color: #fff;
  }

  .investjust-ex-title{
    font-size: 1.9em;
  }

  .investjust-ex-may-amount{
    font-size: 1.0em;
  }

  .p3d-white {
    text-shadow: rgb(0, 0, 0) 0px 0px 5px, rgb(255, 255, 255) 0px 0px 20px, rgb(255, 255, 255) 0px 0px 10px;
    color: white;
  }

  .just-big-title {
    padding: 30px 30px 30px 30px;
    font-size: 3.4em;
    color: white;
  }

  .just-big-desc {
    padding: 0px 0px 0px 40px;
    font-size: 1.2em;
    color: #9e9e9e;
  }

  .just-small-title {
    padding: 30px 30px 30px 30px;
    font-size: 2.2em;
    color: white;
  }

  .just-small-desc {
    padding: 0px 0px 0px 40px;
    font-size: 1.0em;
    color: #9e9e9e;
  }
</style>
