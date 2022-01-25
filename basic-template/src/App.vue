<script setup>
const msg1="get text {{ }} Mustache"
const msg2="get text by v-text"
</script>
 
<template>
<h1>Hello, Vue.js</h1>
<ul>
  <li>{{msg1}}</li>
  <li v-text="msg2"></li>
</ul>
</template>
 
<style>
</style>
