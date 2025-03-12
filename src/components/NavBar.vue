<template>
  <nav>
    <div class="nav-container">
      <!-- Nom du site -->
      <h1 class="site-title">Site de Nono</h1>

      <ul>
        <li><router-link to="/">Accueil</router-link></li>
        <li class="dropdown" @mouseover="showDropdown = true" @mouseleave="showDropdown = false">
          <router-link to="/categories">Catégories</router-link>
          <ul v-if="showDropdown" class="dropdown-menu">
            <li><router-link to="/categories/we-break">WE Break</router-link></li>
            <li><router-link to="/categories/road-trip">RoadTrip</router-link></li>
            <li><router-link to="/categories/insolite">Voyages insolites</router-link></li>
          </ul>
        </li>
        <li><router-link to="/destinations">Destinations</router-link></li>
        <li><router-link to="/bon-plans">Bons Plans</router-link></li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { ref } from "vue";

const showDropdown = ref(false);
</script>

<style scoped>
/* Style global de la barre de navigation */
nav {
  width: 100%;
  background-color: #314633; /* Couleur vert */
  position: fixed;
  top: 0;
  left: 0;
  padding: 5px 0;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  z-index: 10;
}

.nav-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
}

.site-title {
  color: white;
  font-size: 20px;
  font-weight: bold;
  margin: 0;
}

ul {
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
  gap: 20px;
}

li {
  color: white;
}

a {
  text-decoration: none;
  color: white;
  padding: 10px;
  display: block;
}

a:hover {
  text-decoration: underline;
}

/* Menu déroulant */
.dropdown {
  position: relative;
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 50%;
  background-color: #314633;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  padding: 5px 0;
  border-radius: 5px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
  z-index: 1000;
}

.dropdown-menu li {
  padding: 8px 16px;
  white-space: nowrap;
}

.dropdown-menu li:hover {
  background-color: #314633; /* Un peu plus foncé pour l'effet hover */
}
</style>
