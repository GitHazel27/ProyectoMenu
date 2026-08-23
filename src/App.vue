<script setup lang="ts">
import { ref } from 'vue'
import HelloWorld from './components/HelloWorld.vue'
import HeaderComponent from './components/HeaderComponent.vue';

const  myId="coffe"
let myCondition=false
let condition2=false
const movies=["Lord of the Rings", "Star Wars", "Dune", "Batman"]
</script>

<template>
  <HeaderComponent></HeaderComponent>
  <h1 class="title" :class="myCondition ? 'highlight':'red'">Hola a todos, soy Haz</h1>
  <HelloWorld />
</template>

<style scoped>

.title{
  color:blueviolet
}

.highlight{
  color:antiquewhite
}

.red{
  color:red
}
</style>