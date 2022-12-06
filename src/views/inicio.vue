<script setup>
import titulo from "../components/titulo.vue";
import puerta from "../components/puerta.vue";
import puertaMeta from "../assets/puerta_meta.png";
import puertaResidencias from "../assets/puerta_residencias.png";
import puertaInstalaciones from "../assets/puerta_instalaciones.png";
</script>
<template>
  <div>
    <titulo class="titulo_inicio" texto="Habitación Número"></titulo>
    <div class="container_puerta">

        <router-link to="/meta" ><puerta :imagen="puertaMeta"></puerta></router-link>
        <router-link to="/residencias" ><puerta :imagen="puertaResidencias"></puerta></router-link>
        <router-link to="/instalaciones" ><puerta :imagen="puertaInstalaciones"></puerta></router-link>
      
    </div>
  </div>
</template>
<style scoped>
.titulo_inicio {
  margin-top: var(--margin-vertical-gap);
  margin-bottom: var(--section-gap);
}
.container_puerta {
  display: grid;
  grid-template-columns: 1fr 1fr;
  
}
@media (min-width:768px) {
  .container_puerta{
    grid-template-columns: 1fr 1fr 1fr;
  }
  
}
</style>
