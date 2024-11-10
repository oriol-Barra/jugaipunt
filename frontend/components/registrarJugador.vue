<template>
  <div class="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
    <div class="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
      <h1 class="text-3xl font-bold mb-8 text-center">
        Registrar Jugador
      </h1>
      <form @submit.prevent="submit">
        <div class="mb-4">
          <label class="block text-gray-700" for="name">Nom</label>
          <input
            id="name"
            v-model="name"
            class="form-input mt-1 block w-full h-12 rounded px-4 border border-gray-300"
            type="text"
            required
            placeholder="Nom"
          >
        </div>
        <div class="mb-4">
          <label class="block text-gray-700" for="cognoms">Cognoms</label>
          <input
            id="cognoms"
            v-model="cognoms"
            class="form-input mt-1 block w-full h-12 rounded px-4 border border-gray-300"
            type="text"
            required
            placeholder="Cognoms"
          >
        </div>
        <div class="mb-4">
          <label class="block text-gray-700" for="edad">Edat</label>
          <input
            id="edad"
            v-model="edad"
            class="form-input mt-1 block w-full h-12 rounded px-4 border border-gray-300"
            type="number"
            required
            placeholder="Edat"
          >
        </div>
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
          Registrar Jugador
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios' // Importa Axios per a realizar sol·licituds

export default {

  methods: {
    async submit () {
      try {
        const baseURL = process.env.API_BASE_URL || 'http://localhost:8000'
        const response = await axios.post(`${baseURL}/api/jugador/jugador/`, {
          nom: this.name,
          cognoms: this.cognoms,
          edat: this.edad,
          email: this.email,
          contrasenya: this.password
        })

        if (response.status === 200) {
          alert('Jugador registrat amb èxit!')
          // Aquí puedes agregar lógica para redirigir o limpiar el formulario
        }
      } catch (error) {
        console.error('Error al registrar el jugador:', error.response?.data || error.message)
        alert(`Hi ha hagut un error amb el registre del jugador: ${error.response?.data.error || error.message}`)
      }
    }
  }
}
</script>

<style scoped>
/* Puedes agregar estilos personalizados aquí si es necesario */
</style>
