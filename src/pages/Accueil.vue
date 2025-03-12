<template>
  <div class="Accueil">
    <HeroHeader 
      title="Voyaj" 
      subtitle="Des voyages inoubliables à travers le monde"
      imageUrl="https://i.pinimg.com/736x/52/5f/da/525fda64eb5438f9e28dd1e357019ebd.jpg" 
    />
     <!-- Section Texte -->
     <div class="text-section">
      <h2>Partez à l'aventure</h2>
      <p>
        Découvrez des destinations incroyables à petit budget et explorez le monde sans vous ruiner !
      </p>
    </div>
    
    <h2> Découvrez nos destinations phares ! </h2>
    <!-- Carrousel d'images -->
    <ImageCarousel :images="images" />

    <!-- Le reste du contenu de votre page d'accueil 
    <div class="container">
      <div class="image-container">
        <img src="https://i.pinimg.com/736x/52/5f/da/525fda64eb5438f9e28dd1e357019ebd.jpg" />
      </div>
      <div class="text-container">
        <h1>Explore le monde</h1>
        <p>
          Découvrez notre contenu exclusif sur les plus beaux endroits à visiter.
          Profitez d'une expérience unique avec des conseils de voyage adaptés à vous.
        </p>
      </div>
    </div>
    <section class="contact">
      <h2>Contact</h2>
      <p>Des questions ? Contacte-nous, on adore discuter ! 📩</p>
      <button class="contact-btn">Nous écrire</button>
    </section> -->
  </div> 
</template>

<script>
// Corrigez le chemin d'importation
import HeroHeader from '../components/HeroHeader.vue'
import ImageCarousel from '../components/ImageCarousel.vue'

export default {
  name: 'HomePage',
  components: {
    HeroHeader,
    ImageCarousel
  },
  data() {
    return {
      images: [
        { src: "https://i.pinimg.com/736x/51/08/41/5108418fdc202adc61a2e38ed6ae97ab.jpg", alt: "Plage paradisiaque", caption: "Détente au soleil", link: "/destinations" },
        { src: "https://i.pinimg.com/474x/db/2c/bc/db2cbc5e4002090961b82cd22a61cdcc.jpg", alt: "Montagne", caption: "Randonnée et nature", link: "/nature" },
        { src: "https://i.pinimg.com/736x/52/5f/da/525fda64eb5438f9e28dd1e357019ebd.jpg", alt: "Aventure urbaine", caption: "Découverte des villes", link: "/city" }
      ]
    };
  },
  mounted() {
    console.log("Images du carrousel : ", this.carouselImages);
  }
}
</script>

<style scoped>
h1 {
  text-align: center;
}

.container {
  display: flex; /* Active Flexbox */
  align-items: center; /* Centre verticalement */
  justify-content: space-between; /* Espacement max entre les éléments */
  width: 80%; /* Largeur max du contenu */
  margin: auto; /* Centre sur la page */
  padding: 10px;
}

.image-container {
  flex: 0.8; /* Prend 50% de la largeur */
}

.image-container img {
  width: 100%; /* Image prend toute la largeur de son conteneur */
  border-radius: 10px; /* Coins arrondis pour un style propre */
}

.text-container {
  flex: 1; /* Prend 50% de la largeur */
  padding: 20px;
}

.contact {
  text-align: center;
  padding: 2rem;
}

h2 {
  margin-bottom: 10px;
  color: #333;
}

p {
  color: #333;
}

.contact-btn {
  background-color: #4CAF50;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 15px;
}

.contact-btn:hover {
  background-color: #45a049;
}
</style>

<!-- 
 <template>
  <div class="Accueil">
    
      title="Découvrez des destinations extraordinaires" 
      subtitle="Des voyages inoubliables à travers le monde"
      imageUrl="https://i.pinimg.com/736x/51/08/41/5108418fdc202adc61a2e38ed6ae97ab.jpg" 
    />
    
 Le reste du contenu de votre page d'accueil
  </div>
</template>

<script>
import ImageArrPlan from '../components/ImageArrPlan.vue'

export default {
  name: 'HomePage',
  components: {
    ImageArrPlan
  }
}
</script>
<template>
  <div class="container">
    <div class="image-container">
      <img
        src="https://i.pinimg.com/474x/db/2c/bc/db2cbc5e4002090961b82cd22a61cdcc.jpg"
      />
    </div>

    <div class="text-container">
      <h1>Explore le monde</h1>
      <p>
        Découvrez notre contenu exclusif sur les plus beaux endroits à visiter.
        Profitez d'une expérience unique avec des conseils de voyage adaptés à vous.
      </p>
    </div>
  </div>
  <section class="contact">
      <h2>Contact</h2>
      <p>Des questions ? Contacte-nous, on adore discuter ! 📩</p>
      <button class="contact-btn">Nous écrire</button>
    </section>
</template>
-->
<style scoped>
h1 {
  text-align: center;
}

.container {
  display: flex; /* Active Flexbox */
  align-items: center; /* Centre verticalement */
  justify-content: space-between; /* Espacement max entre les éléments */
  width: 80%; /* Largeur max du contenu */
  margin: auto; /* Centre sur la page */
  padding: 10px;
}

.image-container {
  flex: 0.8; /* Prend 50% de la largeur */
}

.image-container img {
  width: 100%; /* Image prend toute la largeur de son conteneur */
  border-radius: 10px; /* Coins arrondis pour un style propre */
  
}

.text-container {
  flex: 1; /* Prend 50% de la largeur */
  padding: 20px;
}

h2 {
  margin-bottom: 10px;
  color : #fff;
}

p {
  color : #fff; 
}
</style>