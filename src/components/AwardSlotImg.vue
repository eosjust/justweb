<template>
  <el-col :span="$store.state.ismobile?12:6" >
    <el-card :body-style="{ padding: '0px' }" style="padding: 0px;margin: 6px;">
      <img src="../assets/gift5.jpg" class="image">
      <el-row style="padding: 12px;">
        <div class="award-slot-img-title-text">占用内存:200kb</div>
        <div class="award-slot-img-title-text">上传进度:100/200</div>
        <el-row type="flex" justify="space-between">
          <el-col :span="6">
            <mu-button flat color="secondary">继续上传</mu-button>
          </el-col>
          <el-col :span="6">
            <el-row type="flex" justify="end">
              <mu-button flat color="secondary">删除</mu-button>
            </el-row>
          </el-col>
        </el-row>
      </el-row>
    </el-card>
  </el-col>
</template>

<script>
  export default {
    name: "AwardSlotImg",
    props: ['data'],
    mounted() {

    },
    data() {
      return {
        isActive:false,
      }
    },
    methods: {
      onSlotSmallClick(){
        this.isActive=!this.isActive;
      }
    },
    watch: {}
  }
</script>

<style scoped>
  .award-slot-img-key-text {
    color: #999;
    font-size: 0.9em;
    padding-left: 5px;
  }
  .award-slot-img-title-text {
    color: #999;
    font-size: 0.9em;
    padding-left: 5px;
  }
  .award-slot-img-price-text {
    color: #999;
    font-size: 0.9em;
    padding-left: 5px;
  }
  .award-slot-img-text-left {
    color: #999;
    font-size: 0.9em;
    padding-left: 5px;
  }
  .award-slot-img-text-right {
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
