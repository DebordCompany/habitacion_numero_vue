<script setup>
import EnButton from "../components/EnButton.vue";
import MenuNavegacionVue from "../components/MenuNavegacion.vue";
</script>
<template>
  <div class="container_install max-width">
    <EnButton />
    <div class="texto">
      <h1>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit mollitia
        ea, cum expedita harum laudantium molestiae quo aliquid, nihil, rem iste
        inventore ipsa nisi possimus? Itaque pariatur dignissimos mollitia rem.
      </h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti
        aspernatur eos, rerum nisi porro veniam unde natus sapiente, ipsam
        repellat obcaecati hic magni eligendi adipisci odit ab ea! Tempora vitae
        dignissimos earum laboriosam non sint cupiditate et labore iusto unde.
        Dolorem, nam qui in impedit accusamus possimus. Blanditiis, velit
        perferendis.
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti
        aspernatur eos, rerum nisi porro veniam unde natus sapiente, ipsam
        repellat obcaecati hic magni eligendi adipisci odit ab ea! Tempora vitae
        dignissimos earum laboriosam non sint cupiditate et labore iusto unde.
        Dolorem, nam qui in impedit accusamus possimus. Blanditiis, velit
        perferendis.
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti
        aspernatur eos, rerum nisi porro veniam unde natus sapiente, ipsam
        repellat obcaecati hic magni eligendi adipisci odit ab ea! Tempora vitae
        dignissimos earum laboriosam non sint cupiditate et labore iusto unde.
        Dolorem, nam qui in impedit accusamus possimus. Blanditiis, velit
        perferendis.
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti
        aspernatur eos, rerum nisi porro veniam unde natus sapiente, ipsam
        repellat obcaecati hic magni eligendi adipisci odit ab ea! Tempora vitae
        dignissimos earum laboriosam non sint cupiditate et labore iusto unde.
        Dolorem, nam qui in impedit accusamus possimus. Blanditiis, velit
        perferendis.
      </p>
    </div>
    <MenuNavegacionVue linkUrl="home" />
  </div>
</template>
<style lang="scss" scoped>
.container_install {
  margin-top: 2em;
  padding: 1em;
}
.texto {
  background: var(--gris);
  padding-left: 2em;
  padding-right: 2em;
  padding-bottom: 2em;
  text-align: justify;
  display: flex;
  flex-direction: column;
  gap: 1em;
  
  font-weight: 600;
}
</style>
