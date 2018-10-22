<template>
  <el-card :body-style="{ padding: '0px' }" style="padding: 0px;margin: 6px;">

    <el-row type="flex" justify="space-between" style="margin-top: 5px;">
      <el-col :span="6">
        <span class="award-slot-big-key-text">{{myslotinfo.key}}</span>
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
          <div class="award-slot-big-title-text">标题:{{myslotinfo.title}}</div>
          <div class="award-slot-big-title-text">商品价格:{{myslotinfo.goods_price_show}}</div>
          <div class="award-slot-big-title-text">轮数:{{myslotinfo.round}}</div>
          <div class="award-slot-big-title-text">历史总资金:{{myslotinfo.total_pool_show}}</div>
          <div class="award-slot-big-title-text">拥有者:{{myslotinfo.owner}}</div>
          <div class="award-slot-big-title-text">经营者:{{myslotinfo.partner}}</div>
          <div class="award-slot-big-title-text">经营权价格:{{myslotinfo.slot_price_show}}</div>
        </el-col>
        <el-col :span="8">
          <img :src="myslotinfo.img" class="image">
        </el-col>
      </el-row>

      <el-progress :percentage="myslotinfo.percent" :show-text="false" status="success"></el-progress>
      <el-row type="flex" justify="space-between">
        <el-col :span="6">
          <div class="award-slot-big-text-left">已参与</div>
          <div class="award-slot-big-text-left">{{myslotinfo.progress_show}}</div>
        </el-col>
        <el-col :span="6">
          <div></div>
          <div></div>
        </el-col>
        <el-col :span="6">
          <div class="award-slot-big-text-right">剩余</div>
          <div class="award-slot-big-text-right">{{myslotinfo.need_show}}</div>
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
    <mu-divider></mu-divider>
    <el-row style="max-height: 300px;overflow: scroll;">
      <mu-list>
        <mu-sub-header>开奖记录</mu-sub-header>
        <mu-list-item v-for="luckUser in myslotory" :key="luckUser.id" button :ripple="false">
          <mu-list-item-content>
            <mu-list-item-sub-title>获奖者:{{luckUser.winner}}</mu-list-item-sub-title>
            <mu-list-item-sub-title>开奖号码:{{luckUser.win_number}}</mu-list-item-sub-title>
          </mu-list-item-content>
          <mu-list-item-action >
            <mu-list-item-after-text>第{{luckUser.round}}轮</mu-list-item-after-text>
          </mu-list-item-action>
        </mu-list-item>
      </mu-list>
    </el-row>
  </el-card>
</template>

<script>

  import dfImg from '../assets/nonepic.png';
  export default {
    name: "AwardSlotBig",
    props: ['data'],
    mounted() {

    },
    data() {
      return {
        myslotinfo:{
          key:"",
          title:"",
          goods_price_show:"",
          round:1,
          total_pool_show:"",
          owner:"",
          partner:"",
          slot_price_show:"",
          progress_show:"",
          need_show:"",
          percent:0,
          img:dfImg,
        },
        myslotory:[

        ],
      }
    },
    methods: {
      requestUserImg(hash, ImgId, imgUser) {
        var that = this;
        var eossdkutil = window.eossdkutil;
        var imgMap = this.$store.state.awardImgMap;
        if (imgMap == null) {
          imgMap = new HashMap();
          this.$store.commit('setAwardMap', imgMap);
        }
        // if(!(typeof(imgMap)==HashMap)){
        //   imgMap=new HashMap();
        //   this.$store.commit('setAwardMap', imgMap);
        // }
        if (imgMap.get(hash) && imgMap.get(hash).length > 0) {
          that.myslotinfo.img = imgMap.get(hash);
          console.log("load img from cache");
          return;
        }
        eossdkutil.getEosTableRows(
          {
            json: true,
            code: "eosjustturbo",
            scope: imgUser,
            lower_bound: ImgId,
            table: 'userimg',
            limit: 1
          }
        ).then(function (result) {
          var rows = result.data.rows;
          if (rows.length > 0) {
            console.log("load img from net");
            that.myslotinfo.img = rows[rows.length - 1].img;
            if (imgMap.get(hash) && imgMap.get(hash).length > 0) {

            } else {
              imgMap.set(hash, that.myslotinfo.img);
              that.$store.commit('setAwardMap', imgMap);
            }
          } else {
            that.myslotinfo.img = dfImg;
          }
        }).catch(function (error) {
          that.myslotinfo.img = dfImg;
        });
      },

      requestSlotory(nowkey) {
        var that = this;
        var eossdkutil = window.eossdkutil;
        eossdkutil.getEosTableRows(
          {
            json: true,
            code: "eosjustturbo",
            scope: nowkey,
            table: 'slotory',
            limit: 1000
          }
        ).then(function (result) {
          var rows = result.data.rows;
          if(rows&&rows.length>0){
            that.myslotory.splice(0,that.myslotory.length);
            for(var ii=0;ii<rows.length;ii++){
              that.myslotory.splice(ii,1,rows[ii]);
            }
          }
        }).catch(function (error) {

        });
      },
      parseEosAmount(amount) {
        return (parseFloat(amount) / 10000).toFixed(4);
      },
      toEosAmount(price) {
        return parseInt((parseFloat(price) * 10000).toFixed(0));
      },
    },
    watch: {
      data: function (val) {
        if(val){
          this.myslotinfo.key=val.key;
          this.myslotinfo.title=val.title;
          this.myslotinfo.round=val.round;
          this.myslotinfo.goods_price_show=this.parseEosAmount(val.goods_price);
          this.myslotinfo.progress_show=this.parseEosAmount(val.progress);
          this.myslotinfo.total_pool_show=this.parseEosAmount(val.total_pool);
          this.myslotinfo.slot_price_show=this.parseEosAmount(val.slot_price);
          this.myslotinfo.owner=val.owner;
          this.myslotinfo.partner=val.partner;
          this.myslotinfo.percent=0;
          if(val.progress>0&&val.goods_price>0){
            this.myslotinfo.percent=parseInt(parseFloat(val.progress*100/val.goods_price));
          }
          this.myslotinfo.need=val.goods_price-val.progress;
          this.myslotinfo.need_show=this.parseEosAmount(this.myslotinfo.need);
          this.requestUserImg(val.img_hash,val.img_id,val.img_user);
          this.requestSlotory(val.key);
        }
      },
    }
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
