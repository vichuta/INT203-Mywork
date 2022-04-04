<script setup>
import IcBaselineStar from './icons/IcBaselineStar.vue' 
defineEmits(['addStar'])
defineProps({
  countStar:{
    type: Number,
    default:1
  }
})
</script>
 
<template>
<div class="grid-container">

    <div class="grid-item">
    <h3>Practice1 : add icon from <a href="https://icones.js.org/">https://icones.js.org/</a></h3>
      <img src="../assets/questions/Practices1-component.PNG" >
    </div>

    <div class="grid-item">
    <b>My Answer</b>
    <br/>
    <button @click="$emit('addStar')">+ Star</button>
    <br/>
    <span v-for=" i in countStar">
      <IcBaselineStar/>
    </span>
    </div>
</div>
</template>
 
<style>

</style>