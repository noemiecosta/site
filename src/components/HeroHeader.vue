<template>
  <header class="hero-header">
    <div class="hero-content">
      <h1 class="hero-title">{{ title }}</h1>
      <p v-if="subtitle" class="hero-subtitle">{{ subtitle }}</p>
    </div>
  </header>
</template>

<script>
export default {
  name: 'HeroHeader',
  props: {
    title: {
      type: String,
      required: true
    },
    subtitle: {
      type: String,
      default: ''
    },
    imageUrl: {
      type: String,
      default: '/images/default-travel-bg.jpg'
    }
  },
  mounted() {
    // Applique l'image d'arrière-plan de manière dynamique
    this.$el.style.backgroundImage = `url(${this.imageUrl})`;
  }
}
</script>

<style scoped>
.hero-header {
  height: 60vh;
  min-height: 400px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
}

.hero-header::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4); /* Superposition sombre pour améliorer la lisibilité */
}

.hero-content {
  position: relative;
  z-index: 1;
  text-align: center;
  color: white;
  padding: 2rem;
  max-width: 800px;
}

.hero-title {
  font-size: 3rem;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
}

.hero-subtitle {
  font-size: 1.5rem;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.7);
}

@media (max-width: 768px) {
  .hero-header {
    height: 50vh;
    min-height: 300px;
  }
  
  .hero-title {
    font-size: 2.2rem;
  }
  
  .hero-subtitle {
    font-size: 1.2rem;
  }
}
</style>
