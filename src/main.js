// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Vuex from 'vuex';
import navbar from './components/navbar';
import router from './router';

Vue.use(Vuex);

Vue.config.productionTip = false;

const store = new Vuex.Store({
  state: {
    userInfo: {
      username: 'ray20204',
      avatar: 'https://s.pimg.tw/avatar/ray20204/0/0/zoomcrop/150x150.png?v=1500395503',
    },
  },
  mutations: {
  },
  actions: {
  },
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { navbar },
});
