<script setup>
import { ref, computed } from 'vue';
const newNote=ref([])
const notes=ref([])
const imagePath = "../public/images/Practices2.png"
const addNote = ()=> {
    notes.value.push(newNote.value)
    return notes.value
}
const keywords = ref('')
const filterNotes = computed(()=>{
    return notes.value.filter( (note)=>note.toLowerCase().includes(keywords.value.toLocaleLowerCase()) )
})
//ลอง print parameter ที่รับมาจาก list notes
const colorMe = (myNote)=>{console.log(myNote)}
</script>
 
<template>
        <div v-show="notes.length > 0">
            <label>FilTer:</label>
            <input type="text" v-model="keywords">
        </div>
    <ul>
        <li v-for="note in filterNotes">
            {{note}} 
            <button @click="colorMe(note)">Color Me</button> 
            <!-- ลองใช้ @click ส่ง parameter ไปให้ function -->
        </li>
    </ul>
        <div>
            <label>New Note:</label>
            <input type="text" v-model="newNote">
            <button @click="addNote">Add Note</button>
        </div>
            <img :src="imagePath" style="width: 700px;" alt="" srcset="" />
</template>
 
<style>

</style>