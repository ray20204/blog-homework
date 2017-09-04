<template>
  <div class="article-list container" style="padding-top: 5rem;">
      <div class="row">
          <div class="col-2">
              <bloggerInfo></bloggerInfo>
          </div>
          <div class="col-10">
              <ul>
                  <li v-for="article in articles"><router-link :to="{ name: 'content-article', params: { id: article.id }}">{{ article.title  }}</router-link></li>
              </ul>
          </div>
      </div>
  </div>
</template>

<script>
import bloggerInfo from './blogger-info.vue';
export default {
  name: 'articleList',
  data() {
    return {
    };
  },
  components: {
    bloggerInfo,
  },
  computed: {
      articles () {
          return this.$store.state.articles;
      },
      articlePage () {
          return this.$store.state.articlePage;
      },
  },
  created() {
    this.$store.dispatch('getArticles');
  },
};
</script>
