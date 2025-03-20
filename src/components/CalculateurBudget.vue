<template>
    <v-container class="bons-plans-calculateur">
      <h3 class="section-title">Calculateur de Budget</h3>
      <v-form @submit.prevent="calculerBudget">
        <v-text-field v-for="(field, index) in budgetFields" :key="index"
          :label="field.label"
          v-model.number="field.model"
          type="number"
        />
        <div class="bouton-container">
          <v-btn @click="calculerBudget" color="white">Calculer</v-btn>
        </div>
        <p v-if="total !== null" class="calculateur-total">💰 Ton budget estimé : {{ total }} €</p>
      </v-form>
    </v-container>
  </template>
  
  <script>
  import { ref } from "vue";
  
  export default {
    setup() {
      // Définir les champs du calculateur de budget
      const jours = ref(null);
      const prixLogementParJour = ref(null);
      const prixTrajet = ref(null);
      const budgetNourriture = ref(null);
      const budgetActivites = ref(null);
      const autresDepenses = ref(null);
      const total = ref(null);
  
      const budgetFields = ref([
        { label: "Nombre de jours", model: jours },
        { label: "Prix du logement par jour (€)", model: prixLogementParJour },
        { label: "Prix du trajet aller/retour (€)", model: prixTrajet },
        { label: "Budget nourriture par jour (€)", model: budgetNourriture },
        { label: "Budget activités par jour (€)", model: budgetActivites },
        { label: "Autres dépenses (€)", model: autresDepenses },
      ]);
  
      // Fonction pour sécuriser les valeurs
      const getSafeValue = (value) => (value !== null && value !== "" ? Number(value) : 0);
  
      // Calcul du budget
      const calculerBudget = () => {
        total.value =
          getSafeValue(jours.value) * (getSafeValue(prixLogementParJour.value) + getSafeValue(budgetNourriture.value) + getSafeValue(budgetActivites.value)) +
          getSafeValue(prixTrajet.value) +
          getSafeValue(autresDepenses.value);
      };
  
      return { budgetFields, total, calculerBudget };
    }
  };
  </script>
  
  <style scoped>
  .bons-plans-calculateur {
    background-color: #303030;
    padding: 20px;
    border-radius: 10px;
    color: white;
  }
  
  .bouton-container {
    display: flex;
    justify-content: center;
    margin-top: 10px;
  }
  
  .calculateur-total {
    font-size: 1.2rem;
    margin-top: 20px;
    text-align: center;
  }
  </style>
  