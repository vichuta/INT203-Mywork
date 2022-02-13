<script setup>
import SyntaxVtext from './components/1-v-text.vue'
import SyntaxVbine from './components/2-v-bine.vue'
import SyntaxVhtml from './components/3-v-html.vue'
import SyntaxVshow from './components/4-v-show.vue'
import SyntaxVif_else from './components/5-v-if-else.vue'
import SyntaxVfor from './components/6-v-for.vue'
import SyntaxVon from './components/7-v-no.vue'
import SyntaxVmodel from './components/8-v-model.vue'

import Reactive from './components/9-Reactive_varible.vue'
import calTriangle from './components/10-compute-cal-Triangle.vue'
import StyleClassSyntax from './App-style_class-syntax.vue'

import solPractice1 from './App-solPractice1.vue'
import myPractice1 from './App-myPractices1.vue'
import myPractice2 from './App-myPractices2.vue'
import myTestPart1 from './App-myTestPart1.vue'
</script>
 
<template>
<h1>INT203 - Client Web II</h1>
<hr/>
<myTestPart1/>
<hr/>
<div>
    <h2>Syntax v</h2>
    <SyntaxVtext/>
    <SyntaxVbine/>
    <SyntaxVhtml/>
    <SyntaxVshow/>
    <SyntaxVif_else/>
    <SyntaxVfor/>
    <SyntaxVon/>
    <SyntaxVmodel/>
</div>
<hr/>
<div>
    <h2>Reactive varible</h2>
    <Reactive/>
    <calTriangle/>
<hr/>
    <h2>Style & Class syntax</h2>
    <StyleClassSyntax/>
</div>
<hr/>
<div>
    <h2>แบบฝึกหัด (โจทย์ที่อาจารย์คิดให้)</h2>
    <solPractice1/>     <hr/>
    <myPractice2/>      <hr/>
    
</div>

</template>
 
<style scoped>
body { font-family:sans-serif}
p,li { font-size: small;}
h5 { margin-bottom: 5px;}
</style>