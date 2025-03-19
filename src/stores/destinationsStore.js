// src/stores/destinationsStore.js
import { defineStore } from 'pinia';
import { supabase } from '../supabase';  // Import de Supabase

export const useDestinationsStore = defineStore('Destinations', {
  state: () => ({
    Destinations: [],
    loading: false,
    error: null,
  }),
  actions: {
    async fetchDestinations() {
      this.loading = true;
      try {
              const { data, error } = await supabase.from('Destinations').select('*');
              console.log("Données récupérées: ", data); // Ajoute un log pour vérifier les données
              if (error) throw error;
              this.Destinations = data;
            } catch (err) {
              this.error = err.message;
              console.error("Erreur lors de la récupération des données: ", err);
            } finally {
              this.loading = false;
            }
        }
    }
}
 );
