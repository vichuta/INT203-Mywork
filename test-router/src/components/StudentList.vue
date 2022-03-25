<script setup>
import { ref } from 'vue'
const students = ref([
    {studentId: 63130500075, studentName:'Panalee Palasri'},
    {studentId: 63130500084, studentName:'Pornticha Srivoraluxkana'},
    {studentId: 63130500087, studentName:'Piraya Sutthiparinyanon'},
    {studentId: 63130500106, studentName:'Vichuta Pipoppinyo'}
])
</script>

<template>
  <div>
    <ul>
      <li v-for="student in students" :key="student.id">
        Student Name: 
        <router-link :to="{ 
            name: 'StudentItem', 
            params:{studentId:student.studentId}  //ส่ง parameter ผ่าน URL
            }">
            {{ student.studentName }} </router-link>
      </li>
    </ul>
  </div>
</template>

<style>

</style>