<template>
  <el-col :span="$store.state.ismobile?12:6" >
    <el-card :body-style="{ padding: '0px' }" style="padding: 0px;margin: 6px;">
      <el-row type="flex" justify="space-between" style="margin-top: 5px;">
        <el-col :span="6">
          <span class="award-slot-key-text">{{myslotinfo.key}}</span>
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
      <img :src="myslotinfo.img" class="image">
      <el-row style="padding: 12px;">
        <div class="award-slot-title-text">{{myslotinfo.title}}</div>
        <div class="award-slot-price-text">经营者:{{myslotinfo.partner}}</div>
        <div class="award-slot-price-text">经营权:{{myslotinfo.slot_price_show}}EOS</div>
        <div class="award-slot-price-text">夺宝价格:{{myslotinfo.goods_price_show}}EOS</div>
        <el-progress :percentage="myslotinfo.percent" :show-text="false" status="success"></el-progress>
        <el-row type="flex" justify="space-between">
          <el-col :span="10">
            <div class="award-slot-text-left">{{myslotinfo.progress_show}}EOS</div>
            <div class="award-slot-text-left">已参与</div>
          </el-col>
          <el-col :span="4">
            <div></div>
            <div></div>
          </el-col>
          <el-col :span="10">
            <div class="award-slot-text-right">{{myslotinfo.need_show}}EOS</div>
            <div class="award-slot-text-right">剩余</div>
          </el-col>
        </el-row>
        <el-row type="flex" justify="space-between">
          <el-col :span="6">
            <mu-button @click="onBuyClick" flat color="secondary">经营</mu-button>
          </el-col>
          <el-col :span="6">
            <el-row type="flex" justify="end">
              <mu-button @click="onJoinClick" flat color="secondary">夺宝</mu-button>
            </el-row>
          </el-col>
        </el-row>
      </el-row>
    </el-card>
  </el-col>

</template>

<script>
  import dfImg from '../assets/awardcraft_logo.jpg';
  import HashMap from 'hashmap';
  export default {
    name: "AwardSlot",
    props: ['data'],
    mounted() {

    },
    data() {
      return {
        myslotinfo:{
          key:"",
          title:"",
          goods_price_show:"",
          slot_price_show:"",
          partner:"",
          percent:0,
          need:0,
          need_show:"",
          img:dfImg,
        },
      }
    },
    methods: {
      onJoinClick(){
        this.$emit('onJoin',this.data);
      },
      onBuyClick(){
        this.$emit('onBuy',this.data);
      },
      requestUserImg(hash,ImgId,imgUser) {
        var that = this;
        var eossdkutil = window.eossdkutil;
        var imgMap = this.$store.state.awardImgMap;
        if(imgMap==null){
          imgMap=new HashMap();
          this.$store.commit('setAwardMap', imgMap);
        }
        // if(!(typeof(imgMap)==HashMap)){
        //   imgMap=new HashMap();
        //   this.$store.commit('setAwardMap', imgMap);
        // }
        if(imgMap.get(hash)&&imgMap.get(hash).length>0){
          that.myslotinfo.img=imgMap.get(hash);
          console.log("load img from cache");
          return;
        }
        eossdkutil.getEosTableRows(
          {
            json: true,
            code: "eosjustturbo",
            scope: imgUser,
            lower_bound:ImgId,
            table: 'userimg',
            limit: 1
          }
        ).then(function (result) {
          var rows = result.data.rows;
          if(rows.length>0){
            console.log("load img from net");
            that.myslotinfo.img=rows[rows.length-1].img;
            if(imgMap.get(hash)&&imgMap.get(hash).length>0){

            }else{
              imgMap.set(hash,that.myslotinfo.img);
              that.$store.commit('setAwardMap', imgMap);
            }
          }else{
            that.myslotinfo.img=dfImg;
          }
        }).catch(function (error) {
          that.myslotinfo.img=dfImg;
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
      data:function (val) {
        if(val){
          this.myslotinfo.key=val.key;
          this.myslotinfo.title=val.title;
          this.myslotinfo.partner=val.partner;

          this.myslotinfo.slot_price_show=this.parseEosAmount(val.slot_price);
          this.myslotinfo.goods_price_show=this.parseEosAmount(val.goods_price);
          this.myslotinfo.progress_show=this.parseEosAmount(val.progress);
          this.myslotinfo.percent=0;
          if(val.progress>0&&val.goods_price>0){
            this.myslotinfo.percent=parseInt(parseFloat(val.progress*100/val.goods_price));
          }
          this.myslotinfo.need=val.goods_price-val.progress;
          this.myslotinfo.need_show=this.parseEosAmount(this.myslotinfo.need);
          this.requestUserImg(val.img_hash,val.img_id,val.img_user);
        }
      }
    }
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
