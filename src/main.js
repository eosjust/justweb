// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import MuseUI from 'muse-ui';
import 'muse-ui/dist/muse-ui.css';
import store from './store';
import i18n from './lang';
import tp from 'tp-js-sdk';




Vue.config.productionTip = false
Vue.use(MuseUI);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  i18n,
  router,
  store,
  tp,
  components: { App },
  template: '<App/>'
})
