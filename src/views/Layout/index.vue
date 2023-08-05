<script setup>
import LayoutHeader from '/src/views/Layout/LayoutHeader.vue'
import LayoutNav from '/src/views/Layout/LayoutNav.vue'
import LayoutFooter from '/src/views/Layout/LayoutFooter.vue';
import navigation from '/src/views/Layout/navigation.vue'
import LayoutNavigationSmall from '/src/views/Layout/LayoutNavigationSmall.vue'
import test from '/src/views/Layout/test.vue'
import LayoutNavigationSmallMove from '/src/views/Layout/LayoutNavigationSmallMove.vue'
</script>


<template>
<navigation/>
<LayoutNav/>
<LayoutHeader/>
<LayoutNavigationSmall/>
<RouterView />
<LayoutFooter/>
<LayoutNavigationSmallMove/>
</template>


<style scoped lang="scss">

</style>