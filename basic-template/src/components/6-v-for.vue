<script setup>
const numArray = [1,2,3]
const accountObj = {
    accountId: 28831,
    accountName: 'Rapeepat Klamjeen',
    balance: 10000
}
const subjects = [
  { subjId: 'INT201', subjName: 'Client I', credit: 2 },
  { subjId: 'INT202', subjName: 'Server I', credit: 2 },
  { subjId: 'INT203', subjName: 'Client II', credit: 3 }
]
</script>
 
<template>
<div>
<h3>v-for : วน loop object (มี 3 แบบ)</h3>
<h5>1) v-for ="(num, index) in numArray"
    <br>numArray = {{numArray}}
</h5> 
<li v-for="(num, index) in numArray" :key="index">{{index}}-{{num}}</li>

<h5>2) v-for ="(value, propKey, index) in accountObj" 
    <br>accountObj = {{accountObj}}
</h5>
<li v-for="(value, propKey, index) in accountObj" :key="index">{{index}} - {{propKey}} : {{value}}</li>

<h5>3) v-for="subject in subjects" :key="subject.subjId" 
    <br/>subjects = {{subjects}}
</h5>
<li v-for="subject in subjects" :key="subject.subjId">
    {{subject.subjId}} - {{subject.subjName}} : {{subject.credit}}
</li>
</div>
</template>
 
<style>
</style>