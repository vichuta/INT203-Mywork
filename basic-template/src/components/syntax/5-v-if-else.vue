<script setup>
const money=15000
</script>
 
<template>
<div>
<h3>v-if | v-else | v-else-if : ใช้ check เงื่อนไขในการ show </h3>
> money = {{money}}
<p>Deposit Amount: {{ money }}</p>
<p v-if="money < 10000">Interest: 0</p>
<p v-else-if="money <= 49999">Interest: {{ money * 0.1 }}</p>
<p v-else-if="money <= 99999">Interest: {{ money * 0.2 }}</p>
<p v-else>Interest: {{ money * 0.25 }}</p>
</div>
</template>
 
<style>

</style>