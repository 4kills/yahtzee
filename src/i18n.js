import Vue from 'vue'
import VueI18n from 'vue-i18n'
import getBrowserLocale from "@/util/locale-detector.js"

Vue.use(VueI18n)

function initialLocale() {
  const browserLocale = getBrowserLocale({countryCodeOnly: true})
  const supportedLocales = ["en", "de"]

  if (!supportedLocales.includes(browserLocale)) return process.env.VUE_APP_I18N_LOCALE || "en"; 
  return browserLocale; 
}

function loadLocaleMessages () {
  const locales = require.context('./locales', true, /[A-Za-z0-9-_,\s]+\.json$/i)
  const messages = {}
  locales.keys().forEach(key => {
    const matched = key.match(/([A-Za-z0-9-_]+)\./i)
    if (matched && matched.length > 1) {
      const locale = matched[1]
      messages[locale] = locales(key)
    }
  })
  return messages
}

export default new VueI18n({
  locale: initialLocale(),
  fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || 'en',
  messages: loadLocaleMessages()
})
