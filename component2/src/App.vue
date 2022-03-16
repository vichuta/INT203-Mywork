<script setup>
import { ref, onBeforeMount, onMounted,onBeforeUpdate,onUpdated } from 'vue'
import HookFunction from './components/HookFunction.vue'

const num = ref(1)
onMounted(()=>{
    Number.value = 10
    alert(`on mounted: ${num.value}`)
})
onBeforeMount(()=>{
    alert(`on before mounted: ${num.value}`)
    num.value = 5
})
onBeforeUpdate(()=>{
    alert(`on before update: ${num.value}`)
})
onUpdated(()=>{
    alert(`on updated: ${num.value}`)
})

alert((`on created: ${num.value}`))
const isShow = ref(true)
const unShow = () => {isShow.value = false}

</script>
 
<template>
  <div>
        num: {{num}}
    <button @click="num = num+1">+</button>
    <div>
        <HookFunction :currentNum="num" v-if="isShow"/>
        <button @click="unShow">Not Show Current Num</button>
    </div>
  </div>
</template>
 
<style>

</style>