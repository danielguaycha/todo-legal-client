<template>
  <v-form @submit.prevent="register" >
    {{/*FistName*/}}
    <v-text-field v-model="form.first_name"
        filled background-color="white" label="Nombres" required />
    {{/*LastNames*/}}
    <v-text-field v-model="form.last_name"
        filled background-color="white" label="Apellidos" />
    {{/*Email*/}}
    <v-text-field v-model="form.email"
        filled background-color="white" label="Email" type="email"/>
    {{/*DNI*/}}
    <v-text-field filled background-color="white" label="Cedula de identidad"
                  type="number"
                  v-model="form.username"/>
    {{/*Passwords*/}}
    <v-row>
      <v-col>
        <v-text-field v-model="form.password"
            filled background-color="white" label="Contraseña" type="password" />
      </v-col>
      <v-col>
        <v-text-field v-model="form.confirm_password"
            filled background-color="white" label="Confirmar Contraseña" type="password" />
      </v-col>
    </v-row>
    {{/*Alerts for error messages*/}}
    <v-alert type="error" v-if="error !== null">{{ error }}</v-alert>
    <div class="text-center">
      ¿Ya tienes una cuenta? <router-link class="secondary--text" :to="{name: 'Login'}">Inicia sesión</router-link>
    </div>
    {{/*Submit button*/}}
    <div class="text-end mt-4">
      <v-btn elevation="0" :loading="loader" type="submit"
             text color="secondary">Registrarse<v-icon class="ms-1">mdi-arrow-right</v-icon></v-btn>
    </div>
  </v-form>
</template>

<script>
import {authService} from "@/modules/auth/services/auth.service";

export default {
  name: "FrmRegister",
  data: () => ({
    form: {
      username: '',
      password: '',
      confirm_password: '',
      email: '',
      first_name: '',
      last_name: '',
    },
    loader: false,
    error: null
  }),
  methods: {
    register() {
      if(!this.validate()) return;
      this.loader = true;
      this.error = null;
      authService.register(this.form).then(res => {
        if (res.data) {
          console.log(res.data)
          authService.setToken(res.data.token);
          authService.setUser(res.data.user);
          this.$router.push({name: "Home"})
        }
      }).catch(err => {
        this.error = err;
      }).finally(() => {
        this.loader = false;
      })
    },
    validate() {
      if (!this.form.last_name || !this.form.first_name || !this.form.username || !this.form.email) {
        this.error = "Complete el formulario para continuar"
        return false;
      }

      if (! (/([0-9]{10,13})+$/.test(this.form.username)) ) {
        this.error = "Ingrese un numero de cédula válido"
        return false;
      }

      if (!(/([a-zA-z0-9-_.+ñ]+@)([a-zA-z0-9_.+-]+\.)+([a-zA-z0-9]{2,3})$/im).test(this.form.email)) {
        this.error = "Ingrese un email válido"
        return false;
      }

      if (!this.form.password || !this.form.confirm_password) {
        this.error = "Ingrese una contraseña y su confirmación"
        return false;
      }

      if (this.form.password.trim().length < 8) {
        this.error = "Ingrese una contraseña de al menos 8 caracteres"
        return false;
      }

      if (this.form.password !== this.form.confirm_password) {
        this.error = "Las contraseñas no coinciden";
        return false;
      }

      return true;
    }
  }
}
</script>
