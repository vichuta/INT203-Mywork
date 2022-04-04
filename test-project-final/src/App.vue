<script setup>
</script>

<template>
<div>
    <h1>INT203 - test final project</h1>
    <div>
        <router-link :to="{name:'Home'}">Home</router-link> | 
        <router-link :to="{name:'Practices'}">Practice</router-link> | 
        <router-link :to="{name:'ListMoive'}">Movies</router-link> | 
        <router-link :to="{name:'AddMovie'}">Add New Movie</router-link>
    </div>
    <div>
        <router-view></router-view>
    </div>
</div>
</template>

<style>
div {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 16px;
}
</style>
