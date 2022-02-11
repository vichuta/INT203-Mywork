<script setup>
import SyntaxVtext from './components/1-v-text.vue'
import SyntaxVbine from './components/2-v-bine.vue'
import SyntaxVhtml from './components/3-v-html.vue'
import SyntaxVshow from './components/4-v-show.vue'
import SyntaxVif_else from './components/5-v-if-else.vue'
import SyntaxVfor from './components/6-v-for.vue'
import SyntaxVmodel from './components/8-v-model.vue'

import Reactive from './App-Reactive_varible.vue'
</script>
 
<template>
<h1>INT203 - Client Web II</h1>
<div>
    <h2>Syntax v</h2>
    <SyntaxVtext/>
    <SyntaxVbine/>
    <SyntaxVhtml/>
    <SyntaxVshow/>
    <SyntaxVif_else/>
    <SyntaxVfor/>
    <SyntaxVmodel/>
</div>
<hr/>
<div>
    <h2>Reactive varible</h2>
    <Reactive/>
</div>
</template>
 
<style>
body { font-family:sans-serif}
p,li { font-size: small;}
</style>