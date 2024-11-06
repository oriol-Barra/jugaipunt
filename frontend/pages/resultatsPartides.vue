<template>
  <div class="min-h-screen flex flex-col justify-center items-center">
    <section class="bg-white p-8 rounded-lg shadow-lg w-full max-w-4xl mt-4">
      <h1 class="text-4xl text-center mt-4 mb-8">
        Formulari per a introduïr els resultats
      </h1>
      <div class="space-y-8">
        <!-- Seccio d'introduccio -->
        <form @submit.prevent="submit">
          <div class="mb-4">
            <label class="block text-gray-700" for="date">Data partida</label>
            <input
              id="date"
              v-model="date"
              class="form-input mt-1 block w-full h-12 rounded px-4 border border-gray-300"
              type="date"
              required
              placeholder="Data partida"
            >
          </div>
          <div class="mb-4">
            <label class="block text-gray-700" for="guanyador">Buscar Guanyador</label>
            <input
              id="guanyador"
              v-model="guanyador"
              class="form-input mt-1 block w-full h-12 rounded px-4 border border-gray-300"
              type="text"
              required
              placeholder="Guanyador"
              @input="buscarGuanyador"
            >
          </div>
          <div class="mb-4 text-gray-700">
            El guanyador escollit és: {{ guanyador.nom }} {{ guanyador.cognoms }}
          </div>
          <div class="mb-4">
            <label class="block text-gray-700" for="perdedor">Buscar Perdedor</label>
            <input
              id="perdedor"
              v-model="perdedor"
              class="form-input mt-1 block w-full h-12 rounded px-4 border border-gray-300"
              type="text"
              required
              placeholder="Perdedor"
              @input="buscarPerdedor"
            >
          </div>
          <div class="mb-4 text-gray-700">
            El perdedor escollit és: {{ perdedor.nom }} {{ perdedor.cognoms }}
          </div>

          <button
            class="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 w-full mb-4"
            type="submit"
            @click="enviarResultats"
          >
            Enviar resultats
          </button>
        </form>
      </div>
    </section>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'ResultatsPartides',
  data () {
    return {
      date: '',
      guanyador: '',
      perdedor: ''
    }
  },
  methods: {
    async buscarGuanyador () {

      try {
        const baseURL = process.env.API_BASE_URL || 'http://localhost:8000'
        const response = await axios.get(`${baseURL}/api/jugador/buscar`, {
          params: { nom: this.guanyador } // envia el nom com a paràmetre
        })

        this.guanyador = response.data[0] // Actualitza els resultats amb les dades de la resposta
      } catch (error) {
        console.error('Error en la cerca:', error)
      }
    },

    async buscarPerdedor () {
        try {
          const baseURL = process.env.API_BASE_URL || 'http://localhost:8000'
          const response = await axios.get(`${baseURL}/api/jugador/buscar`, {
            params: { nom: this.perdedor } // envia el nom com a paràmetre
          })

          this.perdedor = response.data[0] // Actualitza els resultats amb les dades de la resposta
        } catch (error) {
          console.error('Error en la cerca:', error)
        }
    },

    async enviarResultats () {
      try {
        const baseURL = process.env.API_BASE_URL || 'http://localhost:8000'

        // enviar les dades per a afegir resultats
        const response = await axios.post(`${baseURL}/api/resultats`, {
          guanyador: this.guanyador,
          perdedor: this.perdedor,
          date: this.date,
        })

        if (response.status === 201) {
          alert('Resultat registrat correctament!')
        }

        // neteja dades
        this.date = ''
        this.guanyador = ''
        this.perdedor = ''
      } catch (error) {
        console.error('Error al enviar resultats:', error)
      }
    }
  }
}
</script>

<style scoped>
</style>
