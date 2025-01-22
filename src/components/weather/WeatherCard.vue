<script>
export default {
  name: "WeatherCard",
  props: {
    icon: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    value: {
      type: Number,
      required: true,
    },
    unit: {
      type: String,
      required: true,
    },
    threshold: {
      type: Number,
      default: null,
    },
    thresholdClass: {
      type: String,
      default: null,
    },
    tooltip: {
      type: String,
      default: null,
    },
  },
}
</script>

<template>
  <div class="col-lg-3">
    <div
        class="shadow-lg p-3 mb-5 bg-body-tertiary rounded" :class="thresholdClass && value > threshold ? thresholdClass : ''">
      <i :class="icon + ' fs-1'" data-bs-toggle="tooltip" data-bs-placement="top" :title="tooltip"></i>
      <p class="pt-4"><strong>{{ label }}:</strong></p>
      <h4>{{ value }} {{ unit }}</h4>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>