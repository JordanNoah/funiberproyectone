import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userInformation: localStorage.getItem('userInformation') || null,
  },
  mutations: {
    setUserInformation(state, userInformation) {
      state.userInformation = userInformation;
      localStorage.setItem(
          "userInformation",
          userInformation
        );
    },
    removeUserInformation(state) {
      state.userInformation = null
      localStorage.removeItem('userInformation');
    },
    changeLanguaje(state, lang) {
      state.languajeSelected = lang
      state.langFilter = state.languajes[lang]
      localStorage.setItem('languaje',lang)
    }
  },
  actions: {
  },
  modules: {
  }
})
