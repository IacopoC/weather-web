<script>
import GetLocation from "@/components/weather/GetLocation.vue";
export default {
  name: "BannerHero",
  components: { GetLocation },
  data() {
    return {
      latitude: null,
      longitude: null,
      locationError: null
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
    <h1 class="display-5 pt-5 fw-bold text-body-emphasis head-text">Welcome to Weather Web!</h1>
    <div class="col-lg-6 mx-auto">
      <p class="lead pt-3">Weather for your location and other info about weather forecast.</p>
      <p class="lead mb-4">Discover a list of <a class="text-white" href="/#:~:text=quote">quotes</a> and <a class="text-white" href="/#:~:text=genres">movies</a> about weather!</p>
      <i class="bi bi-three-dots"></i>
      <GetLocation @location-error="onLocationError"></GetLocation>
      <div v-if="locationError">
        <p>Geolocation is not supported.</p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
 .head-text {
   font-size: 3em;
   background: -webkit-linear-gradient(rgb(0,0,255), 	rgb(30,144,255));
   background-clip: text;
   -webkit-background-clip: text;
   -webkit-text-fill-color: transparent;
 }
</style>