<script setup>
defineEmits(['deleteNote','editNote'])
defineProps({
    noteList:{
        typr: Array,
        require: true
    }
})
</script>
 
<template>
<div>
    <h2>Note List</h2>
    <ul>
        <li v-for="(note, index) in noteList" :key="index">
            note id:{{note.id}}, note detail: {{note.noteDetail}}
            <button @click="$emit('editNote',note)">Edit</button>
            <button @click="$emit('deleteNote',note.id)">Delete</button>
        </li>
    </ul>
</div>
</template>
 
<style>

</style>