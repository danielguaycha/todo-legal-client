<template>
  <v-form @submit.prevent="login">
    {{/*Username*/}}
    <v-text-field v-model="formData.username" required :disabled="loader" :error="error!==null" :error-messages="error"
                  filled background-color="white" label="Cedula de identidad" type="number" />
    {{/*PassWord*/}}
    <v-text-field v-model="formData.password" required :disabled="loader"
        filled background-color="white" label="Contraseña" type="password" />
    <div class="text-center">
      No tengo una cuenta <router-link class="secondary--text" :to="{name: 'Register'}">Crear una gratis</router-link>
    </div>
    {{/*Submit Button*/}}
    <div class="text-end mt-4">
      <v-btn elevation="0" :loading="loader"
             type="submit" text color="secondary">Continuar<v-icon class="ms-1">mdi-arrow-right</v-icon></v-btn>
    </div>
  </v-form>
</template>

<script>
import {authService} from "@/modules/auth/services/auth.service";

export default {
  name: "FormLogin",
  data: () => ({
    formData: {
      username: '',
      password: ''
    },
    loader: false,
    error: null,
  }),
  methods: {
    login() {
      // validating form
      if (!this.formData.password || !this.formData.username) {
        this.error = "Ingrese un usuario y una contraseña";
        return;
      }
      // http request
      this.loader = true;
      this.error = null;
      authService.login(this.formData.username, this.formData.password).then(res => {
        if (res.data.user) {
          authService.setToken(res.data.token);
          authService.setUser(res.data.user);
          this.$router.push({name: "Home"});
        }
      }).catch(err => {
        this.error = err;
      }).finally(() => this.loader = false)
    }
  }
}
</script>
