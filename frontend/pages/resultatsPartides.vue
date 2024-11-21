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
            <!-- Nou camp per a seleccionar la lliga -->
            <div class="mb-4">
              <label class="block text-gray-700" for="liga">Selecciona la Liga</label>

              <UFormGroup name="escull_liga" label="Lliga">
                <USelect v-model="lliga_seleccionada" placeholder="Select..." :options="lligues" @change="buscarPartides" />
              </UFormGroup>
            </div>

            <UFormGroup name="select_partides" label="Partides">
              <USelect v-model="partida_escollida" placeholder="Select..." :options="partides" @change="onSelectPartida" />
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
import { useRuntimeConfig } from '#app'

export default {
  name: 'ResultatsPartides',

  data () {
    return {
      partida_escollida: undefined,
      jugador_guanyador: undefined,
      lliga_seleccionada: undefined, // Nueva propiedad para la liga
      partides: [],
      jugadors: [],
      lligues: [] // Lista de ligas
    }
  },
  mounted () {
    this.buscarLligues() // Llamar a la función para buscar las ligas
  },
  methods: {
    /** Busquem les lligues disponibles i les afegim al llistat */
    async buscarLligues () {
      try {
        const config = useRuntimeConfig()
        const baseURL = config.public.apiBaseUrl
        const response = await axios.get(`${baseURL}/api/lligues`) // Ajusta la URL si es necesario
        for (let i = 0; i < response.data.length; i++) {
          this.lligues.push({ label: response.data[i].nom_lliga, value: response.data[i].nom_lliga })
        }
      } catch (error) {
        console.error('Error en la cerca de ligas:', error)
      }
    },
    /** Busquem les partides disponibles i les afegim al llistat */
    async buscarPartides () {
      try {
        const config = useRuntimeConfig()
        const baseURL = config.public.apiBaseUrl
        const response = await axios.get(`${baseURL}/api/partides`, {
        })
        console.log(response)
        console.log(this.lliga_seleccionada)

        for (let i = 0; i < response.data.length; i++) {
          const nomPartida = 'Partida ' + response.data[i].jugador1 + ' contra ' + response.data[i].jugador2
          // eslint-disable-next-line eqeqeq
          if (response.data[i].lliga == this.lliga_seleccionada) {
            this.partides.push({ label: nomPartida, value: response.data[i].partida_pk })
          }
        }
      } catch (error) {
        console.error('Error en la cerca:', error)
      }
    },

    /** En funció de la partida escollida, mostrem les opcions de resultats */
    async onSelectPartida () {
      try {
        const config = useRuntimeConfig()
        const baseURL = config.public.apiBaseUrl
        const response = await axios.get(`${baseURL}/api/partides`, {
        })
        for (let i = 0; i < response.data.length; i++) {
          // eslint-disable-next-line eqeqeq
          if (this.partida_escollida == response.data[i].partida_pk) {
            this.jugadors = [
              { label: response.data[i].jugador1, value: 'jugador1' },
              { label: response.data[i].jugador2, value: 'jugador2' },
              { label: 'Empat', value: 'EMP' }
            ]
          }
        }
      } catch (error) {
        console.error('Error en la cerca:', error)
      }
    },

    /** Enviem els resultats, incloent la liga seleccionada */
    async enviarResultats () {
      try {
        const config = useRuntimeConfig()
        const baseURL = config.public.apiBaseUrl

        const response = await axios.post(`${baseURL}/api/registreresultat`, {
          partida_pk: this.partida_escollida,
          guanyador: this.jugador_guanyador,
          liga_pk: this.liga_seleccionada // Enviar la liga seleccionada
        })

        if (response.status === 201) {
          alert('Resultat registrat correctament!')
        }

        // neteja dades
        this.partida_escollida = ''
        this.jugador_guanyador = ''
        this.liga_seleccionada = '' // Limpiar la liga seleccionada
      } catch (error) {
        console.error('Error al enviar resultats:', error)
      }
    }
  }
}
</script>

<style scoped>
</style>
