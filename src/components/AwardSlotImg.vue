<template>
  <el-col :span="$store.state.ismobile?12:6" >
    <el-card :body-style="{ padding: '0px' }" style="padding: 0px;margin: 6px;">
      <img :src="data.img" class="image">
      <el-row style="padding: 12px;">
        <div class="award-slot-img-title-text">占用内存:{{getImgSizeStr(data.imgsize)}}</div>
        <el-row type="flex" justify="space-between">
          <el-col :span="6">
            <!--<mu-button flat color="secondary">继续上传</mu-button>-->
          </el-col>
          <el-col :span="6">
            <el-row type="flex" justify="end">
              <mu-button @click="btnDelImg" flat color="secondary">删除</mu-button>
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

      }
    },
    methods: {
      btnDelImg(){
        var that = this;
        if(this.data&&this.data.upsize&&this.data.upsize>0){

        }else{
          return;
        }
        var eossdkutil = window.eossdkutil;
        eossdkutil.pushEosAction({
          actions: [
            {
              account: "eosjustturbo",
              name: "delimg",
              authorization: [
                {
                  actor: that.$store.state.eosUserName,
                  permission: "active"
                }
              ],
              data: {
                img_id:that.data.id,
                user: that.$store.state.eosUserName,
              }
            }
          ]
        }).then(function (result) {
          that.$message("删除成功");
        }).catch(function (error) {
          that.$message(error);
        });
      },
      getImgSizeStr(size){
        if(size&&size>0){
          return parseFloat(size)/1000+"Kb";
        }else{
          return "0Kb";
        }

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
