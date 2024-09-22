<script>
import { Line } from 'vue-chartjs';
import { Chart as ChartJS, Title, Tooltip, Legend, LineElement, CategoryScale,
  LinearScale, PointElement } from 'chart.js';
ChartJS.register(Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale, PointElement);

export
default {
  name: 'WeatherWeekly',
  components: { Line },
  data() {
    return {
    loaded: false,
    chartData: null
    }
  },
  async mounted() {
    this.loaded = false;

    try {
      const data = await fetch('https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m');

      const weatherData = await data.json();

      let labels = weatherData.hourly['time'];
      let temperatures = weatherData.hourly['temperature_2m'];

      this.chartData = {
        labels,
        datasets: [{
          label: 'Temperature (°C)',
          data: temperatures,
          borderColor: 'rgb(19,106,232)',
          fill: false
        }]
      };

      this.loaded = true;
    } catch (error) {
      console.error('Sorry, an error occurred:', error);
    }
  }
};
</script>

<template>
  <div style="height:100px" id="weatherweekly"></div>
  <h5 class="pt-4">Weather Weekly</h5>
  <div class="container">
    <Line v-if="loaded" :data="chartData"></Line>
  </div>
</template>

<style scoped lang="scss">

</style>