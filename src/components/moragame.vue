<template>
  <div class="moragame-content">
    <span>当前环境：{{this.$store.state.env}}</span>
    <span>当前BP：{{this.$store.state.bpNodeUrl}}</span>
    <div id="moragame-account">
      <span>选择账户：</span>
      <select v-model="select_account">
        <option v-for="tpaccount in tpaccounts" v-bind:value="tpaccount.name">
          {{ tpaccount.name }}
        </option>
      </select>
      <span>当前账户：{{ select_account }},{{select_account_tokens}}</span>
    </div>

    <div id="moragame-play">
      <span>选择额度：</span>
      <select v-model="select_fee">
        <option v-for="playfee in playfees" v-bind:value="playfee.id">
          {{ playfee.amount }}
        </option>
      </select>
      <button @click="btnFunNewGame">新建游戏</button>
    </div>

    <div id="moragame-open">
      <span>待加入的游戏：</span>
      <select v-model="select_open_game">
        <option v-for="opengame in opengames" v-bind:value="opengame.id">
          {{ opengame.describe }}
        </option>
      </select>
      <button @click="btnFunNewGame">新建游戏</button>
    </div>
  </div>
</template>

<script>
  import tp from 'tp-js-sdk';
  import $ from 'jquery';
  import timeout from 'timeout';

  export default {
    name: 'Moragame',
    data() {
      return {
        select_account: '未登录',
        select_fee:'1',
        select_account_tokens:'0.0000 EOS,0.0000 MORA',
        tpaccounts: [
          {
            name: '未登录'
          }
        ],
        playfees: [
          {
            id: 1,
            amount: '0.1000 EOS'
          },
          {
            id: 2,
            amount: '100.0000 MORA'
          }
        ]
      }
    },
    created() {
      // timeout.timeout('myTimeout', 1000, function () {
      //   console.log("aaaaaa");
      //   return true;
      // });
      window.tp = tp;
    },
    methods: {
      btnFunNewGame() {
        alert("btnFunNewGame");
      },
      changeValue() {
        alert("changeValue");
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
