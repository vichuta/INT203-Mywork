<!-- v-bind -->
<script setup>
const textStyle = 'color:blue; font-style: italic; text-decoration:underline;'
</script>
 
<template>
<div>
<h3>v-bine : ใช้ผูก attribute, property หลายๆตัว </h3>
> textStyle = {{textStyle}}
<p :style="textStyle">:style="textStyle"</p>
<p v-bind:style="textStyle">v-bind:style="textStyle"</p>
</div>
</template>
 
<style>
</style>