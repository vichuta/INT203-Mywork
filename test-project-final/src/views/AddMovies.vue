<script setup>
import {ref,computed} from 'vue'

//CREATE
const createNewMovie = async (newMovie)=>{
  const res = await fetch(' http://localhost:5000/movies',{
    method:'POST',
    headers:{
      'content-type':'application/json'
    },
    body: JSON.stringify({
        poster:newMovie.newPoster,
        name:newMovie.newName,
        description:newMovie.newDescription,
        rating:newMovie.newRating
    })
  })
  if(res.status===201){    
    console.log('created successfully')
  }else {
    console.log('error, cannot create')
  }
  addMovie.value = {
    newPoster:"",
    newName:"",
    newDescription: "",
    newRating:""
  }
} 
const addMovie = ref(
    {newPoster:"", newName:"", newDescription: "", newRating:""}
)

</script>

<template>
<h2>Add New Movie Page</h2>


<label for="poster">Poster ::</label><br>
<input type="text" id="poster" v-model="addMovie.newPoster"><br>

<label for="nameMovie">Name movie ::</label><br>
<input type="text" id="nameMovie" v-model="addMovie.newName"><br>


<label for="desciption">Description ::</label><br>
<input type="text" id="desciption" v-model="addMovie.newDescription"><br>


<label for="rating">Rating ::</label><br>
<input type="number" id="rating" v-model="addMovie.newRating"><br>

<button @click="createNewMovie(addMovie)">Add Movie</button>

</template>

<style>
</style>