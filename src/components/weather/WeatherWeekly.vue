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
      latitude: null,
      longitude: null
    }
  },
  mounted() {

    const { latitude, longitude } = this.$refs.getLocation.locationData;

    if (latitude && longitude) {
      this.fetchWeatherWeeklyData(latitude, longitude);
    } else {
      console.error("Failed to retrieve location data");
    }
  },
  methods: {
    fetchWeatherWeeklyData(latitude, longitude) {
      this.loaded = false;

    fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m&timezone=Europe%2FBerlin`);

      then(response => response.json())
          .then(weatherData => {

        let labels = weatherData.hourly['time'];
        let temperatures = weatherData.hourly['temperature_2m'];
        let humidity = weatherData.hourly['relative_humidity_2m'];
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
              label: 'Humidity (%)',
              data: humidity,
              borderColor: 'rgb(19,106,232)',
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
        console.error('Sorry, an error occurred:', error);
      });
    }
  }
};
</script>

<template>
  <div class="h-100p" id="weatherweekly"></div>
  <h5 class="pt-4">Weather Weekly</h5>
  <div class="container">
    <Line v-if="loaded" :data="chartData"></Line>
  </div>
</template>

<style scoped lang="scss">

</style>