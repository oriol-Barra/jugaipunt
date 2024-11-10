<template>
  <div class="bg-cover bg-center min-h-screen flex items-center justify-center">
    <section class="bg-gray-100 p-8 shadow-lg max-w-3xl w-full rounded-lg text-left">
      <h1 class="text-4xl mt-4 mb-8 text-center">
        Benvingut <b>{{ userData.nom }}</b>
      </h1>
      <p class="text-xl mb-8 text-center">
        Des d'aquí podràs consultar les teves dades d'usuari i les lligues on estas inscrit
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
        // eslint-disable-next-line camelcase
        const jugador_id = localStorage.getItem('user_id')
        // eslint-disable-next-line camelcase
        if (!jugador_id) {
          throw new Error('Jugador ID no encontrado en localStorage')
        }
        // eslint-disable-next-line camelcase
        const response = await axios.get(`http://localhost:8000/api/dashboard/${jugador_id}`)
        this.userData = response.data
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
.bg-cover {
  background-image: url('/path/to/your/background-image.jpg'); /* Ruta de la imagen de fondo */
  background-size: cover;
  background-position: center;
}
.text-left {
  text-align: left;
}
.text-center {
  text-align: center;
}
</style>
