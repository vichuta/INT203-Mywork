// การเรียก parameter ที่ส่งมาผ่าน URL มี 3 แบบ
<script setup>
// แบบที่ 2 : useRoute (มักจะใช้ดึง parameter ที่ส่งมาผ่าน URL)
import {useRoute, useRouter} from 'vue-router'
const {params} = useRoute()
console.log(params.studentId)

// แบบที่ 3 : useRouter(มักจะใช้เปลี่ยนหน้า page)
//import {useRouter} from 'vue-router'
const myRouter = useRouter()
const goBack = () => myRouter.go(-1) //-1 => ย้อนกลับไปหน้าก่อนหน้า
const goMyPort = () => myRouter.push({name: 'MyPortfolio'})
console.log(params.studentId)
</script>

<template>
  <div>
    <h1>Student Item</h1>
                                <!-- แบบที่ 1 -->
    <p>your selected student is {{this.$route.params.studentId}}</p>

    <button @click="goBack">Back</button>
    <button @click="goMyPort">My Portfolio</button>
  </div>
</template>

<style>

</style>