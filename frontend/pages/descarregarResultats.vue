<template>
  <div class="min-h-screen flex flex-col justify-center items-center">
    <section class="bg-white p-8 rounded-lg shadow-lg w-full max-w-4xl mt-4">
      <h1 class="text-4xl text-center mt-4 mb-8">
        Descarrega els resultats de la lliga sel·leccionada
      </h1>
      <div class="space-y-8">
        <!-- Seccio d'introduccio -->
        <form @submit.prevent="submit">
          <div class="mb-4">
            <label class="block text-gray-700" for="partides">Sel·lecciona la lliga</label>

            <UFormGroup name="select_lligues" label="Lligues">
              <USelect v-model="lliga_escollida" placeholder="Select..." :options="lligues" />
            </UFormGroup>
          </div>

          <button
            class="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 w-full mb-4"
            type="submit"
            @click="descarregarResultats"
          >
            Descarregar
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
  name: 'DescarregarResultats',

  data () {
    // var partides = []
    //
    return {
      lliga_escollida: undefined,
      partida_escollida: undefined,
      jugador_guanyador: undefined,
      lligues: [],
      partides: [],
      jugadors: []
    }
  },
  mounted () {
    // busquem lligues
    this.buscarLligues()
  },
  methods: {
    /**
     * @method buscarLligues
     * @description Recupera la llista de lligues disponibles a partir del backend i les afegeix
     * a l'array `lligues` per mostrar-les al formulari de selecció.
     *
     * @returns {void} No retorna cap valor. Actualitza l'array `lligues` amb les dades de les lligues.
     */
    /** Busquem les lligues disponibles i les afoegim al llistat */
    async buscarLligues () {
      try {
        const config = useRuntimeConfig()
        const baseURL = config.public.apiBaseUrl
        const response = await axios.get(`${baseURL}/api/lligues`, {
        })

        for (let i = 0; i < response.data.length; i++) {
          const nomLliga = 'Lliga ' + response.data[i].nom_lliga
          this.lligues.push({ label: nomLliga, value: response.data[i].lliga_pk })
        }
      } catch (error) {
        console.error('Error en la cerca:', error)
      }
    },
    // eslint-disable-next-line require-await
    /**
     * @method descarregarResultats
     * @description Gestiona la descàrrega dels resultats de la lliga seleccionada.
     * Envia la sol·licitud per obtenir els resultats de la lliga i els desa en un arxiu ZIP
     * que es descarrega automàticament al dispositiu de l'usuari.
     *
     * @returns {void} No retorna cap valor. Descarrega un arxiu ZIP amb els resultats.
     */
    // eslint-disable-next-line require-await
    async descarregarResultats () {
      try {
        const config = useRuntimeConfig()
        const baseURL = config.public.apiBaseUrl

        const method = 'GET'
        // eslint-disable-next-line semi
        const url = `${baseURL}/api/exportarResultats`;

        axios
          .request({
            url,
            method,
            responseType: 'blob', // important
            params: {
              // eslint-disable-next-line comma-dangle
              lliga_id: this.lliga_escollida,
            }
          })
          .then(({ data }) => {
            const downloadUrl = window.URL.createObjectURL(new Blob([data]))
            const link = document.createElement('a')
            link.href = downloadUrl
            link.setAttribute('download', 'file.zip') // any other extension
            document.body.appendChild(link)
            link.click()
            link.remove()
          })
      } catch (error) {
        console.error('Error al enviar resultats:', error)
      }
    }
  }
}
</script>

<style scoped>
</style>
