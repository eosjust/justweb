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
      'langImgUrl',
    ]
  })],
  state: {
    show: 'showhehe',
    env: 'none',
    bpNodeUrl: 'https://nodes.get-scatter.com/',
    lang: 'en',
    langImgUrl: 'https://www.countryflags.io/US/flat/48.png',
    rpsContractAccount: 'justgamemora',
    eosUserName: null,
    eosUserAuth: 'active',
    ismobile:false
  },
  mutations: {
    changeEosUserName(state, userName) {
      state.eosUserName = userName;
    },
    changeEosUserAuth(state, userAuth) {
      state.eosUserAuth = userAuth;
    },
    changeBpNodeUrl(state, url) {
      state.bpNodeUrl = url;
    },
    changeEnv(state, env) {
      state.env = env;
    },
    changeLang(state, lang) {
      state.lang = lang;
      if (lang == 'en') {
        state.langImgUrl = 'https://www.countryflags.io/US/flat/48.png';
      } else if (lang == 'zhCHS') {
        state.langImgUrl = 'https://www.countryflags.io/CN/flat/48.png';
      }
    },
    changeIsMobile(state,ismobile){
      state.ismobile=ismobile;
    }
  }
})
