import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Assurez-vous que le chemin est correct
import { createVuetify } from 'vuetify';
import 'vuetify/styles';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import "leaflet/dist/leaflet.css";

const vuetify = createVuetify({
  components,
  directives,
});

createApp(App)
  .use(router) // Utilisez le routeur ici
  .use(vuetify)
  .mount('#app');

