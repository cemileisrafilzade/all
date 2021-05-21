<template>
 <div id="app">
   
   <SearchVue v-on:searchRequested="handleSearch"/>
   <p v-if="isLoading">loading...</p>
   <PreviewVue :gifs=gifs></PreviewVue>
 </div>
  
</template>

<script>
import PreviewVue from './components/Preview.vue'
import SearchVue from './components/Search.vue'

export default {
  name: 'App',
  components: {
SearchVue,
PreviewVue
  },
  data(){
    return{
      isLoading:true,
gifs:[]
}
  },
  methods:{
handleSearch(query){
  this.gifs = [];
  this.isLoading = true;
fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=SSK9wJW8AuZuQsvut5ejMwUq2mQPeJaR`)
.then((res) => {return res.json()})
.then((res) => {this.gifs = res.data})
this.isLoading = false;
}
  },
  created(){
fetch('https://api.giphy.com/v1/gifs/trending?api_key=SSK9wJW8AuZuQsvut5ejMwUq2mQPeJaR')
.then((res) => {return res.json()})
.then((res) => {this.gifs = res.data})
.then((res) => {console.log(res);
this.isLoading = false;
}

)

  }
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
</style>
