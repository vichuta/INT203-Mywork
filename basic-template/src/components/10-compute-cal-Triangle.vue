<!-- Example : คำนวณพื้นที่ 3 สามเหลี่ยม 
ใช้ ref + v-on/@click + computed() + v-model-->
<script setup>
console.clear()
// ต้นฉบับ ยังไม่ active
// const base = 4
// const height = 8 
// const result = (1/2)*base*height

import {ref, computed} from 'vue'
// แก้เป็น (active แล้ว)
const base = ref(4)
const height = ref(8)
//แสดงค่า result แบบที่ 1 
//let result = ref(1)
// const computeArea = ()=> {
//     console.log('compute area working')
//     result.value = (1/2)*base.value*height.value
// }

//แสดงค่า result แบบที่ 2 >> ลองใช้ computed() เข้ามาช่วยคำนวณ และแสดงค่า result อัตโนมัติ
const result = computed(()=>{
    return (1/2)*base.value*height.value
})

const descShow = 'computed(()=>{ <b style="color:red;">return</b>(1/2)*base.value*height.value })'

</script>
 
<template>
<div>
<h3>Part 4 - compute() function : ใช้ execute-function ที่ return ค่า</h3>
<h5>คำนวณหาพื้นที่สามเหลี่ยม</h5>
> base = ref(4)         <br/>
> height = ref(8)       <br/>
> result = <span v-html="descShow"></span>
    
    <p>Base : {{base}}</p>
    <button @click="base++">Add 1 to base</button>
    
    <p>Height : {{height}}</p>
    <!-- <button @click="height++">Add 1 to height</button> -->
<!-- ลองเปลี่ยนมาใช้ v-model ช่วยให้ active มากขึ้น -->
    <input type="number" v-model="height" />
    
    <p>Result : {{result}}</p>
    <!-- <button @click="computeArea()">Compute Area</button> -->
</div>
</template>
 
<style>
    
</style>