<script setup>
import { ref, watch } from 'vue'
import { useScroll } from '@vueuse/core'
import LayoutNavigationSmall from '/src/views/Layout/LayoutNavigationSmall.vue'

const { y } = useScroll(window)
</script>

<template>
    <div class="app-sticky" :class="{ show: y > 142 }">
        <div>
            <LayoutNavigationSmall />
        </div>
    </div>
</template>


<style scoped lang="scss">
.app-sticky {

    width: 100%;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 999;
    background-color: #fff;
    
    transform: translateY(-200%);
    opacity: 0;

    &.show {
        transition: all 0.3s linear;
        transform: none;
        opacity: 1;

    }

    @media screen and (min-width:1px) and (max-width:768px) {
.app-sticky{
  
        display: block;
}

  &.show {
    display: block;
    

}

    }
}
</style>