<template>
  <v-container>
    <!-- Titre principal -->
    <h1 class="insolite-title">Destinations Insolites</h1>
    <p class="insolite-subtitle">
      À la recherche de l’insolite ? Découvre des destinations hors du commun et des expériences qui sortent de l’ordinaire !
    </p>

    <!-- Liste des destinations insolites -->
    <CardInsolite />
  </v-container>
</template>

<script>
import CardInsolite from "../components/CardInsolite.vue";

export default {
  components: {
    CardInsolite,
  },
};
</script>

<style scoped>
.insolite-title {
  text-align: center;
  font-size: 3rem;
  font-weight: bold;
  margin-top: 50px;
  color: white; 
}

.insolite-subtitle {
  text-align: center;
  font-size: 1.2rem;
  color: #c2a87d;
  margin-bottom: 40px;
}

</style>
