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
  <div class="modal-mask">
    <div class="modal-wrapper">
      <div class="modal-container">
        <div class="modal-header"><h3>{{thisMovie.name}}</h3></div>
        <div class="modal-body"><p>Descpition : {{thisMovie.description}}</p></div>
        <div class="modal-button">
          <button @click="closeModal">Close</button>
        </div>
      </div>
    </div>
  </div>
<div>
<!-- 
<center>
<img :src="getPathImg(thisMovie.poster)" width="200" height="250">
<h3>{{thisMovie.name}}</h3>

<p>Descpition : {{thisMovie.description}}</p>
<p>Rating : {{thisMovie.rating}} <button>edit</button> </p> 
</center>
<button @click="goBack">Back</button>

<button>delete</button> -->
</div>
</template>

<style scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}
.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}
.modal-container {
  width: 300px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
}
.modal-header h3 {
  margin-top: 0;
  color: red;
}
.modal-body {
  margin: 20px 0;
}
.modal-button {
  display: flex;
  justify-content: end;
}
</style>

<script setup>

</script>





