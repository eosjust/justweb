<template>
  <el-row>
    <el-col :span="24">
      <el-row>
        <el-col :xs="1" :sm="3" :md="5" :lg="6" :xl="7">
          <div>&nbsp;</div>
        </el-col>
        <el-col :xs="22" :sm="18" :md="14" :lg="12" :xl="10">
          <div>
            <el-row style="padding-bottom: 100px;">
              <MyLand @clickland="openBotttomSheet" state="1"></MyLand>
              <MyLand @clickland="openBotttomSheet" state="2"></MyLand>
              <MyLand @clickland="openBotttomSheet" state="3"></MyLand>
              <MyLand @clickland="openBotttomSheet" state="4"></MyLand>
              <MyLand @clickland="openBotttomSheet" state="5"></MyLand>
              <MyLand @clickland="openBotttomSheet" state="1"></MyLand>
              <MyLand @clickland="openBotttomSheet" state="1"></MyLand>
              <MyLand @clickland="openBotttomSheet" state="2"></MyLand>
              <MyLand @clickland="openBotttomSheet" state="3"></MyLand>
              <MyLand @clickland="openBotttomSheet" state="4"></MyLand>
              <MyLand @clickland="openBotttomSheet" state="5"></MyLand>
              <MyLand @clickland="openBotttomSheet" state="1"></MyLand>
              <MyLand @clickland="openBotttomSheet" state="1"></MyLand>
              <MyLand @clickland="openBotttomSheet" state="2"></MyLand>
              <MyLand @clickland="openBotttomSheet" state="3"></MyLand>
              <MyLand @clickland="openBotttomSheet" state="4"></MyLand>
              <MyLand @clickland="openBotttomSheet" state="5"></MyLand>
              <MyLand @clickland="openBotttomSheet" state="1"></MyLand>
              <MyLand @clickland="openBotttomSheet" state="1"></MyLand>
              <MyLand @clickland="openBotttomSheet" state="2"></MyLand>
              <MyLand @clickland="openBotttomSheet" state="3"></MyLand>
              <MyLand @clickland="openBotttomSheet" state="4"></MyLand>
              <MyLand @clickland="openBotttomSheet" state="5"></MyLand>
              <MyLand @clickland="openBotttomSheet" state="1"></MyLand>
              <MyLand @clickland="openBotttomSheet" state="1"></MyLand>
              <MyLand @clickland="openBotttomSheet" state="2"></MyLand>
              <MyLand @clickland="openBotttomSheet" state="3"></MyLand>
              <MyLand @clickland="openBotttomSheet" state="4"></MyLand>
              <MyLand @clickland="openBotttomSheet" state="5"></MyLand>
              <MyLand @clickland="openBotttomSheet" state="1"></MyLand>
              <MyLand @clickland="openBotttomSheet" state="1"></MyLand>
              <MyLand @clickland="openBotttomSheet" state="2"></MyLand>
              <MyLand @clickland="openBotttomSheet" state="3"></MyLand>
              <MyLand @clickland="openBotttomSheet" state="4"></MyLand>
              <MyLand @clickland="openBotttomSheet" state="5"></MyLand>
              <MyLand @clickland="openBotttomSheet" state="1"></MyLand>
              <MyLand @clickland="openBotttomSheet" state="1"></MyLand>
              <MyLand @clickland="openBotttomSheet" state="2"></MyLand>
              <MyLand @clickland="openBotttomSheet" state="3"></MyLand>
              <MyLand @clickland="openBotttomSheet" state="4"></MyLand>
              <MyLand @clickland="openBotttomSheet" state="5"></MyLand>
              <MyLand @clickland="openBotttomSheet" state="1"></MyLand>
              <MyLand @clickland="openBotttomSheet" state="1"></MyLand>
              <MyLand @clickland="openBotttomSheet" state="2"></MyLand>
              <MyLand @clickland="openBotttomSheet" state="3"></MyLand>
              <MyLand @clickland="openBotttomSheet" state="4"></MyLand>
              <MyLand @clickland="openBotttomSheet" state="5"></MyLand>
              <MyLand @clickland="openBotttomSheet" state="1"></MyLand>
              <MyLand @clickland="openBotttomSheet" state="1"></MyLand>
              <MyLand @clickland="openBotttomSheet" state="2"></MyLand>
              <MyLand @clickland="openBotttomSheet" state="3"></MyLand>
              <MyLand @clickland="openBotttomSheet" state="4"></MyLand>
              <MyLand @clickland="openBotttomSheet" state="5"></MyLand>
              <MyLand @clickland="openBotttomSheet" state="1"></MyLand>
              <MyLand @clickland="openBotttomSheet" state="1"></MyLand>
              <MyLand @clickland="openBotttomSheet" state="2"></MyLand>
              <MyLand @clickland="openBotttomSheet" state="3"></MyLand>
              <MyLand @clickland="openBotttomSheet" state="4"></MyLand>
              <MyLand @clickland="openBotttomSheet" state="5"></MyLand>
              <MyLand @clickland="openBotttomSheet" state="1"></MyLand>
            </el-row>
          </div>

        </el-col>
        <el-col :xs="1" :sm="3" :md="5" :lg="6" :xl="7">
          <div>&nbsp;</div>
        </el-col>
      </el-row>
    </el-col>
    <el-col :span="24" v-show="($store.state.ismobile)">
      <mu-container>
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
    <el-col :span="24" v-show="!($store.state.ismobile)">
      <div class="farm-tools">
        <el-row type="flex" justify="center">
          <el-col :xs="22" :sm="18" :md="14" :lg="12" :xl="10">
        <mu-tabs :value.sync="active3" center style="background-color: #6f7180">
          <mu-tab>
            <mu-avatar>
              <img style="width: 100%;height: auto;" src="../assets/a_seed.png"/>
            </mu-avatar>
            seed
          </mu-tab>
          <mu-tab>
            <mu-avatar>
              <img style="width: 100%;height: auto;" src="../assets/a_buydrug.png"/>
            </mu-avatar>
            watering
          </mu-tab>
          <mu-tab>
            <mu-avatar>
              <img style="width: 100%;height: auto;" src="../assets/a_remove.png"/>
            </mu-avatar>
            remove
          </mu-tab>
          <mu-tab>
            <mu-avatar>
              <img style="width: 100%;height: auto;" src="../assets/a_withdraw.png"/>
            </mu-avatar>
            withdraw
          </mu-tab>
        </mu-tabs>
          </el-col>
        </el-row>
      </div>
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
        open: false,
        active3:1,
      }
    },
    methods: {
      closeBottomSheet() {
        this.open = false;
      },
      openBotttomSheet() {
        this.open = true;
      }
    }
  }
</script>

<style scoped>

  .farm-tools {
    left: 0;
    position: fixed;
    bottom: 0;
    width: 100%;
    z-index: 100;
  }
</style>
