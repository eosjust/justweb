<template>

  <div id="setting-content">
    <el-row type="flex" justify="center" align="middle">
      <el-col :span="8"></el-col>
      <el-col :span="8" justify="center" align="middle"><h1>10000 Eos</h1></el-col>
      <el-col :span="8"></el-col>
    </el-row>
    <el-row type="flex" justify="center" align="middle">
      <el-col :span="8"></el-col>
      <el-col :span="8" justify="center" align="middle">
        <mu-button ripple color="primary" @click="btnTest">
          BTNTEST
        </mu-button>
      </el-col>
      <el-col :span="8"></el-col>
    </el-row>
    <el-row type="flex" justify="center" align="middle">
      <el-col :span="8"></el-col>
      <el-col :span="8" justify="center" align="middle"><div>{{testinfo}}</div></el-col>
      <el-col :span="8"></el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: 'Setting',
    data() {
      return {
        testinfo:'hehe',
      }
    },
    created() {
      // this.$store.commit('changeEnv', 'ooo');
    },
    methods: {
      btnTest2() {
        var eossdkutil = window.eossdkutil;
        var that = this;
        that.testinfo="hehehehhe";
        eossdkutil.pushEosAction({
          actions: [
            {
              account: "justgamemora",
              name: "claimad",
              authorization: [
                {
                  actor: that.$store.state.eosUserName,
                  permission: "active"
                }
              ],
              data: {
                account: that.$store.state.eosUserName
              }
            }
          ]
        }).then(function (result) {
          that.testinfo=JSON.stringify(result);
        }).catch(function (error) {
          that.testinfo=JSON.stringify(error);
        });
      },
      btnTest() {
        var eossdkutil = window.eossdkutil;
        var that = this;
        that.testinfo="hehehehhe";
        eossdkutil.getEosTableRows(
          {
            json: true,
            code: 'eosjustaward',
            scope: 'eosjustaward',
            table: 'gameinfo',
            limit: 20
          }
        ).then(function (data) {
          that.testinfo=JSON.stringify(data);
        }).catch(function (error) {
          that.testinfo=JSON.stringify(error);
        });
      }
    }
  }
</script>

<style scoped>

</style>
