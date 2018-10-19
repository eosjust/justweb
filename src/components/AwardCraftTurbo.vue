<template>
  <el-row>
    <el-row type="flex" justify="center">
      <el-carousel :interval="4000" type="card" height="200px">
        <el-carousel-item>

        </el-carousel-item>
      </el-carousel>
    </el-row>
    <mu-divider></mu-divider>
    <el-row type="flex" justify="center" style="margin-top: 15px;">
      <el-col :span="1">
      </el-col>
      <el-col :span="22">
        <el-row type="flex" justify="space-between" style="margin-left: 12px;margin-right: 12px;">
          <el-col :span="6">
            <div class="award-sub-title">即将完成</div>
          </el-col>
          <el-col :span="6">
            <div class="award-sub-title-link" style="text-align: right"></div>
          </el-col>
        </el-row>
        <el-row>
          <AwardSlot></AwardSlot>
          <AwardSlot></AwardSlot>
          <AwardSlot></AwardSlot>
          <AwardSlot></AwardSlot>
          <AwardSlot></AwardSlot>
          <AwardSlot></AwardSlot>
          <AwardSlot></AwardSlot>
          <AwardSlot></AwardSlot>
        </el-row>
      </el-col>
      <el-col :span="1">
      </el-col>
    </el-row>
    <mu-divider></mu-divider>
    <mu-load-more :loading="loading" @load="load">
      <el-row type="flex" justify="center" style="margin-top: 15px;">
        <el-col :span="1">
        </el-col>
        <el-col :span="22">
          <el-row type="flex" justify="space-between" style="margin-left: 12px;margin-right: 12px;">
            <el-col :span="6">
              <div class="award-sub-title">全部</div>
            </el-col>
            <el-col :span="6">
              <div class="award-sub-title-link" style="text-align: right"></div>
            </el-col>
          </el-row>
          <el-row>
            <AwardSlot></AwardSlot>
            <AwardSlot></AwardSlot>
            <AwardSlot></AwardSlot>
            <AwardSlot></AwardSlot>
            <AwardSlot></AwardSlot>
            <AwardSlot></AwardSlot>
            <AwardSlot></AwardSlot>
            <AwardSlot></AwardSlot>
          </el-row>
        </el-col>
        <el-col :span="1">
        </el-col>
      </el-row>
    </mu-load-more>
  </el-row>
</template>

<script>
  import timeout from 'timeout';
  import bigInt from "big-integer";
  import Identicon from "identicon.js";
  import Big from 'big.js';
  import copy from 'clipboard-copy';
  var hash = require('object-hash');
  import AwardSlot from '@/components/AwardSlot';
    export default {
        name: "AwardCraftTurbo",
      components: {
        AwardSlot,
      },
      data() {
        return {
          currentDate: new Date(),
          loading:false,
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
        load(){
          var that = this;
          timeout.timeout(1000, function () {
            that.loading=false;
          });
          this.loading=true;
        }
      },
      watch: {}
    }
</script>

<style scoped>
  .award-sub-title{
    color: #9e9e9e;
    font-size: 1.2em;
  }
  .award-sub-title-link{
    color: #2196f3;
    font-size: 1.2em;
  }
</style>
