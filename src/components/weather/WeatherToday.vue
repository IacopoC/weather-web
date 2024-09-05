<script>
export default {
  name: "WeatherToday",
  data() {
    return {
      temperature: '',
      wind: '',
      temperature_unit: '',
      wind_unit: '',
    }
  },
  mounted() {
    fetch('https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m')
        .then(response => response.json())
        .then(data => {
          this.temperature = data.current['temperature_2m'];
          this.wind =data.current['wind_speed_10m'];
          this.temperature_unit = data.current_units['temperature_2m'];
          this.wind_unit =data.current_units['wind_speed_10m'];
        })
        .catch(error => {
          console.error('Error:', error);
        });
  }
}
</script>

<template>
  <div>
    <p><strong>Weather Today</strong></p>
  <p>Temperature: {{ temperature }} {{ temperature_unit }}</p>
    <p>Wind speed: {{ wind }} {{ wind_unit }}</p>
  </div>
</template>

<style scoped lang="scss">

</style>