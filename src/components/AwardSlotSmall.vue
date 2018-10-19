<template>
  <el-col :span="$store.state.ismobile?8:6" style="margin: 10px 0px 10px 0px;padding-left: 3px;padding-right: 3px;">
    <mu-button full-width style="text-transform: lowercase" @click="onSlotSmallClick" :color="isActive?'blue':''">{{data.key}}</mu-button>
  </el-col>
</template>

<script>
    export default {
        name: "AwardSlotSmall",
      props: ['data','isActive'],
      create(){
          this.isActive=false;
      },
      mounted() {

      },
      data() {
        return {

        }
      },
      methods: {
          onSlotSmallClick(){
            this.$emit('onclick',this.data);
          }
      },
      watch: {}
    }
</script>

<style scoped>

</style>
