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
        <div class="flex mb-20" v-for="item in topicList" :key="item.id">
          <van-image width="100" height="100" :src="item.author.avatar_url" />
          <div class="flex-1 pl-20">
            <h3>{{item.title}}</h3>
            <div>{{item.reply_count}}/{{item.visit_count}}</div>
            <div>{{item.create_at}}</div>
          </div>
        </div>
      </van-list>
    </van-pull-refresh>
    <Tabbar />
  </div>
</template>

<script>
import { PullRefresh, Tab, Tabs, List, Image } from "vant";
import Tabbar from "@/components/Tabbar.vue";
import fetch from "@/utils/fetch";
import { api_topics } from "@/utils/urls";
export default {
  name: "home",
  components: {
    [PullRefresh.name]: PullRefresh,
    [Tab.name]: Tab,
    [Tabs.name]: Tabs,
    [List.name]: List,
    [Image.name]: Image,
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
    }
  }
};
</script>

<style scoped>
.home {
  padding-bottom: 50px;
}
</style>
