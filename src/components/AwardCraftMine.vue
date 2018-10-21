<template>
  <el-row>
    <el-row type="flex" justify="center" align="middle"
            style="margin-top: 50px;margin-bottom: 20px;padding-left: 5%;padding-right: 5%;">

      <el-col :xs="22" :sm="18" :md="16" :lg="14" :xl="14">
        <el-tabs type="border-card">
          <el-tab-pane label="个人信息">
            <el-row type="flex">
              <el-col :span="24">
                <mu-list toggle-nested>
                  <mu-list-item button>
                    <mu-list-item-action>
                      <icon name="wallet2" scale="3"></icon>
                    </mu-list-item-action>
                    <mu-list-item-content>
                      <mu-list-item-sub-title>可提现:1111</mu-list-item-sub-title>
                      <mu-list-item-sub-title>已提现:1111</mu-list-item-sub-title>
                    </mu-list-item-content>
                    <mu-list-item-action>
                      <mu-button small flat color="pink" @click="btnWithdrawAll">
                        {{$t('awardcraft.withdraw')}}
                      </mu-button>
                    </mu-list-item-action>
                  </mu-list-item>
                  <mu-list-item button>
                    <mu-list-item-action>
                      <icon name="wallet" scale="3"></icon>
                    </mu-list-item-action>
                    <mu-list-item-content>
                      <mu-list-item-sub-title>EOS余额:{{myEosAmount}}</mu-list-item-sub-title>
                      <mu-list-item-sub-title>JUST余额:{{myJustAmount}}</mu-list-item-sub-title>
                    </mu-list-item-content>
                    <mu-list-item-action>
                      <mu-button small flat color="pink" @click="btnOpenEosflare">
                        {{$t('awardcraft.view')}}
                      </mu-button>
                    </mu-list-item-action>
                  </mu-list-item>
                  <mu-list-item button>
                    <mu-list-item-action>
                      <icon name="share" scale="3"></icon>
                    </mu-list-item-action>
                    <mu-list-item-content>
                      <mu-list-item-sub-title>{{$t('awardcraft.reflink')}}:</mu-list-item-sub-title>
                      <mu-list-item-sub-title>{{share_url}}</mu-list-item-sub-title>
                    </mu-list-item-content>
                    <mu-list-item-action>
                      <mu-button small flat color="pink" @click="copyShareUrl">
                        {{$t('awardcraft.copy')}}
                      </mu-button>
                    </mu-list-item-action>
                  </mu-list-item>
                </mu-list>
              </el-col>
            </el-row>
          </el-tab-pane>
          <el-tab-pane label="查看商品">
            <el-row type="flex">
              <el-col :span="24">
                <AwardSlotBig :data="curSlot"></AwardSlotBig>
              </el-col>
            </el-row>
          </el-tab-pane>
          <el-tab-pane label="编辑商品">
            <el-row>
              <div class="award-mine-text">经营者可以编辑商品橱窗的标题，图片，价格的编辑将在下一轮生效。拥有者和经营者同时打开可购买开关时，橱窗的经营权才可以被下一个买家购买</div>
            </el-row>
            <el-row>
              <el-row>
                <el-form label-width="80px" label-position="left" :model="curEditSlot">
                  <el-form-item label="标题">
                    <el-input :disabled="curEditSlot.isTitleDisable" v-model="curEditSlot.editTitle"></el-input>
                  </el-form-item>
                  <el-form-item label="商品价格">
                    <el-input :disabled="curEditSlot.isGoodsPriceDisable" type="number" :step="0.001"
                              v-model="curEditSlot.editGoodsPrice"></el-input>
                  </el-form-item>
                  <el-form-item label="下轮价格">
                    <el-input :disabled="curEditSlot.isNextPriceDisable" type="number" :step="0.001"
                              v-model="curEditSlot.editNextPrice"></el-input>
                  </el-form-item>
                  <el-form-item label="购买开关1">
                    <el-switch :disabled="curEditSlot.isOwnerCanBuyDisable"
                               v-model="curEditSlot.editOwnerCanBuy"></el-switch>
                  </el-form-item>
                  <el-form-item label="购买开关2">
                    <el-switch :disabled="curEditSlot.isPartCanBuyDisable"
                               v-model="curEditSlot.editPartCanBuy"></el-switch>
                  </el-form-item>
                  <el-form-item label="选择图片">
                    <el-select :disabled="curEditSlot.isImgIdDisable" v-model="curEditSlot.editImgId" placeholder="请选择">
                      <el-option
                        v-for="userimg in myuserimg"
                        :key="userimg.id"
                        :label="userimg.id"
                        style="width: auto;height: 60px;"
                        :value="userimg.id">
                        <img style="width: auto;height: 50px;" :src="userimg.img"/>
                      </el-option>
                    </el-select>
                  </el-form-item>
                </el-form>
              </el-row>
              <el-row type="flex" justify="end">
                <mu-button @click="btnEditSlot" color="secondary">保存</mu-button>
              </el-row>
            </el-row>
          </el-tab-pane>
        </el-tabs>
      </el-col>
    </el-row>

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
          <AwardSlotSmall v-for="slot in myownslots" :key="slot.key" :data="slot" :isActive="curSlot.key==slot.key"
                          @onclick="btnOnSlotSmallClick"></AwardSlotSmall>
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
          <AwardSlotSmall v-for="slot in mypartslots" :key="slot.key" :data="slot" :isActive="curSlot.key==slot.key"
                          @onclick="btnOnSlotSmallClick"></AwardSlotSmall>
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
                    <mu-button @click="onChooseFile" flat color="secondary">选择图片</mu-button>
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
        timerLoop: false,
        imgQualitySlideVal: 60,
        curSlot: {},
        curUser: "",
        inviterName:"",
        allslotinfo: [],
        myownslots: [],
        mypartslots: [],
        myuserimg: [],
        myplayerinfo:{

        },
        myEosAmount:"100.0000 EOS",
        myJustAmount:"100.0000 JUST",
        share_url:"http://www.eosjust.com/#/awardcraft?ref=",
        curEditSlot: {
          editTitle: "",
          isTitleDisable: true,
          editGoodsPrice: 0,
          isGoodsPriceDisable: true,
          editNextPrice: 0,
          isNextPriceDisable: true,
          editOwnerCanBuy: true,
          isOwnerCanBuyDisable: true,
          editPartCanBuy: true,
          isPartCanBuyDisable: true,
          editImgUser: "",
          editImgId: 0,
          isImgIdDisable: true,
          editImgHash: "",
        },
        nowImg: {
          hash: "",
          b64: "",
          size: 0,
          sizeStr: "",
        },

      }
    },
    created() {
      var that = this;
      this.timerLoop = true;
      this.requestUserImg();
      this.requestAllSlot();
      timeout.timeout(2000, function () {
        that.requestUserImg();
        that.requestAllSlot();
        that.refreshSlots();
        that.share_url="https://www.eosjust.com/#/awardcraft?ref="+that.$store.state.eosUserName;
        return that.timerLoop;
      });
    },
    mounted() {
      var that = this;
      if (that.$route.query.ref) {
        that.inviterName = that.$route.query.ref;
      } else {
        that.inviterName = "";
      }

    },
    destroyed: function () {
      this.timerLoop = false;
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
      onChooseFile(){
        this.myCroppa.chooseFile();
      },
      copyShareUrl() {
        var that = this;
        copy(this.share_url);
        that.$message({
          message: '复制成功',
          type: 'success'
        });
      },
      onUploadClick() {
        this.calImgFile();
        this.btnUploadImg();
      },
      parseEosAmount(amount) {
        return (parseFloat(amount) / 10000).toFixed(4);
      },
      toEosAmount(price) {
        return parseInt((parseFloat(price) * 10000).toFixed(0));
      },
      btnWithdrawAll(){

      },
      btnOpenEosflare(){

      },
      requestAllSlot() {
        var that = this;
        var eossdkutil = window.eossdkutil;
        eossdkutil.getEosTableRows(
          {
            json: true,
            code: "eosjustturbo",
            scope: "eosjustturbo",
            table: 'slot',
            limit: 1000
          }
        ).then(function (result) {
          var rows = result.data.rows;
          that.allslotinfo = rows;
        }).catch(function (error) {

        });
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
          that.myuserimg = rows;
        }).catch(function (error) {
          var a = error;
        });
      },
      refreshSlots() {
        var that = this;
        this.curUser = that.$store.state.eosUserName;
        this.myownslots.splice(0, this.myownslots.length);
        this.mypartslots.splice(0, this.mypartslots.length);
        if (this.curUser) {
          if (this.allslotinfo && this.allslotinfo.length > 0) {
            var len = this.allslotinfo.length;
            for (var i = 0; i < len; i++) {
              if (this.allslotinfo[i].owner == this.curUser) {
                this.myownslots.push(this.allslotinfo[i]);
              }
              if (this.allslotinfo[i].partner == this.curUser) {
                this.mypartslots.push(this.allslotinfo[i]);
              }
            }
          }
        }
      },
      btnOnSlotSmallClick(slot) {
        this.curSlot = slot;
        this.curEditSlot.editTitle = this.curSlot.title;
        this.curEditSlot.editGoodsPrice = this.parseEosAmount(this.curSlot.goods_price);
        this.curEditSlot.editNextPrice = this.parseEosAmount(this.curSlot.goods_price_next);
        this.curEditSlot.editOwnerCanBuy = this.curSlot.canbuy_o == 1;
        this.curEditSlot.editPartCanBuy = this.curSlot.canbuy_p == 1;
        this.curEditSlot.editImgUser = this.curSlot.img_user;
        this.curEditSlot.editImgId = this.curSlot.img_id;
        this.curEditSlot.editImgHash = this.curSlot.img_hash;
        this.curEditSlot.isTitleDisable = true;
        this.curEditSlot.isGoodsPriceDisable = true;
        this.curEditSlot.isNextPriceDisable = true;
        this.curEditSlot.isOwnerCanBuyDisable = true;
        this.curEditSlot.isPartCanBuyDisable = true;
        this.curEditSlot.isImgIdDisable = true;
        if (this.curSlot.owner == this.curUser) {
          this.curEditSlot.isOwnerCanBuyDisable = false;
        }
        if (this.curSlot.partner == this.curUser) {
          this.curEditSlot.isTitleDisable = false;
          this.curEditSlot.isNextPriceDisable = false;
          this.curEditSlot.isPartCanBuyDisable = false;
          this.curEditSlot.isImgIdDisable = false;
        }
      },
      btnEditSlot(){
        var that = this;
        if (this.curEditSlot && this.curEditSlot.editTitle&& this.curEditSlot.editTitle.length>0) {

        } else {
          that.$message("请检查信息");
        }
        var eossdkutil = window.eossdkutil;
        eossdkutil.pushEosAction({
          actions: [
            {
              account: "eosjustturbo",
              name: "editslot",
              authorization: [
                {
                  actor: that.$store.state.eosUserName,
                  permission: "active"
                }
              ],
              data: {
                slotkey:that.curSlot.key,
                user: that.$store.state.eosUserName,
                title:that.curEditSlot.editTitle,
                desc:"",
                goods_price:that.toEosAmount(that.curEditSlot.editNextPrice),
                canbuy_o:that.curEditSlot.editOwnerCanBuy?1:0,
                canbuy_p:that.curEditSlot.editPartCanBuy?1:0,
                img_id:that.curEditSlot.editImgId,
              }
            }
          ]
        }).then(function (result) {
          that.$message("保存成功");
          that.myCroppa.remove();
        }).catch(function (error) {
          that.$message(error);
        });
      },
      btnUploadImg() {
        var that = this;
        if (this.nowImg.b64 && this.nowImg.b64.length > 0) {

        } else {
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
                inviter:that.inviterName,
                hash: that.nowImg.hash,
                start: 0,
                end: that.nowImg.size - 1,
                imgsize: that.nowImg.size,
                content: that.nowImg.b64,
              }
            }
          ]
        }).then(function (result) {
          that.$message("上传成功");
          that.myCroppa.remove();
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
  .award-mine-text {
    color: #999;
    font-size: 0.9em;
    padding-left: 10px;
    padding-right: 10px;
  }

  .award-upimg-text {
    color: #999;
    font-size: 1em;
  }
</style>
