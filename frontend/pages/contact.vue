<template>
<<<<<<< HEAD
  <div class="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
=======
  <div class="min-h-screen flex flex-col justify-center items-center">
>>>>>>> 617f78435f24004d42f23754e0c7f5dbdb9d2289
    <section class="bg-white p-8 rounded-lg shadow-lg w-full max-w-4xl">
      <h1 class="text-4xl text-center mt-8 mb-8">
        Contacte
      </h1>
      <div class="flex flex-col md:flex-row">
        <!-- Informacio de contacte -->
        <div class="md:w-1/2 p-4">
          <h2 class="text-2xl font-bold mb-4">
            Informació de Contacte
          </h2>
          <p class="mb-2">
            Adreça: Carrer de l'Exemple, 123, Barcelona
          </p>
          <p class="mb-2">
            Telèfon: +34 123 456 789
          </p>
          <p class="mb-2">
            Email: info@jugaripunt.com
          </p>
        </div>
        <!-- Linia divisoria -->
        <div class="md:w-1/12 flex justify-center items-center">
          <div class="h-full w-px bg-gray-300" />
        </div>
        <!-- Formulari de contacte -->
        <div class="md:w-1/2 p-4">
          <h2 class="text-2xl font-bold mb-4">
            Envia'ns un missatge
          </h2>
          <form @submit.prevent="submit">
            <div class="mb-4">
              <label class="block text-gray-700" for="name">Nom</label>
              <input
                id="name"
                v-model="name"
                class="form-input mt-1 block w-full h-12 rounded px-4 border border-gray-300"
                type="text"
                required
                placeholder="Nom"
              >
            </div>
            <div class="mb-4">
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
              <label class="block text-gray-700" for="message">Missatge</label>
              <textarea
                id="message"
                v-model="message"
                class="form-textarea mt-1 block w-full h-32 rounded px-4 border border-gray-300"
                required
                placeholder="Missatge"
              />
            </div>
            <button
              class="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 w-full"
              type="submit"
            >
              Enviar
            </button>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: '',
      email: '',
      message: ''
    }
  },
  methods: {
    submit () {
      this(this.name, this.email, this.password)
    }
  }
}
</script>

<style scoped>
</style>
