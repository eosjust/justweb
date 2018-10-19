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
          <AwardSlotSmall></AwardSlotSmall>
          <AwardSlotSmall></AwardSlotSmall>
          <AwardSlotSmall></AwardSlotSmall>
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
          <AwardSlotSmall></AwardSlotSmall>
          <AwardSlotSmall></AwardSlotSmall>
          <AwardSlotSmall></AwardSlotSmall>
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
          <AwardSlotSmall></AwardSlotSmall>
          <AwardSlotSmall></AwardSlotSmall>
          <AwardSlotSmall></AwardSlotSmall>
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
          <AwardSlotImg></AwardSlotImg>
          <AwardSlotImg></AwardSlotImg>
          <el-col :span="$store.state.ismobile?24:12" >
            <el-card :body-style="{ padding: '0px' }" style="padding: 0px;margin: 6px;">
              <el-row style="padding: 12px;">
                <el-row type="flex" justify="center" align="middle">
                  <croppa v-model="myCroppa"
                          placeholder="Click to Add Image"
                          @loading-end="calImgFile"
                          :placeholder-font-size="16"
                          canvas-color="transparent"
                          :show-loading="true"
                          :width="200"
                          :height="200"
                          :quality="1">
                  </croppa>
                </el-row>
                <el-slider
                  v-model="imgQualitySlideVal"
                  accept=".jpg,.gif,.jpeg,.png"
                  :step="5"
                  show-stops>
                </el-slider>
                <div class="award-slot-img-title-text">占用内存:{{nowImg.sizeStr}}</div>
                <div class="award-slot-img-title-text">hash:{{nowImg.hash}}</div>
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
          myCroppa:{},
          loading:false,
          imgQualitySlideVal:60,
          nowImg:{
            hash:"",
            b64:"",
            size:0,
            sizeStr:"",
          },

        }
      },
      created() {

      },
      mounted() {

      },
      destroyed: function () {

      },
      methods: {
          calImgFile(){
            this.nowImg.b64=this.myCroppa.generateDataUrl('image/jpeg', 1);
            if(this.nowImg.b64&&this.nowImg.b64.length>0){
              this.nowImg.size=this.nowImg.b64.length;
              this.nowImg.sizeStr=(this.nowImg.b64.length/1000).toFixed(2)+"Kb";
              this.nowImg.hash=hash(this.nowImg.b64);
            }else{

            }
          },
        onUploadClick(){
            this.calImgFile();
        },
        btnStart() {

        },
        load(){

        }
      },
      watch: {}
    }
</script>

<style scoped>

</style>
