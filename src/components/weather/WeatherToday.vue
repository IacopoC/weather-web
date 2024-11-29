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
      snow:'',
      snow_unit:'',
      cloud:'',
      cloud_unit:'',
      visibility:'',
      humidity:'',
      wind: '',
      temperature_unit: '',
      wind_unit: '',
      ap_temperature_unit: '',
      rain_unit:'',
      visibility_unit:'',
      humidity_unit:''
    }
  },
  methods: {
    onLocationError(error) {
      this.locationError = error;
    },
    onLocationUpdated(location) {
      this.latitude = location.latitude;
      this.longitude = location.longitude;
      this.fetchWeatherData(this.latitude, this.longitude);
    },
    fetchWeatherData(latitude, longitude) {
      this.isLoading = true;
      fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,apparent_temperature,relative_humidity_2m,rain,visibility,wind_speed_10m,snowfall,cloud_cover`)
          .then(response => response.json())
          .then(data => {
            this.temperature = data.current['temperature_2m'];
            this.wind = data.current['wind_speed_10m'];
            this.ap_temperature = data.current['apparent_temperature'];
            this.humidity = data.current['relative_humidity_2m'];
            this.rain = data.current['rain'];
            this.visibility = data.current['visibility'];
            this.snow = data.current['snowfall'];
            this.cloud = data.current['cloud_cover'];

            this.temperature_unit = data.current_units['temperature_2m'];
            this.wind_unit = data.current_units['wind_speed_10m'];
            this.ap_temperature_unit = data.current_units['apparent_temperature'];
            this.humidity_unit = data.current_units['relative_humidity_2m'];
            this.rain_unit = data.current_units['rain'];
            this.visibility_unit = data.current_units['visibility'];
            this.snow_unit = data.current_units['snowfall'];
            this.cloud_unit = data.current_units['cloud_cover'];
          })
          .catch(error => {
            console.error('Sorry, something is wrong, an error has occurred:', error);
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
  <div v-if="isLoading">
    <div class="h-100p" id="weathertoday"></div>
    <h5 class="px-2">Weather Today</h5>
    <div class="placeholder-glow">
      <span class="placeholder col-12"></span>
    </div>
  </div>
   <div v-else>
     <div class="h-100p" id="weathertoday"></div>
     <div class="px-2 pt-4">
       <h5>Weather Today</h5>
       <p>Weather data for today.</p>
     </div>
     <div class="pt-4 row">
       <div class="col-lg-3">
         <div class="shadow-lg p-3 mb-5 bg-body-tertiary rounded" :class="{ 'bg-warning-subtle': temperature > 17 }">
         <i class="bi bi-brightness-high-fill fs-1" data-bs-toggle="tooltip" data-bs-placement="top" title="Actual temperature"></i>
         <p class="pt-4"><strong>Temperature:</strong></p>
         <h4>{{ temperature }} {{ temperature_unit }}</h4>
           </div>
       </div><!-- /.col-lg-3 -->
       <div class="col-lg-3">
         <div class="shadow-lg p-3 mb-5 bg-body-tertiary rounded" :class="{ 'bg-warning-subtle': temperature > 17 }">
         <i class="bi bi-thermometer-half fs-1" data-bs-toggle="tooltip" data-bs-placement="top" title="Actual temperature perception"></i>
         <p class="pt-4"><strong>Temperature perception:</strong></p>
         <h4>{{ ap_temperature }} {{ ap_temperature_unit }}</h4>
           </div>
       </div><!-- /.col-lg-3 -->
       <div class="col-lg-3">
         <div class="shadow-lg p-3 mb-5 bg-body-tertiary rounded" :class="{ 'bg-primary-subtle': humidity > 70 }">
         <i class="bi bi-droplet-half fs-1" data-bs-toggle="tooltip" data-bs-placement="top" title="Actual humidity"></i>
         <p class="pt-4"><strong>Humidity:</strong></p>
         <h4>{{ humidity }} {{ humidity_unit }}</h4>
           </div>
       </div><!-- /.col-lg-3 -->
       <div class="col-lg-3">
         <div class="shadow-lg p-3 mb-5 bg-body-tertiary rounded" :class="{ 'bg-light-subtle': snow > 100 }">
         <i class="bi bi-snow fs-1" data-bs-toggle="tooltip" data-bs-placement="top" title="Actual snowfall"></i>
         <p class="pt-4"><strong>Snowfall:</strong></p>
         <h4>{{ snow }} {{ snow_unit }}</h4>
           </div>
       </div><!-- /.col-lg-3 -->
       </div>
     <div class="row pt-4">
       <div class="col-lg-3">
         <div class="shadow-lg p-3 mb-5 bg-body-tertiary rounded" :class="{ 'bg-light-subtle': wind > 20 }">
         <i class="bi bi-wind fs-1" data-bs-toggle="tooltip" data-bs-placement="top" title="Actual wind speed"></i>
         <p class="pt-4"><strong>Wind speed:</strong></p>
         <h4>{{ wind }} {{ wind_unit }}</h4>
         </div>
       </div><!-- /.col-lg-3 -->
       <div class="col-lg-3">
         <div class="shadow-lg p-3 mb-5 bg-body-tertiary rounded" :class="{ 'bg-info-subtle': rain > 20 }">
         <i class="bi bi-cloud-drizzle-fill fs-1" data-bs-toggle="tooltip" data-bs-placement="top" title="Actual rain"></i>
         <p class="pt-4"><strong>Rain:</strong></p>
         <h4>{{ rain }} {{ rain_unit }}</h4>
           </div>
       </div><!-- /.col-lg-3 -->
       <div class="col-lg-3">
         <div class="shadow-lg p-3 mb-5 bg-body-tertiary rounded" :class="{ 'bg-success-subtle': visibility > 5000 }">
         <i class="bi bi-bullseye fs-1" data-bs-toggle="tooltip" data-bs-placement="top" title="Actual visibility"></i>
         <p class="pt-4"><strong>Visibility:</strong></p>
         <h4>{{ visibility }} {{ visibility_unit }}</h4>
           </div>
       </div><!-- /.col-lg-3 -->
       <div class="col-lg-3">
         <div class="shadow-lg p-3 mb-5 bg-body-tertiary rounded" :class="{ 'bg-secondary-subtle': cloud > 80 }">
         <i class="bi bi-cloud-fill fs-1" data-bs-toggle="tooltip" data-bs-placement="top" title="Actual cloud coverage"></i>
         <p class="pt-4"><strong>Clouds:</strong></p>
         <h4>{{ cloud }} {{ cloud_unit }}</h4>
           </div>
       </div><!-- /.col-lg-3 -->
       <p><strong>Note:</strong> Current conditions are based on 15-minutely weather data.</p>
     </div>
     <div v-if="hasError">
       <p>Error in displaying weather data. Try again later.</p>
     </div>
   </div>
  <GetLocation @location-updated="onLocationUpdated" @location-error="onLocationError"></GetLocation>
</template>

<style scoped lang="scss">

</style>