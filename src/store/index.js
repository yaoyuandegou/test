import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    imgLoadFinish:0,
  },
  mutations: {
    addImgLoadNum(state){
      state.imgLoadFinish++;
    },
  },
  actions: {
  },
  modules: {
  }
})
