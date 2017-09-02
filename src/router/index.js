import Vue from 'vue';
import Router from 'vue-router';
import contentBlog from '@/components/content-blog';
import articleList from '@/components/article-list';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'blog',
      component: contentBlog,
    },
    {
      path: '/articles',
      name: 'articles',
      component: articleList,
    },
  ],
});
