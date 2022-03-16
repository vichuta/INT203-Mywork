<script setup>
import {ref} from 'vue'
//Practices 1
import IconFavorite from './components/icons/iconFavorite.vue';

//Practices 2
import Practices2 from './components/Practices2-3.vue'
const projects = [
    {gitRpo: 'umaporn-sup/INT203class', title:'Bingo Game'},
    {gitRpo: 'students/Sec2_Group1', title:'Flash Card'},
    {gitRpo: 'umaporn-sup/Sec3_Group2', title:'Tie Tac Toe'},
]
//Practices 3 (ต่อจาก 2)
const currentStatus = ref()
const updateStatus = (status) => {
    currentStatus.value=status
}
</script>
 
<template>
    <div>
        <IconFavorite/>
        <Practices2 :items="projects" 
                    @confirm="updateStatus"/>
        Current status :: {{currentStatus}}
    </div>
</template>
 
<style>

</style>