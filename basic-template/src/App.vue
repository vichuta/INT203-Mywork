<script setup>
import SyntaxVtext from './components/syntax/1-v-text.vue'
import SyntaxVbine from './components/syntax/2-v-bine.vue'
import SyntaxVhtml from './components/syntax/3-v-html.vue'
import SyntaxVshow from './components/syntax/4-v-show.vue'
import SyntaxVif_else from './components/syntax/5-v-if-else.vue'
import SyntaxVfor from './components/syntax/6-v-for.vue'
import SyntaxVon from './components/syntax/7-v-on.vue'
import SyntaxVmodel from './components/syntax/8-v-model.vue'

import Reactive from './components/syntax/9-Reactive_varible.vue'
import calTriangle from './components/syntax/10-compute-cal-Triangle.vue'
import StyleClassSyntax from './App-style_class-syntax.vue'

import solPractice1 from './components/practices/App-solPractice1.vue'
import myPractice1 from './components/practices/App-myPractices1.vue'
import myPractice2 from './components/practices/App-myPractices2.vue'
import myTestPart1 from './components/myTestPart1.vue'
import myTestPart2 from './components/myTestPart2.vue'

import myExamMid from './components/exam/myExamMid.vue'
import solExamMid from './components/exam/solExamMid.vue'
</script>
 
<template>
<h1>INT203 - Client Web II</h1>
<div>
    <!-- <h2>Part My answer Exam midterm</h2>
    <myExamMid/> -->
    <hr/>
    <h2>Part Your solution Exam midterm</h2>
    <solExamMid/>
</div>

<hr/>
    <h2>ลองฝึกโจทย์ทำเอง</h2>
    <myTestPart2/> <hr/>
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