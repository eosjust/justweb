<template>
  <mu-list textline="three-line">
    <mu-list-item avatar nested :ripple="false" :open="treeopen == eostree.id" button v-for="eostree in data"
                  :key="eostree.id" @click="treeopen = (treeopen == eostree.id)?-1:eostree.id">
      <mu-list-item-action>
        <mu-avatar>
          <img :src="treeimg(eostree.life_ret)">
        </mu-avatar>
      </mu-list-item-action>
      <mu-list-item-content>
        <mu-list-item-title>trees: {{eostree.tree_amount}}</mu-list-item-title>
        <mu-list-item-sub-title>
          cost: {{eostree.eos_amount_show}}
        </mu-list-item-sub-title>
        <mu-list-item-sub-title>
          income: {{eostree.income_show-eostree.has_withdraw_show}}
        </mu-list-item-sub-title>
      </mu-list-item-content>
      <mu-list-item-action>
        <mu-list-item-after-text>{{eostree.end_time_show}}</mu-list-item-after-text>
        <mu-icon class="toggle-icon" size="24" value="keyboard_arrow_down"></mu-icon>
      </mu-list-item-action>
      <mu-list-item button :ripple="false" slot="nested">
        <mu-list-item-content>
          <mu-list-item-sub-title>
            buy drug times: {{eostree.continue_times}}
          </mu-list-item-sub-title>
          <mu-list-item-sub-title>
            has withdraw: {{eostree.has_withdraw_show}}
          </mu-list-item-sub-title>
        </mu-list-item-content>
      </mu-list-item>
      <mu-list-item button :ripple="false" slot="nested">
        <mu-list-item-action>
          <mu-button @click="btnBuyDrug(eostree.id)" style="margin-left: 10px;" small color="success">买药</mu-button>
        </mu-list-item-action>
        <mu-list-item-action>
          <mu-button @click="btnWithDrawTree(eostree.id)" style="margin-left: 10px;" small color="primary">提现</mu-button>
        </mu-list-item-action>
        <mu-list-item-action>
          <mu-button @click="btnDeleteTree(eostree.id)" style="margin-left: 10px;" small color="error">移除</mu-button>
        </mu-list-item-action>
      </mu-list-item>
    </mu-list-item>
    <mu-divider></mu-divider>
  </mu-list>
</template>

<script>
  export default {
    name: "MyEOsTree",
    props: ['data'],
    mounted() {

    },
    data() {
      return {
        treeopen: -1,
        LIFE_ALIVE: 20,
        LIFE_SICK: 18,
        LIFE_DEAD: 16,
        LIFE_VOID: 14,
        farmcontract: "eosjustaward",
        imgEosLand: require("../assets/eos_land_1.png"),
        imgEosTree: require("../assets/eos_tree_1.png"),
        imgEosTree1: require("../assets/eos_tree_1.png"),
        imgEosTree2: require("../assets/eos_tree_2.png"),
        imgEosTree3: require("../assets/eos_tree_3.png"),
      }
    },
    computed: {
      // 计算属性的 getter


    },
    methods: {
      setTreeData(data) {

      },
      treeimg(liferet) {
        if (liferet == this.LIFE_ALIVE) {
          return this.imgEosTree1;
        } else if (liferet == this.LIFE_SICK) {
          return this.imgEosTree2;
        } else if (liferet == this.LIFE_DEAD) {
          return this.imgEosTree3;
        }
        return this.imgEosTree1;
      },
      btnBuyDrug(treeid) {
        var eossdkutil = window.eossdkutil;
        var that = this;
        eossdkutil.pushEosAction({
          actions: [
            {
              account: that.farmcontract,
              name: "buydrug",
              authorization: [
                {
                  actor: that.farmcontract,
                  permission: "active"
                }
              ],
              data: {
                treeid: treeid,
                user: that.$store.state.eosUserName,
                quantity: "1.0000 EOS"
              }
            }
          ]
        }).then(function (result) {
          that.$message("购买成功");
        }).catch(function (error) {
          that.$message("购买失败");
        });
      },
      btnDeleteTree(treeid) {
        var eossdkutil = window.eossdkutil;
        var that = this;
        eossdkutil.pushEosAction({
          actions: [
            {
              account: that.farmcontract,
              name: "deltree",
              authorization: [
                {
                  actor: that.farmcontract,
                  permission: "active"
                }
              ],
              data: {
                treeid: treeid,
                user: that.$store.state.eosUserName
              }
            }
          ]
        }).then(function (result) {
          that.$message("操作成功");
        }).catch(function (error) {
          that.$message("操作失败");
        });
      },
      btnWithDrawTree(treeid) {
        var eossdkutil = window.eossdkutil;
        var that = this;
        eossdkutil.pushEosAction({
          actions: [
            {
              account: that.farmcontract,
              name: "withdraw",
              authorization: [
                {
                  actor: that.farmcontract,
                  permission: "active"
                }
              ],
              data: {
                treeid: treeid,
                all: 0,
                user: that.$store.state.eosUserName
              }
            }
          ]
        }).then(function (result) {
          that.$message("操作成功");
        }).catch(function (error) {
          that.$message("操作失败");
        });
      }

    },
    watch: {}
  }
</script>

<style scoped>

</style>
