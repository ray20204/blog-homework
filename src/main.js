// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import navbar from './components/navbar';
import router from './router';

Vue.use(Vuex);

Vue.config.productionTip = false;

const emmaAPI = 'https://emma.pixnet.cc/';
const store = new Vuex.Store({
    state: {
        userInfo: {
            username: 'ray20204',
            avatar: 'https://s.pimg.tw/avatar/ray20204/0/0/zoomcrop/150x150.png?v=1500395503',
        },
        articles: {},
        articlePage: 1,
    },
    mutations: {
        setArticles (state, response) {
            state.articles = response.articles;
            state.articlePage = response.page;
        }
    },
    actions: {
        getArticles( {commit}) {
            axios.get(emmaAPI + 'blog/articles?user=' + this.state.userInfo.username + '&format=json&page=1')
                .then(res => {
                    console.log(res);
                    if (!res.data.articles) {
                        return;
                    }
                    commit('setArticles', res.data);
                }).catch(error => {
                    console.log(error);
                });
        }
    },
});

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: { navbar },
});
