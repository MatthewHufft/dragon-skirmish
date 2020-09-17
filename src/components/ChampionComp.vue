<template>
  <div class="card" @click="setActiveChampion" >
    <img class="card-img-top img-fluid" :src="championProp.imgUrl">
    <div class="card-body">
      <h4 class="card-title">{{championProp.name}}</h4>
      <p class="card-text"></p>
    </div>
  </div>
</template>

<script>
export default {
  name: "champion-comp",
  props: [
    "championProp"
  ],
  mounted(){
    
  },

  methods:{
    setActiveChampion(){
    this.$store.dispatch("setActiveChampion",this.championProp._id)
}
  },

}
</script>

<style scoped>
.card {
    max-width: 25vw;
    min-height: 25vh;
  }
</style>