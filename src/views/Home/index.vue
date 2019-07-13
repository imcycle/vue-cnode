<template>
  <div class="home">
    <van-tabs class="mb-20" v-model="tab" @change="handleTabsChange">
      <van-tab title="全部" name="all"></van-tab>
      <van-tab title="精华" name="good"></van-tab>
      <van-tab title="分享" name="share"></van-tab>
      <van-tab title="问答" name="ask"></van-tab>
    </van-tabs>
    <van-pull-refresh v-model="isPullRefreshLoading" @refresh="onPullRefresh">
      <van-list
        class="px-20"
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="fetchTopicList"
      >
        <ArticleCard
          v-for="item in topicList"
          :key="item.id"
          :myData="item"
          v-on:onWrapClick="gotoArticle"
        >
          <van-button
            plain
            hairline
            type="primary"
            size="small"
            @click="handleCollectClick(item.id)"
          >收藏</van-button>
        </ArticleCard>
      </van-list>
    </van-pull-refresh>
    <Tabbar />
  </div>
</template>

<script>
import { PullRefresh, Tab, Tabs, List, Button, Toast } from "vant";
import Tabbar from "@/components/Tabbar.vue";
import ArticleCard from "@/components/ArticleCard.vue";
import fetch from "@/utils/fetch";
import { api_topics, api_topic_collect } from "@/utils/urls";
export default {
  name: "home",
  components: {
    [PullRefresh.name]: PullRefresh,
    [Tab.name]: Tab,
    [Tabs.name]: Tabs,
    [List.name]: List,
    [Button.name]: Button,
    [Toast.name]: Toast,
    ArticleCard,
    Tabbar
  },
  data() {
    return {
      isPullRefreshLoading: false,
      tab: "all",
      page: 0,
      limit: 20,
      topicList: null,
      loading: false,
      finished: false
    };
  },

  mounted() {
    this.fetchTopicList();
  },
  methods: {
    fetchTopicList: async function(isReset) {
      if (isReset) {
        this.page = 0;
      }
      this.page++;
      let url = `${api_topics}?page=${this.page}&limit=${this.limit}&mdrender=false&tab=${this.tab}`;
      let data = await fetch(url);
      this.isPullRefreshLoading = false;
      this.loading = false;
      if (data.length) {
        if (isReset) {
          this.topicList = null;
        }
        this.topicList = [...(this.topicList || []), ...data];
        this.finished = false;
      } else {
        this.finished = true;
      }
    },
    onPullRefresh: function() {
      this.fetchTopicList(true);
    },
    handleTabsChange: function(name) {
      this.tabName = name;
      this.fetchTopicList(true);
    },
    gotoArticle: function(id) {
      this.$router.push(`/article/${id}`);
    },
    handleCollectClick: async function(id) {
      let params = {
        accesstoken: localStorage.WM_token,
        topic_id: id
      };
      let success = await fetch(api_topic_collect, {
        method: "post",
        body: JSON.stringify(params),
        returnBoolean: true
      });
      if (success) {
        Toast.success("收藏成功");
      }
    }
  }
};
</script>

<style scoped>
.home {
  padding-bottom: 50px;
}
</style>
