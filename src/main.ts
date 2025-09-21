import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createI18n } from 'vue-i18n'
import enUS from './locales/en-GB.json'
import frFR from './locales/fr-FR.json'

const app = createApp(App)


// Type-define 'en-US' as the master schema for the resource
type MessageSchema = typeof enUS

const i18n = createI18n<[MessageSchema], 'fr-FR' | 'en-GB'>({
  locale: 'fr-FR',
  messages: {
    'fr-FR': frFR,
    'en-GB': enUS
  }
})

app.use(router)
app.use(i18n)

app.mount('#app')
