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
<h3>Style syntax : เขียนได้ 2 แบบ</h3>
    
    <h4>1) object syntax</h4>
    <!-- 1) Object Syntax เขียนได้ 2 แบบย่อย
            1.1 => style="{color: _obj-neme_}"
            1.2 => style="{'font-size': _obj-neme_}"  
                           (ใช่ '' คร่อม property ที่เป็น เคบับ style = font-size, background-color) -->
    <p :style="{color:warningColor, 'font-style':italicText}">
        :style="{color:warningColor, 'font-style':italicText}"</p>
    <p :style="dangerText_obj">:style="dangerText_obj" / dangerText_obj={{dangerText_obj}}</p>
    
    <h4>2) array syntax</h4>
    <!-- 2) Array Syntax : 
            Ex. นำตัวแปรที่เก็บ property ของ style มาใส่ใน [] เก็บไว้เป็น array-->
    > successText = {{successText}}
    <p :style="[successText,decorText]">:style="[successText,decorText]"</p>
    <p :style="[successText,isError ? decorText : '' ]">
        :style="[successText,isError ? decorText : '' ]"
    </p>
    > dangerText_array = {{dangerText_array}}
    <p :style="[...dangerText_array]">:style="[...dangerText_array]"</p>

    <h5>Dynamic style</h5>
    > isError = {{isError}}
    <p :style="isError ?'color:red':'color:green'">:style="isError ?'color:red':'color:green'"</p>
    <!-- or ใช้เป็น binding varible ก็ได้ -->
    <p :style="isError ? errorText : successText">:style="isError ? errorText : successText" | errorText= {{errorText}} </p> 

<h3>Class syntax : เขียนได้ 2 แบบ</h3>
<!-- Class attribute : 1) Object Syntax, 2) Array Syntax-->
    <p class="success-text">This is a success text by class</p>
        
        <h4>1) object syntax</h4>
    <p :class="{'success-text': hasLength(), 'decor-text':isSucceed}">
        :class="{'success-text': hasLength(), 'decor-text':isSucceed}" </p>
        
        <h4>2) array syntax</h4>
    <p :class="['error-text', isSucceed ? 'decor-text':'']">
        :class="['error-text', isSucceed ? 'decor-text' : ' ' ]"</p>

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
