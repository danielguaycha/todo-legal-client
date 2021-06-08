<template>
  <v-container>
    <v-row>
      <v-col md="6" lg="6" offset-lg="3" offset-md="3">
        <v-card elevation="0">
          <v-card-text>
            <frm-title title="Bienvenido Usuario"></frm-title>
            <p class="text-center font-weight-regular">
              Por favor ingresa a tu cuenta ingresando tu numero de cedula y contraseña.
              Si no tienes una cuenta en TodoLega, puedes crear una gratis.
            </p>
            {{/*Login Form*/}}
            <Form-login/>
          </v-card-text>
        </v-card>
        <div class="text-center mt-5">
          <small class="grey--text">Examen By: Daniel Guaycha</small>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import FormLogin from "@/modules/auth/components/FormLogin";
import FrmTitle from "@/modules/auth/components/_partials/FrmTitle";
export default {
  name: "Login",
  components: {FrmTitle, FormLogin}
}
</script>

<style scoped>
  .v-card {
    background: rgba(0,0,0, .02) !important;
    border-top-right-radius: 15% !important;
    border-bottom-left-radius: 15% !important;
  }

</style>
