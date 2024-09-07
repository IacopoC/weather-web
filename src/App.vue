<script setup>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import WeatherToday from "@/components/weather/WeatherToday.vue";
</script>

<template>
  <main class="flex-shrink-0">
  <div class="container">
    <Header title="Weather Web"></Header>
    <WeatherToday></WeatherToday>
    <em>“Conversation about the weather is the last refuge of the unimaginative.”</em>
    <p><strong>Oscar Wilde</strong></p>
    <p><a href="https://open-meteo.com/">Free Weather API</a></p>
  </div>
    <div class="my-5">
      <div class="p-5 text-center bg-body-tertiary">
        <div class="container py-5">
          <em class="col-lg-8 mx-auto lead">
            “Conversation about the weather is the last refuge of the unimaginative.”
            <br><strong>Oscar Wilde</strong>
          </em>
        </div>
      </div>
    </div>
  </main>
  <Footer></Footer>
</template>

<style lang="scss">

</style>
