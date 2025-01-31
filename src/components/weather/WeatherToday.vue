<script>
import 'bootstrap-icons/font/bootstrap-icons.css';
import GetLocation from "@/components/weather/GetLocation.vue";
import WeatherCard from "@/components/weather/WeatherCard.vue";
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
        { icon: 'bi bi-thermometer-sun', label: 'Temperature', value: null, unit: '', threshold: 17, thresholdClass: 'bg-warning-subtle', tooltip: 'Actual temperature' },
        { icon: 'bi bi-thermometer-half', label: 'Perceived Temperature', value: null, unit: '', threshold: 17, thresholdClass: 'bg-warning-subtle', tooltip: 'Actual temperature perception' },
        { icon: 'bi bi-droplet-half', label: 'Humidity', value: null, unit: '', threshold: 70, thresholdClass: 'bg-primary-subtle', tooltip: 'Actual humidity' },
        { icon: 'bi bi-snow', label: 'Snowfall', value: null, unit: '', threshold: 100, thresholdClass: 'bg-light-subtle', tooltip: 'Actual snowfall' },
        { icon: 'bi bi-wind', label: 'Wind speed 10m', value: null, unit: '', threshold: 20, thresholdClass: 'bg-light-subtle', tooltip: 'Actual wind speed' },
        { icon: 'bi bi-cloud-drizzle-fill', label: 'Rain', value: null, unit: '', threshold: 20, thresholdClass: 'bg-info-subtle', tooltip: 'Actual rain' },
        { icon: 'bi bi-stars', label: 'Visibility', value: null, unit: '', threshold: 5000, thresholdClass: 'bg-success-subtle', tooltip: 'Actual visibility' },
        { icon: 'bi bi-cloud-fill', label: 'Clouds', value: null, unit: '', threshold: 80, thresholdClass: 'bg-secondary-subtle', tooltip: 'Actual cloud coverage' },
        { icon: 'bi bi-cloud-rain-heavy-fill', label: 'Showers', value: null, unit: '', threshold: 100, thresholdClass: 'bg-success-subtle', tooltip: 'Actual showers' },
        { icon: 'bi bi-cloud-haze2', label: 'Wind gusts 10m', value: null, unit: '', threshold: 20, thresholdClass: 'bg-secondary-subtle', tooltip: 'Actual wind gusts' },
        { icon: 'bi bi-globe-europe-africa', label: 'Surface pressure', value: null, unit: '', threshold: 1000, thresholdClass: 'bg-success-subtle', tooltip: 'Surface pressure' },
        { icon: 'bi bi-signpost-2', label: 'Wind direction 10m', value: null, unit: '', threshold: 50, thresholdClass: 'bg-secondary-subtle', tooltip: 'Wind direction' },
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
      fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,apparent_temperature,relative_humidity_2m,rain,visibility,wind_speed_10m,snowfall,cloud_cover,showers,wind_gusts_10m,surface_pressure,wind_direction_10m`)
          .then(response => response.json())
          .then(data => {
            this.weatherData[0].value = data.current['temperature_2m'];
            this.weatherData[1].value = data.current['apparent_temperature'];
            this.weatherData[2].value = data.current['relative_humidity_2m'];
            this.weatherData[3].value = data.current['snowfall'];
            this.weatherData[4].value = data.current['wind_speed_10m'];
            this.weatherData[5].value = data.current['rain'];
            this.weatherData[6].value = data.current['visibility'];
            this.weatherData[7].value = data.current['cloud_cover'];
            this.weatherData[8].value = data.current['showers'];
            this.weatherData[9].value = data.current['wind_gusts_10m'];
            this.weatherData[10].value = data.current['surface_pressure'];
            this.weatherData[11].value = data.current['wind_direction_10m'];

            this.weatherData[0].unit = data.current_units['temperature_2m'];
            this.weatherData[1].unit = data.current_units['apparent_temperature'];
            this.weatherData[2].unit = data.current_units['relative_humidity_2m'];
            this.weatherData[3].unit = data.current_units['snowfall'];
            this.weatherData[4].unit = data.current_units['wind_speed_10m'];
            this.weatherData[5].unit = data.current_units['rain'];
            this.weatherData[6].unit = data.current_units['visibility'];
            this.weatherData[7].unit = data.current_units['cloud_cover'];
            this.weatherData[8].unit = data.current_units['showers'];
            this.weatherData[9].unit = data.current_units['wind_gusts_10m'];
            this.weatherData[10].unit = data.current_units['surface_pressure'];
            this.weatherData[11].unit = data.current_units['wind_direction_10m'];
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