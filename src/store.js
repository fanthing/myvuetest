import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    count: 0,
    tabbarHeight: 53,
    headerHeightinfo: 20,
    headerHeight: 62
  },
  mutations: {
    increment(state) {
      state.count++
    }
  },
  getters: {
    tabbarHeight: state => {
      return state.tabbarHeight;
    },
    headerHeightinfo: state => {
      return state.headerHeightinfo;
    },
    headerHeight: state => {
      return state.headerHeight;
    }
  }
})