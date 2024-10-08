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
              console.error('Error location coordinates:', error);
              this.$emit('location-error', error);
            }
        );
      } else {
        console.error('Browser does not support coordinates location.');
        this.error = 'Geolocation is not supported.';
        this.$emit('location-error', 'Geolocation is not supported.');
      }
    }
}
</script>

<template>
  <div class="py-3">
    <div v-if="latitude && longitude">
      <p class="pt-4"><strong>Latitude:</strong> {{ latitude }} <strong>Longitude:</strong> {{ longitude }}</p>
    </div>
    <div v-else-if="error">
      <p class="pt-4"><strong>Error:</strong> {{ error }}</p>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>