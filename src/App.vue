<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>-->
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 14px;
  color: #2c3e50;
}

html,
body,
h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
  padding: 0;
}

.p-20 {
  padding: 20px;
}
.px-20 {
  padding: 0 20px;
}
.py-20 {
  padding: 20px 0;
}
.pt-20 {
  padding-top: 20px;
}
.pb-20 {
  padding-bottom: 20px;
}
.pl-20 {
  padding-left: 20px;
}
.pr-20 {
  padding-right: 20px;
}

.m-20 {
  padding: 20px;
}
.mx-20 {
  padding: 0 20px;
}
.my-20 {
  padding: 20px 0;
}
.mt-20 {
  padding-top: 20px;
}
.mb-20 {
  padding-bottom: 20px;
}
.ml-20 {
  padding-left: 20px;
}
.mr-20 {
  padding-right: 20px;
}

.lh-1_5 {
  line-height: 1.5;
}

.flex {
  display: flex;
}
.flex-1 {
  flex: 1;
}

.space-nowrap {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
</style>
