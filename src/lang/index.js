import Vue from "vue";
import VueI18n from "vue-i18n";
import en from './en.json';
import es from './es.json';

Vue.use(VueI18n)

const message = {
    en:en,
    es:es
}

const i18n = new VueI18n({
    locale: 'en',
    messages:message
})

if (module.hot) {
  module.hot.accept(['./en', './es'], function () {
    i18n.setLocaleMessage('en', require('./en').default)
    i18n.setLocaleMessage('es', require('./es').default)
  })
}

export default i18n