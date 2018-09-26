<template>
  <el-row>
    <el-col :span="24">
      <el-row>
        <el-col :xs="1" :sm="3" :md="5" :lg="6" :xl="7">
          <div>&nbsp;</div>
        </el-col>
        <el-col :xs="22" :sm="18" :md="14" :lg="12" :xl="10">
          <div>
            <el-row>
              <MyLand state="1"></MyLand>
              <MyLand  state="2"></MyLand>
              <MyLand  state="3"></MyLand>
              <MyLand  state="4"></MyLand>
              <MyLand @clickland="openBotttomSheet"  state="5"></MyLand>
              <MyLand @clickland="openBotttomSheet" state="1"></MyLand>
            </el-row>
          </div>

        </el-col>
        <el-col :xs="1" :sm="3" :md="5" :lg="6" :xl="7">
          <div>&nbsp;</div>
        </el-col>
      </el-row>
    </el-col>
    <el-col :span="24">
      <mu-container>
        <mu-flex justify-content="center">
          <mu-button @click="openBotttomSheet">OPEN Bottom Sheet</mu-button>
        </mu-flex>
        <mu-bottom-sheet :open.sync="open">
          <mu-list @item-click="closeBottomSheet">
            <mu-list-item button>
              <mu-list-item-action>
                <mu-avatar>
                  <img style="width: 100%;height: auto;" src="../assets/a_seed.png"/>
                </mu-avatar>
              </mu-list-item-action>
              <mu-list-item-title>seed</mu-list-item-title>
            </mu-list-item>
            <mu-list-item button>
              <mu-list-item-action>
                <mu-avatar>
                  <img style="width: 100%;height: auto;" src="../assets/a_buydrug.png"/>
                </mu-avatar>
              </mu-list-item-action>
              <mu-list-item-title>watering</mu-list-item-title>
            </mu-list-item>
            <mu-list-item button>
              <mu-list-item-action>
                <mu-avatar>
                  <img style="width: 100%;height: auto;" src="../assets/a_remove.png"/>
                </mu-avatar>
              </mu-list-item-action>
              <mu-list-item-title>remove</mu-list-item-title>
            </mu-list-item>
            <mu-list-item button>
              <mu-list-item-action>
                <mu-avatar>
                  <img style="width: 100%;height: auto;" src="../assets/a_withdraw.png"/>
                </mu-avatar>
              </mu-list-item-action>
              <mu-list-item-title>withdraw</mu-list-item-title>
            </mu-list-item>
          </mu-list>
        </mu-bottom-sheet>
      </mu-container>
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
    data() {
      return {
        open: false
      }
    },
    methods: {
      closeBottomSheet () {
        this.open = false;
      },
      openBotttomSheet () {
        this.open = true;
      }
    }
  }
</script>

<style scoped>

</style>
