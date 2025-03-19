<template>
  <v-container class="bons-plans-container">
    <h2 class="bons-plans-title">Bons Plans Voyage : Voyage sans te ruiner !</h2>
    <p class="bons-plans-subtitle">Découvre nos meilleurs conseils et astuces pour voyager malin !</p>

    <!-- Section Sites Utiles -->
    <h3 class="section-title">Les Sites Utiles</h3>
    <p class="section-site">
      Trouver les meilleurs bons plans, c'est essentiel pour voyager sans se ruiner ! Grâce à ces sites incontournables, compare les vols, réserve des hébergements au meilleur prix et découvre des activités géniales sans exploser ton budget.
    </p>

    <v-row class="bons-plans-sites" justify="space-between" no-gutters>
      <v-col cols="12" md="4" v-for="(site, index) in sites" :key="index">
        <v-card class="bons-plans-card" :class="site.class">
          <div class="card-header"><h4>{{ site.emoji }} {{ site.nom }}</h4></div>
          <div class="card-content">
            <p>{{ site.description }}</p>
            <BoutonLien :lien="site.lien" :texte="site.boutonTexte" couleur="default" />
          </div>
        </v-card>
      </v-col>
    </v-row>

    <!-- 🛠️ Calculateur de Budget -->
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

    <!-- Guides Ultimes -->
    <h3 class="section-title">Nos Guides Ultimes</h3>
    <v-row class="bons-plans-guide" justify="space-between" no-gutters>
      <v-col cols="12" md="6" v-for="(guide, index) in guides" :key="index" class="guide-card">
        <v-card class="guide-card-content" :style="{ backgroundImage: `url(${guide.image})` }">
          <div class="guide-overlay">
            <v-card-title class="guide-title">{{ guide.titre }}</v-card-title>
            <v-card-text class="guide-text">
              <ul>
                <li v-for="(item, i) in guide.contenu" :key="i">- {{ item }}</li>
              </ul>
            </v-card-text>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { ref } from "vue";
import BoutonLien from "../components/BoutonLien.vue";

export default {
  components: { BoutonLien },
  setup() {
    // Sites utiles
    const sites = ref([
      { emoji: "✈️", nom: "Skyscanner", description: "Compare les prix des vols et choisis les meilleures offres.", lien: "https://www.skyscanner.fr", boutonTexte: "Découvrir Skyscanner", class: "site-1" },
      { emoji: "🏨", nom: "Booking.com", description: "Réserve des hôtels au meilleur prix avec une large gamme d’options.", lien: "https://www.booking.com", boutonTexte: "Explorer Booking", class: "site-2" },
      { emoji: "🗙", nom: "TripAdvisor", description: "Découvre les meilleures activités à faire dans ta destination !", lien: "https://www.tripadvisor.fr", boutonTexte: "Voir TripAdvisor", class: "site-3" }
    ]);

    // Calculateur de budget
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

    const getSafeValue = (value) => (value !== null && value !== "" ? Number(value) : 0);

    const calculerBudget = () => {
      total.value =
        getSafeValue(jours.value) * (getSafeValue(prixLogementParJour.value) + getSafeValue(budgetNourriture.value) + getSafeValue(budgetActivites.value)) +
        getSafeValue(prixTrajet.value) +
        getSafeValue(autresDepenses.value);
    };

    // Guides de voyage
    const guides = ref([
      {
        image: "/guide1.jpg",
        titre: "Comment voyager gratuitement ou à petit prix ?",
        contenu: [
          "Utilise le Couchsurfing pour dormir chez l'habitant gratuitement.",
          "Travaille dans une auberge en échange du logement.",
          "Profite des erreurs tarifaires des compagnies aériennes.",
          "Participe à des missions de volontariat à l’étranger."
        ]
      },
      {
        image: "/guide2.jpg",
        titre: "Les meilleurs bons plans étudiants !",
        contenu: [
          "La carte étudiante te donne accès à des réductions sur les transports et musées.",
          "Découvre les programmes d’échange internationaux.",
          "Postule pour des bourses et financements pour les jeunes voyageurs.",
          "Participe aux concours pour gagner des voyages."
        ]
      }
    ]);

    return { sites, guides, budgetFields, total, calculerBudget };
  }
};
</script>

<style scoped>
.bons-plans-title, .bons-plans-subtitle, .section-site {
  text-align: center;
  color: white;
}

.bons-plans-title { 
  font-size: 3em; 
  font-weight: bold; 
  margin-top: 50px; }

.bons-plans-subtitle { 
  font-size: 1.2rem; 
  margin-bottom: 40px; }

.section-site { 
  font-size: 1rem; 
  margin-bottom: 40px; }

.bons-plans-sites { 
  display: flex; 
  gap: 20px; 
  flex-wrap: nowrap; }

.section-title { 
  text-align: left; 
  font-size: 2em; 
  color: white; 
  margin-bottom: 20px; 
  text-decoration: underline; }

.bons-plans-card { 
  padding: 30px; 
  border-radius: 10px; 
  border: 2px solid grey; color: white; }

.site-1 { background-color: #2e4a62; }
.site-2 { background-color: #3d543d; }
.site-3 { background-color: #c2a87d; }

.bons-plans-calculateur { 
  background-color: #303030; 
  padding: 20px; 
  border-radius: 10px; 
  color: white; }

.bouton-container { 
  display: flex; 
  justify-content: center; 
  margin-top: 10px; }

.bons-plans-guide { 
  display: flex; 
  gap: 20px; 
  flex-wrap: nowrap; }

.guide-card-content {
  height: 400px;
  background-size: cover;
  background-position: center;
  color: white;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.guide-overlay {
  background: rgba(0, 0, 0, 0.6);
  width: 100%;
  height: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.guide-title {
  font-size: 1.8rem;
  font-weight: bold;
  text-align: center;
  padding: 10px;
  text-decoration: underline;
  white-space:normal;
}

.guide-text {
  font-size: 1.2rem;
  line-height: 1.8; /* Espacement entre lignes */
  flex-grow: 1; /* Permet au texte d'occuper toute la hauteur */
  display: flex;
  flex-direction: column;
  justify-content: center; /* Centre verticalement le texte */
}

.guide-text ul {
  padding: 0;
  margin: 0;
  list-style-type: none;
}

.guide-text li {
  margin-bottom: 15px; /* Espacement entre les lignes */
}
</style>
