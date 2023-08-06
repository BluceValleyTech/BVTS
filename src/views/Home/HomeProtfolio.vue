<script setup>
import {ref} from 'vue';
const showHiddenText = '響應式改變'
const isShow = ref(false);

const showText = () => {
    isShow.value = true;
};

const hideText = () => {
    isShow.value = false;
};
</script>

<template>
    <div class="Protfolio">
        <div class="containerList">
            <ul>
                <li @mouseover="showText()" @mouseout="hideText()">
                    <span class="text">RWD網頁</span>
                    <span class="hidden-text" v-if="isShow">{{showHiddenText}}</span>
                </li>
                <li @mouseover="showText()" @mouseout="hideText()">
                    <span class="text">一頁式網頁</span>
                    <span class="hidden-text" v-if="isShow">{{showHiddenText}}</span>
                </li>
                <li @mouseover="showText()" @mouseout="hideText()">
                    <span class="text">客製化</span>
                    <span class="hidden-text" v-if="isShow">{{showHiddenText}}</span>
                </li>
                <li @mouseover="showText()" @mouseout="hideText()">
                    <span class="text">VUE3</span>
                    <span class="hidden-text" v-if="isShow">{{showHiddenText}}</span>
                </li>
            </ul>
            <div class="containerWork">
                <img class="valueMc" src="/src/images/web_640.png" />
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}



.text {
    font-weight: 600;
    font-size: 1.5em;
    letter-spacing: 1;
}

.Protfolio {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: none;
    width: 100%;

    //     align-items: center;
    //     text-align: center;
    .containerList {
        border-top: 3px solid #e4e4e4;
        background-color: #cce6ff;
        flex-grow: 1;
        display: flex;
        flex-wrap: none;
        justify-content: start;
        flex-direction: row;
        align-items: center;
        padding: 1px 100px;
        text-align: center;

        ul {
            min-width: 300px;
            width: 100%;
            list-style: none;
            font-weight: 600;
            font-size: 1.5em;
            letter-spacing: 1;

            li {
                &:hover {
                    color: blue;
                    cursor: pointer;

              
                }
            }
        }

        .containerWork {
            min-width: 300px;
            width: 100%;
            height: 300px;

            img {
                width: 100%;
                height: 300px
            }
        }
    }
}

@media screen and (max-width:768px) {

    .Protfolio {
        .containerList {
            padding: 0;
            flex-direction: column;
        }

        ;
    }
}
</style>