<!-- ต้นทาง -->
<script setup>
import {ref} from 'vue'
import BaseButton from './components/BaseButton.vue';
const bText = ref('Hello')
const bColor = ref('#cccccc')
</script>


<template>
  <div>
    <div>
      Your Text: {{bText}}
      <input type="text" v-model="bText">
    </div>
    <div>
      Your Text: {{bColor}}
      <input type="color" v-model="bColor">
    </div>
    <BaseButton :yourText="bText" :yourColor="bColor"/>
  </div>
</template>


<style></style>
