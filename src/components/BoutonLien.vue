<template>
    <v-btn 
      :href="lien" 
      target="_blank" 
      :color="couleur" 
      class="bouton-lien"
    >
      {{ texte }}
    </v-btn>
  </template>
  
  <script setup>
  defineProps({
    lien: String,   // URL du site
    texte: String,  // Texte affiché sur le bouton
    couleur: {      // Couleur du bouton
      type: String,
      default: "white", // Une couleur par défaut
    }
  });
  </script>
  
  <style scoped>
  .bouton-lien {
    font-weight: bold;
    transition: transform 0.2s ease-in-out;
    
  }
  .bouton-lien:hover {
    transform: scale(1.1); /* Agrandit légèrement au survol */
  }
  </style>
  