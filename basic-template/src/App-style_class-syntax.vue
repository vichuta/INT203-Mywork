<script setup>

const warningColor = 'orange'
const italicText = 'italic'
const isError = true 
const successText = 'color:green'
const errorText = 'color:orange'
const decorText = 'text-decoration:underline'

const dangerText_obj = {color:'red', 'font-style':'italic'}
const dangerText_array = ['color:red', 'font-style:italic']
//^varible ที่ใช้ใน style syntax

// varible ที่ใช้ใน class syntax
const isSucceed = true

const msg = ''
const hasLength = () => msg.length !==0
console.log(hasLength())
</script>
 
<template>
<h2>Style syntax</h2>
<!-- Style attribute : 1) Object Syntax, 2) Array Syntax-->
    <p style="color:green; font-style:italic;">This is an example text</p>
    
    <h3>object syntax</h3>
    <!-- 1) Object Syntax เขียนได้ 2 แบบย่อย
            1.1 => style="{color: _obj-neme_}"
            1.2 => style="{'font-size': _obj-neme_}"  
                           (ใช่ '' คร่อม property ที่เป็น เคบับ style = font-size, background-color) -->
    <p :style="{color:warningColor, 'font-style':italicText}">
        this is style with object syntax</p>
    <p :style="dangerText_obj">Danger text object is {{dangerText_obj}}</p>
    
    <h3>array syntax</h3>
    <!-- 2) Array Syntax : 
            Ex. นำตัวแปรที่เก็บ property ของ style มาใส่ใน [] เก็บไว้เป็น array-->
    <p :style="[successText,decorText]">This it style with array syntax</p>
    <p :style="[successText,isError ? decorText : '' ]">
        This it style with array syntax
    </p>
    <p :style="[...dangerText_array]">Danger text array is {{dangerText_array}}</p>

<!--Dynamic style -->
    <p :style="isError ?'color:red':'color:green'">error message</p>
    <!-- or ใช้เป็น binding varible ก็ได้ -->
    <p :style="isError ? errorText : successText">error message</p> 


<hr>
<h2>Class syntax</h2>
<!-- Class attribute : 1) Object Syntax, 2) Array Syntax-->
    <p class="success-text">This is a success text by class</p>
        
        <h3>object syntax</h3>
    <!-- 1) Object Syntax -->
    <p :class="{'success-text': hasLength(), 'decor-text':isSucceed}">
        this is class binding (object syntax)</p>
        
        <h3>array syntax</h3>
    <!-- 1) array Syntax -->
    <p :class="['error-text', isSucceed ? 'decor-text':'']">
        this is class binding (array syntax)</p>

</template>
 
<style>
.success-text{
    color: green;
}
.error-text{
    color:red;
}
.decor-text{
    text-decoration: underline;
}
</style>
