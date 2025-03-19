<template>
    <v-container class="bons-plans-container">
      <h2 class="bons-plans-title">Bons Plans Voyage : Voyage sans te ruiner !</h2>
      <p class="bons-plans-subtitle">
        Découvre nos meilleurs conseils et astuces pour voyager malin ! ✈️💰
      </p>
  
      <v-row justify="center">
        <!-- Bloc Astuces pour économiser -->
        <v-col cols="12" md="3">
          <v-card class="bons-plans-card astuces">
            <div class="card-content">
              <h3>💰 Astuces Économie</h3>
              <p>Des conseils malins pour réduire tes frais et profiter au maximum sans exploser ton budget.</p>
            </div>
          </v-card>
        </v-col>
  
        <!-- Bloc Bonnes adresses -->
        <v-col cols="12" md="3">
          <v-card class="bons-plans-card adresses">
            <div class="card-content">
              <h3>🌍 Sites Références</h3>
              <p>Les meilleures plateformes pour réserver tes vols, hôtels et activités au meilleur prix !</p>
            </div>
          </v-card>
        </v-col>
  
        <!-- Bloc Calculateur Budget -->
        <v-col cols="12" md="3">
          <v-card class="bons-plans-card budget">
            <div class="card-content">
              <h3>📊 Calculateur Budget</h3>
              <p>Estime facilement combien va te coûter ton voyage pour mieux anticiper tes dépenses.</p>
            </div>
          </v-card>
        </v-col>
  
        <!-- Bloc Tips Étudiants -->
        <v-col cols="12" md="3">
          <v-card class="bons-plans-card etudiant">
            <div class="card-content">
              <h3>🎓 Tips Étudiants</h3>
              <p>Des bons plans exclusifs pour voyager moins cher en tant qu’étudiant !</p>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script setup>
  </script>
  
  <style scoped>
  .bons-plans-container {
    text-align: center;
    padding: 60px 20px;
  }
  
  .bons-plans-title {
    font-size: 36px;
    font-weight: bold;
    color: white;
    margin-bottom: 10px;
  }
  
  .bons-plans-subtitle {
    font-size: 18px;
    color: white;
    margin-bottom: 40px;
  }
  
  /* Styles des cartes */
  .bons-plans-card {
    text-align: center;
    border-radius: 15px;
    padding: 20px;
    min-height: 180px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.3s ease-in-out;
  }
  
  .bons-plans-card:hover {
    transform: scale(1.05);
  }
  
  /* Couleurs différentes pour chaque bloc */
  .astuces {
    background-color: #c2a87d;
  }
  
  .adresses {
    background-color: #8b5e3b;
  }
  
  .budget {
    background-color: #3d543d;
  }
  
  .etudiant {
    background-color: #2e4a62;
  }
  
  /* Style du contenu dans les cartes */
  .card-content {
    color: white;
    font-size: 16px;
  }
  </style>
  