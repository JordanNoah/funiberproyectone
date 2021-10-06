import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userInformation: localStorage.getItem('userInformation') || null,
    dataTable :[]
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
    },
    chargeDataTable(state){
      state.dataTable = []
      axios.get('/rooms').then((res)=>{console.log(res.data);if (res.status == 200) {state.dataTable = res.data}});
    },
    updatedRoomStatus(state,index){
      state.dataTable[index].params.confirmation = 1
    },
    getRole(){
      console.log()
    }
  },
  actions: {
  },
  modules: {
  }
})
