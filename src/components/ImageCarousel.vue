<template> 
  <v-app>
    <v-container fluid class="carousel-container">
      <v-carousel
        cycle
        height="100vh"
        hide-delimiters
        show-arrows="hover"
      >
        <v-carousel-item 
          src="/reveamericain.jpg" 
          cover
          @click="goToDestinations"
        >
          <div class="overlay">
            <h2>L'Amérique ?</h2>
            <p>Parfait pour vivre le rêve américain</p>
          </div>
        </v-carousel-item>

        <v-carousel-item 
          src="/corail.jpg" 
          cover
          @click="goToDestinations"
        >
          <div class="overlay">
            <h2>L'Océanie ?</h2>
            <p>Un havre de paix avec ses plages paradisiaques, ses récifs coralliens et sa nature préservée.</p>
          </div>
        </v-carousel-item>

        <v-carousel-item 
          src="/france.jpg" 
          cover
          @click="goToDestinations"
        >
          <div class="overlay">
            <h2>L'Europe ?</h2>
            <p>Il vous reste encore plein d'endroits emblématiques à découvrir.</p>
          </div>
        </v-carousel-item>

        <v-carousel-item 
          src="/afrique2.jpg" 
          cover
          @click="goToDestinations"
        >
          <div class="overlay">
            <h2>L'Afrique ?</h2>
            <p>Pour découvrir des cultures uniques.</p>
          </div>
        </v-carousel-item>

        <v-carousel-item 
          src="/asie.jpg" 
          cover
          @click="goToDestinations"
        >
          <div class="overlay">
            <h2>L'Asie ?</h2>
            <p>Pour vous en mettre plein les yeux.</p>
          </div>
        </v-carousel-item>
      </v-carousel>
    </v-container>
  </v-app>
</template>  

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();
const goToDestinations = () => {
  router.push("/Destinations");
};
</script>

<style scoped>
.v-carousel {
  padding: 0 !important;
  margin: 0 !important;
  max-width: 100%;
  overflow: hidden;
}

/* Effet au survol */
.v-carousel-item {
  cursor: pointer;
  transition: transform 0.3s ease-in-out;
}

.v-carousel-item:hover {
  transform: scale(1.05);
}

/* Effet de surlignage du texte */
.overlay {
  position: absolute;
  bottom: 50%;
  left: 50%;
  transform: translate(-50%, 50%);
  text-align: center;
  color: white;
  border-radius: 5px;
  transition: background 0.3s ease-in-out;
  padding: 10px;
  background: rgba(0, 0, 0, 0.6);
}

.v-carousel-item:hover .overlay {
  background: rgba(0, 0, 0, 0.8);
}
</style>
