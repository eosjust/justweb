<template>
  <el-card :body-style="{ padding: '0px' }" style="padding: 0px;margin: 6px;">
    <span class="gift-slot-key-text">just</span>
    <img src="../assets/gift5.jpg" class="image">
    <el-row style="padding: 12px;">
      <div class="gift-slot-title-text">iPhone6 Plus 5.5英寸</div>
      <div class="gift-slot-price-text">价值:2000EOS</div>
      <el-progress :percentage="70" :show-text="false" status="success"></el-progress>
      <el-row type="flex" justify="space-between">
        <el-col :span="6">
          <div class="gift-slot-text-left">200EOS</div>
          <div class="gift-slot-text-left">已参与</div>
        </el-col>
        <el-col :span="6">
          <div></div>
          <div></div>
        </el-col>
        <el-col :span="6">
          <div class="gift-slot-text-right">100EOS</div>
          <div class="gift-slot-text-right">剩余</div>
        </el-col>
      </el-row>
      <el-row type="flex" justify="center">
        <mu-button color="secondary">立即参加</mu-button>
      </el-row>
    </el-row>
  </el-card>
</template>

<script>
  export default {
    name: "",
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

  .gift-slot-key-text {
    color: #999;
    font-size: 0.9em;
    padding-left: 5px;
  }
  .gift-slot-title-text {
    color: #999;
    font-size: 0.9em;
    padding-left: 5px;
  }
  .gift-slot-price-text {
    color: #999;
    font-size: 0.9em;
    padding-left: 5px;
  }
  .gift-slot-text-left {
    color: #999;
    font-size: 0.9em;
    padding-left: 5px;
  }
  .gift-slot-text-right {
    color: #999;
    font-size: 0.9em;
    padding-right: 5px;
    text-align: right;
  }

  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    height: auto;
    display: block;
  }
</style>
