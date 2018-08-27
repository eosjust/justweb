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
  state:{
    show:'showhehe',
    env:'none',
    bpNodeUrl:'https://nodes.get-scatter.com/',
    lang:'en',
    langImgUrl:'https://www.countryflags.io/US/flat/48.png',
    rpsContractAccount:'justgamemora',
    scatterMainNetwork: {
      blockchain: 'eos',
      host: 'nodes.get-scatter.com',
      port: 443,
      protocol: 'https',
      chainId: 'aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906'
    },
    scatterTestNetwork: {
      blockchain: 'eos',
      host: 'kylin.fn.eosbixin.com',
      port: 80,
      protocol: 'http',
      chainId: '5fff1dae8dc8e2fc4d5b23b2c7665c97f9e9d8edf2b6485a86ba311c25639191'
    }
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
      if(lang=='en'){
        state.langImgUrl='https://www.countryflags.io/US/flat/48.png';
      }else if(lang=='zhCHS'){
        state.langImgUrl='https://www.countryflags.io/CN/flat/48.png';
      }
    }
  }
})
