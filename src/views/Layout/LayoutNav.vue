<script setup>
import SelectLanguage from '/src/views/Element/SelectLanguage.vue'
import { useHead } from '@vueuse/head';

</script>

<template>
    <nav class="navigation">
            <a><router-link class="logo" to="/">{{ $t('bluceValley') }}</router-link></a>
        <ul>
            <li>
                <img src="/src/images/service.png" />
                <router-link to="/">{{ $t('service') }}</router-link>
            </li>
            <li>
                <img src="/src/images/introduction.png" />
                <router-link to="/">{{ $t('introduction') }}</router-link>
            </li>
            <li>
                <img src="/src/images/contact.png" />
                <router-link to="/">{{ $t('contactUs') }}</router-link>
            </li>
        </ul>
        <div class="language">
            <img src="/src/images/internet.ico" />
            <SelectLanguage class="select-language" />
        </div>
        <!-- <div class="search">
            <input type="text" placeholder="Search" />
            <i class="fi fi-rr-search"></i>
        </div> -->
    </nav>




</template>


<style scoped lang='scss'>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

}

.navigation {
    // position: absolute;
    // left: 0;
    // top: 0;
    padding: 15px 100px;
    width: 100%;
    // padding: 15px 109px ;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 10;
    background-color: #cce6ff; //背景色
    

    a {
        text-decoration: none;
    }
    .logo{
        position: relative;
        font-size: 1.5em;
        color: black !important;
        font-weight: 600;
    }

    ul{
        
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        margin: 10px auto;
        
       

        li{
            
            list-style: none;
            margin: 0 20px;
            a{
                letter-spacing: 1px;
                color:black;
                font-weight: 600;
                margin-left: 5px;
            }
            a:hover{
                color:#0000FF;
            }
        }
    }
    .language{
        display: flex;
        // position: relative;
        // margin-left:auto ;
        margin-right: 10px;
        
        .select-language{
            width: 100px;
        }   

    }

    .search{
        position: relative;
        width: 200px;
        height: 44px;
     
        

        input{
            position: absolute;
            top:0;
            left:0;
            width: 100%;
            height: 100%;
            background-color: transparent;
            outline:none;
            border:1px solid #fff;
            border-radius: 5px;
            padding: 0 10px 0 45px;
            display: flex;
        

            
           
           
        }
        ::placeholder{
                color:rgba(0,0,0,0.5);
                font-weight: 600;
                
            }

            i{
                position: absolute;
                
                top:50%;
                transform: translateY(-50%);
                left:10px;
                color:black;
                border-right: 1px solid #fff;
                padding-right: 10px;
                
                
               

            }

    }

}


@media screen and (max-width:1005px) {
    
    .navigation{
    
        flex-direction: column;
    }
}

@media screen and (min-width:1px) and (max-width:696px) {
    .navigation ul{
        
        flex-direction: column;
    }
}

@media screen and (min-width:1px) and (max-width:415px) {
    .navigation{
    padding: 15px 0px;
    }
}

</style>