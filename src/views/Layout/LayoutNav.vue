<script setup>
import SelectLanguage from '/src/views/Element/SelectLanguage.vue'
import { scrollTo } from 'vue-scrollto';
import { useHead } from '@vueuse/head';
import {ref} from 'vue';


const scrollToSection = ref(null);

const scrollToComponent = (sectionId) => {
  scrollTo(`#${sectionId}`, {
    // offset: -100,
    duration: 200,
    easing: 'linear',  //線性（linear）、彈跳（bounce）、彈性（elastic） 緩慢easeInOutCubic
  });
};

</script>

<template>
    <nav class="navigation">
        <div class="logo-merge">
            <div class="logo">
                <img src="/src/images/LogoHead.jpg" />
            </div>
            <a><router-link class="logo-text" to="/">{{ $t('bluceValley') }}</router-link></a>
        </div>
        <ul>
            <li>
                <img src="/src/images/service.png" />
                <a @click="scrollToComponent('WebDesignService')">{{ $t('webDesign') }}</a>
            </li>
            <li>
                <img src="/src/images/introduction.png" />
                <a @click="scrollToComponent('Introduce')">{{ $t('introduction') }}</a>
            </li>
            <li>
                <img src="/src/images/contact.png" />
                <a @click="scrollToComponent('Contactus')">{{ $t('contactUs') }}</a>
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
    border-top: 3px solid #e4e4e4;
    min-width: 300px;
    padding: 15px 100px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 10;
    background-color: #cce6ff;


    .logo-merge {
        display: flex;



        .logo-text {
            font-weight: 600;
            color: black;
            font-size: 2em;
            margin-left: 10px;
            letter-spacing: 1px;
        }

        a {
            text-decoration: none;
        }

        .logo {
            max-width: 100px;
            max-height: 100px;

            img {
                max-width: 100px;
                max-height: 50px;
            }
        }

    }

    ul{
        
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        margin: 10px auto;
        li {
            list-style: none;
            margin: 0 20px;
            a{
                text-decoration: none;
                letter-spacing: 1px;
                color: black;
                font-weight: 600;
                margin-left: 5px;
                cursor:pointer;
                
            }
            a:hover {
                color: #0000FF;
            }
        }
    }

    .language {
        display: flex;
        // position: relative;
        // margin-left:auto ;
        margin-right: 10px;

        .select-language {
            width: 100px;
        }

    }

    .search {
        position: relative;
        width: 200px;
        height: 44px;



        input {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: transparent;
            outline: none;
            border: 1px solid #fff;
            border-radius: 5px;
            padding: 0 10px 0 45px;
            display: flex;





        }

        ::placeholder {
            color: rgba(0, 0, 0, 0.5);
            font-weight: 600;

        }

        i {
            position: absolute;

            top: 50%;
            transform: translateY(-50%);
            left: 10px;
            color: black;
            border-right: 1px solid #fff;
            padding-right: 10px;




        }

    }

}


@media screen and (max-width:1199px) {

    .navigation {

        flex-direction: column;


    }
}

@media screen and (min-width:1px) and (max-width:750px) {
    .navigation ul {

        flex-direction: column;
    }
}

@media screen and (min-width:1px) and (max-width:415px) {
    .navigation {
        padding: 15px 0px;
    }
}
</style>