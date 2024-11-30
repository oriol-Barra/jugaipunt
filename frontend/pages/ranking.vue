<template>
  <div class="min-h-screen flex flex-col justify-center items-center bg-cover">
    <div class="bg-white p-8 rounded-lg shadow-lg w-full max-w-4xl">
      <h1 class="text-3xl font-bold mb-8 text-center">
        Rànquing de Jugadors
      </h1>
      <table class="table-auto w-full">
        <thead>
          <tr>
            <th class="px-4 py-2">Posició</th>
            <th class="px-4 py-2">Nom</th>
            <th class="px-4 py-2">Cognoms</th>
            <th class="px-4 py-2">Puntuació</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(jugador, index) in ranking" :key="jugador.id">
            <td class="border px-4 py-2">{{ index + 1 }}</td>
            <td class="border px-4 py-2">{{ jugador.nom }}</td>
            <td class="border px-4 py-2">{{ jugador.cognoms }}</td>
            <td class="border px-4 py-2">{{ jugador.puntuacio }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { useRuntimeConfig } from '#app'

export default {
  /**
   * @name rankingpage
   * @description pàgina que mostra els usuaris ordenats per puntuacions.
   */
  name: 'RankingPage',
  data () {
    return {
      ranking: []
    }
  },
  /**
   * @method mounted
   * @description Mètode que s'executa quan el component es munta. Realitza una sol·licitud GET a l'API per obtenir el rànquing de jugadors.
   * Aquesta informació es desa a la propietat `ranking`, la qual es mostra a la taula.
   */
  async mounted () {
    const config = useRuntimeConfig()
    const baseURL = config.public.apiBaseUrl
    const response = await axios.get(`${baseURL}/api/ranking`)
    this.ranking = response.data
  }
}
</script>

<style scoped>
.table-auto {
  width: 100%;
  border-collapse: collapse;
}
.border {
  border: 1px solid #ccc;
}
.px-4 {
  padding-left: 1rem;
  padding-right: 1rem;
}
.py-2 {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}
</style>
