<template>
    <div class="prueba">
        <h1>hola que ases</h1>
    </div>
</template>
<style lang="scss" scoped>
.prueba{
    width: 200px;
    height: 50px;
    background-color: red;
    margin: 5em;
    @include mobile (){
        background-color: rgb(0, 251, 255);
        
    }
    @include tablet (){
        background-color: rgb(255, 132, 0);
        
    }
    @include tablet-grande (){
        background-color: rgb(0, 0, 255);
    }
    @include laptop (){
        background-color: green;
    }
   
    @include desktop (){
        background-color: yellow;    }
}
</style>