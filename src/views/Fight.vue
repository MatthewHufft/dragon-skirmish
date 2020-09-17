<template>
<div>
<div class="container">
  <div class="row">
    <div class="col-6">{{getFightData.championHp}}</div>
    <div class="col-6">{{getFightData.dragonHp}}</div>
  </div>
</div>
 </div>
</template>

<script>
export default {
computed:{
getFightData(){
  return this.$store.state.fightData
}
},
mounted:{
  getDragonById(){
    this.$store.dispatch("getDragonById")
  },
  getChampionById(){
    this.$store.dispatch("getChampionById")
  }
}
}
</script>

<style>

</style>