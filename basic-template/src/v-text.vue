<script setup>
//1.
const msg1_1="get text {{ }} Mustache"
const msg1_2="get text by v-text"
</script>
 
<template>
<span>v-text</span>
<br><span class="desc">: get value of varible</span>
<!-- 1. v-text : get value of varible -->
  <li>{{msg1_1}}</li>
  <li v-text="msg1_2"></li>
</template>
 
<style>

</style>