<template>
  <div class="about">
    <h1>This is an about page</h1>
    <Tabbar />
  </div>
</template>

<script>
import Tabbar from "@/components/Tabbar";
import fetch from "@/utils/fetch";
import { api_topic_collects } from "@/utils/urls";
export default {
  name: "about",
  components: {
    Tabbar
  },
  data() {
    return {
      collectList: null
    };
  },
  mounted: function() {
    this.fetchCollectList();
  },
  methods: {
    fetchCollectList: async function() {
      let data = fetch(api_topic_collects);
      if (data) {
        this.collectList = data;
      }
    }
  }
};
</script>

