<script setup lang="ts">
    const movies=["Lord of the Rings","Star Wars", "Dune", "Batman"]
</script>

<template>
<div>
    <p v-for="movie in movies" :key="movie">
      {{ movie }}
    </p>
    <!-- Si queremos definir o controlar un index al arreglo establecido la definición del for quedaría de la siguiente manera  -->
     <div v-for="(movie, index) in movies" :key="movie">
      {{ index + 1 }} - {{ movie }}
     </div>
</div>
</template>

<style scoped>
</style>