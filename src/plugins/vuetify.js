import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import en from 'vuetify/lib/locale/en';
import es from 'vuetify/lib/locale/es';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
      options: {
        customProperties: true,
      },
    themes: {
      light: {
        primary: '#2196F3',
        secondary: '#444444',
        third:'#757575',
        accent: '#FF5C00',
        background:'#FFFFFF',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107',
      },
      dark: {
        primary: '#0088CE',
        secondary: '#444444',
        third:'#757575',
        accent: '#FF5C00',
        background:'#31313C',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107',
      }
    },
  },
  lang: {
    locales: {en,es},
    current:'en'
  },
  icons: {
    iconfont: 'fa',
  },
});
