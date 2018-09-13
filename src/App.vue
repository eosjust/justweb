<template>

  <div id="app">

    <mu-appbar style="width:100%;height: 56px;" color="secondary">

      <mu-button icon slot="left" @click="menudrawopen = !menudrawopen" v-show="ismobile">
        <mu-icon value="menu"></mu-icon>
      </mu-button>

      <mu-menu slot="left" v-show="!ismobile">
        <mu-button flat ripple color="primary" to="/eosfarm">
          {{$t('mainmenu.farm')}}
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
      <mu-menu slot="right" :open.sync="menuLoginOpen">
        <mu-button class="just-button-transform" @click="onMenuLogin" flat ripple color="primary">
          {{ menuLoginText }}
        </mu-button>
        <mu-list slot="content" v-show="isLoginMenuShow">
          <mu-list-item button v-for="user in eosUsers" :key="user.name" @click="onChoseUser(user.key)">
            <mu-list-item-title>{{user.name}}</mu-list-item-title>
          </mu-list-item>
        </mu-list>
      </mu-menu>
    </mu-appbar>
    <mu-drawer :open.sync="menudrawopen" :docked="menudrawdocked" v-show="ismobile">
      <mu-list>
        <mu-list-item button to="eosfarm" @click="menudrawopen = false">
          <mu-list-item-title> {{$t('mainmenu.farm')}}</mu-list-item-title>
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
        menuLoginOpen: false,
        isLoginMenuShow:false,
        menudrawdocked: false,
        menudrawopen: false,
        curUserName:"Login",
        eosUsers: []
      }
    },
    created() {
      this.changeLang(this.$store.state.lang);
      this.checkClient();
      this.initEosEnv();
    },
    computed : {

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
      },onMenuLogin() {
        var eossdkutil=window.eossdkutil;
        var that=this;
        if(eossdkutil){
          if(eossdkutil.getEnv()=="scatter"){
            if(!eossdkutil.getScatterIdentity()){
              eossdkutil.login().then(function (identity) {
                that.initScatterName();
                that.menuLoginOpen=false;
              });
              that.menuLoginOpen=false;
            }
          }else if(eossdkutil.getEnv()=="tp"){

          }else if(eossdkutil.getEnv()=="none"){
            this.$message({
              message: '请安装scatter插件，或在eos dapp浏览器内运行',
              type: 'warning'
            });
          }
        }
      },onChoseUser(name) {
        if(name=="logout"){
          eossdkutil.logout();
          this.curUserName=this.$t('mainmenu.login');
          this.eosUsers=[];
          this.isLoginMenuShow=false;
          this.menuLoginOpen=false;
        }else{
          if(eossdkutil.getEnv()=="tp"){
            this.curUserName=name;
            this.menuLoginOpen=false;
          }
        }
      },initEosEnv() {
        var that = this;
        if (eossdkutil) {
          window.eossdkutil = eossdkutil;
          this.isLoginMenuShow=false;
          eossdkutil.setScatterNetworkTest();
          eossdkutil.init().then(function () {
            var env=eossdkutil.getEnv();
            if(env=="tp"){
              that.initTpName();
            }else if(env=="scatter"){
              that.initScatterName();
            }else{
            }
          });
        }else{

        }
      },initScatterName(){
        var identity=eossdkutil.getScatterIdentity();
        var that=this;
        if(identity){
          var account = identity.accounts.find(account => account.blockchain === 'eos');
          that.curUserName=account.name;
          var users=new Array();
          that.menuLoginOpen=false;
          that.isLoginMenuShow=true;
          that.menuLoginOpen=false;
          users.push({name:that.$t('mainmenu.logout'),key:"logout"});
          that.eosUsers=users;
        }else{
          that.curUserName=this.$t('mainmenu.login');
          that.isLoginMenuShow=false;
          that.menuLoginOpen=false;
        }
      },initTpName(){
        var that=this;
        eossdkutil.getWallets().then(function (data) {
          if(data){
            var users=new Array();
            var eosWallets=data.wallets.eos;
            for(var i=0;i<eosWallets.length;i++){
              var user=new Object();
              user.name=eosWallets[i].name;
              user.key=eosWallets[i].name;
              users.push(user);
            }
            that.eosUsers=users;
            that.curUserName=JSON.stringify(users[0].name);
            that.menuLoginOpen=false;
            that.isLoginMenuShow=true;
            that.menuLoginOpen=false;
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
      }
    }
  }
</script>

<style>
  @import 'https://cdn.bootcss.com/material-design-icons/3.0.1/iconfont/material-icons.css';
  .just-button-transform{
    text-transform:none;
  }
</style>
