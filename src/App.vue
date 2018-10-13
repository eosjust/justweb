<template>

  <div id="app">

    <mu-appbar style="width:100%;height: 56px;" color="secondary">

      <mu-button icon slot="left" @click="menudrawopen = !menudrawopen" v-show="ismobile">
        <icon name="menu" scale="5"></icon>
      </mu-button>

      <mu-menu slot="left" v-show="!ismobile">
        <mu-button flat ripple color="primary" to="/eosfarm">
          {{$t('mainmenu.farm')}}
        </mu-button>
        <mu-button flat ripple color="primary" to="/investjust">
          {{$t('mainmenu.investjust')}}
        </mu-button>
      </mu-menu>
      <mu-menu slot="right" :open.sync="isMenuLangOpen">
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
      <mu-menu slot="right" :open.sync="isMenuUserOpen" v-show="isMenuUserShow">
        <mu-button style="text-transform:none;" flat ripple color="primary">
          {{ curUserName }}
        </mu-button>
        <mu-list slot="content">
          <mu-list-item button v-for="user in eosUsers" :key="user.name" @click="onChoseUser(user.key)">
            <mu-list-item-title>{{user.name}}</mu-list-item-title>
          </mu-list-item>
          <mu-list-item button v-show="isBtnLogoutShow" @click="onBtnLogoutClick()">
            <mu-list-item-title>{{ $t('mainmenu.logout') }}</mu-list-item-title>
          </mu-list-item>
        </mu-list>
      </mu-menu>
      <mu-menu slot="right" :open.sync="isMenuLoginOpen" v-show="isMenuLoginShow">
        <mu-button style="text-transform:none;" @click="onMenuLoginClick" flat ripple color="primary">
          {{ $t('mainmenu.login') }}
        </mu-button>
      </mu-menu>
    </mu-appbar>
    <mu-drawer :open.sync="menudrawopen" :docked="menudrawdocked" v-show="ismobile">
      <mu-list>
        <mu-list-item button to="eosfarm" @click="menudrawopen = false">
          <mu-list-item-title> {{$t('mainmenu.farm')}}</mu-list-item-title>
        </mu-list-item>
        <mu-list-item button to="investjust" @click="menudrawopen = false">
          <mu-list-item-title> {{$t('mainmenu.investjust')}}</mu-list-item-title>
        </mu-list-item>
      </mu-list>
    </mu-drawer>
    <router-view/>

    <el-row style="background-color: #424242; padding-top: 10px;padding-bottom: 10px;">
      <el-row type="flex" justify="center">
        <el-col :span="3">
          <div style="text-align: center;">
            <icon name="wechat" scale="3"></icon>
          </div>
        </el-col>
        <el-col :span="3">
          <div style="text-align: center;">
            <icon name="github" scale="3"></icon>
          </div>
        </el-col>
        <el-col :span="3">
          <div style="text-align: center;">
            <icon name="telegram" scale="3"></icon>
          </div>
        </el-col>
        <el-col :span="3">
          <div style="text-align: center;">
            <icon name="mail" scale="3"></icon>
          </div>
        </el-col>
      </el-row>
      <el-row type="flex" justify="center">
        <el-col :span="24">
          <div style="background:linear-gradient(to left,#424242,#b6b6b6,#424242);height:1px;margin: 5px;"></div>
        </el-col>
      </el-row>
      <el-row type="flex" justify="center">
        <div style="color: #9e9e9e">Copyright 2018. JUST Team</div>
      </el-row>
    </el-row>
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
        isclientmobile: false,
        isMenuLangOpen: false,
        isMenuUserOpen: false,
        isMenuLoginOpen: false,

        isMenuUserShow: false,
        isMenuLoginShow: true,
        isBtnLogoutShow: true,
        menudrawdocked: false,
        menudrawopen: false,
        curUserName: null,
        eosUsers: []
      }
    },
    created() {
      this.changeLang(this.$store.state.lang);
      this.checkClient();
      this.initEosEnv();
    },
    computed: {},
    mounted() {
      const that = this;
      that.clientWidth = document.documentElement.clientWidth;
      that.clientHeight = document.documentElement.clientHeight;
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
        this.isMenuLangOpen = false;
      },
      onClientSizeChange(width, height) {
        if (this.isclientmobile) {
          if (width > height * 2) {
            this.ismobile = false;
            this.$store.commit('changeIsMobile', this.ismobile);
          } else {
            this.ismobile = true;
            this.$store.commit('changeIsMobile', this.ismobile);
          }
        } else {
          if (width > height) {
            this.ismobile = false;
            this.$store.commit('changeIsMobile', this.ismobile);
          } else {
            this.ismobile = true;
            this.$store.commit('changeIsMobile', this.ismobile);
          }
        }

      }, checkClient() {
        if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
          this.ismobile = true;
          this.isclientmobile = true;
          this.$store.commit('changeIsMobile', this.ismobile);
        } else {
          this.ismobile = false;
          this.isclientmobile = false;
          this.$store.commit('changeIsMobile', this.ismobile);
        }
      }, onBtnLogoutClick() {
        eossdkutil.logout();
        this.curUserName = null;
        this.eosUsers = [];
        this.isMenuUserOpen = false;
        this.isMenuUserShow = false;
        this.isMenuLoginShow = true;
      }, onMenuLoginClick() {
        var that = this;
        if (eossdkutil) {
          if (eossdkutil.getEnv() == "scatter") {
            if (!eossdkutil.getScatterIdentity()) {
              eossdkutil.login().then(function (identity) {
                that.initScatterName();
              });
            }
          } else if (eossdkutil.getEnv() == "tp") {

          } else if (eossdkutil.getEnv() == "none") {
            this.$message({
              message: '请安装scatter插件，或在eos dapp浏览器内运行',
              type: 'warning'
            });
          }
        }
      }, onChoseUser(name) {
        if (eossdkutil.getEnv() == "tp") {
          this.curUserName = name;
          this.isMenuUserOpen = false;
        }
      }, initEosEnv() {
        var that = this;
        if (eossdkutil) {
          window.eossdkutil = eossdkutil;
          // eossdkutil.setScatterNetworkTest();
          eossdkutil.setScatterNetworkMain();
          eossdkutil.init().then(function () {
            var env = eossdkutil.getEnv();
            if (env == "tp") {
              that.initTpName();
            } else if (env == "scatter") {
              that.initScatterName();
            } else {
            }
          });
        } else {

        }
      }, showUserOrLogin(curUser, users, env) {
        var that = this;
        that.eosUsers = users;
        if (curUser) {
          if (env == "tp") {
            that.isBtnLogoutShow = false;
          } else if (env == "scatter") {
            that.isBtnLogoutShow = true;
          }
          that.curUserName = curUser;
          that.isMenuLoginOpen = false;
          that.isMenuLoginShow = false;
          that.isMenuUserOpen = false;
          that.isMenuUserShow = true;
        } else {
          that.isBtnLogoutShow = false;
          that.isMenuUserOpen = false;
          that.isMenuUserShow = false;
          that.isMenuLoginOpen = false;
          that.isMenuLoginShow = true;
        }
      }, initScatterName() {
        var identity = eossdkutil.getScatterIdentity();
        var that = this;
        if (identity) {
          var account = identity.accounts.find(account => account.blockchain === 'eos');
          that.showUserOrLogin(account.name, [], "scatter");
        } else {
          that.showUserOrLogin(null, [], "scatter");
        }
      }, initTpName() {
        var that = this;
        eossdkutil.getWallets().then(function (data) {
          if (data) {
            var users = new Array();
            var eosWallets = data.wallets.eos;
            for (var i = 0; i < eosWallets.length; i++) {
              var user = new Object();
              user.name = eosWallets[i].name;
              user.key = eosWallets[i].name;
              users.push(user);
            }
            that.showUserOrLogin(users[0].name, users, "tp");
          }
        });
      }
    },
    watch: {
      clientWidth: function (val) {
        this.onClientSizeChange(val, this.clientHeight);
      },
      clientHeight: function (val) {
        this.onClientSizeChange(this.clientWidth, val);
      },
      curUserName: function (val) {
        this.$store.commit("changeEosUserName", val);
      }
    }
  }
</script>

<style>
</style>
