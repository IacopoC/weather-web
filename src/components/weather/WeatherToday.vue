<script>
export default {
  name: "WeatherToday",
  data() {
    return {
      temperature: '',
      ap_temperature: '',
      rain:'',
      visibility:'',
      wind: '',
      temperature_unit: '',
      wind_unit: '',
      ap_temperature_unit: '',
      rain_unit:'',
      visibility_unit:'',
    }
  },
  mounted() {
    fetch('https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m,apparent_temperature,rain,visibility,wind_speed_10m')
        .then(response => response.json())
        .then(data => {
          this.temperature = data.current['temperature_2m'];
          this.wind =data.current['wind_speed_10m'];
          this.ap_temperature = data.current['apparent_temperature'];
          this.rain =data.current['rain'];
          this.visibility =data.current['visibility'];

          this.temperature_unit = data.current_units['temperature_2m'];
          this.wind_unit =data.current_units['wind_speed_10m'];
          this.ap_temperature_unit = data.current_units['apparent_temperature'];
          this.rain_unit =data.current_units['rain'];
          this.visibility_unit =data.current_units['visibility'];
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
    <p>Temperature perception: {{ ap_temperature }} {{ ap_temperature_unit }}</p>
    <p>Wind speed: {{ wind }} {{ wind_unit }}</p>
    <p>Rain: {{ rain }} {{ rain_unit }}</p>
    <p>Visibility: {{ visibility }} {{ visibility_unit }}</p>
  </div>
</template>

<style scoped lang="scss">

</style>