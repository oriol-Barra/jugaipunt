<template>
  <header class="p-4 bg-white text-slate-800 dark:bg-slate-800 dark:text-white">
    <div class="container mx-auto flex justify-between items-center">
      <nuxt-link to="/" class="text-2xl font-bold">
        Jugar i Punt!
      </nuxt-link>
      <nav>
        <ul class="flex space-x-4">
          <li>
            <nuxt-link to="/" class="hover:underline">
              Inici
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/about" class="hover:underline">
              Sobre nosaltres
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/contact" class="hover:underline">
              Contacte
            </nuxt-link>
          </li>
        </ul>
      </nav>
      <div class="flex space-x-4">
        <template v-if="isAuthenticated">
          <nuxt-link to="/profile">
            <button class="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-700">
              Perfil
            </button>
          </nuxt-link>
          <button
            class="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-700"
            @click="logout"
          >
            Logout
          </button>
        </template>
        <template v-else>
          <nuxt-link to="/register">
            <button class="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">
              Registre
            </button>
          </nuxt-link>
          <nuxt-link to="/login">
            <button class="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-700">
              Iniciar Sessió
            </button>
          </nuxt-link>
        </template>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
  data () {
    return {
      isAuthenticated: false // Estat per verificar si l'usuari està autenticat
    }
  },
  mounted () {
    this.checkAuthentication() // Comprova l'autenticació en muntar el component
  },
  methods: {
    checkAuthentication () {
      // Comprovar si existeix el token a localStorage
      const token = localStorage.getItem('authToken')
      this.isAuthenticated = !!token // Assignar true o false segons existeixi el token
    },
    logout () {
      // Eliminar el token de localStorage
      localStorage.removeItem('authToken')

      // Actualitzar l'estat per ocultar el botó de "Logout"
      this.isAuthenticated = false

      // Redirigir a la pàgina d'inici de sessió o a una altra pàgina
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped>
</style>
