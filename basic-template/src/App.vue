<!-- Reactivity Variable -->
<script setup>
//1. import function จาก Vue
import {ref} from 'vue'
console.clear()

//2. ref funciton : ทำให้ตัวแปรเป็น reactive Object
const counter = ref(1) 

//3. ตัวแปรต้องมี .value : เพื่อเปลี่ยน Object >> Varible
setInterval(()=> console.log(++counter.value),1000)
</script>
 
<template>
    <p>Counter : {{counter}}</p>
</template>
 
<style>
</style>