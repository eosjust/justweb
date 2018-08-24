<template>

  <div id="setting-content">
    <div id="setting-env">
      <span>当前环境：{{this.$store.state.env}}</span>
      <span>当前BP：{{this.$store.state.bpNodeUrl}}</span>
    </div>
    <div id="setting-bpnode">
      <span>选择节点：</span>
      <select @change="selectBpNodeChange" v-model="select_bpnode">
        <option v-for="bpnode in bpnodes" v-bind:value="bpnode.url">
          {{ bpnode.url }}
        </option>
      </select>
    </div>
    <div id="setting-test">
      <span>{{lang}}</span>
      <button @click="changeLangEvent">切换语言</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Setting',
    data() {
      return {
        lang:'en',
        env: 'none',
        select_bpnode: this.$store.state.bpNodeUrl,
        bpnodes: [
          {
            url: 'https://nodes.get-scatter.com/'
          },
          {
            url: 'http://api.eosnewyork.io/'
          }
        ],
      }
    },
    created() {
      this.$store.commit('changeEnv', 'ooo');
    },
    methods: {
      selectBpNodeChange() {
        this.$store.commit('changeBpNodeUrl', this.select_bpnode);
      },
      changeLangEvent() {
        if ( this.lang === 'en' ) {
          this.lang = 'zhCHS';
          this.$i18n.locale = this.lang;
        }else {
          this.lang = 'en';
          this.$i18n.locale = this.lang;
        }
      }
    }
  }
</script>

<style scoped>

</style>
