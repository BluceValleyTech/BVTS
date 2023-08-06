<script setup>
import { scrollTo } from 'vue-scrollto';
import {ref} from 'vue';
const scrollToSection = ref(null);

const scrollToComponent = (sectionId) => {
  scrollTo(`#${sectionId}`, {
    // offset: -100,
    duration: 500,
    easing: 'linear',  //線性（linear）、彈跳（bounce）、彈性（elastic） 緩慢easeInOutCubic
  });
};

</script>


<template>
    <div id="WebDesignService" class="service-items">
        <div class="service-items-content">
            <h2>網頁設計服務</h2> <!--紅心符號註解-->
        </div>
        <ul>
            <li>
                <i class="bi bi-file-earmark"></i>
                <p>套版網頁</p>
            </li>
            <li>
                <i class="bi bi-pencil-square"></i>
                <p>客製化網頁</p>
            </li>
            <li>
                <i class="bi bi-browser-edge"></i>
                <p>一頁式網頁</p>
            </li>
        </ul>
        <div class="service-items-connect">
            <p> <a @click="scrollToComponent('Portfolio')">點我介紹內容</a></p>
        </div>
    </div>
</template>


<style scoped lang="scss">
* {
    padding: 0px;
    margin: 0px;
    box-sizing: border-box;
}

.service-items {
    border-top: 3px solid #e4e4e4;
    min-width: 300px;
    background-color:#cce6ff ;
    display: flex;
    padding: 10px 100px;
    align-items: center;
    flex-direction: column;
    
    

    .service-items-content {

        h2 {
            color: goldenrod;
            font-weight: 600;
           
        
        }
        
    }

    ul {
        margin-top: 10px;
        width: 100%;
        display: flex;
        justify-content: space-between;
        list-style: none;
        font-weight: 600;
        font-size: 1.5em;
        max-width: 70%;

        li {
            display: flex;
            flex-direction: column;
            
            color: goldenrod;
            text-align: center;
            align-items: center;
            i{
                flex-grow: 1;
                font-size: 1.5em;
                background-color:#cce6ff ;
                
            }
            p{
                background-color: darkblue;
                border-radius: 5px;
                width: max-content;
            }
            

        }
    }

    .service-items-connect{
       
            margin-top:30px;
            display: flex;
            flex-grow: 1;
            width: 100%;
            justify-content: center;
            border-radius: 10px;
            

        p{
            a{
                text-decoration: none;
                font-weight: 600;
                font-size: 1.5em;
                background-color: #222222;
                color: #ffffff;
                border-radius: 5.5px;
                &:hover{
                    color:goldenrod ;
                }
            }
        }
        
    }
}

@media screen and (max-width:768px){
    .service-items ul{
        flex-direction: column;
       
        li{
            background-color:#cce6ff ;
     
    }
    }

    @media screen and (min-width:1px) and (max-width:444px){
        .service-items{
            padding: 10px 0px;
        }
}

}
</style>