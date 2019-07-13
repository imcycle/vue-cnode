<template>
  <div class="collect">
    <div class="p-20">
      <ArticleCard
        v-for="item in collectList"
        :key="item.id"
        :myData="item"
        v-on:onWrapClick="gotoArticle"
      >
        <van-button
          plain
          hairline
          type="danger"
          size="small"
          @click="handleDeCollectClick(item.id)"
        >取消收藏</van-button>
      </ArticleCard>
    </div>
    <Tabbar />
  </div>
</template>

<script>
import { Toast, Button } from "vant";
import Tabbar from "@/components/Tabbar";
import ArticleCard from "@/components/ArticleCard.vue";
import fetch from "@/utils/fetch";
import { api_topic_collects, api_topic_de_collect } from "@/utils/urls";
export default {
  name: "collect",
  components: {
    [Toast.name]: Toast,
    [Button.name]: Button,
    ArticleCard,
    Tabbar
  },
  data() {
    return {
      loginname: null,
      collectList: null
    };
  },
  mounted: function() {
    this.loginname = localStorage.WM_loginname;
    this.fetchCollectList();
  },
  methods: {
    fetchCollectList: async function() {
      if (!this.loginname) {
        Toast.fail("请先登录");
        return;
      }
      let data = await fetch(`${api_topic_collects}/${this.loginname}`);
      if (data) {
        this.collectList = data;
      }
    },
    gotoArticle: function(id) {
      this.$router.push(`/article/${id}`);
    },
    handleDeCollectClick: async function(id) {
      let params = {
        accesstoken: localStorage.WM_token,
        topic_id: id
      };
      let success = await fetch(api_topic_de_collect, {
        method: "post",
        body: JSON.stringify(params),
        returnBoolean: true
      });
      if (success) {
        Toast.success("取消收藏成功");
      }
      this.fetchCollectList();
    }
  }
};
</script>

<style scoped>
.collect {
  padding-bottom: 50px;
}
</style>


