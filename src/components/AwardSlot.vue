<template>
  <el-col :span="$store.state.ismobile?12:6" >
    <el-card :body-style="{ padding: '0px' }" style="padding: 0px;margin: 6px;">
      <el-row type="flex" justify="space-between" style="margin-top: 5px;">
        <el-col :span="6">
          <span class="award-slot-key-text">just</span>
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
      <img src="../assets/gift5.jpg" class="image">
      <el-row style="padding: 12px;">
        <div class="award-slot-title-text">iPhone6 Plus 5.5英寸</div>
        <div class="award-slot-price-text">价值:2000EOS</div>
        <el-progress :percentage="70" :show-text="false" status="success"></el-progress>
        <el-row type="flex" justify="space-between">
          <el-col :span="6">
            <div class="award-slot-text-left">200EOS</div>
            <div class="award-slot-text-left">已参与</div>
          </el-col>
          <el-col :span="6">
            <div></div>
            <div></div>
          </el-col>
          <el-col :span="6">
            <div class="award-slot-text-right">100EOS</div>
            <div class="award-slot-text-right">剩余</div>
          </el-col>
        </el-row>
        <el-row type="flex" justify="space-between">
          <el-col :span="6">
          </el-col>
          <el-col :span="6">
            <el-row type="flex" justify="end">
              <mu-button flat color="secondary">立即参加</mu-button>
            </el-row>
          </el-col>
        </el-row>
      </el-row>
    </el-card>
  </el-col>

</template>

<script>
  export default {
    name: "AwardSlot",
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

  .award-slot-key-text {
    color: #999;
    font-size: 0.9em;
    padding-left: 5px;
  }
  .award-slot-title-text {
    color: #999;
    font-size: 0.9em;
    padding-left: 5px;
  }
  .award-slot-price-text {
    color: #999;
    font-size: 0.9em;
    padding-left: 5px;
  }
  .award-slot-text-left {
    color: #999;
    font-size: 0.9em;
    padding-left: 5px;
  }
  .award-slot-text-right {
    color: #999;
    font-size: 0.9em;
    padding-right: 5px;
    text-align: right;
  }
  .image {
    width: 100%;
    height: auto;
    display: block;
  }
</style>
