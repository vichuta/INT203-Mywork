<script setup>
defineEmits(['confirm'])
</script>
 
<template>
<div class="grid-container">

    <div class="grid-item">
    <h3>Practice3 : show List from using components </h3>
      <img src="../assets/questions/Practices3-component.PNG">
    </div>

    <div class="grid-item">
    <b>My Answer</b>
    <br/>

    <button @click="$emit('confirm','USER_CONFIRM')">Confirm</button>
    </div>
</div>
</template>
 
<style>

</style>