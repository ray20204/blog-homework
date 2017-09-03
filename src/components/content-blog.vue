<template>
    <div class="blog-content container" style="padding-top: 5rem;">
        <div class="row">
            <div class="col-2">
                <bloggerInfo></bloggerInfo>
            </div>
            <div class="col-10">
                <form class="sudo-form">
                    <div class="input-group">
                        <input class="form-control" v-model="userName" type="text" placeholder="帳號">
                        <span class="input-group-btn">
                            <button class="btn btn-secondary" v-on:click.prevent="sudo">變身</button>
                        </span>
                    </div>
                </form>
            </div>
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
      userName: '',
    };
  },
  methods: {
    sudo: function(e) {
        if (0 === this.userName.length) {
            alert('請填入帳號');
            return false;
        }

        this.$store.dispatch('getUserInfo', this.userName);
    }
  }
};
</script>
