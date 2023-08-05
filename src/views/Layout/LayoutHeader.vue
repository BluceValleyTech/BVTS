<script setup>
import { ref } from 'vue';
const isDropdownOpenDesign = ref(false)
const isDropdownOpenInfo = ref(false)
const showDropdownDesignMenu = () => {
    isDropdownOpenInfo.value = false
    isDropdownOpenDesign.value = true;
}
const showDropdownInfoMenu = () => {
    isDropdownOpenDesign.value = false
    isDropdownOpenInfo.value = true
}

const hideDropdownDesignMenu = () => {
    isDropdownOpenDesign.value = false
}

const hideDropdownInfoMenu = () => {
    isDropdownOpenInfo.value = false
}
</script>

<template>
    <header class="header-app">
        <div class="container-top">
            <h1 class="logo">
                <router-link to="/">{{ $t('bluceValley') }}</router-link>
            </h1>
            <ul class="app-header-nav">
                <li class="home">
                    <a tabindex="2" class="menu-title" :title="$t('webdesign')" @mouseover="showDropdownDesignMenu">{{
                        $t('webdesign') }}</a>
                </li>
                <li class="home">
                    <a tabindex="2" class="menu-title" :title="$t('information')" @mouseover="showDropdownInfoMenu">{{
                        $t('information') }}</a>
                </li>
            </ul>
        </div>
    </header>


    <div class="window" v-show="isDropdownOpenInfo" @mouseleave="hideDropdownInfoMenu">
        <ul>
            <li>{{ $t('portfolio') }}</li>
            <li>{{ $t('firends') }}</li>
            <li>{{ $t('FB_IG') }}</li>
            <li>{{ $t('additonal') }}</li>
        </ul>
    </div>
    <div class="window" v-show="isDropdownOpenDesign" @mouseleave="hideDropdownDesignMenu">
        <ul>
            <li>{{ $t('onepageweb') }}</li>
            <li>{{ $t('rwd') }}</li>
            <li>{{ $t('publicweb') }}</li>
            <li>{{ $t('Language') }}</li>
        </ul>
    </div>


    <div class="">

    </div>

</template>

<style scoped lang='scss'>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color:black;
    font-weight: 600;
    list-style: none;
    text-decoration: none;
    letter-spacing: 1px;
    
    :hover{
        color: #007bff;
    }
}

.header-app {
    
    padding : 1px 100px;
    border-bottom: 3px solid #e4e4e4;
    display: flex;
    background-color: #cce6ff;
    justify-content: space-between;
    .container-top {
        display: flex;
        flex-grow: 1;
    }

    ul {
        display: flex;
        flex-grow: 1;
        justify-content: center;
        list-style: none;
        li {
            flex-grow: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            text-align: center;
            font-size: 1.5em;

            a {
                margin-left: auto;
                margin-right: auto;

                &:hover {
                    color: #007bff;
                }
            }
        }

    }

    .logo {
        display: flex;
        overflow: hidden;
        width: 100px;
        height: 100px;
        padding-left: 0px;

        a {
            // margin-right: 100px;
            display: flex;
            height: 100%;
            width: 100%;
            text-indent: -99999px;


            // background-attachment: fixed;
            background: url('/src/images/bluevalley.png') no-repeat center;
            background-size: cover;
        }
    }

}


.window {

    background-color: #cce6ff;
    display: flex;
    font-family: Arial, sans-serif;
    // justify-content: space-between;
    width: 100%;

    ul {


        width: 100%;
        display: flex;
        flex-grow: 1;
        padding: 0;



        li {

            display: flex;
            flex-grow: 1;
            justify-content: center;
            text-align: center;
            font-size: 20px;
        }
    }
}
@media screen and (max-width:768px) {
    
    .header-app{
        display: none;
    }
}


</style>