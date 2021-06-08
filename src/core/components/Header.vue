<template>
  <v-row align="center" justify="center">
    <v-col class="text-center py-5">
      <img :src="image" class="logo" alt="TodoLegal Logo">
    </v-col>
  </v-row>
</template>

<script>
import image from "./../../assets/logo.png";
export default {
  name: "Header",
  data: () => ({
    image: image
  })
}
</script>
<style>
  .logo {
    height: 50px;
  }
</style>
