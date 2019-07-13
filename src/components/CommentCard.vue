<template>
  <div class="commentcard py-20">
    <div class="flex pb-10">
      <van-image class="pr-10" width="30" height="30" :src="myData.author.avatar_url" />
      <span class="pr-10">{{myData.author.loginname}}</span>
      <span>{{myData.create_at}}</span>
    </div>
    <div class="content" v-html="myData.content"></div>
  </div>
</template>

<script>
import { Image } from "vant";

export default {
  name: "commentcard",
  props: {
    myData: Object
  },
  components: {
    [Image.name]: Image
  },

  mounted() {},

  methods: {}
};
</script>

<style scoped>
.commentcard {
  border-bottom: 1px solid #ddd;
}
.content >>> img {
  width: 100%;
}
.content >>> p {
  word-wrap: break-word;
}
</style>

