<template>
  <div class="hello">
    <h1>i`m Component</h1>
    <h3>msg: {{ msg }}</h3>
    <button v-on:click="handleComponentClick">传值4444给父组件</button>
  </div>
</template>

<script>
export default {
  name: "c1",
  props: {
    msg: String
  },
  methods: {
    handleComponentClick: function() {
      this.$emit("listenToChildEvent", "4444");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src="./theme.css"></style>
