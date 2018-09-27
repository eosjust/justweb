<template>
  <el-col style="padding: 3px;" :span="6">
    <el-row type="flex" justify="center" align="middle">
      <el-col :span="24" justify="center" align="middle">
        <img :src="imgEosLand" style="width: 100%; height: auto;"/>
        <div class="land-div-absolute-tree">
          <img :src="getTreeImg(state)" @click="$emit('clickland')" style="width: 100%; height: auto;"/>
        </div>
        <div class="land-div-absolute">
          <div class="font-small land-text-green land-text-left">seeds: 141200</div>
          <div class="font-small land-text-green land-text-left">income: 100.0123</div>
        </div>
        <!--<div class="land-div-absolute-tr">-->
          <!--<div class="font-small land-text-green">00:00:30</div>-->
        <!--</div>-->
      </el-col>
    </el-row>
  </el-col>


</template>

<script>
  export default {
    name: "my-land",
    props: ['state'],
    mounted() {

    },
    data() {
      return {
        imgEosLand: require("../assets/tudi1.png"),
        imgEosTree: require("../assets/tree_1.png"),
        imgEosTree1: require("../assets/tree_1.png"),
        imgEosTree2: require("../assets/tree_2.png"),
        imgEosTree3: require("../assets/tree_3.png"),
        imgEosTree4: require("../assets/tree_4.png"),
        imgEosTree5: require("../assets/tree_5.png"),
      }
    },
    methods: {
      getTreeImg(state) {
        if (state == 1) {
          return this.imgEosTree1;
        } else if (state == 2) {
          return this.imgEosTree2;
        } else if (state == 3) {
          return this.imgEosTree3;
        } else if (state == 4) {
          return this.imgEosTree4;
        } else if (state == 5) {
          return this.imgEosTree5;
        }
        return this.imgEosTree;
      },
      clickState() {
        this.state += 1;
        if (this.state > 5) {
          this.state = 1;
        }
      }
    },
    watch: {}
  }
</script>

<style scoped>
  .land-div-relative {
    position: relative;
    top: 0px;
    left: 0px;
  }

  .land-div-absolute-lt {
    position: absolute;
    top: 0px;
    left: 0px;
  }

  .land-div-absolute {
    position: absolute;
    bottom: 0px;
    left: 0px;
  }

  .land-div-absolute-tree {
    position: absolute;
    top: -10%;
    left: 0%;
  }

  .land-div-absolute-tr {
    position: absolute;
    top: 0%;
    left: auto;
    right: 0px;
  }
  .land-div-absolute-br {
    position: absolute;
    bottom: 0px;
    right: 0px;

  }
  .font-small {
    font-size: 0.7em;
  }

  .land-text-left {
    text-align: left;
  }

  .land-text-green {
    text-shadow: rgb(43, 0, 43) 0px 0px 5px, rgb(0, 204, 0) 0px 0px 20px, rgb(0, 255, 0) 0px 0px 10px;
    color: white;
  }
</style>
