<template>
  <mu-list textline="three-line">
    <mu-list-item avatar nested :ripple="false" :open="treeopen == eostree.id" button v-for="eostree in data"
                  :key="eostree.id" @click="treeopen = (treeopen == eostree.id)?-1:eostree.id">
      <mu-list-item-action>
        <mu-avatar>
          <img src="../assets/eos_tree_1.png">
        </mu-avatar>
      </mu-list-item-action>
      <mu-list-item-content>
        <mu-list-item-title>trees: {{eostree.tree_amount}}</mu-list-item-title>
        <mu-list-item-sub-title>
          <span style="color: rgba(0, 0, 0, .87)">Myron Liu -</span> 周末要来你这里出差，要不要一起吃个饭呀，实在编不下去了,哈哈哈哈哈哈
        </mu-list-item-sub-title>
      </mu-list-item-content>
      <mu-list-item-action>
        <mu-icon class="toggle-icon" size="24" value="keyboard_arrow_down"></mu-icon>
      </mu-list-item-action>
      <mu-list-item button :ripple="false" slot="nested">
        <mu-list-item-title>List Item 1</mu-list-item-title>
      </mu-list-item>
      <mu-list-item button :ripple="false" slot="nested">
        <mu-list-item-title>List Item 2</mu-list-item-title>
      </mu-list-item>
    </mu-list-item>
    <mu-divider></mu-divider>
  </mu-list>
</template>

<script>
  export default {
    name: "MyEOsTree",
    props: ['data'],
    mounted() {
      this.setTreeData(data);
    },
    data() {
      return {
        treeopen: -1,
        imgEosLand: require("../assets/eos_land_1.png"),
        imgEosTree: require("../assets/eos_tree_1.png"),
        imgEosTree1: require("../assets/eos_tree_1.png"),
        imgEosTree2: require("../assets/eos_tree_2.png"),
        imgEosTree3: require("../assets/eos_tree_3.png"),
      }
    },
    methods: {
      setTreeData(data) {

      }
    },
    watch: {}
  }
</script>

<style scoped>

</style>
