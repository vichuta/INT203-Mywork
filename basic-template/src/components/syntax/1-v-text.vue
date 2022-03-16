<!-- v-text -->
<script setup>
const text1 = 'get text by (Mustache) {{ }} '
const text2 = 'get text by v-text'
</script>
 
<template>
<div>
<h3>v-text : ใช้ get value ของตัวแปร</h3>
<p>{{ text1 }}</p>
<p v-text="text2"></p>
</div>
</template>
 
<style>

</style>