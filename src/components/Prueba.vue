<template>
    <h1 class="h1">hola mundo</h1>
</template>
<style lang="scss" scoped>


.h1{

    color: red;
    @include tablet(){
        color: blue;
    }
}
</style> 