<template>
   
   <div class="search">
    <input type="text" v-model="query" v-on:keypress.enter="handleSearch">
    <button v-on:click="handleSearch">Search</button>
    </div>
</template>

<script>

export default {
    data(){
        return {
            query:''
        }
    },
    methods:{
        handleSearch(){
          this.$emit('searchRequested',this.query);
          
          // console.log(this.query);
        }
    }
}

</script>

<style>
.search input{
    padding: 7px;
    border-radius: 5px;
    margin: 5px;
    border: 1px solid #CCC;

}
.search button{
    padding: 8px;
    border-radius: 5px;
    background-color: rgb(87, 143, 248);
    color: white;
    border: transparent;
}
</style>