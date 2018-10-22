<template>
  <el-row>
    <el-row type="flex" justify="center" align="middle"
            style="margin-top: 50px;margin-bottom: 20px;padding-left: 5%;padding-right: 5%;">
      <el-col :xs="1" :sm="3" :md="5" :lg="6" :xl="6">
      </el-col>
      <el-col :xs="22" :sm="18" :md="14" :lg="12" :xl="12">
        <el-tabs type="border-card">
          <el-tab-pane label="购买橱窗">
            <el-row>
              <div class="award-invest-tip-text">购买一个橱窗，获得此橱窗经营权，可以编辑标题，资金量，封面图，经营期内可获得夺宝收益2%，橱窗被买走立即回本并获额外5%收益</div>
            </el-row>
            <el-row type="flex">
              <el-col :span="24">
                <AwardSlotBig :data="curSlot"></AwardSlotBig>
              </el-col>
            </el-row>
            <el-row type="flex" justify="end">
              <mu-button @click="btnBuySlot" color="secondary">确认购买</mu-button>
            </el-row>
          </el-tab-pane>
          <el-tab-pane label="新建橱窗">
            <el-row>
              <div class="award-invest-tip-text">
                新建一个橱窗，永久获得橱窗夺宝收益的2%，新建后获得经营权，可获得经营权交易10%的收益，为了减少橱窗数量，提高已存在橱窗的收益，新建橱窗价格最低100EOS
              </div>
            </el-row>
            <el-row>
              <el-row type="flex" justify="center" style="padding: 10px;">
                <el-input placeholder="长度12以内，.1-5,a-z的英文字符串" v-model="newSlotName">
                  <template slot="prepend">名字</template>
                </el-input>
              </el-row>
              <el-row type="flex" justify="center" style="padding: 10px;">
                <el-input placeholder="" v-model="newSlotTitle">
                  <template slot="prepend">标题</template>
                </el-input>
              </el-row>
              <el-row type="flex" justify="center" style="padding: 10px;">
                <el-input type="number" :step="0.01" placeholder="" v-model="newSlotGoodsPrice">
                  <template slot="prepend">商品价格</template>
                </el-input>
              </el-row>
            </el-row>
            <el-row type="flex" justify="end">
              <mu-button @click="btnNewSlot" color="secondary">确认新建</mu-button>
            </el-row>
          </el-tab-pane>
        </el-tabs>
      </el-col>
      <el-col :xs="1" :sm="3" :md="5" :lg="6" :xl="6">
      </el-col>
    </el-row>

    <el-row type="flex" justify="center" align="middle"
            style="margin-bottom: 50px;padding-left: 5%;padding-right: 5%;">
      <el-col :xs="1" :sm="3" :md="4" :lg="4" :xl="4">
      </el-col>
      <el-col :xs="22" :sm="18" :md="16" :lg="16" :xl="16">

        <el-row>
          <div class="award-invest-tip-text">点击下方橱窗查看详情</div>
        </el-row>
        <el-row>
          <mu-divider></mu-divider>
        </el-row>
        <el-row>
          <AwardSlotSmall v-for="slot in myallslotinfo" :key="slot.key" :data="slot" :isActive="curSlot.key==slot.key"
                          @onclick="btnOnSlotSmallClick"></AwardSlotSmall>
        </el-row>
      </el-col>
      <el-col :xs="1" :sm="3" :md="4" :lg="4" :xl="4">
      </el-col>
    </el-row>
  </el-row>
</template>

<script>
  import timeout from 'timeout';
  import bigInt from "big-integer";
  import Big from 'big.js';
  import AwardSlotSmall from '@/components/AwardSlotSmall';
  import AwardSlotBig from '@/components/AwardSlotBig';

  export default {
    name: "AwardCraftInvest",
    props: ['timerLoop'],
    components: {
      AwardSlotSmall,
      AwardSlotBig
    },
    data() {
      return {
        myallslotinfo: [],
        curUser: "",
        inviterName:"",
        curSlot: {},
        buySlotEos:0,
        newSlotName: "",
        newSlotTitle: "",
        newSlotGoodsPrice: 0,

      }
    },
    created() {
      var that = this;
      this.requestAllSlot();
      timeout.timeout(2000, function () {
        that.requestAllSlot();
        return true;
      });
    },
    mounted() {
      var that = this;
      if (that.$route.query.ref) {
        that.inviterName = that.$route.query.ref;
      } else {
        that.inviterName = "";
      }
    },
    destroyed: function () {

    },
    methods: {
      requestAllSlot() {
        var that = this;
        var eossdkutil = window.eossdkutil;
        eossdkutil.getEosTableRows(
          {
            json: true,
            code: "eosjustturbo",
            scope: "eosjustturbo",
            table: 'slot',
            limit: 1000
          }
        ).then(function (result) {
          var rows = result.data.rows;
          that.myallslotinfo = rows;
          if(that.myallslotinfo&&that.myallslotinfo.length>0){
            if(that.curSlot&&that.curSlot.key){
              for(var ii=0;ii<that.myallslotinfo.length;ii++){
                if(that.curSlot.key==that.myallslotinfo[ii].key){
                  that.curSlot=that.myallslotinfo[ii];
                  console.log("update"+that.curSlot.key);
                }
              }
            }
          }
        }).catch(function (error) {

        });
      },
      btnOnSlotSmallClick(slot) {
        this.curSlot = slot;
      },
      btnBuySlot() {
        var that = this;
        if (this.curSlot && this.curSlot.key) {

        } else {
          that.$message("请选择一个橱窗");
        }
        var slotPirce=Big(this.curSlot.slot_price);
        slotPirce=slotPirce.div(10000);
        if(!slotPirce.gt(0)){
          that.$message("橱窗价格错误");
        }
        var memo="buyslot:" + that.curSlot.key + ";" + that.inviterName + ";";
        var eossdkutil = window.eossdkutil;
        eossdkutil.pushEosAction({
          actions: [
            {
              account: "eosio.token",
              name: "transfer",
              authorization: [
                {
                  actor: that.$store.state.eosUserName,
                  permission: "active"
                }
              ],
              data: {
                from: that.$store.state.eosUserName,
                to: "eosjustturbo",
                quantity: slotPirce.toFixed(4) + " EOS",
                memo: memo,
              }
            }
          ]
        }).then(function (result) {
          that.$message("购买成功");
        }).catch(function (error) {
          that.$message(error);
        });
      },
      btnNewSlot() {
        var that = this;
        if (that.newSlotName && that.newSlotTitle && that.newSlotGoodsPrice
          && that.newSlotName.length > 0 && that.newSlotTitle.length > 0 && that.newSlotGoodsPrice > 0) {
        } else {
          that.$message("请正确填写信息");
        }
        var pricesys=(that.newSlotGoodsPrice*10000).toFixed(0);
        var eossdkutil = window.eossdkutil;
        var memo="";
        memo="newslot:" + that.newSlotName + ";" + that.inviterName + ";"+that.newSlotTitle+";"+pricesys+";";
        eossdkutil.pushEosAction({
          actions: [
            {
              account: "eosio.token",
              name: "transfer",
              authorization: [
                {
                  actor: that.$store.state.eosUserName,
                  permission: "active"
                }
              ],
              data: {
                from: that.$store.state.eosUserName,
                to: "eosjustturbo",
                quantity: "100.0000 EOS",
                memo: memo,
              }
            }
          ]
        }).then(function (result) {
          that.$message("购买成功");
        }).catch(function (error) {
          that.$message(error);
        });
      },
      load() {

      }
    },
    watch: {}
  }
</script>

<style scoped>
  .award-invest-tip-text {
    color: #999;
    font-size: 0.9em;
    padding-left: 10px;
    padding-right: 10px;
  }
</style>
