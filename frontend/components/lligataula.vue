<template>
  <div id="tabla-container" class="mt-8">
    <h3 v-if="lligaNom" class="text-2xl font-bold text-center mb-4">
      Lliga: {{ lligaNom }}
    </h3>

    <!-- Tabla de Partides -->
    <table v-if="partides.length" class="table-auto w-full border-collapse border border-gray-400 mb-8">
      <thead>
        <tr class="bg-gray-200">
          <th class="border border-gray-400 px-4 py-2">
            Jugador 1
          </th>
          <th class="border border-gray-400 px-4 py-2">
            Jugador 2
          </th>
          <th class="border border-gray-400 px-4 py-2">
            Resultat
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(partida, index) in partides" :key="index">
          <td class="border border-gray-400 px-4 py-2">
            {{ partida.jugador1 }}
          </td>
          <td class="border border-gray-400 px-4 py-2">
            {{ partida.jugador2 }}
          </td>
          <td class="border border-gray-400 px-4 py-2">
            {{ partida.resultat }}
          </td>
        </tr>
      </tbody>
    </table>
    <p v-else class="text-center text-gray-500">
      No hi ha partides disponibles per aquesta lliga.
    </p>

    <!-- Tabla de Classificació -->
    <h3 v-if="classificacio.length" class="text-xl font-bold text-center mb-4">
      Classificació
    </h3>
    <table v-if="classificacio.length" class="table-auto w-full border-collapse border border-gray-400">
      <thead>
        <tr class="bg-gray-200">
          <th class="border border-gray-400 px-4 py-2">
            Posició
          </th>
          <th class="border border-gray-400 px-4 py-2">
            Nom
          </th>
          <th class="border border-gray-400 px-4 py-2">
            Cognoms
          </th>
          <th class="border border-gray-400 px-4 py-2">
            Puntuació
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(jugador, index) in classificacio" :key="jugador.id">
          <td class="border border-gray-400 px-4 py-2">
            {{ index + 1 }}
          </td>
          <td class="border border-gray-400 px-4 py-2">
            {{ jugador.nom }}
          </td>
          <td class="border border-gray-400 px-4 py-2">
            {{ jugador.cognoms }}
          </td>
          <td class="border border-gray-400 px-4 py-2">
            {{ jugador.puntuacioLliga }}
          </td>
        </tr>
      </tbody>
    </table>
    <p v-else class="text-center text-gray-500">
      No hi ha classificació disponible per aquesta lliga.
    </p>
  </div>
</template>

<script>
export default {
  name: 'LligaTaula',
  props: {
    lligaNom: {
      type: String,
      required: true
    },
    partides: {
      type: Array,
      required: true
    },
    classificacio: {
      type: Array,
      required: true
    }
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

.text-center {
  text-align: center;
}

.bg-gray-200 {
  background-color: #f7fafc;
}
</style>
