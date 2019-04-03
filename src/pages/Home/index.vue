<template>
  <div id="home">
    home
    <div class="test">{{msg}}</div>
    <C1 v-bind:msg="msg" v-on:listenToChildEvent="asdfasdf"/>
    <button v-on:click="handleButtonClick">设置为2222</button>
    <button v-on:click="handleButtonClick1">设置为3333</button>
    <van-button type="default">默认按钮</van-button>
    <van-button type="primary">主要按钮</van-button>
    <van-button type="info">信息按钮</van-button>
    <van-button type="warning">警告按钮</van-button>
    <van-button type="danger">危险按钮</van-button>
    <Navigation/>
  </div>
</template>

<script>
import fetch from "../../services/fetch";
import C1 from "../../components/C1";
import Navigation from "../../components/Navigation";

export default {
  name: "home",
  components: {
    C1,
    Navigation
  },
  data: function() {
    return {
      msg: "1111"
    };
  },
  created: function() {
    this.fetchDataList();
  },
  methods: {
    fetchDataList: function() {
      fetch("/topics");
    },
    handleButtonClick: function() {
      this.msg = "2222";
    },
    handleButtonClick1: function() {
      this.msg = "3333";
    },
    asdfasdf: function(data) {
      this.msg = data;
    }
  }
};
</script>

<style scoped src="./theme.css"></style>
