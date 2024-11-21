<template>
  <div class="min-h-screen flex flex-col justify-center items-center bg-cover">
    <div class="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
      <h1 class="text-3xl font-bold mb-8 text-center">
        Cerca de Jugador
      </h1>
      <form @submit.prevent>
        <div class="mb-4">
          <label class="block text-gray-700" for="nombreJugador">Nom del Jugador</label>
          <input
            id="nombreJugador"
            v-model="nomJugador"
            class="form-input mt-1 block w-full h-12 rounded px-4 border border-gray-300"
            type="text"
            placeholder="Escriu el nom del jugador"
            @input="buscarJugador"
          >
        </div>
      </form>

      <!-- Resultats de búsqueda -->
      <div v-if="resultats.length" class="mt-4">
        <h2 class="text-lg font-semibold">
          Resultats de la cerca:
        </h2>
        <ul class="mt-2">
          <li
            v-for="jugador in resultats"
            :key="jugador.id"
            class="border-b border-gray-300 py-2 cursor-pointer hover:bg-gray-200"
            @click="seleccionarJugador(jugador)"
          >
            {{ jugador.nom }} {{ jugador.cognoms }}
          </li>
        </ul>
      </div>

      <!-- Botó Afegir Jugador -->
      <button
        class="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 w-full mb-4 mt-4"
        :disabled="!jugadorSeleccionat"
        @click="afegirLliga"
      >
        Crea la lliga
      </button>

      <!-- Llista de jugadors afegits -->
      <div v-if="jugadorsAfegits.length" class="mt-4">
        <h2 class="text-lg font-semibold">
          Jugadors Afegits:
        </h2>
        <ul class="mt-2">
          <li
            v-for="jugador in jugadorsAfegits"
            :key="jugador.id"
            class="border-b border-gray-300 py-2"
          >
            {{ jugador.nom }} {{ jugador.cognoms }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { useRuntimeConfig } from '#app'

export default {
  data () {
    return {
      nomJugador: '',
      resultats: [],
      jugadorSeleccionat: null,
      jugadorsAfegits: [],
      numJugadors: 0, // Inicializa numJugadors
      usuari: ''
    }
  },
  mounted () {
    // Rebem les dades desde crealliga.vue
    this.numJugadors = this.$route.query.numJugadors
    this.nomLliga = this.$route.query.nomLliga
    this.dataInici = this.$route.query.dataInici
    this.dataFi = this.$route.query.dataFi
    this.tipusTorneig = this.$route.query.tipusTorneig

    console.log('Número de Jugadors rebut:', this.numJugadors)
  },

  methods: {
    async buscarJugador () {
      // Si el camp de busqueda està buit neteja els resultats
      if (!this.nomJugador) {
        this.resultats = []
        return
      }

      try {
        const config = useRuntimeConfig()
        const baseURL = config.public.apiBaseUrl
        const response = await axios.get(`${baseURL}/api/jugador/buscar`, {
          params: { nom: this.nomJugador } // envia el nom com a paràmetre
        })

        this.resultats = response.data // Actualitza els resultats amb les dades de la resposta
      } catch (error) {
        console.error('Error en la cerca:', error)
      }
    },
    seleccionarJugador (jugador) {
      // Selecciona el jugador fent clic damunt
      this.jugadorSeleccionat = jugador

      // Comprovar si el jugador ja està a la llista de jugadors afegits
      const jaAfegit = this.jugadorsAfegits.some(j => j.id === jugador.id)

      if (jaAfegit) {
        alert('Aquest jugador ja forma part de la lliga')
      } else {
        // Afegir el jugador seleccionat a la llista
        this.jugadorsAfegits.push(this.jugadorSeleccionat)
      }
      // si la llista de jugadors és igual al número de jugadors que ha de tenir la lliga enviem alert indicant que tot està correcte.
      if (this.jugadorsAfegits.length === parseInt(this.numJugadors)) {
        alert("tots els jugadors ja han sigut registrats, si desitjes donar d'alta la lliga prem el botó")
      }
    },
    async afegirLliga () {
      if (!this.jugadorSeleccionat || this.jugadorsAfegits.length < parseInt(this.numJugadors)) {
        alert('Selecciona tots els jugadors requerits abans de crear la lliga.')
        return
      }

      try {
        const config = useRuntimeConfig()
        const baseURL = config.public.apiBaseUrl

        // Extrae solo los IDs de los jugadores para enviar al backend
        const llistaJugadorsIDs = this.jugadorsAfegits.map(jugador => ({ id: jugador.id }))

        // Enviar todas las informaciones necesarias al backend
        const response = await axios.post(`${baseURL}/api/noutorneig`, {
          llistaJugadors: llistaJugadorsIDs,
          nomLliga: this.nomLliga,
          dataInici: this.dataInici,
          dataFi: this.dataFi,
          tipusTorneig: this.tipusTorneig,
          usuari: localStorage.getItem('user_id')
        })

        if (response.status === 201) {
          alert('Lliga o Torneig registrat amb èxit!')
          this.jugadorsAfegits = [] // Limpiar la lista de jugadores añadidos
        }

        // Neteja els camps de selecció i cerca
        this.jugadorSeleccionat = null
        this.nomJugador = ''
        this.resultats = []
      } catch (error) {
        console.error('Error al crear la lliga:', error.response.data)
      }
    }

  }
}
</script>

<style scoped>
</style>
