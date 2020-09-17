import Vue from 'vue'
import Vuex from 'vuex'
import router from "../router/index.js"
import { Api } from '../Services/AxiosService.js'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    dragons: [],
    champions: [],
    fightData: null,
    activeDragon: null,
    activeChampion: null
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
    },
    setActiveChampion(state, champion) {
      state.activeChampion = champion
    },
    setFight(state,fightData){
      state.fightData=fightData
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
        commit("setActiveDragon",res.data)
      } catch (error) {
        console.log(error)
      }
    },

    async setActiveChampion({ commit }, championId) {
      try {
        let res = await Api.get("champions/" + championId)
        commit("setActiveChampion", res.data)
        console.log(res)
      } catch (error) {
        console.error(error);
      }
    },

    async startBattle({commit}, gameData){
      let res = await Api.post("games/", gameData)
      router.push({name: "Fight", params: {gameId: res.data.id}})
      console.log(res)
      commit("setFight",res.data)
    },
async getDragonById({commit}){

  }
  
}
})
