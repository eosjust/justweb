<template>
  <el-card :body-style="{ padding: '0px' }" style="padding: 0px;margin: 6px;">

    <el-row type="flex" justify="space-between" style="margin-top: 5px;">
      <el-col :span="6">
        <span class="award-slot-big-key-text">just</span>
      </el-col>
      <el-col :span="6" v-show="false">
        <el-row type="flex" justify="end">
          <mu-button flat small color="secondary">
            100
            <mu-icon right value="thumb_up"></mu-icon>
          </mu-button>

        </el-row>
      </el-col>
    </el-row>
    <el-row style="padding: 12px;">
      <el-row type="flex" justify="space-between" align="middle" style="padding-bottom: 10px;">
        <el-col :span="16">
          <div class="award-slot-big-title-text">iPhone6 Plus 5.5英寸</div>
          <div class="award-slot-big-title-text">商品价格:2000EOS</div>
          <div class="award-slot-big-title-text">轮数:8</div>
          <div class="award-slot-big-title-text">历史总资金:8000 EOS</div>
          <div class="award-slot-big-title-text">拥有者:justtest1111</div>
          <div class="award-slot-big-title-text">经营者:justtest1111</div>
          <div class="award-slot-big-title-text">经营权价格:1.5 EOS</div>
        </el-col>
        <el-col :span="8">
          <img src="../assets/gift5.jpg" class="image">
        </el-col>
      </el-row>

      <el-progress :percentage="70" :show-text="false" status="success"></el-progress>
      <el-row type="flex" justify="space-between">
        <el-col :span="6">
          <div class="award-slot-big-text-left">已参与</div>
          <div class="award-slot-big-text-left">200EOS</div>
        </el-col>
        <el-col :span="6">
          <div></div>
          <div></div>
        </el-col>
        <el-col :span="6">
          <div class="award-slot-big-text-right">剩余</div>
          <div class="award-slot-big-text-right">200EOS</div>
        </el-col>
      </el-row>
      <el-row type="flex" justify="space-between">
        <el-col :span="6">
        </el-col>
        <el-col :span="6">
          <el-row type="flex" justify="end">
          </el-row>
        </el-col>
      </el-row>
    </el-row>
  </el-card>
</template>

<script>
  export default {
    name: "AwardSlotBig",
    props: ['data'],
    mounted() {

    },
    data() {
      return {}
    },
    methods: {},
    watch: {}
  }
</script>

<style scoped>
  .award-slot-big-key-text {
    color: #999;
    font-size: 0.9em;
    padding-left: 5px;
  }
  .award-slot-big-title-text {
    color: #999;
    font-size: 0.9em;
    padding-left: 5px;
  }
  .award-slot-big-title-rb-text {
    color: #999;
    font-size: 0.9em;
    padding-left: 5px;
  }
  .award-slot-big-price-text {
    color: #999;
    font-size: 0.9em;
    padding-left: 5px;
  }
  .award-slot-big-text-left {
    color: #999;
    font-size: 0.9em;
    padding-left: 5px;
  }
  .award-slot-big-text-right {
    color: #999;
    font-size: 0.9em;
    padding-right: 5px;
    text-align: right;
  }
  .image {
    width: 90%;
    height: auto;
    display: block;
  }
</style>
