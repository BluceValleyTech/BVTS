<script setup>
import { ref, watch } from 'vue'
import { useScroll } from '@vueuse/core'
import LayoutHeader from '/src/views/Layout/LayoutHeader.vue'

const { y } = useScroll(window)
</script>

<template>
    <div class="app-sticky" :class="{ show: y > 142 }">
        <div>
            <LayoutHeader />
        </div>
    </div>
</template>


<style scoped lang="scss">
.app-sticky {
    font-family: Arial, sans-serif;
    width: 100%;
    height: 80px;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 999;
    background-color: #fff;
    border-bottom: 1px solid #e4e4e4;
    transform: translateY(-200%);
    opacity: 0;

    &.show {
        transition: all 0.3s linear;
        transform: none;
        opacity: 1;

    }


    @media screen and (max-width:768px) {
    
        .app-sticky{
      
            display: none;
    }

      &.show {
        display: none;
        

    }
}

}
</style>