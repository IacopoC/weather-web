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
      <span class="text-body-secondary">© {{ Year }} - Weather Web</span>
    </div>
  </footer>
</template>

<style scoped lang="scss">

</style>