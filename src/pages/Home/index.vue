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

    <div v-for="item in dataList" v-bind:key="item.id" @click="handleJump(item)">
      <span>{{item.name}}</span>
      <span v-if="item.num===0">
        <button @click="e => handleAddClick(e, item)">+</button>
      </span>
      <span v-else>
        <button>-</button>
        <span>{{item.num}}</span>
        <button @click="e => handleAddClick(e, item)">+</button>
      </span>
    </div>
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
      dataList: [
        { id: 1, name: "asdf", num: 0 },
        { id: 2, name: "aeg3", num: 0 }
      ],
      msg: "1111"
    };
  },
  created: function() {
    this.fetchDataList();
  },
  methods: {
    handleJump: function(item) {
      console.log("jump");
      this.$router.push(`/detail/${item.id}`);
    },
    handleAddClick: (e, item) => {
      e.stopPropagation();
      item.num++;
      console.log("add");
    },

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
