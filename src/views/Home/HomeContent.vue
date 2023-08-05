<script setup>
import { useHead } from '@vueuse/head';
const setup = () => {
    const head = useHead();
    head.title = '網頁設計';
    head.meta = [
        { name: 'description', content: '網頁設計' },
        { name: 'keywords', content: '網頁設計, 藍谷科技, RWD' },
    ];

    return {

    };
};
</script>


<template>
    <div class="carousel-item">
  <img decoding="async" src="/src/images/bluevalley.png" class="d-block" style="width:100%">
  <div class="carousel-caption">
        <h3>第一张图片描述标题</h3>
        <p>第一张图片描述内容显示在这里！！！</p>
  </div>
</div>
</template>


<style scoped lang="scss">



</style>