<template>
  <div id="app">

<router-link  class="link" to="/loginScreen">home</router-link>|
<router-link class="link" to="/foo">foooo</router-link>
<router-link to="/bar">Bar</router-link>
<router-view />
 
<!-- <LoginScreen/> -->
  </div>
</template>

<script>

// import Bar from './components/Bar.vue'
// import LoginScreen from './components/LoginScreen.vue'
export default {
  name: 'App',
// components:{LoginScreen}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.link{
  color: #168aff;
  padding: 5px;
  cursor: pointer;
  
}
.link:active{
  color: #042749;
}
</style>
