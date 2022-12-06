<template>
  <div class="puerta">
    <img :src="imagen" alt="" class="puerta_a" />
  </div>
</template>
<script>
export default {
  props: ["imagen"],
};
</script>
<style scoped>
.puerta {
  padding: var(--padding-gap);
  display: flex;
  justify-content: center;
}
.puerta_a {
  cursor: url("../assets/llave_raton.png"), auto;
  max-width: 250px;
}
</style>
