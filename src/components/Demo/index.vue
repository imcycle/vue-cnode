<template>
  <div class="hello">
    <h3>msg: {{ msg }}</h3>
    <button v-on:click="handleComponentClick">按钮</button>
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
