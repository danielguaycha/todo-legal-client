<template>
  <v-container>
    <v-row>
      <v-col md="6" lg="6" offset-lg="3" offset-md="3">
        <v-card elevation="0">
          <v-card-text>
            <Frm-title title="Crear Cuenta Gratis"></Frm-title>
            <p class="text-center font-weight-regular">
              Ingresa los siguientes datos para registrarte como usuario
            </p>
            <Frm-register/>
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
import FrmTitle from "@/modules/auth/components/_partials/FrmTitle";
import FrmRegister from "@/modules/auth/components/FrmRegister";
export default {
  name: "Register",
  components: {FrmRegister, FrmTitle}
}
</script>

<style scoped>
.v-card {
  background: rgba(0,0,0, .02) !important;
  border-top-right-radius: 15% !important;
  border-bottom-left-radius: 15% !important;
}
</style>
