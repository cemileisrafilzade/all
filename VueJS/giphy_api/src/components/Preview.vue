<template>
    <div class="preview">

        <ul>

<li v-for="gif in gifs" v-bind:key="gif" >
    <img v-bind:src="gif.images.fixed_height.url" >
</li>
        </ul>
    </div>
</template>

<script>
export default {
props : [ 'gifs' ]

}
</script>


<style >
.preview ul li{
    list-style: none;
    float:left;
    margin: 10px;
    
}

</style>