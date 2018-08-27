<template>

  <div id="app">

    <mu-appbar style="width: 100%; min-width: 480px;" color="primary">
      <mu-button icon slot="left">
        <mu-icon value="menu"></mu-icon>
      </mu-button>

      <mu-menu slot="left">
        <mu-button flat ripple color="primary" to="/">
          {{$t('mainmenu.home')}}
        </mu-button>
        <mu-button flat ripple color="primary" to="/tpdemo">
          {{$t('mainmenu.tpdemo')}}
        </mu-button>
        <mu-button flat ripple color="primary" to="/moragame">
          {{$t('mainmenu.games')}}
        </mu-button>
        <mu-button flat ripple color="primary" to="/setting">
          {{$t('mainmenu.settings')}}
        </mu-button>
        <mu-button flat ripple color="primary" to="/about">
          {{$t('mainmenu.about')}}
        </mu-button>
      </mu-menu>
      <mu-menu slot="right" :open.sync="menuopen">
        <mu-button flat ripple color="primary">
          <img :src="currentlangurl">
        </mu-button>
        <mu-list slot="content">
          <mu-list-item button @click="changeLang('zhCHS')">
            <mu-list-item-action>
              <img src="https://www.countryflags.io/CN/flat/48.png">
            </mu-list-item-action>
            <mu-list-item-action>
              <mu-list-item-title>中文</mu-list-item-title>
            </mu-list-item-action>
          </mu-list-item>
          <mu-list-item button @click="changeLang('en')">
            <mu-list-item-action>
              <img src="https://www.countryflags.io/US/flat/48.png">
            </mu-list-item-action>
            <mu-list-item-action>
              <mu-list-item-title>English</mu-list-item-title>
            </mu-list-item-action>
          </mu-list-item>
        </mu-list>
      </mu-menu>
      <mu-button flat slot="right">LOGIN</mu-button>
    </mu-appbar>

    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return{
      menuopen:false,
      currentlang:this.$store.state.lang,
      currentlangurl:'https://www.countryflags.io/US/flat/48.png',
    }
  },
  created() {
    this.changeLang(this.currentlang);
  },
  methods: {
    changeLang(lang) {
      this.$i18n.locale=lang;
      if(lang=='en'){
        this.currentlangurl='https://www.countryflags.io/US/flat/48.png';
      }else if(lang=='zhCHS'){
        this.currentlangurl='https://www.countryflags.io/CN/flat/48.png';
      }
      this.$store.commit('changeLang', lang);
      this.menuopen=false;
    }
  }
}
</script>

<style>
  @import 'https://cdn.bootcss.com/material-design-icons/3.0.1/iconfont/material-icons.css';
</style>
