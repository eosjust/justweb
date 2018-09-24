<template>
  <el-col :span="8" style="margin-bottom: -6%;">
    <el-row type="flex" justify="center" align="middle">
      <el-col :span="24" >
        <img :src="imgEosLand" style="width: 100%; height: auto;"/>
        <div class="land-div-absolute"><img :src="imgEosTree" style="width: 70%; height: auto;"/></div>
      </el-col>
    </el-row>
  </el-col>
</template>

<script>
    export default {
      name: "my-land",
      props: ['state'],
      mounted() {
        this.changeTreeState(this.state);
      },
      data() {
        return {
          imgEosLand:require("../assets/eos_land_1.png"),
          imgEosTree:require("../assets/eos_tree_1.png"),
          imgEosTree1:require("../assets/eos_tree_1.png"),
          imgEosTree2:require("../assets/eos_tree_2.png"),
          imgEosTree3:require("../assets/eos_tree_3.png"),
        }
      },
      methods: {
        changeTreeState(state) {
          if(state==1){
            this.imgEosTree=this.imgEosTree1;
          }else if(state==2){
            this.imgEosTree=this.imgEosTree2;
          }else if(state==3){
            this.imgEosTree=this.imgEosTree3;
          }
        }
      },
      watch: {
        state: function (val) {
          this.changeTreeState(val);
        },
      }
    }
</script>

<style scoped>
.land-div-relative{
  position: relative;
  top: 0px;
  left: 0px;
}
.land-div-absolute{
  position: absolute;
  top: 7%;
  left: 0%;
}
</style>
