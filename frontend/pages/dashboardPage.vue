<template>
  <div class="bg-cover bg-center min-h-screen flex items-center justify-center">
    <section class="bg-gray-100 p-8 shadow-lg max-w-3xl w-full rounded-lg text-left">
      <h1 class="text-4xl mt-4 mb-8 text-center">
        Benvingut <b>{{ userData.nom }}</b>
      </h1>
      <p class="text-xl mb-8 text-center">
        Des d'aquí podràs consultar les teves dades d'usuari i les lligues on estas inscrit
      </p>

      <div v-if="userData">
        <h2 class="text-2xl mt-4 mb-4">
          Detalls de l'usuari:
        </h2>
        <p><b>Nom complet:</b> {{ userData.nom }} {{ userData.cognoms }}</p>
        <p><b>Email:</b> {{ userData.email }}</p>
        <p><b>Edat:</b> {{ userData.edat }}</p>
        <p><b>Numero federat:</b> {{ userData.num_federat }}</p>
        <p><b>Admin:</b> {{ userData.admin ? 'Sí' : 'No' }}</p>

        <h3 class="text-xl mt-6 mb-4">
          Tornejos:
        </h3>
        <ul>
          <li
            v-for="lliga in userData.lligues"
            :key="lliga.lliga_id"
            class="cursor-pointer hover:text-blue-500"
            @click="onLligaClick(lliga.nomLliga, lliga.tipus_torneig)"
          >
            {{ lliga.nomLliga }}
          </li>
        </ul>
        <div>
          <LligaTaula v-if="tipusTorneig === 'Lliga'" :lliga-nom="lligaNom" :partides="partides" />
          <QuadreEliminatories v-if="tipusTorneig === 'TorneigEliminatori'" :partides="partides" />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from 'axios'
import QuadreEliminatories from './components/eliminatoria.vue'
import LligaTaula from './components/lligataula.vue'
import { useRuntimeConfig } from '#app'

export default {
  name: 'DashboardPage',
  components: {
    QuadreEliminatories,
    LligaTaula
  },
  data () {
    return {
      userData: {},
      partides: [],
      tipusTorneig: null // Añadimos esta propiedad para manejar el tipo de torneo
    }
  },
  mounted () {
    this.getUserData()
  },
  methods: {
    async getUserData () {
      try {
        // eslint-disable-next-line camelcase
        const jugador_id = localStorage.getItem('user_id')
        // eslint-disable-next-line camelcase
        if (!jugador_id) {
          throw new Error('Jugador ID no encontrado en localStorage')
        }
        const config = useRuntimeConfig()
        const baseURL = config.public.apiBaseUrl
        // eslint-disable-next-line camelcase
        const response = await axios.get(`${baseURL}/api/dashboard/${jugador_id}`)
        this.userData = response.data
      } catch (error) {
        console.error('No s\'han pogut carregar les dades de l\'usuari', error)
      }
    },

    async onLligaClick (lligaNom, tipusTorneig) {
      try {
        console.log('semenakoooooo')
        const config = useRuntimeConfig()
        const baseURL = config.public.apiBaseUrl
        const response = await axios.get(`${baseURL}/api/partides`)
        this.partides = response.data.filter(partida => partida.lliga === lligaNom)
        // Establecemos el tipo de torneo
        this.tipusTorneig = tipusTorneig
        // eslint-disable-next-line eqeqeq
      } catch (error) {
        console.error('Error al cargar las partidas:', error)
      }
    }
  }
}
</script>

<style scoped>
.text-left {
  text-align: left;
}
.text-center {
  text-align: center;
}
</style>
