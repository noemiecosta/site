<template>
  <v-container>
    <h1 class="destinations-title">Explore les Destinations de Rêve</h1>
    <p class="destinations-subtitle">
      Des villes vibrantes aux paysages sauvages, trouve l’escapade parfaite à travers le monde !
    </p>

    <h2 class="section-title">💖 Nos Coups de Cœur</h2>
    <CardDestinations filterType="coupDeCoeur" />

    <h2 class="section-title">🌍 Europe</h2>
    <CardDestinations filterType="Europe" />

    <h2 class="section-title">🌎 Amérique</h2>
    <CardDestinations filterType="Amérique" />

    <h2 class="section-title">🌏 Asie</h2>
    <CardDestinations filterType="Asie" />

    <h2 class="section-title">🌍 Afrique</h2>
    <CardDestinations filterType="Afrique" />

    <h2 class="section-title">🌏 Océanie</h2>
    <CardDestinations filterType="Océanie" />
  </v-container>
</template>

<script>
import CardDestinations from "../components/CardDestinations.vue";

export default {
  components: {
    CardDestinations,
  },
};
</script>

<style scoped>
.destinations-title {
  text-align: center;
  font-weight: bold;
  font-size: 3em;
  margin: 50px 0 20px;
}

.destinations-subtitle {
  text-align: center;
  font-size: 1.4rem;
  color: white;
  margin-bottom: 20px;
}

.section-title {
  margin-top: 40px;
  font-size: 1.4rem;
  font-weight: bold;
  color: white;
  text-align: center;
  text-decoration: underline;
}
</style>
