<script>
export default {
  name: "GetLocation",
  data() {
    return {
      latitude: null,
      longitude: null,
      error: null,
      defaultLatitude: 41.535712,
      defaultLongitude: 12.324200,
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
                this.error = 'Geolocation access denied. Using default location coordinates (Rome, IT)';
              } else {
                this.error = 'Error retrieving location: ' + error.message;
              }
              this.$emit('location-error', this.error);
            }
        );
      } else {
        this.error = 'Geolocation is not supported by your browser.';
        this.latitude = this.defaultLatitude;
        this.longitude = this.defaultLongitude;
        this.$emit('location-error', this.error);
      }
    }
}
</script>

<template>
  <div class="py-3">
    <div v-if="latitude && longitude">
      <h5><i class="bi bi-compass"></i> Latitude: {{ latitude.toFixed(6) }} ° Longitude: {{ longitude.toFixed(6) }} °</h5>
    </div>
    <div v-else-if="error">
      <p class="text-warning">Warning: {{ error }}</p>
      <h5 class="text-warning"><i class="bi bi-compass"></i> Latitude: {{ defaultLatitude }} ° Longitude {{ defaultLongitude }} °</h5>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>