<script>
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)
export default {
  name: "WeatherWeekly",
  components: { Bar },
  data() {
    return {
      chartData: {
        labels: [ 'January', 'February', 'March'],
        datasets: [
          {
            label: 'Data One',
            backgroundColor: '#c3c3c3',
            data: [40, 20, 12]
          }
        ]
      }
    }
  }
}
</script>

<template>
  <h5 class="pt-4">Weather Weekly</h5>
  <Bar :data="chartData" />
</template>

<style scoped lang="scss">

</style>