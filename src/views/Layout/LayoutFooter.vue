<script setup>


</script>

<template>
    <footer>
       <div class="footer">
        <div class="foot-text">
            <img src="/src/images/LogoHead.jpg">
            <p>歡迎與我們聯繫討論
                <br>網頁都是用代碼編成<br>客製化程度配合度極高
            </p>
        
            
        </div>
            <div class="footer-content">
                Copyright &#169; BVTS RIGHTS RESERVED
            </div>
        </div>
    </footer>
</template>

<style scoped lang="scss">
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}


.footer{
    padding: 100px 0px 0px 0px;
    flex-wrap: 1;
    font-size: 14px;
    font-weight: 600;
    background-color: #cce6ff;
    .foot-text{
        
        display: flex;
        justify-content:center;
        align-items: center;
        
        
        font-weight: 600;
        p{
        

        font-size: 1.5em;
        flex-wrap: wrap;
        letter-spacing: 5px;
        line-height: 1.6;
        color:goldenrod;

       
        }
        img{
            
            width: 300px;
            height: 200px;
        }
    }
    .footer-content{
        display: flex;
        justify-content: center;
        padding: 50px 0px 0px 0px;
        
    }

    
}




@media screen and (max-width:400px) {
    .foot-text{
       flex-direction: column;
    }

    
}


</style>