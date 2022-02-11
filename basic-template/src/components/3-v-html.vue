<!-- v-html -->
<script setup>
const htmlTag = '<i>show text from string html tag<i>'
</script>
 
<template>
<div>
<h3>v-html : ใช้ add inner tag html</h3>
> htmlTag = {{htmlTag}}
<p v-html="htmlTag"></p>
</div>
</template>
 
<style>

</style>