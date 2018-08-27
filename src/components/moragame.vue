<template>
  <div class="moragame-content">
    <button @click="btnLogin">login</button>
    <br>
    <button @click="btnAction">action</button>
    <br>
    <button @click="">test</button>
  </div>
</template>

<script>
  import timeout from 'timeout';

  export default {
    name: 'Moragame',
    data() {
      return {

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
          alert(data);
        }).catch(error => {
          //
          alert(error);
        });
      },
      requestMyEosBalance() {

      },
      requestMyTokenBalance() {

      },
      requestMyGame() {

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
