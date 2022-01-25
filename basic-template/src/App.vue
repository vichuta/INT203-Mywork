<script setup>
//1.
const msg1_1="get text {{ }} Mustache"
const msg1_2="get text by v-text"
//2.
const headingStyle = 'color:red; text-decoration:underline;'
//3.
const imagePath = "../public/images/eevee.png"
const imageStyle = "width: 50px;"
</script>
 
<template>
<h1>Hello, Vue.js</h1><hr>
<ul>
<!-- 1. get text  -->
  <li>{{msg1_1}}</li>
  <li v-text="msg1_2"></li>

<!-- 2. get style -->
  <li :style="headingStyle">add style using  " : "</li>
  <li v-bind:style="headingStyle">add style by v-bind</li>
</ul>

<!-- 3. get image -->
<img src="./assets/logo.png" :style="imageStyle">
<img :src="imagePath" :style="imageStyle" alt="" srcset="">

<p></p>
</template>

<style>
</style>
