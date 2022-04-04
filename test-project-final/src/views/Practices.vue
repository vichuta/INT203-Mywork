<script setup>
import Practice1 from '../components/Practice1.vue'
import Practice2 from '../components/Practice2.vue'
import Practice3 from '../components/Practice3.vue'
import { ref } from 'vue';

//----- For Practices 1 -----
const count = ref(1)
const increaseCount = () => {count.value++}

//----- For Practices 2 -----
const projects = [
    {gitRpo: 'umaporn-sup/INT203class', title:'Bingo Game'},
    {gitRpo: 'students/Sec2_Group1', title:'Flash Card'},
    {gitRpo: 'umaporn-sup/Sec3_Group2', title:'Tie Tac Toe'},
]

//----- For Practices 3 -----
const currentStatus = ref('')
const showCurrentStatus = (status) => {
    currentStatus.value = status
}
</script>
 
<template>
    <h2>Practices</h2>
    <hr/>
    <Practice1 :countStar="count" @addStar="increaseCount"/>
    <Practice2 :arrayList="projects"/>
    (show on Practices.vue)Current status :: {{currentStatus}}
    <Practice3 @confirm="showCurrentStatus"/>
</template>
 
<style>
img{
  max-width: 100%;
  height: auto;
  width: auto\9;
}
.grid-container {
  display: grid;
  grid-template-columns: 50% 50%;
  background-color: #f9a1ff;
  padding: 10px;
  column-gap: 20px;
  row-gap: 20px;
}
.grid-item {
  background-color: rgba(255, 232, 247, 0.8);
  padding: 20px;
}
</style>