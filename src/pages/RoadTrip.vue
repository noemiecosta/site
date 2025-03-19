<template>
  <v-container>
    <!-- Titre principal -->
    <h1 class="page-title">Prêt pour l'Aventure ?</h1>
    <p class="page-subtitle">Enfile ton sac à dos et découvre les plus beaux itinéraires à travers le monde !</p>

    <!-- Liste des Destinations -->
    <h2 class="section-title">🌍 Road Trips Incontournables</h2>
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
    <h2 class="section-title">📝 Prépare ton Road Trip</h2>
    <v-card class="checklist-card">
      <v-container>
        <v-row>
          <v-col v-for="(item, index) in checklist" :key="index" cols="12" sm="6">
            <v-checkbox v-model="checklist[index].checked" :label="item.text" color="primary"></v-checkbox>
          </v-col>
        </v-row>
      </v-container>
    </v-card>

    <!-- Mini-Quiz Road Trip -->
    <h2 class="section-title">🔎 Quel Road Trip est fait pour toi ?</h2>
    <v-card class="quiz-card">
      <v-container>
        <div v-for="(question, index) in quizQuestions" :key="index">
          <p class="quiz-question">{{ question.text }}</p>
          <v-radio-group v-model="userAnswers[index]" color="primary" column>
            <v-radio
              v-for="(option, i) in question.options"
              :key="i"
              :label="option"
              :value="option"
            ></v-radio>
          </v-radio-group>
        </div>
        <v-btn @click="generateTrip" color="primary" class="quiz-btn">Lancer le quiz</v-btn>
        <p v-if="suggestedTrip" class="quiz-result">✨ Ton road trip idéal : {{ suggestedTrip }}</p>
      </v-container>
    </v-card>
  </v-container>
</template>

<script>
import { ref, onMounted } from "vue";
import supabase from "../supabase";

export default {
  name: "RoadTrip",
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

    const quizQuestions = ref([
      {
        text: "Quel type de paysage préfères-tu ?",
        options: ["Désert", "Montagne", "Plage", "Forêt", "Ville"],
      },
      {
        text: "Quel est ton moyen de transport favori ?",
        options: ["Voiture", "Moto", "Camping-car", "Train", "Vélo"],
      },
      {
        text: "Quelle ambiance recherches-tu ?",
        options: ["Aventure extrême", "Détente", "Culture", "Road trip en solo", "Fête entre amis"],
      },
    ]);

    const userAnswers = ref(["", "", ""]);
    const suggestedTrip = ref("");

    // Récupération des destinations depuis Supabase
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

    const generateTrip = () => {
      const answerCombination = userAnswers.value.join(" ");

      if (answerCombination.includes("Désert")) {
        suggestedTrip.value = "USA - Route 66";
      } else if (answerCombination.includes("Montagne")) {
        suggestedTrip.value = "Road Trip dans les Alpes";
      } else if (answerCombination.includes("Plage")) {
        suggestedTrip.value = "Australie - Great Ocean Road";
      } else if (answerCombination.includes("Forêt")) {
        suggestedTrip.value = "Canada - Traversée du Québec";
      } else if (answerCombination.includes("Ville")) {
        suggestedTrip.value = "Road Trip à travers l'Europe";
      } else if (answerCombination.includes("Moto")) {
        suggestedTrip.value = "Vietnam - Ho Chi Minh Trail";
      } else if (answerCombination.includes("Camping-car")) {
        suggestedTrip.value = "Nouvelle-Zélande en van";
      } else if (answerCombination.includes("Train")) {
        suggestedTrip.value = "Transsibérien à travers la Russie";
      } else if (answerCombination.includes("Vélo")) {
        suggestedTrip.value = "Pays-Bas en vélo";
      } else if (answerCombination.includes("Fête entre amis")) {
        suggestedTrip.value = "Ibiza et la côte espagnole";
      } else {
        suggestedTrip.value = "Europe en train";
      }
    };

    onMounted(fetchRoadTrips);

    return { destinations, checklist, quizQuestions, userAnswers, suggestedTrip, generateTrip };
  },
};
</script>

<style scoped>
.page-title {
  text-align: center;
  font-size: 3em;
  font-weight: bold;
  margin-top: 50px;
  color: white;
}

.page-subtitle {
  text-align: center;
  font-size: 1.2rem;
  color: #c2a87d;
  margin-bottom: 40px;
}

.section-title {
  margin-top: 40px;
  font-size: 1.8rem;
  font-weight: bold;
  color: white;
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
  height: 200px;
  border-radius: 10px;
  display: flex;
  align-items: flex-end;
  color: white;
  padding: 15px;
  transition: transform 0.3s ease-in-out;
}

.destination-item:hover {
  transform: scale(1.05);
}

.destination-content {
  background: rgba(0, 0, 0, 0.6);
  padding: 10px;
  border-radius: 5px;
  width: 100%;
  text-align: center;
}

.checklist-card, .quiz-card {
  background: #303030;
  padding: 20px;
  border-radius: 10px;
  color: white;
  margin-top: 20px;
}

.quiz-question {
  font-size: 1.2rem;
  margin-bottom: 10px;
}

.quiz-btn {
  margin-top: 15px;
}

.quiz-result {
  margin-top: 15px;
  font-size: 1.4rem;
  font-weight: bold;
  color: #c2a87d;
}
</style>
