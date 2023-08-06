

<template>
  <div class="custom-select">
  <el-select v-model="ChangLanguageStore.select" placeholder="SelectLanguage"
    @change=ChangLanguageStore.changeLanguge(ChangLanguageStore.select) size="small">
    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"  popper-class="horizontal-select" />
  </el-select>
  </div>
</template>
  
<script setup>
import { useChangeLangugeStore } from '/src/stores/changeLanguage.js'
import { ref ,computed } from 'vue'
const ChangLanguageStore = useChangeLangugeStore()
ChangLanguageStore.select = 'zh'


const value = ref('')
const options = [
{
    value: 'zh',
    label: '繁體中文',

  },
  {
    value: 'en',
    label: 'English',
  },
 
]


</script>


<style scoped>

.custom-select{
  
  width: 100px; 
  

}
</style>
