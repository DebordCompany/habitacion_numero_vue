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
      <div class="categorias max-width">
        <router-link to="/meta"><img src="../assets/img/tarjeta_contacto.png" alt="" class="categorias_img contacto"></router-link>
        <router-link to="/meta"><img src="../assets/img/tarjeta_contacto.png" alt="" class="categorias_img aplica"></router-link>
        <router-link to="/meta"><img src="../assets/img/tarjeta_contacto.png" alt="" class="categorias_img prensa"></router-link>
      </div>
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
.tierra{
  min-height: 50vh;
  background-image: url("../assets/img/suelo.png");
  background-size: cover;
  background-position: center;
}
.categorias{
  display: grid;
  grid-template-columns: 1.5fr 1fr ;
  padding:5em 1em;
  gap: 1em;
}
.contacto{
  
  transform: rotate(-15deg);
}
.prensa{
  transform: rotate(5deg);
}
.aplica{
  transform: rotate(40deg);
}
@media (min-width: 768px) {
  .container_puerta {
    grid-template-columns: 1fr 1fr 1fr;
  }
}
</style>
