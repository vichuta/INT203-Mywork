<script setup>
import { ref, computed } from 'vue';
const inputText = ref("")
</script>
 
<template>
    <div>
        <label>New Note:</label>
        <input type="text" v-model="inputText">
        <button type="submit">Add Note</button>
    </div>
    <ul>
        <li></li>
    </ul>
</template>
 
<style>

</style>