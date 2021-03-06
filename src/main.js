// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import navbar from './components/navbar';
import router from './router';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';

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
        articleInfo: {},
    },
    mutations: {
        setArticles (state, response) {
            state.articles = response.articles;
            state.articlePage = response.page;
        },
        setUserInfo (state, response) {
            state.userInfo.username = response.user.name;
            state.userInfo.avatar = response.user.avatar;
        },
        setArticleInfo (state, response) {
            state.articleInfo = response.article;
        }
    },
    actions: {
        getArticles( {commit}) {
            axios.get(emmaAPI + 'blog/articles?user=' + this.state.userInfo.username + '&format=json&page=1')
                .then(res => {
                    if (!res.data.articles) {
                        return;
                    }
                    commit('setArticles', res.data);
                }).catch(error => {
                    console.log(error);
                });
        },
        getUserInfo( {commit}, userName) {
            axios.get(emmaAPI + 'users/' + userName + '?format=json')
                .then(res => {
                    if (!res.data.user) {
                        return;
                    }
                    commit('setUserInfo', res.data);
                }).catch(error => {
                    console.log(error);
                });
        },
        getArticleInfoById( {commit}, articleID) {
            axios.get(emmaAPI + 'blog/articles/' + articleID + '?user=' + this.state.userInfo.username + '&format=json')
                .then(res => {
                    if (!res.data.article) {
                        return;
                    }
                    commit('setArticleInfo', res.data);
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
