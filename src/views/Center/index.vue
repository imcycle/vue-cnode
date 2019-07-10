<template>
  <div class="center">
    <div class="user-card">
      <input v-model="token" />
      <van-button @click="handleLoginClick">登陆</van-button>
    </div>
    <van-cell title="消息" is-link />
    <Tabbar />
  </div>
</template>

<script>
import { Button, Cell } from "vant";
import Tabbar from "@/components/Tabbar";
import fetch from "@/utils/fetch";
import { api_accesstoken } from "@/utils/urls";

export default {
  name: "center",
  components: {
    [Button.name]: Button,
    [Cell.name]: Cell,
    Tabbar
  },
  data() {
    return {
      token: null
    };
  },
  methods: {
    handleLoginClick: async function() {
      let data = await fetch(api_accesstoken, {
        methods: "post",
        body: JSON.stringify({ accesstoken: this.token })
      });
      console.log(data);
      localStorage.WM_token = this.token;
    }
  }
};
</script>

<style scoped>
.user-card {
  padding: 30px 0;
  border-bottom: 1px solid #ddd;
}
</style>

