<template>
  <div class="min-h-screen flex flex-col justify-center items-center bg-cover">
    <div class="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
      <h1 class="text-3xl font-bold mb-8 text-center">
        Iniciar Sessió
      </h1>
      <form @submit.prevent="submit">
        <div class="mb-4">
          <label class="block text-gray-700" for="email">Email</label>
          <input
            id="email"
            v-model="email"
            class="form-input mt-1 block w-full h-12 rounded px-4 border border-gray-300"
            type="email"
            required
            placeholder="Email"
          >
        </div>
        <div class="mb-4">
          <label class="block text-gray-700" for="password">Contrasenya</label>
          <input
            id="password"
            v-model="password"
            class="form-input mt-1 block w-full h-12 rounded px-4 border border-gray-300"
            type="password"
            required
            placeholder="Contrasenya"
          >
        </div>
        <button
          class="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 w-full mb-4"
          type="submit"
        >
          Iniciar Sessió
        </button>
      </form>
      <!-- recuperar contrasenya navega a la pagina per introduir les dades -->
      <div class="flex justify-center w-full">
        <NuxtLink to="/recuperarPassword" class="text-black-500 align=center hover:underline">
        Recuperar contrasenya
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios' // Importa Axios per a realizar sol·licituds
import { useRuntimeConfig } from '#app'

export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async submit () {
      try {
        const config = useRuntimeConfig()
        const baseURL = config.public.apiBaseUrl
        const response = await axios.post(`${baseURL}/api/login`, {
          email: this.email,
          contrasenya: this.password
        })
        if (response.status === 200) {
          const token = response.data.token
          const idUsuari = response.data.id_usuari
          const nomUsuari = response.data.nom_usuari
          const admin = response.data.admin

          // Guardar el token en LocalStorage
          localStorage.setItem('authToken', token)
          alert(`Benvingut/da: ${response.data.message}`)

          // Guardar el nom en LocalStorage
          localStorage.setItem('nom_usuari', nomUsuari)

          // Guardar l'id en LocalStorage
          localStorage.setItem('user_id', idUsuari)

          // Guardar l'estat d'admin al localStorage
          localStorage.setItem('admin', admin)

          // Netegem els camps del formulari
          this.email = ''
          this.password = ''

          // Redirigim a la part restringida de la web
          window.location = '/DashboardPage'
        }
      } catch (error) {
        const errorMessage = error.response?.data?.error || error.message
        alert(`Hi ha hagut un error: ${errorMessage}`)
      }
    }
  }
}
</script>

<style scoped>
</style>
