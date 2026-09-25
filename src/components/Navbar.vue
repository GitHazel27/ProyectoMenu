<script setup lang="ts">
import { ref } from 'vue'

const showMenuCont = ref(false)
const showMenu = ref(false)
const showMenuC = ref(false)
const showMenuR = ref(false)

</script>

<template>
    <nav class="navbar">
        <div class="logo">
            Mi Sitio: Wiki
        </div>
        <RouterLink to="/">Inicio</RouterLink>

        <div class="dropdown"
        @mouseenter="showMenuCont=true"
        @mouseleave="showMenuCont=false">
            <span class="menu-title">Contenido</span>
            <div v-if="showMenuCont" class="dropdown-content">
                <RouterLink to="/constants">Constants</RouterLink>
                <RouterLink to="/objectLiterals">Object</RouterLink>
                <RouterLink to="/headerComponent">HeaderComponent</RouterLink>
                <RouterLink to="/usovbind">Uso de v-bind</RouterLink>
                <RouterLink to="/importacion">Importación y exportación</RouterLink>
            </div>
        </div>
        <div class="dropdown"
        @mouseenter="showMenu=true"
        @mouseleave="showMenu=false">
            <span class="menu-title">Arreglos</span>
            <div v-if="showMenu" class="dropdown-content">
                <RouterLink to="/arreglomovie">Recorrido de movies</RouterLink>
                <RouterLink to="/arreglosimple">Recorrido</RouterLink>
            </div>
        </div>
        <div class="dropdown"
        @mouseenter="showMenuC=true"
        @mouseleave="showMenuC=false">
            <span class="menu-title">Componentes</span>
            <div v-if="showMenuC" class="dropdown-content">
                 <RouterLink to="/arraycomponent">Comp. tipo Array</RouterLink>
                <RouterLink to="/tipoPadre">Padre</RouterLink>
            </div>
        </div>
        <div class="dropdown"
        @mouseenter="showMenuR=true"
        @mouseleave="showMenuR=false">
            <span class="menu-title">Rutas</span>
            <div v-if="showMenuR" class="dropdown-content">
              <RouterLink to="/example">Example</RouterLink> 
              <RouterLink to="/about">About</RouterLink>
            </div>
        </div>
    </nav>
</template>

<style scoped>
.navbar {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 1.5rem;
  background: linear-gradient(50deg, #ffd1e3, #111827);
  color: #f9fafb;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  font-family: Arial, sans-serif;
}

.logo {
  font-weight: 700;
  font-size: 1.2rem;
  margin-right: auto;
}

.navbar :deep(a),
.menu-title {
  color: #e5e7eb;
  text-decoration: none;
  font-weight: 600;
  cursor: pointer;
  transition: color 0.2s ease;
}

.navbar :deep(a:hover),
.menu-title:hover {
  color: #ffd1e3;
}

.dropdown {
  position: relative;
}

.menu-title {
  padding: 0.5rem 0.8rem;
  border-radius: 8px;
  display: inline-block;
}

.dropdown-content {
  position: absolute;
  top: 100%;
  left: 0;
  display: flex;
  flex-direction: column;
  min-width: 220px;
  background: #111827;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 10px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.25);
  padding: 0.5rem;
  z-index: 10;
}

.dropdown-content :deep(a) {
  padding: 0.6rem 0.8rem;
  border-radius: 8px;
}

.dropdown-content :deep(a:hover) {
  background: rgba(96, 165, 250, 0.15);
}
</style>