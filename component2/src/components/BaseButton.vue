<!-- ปลายทาง -->
<script setup>
import {ref, computed} from 'vue'
const prop = defineProps({
    yourText:{
        type: String,
        require: true
    },
    yourColor:{
        type: String,
        require: true
    }
})
//*การรับค่า Text จากต้นทาง
// วิธีที่ 1 : ดึง Original yourText ที่ส่งมา ไปใช้แสดงเลย
// วิธีที่ 2 : สร้างตัวแปรมารับค่า Orinal คั่น (อาจจะใช้บางกรณีตอนสร้าง project)
console.log(prop.yourText)
// const buttonText = ref(prop.yourText) //ค่าไม่ update ตามต้นทาง --> ต้องใช้ computed
const buttonText = computed(()=> prop.yourText)
console.log(buttonText.value)
</script>


<template>
<!--  วิธีที่ 1 -->
    <button class="button-color">{{yourText}}</button>
<!--  วิธีที่ 2 -->
    <button class="button-color">{{buttonText}}</button>
</template>


<style>
.button-color{
    background-color: v-bind(yourColor);
}
</style>