<script setup>
import {ref, onBeforeMount} from 'vue'

import NoteList from './components/NoteList.vue'
import CreateEditNote from './components/CreateEditNote.vue';
const notes = ref([])   //ตัวแปรนี้ ต้องสัมพันธ์กับ data ใน db.json

const getNotes = async () => {
  const res = await fetch(' http://localhost:5000/notes') //fetch แบบ get จะไม่ส่ง parameter
  if (res.status === 200) {
    notes.value = await res.json() //เอาข้อมูลที่ get มาจาก JSON มาแปลง js object array ในส่วนของ front-end
    console.log(notes.value)
  } else console.log('error, cannot get notes')
}

onBeforeMount( async () => { 
  await getNotes()
})

//DELETE
const removeNote = async (removeNoteId)=>{
  const res = await fetch(`http://localhost:5000/notes/${removeNoteId}`, 
    {method:'DELETE'}
  )
  if(res.status===200){
    //ทำให้ front-end update ตาม
    notes.value = notes.value.filter((note) => note.id !== removeNoteId)
    console.log('deleted successfully')
  }else {
    console.log('error, cannot delete')
  }
}

//CREATE
const createNewNote = async (newNote)=>{
  const res = await fetch(' http://localhost:5000/notes',{
    method:'POST',
    headers:{
      'content-type':'application/json'
    },
    body: JSON.stringify({noteDetail: newNote})
  })
  if(res.status===201){
    const addedNote = await res.json()  //เอาข้อมูลใหม่ที่เพิ่มเข้ามาโดย server มาแปลงเป็น js object 
    notes.value.push(addedNote)         //แล้ว push ตัวใหม่เข้าไปเก็บใน notes array เพื่อให้ front-end update ตาม
    console.log('created successfully')
  }else {
    console.log('error, cannot create')
  }
  editingNote.value = {}
} 

//EDITING MODE
const editingNote = ref({})
const toEditingMode = (editNote) =>{
  editingNote.value = editNote
  console.log(editingNote.value)
}

//UPDATE
const modifyNote = async (replacingNote)=>{
  const res = await fetch(`http://localhost:5000/notes/${replacingNote.id}`, 
    {
      method:'PUT',
      headers:{
        'content-type':'application/json'
      },
      body: JSON.stringify({
        noteDetail: replacingNote.noteDetail
      })
    })
  if(res.status===200){
    //ทำให้ front-end update ตาม
    const replacedNote = await res.json()
    notes.value = notes.value.map((note)=>
      note.id === replacedNote.id ? {...note, noteDetail: replacedNote.noteDetail} : note
    )
    console.log('edited successfully')
  }else {
    console.log('error, cannot edit')
  }
  editingNote.value = {}
}
</script>


<template>
<div>
  <CreateEditNote :currentNote="editingNote"
    @createNote="createNewNote" 
    @updateNote="modifyNote"/>
  <NoteList :noteList="notes" 
    @deleteNote="removeNote" 
    @editNote="toEditingMode"
  />
  
</div>
</template>
 

<style>

</style>
