<script setup lang="ts">
    import { alumno, profesor } from '../constants/people'
</script>

<template>
<div>
    <h3>{{ alumno.lastName }}</h3>
        <h4>El profesor es: {{  profesor.lastName  }}</h4>
</div>
</template>

<style scoped>
</style>