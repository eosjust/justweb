<template>
  <el-row>
    <el-row type="flex" justify="center" style="margin-top: 15px;">
      <el-col :span="1">
      </el-col>
      <el-col :span="22">
        <el-row type="flex" justify="space-between" style="margin-left: 12px;margin-right: 12px;">
          <el-col :span="6">
            <div class="award-sub-title">我参加的</div>
          </el-col>
          <el-col :span="6">
            <div class="award-sub-title-link" style="text-align: right"></div>
          </el-col>
        </el-row>
        <el-row>
          <!--<AwardSlotSmall></AwardSlotSmall>-->
          <!--<AwardSlotSmall></AwardSlotSmall>-->
          <!--<AwardSlotSmall></AwardSlotSmall>-->
        </el-row>
      </el-col>
      <el-col :span="1">
      </el-col>
    </el-row>
    <mu-divider></mu-divider>
    <el-row type="flex" justify="center" style="margin-top: 15px;">
      <el-col :span="1">
      </el-col>
      <el-col :span="22">
        <el-row type="flex" justify="space-between" style="margin-left: 12px;margin-right: 12px;">
          <el-col :span="6">
            <div class="award-sub-title">我拥有的</div>
          </el-col>
          <el-col :span="6">
            <div class="award-sub-title-link" style="text-align: right"></div>
          </el-col>
        </el-row>
        <el-row>
          <!--<AwardSlotSmall></AwardSlotSmall>-->
          <!--<AwardSlotSmall></AwardSlotSmall>-->
          <!--<AwardSlotSmall></AwardSlotSmall>-->
        </el-row>
      </el-col>
      <el-col :span="1">
      </el-col>
    </el-row>
    <mu-divider></mu-divider>
    <el-row type="flex" justify="center" style="margin-top: 15px;">
      <el-col :span="1">
      </el-col>
      <el-col :span="22">
        <el-row type="flex" justify="space-between" style="margin-left: 12px;margin-right: 12px;">
          <el-col :span="6">
            <div class="award-sub-title">我经营的</div>
          </el-col>
          <el-col :span="6">
            <div class="award-sub-title-link" style="text-align: right"></div>
          </el-col>
        </el-row>
        <el-row>
          <!--<AwardSlotSmall></AwardSlotSmall>-->
          <!--<AwardSlotSmall></AwardSlotSmall>-->
          <!--<AwardSlotSmall></AwardSlotSmall>-->
        </el-row>
      </el-col>
      <el-col :span="1">
      </el-col>
    </el-row>
    <mu-divider></mu-divider>
    <el-row type="flex" justify="center" style="margin-top: 15px;">
      <el-col :span="1">
      </el-col>
      <el-col :span="22">
        <el-row type="flex" justify="space-between" style="margin-left: 12px;margin-right: 12px;">
          <el-col :span="6">
            <div class="award-sub-title">我的图片</div>
          </el-col>
          <el-col :span="6">
            <div class="award-sub-title-link" style="text-align: right"></div>

          </el-col>
        </el-row>
        <el-row>
          <AwardSlotImg v-for="userimg in myuserimg" :key="userimg.id" :data="userimg"></AwardSlotImg>
          <el-col :span="$store.state.ismobile?24:12">
            <el-card :body-style="{ padding: '0px' }" style="padding: 0px;margin: 6px;">
              <el-row style="padding: 12px;">
                <el-row type="flex" justify="center" align="middle">
                  <croppa v-model="myCroppa"
                          placeholder="Click to Add Image"
                          @loading-end="calImgFile"
                          @image-remove="calImgFile"
                          accept=".jpg,.gif,.jpeg,.png"
                          :placeholder-font-size="16"
                          canvas-color="transparent"
                          :prevent-white-space="true"
                          :show-loading="true"
                          :width="200"
                          :height="200"
                          :quality="1">
                  </croppa>
                </el-row>
                <div class="award-upimg-text">清晰度:</div>
                <el-slider
                  style="margin-left: 10px;margin-right: 10px;"
                  v-model="imgQualitySlideVal"
                  @change="calImgFile"
                  :step="5"
                  show-stops>
                </el-slider>
                <div class="award-upimg-text">占用内存:{{nowImg.sizeStr}}</div>
                <div class="award-upimg-text">hash:{{nowImg.hash}}</div>
                <el-row type="flex" justify="space-between">
                  <el-col :span="6">
                  </el-col>
                  <el-col :span="6">
                    <el-row type="flex" justify="end">
                      <mu-button @click="onUploadClick" flat color="secondary">上传</mu-button>
                    </el-row>
                  </el-col>
                </el-row>
              </el-row>
            </el-card>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="1">
      </el-col>
    </el-row>
  </el-row>
</template>

<script>
  import timeout from 'timeout';
  import bigInt from "big-integer";
  import Identicon from "identicon.js";
  import Big from 'big.js';
  import copy from 'clipboard-copy';
  import hash from 'object-hash';
  import AwardSlotSmall from '@/components/AwardSlotSmall';
  import AwardSlotBig from '@/components/AwardSlotBig';
  import AwardSlotImg from '@/components/AwardSlotImg';
  import AwardSlot from '@/components/AwardSlot';

  export default {
    name: "AwardCraftMine",
    components: {
      AwardSlot,
      AwardSlotSmall,
      AwardSlotBig,
      AwardSlotImg,
    },
    data() {
      return {
        myCroppa: {},
        loading: false,
        timerLoop:false,
        imgQualitySlideVal: 60,
        myuserimg: [],
        nowImg: {
          hash: "",
          b64: "",
          size: 0,
          sizeStr: "",
        },

      }
    },
    created() {
      var that=this;
      this.timerLoop=true;
      this.requestUserImg();
      timeout.timeout(2000, function () {
        that.requestUserImg();
        return that.timerLoop;
      });
    },
    mounted() {

    },
    destroyed: function () {
      this.timerLoop=false;
    },
    methods: {
      calImgFile() {
        var quality100 = 10;
        if (this.imgQualitySlideVal && this.imgQualitySlideVal > 0) {
          quality100 = this.imgQualitySlideVal;
        }
        var quality = quality100 / 100;
        console.log(quality);
        this.nowImg.b64 = this.myCroppa.generateDataUrl('image/jpeg', quality);
        if (this.nowImg.b64 && this.nowImg.b64.length > 0) {
          this.nowImg.size = this.nowImg.b64.length;
          this.nowImg.sizeStr = (this.nowImg.b64.length / 1000).toFixed(2) + "Kb";
          this.nowImg.hash = hash(this.nowImg.b64);
        } else {
          this.nowImg.size = 0;
          this.nowImg.sizeStr = "0Kb";
          this.nowImg.hash = "";
        }
      },
      onUploadClick() {
        this.calImgFile();
        this.btnUploadImg();
      },
      requestUserImg() {
        var that = this;
        var eossdkutil = window.eossdkutil;
        eossdkutil.getEosTableRows(
          {
            json: true,
            code: "eosjustturbo",
            scope: that.$store.state.eosUserName,
            table: 'userimg',
            limit: 1000
          }
        ).then(function (result) {
          var rows = result.data.rows;
          that.myuserimg=rows;
        }).catch(function (error) {
          var a=error;
        });
      },
      btnUploadImg() {
        var that = this;
        if(this.nowImg.b64&&this.nowImg.b64.length>0){

        }else{
          that.$message("图片不存在");
        }
        var eossdkutil = window.eossdkutil;
        eossdkutil.pushEosAction({
          actions: [
            {
              account: "eosjustturbo",
              name: "uploadimg",
              authorization: [
                {
                  actor: that.$store.state.eosUserName,
                  permission: "active"
                }
              ],
              data: {
                user: that.$store.state.eosUserName,
                hash: that.nowImg.hash,
                start: 0,
                end: that.nowImg.size-1,
                imgsize: that.nowImg.size,
                content: that.nowImg.b64,
              }
            }
          ]
        }).then(function (result) {
          that.$message("上传成功");
        }).catch(function (error) {
          that.$message(error);
        });
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
  .award-upimg-text {
    color: #999;
    font-size: 1em;
  }
</style>
