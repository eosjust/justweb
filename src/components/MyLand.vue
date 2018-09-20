<template>
  <el-col :span="8">
    <el-row type="flex" justify="center" align="middle">
      <el-col :span="24" >
        <img :src="imgEosLand" style="width: 100%; height: auto;"/>
      </el-col>
    </el-row>
  </el-col>
</template>

<script>
    export default {
        name: "my-land",
      data() {
        return {
          imgEosLand:require("../assets/eos_land_1.png"),
        }
      }
    }
</script>

<style scoped>

</style>
