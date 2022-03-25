<script setup>
import { ref,computed } from 'vue'
const unKnownImg = ref('image/hangman-10.png')
computed(()=> {
  unKnownImg = `image/hangman-${count.value}.png`
  return unKnownImg;
}) 
const count = ref(10)
const fnClick = () => {
  if(count.value == 0){
    count.value=10
  }else{
    count.value--
  }
}

//destructive-objectText
const myData = { dataId: 123, dataName: 'studentProfiles' }
const { dataName } = myData
console.log(dataName)
const { dataId } = myData
console.log(dataId)
const { dataIds } = myData
console.log(dataIds)
//----------------------------

</script>

<template>
  <div>
    <h2>My Dynamic image</h2>
    <img :src="`image/hangman-${count}.png`" width="250">
    <button @click="fnClick">click</button>
    <hr/>
    <div>
      <router-link :to="{ name: 'Home' }">Home</router-link> | 
      <router-link :to="{name:'MyPortfolio'}">My Portfolio</router-link>
    </div>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<style>
a {
  color: aqua;
}
.router-link-active {
  color: orange;
}
</style>
