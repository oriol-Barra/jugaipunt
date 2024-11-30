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
  /**
 * @name ResultatsPartides
 * @description pàgina que gestiona la selecció de partides, jugadors i resultats per a una lliga.
 * Permet seleccionar una lliga, una partida, un guanyador i enviar els resultats.
 */
  name: 'ResultatsPartides',

  data () {
  /**
   * @data
   * @description Dades reactivas per emmagatzemar la selecció de la lliga, partida, guanyador,
   * i les llistes de partides i jugadors.
   */
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
  /**
   * @method buscarLligues
   * @description Realitza una sol·licitud a l'API per obtenir les lligues disponibles i les afegeix a la
   * llista `lligues`. Aquesta funció es crida quan el component es carrega.
   */
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
    /**
   * @method buscarPartides
   * @description Realitza una sol·licitud a l'API per obtenir les partides disponibles per a la lliga seleccionada
   * i les afegeix a la llista `partides`.
   */
    async buscarPartides () {
      try {
        const config = useRuntimeConfig()
        const baseURL = config.public.apiBaseUrl
        const response = await axios.get(`${baseURL}/api/partides`)

        console.log(response)
        console.log(this.lliga_seleccionada)

        // Vacía las partidas antes de comenzar
        this.partides = []

        // Itera y filtra las partidas que coincidan con la liga seleccionada
        for (let i = 0; i < response.data.length; i++) {
          // eslint-disable-next-line eqeqeq
          if (response.data[i].lliga == this.lliga_seleccionada) {
            const nomPartida = `Partida ${response.data[i].jugador1} contra ${response.data[i].jugador2}`
            this.partides.push({ label: nomPartida, value: response.data[i].partida_pk })
          }
        }
      } catch (error) {
        console.error('Error en la cerca:', error)
      }
    },

    /**
   * @method onSelectPartida
   * @description En funció de la partida seleccionada, mostra les opcions disponibles per al guanyador de la partida.
   */
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

    /**
   * @method enviarResultats
   * @description Envia els resultats seleccionats a l'API per ser registrats, incloent la partida escollida
   * i el guanyador. Mostra un missatge d'èxit o error en funció de la resposta.
   */
    async enviarResultats () {
      try {
        const config = useRuntimeConfig()
        const baseURL = config.public.apiBaseUrl
        const response = await axios.post(`${baseURL}/api/registreresultat`, {
          partida_pk: this.partida_escollida,
          guanyador: this.jugador_guanyador
        })

        if (response.status === 201) {
          alert('Resultat registrat correctament!')
        }
      } catch (error) {
        // Si el error es de tipo 400 (Bad Request), mostramos el mensaje de error del backend
        if (error.response && error.response.status === 400) {
          alert(error.response.data.error) // Mostrar el mensaje de error del backend
        } else {
          // Si el error es diferente, mostramos un mensaje genérico
          console.error('Error al enviar resultats:', error)
          alert('Hubo un problema al intentar enviar los resultados. Intenta de nuevo.')
        }
      } finally {
        // Limpiar los datos sin importar si hubo un error o no
        this.partida_escollida = ''
        this.jugador_guanyador = ''
        this.liga_seleccionada = '' // Limpiar la liga seleccionada
      }
    },

    /**
   * @method getResultatsLliga
   * @description Obté els resultats per a una lliga específica cridant a l'API i passant la lliga seleccionada
   * com a paràmetre.
   */
    async getResultatsLliga () {
      try {
        const config = useRuntimeConfig()
        const baseURL = config.public.apiBaseUrl
        const response = await axios.get(`${baseURL}/api/resultatslliga`, {
          params: { lliga_id: this.lliga_seleccionada }
        })
        console.log(response.data)
      } catch (error) {
        console.error('Error en la cerca de resultats:', error)
      }
    }
  }
}
</script>

<style scoped>
</style>
