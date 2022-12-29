<script setup>
import puerta from "../components/puerta.vue";
import puertaMeta from "../assets/img/puerta_meta.png";
import puertaResidencias from "../assets/img/puerta_residencias.png";
import puertaInstalaciones from "../assets/img/puerta_instalaciones.png";
</script>
<template>

  <div class="content">
    
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
      <div class="categorias ">
        <router-link to="/aplica" class="aplica"><img src="../assets/img/tarjeta_aplica.png" alt="" class="categorias_img"></router-link>
        
        <router-link to="/prensa" class="prensa"><img src="../assets/img/tarjeta_prensa.png" alt="" class="categorias_img "></router-link>
        <router-link to="/contacto" class="contacto"><img src="../assets/img/tarjeta_contacto.png" alt="" class="categorias_img "></router-link>
      </div>
    </div>
  </div>
</template>
<style scoped>
.content{
  overflow: hidden;
}
.cielo{
  background: url("../assets/img/cielo.png");
  background-size: cover;
  height: 45vh;
  display: flex;
  justify-content: center;
}
.cielo_img{
  max-width: 900px;
  padding: 2em 0;

}
.flex-start{
  align-items: flex-start;
}
.agua{
  background: url("../assets/img/mar.png");
  background-size: cover;
  background-position: center;
  height: 45vh;
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
  left: 1em;
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
  grid-template-columns: 1fr ;
  padding:5em 1em;
 
  
}
.aplica{
  
  transform: rotate(-15deg);
  position: relative;
}
.aplica img{
  position: absolute;
  top: -8em;
  left: 1em;
}
.prensa{
  transform: rotate(5deg);
  padding: 4em;
}
.contacto{
  transform: rotate(40deg);
  padding: 2em;
  
}
@media (min-width: 768px) {
  
  .container_puerta {
  
  bottom: -25vh;
  left: inherit;
  

}
  .categorias{
    grid-template-columns: 1.5fr 1fr;
    max-width: 1200px;
    margin: 0 auto;
    gap: 5em;
    
  }
  .categorias_img{
    max-width: 300px;
  }
  .prensa{
    padding: 1em;
  }
}
</style>
