<script setup>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import BannerQuote from "@/components/BannerQuote.vue";
import WeatherToday from "@/components/weather/WeatherToday.vue";
import WeatherWeekly from "@/components/weather/WeatherWeekly.vue";
</script>

<template>
  <main class="flex-shrink-0">
  <div class="container">
    <Header title="Weather Web"></Header>
    <WeatherToday></WeatherToday>
    <p><strong>Note:</strong> Current conditions are based on 15-minutely weather data.</p>
  </div>
    <div class="container">
      <WeatherWeekly></WeatherWeekly>
    </div>
    <BannerQuote></BannerQuote>
  </main>
  <Footer></Footer>
</template>

<style lang="scss">

</style>
