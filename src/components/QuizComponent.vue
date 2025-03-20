<template>
  <v-card class="quiz-card">
    <v-container>
      <!-- Questions -->
      <div v-for="(question, index) in quizQuestions" :key="index">
        <p class="quiz-question">{{ question.text }}</p>
        <v-radio-group v-model="userAnswers[index]" color="white" column>
          <v-radio
            v-for="(option, i) in question.options"
            :key="i"
            :label="option"
            :value="option"
          ></v-radio>
        </v-radio-group>
      </div>

      <!-- Résultat du quiz -->
      <v-btn @click="generateTrip" color="white" class="quiz-btn">Lancer le quiz</v-btn>

      <p v-if="suggestedTrip" class="quiz-result">✨ Ton road trip idéal : {{ suggestedTrip }}</p>
    </v-container>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      quizQuestions: [
        {
          text: "Quel environnement te fait rêver ?",
          options: ["Désert", "Montagne", "Plage", "Forêt"],
        },
        {
          text: "Quel est ton moyen de transport favori ?",
          options: ["Voiture", "Moto", "Camping-car", "Train"],
        },
        {
          text: "Tu préfères voyager...",
          options: ["En solo", "En couple", "Entre amis", "En famille"],
        },
      ],
      userAnswers: ["", "", ""],
      suggestedTrip: "",
    };
  },
  methods: {
    generateTrip() {
      const [env, transport, company] = this.userAnswers;

      // Combinaisons des réponses possibles
      if (env === "Désert") {
        if (transport === "Moto") {
          this.suggestedTrip = company === "En solo" ? "USA - Route 66 en moto" : "Maroc - Road Trip désert en moto";
        } else if (transport === "Camping-car") {
          this.suggestedTrip = company === "En couple" ? "Désert de l'Atacama - Road trip en van" : "Désert d'Arabie Saoudite - Voyage en van";
        } else if (transport === "Voiture") {
          this.suggestedTrip = company === "Entre amis" ? "Ecosse - Route du désert et paysages" : "Namibie - Road trip en voiture dans les dunes";
        } else {
          this.suggestedTrip = "Désert d'Australie - Traversée en train à travers le désert";
        }
      } else if (env === "Montagne") {
        if (transport === "Camping-car") {
          this.suggestedTrip = company === "En famille" ? "Alpes - Road trip en van" : "Canadian Rockies - Road trip en camping-car";
        } else if (transport === "Voiture") {
          this.suggestedTrip = company === "En couple" ? "Route des Grandes Alpes - Voyage en voiture" : "Suisse - Voyage en voiture sur les cols";
        } else if (transport === "Moto") {
          this.suggestedTrip = "Alpes - Tour en moto à travers les montagnes";
        } else {
          this.suggestedTrip = "Montagnes du Colorado - Traversée en train";
        }
      } else if (env === "Plage") {
        if (transport === "Voiture") {
          this.suggestedTrip = company === "En famille" ? "Australie - Great Ocean Road en famille" : "Californie - Road trip sur la côte en voiture";
        } else if (transport === "Camping-car") {
          this.suggestedTrip = company === "Entre amis" ? "Hawaï - Road trip en camping-car" : "Côte Pacifique - Voyage en van à travers la plage";
        } else if (transport === "Moto") {
          this.suggestedTrip = "Côte Est de l'Australie - Voyage en moto sur les plages";
        } else {
          this.suggestedTrip = "Plages de Thaïlande - Traversée en train à travers la côte";
        }
      } else if (env === "Forêt") {
        if (transport === "Train") {
          this.suggestedTrip = company === "En famille" ? "Canada - Traversée des forêts en train" : "Suisse - Aventure forestière en train";
        } else if (transport === "Camping-car") {
          this.suggestedTrip = company === "En couple" ? "Amazonie - Voyage en van à travers la jungle" : "Forêts du Pacifique - Road trip en van";
        } else if (transport === "Moto") {
          this.suggestedTrip = company === "Entre amis" ? "Forêts de l'Europe - Road trip à moto" : "Costa Rica - Exploration en moto dans la jungle";
        } else {
          this.suggestedTrip = "Forêts du Japon - Voyage en train dans les montagnes";
        }
      } else {
        this.suggestedTrip = "Islande - Road Trip magique en van !";
      }
    },
  },
};
</script>

<style scoped>
.quiz-question {
  font-size: 1.3rem;
  margin-bottom: 15px;
}

.quiz-btn {
  margin-top: 20px;
  font-size: 1.2rem;
}

.quiz-result {
  margin-top: 20px;
  font-size: 1.5rem;
  font-weight: bold;
  color: #c2a87d;
  text-align: center;
}

.quiz-card {
  background: #303030;
  padding: 25px;
  border-radius: 12px;
  color: white;
  margin-top: 20px;
  background-color: rgba(255, 255, 255, 0.1);
  border: 2px solid rgba(255, 255, 255, 0.5);
}
</style>
