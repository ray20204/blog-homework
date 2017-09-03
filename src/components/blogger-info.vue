<template>
<div class="card pt-3">
    <img class="card-img-top" v-bind:src="avatar">
    <div class="card-block">
        <span>{{ username }}</span>
    </div>
</div>
</template>

<script>
export default {
  name: 'blogInfo',
  data() {
    return {
    };
  },
  computed: {
      username () {
          return this.$store.state.userInfo.username;
      },
      avatar () {
          return this.$store.state.userInfo.avatar;
      },
  },
};
</script>
