<template>
  <div class="card" >
    <img class="card-img-top" width="50px" :src="championProp.imgUrl">
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

  },

}
</script>

<style>

</style>