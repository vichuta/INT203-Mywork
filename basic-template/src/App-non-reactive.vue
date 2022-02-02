<!-- Non-Reactive Variable -->
<script setup>
console.clear()
let counter = 1 
setInterval(()=> console.log(++counter),1000) 
//counter ใน script เปลี่ยนตาม fn
</script>
 
<template>
    <p>Counter : {{counter}}</p> 
    <!-- แต่ counter บน html ไม่เปลี่ยนตาม fn = ไม่ active -->
</template>
 
<style>

</style>