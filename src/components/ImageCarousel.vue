<template>
  <div class="carousel">
    <div class="carousel-wrapper" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
      <div class="carousel-item" v-for="(image, index) in images" :key="index">
        <img :src="image.src" :alt="image.alt" />
      </div>
    </div>

    <!-- Boutons de navigation -->
    <button class="prev" @click="prevSlide">❮</button>
    <button class="next" @click="nextSlide">❯</button>
  </div>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
  images: {
    type: Array,
    required: true,
  },
});

const currentIndex = ref(0);

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % props.images.length;
};

const prevSlide = () => {
  currentIndex.value =
    (currentIndex.value - 1 + props.images.length) % props.images.length;
};
</script>

<style scoped>
/* Conteneur principal du carrousel */
.carousel {
  position: relative;
  width: 100vw; /* Prend toute la largeur de l'écran */
  height: 100vh; /* Prend toute la hauteur de l'écran */
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Wrapper qui contient toutes les images */
.carousel-wrapper {
  display: flex;
  transition: transform 0.5s ease-in-out;
  width: 100%;
  height: 100%;
}

/* Style de chaque image */
.carousel-item {
  min-width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel-item img {
  width: 100%;
  height: 70vh;
  object-fit: cover; /* L'image remplit bien l'écran sans être déformée */
}

/* Boutons de navigation */
button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 15px;
  cursor: pointer;
  font-size: 2rem;
  z-index: 10;
  transition: 0.3s;
}

button:hover {
  background: rgba(0, 0, 0, 0.8);
}

.prev {
  left: 20px;
}

.next {
  right: 20px;
}
</style>
