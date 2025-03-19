<template>
    <div class="destinations">
      <div
        v-for="destination in destinations"
        :key="destination.id"
        class="destination-item"
        :style="{ backgroundImage: 'url(' + destination.url_image + ')' }"
      >
        <div class="destination-content">
          <h3>{{ destination.Ville }}, {{ destination.Pays }}</h3>
          <p>{{ destination.description }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from "vue";
  import supabase from "../supabase";
  
  export default {
    name: "CardInsolite",
    setup() {
      const destinations = ref([]);
  
      // Récupération des destinations insolites depuis Supabase
      const fetchDestinationsInsolites = async () => {
        const { data, error } = await supabase
          .from("Destinations")
          .select("*")
          .eq("categorie", "Insolite");
  
        if (error) {
          console.error("Erreur de récupération des destinations :", error);
        } else {
          destinations.value = data;
        }
      };
  
      onMounted(fetchDestinationsInsolites);
  
      return { destinations };
    }
  };
  </script>
  
  <style scoped>
  .destinations {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
  }
  
  .destination-item {
    width: 350px;
    height: 250px;
    border-radius: 12px;
    position: relative;
    background-size: cover;
    background-position: center;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    overflow: hidden;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
    border: 4px solid #808080; /* Bordure grise */
  }
  
  /* Contenu avec fond semi-transparent */
  .destination-content {
    background: rgba(0, 0, 0, 0.6);
    color: white;
    padding: 10px;
    width: 100%;
    text-align: center;
    border-top: 3px solid #c2a87d; /* Bordure dorée */
  }
  </style>
  