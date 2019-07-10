<template>
  <div class="center">
    <div class="user-card" v-if="loginname">
      <van-image width="100" height="100" :src="avatar_url" />
      <div>{{loginname}}</div>
    </div>
    <div class="user-card" v-else>
      <input v-model="token" />
      <van-button @click="handleLoginClick">登陆</van-button>
    </div>
    <van-cell title="消息" is-link />
    <Tabbar />
  </div>
</template>

<script>
import { Button, Image, Cell, Toast } from "vant";
import Tabbar from "@/components/Tabbar";
import fetch from "@/utils/fetch";
import { api_accesstoken } from "@/utils/urls";

export default {
  name: "center",
  components: {
    [Button.name]: Button,
    [Image.name]: Image,
    [Cell.name]: Cell,
    [Toast.name]: Toast,
    Tabbar
  },
  data() {
    return {
      token: null,
      avatar_url: null,
      loginname: null
    };
  },
  mounted: function() {
    this.avatar_url = localStorage.WM_avatar_url;
    this.loginname = localStorage.WM_loginname;
  },
  methods: {
    handleLoginClick: async function() {
      let res = await fetch(api_accesstoken, {
        method: "post",
        body: JSON.stringify({ accesstoken: this.token }),
        returnResponse: true
      });
      let json = await res.json();
      if (json.success) {
        localStorage.WM_avatar_url = json.avatar_url;
        localStorage.WM_id = json.id;
        localStorage.WM_loginname = json.loginname;
        localStorage.WM_token = this.token;
        this.avatar_url = localStorage.WM_avatar_url;
        this.loginname = localStorage.WM_loginname;
      } else {
        Toast.fail(json.error_msg);
      }
    }
  }
};
</script>

<style scoped>
.user-card {
  padding: 0.3rem 0;
  border-bottom: 1px solid #ddd;
}
</style>

