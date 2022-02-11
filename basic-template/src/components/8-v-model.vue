<!-- v-model -->
<script setup>
console.clear()
import {ref} from 'vue'
const suggestion = ref('')
const favorColor = ref('')
const agree = ref('')
const jobs =ref('')
const food = ref('')
const activites = ref('')
</script>
 
<template>
<div>
<h3>v-model : ใช้ส่ง value ของ tag html ไปเก็บไว้ใน ตัวแปร js</h3>
    <div>
        <h5>1) Text</h5>
        <p> > suggestion = {{suggestion}}</p>
        <textarea v-model="suggestion" placeholder="type your suggestion"/>
    </div>
    <!-- ใช้ v-model ผูก กับ radio >> แสดงค่าตัวแปรที่เลือก -->
    <div>
        <h5>2) Radio</h5>
        <p> > favorColor = {{favorColor}}</p>
        <input type="radio" value="RED" v-model="favorColor"/>
        <label>Red</label>
        <input type="radio" value="GREEN" v-model="favorColor"/>
        <label>Green</label>
    </div>

    <!-- ใช้ v-model ผูก กับ checkbox >> แสดงค่า true false ว่าเลือกหรือไม่  -->
    <div>
        <h5>3) Single Checkbox</h5>
        <p> > Agree = {{agree}}</p>
        <input type="checkbox" v-model="agree"/>
        <label>I agree</label>
        
    </div>

    <!-- ใช้ v-model ผูก กับ checkbox แบบเป็น group >> แสดงค่า true false ว่าเลือกหรือไม่  -->
    <div>
        <h5>4) Multiple Checkbox</h5>
        <p> > jobs = {{jobs}}</p>
        <input type="checkbox" value="FRONTEND" v-model="jobs"/>
        <label>frontend</label>
        <input type="checkbox" value="BACKEND" v-model="jobs"/>
        <label>backend</label>
        <input type="checkbox" value="DEVOPS" v-model="jobs"/>
        <label>devops</label>
    </div>

    <div>
        <h5>5) Select</h5>
        <p> > food = {{food}}</p>
        <select v-model="food">
            <option value="PIZZA">Pizza</option>
            <option value="SOUP">Soup</option>
            <option value="PASTA">Pasta</option>
        </select>

        <p> > activites = {{activites}}</p>
        <select v-model="activites" multiple>
            <option value="SLEEP">Sleep</option>
            <option value="READING BOOK">Reading Book</option>
            <option value="WATCH MOVIES">Watch Movies</option>
        </select>
    </div>
</div>

</template>
 
<style>

</style>