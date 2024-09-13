<script>
import 'bootstrap-icons/font/bootstrap-icons.css';
import GetLocation from "@/components/weather/GetLocation.vue";
export default {
  name: "WeatherToday",
  components: {GetLocation},
  data() {
    return {
      latitude: null,
      longitude: null,
      isLoading: true,
      hasError: false,
      temperature: '',
      ap_temperature: '',
      rain:'',
      visibility:'',
      humidity:'',
      wind: '',
      temperature_unit: '',
      wind_unit: '',
      ap_temperature_unit: '',
      rain_unit:'',
      visibility_unit:'',
      humidity_unit:'',
    }
  },
  methods: {
    onLocationUpdated(location) {
      this.latitude = location.latitude;
      this.longitude = location.longitude;
      this.fetchWeatherData(this.latitude, this.longitude);
    },
    fetchWeatherData(latitude, longitude) {
      this.isLoading = true;
      fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,apparent_temperature,relative_humidity_2m,rain,visibility,wind_speed_10m`)
          .then(response => response.json())
          .then(data => {
            this.temperature = data.current['temperature_2m'];
            this.wind = data.current['wind_speed_10m'];
            this.ap_temperature = data.current['apparent_temperature'];
            this.humidity = data.current['relative_humidity_2m'];
            this.rain = data.current['rain'];
            this.visibility = data.current['visibility'];

            this.temperature_unit = data.current_units['temperature_2m'];
            this.wind_unit = data.current_units['wind_speed_10m'];
            this.ap_temperature_unit = data.current_units['apparent_temperature'];
            this.humidity_unit = data.current_units['relative_humidity_2m'];
            this.rain_unit = data.current_units['rain'];
            this.visibility_unit = data.current_units['visibility'];
          })
          .catch(error => {
            console.error('Sorry, an error occurred:', error);
            this.hasError = true;
          })
          .finally(() => {
            this.isLoading = false;
          });
    }
  }
}
</script>

<template>
  <div v-if="isLoading">Loading data, please wait...</div>
   <div v-else>
     <h5>Weather Today</h5>
     <div class="pt-4 row">
       <div class="col-lg-4">
         <i class="bi bi-brightness-high-fill fs-1" data-bs-toggle="tooltip" data-bs-placement="top" title="Actual temperature"></i>
         <p class="pt-4"><strong>Temperature:</strong></p>
         <p>{{ temperature }} {{ temperature_unit }}</p>
       </div><!-- /.col-lg-4 -->
       <div class="col-lg-4">
         <i class="bi bi-thermometer-half fs-1" data-bs-toggle="tooltip" data-bs-placement="top" title="Actual temperature perception"></i>
         <p class="pt-4"><strong>Temperature perception:</strong></p>
         <p>{{ ap_temperature }} {{ ap_temperature_unit }}</p>
       </div><!-- /.col-lg-4 -->
       <div class="col-lg-4">
         <i class="bi bi-droplet-half fs-1" data-bs-toggle="tooltip" data-bs-placement="top" title="Actual humidity"></i>
         <p class="pt-4"><strong>Humidity:</strong></p>
         <p>{{ humidity }} {{ humidity_unit }}</p>
       </div><!-- /.col-lg-4 -->
       </div>
     <div class="row pt-4">
       <div class="col-lg-4">
         <i class="bi bi-wind fs-1" data-bs-toggle="tooltip" data-bs-placement="top" title="Actual wind speed"></i>
         <p class="pt-4"><strong>Wind speed:</strong></p>
         <p>{{ wind }} {{ wind_unit }}</p>
       </div><!-- /.col-lg-4 -->
       <div class="col-lg-4">
         <i class="bi bi-cloud-drizzle-fill fs-1" data-bs-toggle="tooltip" data-bs-placement="top" title="Actual rain"></i>
         <p class="pt-4"><strong>Rain:</strong></p>
         <p>{{ rain }} {{ rain_unit }}</p>
       </div><!-- /.col-lg-4 -->
       <div class="col-lg-4">
         <i class="bi bi-bullseye fs-1" data-bs-toggle="tooltip" data-bs-placement="top" title="Actual visibility"></i>
         <p class="pt-4"><strong>Visibility:</strong></p>
         <p>{{ visibility }} {{ visibility_unit }}</p>
       </div><!-- /.col-lg-4 -->
     </div>
     <div v-if="hasError">
       Error in displaying weather data. Try again later.
     </div>
   </div>
  <GetLocation @location-updated="onLocationUpdated"></GetLocation>
</template>

<style scoped lang="scss">

i {
  color: lightblue;
}

</style>