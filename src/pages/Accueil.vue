<template> 
  <div class="Accueil">
    <v-parallax src="/image1.jpg">
      <div>
        <h1>Voyaj</h1>
        <h2>Trouve ta prochaine destination !</h2>
      </div>
    </v-parallax>
  </div>

  <div class="intro-container">
    <div class="intro-text">
      <h2>Explore le monde sans te ruiner !</h2>
      <p>
        Bienvenue sur Voyaj, la plateforme idéale pour tous les voyageurs en quête de bons plans ! 
        Ici, on te partage les meilleures destinations à petit budget, des astuces pour économiser, 
        et des bons plans étudiants pour voyager sans te ruiner.
      </p>
      <p>
        Que tu sois un aventurier dans l’âme, un étudiant fauché ou juste curieux de découvrir de nouveaux horizons, 
        tu trouveras ici des idées de voyages accessibles, des conseils malins et des sites incontournables 
        pour organiser ton séjour au meilleur prix.
      </p>
    </div>

    <div class="intro-text right-block"> 
    <h3>Ce que tu peux retrouver sur notre site :</h3>
    <ul>
      <li>Ta prochaine destination à prix mini</li>
      <li>Des astuces pour économiser sur tes voyages</li>
      <li>Des bons plans pour étudiants et petits budgets</li>
    </ul>
  </div>
</div>

<!-- Phrase finale pleine largeur -->
<p class="full-width-text">
  <strong>Alors, prêt à partir à l’aventure ? Explore nos catégories et déniche le voyage de tes rêves sans exploser ton budget !</strong>
</p>

  <h2>Découvrez nos destinations phares !</h2>

  <!-- Carrousel d'images -->
  <div class="carousel-container">
  <ImageCarousel />
</div>

<div class="categorie-container">
  <div class= "categorie-text"> 
      <h2>Découvre nos catégories et trouve ton voyage idéal !</h2>
      <p>
        Tu rêves d’évasion, d’aventure ou d’en prendre plein la vue ? On a pensé à tout ! <br>
        Que tu sois un passionné d’expériences uniques, un adepte des escapades express ou un aventurier dans l’âme, nos catégories sont faites pour toi.
      </p>
      <br>
      <BlocksComponent/>
      <p>
Alors, quelle sera ta prochaine destination ? Clique sur la catégorie qui te fait vibrer et commence à planifier ton prochain voyage ! ✈️ <br>
      </p>
    </div>
  </div>


  <BlocBonPlan/>

</template>

<script>
import BlocBonPlan from '../components/BlocBonPlan.vue';
import BlocksComponent from '../components/BlocksComponent.vue';
import ImageCarousel from '../components/ImageCarousel.vue';

export default {
  name: 'HomePage',
  components: {
    ImageCarousel,
    BlocksComponent,
    BlocBonPlan
  }
}
</script>

<style scoped>
/* Section de présentation */
.categorie-container {
  display: flex;
  justify-content: center; /* Centre horizontalement */
  align-items: center; /* Centre verticalement */
  text-align: center; /* Centre le texte */
  min-height: 50vh; /* Ajuste la hauteur pour bien le centrer */
  padding: 10px; /* Ajoute de l’espace autour */
}

.categorie-text {
  max-width: 1200px; /* Limite la largeur pour éviter un texte trop étalé */
  color: white;
  line-height: 2;
}

.intro-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px 10%;
}

.intro-text {
  width: 53%;
  color: white;
  justify-content: center;
  text-align: center;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin-bottom: 10px;
  line-height: 20px;
}

/* Titres et texte */
h1, h2 {
  text-align: center;
  color: white;
  font-family: 'Goldman';
  font-size: 100px;
}

h2 {
  font-size: 36px;
  margin-bottom: 15px;
}

p {
  font-size: 16px;
  line-height: 1.5;
}

/* Phrase finale sur toute la largeur */
.full-width-text {
  text-align: center;
  font-size: 22px;
  font-weight: bold;
  padding: 20px;
  width: 100%;
  color: white;
}

/* Bloc de droite avec bordure et couleur */
.intro-text.right-block {
  width: 42%;
  padding: 20px;
  border: 2px solid rgba(255, 255, 255, 0.5); /* Bordure blanche semi-transparente */
  background-color: rgba(255, 255, 255, 0.1); /* Fond léger qui s’adapte */
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
}
.carousel-container {
  margin-bottom: 40px; /* Ajuste la valeur selon l'espace que tu veux */
}

h3 {
  font-size : 22px;
  text-decoration: underline;
}

</style>
