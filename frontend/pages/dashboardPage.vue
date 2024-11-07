<template>
  <div class="flex flex-col">
    <section class="bg-gray-100 p-8 shadow-lg min-h-screen w-full max-w-7xl pl-4">
      <h1 class="text-4xl mt-4 mb-8">
        Benvingut <b>{{ userData.nom }}</b>
      </h1>
      <p class="text-xl mb-8">
        Aquest és el dashboard de la zona privada de Juga i Punt. Proximament accedeix aquí als tornejos.
        A la part superior veureu el menú amb totes les opcions i ja no s'ha de mostrar ni login ni registre perquè ja estàs connectat.
      </p>

      <!-- Mostramos los detalles del jugador -->
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
          Lligues:
        </h3>
        <ul>
          <li v-for="lliga in userData.lligues" :key="lliga.lliga_id">
            {{ lliga.nomLliga }}
          </li>
        </ul>

        <h3 class="text-xl mt-6 mb-4">
          Partides:
        </h3>
        <ul>
          <li v-for="partida in userData.partides" :key="partida.partida_id">
            Partida ID: {{ partida.partida_id }} - Contra: {{ partida.contrincant.nom }} {{ partida.contrincant.cognoms }} - Resultat: {{ partida.resultat }}
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'DashboardPage',
  data () {
    return {
      userData: {}, // Aquí guardamos toda la información del jugador
      loading: true,
      error: null
    }
  },
  mounted () {
    this.getUserData()
  },
  methods: {
    async getUserData () {
      try {
        // Obtener el ID del jugador desde localStorage
        // eslint-disable-next-line camelcase
        const jugador_id = localStorage.getItem('user_id')
        console.log('Jugador ID desde localStorage:', jugador_id)

        // eslint-disable-next-line camelcase
        if (!jugador_id) {
          throw new Error('Jugador ID no encontrado en localStorage')
        }

        // Hacer una llamada al backend para obtener toda la información del jugador
        // eslint-disable-next-line camelcase
        const response = await axios.get(`http://localhost:8000/api/dashboard/${jugador_id}`)

        // Asignar toda la información del jugador al estado
        this.userData = response.data
        console.log(this.userData)
      } catch (error) {
        this.error = 'No s\'han pogut carregar les dades de l\'usuari'
        console.error(error)
      } finally {
        this.loading = false
      }
    }
  }
}
</script>

<style scoped>
</style>
