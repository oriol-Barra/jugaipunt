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
          Tornejos:
        </h3>
        <ul>
          <li
            v-for="lliga in userData.lligues"
            :key="lliga.lliga_id"
            class="cursor-pointer hover:text-blue-500"
            @click="onLligaClick(lliga.nomLliga)"
          >
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
        <div id="tabla-container" class="mt-8" />
      </div>
    </section>
  </div>
</template>

<script>
import axios from 'axios'
import { useRuntimeConfig } from '#app'

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
        const config = useRuntimeConfig()
        const baseURL = config.public.apiBaseUrl
        // eslint-disable-next-line camelcase
        const response = await axios.get(`${baseURL}/api/dashboard/${jugador_id}`)
        this.userData = response.data
      } catch (error) {
        this.error = 'No s\'han pogut carregar les dades de l\'usuari'
        console.error(error)
      } finally {
        this.loading = false
      }
    },

    async onLligaClick (lligaNom) {
      try {
        const config = useRuntimeConfig()
        const baseURL = config.public.apiBaseUrl
        const response = await axios.get(`${baseURL}/api/partides`)

        console.log(response)

        // Vacía las partidas antes de comenzar
        this.partides = []

        // Itera y filtra les partides que coincideixin amb la lliga seleccionada
        for (let i = 0; i < response.data.length; i++) {
          // eslint-disable-next-line eqeqeq
          if (response.data[i].lliga == lligaNom) {
            const Partida = {
              jugador1: response.data[i].jugador1,
              jugador2: response.data[i].jugador2,
              resultat: response.data[i].resultat
            }
            this.partides.push(Partida)
          }
        }
        console.log(this.partides)
        this.generarTaulaPartides(lligaNom, this.partides)
      } catch (error) {
        console.error('Error en la cerca:', error)
      }
    },
    generarTaulaPartides (nomLliga, partides) {
    // Localizar o crear el contenedor para la tabla
      const container = document.getElementById('tabla-container')
      if (!container) {
        console.error('No se encontró el contenedor para la tabla.')
        return
      }

      // Limpiar contenido previo
      container.innerHTML = ''

      // Crear el título de la liga
      const titulo = document.createElement('h3')
      titulo.className = 'text-2xl font-bold text-center mb-4'
      titulo.innerText = `Lliga: ${nomLliga}`
      container.appendChild(titulo)

      // Crear la tabla
      const table = document.createElement('table')
      table.className = 'table-auto w-full border-collapse border border-gray-400'

      // Encabezado de la tabla
      const thead = document.createElement('thead')
      thead.innerHTML = `
      <tr class="bg-gray-200">
        <th class="border border-gray-400 px-4 py-2">Jugador 1</th>
        <th class="border border-gray-400 px-4 py-2">Jugador 2</th>
        <th class="border border-gray-400 px-4 py-2">Resultat</th>
      </tr>
    `
      table.appendChild(thead)

      // Cuerpo de la tabla
      const tbody = document.createElement('tbody')
      partides.forEach((partida) => {
        console.log(partida)
        const row = document.createElement('tr')
        row.innerHTML = `
        <td class="border border-gray-400 px-4 py-2">${partida.jugador1}</td>
        <td class="border border-gray-400 px-4 py-2">${partida.jugador2}</td>
        <td class="border border-gray-400 px-4 py-2">${partida.resultat}</td>
      `
        tbody.appendChild(row)
      })
      table.appendChild(tbody)

      // Insertar la tabla en el contenedor
      container.appendChild(table)
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
