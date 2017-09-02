<template>
  <div class="article-list" style="padding-top: 5rem;">
      <ul>
          <li v-for="article in articles">{{ article.title  }}</li>
      </ul>
  </div>
</template>

<script>
export default {
  name: 'articleList',
  data() {
    return {
    };
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
