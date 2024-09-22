<script>
import Navigation from "@/components/Navigation.vue";
export default {
  name: "Header",
  components: {Navigation},
  props: {
    title: String
  }
}
</script>

<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary fixed-top">
    <div class="container">
      <a class="navbar-brand" href="#">{{ title }}</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <Navigation></Navigation>
      <div class="collapse navbar-collapse" id="navbarNav">
      </div>
    </div>
  </nav>
</template>

<style scoped lang="scss">

</style>