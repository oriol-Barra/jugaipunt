<template>
  <div class="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
    <div class="bg-white p-8 rounded-lg shadow-lg text-center max-w-2xl">
      <h1 class="text-4xl font-bold mb-4">
        JugaiPunt!
      </h1>
      <p class="text-xl mb-8">
        El teu portal per organitzar i veure tornejos d'escacs
      </p>
      <nuxt-link to="register">
        <button class="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">
          Registra't Ara
        </button>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage'
}
</script>

<style scoped>
</style>
