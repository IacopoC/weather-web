<script>
import 'bootstrap-icons/font/bootstrap-icons.css';
import GetLocation from "@/components/weather/GetLocation.vue";
import WeatherCard from "@/components/weather/WeatherCard.vue";
export default {
  name: "WeatherToday",
  components: { GetLocation, WeatherCard },
  data() {
    return {
      latitude: null,
      longitude: null,
      defaultLatitude: 41.535712,
      defaultLongitude: 12.324200,
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
      humidity_unit:'',
      weatherData: [
        { icon: 'bi bi-brightness-high-fill', label: 'Temperature', value: this.temperature, unit: this.temperature_unit, threshold: 17, thresholdClass: 'bg-warning-subtle', tooltip: 'Actual temperature' },
        { icon: 'bi bi-thermometer-half', label: 'Temperature perception', value: this.ap_temperature, unit: this.ap_temperature_unit, threshold: 17, thresholdClass: 'bg-warning-subtle', tooltip: 'Actual temperature perception' },
        { icon: 'bi bi-droplet-half', label: 'Humidity', value: this.humidity, unit: this.humidity_unit, threshold: 70, thresholdClass: 'bg-primary-subtle', tooltip: 'Actual humidity' },
        { icon: 'bi bi-snow', label: 'Snowfall', value: this.snow, unit: this.snow_unit, threshold: 100, thresholdClass: 'bg-light-subtle', tooltip: 'Actual snowfall' },
        { icon: 'bi bi-wind', label: 'Wind speed', value: this.wind, unit: this.wind_unit, threshold: 20, thresholdClass: 'bg-light-subtle', tooltip: 'Actual wind speed' },
        { icon: 'bi bi-cloud-drizzle-fill', label: 'Rain', value: this.rain, unit: this.rain_unit, threshold: 20, thresholdClass: 'bg-info-subtle', tooltip: 'Actual rain' },
        { icon: 'bi bi-bullseye', label: 'Visibility', value: this.visibility, unit: this.visibility_unit, threshold: 5000, thresholdClass: 'bg-success-subtle', tooltip: 'Actual visibility' },
        { icon: 'bi bi-cloud-fill', label: 'Clouds', value: this.cloud, unit: this.cloud_unit, threshold: 80, thresholdClass: 'bg-secondary-subtle', tooltip: 'Actual cloud coverage' },
      ],
    }
  },
  methods: {
    onLocationError(error) {
      this.locationError = error;
      this.fetchWeatherData(this.defaultLatitude, this.defaultLongitude);
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
    <h4 class="px-2">Weather Today</h4>
    <div class="placeholder-glow">
      <span class="placeholder col-12"></span>
    </div>
  </div>
   <div v-else>
     <div class="h-100p" id="weathertoday"></div>
     <div class="px-2 pt-4">
       <h4>Weather Today</h4>
       <p>Weather data for today.</p>
     </div>
     <div class="pt-4 row">
       <WeatherCard
           v-for="item in weatherData"
           :key="item.label"
           :icon="item.icon"
           :label="item.label"
           :value="item.value"
           :unit="item.unit"
           :threshold="item.threshold"
           :thresholdClass="item.thresholdClass"
           :tooltip="item.tooltip"
       />
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