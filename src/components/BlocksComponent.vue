<template>
  <v-container fluid class="blocks-container">
    <v-row class="blocks-row" justify="center" no-gutters>
      <v-col cols="12" sm="4">
        <v-card class="block" @click="goToPage('../categories/Insolite')" flat>
          <div class="block-content" style="background-image: url('https://i.pinimg.com/474x/85/ef/76/85ef76f39b52f1f592398644ea58acbe.jpg');">
            <div class="overlay">
              <v-card-title class="text">À la recherche de l'insolite ?</v-card-title>
            </div>
          </div>
        </v-card>
      </v-col>

      <v-col cols="12" sm="4">
        <v-card class="block" @click="goToPage('../categories/RoadTrip')" flat>
          <div class="block-content" style="background-image: url('https://i.pinimg.com/474x/ba/ca/8b/baca8bc24ac5bef7dc31bbda545113ad.jpg');">
            <div class="overlay">
              <v-card-title class="text">Prêt pour l'aventure ?</v-card-title>
            </div>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const goToPage = (page) => {
  router.push(page)
}
</script>

<style scoped>
/* Conteneur principal */
.blocks-container {
  padding: 50px 5vw;
  width: 100vw;
}

.blocks-row {
  display: flex;
  justify-content: center;
  flex-wrap: nowrap; /* Empêche les blocs de se mettre en colonne */
  gap: 20px;
}

/* Style des blocs */
.block {
  cursor: pointer;
  border-radius: 10px;
  transition: transform 0.3s ease;
  overflow: hidden;
  width: 100%; /* Assure que les blocs occupent bien l'espace */
}

.block:hover {
  transform: scale(1.05);
}

/* Fond d'image */
.block-content {
  height: 400px;
  width: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  border-radius: 10px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
}

/* Overlay sombre */
.overlay {
  width: 100%;
  background: rgba(0, 0, 0, 0.5);
  padding: 10px;
  text-align: center;
}

/* Texte */
.text {
  font-size: 1.2rem;
  font-weight: bold;
  color: white;
}
</style>
