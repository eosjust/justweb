<template>
  <el-row>
    <el-row type="flex" justify="center" align="middle" style="margin-top: 50px;">
      <el-col :span="8"></el-col>
      <el-col :span="8" justify="center" align="middle">
        <div style="text-align: center"><h1 style="color: #f0f0f0">夺宝争霸</h1></div>
        <div style="text-align: center"><h1 style="color: #f0f0f0">Coming soon...</h1></div>
      </el-col>
      <el-col :span="8"></el-col>
    </el-row>

    <el-row type="flex" justify="center" align="middle" style="margin-top: 50px;">
      <el-col :span="2"></el-col>
      <el-col :span="20" justify="center" align="middle">
        <el-carousel :interval="4000" type="card" height="200px">
          <el-carousel-item v-for="item in luckyuser" :key="item">
            <div style="width: 100%;height: 100%;background-color: #f0f0f0;">
              <div style="position: absolute;width: 100%;height: 100%;">
                <div>
                  <img style="max-height: 200px;width: auto;" :src="item.img"/>
                </div>
              </div>
              <div style="position: absolute;bottom: 0px;left: 0px;background-color: #9e9e9e50;width: 100%;height: 50px;">
              </div>
              <div style="position: absolute;bottom: -10px;left: 20px;">
                <h6 style="color: #9e9e9e" >{{item.title}}</h6>
              </div>
            </div>
          </el-carousel-item>
        </el-carousel>
      </el-col>
      <el-col :span="2"></el-col>
    </el-row>
  </el-row>
</template>

<script>
  import gift1 from '../assets/gift1.jpg';
  import gift2 from '../assets/gift2.jpg';
  import gift3 from '../assets/gift3.jpg';
  import gift4 from '../assets/gift4.jpg';
  import gift5 from '../assets/gift5.jpg';
  import gift6 from '../assets/gift6.jpg';


  export default {
    name: "Treasure",
    components: {},
    data() {
      return {
        myCroppa: {},
        imgb64:"",
        tab1active: 0,
        luckyuser:[
          {
            img:gift1,
            title:"恭喜happyyyyyyyy获得666EOS"
          },
          {
            img:gift2,
            title:"恭喜elonzkwallet获得1000EOS"
          },
          {
            img:gift3,
            title:"恭喜tpceshi1111获得500EOS"
          },
          {
            img:gift4,
            title:"恭喜eosenucrydog获得50EOS"
          },
          {
            img:gift5,
            title:"恭喜g4zdgmbwgmge获得30EOS"
          },
          {
            img:gift6,
            title:"恭喜gyydmnjsgqge获得10EOS"
          },
        ]
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
        this.imgb64=this.myCroppa.generateDataUrl('image/jpeg', 0.9);
      },
      btnStart() {

      },
    },
    watch: {}

  }
</script>

<style scoped>
  .time {
    font-size: 13px;
    color: #999;
  }

  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }
  .image {
    max-height: 160px;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }

  .clearfix:after {
    clear: both
  }
</style>
