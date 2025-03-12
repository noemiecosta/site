import { createRouter, createWebHistory } from 'vue-router';
import Accueil from '../pages/Accueil.vue'; // Page d'accueil
import Categories from '../pages/Categories.vue'; // Page "catégories"
import Destinations from '../pages/Destinations.vue'; // Page "Contact" (facultatif)
import BonPlans from '../pages/BonPlans.vue';
import WEBreak from '../pages/WEBreak.vue';
import RoadTrip from '../pages/RoadTrip.vue';
import Insolite from '../pages/Insolite.vue';

const routes = [
  { path: '/', component: Accueil }, // Route vers la page d'accueil
  { path: '/categories', component: Categories }, // Route vers la page "Catégories"
  { path: '/categories/we-break', component: WEBreak },
  { path: '/categories/road-trip', component: RoadTrip },
  { path: '/categories/insolite', component: Insolite },
  { path: '/destinations', component: Destinations }, // Route vers la page "Destinations"
  { path: '/bon-plans', component: BonPlans }, 
];

const router = createRouter({
  history: createWebHistory(), // Utilisation de l'historique HTML5 pour la navigation 
  routes, 
  scrollBehavior (to, from, savedPosition) {
    // Si on navigue vers une nouvelle route, on défile en haut
    return { top: 0 };
  }
});

export default router;
