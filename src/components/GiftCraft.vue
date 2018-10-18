<template>

  <el-row class="gift-bg">
    <el-row type="flex" justify="center">
      <el-carousel :interval="4000" type="card" height="200px">
        <el-carousel-item>

        </el-carousel-item>
      </el-carousel>
    </el-row>
    <el-row type="flex" justify="center">
      <el-col :span="1">
      </el-col>
      <el-col :span="22">
        <el-row type="flex" justify="space-between" style="margin-left: 12px;margin-right: 12px;">
          <el-col :span="6">
            <div class="gift-sub-title">即将完成</div>
          </el-col>
          <el-col :span="6">
            <div class="gift-sub-title-link" style="text-align: right">更多>></div>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="$store.state.ismobile?12:6">
            <GiftSlot></GiftSlot>
          </el-col>
          <el-col :span="$store.state.ismobile?12:6">
            <GiftSlot></GiftSlot>
          </el-col>
          <el-col :span="$store.state.ismobile?12:6">
            <GiftSlot></GiftSlot>
          </el-col>
          <el-col :span="$store.state.ismobile?12:6">
            <GiftSlot></GiftSlot>
          </el-col>
          <el-col :span="$store.state.ismobile?12:6">
            <GiftSlot></GiftSlot>
          </el-col>
          <el-col :span="$store.state.ismobile?12:6">
            <GiftSlot></GiftSlot>
          </el-col>
          <el-col :span="$store.state.ismobile?12:6">
            <GiftSlot></GiftSlot>
          </el-col>
          <el-col :span="$store.state.ismobile?12:6">
            <GiftSlot></GiftSlot>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="1">
      </el-col>
    </el-row>

  </el-row>
</template>

<script>
  import GiftSlot from '@/components/GiftSlot';
    export default {
        name: "GiftCraft",
      components: {
        GiftSlot,
      },
      data() {
        return {
          currentDate: new Date(),
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
      },
      watch: {}
    }
</script>

<style scoped>
  .gift-bg{
    background-color: #ffffff;
  }
  .gift-sub-title{
    color: #9e9e9e;
    font-size: 1.2em;
  }
  .gift-sub-title-link{
    color: #2196f3;
    font-size: 1.2em;
  }
</style>
