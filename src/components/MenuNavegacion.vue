
<script>
export default{
    props:["linkUrl"],


    
}
</script>
<template>
    <div class="menu max-width">
        <div class="menu_back"><router-link :to="{name: linkUrl}"><img src="/img/tarjeta_back.png" alt="" class="menu_back_img"></router-link></div>
        <div class="menu_home"><router-link to="/"><img src="/img/tarjetas_inicio.png" alt="" class="menu_home_img"></router-link></div>
    </div>
</template>
<style lang="scss" scoped>
.menu{
 display: flex;
 justify-content: space-between;
 gap: 8em;
}
@media (min-width:768px) {
    .menu{
        gap: 20em;
    }
}
</style>