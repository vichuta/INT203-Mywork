<script setup>
defineEmits(['updateMe'])
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
<!-- for updateMe1, 2 -->
  <button class="button-color1" @click="$emit('updateMe', false, 404, 'FAIL')">
    {{ buttonName }}
  </button>

<!-- for updateMe3 -->  
  <button class="button-color2" @click="$emit('updateMe', [false, 404, 'FAIL'])">
    {{ buttonName }}
  </button>

<!-- for updateMe4,5 -->
  <button
    class="button-color3"
    @click="
      $emit('updateMe', { status: false, statusCode: 404, result: 'FAIL' })">
    {{ buttonName }}
  </button>
</template>

<style scoped>
.button-color1 {
  background-color: rgb(255, 143, 143);
}
.button-color2 {
  background-color: rgb(255, 197, 143);
}
.button-color3 {
  background-color: rgb(255, 248, 145);
}
</style>