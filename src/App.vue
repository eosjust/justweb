<template>

  <div id="app">

    <mu-appbar style="width:100%;height: 56px;" color="secondary">

      <mu-button icon slot="left" @click="menudrawopen = !menudrawopen" v-show="ismobile">
        <mu-icon value="menu"></mu-icon>
      </mu-button>

      <mu-menu slot="left" v-show="!ismobile">
        <mu-button flat ripple color="primary" to="/">
          {{$t('mainmenu.home')}}
        </mu-button>
        <mu-button flat ripple color="primary" to="/tpdemo">
          {{$t('mainmenu.tpdemo')}}
        </mu-button>
        <mu-button flat ripple color="primary" to="/investjust">
          {{$t('mainmenu.investjust')}}
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
          <img :src="this.$store.state.langImgUrl">
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
    <mu-drawer :open.sync="menudrawopen" :docked="menudrawdocked" v-show="ismobile">
      <mu-list>
        <mu-list-item button to="/" @click="menudrawopen = false">
          <mu-list-item-title> {{$t('mainmenu.home')}}</mu-list-item-title>
        </mu-list-item>
        <mu-list-item button to="tpdemo" @click="menudrawopen = false">
          <mu-list-item-title> {{$t('mainmenu.tpdemo')}}</mu-list-item-title>
        </mu-list-item>
        <mu-list-item button to="investjust" @click="menudrawopen = false">
          <mu-list-item-title> {{$t('mainmenu.investjust')}}</mu-list-item-title>
        </mu-list-item>
        <mu-list-item button to="moragame" @click="menudrawopen = false">
          <mu-list-item-title> {{$t('mainmenu.games')}}</mu-list-item-title>
        </mu-list-item>
        <mu-list-item button to="setting" @click="menudrawopen = false">
          <mu-list-item-title> {{$t('mainmenu.settings')}}</mu-list-item-title>
        </mu-list-item>
        <mu-list-item button to="about" @click="menudrawopen = false">
          <mu-list-item-title> {{$t('mainmenu.about')}}</mu-list-item-title>
        </mu-list-item>
      </mu-list>
    </mu-drawer>
    <router-view/>
  </div>
</template>

<script>
  import eossdkutil from 'eos-sdk-util';

  export default {
    name: 'App',
    data() {
      return {
        clientWidth: 1,
        clientHeight: 1,
        ismobile: false,
        menuopen: false,
        menudrawdocked: false,
        menudrawopen: false,
      }
    },
    created() {
      this.changeLang(this.$store.state.lang);
      this.checkClient();
      var that = this;

      if (eossdkutil) {
        window.eossdkutil = eossdkutil;
        eossdkutil.init();
        eossdkutil.setScatterNetworkMain();
      }
    },
    mounted() {
      const that = this;
      window.onresize = () => {
        return (() => {
          that.clientWidth = document.documentElement.clientWidth;
          that.clientHeight = document.documentElement.clientHeight;
        })()
      }
    },
    methods: {
      changeLang(lang) {
        this.$i18n.locale = lang;
        this.$store.commit('changeLang', lang);
        this.menuopen = false;
      },
      onClientSizeChange(width, height) {
        if (width > height) {
          this.ismobile = false;
        } else {
          this.ismobile = true;
        }
      }, checkClient() {
        if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
          this.ismobile = true;
        } else {
          this.ismobile = false;
        }
      }
    },
    watch: {
      clientWidth: function (val) {
        this.onClientSizeChange(val, this.clientHeight);
      },
      clientHeight: function (val) {
        this.onClientSizeChange(this.clientWidth, val);
      }
    }
  }
</script>

<style>
  @import 'https://cdn.bootcss.com/material-design-icons/3.0.1/iconfont/material-icons.css';
</style>
