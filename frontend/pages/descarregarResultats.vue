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
    async descarregarResultats () {
      try {
        const config = useRuntimeConfig()
        const baseURL = config.public.apiBaseUrl

        const method = 'GET';
        const url = `${baseURL}/api/exportarResultats`;

        axios
          .request({
            url,
            method,
            responseType: 'blob', //important
            params: {
              lliga_id: this.lliga_escollida,
            }
          })
          .then(({ data }) => {
            const downloadUrl = window.URL.createObjectURL(new Blob([data]));
            const link = document.createElement('a');
            link.href = downloadUrl;
            link.setAttribute('download', 'file.zip'); //any other extension
            document.body.appendChild(link);
            link.click();
            link.remove();
          });
        } catch (error) {
        console.error('Error al enviar resultats:', error)
        }
    }
  }
}
</script>

<style scoped>
</style>
