<template>
  <el-row>
    <el-col :xs="1" :sm="3" :md="5" :lg="6" :xl="7">
      <div>&nbsp;</div>
    </el-col>
    <el-col :xs="22" :sm="18" :md="14" :lg="12" :xl="10">
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
    <el-col :xs="1" :sm="3" :md="5" :lg="6" :xl="7">
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
