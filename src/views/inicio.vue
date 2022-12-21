<script setup>
import puerta from "../components/puerta.vue";
import puertaMeta from "../assets/img/puerta_meta.png";
import puertaResidencias from "../assets/img/puerta_residencias.png";
import puertaInstalaciones from "../assets/img/puerta_instalaciones.png";
</script>
<template>
  <div>
    
    <div class="cielo">
      <div class="container flex-start">
        <img src="../assets/img/titulo.png" alt="" class="cielo_img">
      </div>
      
    </div>
    <div class="agua">
      
      <div class="container">
        <div class="container_puerta">
          <router-link to="/meta">
          <puerta :imagen="puertaMeta"></puerta>
        </router-link>
        <router-link to="/residencias">
          <puerta :imagen="puertaResidencias"></puerta>
        </router-link>
        <router-link to="/instalaciones">
          <puerta :imagen="puertaInstalaciones"></puerta>
        </router-link>
        </div>
        
      </div>
    </div>
    <div class="tierra">
      
    </div>
  </div>
</template>
<style scoped>
.cielo{
  background: url("../assets/img/cielo.png");
  background-size: cover;
  height: 50vh;
  display: flex;
  justify-content: center;
}
.cielo_img{
  max-width: 900px;
  padding: 2em;

}
.flex-start{
  align-items: flex-start;
}
.agua{
  background: url("../assets/img/mar_mobile.png");
  background-size: cover;
  background-position: center;
  height: 50vh;
  position: relative;
}
.container{
  display: flex;
  justify-content: center;
}

.container_puerta {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  position: absolute;
  bottom: -10vh;
  padding: 0 1em;

}

@media (min-width: 768px) {
  .container_puerta {
    grid-template-columns: 1fr 1fr 1fr;
  }
}
</style>
