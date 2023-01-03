<template>
    <div class="prueba">

    </div>
</template>
<style lang="scss" scoped>
.prueba{
    width: 200px;
    height: 50px;
    background-color: red;
    margin: 5em;
    @include mobile (){
        background-color: blue;
    }
    @include tablet (){
        background-color: green;
    }
    @include latop (){
        background-color: pink;
    }
    @include desktop (){
        background-color: yellow;    }
}
</style>