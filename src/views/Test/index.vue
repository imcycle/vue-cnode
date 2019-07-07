<template>
  <div class="test">
    <div>{{num}}</div>
    <button @click="handleButtonClick">(){}</button>
    <button @click="handleButtonClick1">function</button>
    <button @click="handleButtonClick2">fet arrow</button>

    <Tabbar />
  </div>
</template>

<script>
import Tabbar from "@/components/Tabbar.vue";

export default {
  name: "test",
  components: {
    Tabbar
  },
  data() {
    return {
      num: 1
    };
  },
  beforeCreate() {
    console.log(this.num, "this.num", "beforeCreate");
  },
  created() {
    console.log(this.num, "this.num", "created");
  },
  beforeMount() {
    console.log("beforeMount");
  },
  mounted() {
    console.log("mounted");
  },
  beforeUpdate() {
    console.log("beforeUpdate");
  },
  updated() {
    console.log("updated");
  },
  activated() {
    console.log("activated");
  },
  deactivated() {
    console.log("deactivated");
  },
  beforeDestroy() {
    console.log("beforeDestroy");
  },
  destroyed() {
    console.log("destroyed");
  },
  errorCaptured() {
    console.log("errorCaptured");
  },
  methods: {
    handleButtonClick: function() {
      console.log(this);
      this.num++;
    },
    handleButtonClick1() {
      console.log(this);
      this.num++;
    },
    handleButtonClick2: () => {
      console.log(this);
    }
  }
};
</script>
