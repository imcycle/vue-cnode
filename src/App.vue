<template>
  <div class="root">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
.root {
  min-height: 100vh;
}
</style>

