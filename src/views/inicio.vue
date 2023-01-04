<script setup></script>
<template>
  <div class="main">
    <div class="textos">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure quae illum
        possimus qui dolorem. Rem dolore ipsam error itaque laboriosam, aut
        nostrum amet autem porro repudiandae voluptatibus ducimus qui eum nam
        sed explicabo molestiae excepturi sapiente corrupti suscipit. Illo ad,
        voluptates necessitatibus iure fugit temporibus totam incidunt placeat
        impedit quod repudiandae tenetur voluptas quasi cumque dolores qui natus
        eius, enim amet ex accusamus aliquid quidem? Accusantium dolores velit
        modi quam sit possimus quibusdam natus sapiente deleniti laboriosam
        pariatur dicta alias qui aliquid ipsum esse et labore dolore soluta fuga
        voluptatum dolorem, nobis quidem obcaecati? Minima nostrum cumque harum
        quo fugit!
      </p>
    </div>
    <div class="cielo">
      <div class="cielo_img max-width">
        <img src="/img/titulo.png" alt="" />
      </div>
    </div>
    <div class="mar">
      <div class="mar_position max-width">
        <div class="mar_content">
          <router-link to="/meta"
            ><img src="/img/puerta_meta.png" alt=""
          /></router-link>
          <router-link to="/instalaciones"
            ><img src="/img/puerta_instalaciones.png" alt=""
          /></router-link>
          <router-link to="/residencias"
            ><img src="/img/puerta_residencias.png" alt=""
          /></router-link>
        </div>
      </div>
    </div>
    <div class="tierra">
      <div class="tierra_container max-width">
        <router-link to="/aplica"
          ><div class="tarjeta">
            <img src="/img/tarjeta_aplica.png" alt="" class="aplica" /></div
        ></router-link>
        <router-link to="/contacto"
          ><div class="tarjeta">
            <img src="/img/tarjeta_contacto.png" alt="" class="contacto" /></div
        ></router-link>
        <router-link to="/prensa"
          ><div class="tarjeta">
            <img src="/img/tarjeta_prensa.png" alt="" class="prensa" /></div
        ></router-link>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.main {
  overflow: hidden;
}
.textos {
  position: fixed;
  top: 0;
  z-index: -10;
  color: white;
}
.cielo {
  background-image: url("/img/cielo.png");
  background-size: cover;
  width: 100%;
  height: 45vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.mar {
  background-image: url("/img/mar.png");
  background-size: cover;
  width: 100%;
  height: 45vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
 
}
.mar_position {
  position: absolute;
  bottom: 10em;
  padding: 0.5em;
  width: 100%;
  @include mobile() {
    bottom: 7em;
  }
  @include tablet() {
    bottom: 5em;
  }
  @include laptop(){
    bottom: 3em;
  }
  
}
.mar_content {
  display: flex;
  justify-content: center;

  @include tablet() {
    max-width: $mx-tablet;
    margin: auto;
  }
  @include tablet-grande(){
    gap: 2em;
    max-width: $mx-tablet-grande;
  }
}
.tierra {
  background-image: url("/img/suelo.png");
  background-size: cover;
  width: 100%;
  display: grid;
  justify-content: center;
}
.tierra_container {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2em;
  padding: 1em;
  justify-content: center;

  @include tablet() {
    max-width: $mx-tablet;
    margin: auto;
  }
  @include tablet-grande(){
    grid-template-columns: 1fr 1fr;
    max-width: $mx-tablet-grande;
  }
}
.tarjeta {
  position: relative;
  max-width: 80vw;
  align-self: center;
  @include tablet() {
    max-width: $mx-tablet-tarjeta;
  }

}
.aplica {
  padding: 1em;
  transform: rotate(-15deg);
  position: absolute;
  top: -8em;
  @include tablet-grande(){
    top: -5em;
  }
}
.contacto {
  padding: 2em;
  transform: rotate(15deg);
}
.prensa {
  padding: 2em;
  transform: rotate(-45deg);
}
</style>
