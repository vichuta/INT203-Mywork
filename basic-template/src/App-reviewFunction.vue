<!-- Review Function -->
<script setup>

//แบบที่ 1 : function Declaration
    function printMessage(){
        console.log('Hello, function declaration')
    }
    // execute-function 
    printMessage()

//แบบที่ 2 : function Expresssion 
    const showMessage = function(msg){
        console.log(`Hello, ${msg}`)
    }
    // excute-funciton
    showMessage('This is a function expression')

//แบบที่ 3 : Arrow function
    const showMessage2 = (msg) => console.log(`Hello, ${msg}`)
    showMessage2('Arrow function')

</script>
 
<template>

</template>
 
<style>

</style>