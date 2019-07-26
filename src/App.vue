<template>
  <div id="app">
    <!-- <img width="100%" alt="Vue logo" src="./assets/banner.jpg"> -->
    <vote2 msg="百乐健身-柔术投票活动"/>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import vote2 from './components/vote/vote2.vue'

export default {
  name: 'app',
  components: {
    // HelloWorld,
    vote2
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
