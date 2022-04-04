<script setup>
const props = defineProps({
    arrayList:{
        typr:Object,
        require: true
    }
})
console.log(props.arrayList)
</script>
 
<template>
<div class="grid-container">

    <div class="grid-item">
    <h3>Practice2 : show List from using components </h3>
      <img src="../assets/questions/Practices2-component.PNG" >
    </div>

    <div class="grid-item">
    <b>My Answer</b>
    <br/>
    <ul>
        <li v-for="item in arrayList">
            <b>Git Repo : </b> {{item.gitRpo}}
            <b>Project Title : </b>{{item.title}}
        </li>
    </ul>
    </div>
</div>
</template>
 
<style>

</style>