<script setup>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import BannerQuote from "@/components/BannerQuote.vue";
import WeatherToday from "@/components/weather/WeatherToday.vue";
import WeatherWeekly from "@/components/weather/WeatherWeekly.vue";
import Movies from './components/Movies.vue';
</script>

<template>
  <main class="flex-shrink-0">
    <Header title="Weather Web"></Header>
  <div class="container">
    <WeatherToday></WeatherToday>
  </div>
    <div class="container">
      <WeatherWeekly></WeatherWeekly>
      <Movies></Movies>
    </div>
    <BannerQuote></BannerQuote>
  </main>
  <Footer></Footer>
</template>

<style lang="scss">

</style>
