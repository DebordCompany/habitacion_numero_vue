
<template>
    <div class="titulo">
         <p class="titulo_p">{{texto}}</p>
    </div>
   
</template>
<script>
export default{
    props: ['texto']
}
</script>
<style scoped>
.titulo{
 width: 100%;
 display: flex;
 justify-content: center;
 padding: var(--padding-gap);
 
}
.titulo_p{
        font-size: 1.7em;
        transform: rotate(180deg);
        font-weight: 700;
    }
</style>