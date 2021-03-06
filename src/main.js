// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import MuseUI from 'muse-ui';
import 'muse-ui/dist/muse-ui.css';
import store from './store';
import i18n from './lang';
import ElementUI from 'element-ui';
import Icon from 'vue-svg-icon/Icon.vue';
import Croppa from 'vue-croppa'
import 'element-ui/lib/theme-chalk/index.css';
import 'vue-croppa/dist/vue-croppa.css'

Vue.config.productionTip = false;
Vue.component('icon', Icon);
Vue.use(MuseUI);
Vue.use(ElementUI);
Vue.use(Croppa);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  i18n,
  router,
  store,
  components: { App },
  template: '<App/>'
})
