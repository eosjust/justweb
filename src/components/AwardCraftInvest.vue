<template>
  <el-row>
    <el-row type="flex" justify="center" align="middle"
            style="margin-top: 50px;margin-bottom: 20px;padding-left: 5%;padding-right: 5%;">
      <el-col :xs="1" :sm="3" :md="5" :lg="6" :xl="6">
      </el-col>
      <el-col :xs="22" :sm="18" :md="14" :lg="12" :xl="12">
          <el-tabs type="border-card">
            <el-tab-pane label="购买坑位">
              <el-row>
                <div class="award-invest-tip-text">购买一个坑位，获得此坑位经营权，可以编辑标题，资金量，封面图，经营期内3%收益，坑位被买走立即获110%回报</div>
              </el-row>
              <el-row type="flex">
                <el-col :span="24">
                  <AwardSlotBig></AwardSlotBig>
                </el-col>
              </el-row>
              <el-row type="flex" justify="end">
                <mu-button color="secondary">确认购买</mu-button>
              </el-row>
            </el-tab-pane>
            <el-tab-pane label="新建坑位">
              <el-row>
                <div class="award-invest-tip-text">新建一个坑位，永久获得坑位3%收益，新建后赠送经营权，但经营权被买走则无权编辑，为了减少坑位数量，提高已存在坑位的收益，新建坑位价格最低100EOS</div>
              </el-row>
              <el-row>
                <el-row type="flex" justify="center" style="padding: 10px;">
                  <el-input placeholder="长度12以内，.1-5,a-z的英文字符串" v-model="buyeos">
                    <template slot="prepend">名字</template>
                  </el-input>
                </el-row>
                <el-row type="flex" justify="center" style="padding: 10px;">
                  <el-input placeholder="" v-model="buyeos">
                    <template slot="prepend">标题</template>
                  </el-input>
                </el-row>
                <el-row type="flex" justify="center" style="padding: 10px;">
                  <el-input placeholder="" v-model="buyeos">
                    <template slot="prepend">商品价格</template>
                  </el-input>
                </el-row>
              </el-row>
              <el-row type="flex" justify="end">
                <mu-button color="secondary">确认新建</mu-button>
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
          <AwardSlotSmall></AwardSlotSmall>
          <AwardSlotSmall></AwardSlotSmall>
          <AwardSlotSmall></AwardSlotSmall>
          <AwardSlotSmall></AwardSlotSmall>
          <AwardSlotSmall></AwardSlotSmall>
          <AwardSlotSmall></AwardSlotSmall>
          <AwardSlotSmall></AwardSlotSmall>
          <AwardSlotSmall></AwardSlotSmall>
          <AwardSlotSmall></AwardSlotSmall>
          <AwardSlotSmall></AwardSlotSmall>
        </el-row>
      </el-col>
      <el-col :xs="1" :sm="3" :md="4" :lg="4" :xl="4">
      </el-col>
    </el-row>
  </el-row>
</template>

<script>
  import AwardSlotSmall from '@/components/AwardSlotSmall';
  import AwardSlotBig from '@/components/AwardSlotBig';
  export default {
    name: "AwardCraftInvest",
    components: {
      AwardSlotSmall,
      AwardSlotBig
    },
    data() {
      return {
        tabInvestActive:0,
        award_tab_active: 1,
        loading: false,
      }
    },
    created() {

    },
    mounted() {

    },
    destroyed: function () {

    },
    methods: {
      btnGetImg64() {
      },
      btnStart() {

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
