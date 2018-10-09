<template>
  <el-row style="padding-bottom: 100px;">
    <el-col style="padding: 3px;" :span="6" v-for="eostree in data" :key="eostree.pos">
      <el-row type="flex" justify="center" align="middle">
        <el-col :span="24" justify="center" align="middle">
          <img :src="imgEosLand" style="width: 100%; height: auto;"/>
          <div class="land-div-absolute-tree">
            <img :src="getTreeImg(eostree)" @click="onLandClick(eostree)" style="width: 100%; height: auto;"/>
          </div>
          <div class="land-div-absolute">
            <div class="font-small land-text-green land-text-left">{{getLandTip($t('myland.trees'),eostree.tree_amount)}}</div>
            <div class="font-small land-text-green land-text-left">{{getLandTip($t('myland.cost'),eostree.eos_amount_show)}}</div>
            <div class="font-small land-text-green land-text-left">{{getLandTip($t('myland.income'),eostree.income_show)}}</div>
          </div>
          <div class="land-div-absolute-tr">
            <div class="font-small land-text-purple" style="padding-top: 20px;padding-right: 30px;">{{eostree.end_time_show}}</div>
          </div>
        </el-col>
      </el-row>
    </el-col>
  </el-row>
</template>

<script>
  export default {
    name: "my-land",
    props: ['data'],
    mounted() {

    },
    data() {
      return {
        LIFE_ALIVE: 20,
        LIFE_SICK: 18,
        LIFE_DEAD: 16,
        LIFE_VOID: 14,
        imgEosLand: require("../assets/tudi1.png"),
        imgEosTree0: require("../assets/tree_0.png"),
        imgEosTree1: require("../assets/tree_1.png"),
        imgEosTree2: require("../assets/tree_2.png"),
        imgEosTree3: require("../assets/tree_3.png"),
        imgEosTree4: require("../assets/tree_4.png"),
        imgEosTree5: require("../assets/tree_5.png"),
      }
    },
    methods: {
      getTreeImg(eostree) {
        if (eostree.life_ret == 0) {
          return this.imgEosTree0;
        } else if (eostree.life_ret == this.LIFE_ALIVE) {
          if(eostree.eos_amount/eostree.income<5){
            return this.imgEosTree3;
          }
          return this.imgEosTree1;
        }else if (eostree.life_ret == this.LIFE_SICK) {
          return this.imgEosTree4;
        }else if (eostree.life_ret == this.LIFE_DEAD) {
          return this.imgEosTree5;
        }
        return this.imgEosTree0;
      },
      getLandTip(title,value){
        // {{$t('myland.trees')+":"}}{{eostree.tree_amount}}

        if(value){
          return title+":"+value;
        }else{
          return "";
        }

      },
      onLandClick(eostree) {
        this.$emit('clickland',eostree);
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
    cursor:pointer;
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
    font-size: 0.6em;
    line-height:1.1em;
  }

  .land-text-left {
    text-align: left;
  }

  .land-text-green {
    text-shadow: rgb(43, 0, 43) 0px 0px 5px, rgb(0, 204, 0) 0px 0px 20px, rgb(0, 255, 0) 0px 0px 10px;
    color: white;
  }

  .land-text-purple {
    text-shadow: rgb(43, 0, 43) 0px 0px 5px, rgb(204, 0, 204) 0px 0px 20px, rgb(255, 0, 255) 0px 0px 10px;
    color: white;
  }
</style>
