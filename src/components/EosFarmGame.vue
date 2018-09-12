<template>
  <el-row type="flex" justify="center" align="middle">
    <el-col :span="8"></el-col>
    <el-col :span="8" justify="center" align="middle"><h1>10000 Eos</h1></el-col>
    <el-col :span="8"></el-col>
  </el-row>
</template>

<script>
    export default {
        name: "EosFarmGame",
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
        }
      }
    }
</script>

<style scoped>
  .just-button-transform{
    text-transform:none;
  }
</style>
