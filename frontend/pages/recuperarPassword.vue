<template>
  <div class="min-h-screen flex flex-col justify-center items-center bg-cover">
    <div class="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
      <h1 class="text-3xl font-bold mb-8 text-center">
        Recuperar contrasenya
      </h1>
      <form @submit.prevent="submit">
        <!-- formulari on demanarem unes dades del usuari i si coincideixen li mostrem la contrasenya i sino error-->
        <div class="mb-4">
          <!--demanem el nom -->
          <label class="block text-gray-700" for="nom">Nom</label>
          <input
            id="nom"
            v-model="nom"
            class="form-input mt-1 block w-full h-12 rounded px-4 border border-gray-300"
            type="text"
            required
            placeholder="Nom"
          >
        </div>
        <div class="mb-4">
          <!-- demanem els cognoms -->
          <label class="block text-gray-700" for="cognoms">Cognoms</label>
          <input
            id="cognoms"
            v-model="cognoms"
            class="form-input mt-1 block w-full h-12 rounded px-4 border border-gray-300"
            type="text"
            required
            placeholder="Cognoms"
          >
        </div>
        <div class="mb-4">
          <!-- demanem el mail on es va registrar -->
          <label class="block text-gray-700" for="email">Email</label>
          <input
            id="email"
            v-model="email"
            class="form-input mt-1 block w-full h-12 rounded px-4 border border-gray-300"
            type="email"
            required
            placeholder="Email"
          >
        </div>
        <div class="mb-4">
          <!-- demanem l'edat -->
          <label class="block text-gray-700" for="edat">Edat</label>
          <input
            id="edat"
            v-model="edat"
            class="form-input mt-1 block w-full h-12 rounded px-4 border border-gray-300"
            type="number"
            required
            placeholder="Edat"
          >
        </div>
        <button
          class="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 w-full mb-4"
          type="submit"
        >
          Verificar
        </button>
      </form>
      <!-- formulari per nova contrasenya -->
      <div v-if="showPasswordForm">
        <h3>Actualitza la contrasenya</h3>
        <div class="mb-4">
          <label class="block text-gray-700" for="novaContrasenya">Nova Contrasenya</label> <!-- nova contrasenya-->
          <input
            id="novaContrasenya"
            v-model="novaContrasenya"
            class="form-input mt-1 block w-full h-12 rounded px-4 border border-gray-300"
            type="password"
            required
            placeholder="Nova Contrasenya"
          >
        </div>

        <div class="mb-4">
          <label class="block text-gray-700" for="repetirNovaContrasenya">Repetir Nova Contrasenya</label> <!-- repetir contrasenya -->
          <input
            id="repetirNovaContrasenya"
            v-model="repetirNovaContrasenya"
            class="form-input mt-1 block w-full h-12 rounded px-4 border border-gray-300"
            type="password"
            required
            placeholder="Repetir Nova Contrasenya"
          >
        </div>

        <button
          class="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 w-full mb-4"
          type="button"
          @click="modificarContrasenya"
        >
          Modificar
        </button>
      </div>
      <!-- espai per el missatge -->
      <p v-if="message" class="mt-4 text-center text-gray-800">
        {{ message }}
      </p>
    </div>
  </div>
</template>

<script>
import axios from 'axios' // Importa Axios per a fer sol·licituds
export default {
  /**
 * @component RecuperarContrasenya
 * @description pàgina que gestiona la recuperació de la contrasenya de l'usuari. Permet verificar les dades
 * de l'usuari i, en cas que siguin correctes, permet actualitzar la contrasenya.
 */
  data () {
    return {
      nom: '',
      cognoms: '',
      email: '',
      edat: '',
      message: '',
      showPasswordForm: false,
      novaContrasenya: '',
      repetirNovaContrasenya: ''
    }
  },
  methods: {
    /**
   * @method submit
   * @description Mètode que s'executa quan l'usuari envia el formulari de recuperació de contrasenya.
   * Envia una sol·licitud amb les dades de l'usuari per validar-les a l'API.
   * Si les dades són correctes, es mostra el formulari per actualitzar la contrasenya.
   */
    async submit () {
      try { // enviem les dades informades per l'usuari per comprobar que funciona
        const response = await axios.post('http://localhost:8000/api/recuperar_password', {
          nom: this.nom,
          cognoms: this.cognoms,
          email: this.email,
          edat: this.edat
        })

        if (response.status === 200) {
          this.message = 'Dades correctes. Actualitza la contrasenya.' // si es correcte mostrem per actualitzar la contrasenya
          this.showPasswordForm = true // eposem a true el mostrar el formulari de nova contrasenya
        } else {
          this.message = 'Algunes dades no són correctes.'
        }
      } catch (error) {
        this.message = error.response?.data?.error || 'Error tecnic, torna a intentar-ho'
      }
    },
    /**
   * @method modificarContrasenya
   * @description Mètode que s'executa quan l'usuari introdueix una nova contrasenya i la confirma.
   * Comprova que les dues contrasenyes coincideixin i, si és així, realitza una sol·licitud per actualitzar la contrasenya.
   */
    async modificarContrasenya () {
      if (this.novaContrasenya !== this.repetirNovaContrasenya) { // validar que les dos contrasenyes coincideixen
        this.message = 'Les contrasenyes no coincideixen.'
        return
      }

      try {
        const response = await axios.post('http://localhost:8000/api/modificar_password', { // funcio per a modificar la contrasenya
          nom: this.nom,
          cognoms: this.cognoms,
          email: this.email,
          edat: this.edat,
          novaContrasenya: this.novaContrasenya // per enviar la nova contrasenya
        })

        if (response.status === 200) {
          this.message = 'Contrasenya modificada correctament.' // confirmacio del canvi
          this.showPasswordForm = false
        } else {
          this.message = 'Error al modificar la contrasenya.' // si es produeix un error
        }
      } catch (error) {
        this.message = error.response?.data?.error || 'Error tecnic, torna a intentar-ho' // per errors com 404 o 500
      }
    }
  }
}
</script>
