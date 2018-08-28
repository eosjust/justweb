<template>
  <div class="moragame-content">
    <button @click="btnLogin">login</button>
    <br>
    <button @click="btnAction">action</button>
    <br>
    <button @click="btnTest">test</button>
  </div>
</template>

<script>
  import timeout from 'timeout';

  var bigInt = require("big-integer");
  const BN = require('bn.js');
  export default {
    name: 'Moragame',
    data() {
      return {}
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
          alert(data);
          console.log(data);
        }).catch(error => {
          //
          alert(error);
          console.log(error);
        });
      },
      btnTest() {

        var maximumByte = bigInt("FFAA12BC", 16);
        var x = bigInt("9193765241474037917",10);
        var y = bigInt("9193765241474037917",10);
        var z=x.multiply(y);
        console.log(z.toString(2));
        console.log(z.toString(10));
        var isoddz = z.isOdd();
        console.log(maximumByte.toString(10));

        var a = new BN('9193765241474037917', 10);
        var b = new BN('9193765241474037917', 10);
        var c=a.mul(b);
        var isoddc=c.isOdd();
        console.log(c.toString(10));
        console.log(c.toString(2));


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
