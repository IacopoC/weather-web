<script>
import GetLocation from "@/components/weather/GetLocation.vue";
export default {
  name: "BannerHero",
  components: { GetLocation },
  data() {
    return {
      latitude: null,
      longitude: null,
    }
  },
  methods: {
    onLocationError(error) {
      this.locationError = error;
    },
  }
}
</script>

<template>
  <div class="px-4 pt-5 mt-5 text-center">
    <h1 class="display-5 pt-5 fw-bold text-body-emphasis">Welcome to Weather Web!</h1>
    <div class="col-lg-6 mx-auto">
      <p class="lead pt-3">Weather for your location and other info about weather forecast.</p>
      <p class="lead mb-4">Discover a list of <a class="text-white" href="#weatherquotes">quotes</a> and <a class="text-white" href="#weathermovies">movies</a> about weather!</p>
      <i class="bi bi-three-dots"></i>
      <GetLocation @location-error="onLocationError"></GetLocation>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>