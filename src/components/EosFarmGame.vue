<template>
  <div id="eosfarm-content">
    <el-row type="flex" justify="center" align="middle">
      <el-col :span="8"></el-col>
      <el-col :span="8" justify="center" align="middle"><h1>10000 Eos</h1></el-col>
      <el-col :span="8"></el-col>
    </el-row>
    <el-row type="flex" justify="center" align="middle">
      <el-col :span="8"></el-col>
      <el-col :span="8" justify="center" align="middle">
        <mu-button flat ripple color="primary" @click="btnLogin">
          BTNTEST
        </mu-button>
      </el-col>
      <el-col :span="8"></el-col>
    </el-row>
    <el-row type="flex" justify="center" align="middle">
      <el-col :span="8"></el-col>
      <el-col :span="8" justify="center" align="middle"><h4>{{walletinfo}}</h4></el-col>
      <el-col :span="8"></el-col>
    </el-row>
  </div>
</template>

<script>
    export default {
        name: "EosFarmGame",
      data() {
        return {
          walletinfo: "ooooooo"
        }
      },
      created() {

      },
      methods: {
        btnLogin() {
          var eossdkutil = window.eossdkutil;
          var that = this;
          that.walletinfo="hehehehhe";
          eossdkutil.getWallets().then(function (data) {
            that.walletinfo=data.wallets.eos[0].name;
          });
        }
      }
    }
</script>

<style scoped>
  .just-button-transform{
    text-transform:none;
  }
</style>
