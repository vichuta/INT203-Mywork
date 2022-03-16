<script setup>
defineEmits(['clickMe'])
const prop = defineProps({
  buttonName: {
    type: String,
    // require: true
    default: 'OK'
  }
})
// console.log(prop.buttonName)
</script>

<template>
<!-- <button class="button-color" @click="$emit('clickMe', $event)"> -->
  <button class="button-color" @click="$emit('clickMe', 200)">
    {{ buttonName }}
  </button>
</template>

<style scoped>
.button-color {
  background-color: aqua;
}
</style>