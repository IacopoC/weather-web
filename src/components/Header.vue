<script>
export default {
  name: "Header",
  props: ['title']
}
</script>

<template>
    <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
      <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
        <span class="fs-4">{{ title }}</span>
      </a>

      <ul class="nav nav-pills">
        <li class="nav-item"><a href="#" class="nav-link active" aria-current="page">Weather today</a></li>
        <li class="nav-item"><a href="#" class="nav-link">Weather week</a></li>
        <li class="nav-item"><a href="#" class="nav-link">Weather info</a></li>
        <li class="nav-item"><a href="#" class="nav-link">Contact us</a></li>
      </ul>
    </header>
</template>

<style scoped lang="scss">

</style>