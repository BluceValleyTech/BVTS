import { createI18n } from 'vue-i18n'
import enMessages from '/src/locales/en.js'
import zhMessages from '/src/locales/zh.js'

const i18n = createI18n({
    locale:'zh',
    messages: {
        en: enMessages,
        zh: zhMessages
    },

})

export {i18n}