<template>
  <div class="flex mb-20">
    <van-image
      width="1rem"
      height="1rem"
      :src="myData.author.avatar_url"
      @click="handleWrapClick(myData.id)"
    />
    <div class="flex-1 pl-20">
      <div>
        <h3
          class="space-nowrap lh-1_5"
          style="width: 2rem;"
          @click="handleWrapClick(myData.id)"
        >{{myData.title}}</h3>
      </div>
      <div class="lh-1_5">
        <van-tag
          type="danger"
        >{{myData.top && '置顶' || (myData.good && '精选') || tabMap.get(myData.tab)}}</van-tag>
        {{myData.reply_count}}/{{myData.visit_count}}
      </div>
      <div class="lh-1_5">{{myData.create_at}}</div>
      <slot />
    </div>
  </div>
</template>

<script>
import { Image, Tag, Button } from "vant";

export default {
  name: "articlecard",
  components: {
    [Image.name]: Image,
    [Tag.name]: Tag
  },
  props: {
    myData: Object
  },
  data() {
    return {
      tabMap: new Map([
        ["good", "精华"],
        ["share", "分享"],
        ["ask", "问答"],
        ["job", "招聘"]
      ])
    };
  },
  mounted() {},
  methods: {
    handleWrapClick: function(id) {
      this.$emit("onWrapClick", id);
    }
  }
};
</script>

<style scoped>
</style>

