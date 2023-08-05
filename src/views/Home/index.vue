<script setup>
import { createRouter, createWebHistory } from 'vue-router'
import Layout from '/src/views/Layout/index.vue'
import test from '/src/views/Layout/test.vue'
import HomeTeam from '/src/views/Home/HomeTeam.vue'
import HomeContent from '/src/views/Home/HomeContent.vue'
import HomeProtfolio from '/src/views/Home/HomeProtfolio.vue'
import Banner from '/src/views/Home/Banner.vue'

</script>


<template>
    <Banner/>
    <HomeContent />
    <HomeTeam />
    <HomeProtfolio/>
</template>


<style></style>