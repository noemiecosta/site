<template>
  <div class="categories">
    <h1>Une envie particulière ? </h1>
    <p>À la recherche de l’insolite ? Découvre des destinations hors du commun et des expériences qui sortent de l’ordinaire. Parfait pour les âmes curieuses en quête de nouveautés.<br>
Prêt pour l’aventure ? Enfile ton sac à dos et pars en road trip ! Des itinéraires magiques et des paysages à couper le souffle t’attendent. <br>
</p>
    <div class="category-list">
      <div class="category-item" @click="redirectToCategory('/categories/Insolite')">
        <img src='https://i.pinimg.com/474x/85/ef/76/85ef76f39b52f1f592398644ea58acbe.jpg' alt="Insolite" />
        <h2>Insolite</h2>
        <p>Découvrez des destinations étonnantes et hors du commun.</p>
      </div>
      <div class="category-item" @click="redirectToCategory('/categories/RoadTrip')">
        <img src='https://i.pinimg.com/474x/ba/ca/8b/baca8bc24ac5bef7dc31bbda545113ad.jpg' alt="Road Trip" />
        <h2>Road Trip</h2>
        <p>Partez à l’aventure sur les routes et explorez des paysages à couper le souffle.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Categories",
  methods: {
    // Redirection vers la page correspondante en utilisant le chemin absolu
    redirectToCategory(path) {
      this.$router.push(path);
    }
  }
};
</script>

<style scoped>
.categories {
  text-align: center;
  padding: 20px;
}

h1 {
  font-size: 3em;
  margin-bottom: 30px;
  margin-top: 50px;
}

.category-list {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.category-item {
  width: 30%;
  padding: 10px;
  cursor: pointer;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.1);
  border: 2px solid rgba(255, 255, 255, 0.5);
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
  text-align: center;
  transition: transform 0.3s ease;
}

.category-item:hover {
  transform: scale(1.05);
}

.category-item img {
  width: 100%;
  height: 400px;  /* Fixe la hauteur de l'image */
  object-fit: cover; /* Garde l'aspect de l'image tout en remplissant l'espace */
  border-radius: 10px;
}

h2 {
  font-size: 1.5em;
  margin-top: 10px;
}

p {
  font-size: 1em;
  color: white;
  margin-bottom: 40px;
}
</style>
