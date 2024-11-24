<script>
export default {
  name: "GetLocation",
  data() {
    return {
      latitude: null,
      longitude: null,
      error: null
    }
  },
  mounted() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
              this.latitude = position.coords.latitude;
              this.longitude = position.coords.longitude;

              this.$emit('location-updated',
                  { latitude: position.coords.latitude, longitude: position.coords.longitude });
            },
            (error) => {
              if (error.code === error.PERMISSION_DENIED) {
                this.error = 'Geolocation access denied.';
              } else {
                this.error = 'Error retrieving location: ' + error.message;
              }
              this.$emit('location-error', this.error);
            }
        );
      } else {
        this.error = 'Geolocation is not supported by your browser.';
        this.$emit('location-error', this.error);
      }
    }
}
</script>

<template>
  <div class="py-3">
    <div v-if="latitude && longitude">
      <p>Latitude: {{ latitude.toFixed(6) }} ° Longitude: {{ longitude.toFixed(6) }} °</p>
    </div>
    <div v-else-if="error">
      <p>Error: {{ error }}</p>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>