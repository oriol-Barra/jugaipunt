<template>
<<<<<<< HEAD
  <footer class="p-4 bg-black text-slate-800 dark:bg-slate-800 text-white">
=======
  <footer class="p-4 bg-black text-slate-800 dark:bg-slate-800 dark:text-white">
>>>>>>> 617f78435f24004d42f23754e0c7f5dbdb9d2289
    <div class="container mx-auto flex justify-between items-center">
      <nuxt-link to="/" class="text-2xl font-bold">
        Copyright grup 2 - Juga i punt -  2024
      </nuxt-link>
      <nav>
        <ul class="flex space-x-4">
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
          <li>
            <nuxt-link to="/PrivacyPolicy" class="hover:underline">
              Politica de privacitat
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/Cookies" class="hover:underline">
              Cookies
            </nuxt-link>
          </li>
        </ul>
      </nav>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter'
}
</script>

<style scoped>
</style>
