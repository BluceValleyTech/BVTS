<script setup>

</script>
<template>
    <div class="banner">
        <div id="banner" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#banner" data-bs-slide-to="0" class="active"></button>
                <button type="button" data-bs-target="#banner" data-bs-slide-to="1"></button>
                <button type="button" data-bs-target="#banner" data-bs-slide-to="2"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="/src/images/banner1.jpg" class="d-block" style="width:100%">
                    <div class="carousel-caption">
                        <h3>RWD網頁</h3>
                        <p></p>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src="/src/images/banner2.jpg" class="d-block" style="width:100%">
                    <div class="carousel-caption">
                        <h3>VUE3.js</h3>
                        <p></p>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src="/src/images/banner3.jpg" class="d-block"
                        style="width:100%">
                    <div class="carousel-caption carousel-captio3">
                        <h3>客製化</h3>
                        <p></p>
                    </div>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#banner" data-bs-slide="prev">
                <span class="carousel-control-prev-icon"></span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#banner" data-bs-slide="next">
                <span class="carousel-control-next-icon"></span>
            </button>
        </div>
    </div>
</template>
<style scoped lang="scss">
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-weight: 600;
}

.banner {
    background-color:#cce6ff ;
    border: 1px solid #fff;
    
    


    img {
       
        width: 100%;
        height: 300px;
        
    }

    .carousel-inner {

        
        min-width: 300px;
        height: 300px;
        overflow: hidden;
        // position: relative; 
        
        
        

        .carousel-item {
            width: 100%;
            height: 300px;
            transition: transform 0.5s;
            // position: absolute;
        }
    }

    
}


.carousel-captio3{
        color:#FF6F61;
    }
</style>