<template>
  <v-container>
    <v-row>
      <v-col v-for="destination in filteredDestinations" :key="destination.Ville" cols="12" sm="6" md="4" lg="3">
        <v-card class="destination-card">
          <v-img :src="destination.url_image" height="250px" cover>
            <div class="overlay">
              <div class="destination-info">
                <h3>{{ destination.Ville }}</h3>
                <p>{{ destination.Pays }}, {{ destination.Continent }}</p>
              </div>
            </div>
          </v-img>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { ref, computed, onMounted } from "vue";
import supabase from "../supabase"; // Importer Supabase

export default {
  name: "CardDestinations",
  props: {
    filterType: String, // Peut être un continent ou "coupDeCoeur"
  },
  setup(props) {
    const destinations = ref([]);

    // Récupérer les données depuis Supabase
    const fetchDestinations = async () => {
      const { data, error } = await supabase.from("Destinations").select("*");
      if (error) {
        console.error("Erreur lors de la récupération des destinations :", error);
      } else {
        destinations.value = data;
      }
    };

    // Filtrer les destinations selon filterType
    const filteredDestinations = computed(() => {
      if (props.filterType === "coupDeCoeur") {
        return destinations.value.filter(dest => dest.coupDeCoeur === true);
      } else {
        return destinations.value.filter(dest => dest.Continent === props.filterType);
      }
    });

    onMounted(fetchDestinations);

    return { filteredDestinations };
  }
};
</script>

<style scoped>
.destination-card {
  position: relative;
  overflow: hidden;
}

.overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5); /* Fond foncé semi-transparent */
  padding: 10px;
  color: white;
  text-align: center;
}

.destination-info h3 {
  margin: 0;
  font-size: 1.2rem;
}

.destination-info p {
  margin: 5px 0 0;
  font-size: 0.9rem;
}
</style>