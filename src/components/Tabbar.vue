<template>
  <van-tabbar v-model="active">
    <van-tabbar-item
      v-for="options in tabbars"
      v-bind:key="options.key"
      v-bind:name="options.key"
      v-bind:icon="options.icon"
      v-on:click="handleTabbarClick(options.path)"
    >{{options.name}}</van-tabbar-item>
  </van-tabbar>
</template>

<script>
import { Tabbar, TabbarItem } from "vant";

export default {
  name: "tabbar",
  components: {
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem
  },
  data() {
    return {
      tabbars: [
        {
          id: 1,
          key: "home",
          name: "首页",
          path: "/",
          icon: "home-o"
        },
        {
          id: 2,
          key: "about",
          name: "关于",
          path: "/about",
          icon: "notes-o"
        },
        {
          id: 3,
          key: "center",
          name: "我的",
          path: "/center",
          icon: "contact"
        }
      ],
      active: "home"
    };
  },

  mounted() {
    this.active = (
      this.tabbars.find(d => d.path === window.location.pathname) || {}
    ).key;
  },

  methods: {
    handleTabbarClick(path) {
      this.$router.push(path);
    }
  }
};
</script>
