<script setup>

</script>


<template>
    <div id="Introduce" class="product-desciption">
        <div class="product-desciption-content">
           <h2>工作室介紹</h2>
           <p>
            目前為兩人兼職工作室，專門服務網頁設計、網頁架站，客製化需求配合度高，歡迎與我們合作。
           </p>
        </div>
    </div>

</template>


<style scoped lang="scss">
*{
    
    padding:0px;
    margin: 0px;
    box-sizing: border-box;
}

.product-desciption{
    
    border-top: 3px solid #e4e4e4;
    min-width: 300px;
    background-color: #cce6ff;
    padding:0px 100px;
    display: flex;
    width: 100%;
    justify-content: center;
    .product-desciption-content{
        margin-top:30px ;
        margin-bottom: 30px;
        h2{
            letter-spacing: 1px;
            font-weight: 600;
            text-align: center;
        }

        p{
            letter-spacing: 1px;
            font-weight: 600;
            font-size: 1.5em;
            text-align: start;
        }
    }
}


@media screen and (max-width:424px) {



    .product-desciption{
        padding:0px 0px;

    }



}
</style>