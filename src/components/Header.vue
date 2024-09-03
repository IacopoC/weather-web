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
    <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
      <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
        <span class="fs-4">{{ title }}</span>
      </a>
      <Navigation></Navigation>
    </header>
</template>

<style scoped lang="scss">

</style>