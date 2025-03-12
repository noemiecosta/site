<template>
  <footer>
    <div class="footer-contenant">
      <p>&copy; {{ currentYear }} - Tous droits réservés</p>
      <p>Pour nous contacter, envoyez-nous un message à <a href="mailto:contact@sitedenono.com">contact@sitedenono.com</a></p>
    </div>
  </footer>
</template>

<script setup>
// Date dynamique
const currentYear = new Date().getFullYear();
</script>

<style scoped>
footer {
  background-color: #222;
  color: white;
  text-align: center;
  padding: 0;
  width: 100vw;
}

a {
  color: #f1f1f1;
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}
</style>
