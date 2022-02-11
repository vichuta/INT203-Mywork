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
        <h5>Text</h5>
        suggestion
        <textarea v-model="suggestion" placeholder="type your suggestion here" 
        cols="30" rows="10" >
        </textarea>
        <p>{{suggestion}}</p>
    </div>
    <!-- ใช้ v-model ผูก กับ radio >> แสดงค่าตัวแปรที่เลือก -->
    <div>
        <h5>Radio</h5>
        <input type="radio" value="RED" v-model="favorColor"/>
        <label>Red</label>
        <input type="radio" value="GREEN" v-model="favorColor"/>
        <label>Green</label>
        <p>{{favorColor}}</p>
    </div>

    <!-- ใช้ v-model ผูก กับ checkbox >> แสดงค่า true false ว่าเลือกหรือไม่  -->
    <div>
        <h5>Single Checkbox</h5>
        <input type="checkbox" v-model="agree"/>
        <label>I agree</label>
        <p>{{agree}}</p>
    </div>

    <!-- ใช้ v-model ผูก กับ checkbox แบบเป็น group >> แสดงค่า true false ว่าเลือกหรือไม่  -->
    <div>
        <h5>Multiple Checkbox</h5>
        <input type="checkbox" value="FRONTEND" v-model="jobs"/>
        <label>frontend</label>
        <input type="checkbox" value="BACKEND" v-model="jobs"/>
        <label>backend</label>
        <input type="checkbox" value="DEVOPS" v-model="jobs"/>
        <label>devops</label>
        <p>{{jobs}}</p>
    </div>

    <div>
        <h5>Selector</h5>
        <select v-model="food">
            <option value="PIZZA">Pizza</option>
            <option value="SOUP">Soup</option>
            <option value="PASTA">Pasta</option>
        </select>
        <p>{{food}}</p>
    </div>
    
    <div>
        <select v-model="activites" multiple>
            <option value="SLEEP">Sleep</option>
            <option value="READING BOOK">Reading Book</option>
            <option value="WATCH MOVIES">Watch Movies</option>
        </select>
        <p>{{activites}}</p>
    </div>
</div>

</template>
 
<style>

</style>