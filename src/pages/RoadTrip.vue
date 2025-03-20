<template>
  <v-container>
    <!-- Titre principal -->
    <h1 class="page-title">Prêt pour l'Aventure ?</h1>
    <p class="page-subtitle">
      Enfile ton sac à dos et découvre les plus beaux itinéraires à travers le monde !
    </p>

    <!-- Liste des Destinations -->
    <h2 class="section-title"> Road Trips Incontournables</h2>
    <div class="destinations">
      <div
        v-for="destination in destinations"
        :key="destination.id"
        class="destination-item"
        :style="{ backgroundImage: 'url(' + destination.url_image + ')' }"
      >
        <div class="destination-content">
          <h3>{{ destination.Ville }}, {{ destination.Pays }}</h3>
        </div>
      </div>
    </div>

    <!-- Checklist Interactive -->
    <h2 class="section-title"> Prépare ton Road Trip</h2>
    <p class="intro">
      Avant de partir à l'aventure, assure-toi d'avoir tout préparé ! Coche les éléments nécessaires.
    </p>
    <v-card class="checklist-card">
      <v-container>
        <v-row>
          <v-col v-for="(item, index) in checklist" :key="index" cols="12" sm="6">
            <v-checkbox
              v-model="checklist[index].checked"
              :label="item.text"
              color="white"
              hide-details
              dense
              class="checkbox-custom"
            ></v-checkbox>
          </v-col>
        </v-row>
      </v-container>
    </v-card>

    <!-- Quiz -->
    <h2 class="section-title"> Quel Road Trip est fait pour toi ?</h2>
    <p class="intro"> Réponds aux questions pour découvrir ta destination idéale !</p>
    <QuizComponent />
  </v-container>
</template>

<script>
import { ref, onMounted } from "vue";
import supabase from "../supabase";
import QuizComponent from "../components/QuizComponent.vue";

export default {
  name: "RoadTrip",
  components: {
    QuizComponent,
  },
  setup() {
    const destinations = ref([]);
    const checklist = ref([
      { text: "Passeport à jour", checked: false },
      { text: "Carte et GPS téléchargés", checked: false },
      { text: "Budget défini", checked: false },
      { text: "Sac de couchage", checked: false },
      { text: "Chargeur portable", checked: false },
      { text: "Trousse de secours", checked: false },
    ]);

    const fetchRoadTrips = async () => {
      const { data, error } = await supabase
        .from("Destinations")
        .select("*")
        .eq("categorie", "Road Trip");

      if (error) {
        console.error("Erreur de récupération des destinations :", error);
      } else {
        destinations.value = data;
      }
    };

    onMounted(fetchRoadTrips);

    return { destinations, checklist };
  },
};
</script>

<style scoped>
.page-title {
  text-align: center;
  font-size: 3.5em;
  font-weight: bold;
  margin-top: 50px;
  color: white;
}

.page-subtitle {
  text-align: center;
  font-size: 1.5rem;
  color: #c2a87d;
  margin-bottom: 40px;
}

.section-title {
  margin-top: 50px;
  font-size: 2rem;
  font-weight: bold;
  color: white;
  text-align: center;
  text-decoration: underline;
}

.intro {
  font-size: 1.3rem;
  margin-bottom: 20px;
  color: #c2a87d;
  text-align: center;
}

.destinations {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  margin-bottom: 40px;
}

.destination-item {
  position: relative;
  background-size: cover;
  background-position: center;
  height: 220px;
  border-radius: 15px;
  display: flex;
  align-items: flex-end;
  color: white;
  padding: 20px;
  transition: transform 0.3s ease-in-out;
}

.destination-item:hover {
  transform: scale(1.05);
}

.destination-content {
  background: rgba(0, 0, 0, 0.6);
  padding: 15px;
  border-radius: 8px;
  width: 100%;
  text-align: center;
}

.checklist-card {
  background: #303030;
  padding: 25px;
  border-radius: 12px;
  color: white;
  margin-top: 20px;
  background-color: rgba(255, 255, 255, 0.1);
  border: 2px solid rgba(255, 255, 255, 0.5);
}

.checkbox-custom input[type="checkbox"]:checked {
  background-color: white !important;
}
</style>
