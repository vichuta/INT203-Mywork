<script setup>
import {ref, onBeforeMount} from 'vue'
import {useRoute, useRouter} from 'vue-router'
const {params} = useRoute()

const thisMovie = ref({})
const getThisMoive = async () => {
    const res = await fetch(`http://localhost:5000/movies/${params.moiveId}`)
    thisMovie.value = await res.json()
    console.log(thisMovie.value)
}
const getPathImg = (m) => {
  let pathImg = `/${m}`
  return pathImg
}
onBeforeMount( async () => { 
  await getThisMoive()
})
const myRouter = useRouter()
const goBack = () => myRouter.go(-1)

</script>

<template>
<div>
<p>ID : {{this.$route.params.moiveId}}</p>
<center>
<img :src="getPathImg(thisMovie.poster)" width="200" height="250">
<h3>{{thisMovie.name}}</h3>

<p>Descpition : {{thisMovie.description}}</p>
<p>Rating : {{thisMovie.rating}} <button>edit</button> </p> 
</center>
<button @click="goBack">Back</button>

<button>delete</button>
</div>
</template>

<style>
</style>