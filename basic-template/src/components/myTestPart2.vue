<script setup>
import { computed, ref } from 'vue';
const courses = ref([
    {id: 'INT203', name: 'Client Web II', credit: 2},
    {id: 'INT204', name: 'Server Web II', credit: 3},
    {id: 'INT206', name: 'Database II', credit: 2}
])
const selectedIndex = ref('')
const selectCourse = computed(() => {
    if(selectCourse !== 0){
        if(selectedIndex.value >= 0){
        return courses.value[selectedIndex.value]
    }
}})

const myCourse = ref([])
const register = () => {
    myCourse.value.push(courses.value[selectedIndex.value])
}

</script>
 
<template>
<h3>ลงทะเบียนรายวิชา</h3>
<div>
    <select multiple v-model="selectedIndex">
        <option v-for="(course,index) in courses" :key="course.id" :value="index">
        {{course.id}} - {{course.name}}     credit:{{course.credit}} 
        </option>
    </select>
    <p>วิชาที่เลือก :{{selectCourse}}</p>
    <button type="sumbit" @click="register">ยืนยัน</button>

    <h4>รายวิชาที่เลือก :: </h4>
    <ul>
        <li v-for="course in myCourse" :key="course.id">
        {{course.id}} - {{course.name}}     credit:{{course.credit}} 
        </li>
    </ul>
</div>
</template>
 
<style>

</style>