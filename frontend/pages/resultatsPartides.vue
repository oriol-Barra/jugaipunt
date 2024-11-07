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
            <label class="block text-gray-700" for="partides">Buscar Partida</label>

            <UFormGroup name="select_partides" label="Partides">
              <USelect v-model="partida_escollida" placeholder="Select..." :options="partides" />
            </UFormGroup>

          </div>
          <div class="mb-4">
            <label class="block text-gray-700" for="guanyador">Selecciona el Guanyador</label>

            <UFormGroup name="escull_jugador" label="Guanyador">
              <USelect v-model="jugador_guanyador" placeholder="Select..." :options="jugadors" />
            </UFormGroup>

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

    //var partides = []
    //
    return {
      partida_escollida: undefined,
      jugador_guanyador: undefined,
      partides: [],
      jugadors: []
    }
  },
  mounted () {
    // busquem partides
    this.buscarPartides()
    // busquem jugadors partida


  },
  methods: {
    async buscarPartides () {

      try {
        const baseURL = process.env.API_BASE_URL || 'http://localhost:8000'
        const response = await axios.get(`${baseURL}/api/partides`, {
        })

        for (var i=0; i<response.data.length; i++) {
          console.log(response.data)
          var nomPartida = 'Partida ' + i
          this.partides = [
            {label: nomPartida, value: response.data[i].partida_pk}
          ]

          this.jugadors = [
            {label: response.data[i].jugador1, value: 'jugador1'},
            {label: response.data[i].jugador2, value: 'jugador2'},
          ]
        }

      } catch (error) {
        console.error('Error en la cerca:', error)
      }
    },

    async enviarResultats () {
      try {
        const baseURL = process.env.API_BASE_URL || 'http://localhost:8000'

        // enviar les dades per a afegir resultats
        const response = await axios.post(`${baseURL}/api/registreresultat`, {
          partida_pk: this.partida_escollida,
          guanyador: this.jugador_guanyador,
        })

        if (response.status === 201) {
          alert('Resultat registrat correctament!')
        }

        // neteja dades
        this.partida_escollida = ''
        this.jugador_guanyador = ''
      } catch (error) {
        console.error('Error al enviar resultats:', error)
      }
    }
  }
}
</script>

<style scoped>
</style>
