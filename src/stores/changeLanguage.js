import { defineStore} from 'pinia'
import { ref, computed,inject } from 'vue'
import {i18n} from '/src/locales/index.js'


export const useChangeLangugeStore = defineStore('changeLangugeStore1', () => {

    
    const select = ref('')
    // const injectedi18n = inject('i18n')
   
    const changeLanguge = (val) => {
        i18n.global.locale = val
        
    }


    return { select , changeLanguge  }
}) 