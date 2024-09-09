<script>
export default {
  name: "WeatherToday",
  data() {
    return {
      isLoading: true,
      hasError: false,
      temperature: '',
      ap_temperature: '',
      rain:'',
      visibility:'',
      humidity:'',
      wind: '',
      temperature_unit: '',
      wind_unit: '',
      ap_temperature_unit: '',
      rain_unit:'',
      visibility_unit:'',
      humidity_unit:'',
    }
  },
  mounted() {
    this.isLoading = true;
    fetch('https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m,apparent_temperature,relative_humidity_2m,rain,visibility,wind_speed_10m')
        .then(response => response.json())
        .then(data => {
          this.temperature = data.current['temperature_2m'];
          this.wind =data.current['wind_speed_10m'];
          this.ap_temperature = data.current['apparent_temperature'];
          this.humidity = data.current['relative_humidity_2m'];
          this.rain =data.current['rain'];
          this.visibility =data.current['visibility'];

          this.temperature_unit = data.current_units['temperature_2m'];
          this.wind_unit =data.current_units['wind_speed_10m'];
          this.ap_temperature_unit = data.current_units['apparent_temperature'];
          this.humidity_unit = data.current_units['relative_humidity_2m'];
          this.rain_unit =data.current_units['rain'];
          this.visibility_unit =data.current_units['visibility'];
        })
        .catch(error => {
          console.error('Sorry, an error occurred:', error);
          this.hasError = true;
        })
        .finally(() => {
      this.isLoading = false;
    });
  }
}
</script>

<template>
  <div v-if="isLoading">Loading data, please wait...</div>
   <div v-else>
    <p><strong>Weather Today</strong></p>
    <p>Temperature: {{ temperature }} {{ temperature_unit }}</p>
    <p>Temperature perception: {{ ap_temperature }} {{ ap_temperature_unit }}</p>
    <p>Humidity: {{ humidity }} {{ humidity_unit }}</p>
    <p>Wind speed: {{ wind }} {{ wind_unit }}</p>
    <p>Rain: {{ rain }} {{ rain_unit }}</p>
    <p>Visibility: {{ visibility }} {{ visibility_unit }}</p>
    <div v-if="hasError">
      Error in displaying weather data. Try again later.
    </div>
   </div>
</template>

<style scoped lang="scss">

</style>