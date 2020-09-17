<template>
  <div class="card" @click="setActiveDragon" >
    <img class="card-img-top" :src="dragonProp.imgUrl">
    <div class="card-body">
      <h4 class="card-title">{{dragonProp.name}}</h4>
      <p class="card-text"></p>
    </div>
  </div>
</template>

<script>
export default {
  name: "dragon-comp",
  props: [
    "dragonProp"
  ],
  mounted(){
    
  },

  methods:{
setActiveDragon(){
  this.$store.dispatch("setActiveDragon",this.dragonProp._id)
}
  },

}
</script>

<style scoped>

  .card {
    max-width: 25vw;
  }

</style>