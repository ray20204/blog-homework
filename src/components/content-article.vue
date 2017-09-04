<template>
  <div class="content-article container" style="padding-top: 5rem;">
      <div class="row">
          <div class="col-2">
              <bloggerInfo></bloggerInfo>
          </div>
          <div class="col-10">
              <div class="card">
                  <router-link to="/articles">回文章列表</router-link>
                  <div class="card-block pt-3">
                      <h4 class="card-title">{{ articleInfo.title }}</h4>
                      <div class="article-body pt-3" v-html="articleInfo.body">
                      </div>
                  </div>
            </div>
          </div>
      </div>
  </div>
</template>

<script>
import bloggerInfo from './blogger-info.vue';
export default {
  name: 'contentArticle',
  data() {
    return {
    };
  },
  components: {
    bloggerInfo,
  },
  computed: {
    articleInfo () {
      console.log(this.$store.state.articleInfo);
      return this.$store.state.articleInfo;
    },
  },
  created() {
    this.$store.dispatch('getArticleInfoById', this.$route.params.id);
  },
};
</script>
