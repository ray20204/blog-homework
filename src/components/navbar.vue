<template>
<div class="container-fluid">
    <nav class="navbar navbar-expand-md navbar-dark fixed-top" style="background-color: #3565da">
        <router-link class="navbar-brand" to="/">Blog</router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbars" aria-controls="navbars" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbars">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                    <router-link class="nav-link" to="/articles"><i class="fa fa-newspaper-o text-danger" aria-hidden="true"></i> 文章列表</router-link>
                </li>
            </ul>
        </div>
    </nav>
</div>
</template>

<script>
export default {
  name: 'navbar',
  data() {
    return {
    };
  },
  methods: {
  },
};

</script>
