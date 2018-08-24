import Vue from 'vue'
import vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
Vue.use(vuex);

export default new vuex.Store({
  plugins: [createPersistedState({
    paths: [
      'env',
      'show',
      'bpNodeUrl',
      'lang',
    ]
  })],
  state:{
    show:'showhehe',
    env:'none',
    bpNodeUrl:'https://nodes.get-scatter.com/',
    lang:'en',
  },
  mutations:{
    changeBpNodeUrl (state, url) {
      state.bpNodeUrl =url;
    },
    changeEnv(state,env){
      state.env=env;
    },
    changeLang(state,lang){
      state.lang=lang;
    }
  }
})
