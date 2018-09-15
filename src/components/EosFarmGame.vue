<template>
  <div id="eosfarm-content">
    <el-row type="flex" justify="center" align="middle" style="margin-top: 50px;">
      <el-col :span="8"></el-col>
      <el-col :span="8" justify="center" align="middle">
        <div class="p3d-green">{{countdown+""}}</div>
      </el-col>
      <el-col :span="8"></el-col>
    </el-row>
    <el-row type="flex" justify="center" align="middle">
      <el-col :span="8"></el-col>
      <el-col :span="8" justify="center" align="middle">
        <div class="p3d-green">{{totaleos}}</div>
      </el-col>
      <el-col :span="8"></el-col>
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
      </el-col>
      <el-col :span="8"></el-col>
    </el-row>
    <el-row type="flex" justify="center" align="middle">
      <el-col :span="8"></el-col>
      <el-col :span="8" justify="center" align="middle"><h4>{{walletinfo}}</h4></el-col>
      <el-col :span="8"></el-col>
    </el-row>

    <el-row >
      <el-col :span="$store.state.ismobile?24:12">
        <el-row type="flex" justify="center" align="middle">
          <el-col :span="20">
            <el-tabs type="border-card">
              <el-tab-pane label="购买">用户管理</el-tab-pane>
              <el-tab-pane label="提现">配置管理</el-tab-pane>
              <el-tab-pane label="返佣">角色管理</el-tab-pane>
            </el-tabs>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="$store.state.ismobile?24:12">
        <el-row type="flex" justify="center" align="middle">
          <el-col :span="20">
            <el-tabs type="border-card">
              <el-tab-pane label="游戏状态">游戏状态</el-tab-pane>
              <el-tab-pane label="近期交易">近期交易</el-tab-pane>
            </el-tabs>
          </el-col>
        </el-row>
      </el-col>
    </el-row>

  </div>
</template>

<script>
  import timeout from 'timeout';
  import bigInt from "big-integer";
  import Big from 'big.js';
  export default {
    name: "EosFarmGame",
    data() {
      return {
        walletinfo: "ooooooo",
        farmcontract: "eosjustaward",
        gameinfo:null,
        totaleos:"0.0000 EOS",
        countdown:null,
        endtime: null,
      }
    },
    created() {
      this.endtime = Date.parse(new Date())/1000+86400;
      var that = this;
      timeout.timeout(1000, function () {
        that.requestGameInfo();
        var delta = that.endtime-Date.parse(new Date())/1000;
        that.countdown=that.formatSeconds(delta);
        return true;
      });
    },
    methods: {
      btnStart() {
        var eossdkutil = window.eossdkutil;
        var that = this;
        eossdkutil.pushEosAction({
          actions: [
            {
              account: "eosjustaward",
              name: "start",
              authorization: [
                {
                  actor: "eosjustaward",
                  permission: "active"
                }
              ],
              data: {
              }
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
              account: "eosjustaward",
              name: "reset",
              authorization: [
                {
                  actor: "eosjustaward",
                  permission: "active"
                }
              ],
              data: {
              }
            }
          ]
        }).then(function (result) {
          that.$message("yes");
        }).catch(function (error) {
          that.$message("fail");
        });
      },
      btnBuy() {
        var eossdkutil = window.eossdkutil;
        var that = this;
        eossdkutil.pushEosAction({
          actions: [
            {
              account: "eosjustaward",
              name: "test",
              authorization: [
                {
                  actor: that.$store.state.eosUserName,
                  permission: "active"
                }
              ],
              data: {
                user: that.$store.state.eosUserName,
                quantity:"1000.0000 EOS",
                inviter:"justtest2222"
              }
            }
          ]
        }).then(function (result) {
          that.$message({
            message: '购买成功',
            type: 'success'
          });
        }).catch(function (error) {
          that.$message({
            message: '购买失败',
            type: 'warning'
          });
        });
      },
      requestGameInfo() {
        var that = this;
        var eossdkutil = window.eossdkutil;
        eossdkutil.getEosTableRows(
          {
            json: true,
            code: 'eosjustaward',
            scope: 'eosjustaward',
            table: 'gameinfo',
            limit: 20
          }
        ).then(function (result) {
          var rows = result.data.rows;
          var len = rows.length;
          var inx = len - 1;
          var gameinfo = rows[inx];
          that.gameinfo=gameinfo;
          that.endtime = that.gameinfo.end_time;
          var bigtotal=Big(gameinfo.total_pool).div(10000).toFixed(4)+" EOS";
          that.totaleos=bigtotal;

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
        var result=this.time2Str(hourTime)+":"+this.time2Str(minuteTime)+":"+this.time2Str(secondTime);
        return result;
      },time2Str(time){
        var str="00";
        if(time>0){
          str=time<10?"0"+time:""+time;
        }
        return str;
      }
    }
  }
</script>

<style scoped>
  .just-button-transform {
    text-transform: none;
  }

  .p3d-green {
    text-shadow: rgb(43, 0, 43) 0px 0px 5px, rgb(0, 204, 0) 0px 0px 20px, rgb(0, 255, 0) 0px 0px 10px;
    font-size: 1.9em;
    color: white;
  }
</style>
