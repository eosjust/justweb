<template>

  <el-row class="award-bg">
    <mu-tabs :value.sync="award_tab_active" inverse color="secondary" text-color="rgba(0, 0, 0, .54)"  left>
      <mu-tab>夺宝</mu-tab>
      <mu-tab>投资</mu-tab>
      <mu-tab>我的</mu-tab>
    </mu-tabs>
    <AwardCraftTurbo v-show="award_tab_active==0"></AwardCraftTurbo>
    <AwardCraftInvest v-show="award_tab_active==1"></AwardCraftInvest>
    <AwardCraftMine v-show="award_tab_active==2"></AwardCraftMine>
  </el-row>
</template>

<script>
  import AwardCraftTurbo from '@/components/AwardCraftTurbo';
  import AwardCraftInvest from '@/components/AwardCraftInvest';
  import AwardCraftMine from '@/components/AwardCraftMine';
    export default {
        name: "AwardCraft",
      components: {
        AwardCraftTurbo,
        AwardCraftInvest,
        AwardCraftMine,
      },
      data() {
        return {
          award_tab_active:0,
        }
      },
      created() {

      },
      mounted() {

      },
      destroyed: function () {

      },
      methods: {

      },
      watch: {}
    }
</script>

<style scoped>
  .award-bg{
    background-color: #ffffff;
  }
</style>
