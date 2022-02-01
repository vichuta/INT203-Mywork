<script setup>
const myAccount = [
  { name: 'salary', amount: 10000 },
  { name: 'rent', amount: -2500 },
  { name: 'parking fee', amount: 0 },
  { name: 'rent', amount: -600 },
  { name: 'comission', amount: 5500 }
]
</script>

<template>
  <ul>
    <li v-for="account in myAccount">
      <p v-if="account.amount !== 0">
        <span>{{ account.name }}</span>
        <span :style=" account.amount > 0 ? 'background-color:green' : 'background-color:red'">
            {{ account.amount }}</span>
      </p>
    </li>
  </ul>
  <p>Net Total: {{myAccount.reduce((total,account)=>total+account.amount,0)}}</p>
</template>

<style></style>
