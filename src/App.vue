
<script setup>
import { ref } from "vue";
import { RouterLink, RouterView } from "vue-router"; // Importer RouterView
import NavBar from "./components/NavBar.vue";
import Footer from "./components/Footer.vue"; 
import "leaflet/dist/leaflet.css";
</script>

<template>
  <div id="app">
    <NavBar />
    <router-view /> 
    <Footer /> <!-- Footer sur toutes les pages -->
  </div>
</template>

<script>
</script>

<style>

#app {
  background-color: #303030;
  min-height: 100vh;
  width: 100vw; /* pour que ça couvre toute la largeur */
  display: flex;
  flex-direction: column;
  margin : 0;
  max-width: 100vw; /* Limite la largeur à la largeur de la fenêtre */
  overflow-x: hidden; /* Empêche le débordement horizontal */
  font-family: 'Poiret One';
  color : white;
}

router-view {
  flex: 1; /* Prend tout l'espace disponible */
  margin-bottom :0;
}

h1 {
  text-align: center;
  margin-top: 200px;
}
footer {
  padding : 0; 
  width: 100%; /* Assure que le footer prend toute la largeur */
  margin-top: 50px; /* Pousse le footer en bas, s'il n'y a pas assez de contenu */
  position : relative;
} 
</style>


