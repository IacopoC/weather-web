<script setup>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import BannerQuote from "@/components/BannerQuote.vue";
import WeatherToday from "@/components/weather/WeatherToday.vue";
</script>

<template>
  <main class="flex-shrink-0">
  <div class="container">
    <Header title="Weather Web"></Header>
    <WeatherToday></WeatherToday>
    <p><a href="https://open-meteo.com/">Free Weather API</a></p>
  </div>
    <BannerQuote></BannerQuote>
  </main>
  <Footer></Footer>
</template>

<style lang="scss">

</style>
