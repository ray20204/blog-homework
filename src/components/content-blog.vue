<template>
  <div class="container pt-5">
       <div class="col-2">
            <div class="card pt-3">
                <img class="card-img-top" v-bind:src="avatar">
               <div class="card-block">
                   <span>{{ username }}</span>
               </div>
           </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'blog',
  data() {
    return {
      username: this.$store.state.userInfo.username,
      avatar: this.$store.state.userInfo.avatar,
    };
  },
};
</script>
