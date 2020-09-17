<template>
  <div class="container-fluid bg-dark">
      <div class="row ">
        <div class="col my-2">
          
        <button class="btn btn-danger" v-if="activeDragon && activeChampion" @click="startBattle">FIGHT</button>
          
      </div>
        </div>
    <div class="row">
      <div class="col-6 ">
        <DragonComp v-for="dragon in dragons" :key="dragon._id" :dragonProp="dragon" />
      </div>
      <div class="col-6">
        <ChampionComp v-for="champion in champions" :key="champion._id" :championProp="champion" />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import DragonComp from "../components/DragonComp"
import ChampionComp from "../components/ChampionComp"

export default {
  name: 'Home',
  mounted(){
    this.$store.dispatch("getAllDragons") ,
    this.$store.dispatch("getAllChampions")
  },
  components: {
    DragonComp,
    ChampionComp
  },

  computed:{
    dragons(){
      return this.$store.state.dragons
    },
    champions(){
      return this.$store.state.champions
    },
    activeDragon(){
      return this.$store.state.activeDragon
    },
    activeChampion(){
      return this.$store.state.activeChampion
    }
  },

  methods: {
    startBattle(){
      this.$store.dispatch("startBattle", {champion: this.activeChampion.id, dragon: this.activeDragon.id})
    }
  }

}
</script>
