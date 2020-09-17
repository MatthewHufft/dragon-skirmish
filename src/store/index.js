import Vue from 'vue'
import Vuex from 'vuex'
import { Api } from '../Services/AxiosService.js'
import router from '../router/index.js'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    dragons: [],
    champions: [],
    activeDragon: {},
    activeChampion: {}
  },
  mutations: {
    setDragons(state, dragons){
      state.dragons = dragons
    },
    setChampions(state , champions){
      state.champions = champions
    },
    setActiveDragon(state,dragon){
      state.activeDragon=dragon
    }
  },
  actions: {

    async getAllDragons({ commit }){
      try {
        let res = await  Api.get("dragons")
        commit("setDragons", res.data)
      } catch (error) {
        console.error(error);
      }
    },
    async getAllChampions({ commit }){
      try {
        let res = await  Api.get("champions")
        console.log(res)
        commit("setChampions", res.data)
      } catch (error) {
        console.error(error);
      }
    },
    async setActiveDragon({commit},dragonId){
      try {
        let res=await Api.get("dragons/"+dragonId)
        console.log(res)
        commit("setActiveDragon",res.data)
        
      } catch (error) {
        console.log(error)
      }
    }
  },

  modules: {
  }
})
