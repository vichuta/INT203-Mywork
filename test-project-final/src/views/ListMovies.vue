<script setup>
import { ref, onMounted } from 'vue'

//Show List Moives
const movies = ref([])
const getMoives = async () => {
    const res = await fetch('http://localhost:5000/movies')
    movies.value = await res.json()
}
onMounted(async () => {
    await getMoives()
    console.log(movies.value)
})
const getPathImg = (m) => {
  let pathImg = `./${m.poster}`
  return pathImg
}
</script>

<template>
<h2>List moives Page</h2>
<div class="grid-container">
      <div v-for="movie in movies" :key="movie.id" class="grid-item">
        <router-link :to="{ 
            name: 'EditRating', 
            params:{moiveId:movie.id}  //ส่ง parameter ผ่าน URL
            }">
            <img :src="getPathImg(movie)" width="200" height="250">
        </router-link>
        <br/>
        <b>{{movie.name}}</b>
        <br/>
        Rating : {{movie.rating}}
      </div>
</div>
</template>

<style scoped>
.grid-container {
  display: grid;
  grid-template-columns: auto auto auto;
  background-color: #2196F3;
  padding: 10px;
  column-gap: 20px;
  row-gap: 20px;
}
.grid-item {
  background-color: rgba(255, 255, 255, 0.8);
  padding: 20px;
  text-align: center;
 
}

</style>