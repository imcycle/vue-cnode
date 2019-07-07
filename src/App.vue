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

.flex {
  display: flex;
}
.flex-1 {
  flex: 1;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
