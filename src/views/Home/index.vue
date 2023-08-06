<script setup>
import { createRouter, createWebHistory } from 'vue-router'
import Layout from '/src/views/Layout/index.vue'
import test from '/src/views/Layout/test.vue'
import HomeTeam from '/src/views/Home/HomeTeam.vue'
import HomeContent from '/src/views/Home/HomeContent.vue'
import HomeProtfolio from '/src/views/Home/HomeProtfolio.vue'
import Banner from '/src/views/Home/Banner.vue'
import WebDesignService from '/src/views/Home/WebDesignService.vue'
import Introduce from '/src/views/Home/Introduce.vue'
import Portfolio from '/src/views/Home/Portfolio.vue'
import Contactus from '/src/views/Home/Contactus.vue'

</script>


<template>
    <Banner/>
    <HomeContent />
    
    <WebDesignService/>

    <Introduce/>
    
    <Portfolio/>
    <Contactus/>
    <HomeTeam />
    
</template>


<style></style>