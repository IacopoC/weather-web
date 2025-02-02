<script>
import GetLocation from "@/components/weather/GetLocation.vue";
import { Line } from 'vue-chartjs';
import { Chart as ChartJS, Title, Tooltip, Legend, LineElement, CategoryScale,
  LinearScale, PointElement } from 'chart.js';
ChartJS.register(Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale, PointElement);

export
default {
  name: 'WeatherWeekly',
  components: { Line, GetLocation },
  data() {
    return {
    loaded: false,
    chartData: null,
    isLoading: true,
    latitude: null,
    longitude: null,
    defaultLatitude: 41.535712,
    defaultLongitude: 12.324200,
    }
  },
  methods: {
    onLocationError(error) {
      this.locationError = error;
      this.fetchWeatherWeeklyData(this.defaultLatitude, this.defaultLongitude);
    },
    onLocationUpdated(location) {
      this.latitude = location.latitude;
      this.longitude = location.longitude;
      this.fetchWeatherWeeklyData(this.latitude, this.longitude);
    },
    fetchWeatherWeeklyData(latitude, longitude) {
      this.isLoading = true;
      this.loaded = false;

    fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,wind_speed_10m&temporal_resolution=hourly_6&timezone=Europe%2FBerlin`)
     .then(response => response.json())
          .then(weatherData => {

        let labels = weatherData.hourly['time'];
        let temperatures = weatherData.hourly['temperature_2m'];
        let wind_speed = weatherData.hourly['wind_speed_10m'];

        this.chartData = {
          labels,
          datasets: [
            {
              label: 'Temperature (°C)',
              data: temperatures,
              borderColor: 'rgba(255,196,62,0.94)',
              fill: false,
              tension: 0.1
            },
            {
              label: 'Wind Speed (m/s)',
              data: wind_speed,
              borderColor: 'rgba(234,225,255,0.7)',
              fill: false,
              tension: 0.1
            }
          ]
        };
        this.loaded = true;
      }).catch(error => {
        console.error('Sorry, something is wrong, an error has occurred:', error);
      })
        .finally(() => {
          this.isLoading = false;
        });
    }
  }
};
</script>

<template>
  <div v-if="isLoading">
    <h4 class="px-2">Weather Weekly</h4>
    <div class="placeholder-glow">
      <span class="placeholder col-12"></span>
    </div>
  </div>
  <div v-else>
  <div class="h-100p" id="weatherweekly"></div>
  <div class="px-2 pt-4">
  <h4>Weather Weekly</h4>
  <p>Weather data for 7 days.</p>
  </div>
  <div class="container">
    <Line v-if="loaded" :data="chartData"></Line>
  </div>
    <div class="pt-5">
      <p><strong>Note:</strong> Current timezone is GMT+2 (Europe/Berlin).</p></div>
  </div>
  <GetLocation @location-updated="onLocationUpdated" @location-error="onLocationError"></GetLocation>
</template>

<style scoped lang="scss">

</style>