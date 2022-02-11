<!-- v-if , v-else, v-else-if -->
<script setup>
const noName = false
const descVshow ='แต่ถ้า v-show="false" จะซ่อน tag นี้'
</script>
 
<template>
<div>
<h3>v-show : ใช้ show/hide tag</h3>
> noName = {{noName}}
<p v-show="true">   ถ้า v-show="true" จะแสดง tag นี้ {{descVshow}}</p>
<p v-show="noName"> แต่ถ้า v-show="false" จะซ่อน tag นี้</p>
</div>
</template>
 
<style>

</style>