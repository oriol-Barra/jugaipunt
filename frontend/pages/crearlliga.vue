<template>
  <div class="min-h-screen flex flex-col justify-center items-center bg-cover">
    <div class="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
      <h1 class="text-3xl font-bold mb-8 text-center">
        Registre de Lliga o Torneig
      </h1>
      <!-- Cambiado a enviarDades -->
      <form id="formulariTorneig" @submit.prevent="enviarDades">
        <div class="mb-4">
          <label class="block text-gray-700" for="nomLliga">Nom de la Lliga</label>
          <input
            id="nomLliga"
            v-model="nomLliga"
            class="form-input mt-1 block w-full h-12 rounded px-4 border border-gray-300"
            type="text"
            required
            placeholder="Nom de la lliga"
          >
        </div>

        <div class="mb-4">
          <label class="block text-gray-700" for="dataInici">Data d'Inici</label>
          <input
            id="dataInici"
            v-model="dataInici"
            class="form-input mt-1 block w-full h-12 rounded px-4 border border-gray-300"
            type="date"
            required
          >
        </div>

        <div class="mb-4">
          <label class="block text-gray-700" for="dataFi">Data de Fi</label>
          <input
            id="dataFi"
            v-model="dataFi"
            class="form-input mt-1 block w-full h-12 rounded px-4 border border-gray-300"
            type="date"
            required
          >
        </div>

        <div class="mb-4">
          <label class="block text-gray-700" for="tipusTorneig">Tipus de Torneig</label>
          <select
            id="tipusTorneig"
            v-model="tipusTorneig"
            class="form-select mt-1 block w-full h-12 rounded px-4 border border-gray-300"
            required
          >
            <option value="">
              Selecciona un tipus
            </option>
            <option value="Lliga">
              Lliga
            </option>
            <option value="TorneigEliminatori">
              Torneig Eliminatori
            </option>
          </select>
        </div>

        <div class="mb-4">
          <label class="block text-gray-700" for="numJugadors">Número de Jugadors</label>
          <input
            id="numJugadors"
            v-model="numJugadors"
            class="form-input mt-1 block w-full h-12 rounded px-4 border border-gray-300"
            type="number"
            required
            placeholder="Número de jugadors"
          >
        </div>

        <button
          class="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 w-full mb-4"
          type="submit"
        >
          Registrar Lliga/Torneig
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  /**
   * @name crealliga
   * @description pàgina per registrar una nova lliga o torneig. Inclou formulari amb els camps de la lliga.
   */
  data () {
    return {
      /**
       * @property {string} nomLliga - Nom de la lliga o torneig.
       */
      nomLliga: '',
      /**
       * @property {string} dataInici - Data d'inici de la lliga o torneig.
       */
      dataInici: '',
      /**
       * @property {string} dataFi - Data de finalització de la lliga o torneig.
       */
      dataFi: '',
      /**
       * @property {string} tipusTorneig - Tipus de torneig (Lliga o Torneig Eliminatori).
       */
      tipusTorneig: '',
      /**
       * @property {number} numJugadors - Nombre de jugadors que participaran en la lliga o torneig.
       */
      numJugadors: 0
    }
  },
  methods: {
    /**
     * @method enviarDades
     * @description Envia les dades del formulari de front a front i realitza la validació abans de redirigir a la pàgina per afegir jugadors.
     * Si es tracta d'un torneig eliminatori, es comprova que el nombre de jugadors sigui múltiple de 4.
     */
    enviarDades () { // Cambiado a enviarDades para coincidir con @submit.prevent
      try {
        // Reinicialitzar el formulari
        document.getElementById('formulariTorneig').reset()

        // Navegar a la pàgina Afegeix Jugador amb els paràmetres a la URL
        if (this.numJugadors % 4 !== 0 && this.tipusTorneig === 'TorneigEliminatori') {
          alert('per als tornejos eliminatoris calen un mínim de 4 jugadors, i sempre han de ser múltiples de 4')
        } else {
          this.$router.push({
            path: '/afegeixjugadors',
            query: {
              numJugadors: this.numJugadors,
              nomLliga: this.nomLliga,
              dataInici: this.dataInici,
              dataFi: this.dataFi,
              tipusTorneig: this.tipusTorneig

            }
          })
        }
      } catch (error) {
        alert(`Error de registre: ${error.response?.data.error || error.message}`)
      }
    }
  }
}
</script>

<style scoped>
</style>
