<template>
  <el-row>
    <el-col :span="4">
      <div>&nbsp;</div>
    </el-col>
    <el-col :span="16">
      <div>
        <el-row>
          <MyLand state="1"></MyLand>
          <MyLand state="2"></MyLand>
          <MyLand state="3"></MyLand>
          <MyLand state="4"></MyLand>
          <MyLand state="5"></MyLand>
          <MyLand state="1"></MyLand>
        </el-row>
      </div>

    </el-col>
    <el-col :span="4">
      <div>&nbsp;</div>
    </el-col>
  </el-row>

</template>

<script>

  import MyLand from '@/components/MyLand'

  export default {
    name: "eosfarm",
    components: {
      MyLand,
    },
  }
</script>

<style scoped>

</style>
