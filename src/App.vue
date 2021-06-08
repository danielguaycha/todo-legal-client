<template>
  <v-app>
    <v-main>
      <Header/>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import Header from "@/core/components/Header";
export default {
  name: 'App',
  components: {Header}
};
</script>
