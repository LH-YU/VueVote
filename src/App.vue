<template>
  <div id="app">
    <!-- <img width="100%" alt="Vue logo" src="./assets/banner.jpg"> -->
    <vote2 msg="百乐健身-柔术投票活动" v-if="isWx"/>
    <NoData v-else></NoData>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import vote2 from "./components/vote/vote2.vue";
import NoData from "./components/404.vue";

export default {
  name: "app",
  data() {
    return {
      isWx: false
    };
  },
  created() {
    this.isWx=this.isWeiXin()
  },
  methods: {
    isWeiXin() {
      var ua = window.navigator.userAgent.toLowerCase();
      console.log(ua); //mozilla/5.0 (iphone; cpu iphone os 9_1 like mac os x) applewebkit/601.1.46 (khtml, like gecko)version/9.0 mobile/13b143 safari/601.1
      if (ua.match(/MicroMessenger/i) == "micromessenger") {
        return true;
      } else {
        return false;
      }
    }
  },
  components: {
    // HelloWorld,
    vote2,
    NoData
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100%;
  /* margin-top: 60px; */
}
html{
  width:100%;
  height:100%;
}
body{
  width: 100%;
  height: 100%;
}
</style>
