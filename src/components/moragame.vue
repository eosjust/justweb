<template>
  <div class="moragame-content">


    <el-card style="margin: 10px;" class="box-card">

    </el-card>

    <el-card style="margin: 10px;" class="box-card">
      <mu-tabs :value.sync="active1" style="background-color: #ffffff" inverse  center>
        <mu-tab>创建游戏</mu-tab>
        <mu-tab>匹配游戏</mu-tab>
      </mu-tabs>
      <div class="demo-text" v-if="active1 === 0">
        <mu-button color="success">BUY JUST</mu-button>
        <mu-button color="error">SELL JUST</mu-button>
        <p>“……是的，我承认从很早以前我都害怕死亡，在医院里被人研究的时候，以前做出布局的时候，其实我很怕死的，因为除了死以外，我没有值得珍惜的东西，很奇怪是吧？恰好是这样我真的很怕死，因为我想要有值得珍惜的东西之后，死亡之后才会不寂寞，我才能够安然的面对死亡……”</p>
      </div>
      <div class="demo-text" v-if="active1 === 1">
        <p>“我的心从来没有这么坚定过，所以我会为了补偿而死，也可以为了补偿而死……一辈子，急辈子都无所谓，我绝不后退！”</p>
        <p>“如果我后退呢？如果我想要死呢？我不想你再次背对着我逃跑了……”</p>
        <p>“那么就去地狱找到你，我绝对不逃！”</p>
        <p>“白痴，你也哭了？因为那些软弱拖累你的脚步？”</p>
      </div>
    </el-card>






    <button @click="btnLogin">login</button>
    <br>
    <button @click="btnAction">action</button>
    <br>
    <button @click="btnTest">test</button>
  </div>
</template>

<script>
  import timeout from 'timeout';

  var mrcrypt = require("mr-crypt");
  var bigInt = require("big-integer");
  export default {
    name: 'Moragame',
    data() {
      return {
        active1: 0
      }
    },
    created() {

    },
    methods: {
      btnLogin() {
        var eossdkutil = window.eossdkutil;
        eossdkutil.login().then(identity => {
          //
          alert(identity);
        }).catch(error => {
          //
          alert(error);
        });
      },
      btnAction() {
        var eossdkutil = window.eossdkutil;
        eossdkutil.pushEosAction({
          actions: [
            {
              account: "justgamemora",
              name: "claimad",
              authorization: [
                {
                  actor: 'moraplay1111',
                  permission: "active"
                }
              ],
              data: {
                account: 'moraplay1111'
              }
            }
          ]
        }).then(data => {
          //
          alert(JSON.stringify(data));
          console.log(data);
        }).catch(error => {
          //
          alert(JSON.stringify(error));
          console.log(error);
        });
      },
      btnTest() {
        var starttime=new Date();
        var key = mrcrypt.testcostomkey(bigInt("9255848965026103907"),bigInt("2"),bigInt("8555963415693960524"));
        var ptext="623272;11238948446777894603,2,2716488793841831660,4761169605288637037;821952";

        var result=mrcrypt.encrypt(bigInt("9255848965026103907"),bigInt("2"),bigInt("8555963415693960524"),ptext);
        var otext=mrcrypt.decrypt(bigInt("9255848965026103907"),bigInt("2"),bigInt("3691588054107911169"),result);
        var endtime=new Date();
        var lll=endtime-starttime;
        console.log(key);
        console.log(key);
      },
      ptest(v1, v2) {
        return new Promise(function (resolve, reject) {
          if (v1 == v2) {
            resolve(true);
          } else {
            reject(false);
          }
        });
      },
      requestGameHistory() {

      },
      requestOpenGame() {

      },
      requestRunGame() {

      },
    }
  }
</script>

<style scoped>

</style>
