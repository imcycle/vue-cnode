<template>
  <div class="nav">
    <div
      class="nav-item"
      v-for="options in nav"
      v-bind:key="options.id"
      v-on:click="handleNavClick(options.path)"
    >
      <img v-bind:src="options.image">
      <div v-bind:style="$route.path === options.path && 'color: #f00'">{{options.name}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "navigation",
  props: {
    msg: String
  },
  data: function() {
    return {
      nav: [
        {
          id: 1,
          image: require("../../images/home.jpg"),
          path: "/",
          name: "首页"
        },
        {
          id: 12,
          image: require("../../images/about.jpg"),
          path: "/about",
          name: "关于"
        }
      ]
    };
  },
  methods: {
    handleNavClick: function(path) {
      this.$router.push(path);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src="./theme.css"></style>
