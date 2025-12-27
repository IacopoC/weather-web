<script>
import 'bootstrap-icons/font/bootstrap-icons.css';
import GetLocation from "@/components/weather/GetLocation.vue";
import WeatherCard from "@/components/weather/WeatherCard.vue";
import { fetchCurrentWeather } from "@/services/weatherService.js";

export default {
  name: "WeatherToday",
  components: { GetLocation, WeatherCard },
  data() {
    return {
      defaultLatitude: 41.535712,
      defaultLongitude: 12.324200,
      latitude: null,
      longitude: null,
      isLoading: true,
      hasError: false,
      weatherData: [
        { icon: 'bi bi-thermometer-sun', label: 'Temperature', value: 0, unit: '', threshold: 17, thresholdClass: 'bg-warning-subtle', tooltip: 'Actual temperature' },
        { icon: 'bi bi-thermometer-half', label: 'Perceived Temperature', value: 0, unit: '', threshold: 17, thresholdClass: 'bg-warning-subtle', tooltip: 'Actual temperature perception' },
        { icon: 'bi bi-droplet-half', label: 'Humidity', value: 0, unit: '', threshold: 70, thresholdClass: 'bg-primary-subtle', tooltip: 'Actual humidity' },
        { icon: 'bi bi-snow', label: 'Snowfall', value: 0, unit: '', threshold: 100, thresholdClass: 'bg-light-subtle', tooltip: 'Actual snowfall' },
        { icon: 'bi bi-wind', label: 'Wind speed 10m', value: 0, unit: '', threshold: 20, thresholdClass: 'bg-light-subtle', tooltip: 'Actual wind speed' },
        { icon: 'bi bi-cloud-drizzle-fill', label: 'Rain', value: 0, unit: '', threshold: 20, thresholdClass: 'bg-info-subtle', tooltip: 'Actual rain' },
        { icon: 'bi bi-stars', label: 'Visibility', value: 0, unit: '', threshold: 5000, thresholdClass: 'bg-success-subtle', tooltip: 'Actual visibility' },
        { icon: 'bi bi-cloud-fill', label: 'Clouds', value: 0, unit: '', threshold: 80, thresholdClass: 'bg-secondary-subtle', tooltip: 'Actual cloud coverage' },
        { icon: 'bi bi-cloud-rain-heavy-fill', label: 'Showers', value: 0, unit: '', threshold: 100, thresholdClass: 'bg-success-subtle', tooltip: 'Actual showers' },
        { icon: 'bi bi-cloud-haze2', label: 'Wind gusts 10m', value: 0, unit: '', threshold: 20, thresholdClass: 'bg-secondary-subtle', tooltip: 'Actual wind gusts' },
        { icon: 'bi bi-globe-europe-africa', label: 'Surface pressure', value: 0, unit: '', threshold: 1000, thresholdClass: 'bg-success-subtle', tooltip: 'Surface pressure' },
        { icon: 'bi bi-signpost-2', label: 'Wind direction 10m', value: 0, unit: '', threshold: 50, thresholdClass: 'bg-secondary-subtle', tooltip: 'Wind direction' },
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

    async fetchWeatherData(latitude, longitude) {
        this.isLoading = true;
        this.hasError = false;

      try {
        const data = await fetchCurrentWeather(latitude, longitude)

            const mapData = [
              'temperature_2m',
              'apparent_temperature',
              'relative_humidity_2m',
              'snowfall',
              'wind_speed_10m',
              'rain',
              'visibility',
              'cloud_cover',
              'showers',
              'wind_gusts_10m',
              'surface_pressure',
              'wind_direction_10m'
            ];

            mapData.forEach((key, index) => {
              this.weatherData[index].value = data.current[key];
              this.weatherData[index].unit = data.current_units[key];
            });

      } catch(error) {
            console.error('Sorry, something is wrong, an error has occurred:', error);
            this.hasError = true;

      } finally {
            this.isLoading = false;
          }
    }
  }
}
</script>

<template>
  <div class="h-100p" id="weathertoday"></div>
  <div class="px-2" :class="{ 'pt-4': !isLoading }">
    <h4>Weather Today</h4>
    <div v-if="isLoading" class="placeholder-glow">
      <span class="placeholder col-12"></span>
    </div>
    <p v-else>Weather data for today.</p>
     <div class="pt-4 row">
       <WeatherCard v-for="item in weatherData" :key="item.label" :icon="item.icon" :label="item.label" :value="item.value" :unit="item.unit" :threshold="item.threshold" :thresholdClass="item.thresholdClass" :tooltip="item.tooltip"/>
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