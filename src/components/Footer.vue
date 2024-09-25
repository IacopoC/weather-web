<script>
export default {
  name: "Footer",
  data() {
    return {
      Year: new Date().getFullYear()
    };
  }
}
</script>

<template>
  <footer class="footer mt-auto py-3 bg-body-tertiary">
    <div class="container">
      <p class="float-end"><a href="#">Back to top</a></p>
      <p class="text-body-secondary">© {{ Year }} - Weather Web from <a href="https://open-meteo.com/"><strong>Open Meteo Api</strong></a></p>
    </div>
  </footer>
</template>

<style scoped lang="scss">

</style>