<template>
  <v-container>
    <v-row>
      <v-col md="6" lg="6" offset-lg="3" offset-md="3">
        <v-card elevation="0" class="card-gray">
         <v-card-text>
           <div class="text-center">
             <v-icon size="50" color="green">mdi-checkbox-marked-circle-outline</v-icon>
           </div>
           <div class="text-h6 text-center secondary--text font-weight-bold my-6">
             ¡Validación Exitosa!
           </div>
           <v-card elevation="0" class="card-white px-4" v-if="user">
             <v-card-title class="text-body-1 secondary--text font-weight-medium">Datos verificados</v-card-title>
             <v-card-text>
               <div class="mb-4">
                 <span class="secondary--text d-block">Nombres y apellidos</span>
                 <span>{{ user.first_name }} {{ user.last_name }}</span>
               </div>
               <div class="mb-4">
                 <span class="secondary--text d-block">Cedula de identidad</span>
                 <span>{{ user.username }}</span>
               </div>
               <div class="mb-4">
                 <span class="secondary--text d-block">Correo</span>
                 <span>{{ user.email ? user.email : 'ninguno'}}</span>
               </div>
             </v-card-text>
           </v-card>
           <div class="text-end mt-4">
             <v-btn elevation="0" @click="logout"
                    text color="secondary">Finalizar<v-icon class="ms-1">mdi-arrow-right</v-icon></v-btn>
           </div>
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
import {authService} from "@/modules/auth/services/auth.service";

export default {
  name: "Home",
  data: () => ({
    user: null
  }),
  mounted() {
    this.getUser();
  },
  methods: {
    getUser() {
      if (authService.getToken() && authService.getUser()) {
        this.user = authService.getUser();
        return;
      }
      this.logout();
    },
    logout() {
      authService.clearSession();
      this.$router.push({name: 'Login'})
    }
  }
}
</script>

<style scoped>
  .card-gray {
    background: rgba(0,0,0, .02) !important;
    border-top-right-radius: 15% !important;
    border-bottom-left-radius: 15% !important;
    padding: 1rem 0;
  }
  .card-white {
    border-top-right-radius: 12% !important;
    border-bottom-left-radius: 12% !important;
  }
</style>
