<template>
  <div class="collect">
    <div class="p-20">
      <div class="flex mb-20" v-for="item in collectList" :key="item.id">
        <van-image width="1rem" height="1rem" :src="item.author.avatar_url" />
        <div class="flex-1 pl-20">
          <div>
            <h3 class="space-nowrap lh-1_5" style="width: 2rem;">{{item.title}}</h3>
          </div>
          <div class="lh-1_5">
            <van-tag
              type="danger"
            >{{item.top && '置顶' || (item.good && '精选') || tabMap.get(item.tab)}}</van-tag>
            {{item.reply_count}}/{{item.visit_count}}
          </div>
          <div class="lh-1_5">{{item.create_at}}</div>
          <van-button
            plain
            hairline
            type="danger"
            size="small"
            @click="handleDeCollectClick(item.id)"
          >取消收藏</van-button>
        </div>
      </div>
    </div>
    <Tabbar />
  </div>
</template>

<script>
import { Image, Tag, Toast, Button } from "vant";
import Tabbar from "@/components/Tabbar";
import fetch from "@/utils/fetch";
import { api_topic_collects, api_topic_de_collect } from "@/utils/urls";
export default {
  name: "collect",
  components: {
    [Image.name]: Image,
    [Tag.name]: Tag,
    [Toast.name]: Toast,
    [Button.name]: Button,
    Tabbar
  },
  data() {
    return {
      tabMap: new Map([
        ["good", "精华"],
        ["share", "分享"],
        ["ask", "问答"],
        ["job", "招聘"]
      ]),
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
      }
      let data = await fetch(`${api_topic_collects}/${this.loginname}`);
      if (data) {
        this.collectList = data;
      }
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


