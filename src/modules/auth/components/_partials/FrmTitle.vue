<template>
  <div>
    <div class="text-h6 text-center secondary--text font-weight-bold">
      {{ title }}
    </div>
    <div class="divider" :style="{ background: $vuetify.theme.themes.light.secondary }"></div>
  </div>
</template>

<script>
export default {
  name: "FrmTitle",
  props: {
    title: {
      required: true,
      type: String
    }
  }
}
</script>

<style scoped>
  .divider {
    height: 3px;
    width: 20%;
    margin: .8rem auto;
  }
</style>
