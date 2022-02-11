<!-- Reactivity Variable -->
<script setup>
import { ref, reactive, toRef, toRefs } from 'vue'
console.clear()
//----------Part 1 : ใช้ ref() สร้างตัวแปร reactive -----------
    //1.1 ^import ref function จาก Vue
    //1.2 ref funciton : ทำให้ตัวแปรเป็น reactive varible (ref Object)
    const counter = ref(1)

    //1.3 **ตัวแปรต้องมี .value : เพื่อ get value ของ varible ที่เป็น Object
    setInterval(() => console.log(++counter.value), 5000)

    //--------- ref Object & ref Array -------------
    // ref Object
    const students = ref({ studentId: 1234, studentName: 'Ben' })
    console.log(students.value) //> Target : Object
    console.log(students.value.studentId) //> 1234

    // ref Array
    const ids = ref([111, 121, 131, 142])
    console.log(ids.value) //> Target : Array
    console.log(ids.value[1]) //> 121

    //ลองใช้เรียก array fn ผ่าน ref array
    function filterId(id) {
        return id > 120
    }
    const idsMoreThan120 = ids.value.filter((id) => id > 120)
    console.log(idsMoreThan120) //> [121, 131, 142]

//----------Part 2 : ใช้ reactive() สร้างตัวแปร reactive ----------
    //2.1 ^import reactive function จาก Vue
    //2.2 reactive function : ใช้สร้างตัวแปร reactive ที่เป็น object/array เท่านั้น!
    /// X ใช้กับตัวแปร primitive type ไม่ได้!!
    const numbers = reactive({ numId: 1, numColor: 'red' })
    console.log(numbers)
    console.log(numbers.numId) //1     (ไม่ต้องใช้ .value เหมือน ref)
    console.log(numbers.numColor) //red

//----------Part 3 : ใช้ toRef(), toRefs() >> แปลง reactive() เป็น ref() ----------
    //3.1 ^import {ref, reactive, toRef, toRefs} จาก Vue
    const product = reactive({
        productId: 1001,
        productName: 'Pepsi',
        productPrice: 20,
        productDesc: 'fresh drink'
    })

    const price = toRef(product, 'productPrice')
    console.log(price.value)    //>20
    price.value += 10           
    console.log(product)        //>Target : Object

    const { productId, productDesc } = toRefs(product)
    console.log(productId.value)    //1001
    console.log(productDesc.value)  //freash drink

//----------Part 4: ใช้ compute() fn คำนวณอัตโนมัติ ----------
</script>

<template>
    <h3>Part 1 - reactive by ref() function</h3>
    <p>Counter : {{ counter }}</p>

    <h3>Part 2 - reactive by reactive() function</h3>
    <p>Number Object : {{ numbers }}</p>
    <p>Number : {{ numbers.numId }}, Color : {{ numbers.numColor }}</p>

    <h3>Part 3 - change reactive to ref by toRef() & toRefs()</h3>
    
</template>

<style>
</style>
