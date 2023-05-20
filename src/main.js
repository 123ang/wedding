import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { createI18n } from 'vue-i18n'
import en from './locales/en.json'
import cn from './locales/cn.json'
import my from './locales/my.json'



const messages = {
  en,
  cn,
  my
  
}


const i18n = createI18n({
  legacy: false,
  locale: store.state.language,
  messages
})


createApp(App)
  .use(store)
  .use(i18n)
  .use(router)

  .mount('#app')