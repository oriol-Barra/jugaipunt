<template>
  <div class="min-h-screen flex flex-col justify-center items-center bg-cover" style="background-image: url('./assets/background.jpg'); ">
    <div class="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
      <h1 class="text-3xl font-bold mb-8 text-center">
        Alta de nou usuari
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

        <div class="mb-4">
          <label class="block text-gray-700" for="password">Repeteix contrasenya</label>
          <input
            id="passwordRepeat"
            v-model="passwordRepeat"
            class="form-input mt-1 block w-full h-12 rounded px-4 border border-gray-300"
            type="password"
            required
            placeholder=" Repeteix contrasenya"
          >
        </div>

        <div class="mb-4">
          <label class="block text-gray-700" for="password">Nom</label>
          <input
            id="nom"
            v-model="textarea"
            class="form-input mt-1 block w-full h-12 rounded px-4 border border-gray-300"
            type="text"
            required
            placeholder="Nom"
          >
        </div>

        <div class="mb-4">
          <label class="block text-gray-700" for="password">Cognoms</label>
          <input
            id="cognoms"
            v-model="textarea"
            class="form-input mt-1 block w-full h-12 rounded px-4 border border-gray-300"
            type="text"
            required
            placeholder="Cognoms"
          >
        </div>

        <div class="mb-4">
          <label class="block text-gray-700" for="password">Edat</label>
          <input
            id="edat"
            v-model="textarea"
            class="form-input mt-1 block w-full h-12 rounded px-4 border border-gray-300"
            type="text"
            required
            placeholder="Edat"
          >
        </div>

        <button
          class="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 w-full mb-4"
          type="submit"
        >
          Registre d'usuari
        </button>
      </form>
    </div>
   </div>
  
</template>

<script>

import axios from 'axios' //Importa Axios para realizar solicituds

//afegir aqui validacio de que password = passwordRepeat

export default {

  data () {
    return {
      email: '',
      password: '',
      nom: '',
      cognoms: '',
      edat: ''
    }
  },
  methods: {
    async submit () {
      try {
        const response = await axios.post('http://localhost:8000/api/jugador/jugador/', {
          email: this.email,
          contrasenya: this.password,
          nom: this.name,
          cognoms: this.cognoms,
          edat: this.edad
          })

        if (response.status === 201) {
          alert('Jugador registrat amb èxit!')
          
        }
      } catch (error) {
        console.error('Error per consola:', error.response?.data || error.message) //revisar error si ja existeix
        alert(`Ha ocurrido un error al registrar el jugador: ${error.response?.data.error || error.message}`)
      }
    }
  }
}
</script>

<style scoped>
</style>
