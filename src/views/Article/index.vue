<template>
  <div class="p-20" v-if="article">
    <h2>{{article.title}}</h2>
    <div class="fs-12 mb-20">
      <span>· 发布于{{article.create_at}}&nbsp;</span>
      <span>· 作者{{article.author.loginname}}&nbsp;</span>
      <span>· {{article.visit_count}}次浏览&nbsp;</span>
      <span>· 来自{{article.tab}}&nbsp;</span>
    </div>
    <div class="content" v-html="article.content"></div>
    <div>
      <div>{{article.reply_count}}评论</div>
      <CommentCard v-for="item in article.replies" :key="item.id" :myData="item" />
    </div>
  </div>
</template>

<script>
import CommentCard from "@/components/CommentCard.vue";
import fetch from "@/utils/fetch";
import { api_topic_id } from "@/utils/urls";

export default {
  name: "article1",
  components: {
    CommentCard
  },
  data() {
    return {
      id: null,
      article: null
    };
  },
  mounted: function() {
    this.id = this.$route.params.id;
    this.handleLoginClick();
  },
  methods: {
    handleLoginClick: async function() {
      let data = await fetch(api_topic_id + `/${this.id}?mdrender=true`);
      if (data) {
        this.article = data;
      }
    }
  }
};
</script>

<style scoped>
.content >>> img {
  width: 100%;
}
.content >>> pre {
  font-size: 14px;
  border-radius: 0;
  padding: 0 15px;
  border: none;
  margin: 20px -10px;
  border-width: 1px 0;
  background: #f7f7f7;
  tab-size: 4;
  line-height: 22px;
  word-break: break-all;
  word-wrap: break-word;
  white-space: pre-wrap;
  font-family: Monaco, Menlo, Consolas, "Courier New", monospace;
  display: block;
}
.content >>> p {
  word-wrap: break-word;
}
</style>

