<script setup>
import SelectLanguage from '/src/views/Element/SelectLanguage.vue'

import { useHead } from '@vueuse/head';
import {ref} from 'vue';

import { scrollTo } from 'vue-scrollto';
import { useRouter } from 'vue-router';

// 獲取Vue Router的實例
const router = useRouter();

// 點擊導航欄項目時滾動到目標組件的位置
const scrollToComponent = (componentName) => {
  // 使用Vue Router的`resolve`方法找到目標組件對應的路由路徑
  const route = router.resolve({ name: componentName });
  if (route && route.href) {
    // 如果找到路由路徑，則滾動到對應組件的位置
    scrollTo(route.href, {
      offset: -100, // 調整滾動後的位置，可以根據需要自行調整
      duration: 800, // 滾動持續時間
      easing: 'easeInOutCubic', // 滾動動畫效果
    });
  }
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
                <a @click="scrollToComponent(WebDesignService)">{{ $t('webDesign') }}</a>
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