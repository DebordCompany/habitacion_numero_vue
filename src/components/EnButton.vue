<template>
    <div class="container">
        <div class="container_img">
            <img src="/img/membrete.svg" alt="" width="100%" height="auto">
        </div>
        
        <div class="container_position">
            <img src="/img/pomo.png" alt="" class="container_position_img">
            <div class="container_position_button"><p></p></div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.container{
    position: relative;
    margin: 0;
    
}
.container_position{
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    
}
.container_img img{
    display: block;
}
.container_position_img{
    width: 20%;
    filter: drop-shadow(1px 1px 5px  rgba(0, 0, 0, 0.382));
    margin: 0;
}

</style>