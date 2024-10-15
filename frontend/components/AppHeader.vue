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
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'AppHeader'
}
</script>

<style scoped>
</style>
