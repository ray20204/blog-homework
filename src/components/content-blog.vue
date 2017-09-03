<template>
  <div class="container pt-5">
       <div class="col-2">
           <bloggerInfo></bloggerInfo>
      </div>
  </div>
</template>

<script>
import bloggerInfo from './blogger-info.vue';
export default {
  name: 'blog',
  components: {
    bloggerInfo,
  },
  data() {
    return {
    };
  },
};
</script>
