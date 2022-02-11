<script setup>
import { ref } from 'vue'
const count = ref(0)
</script>
 
<template>
<div>
<h3>v-on : ใช้ execute function เมื่อเกิด Event</h3>
> count = {{count}}
<p>
<button @click="count++" style="cursor: pointer">Add</button>
</p>
</div>
</template>
 
<style>

</style>