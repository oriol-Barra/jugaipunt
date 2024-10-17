<template>
  <div class="min-h-screen bg-gray-100 p-8">
    <section class="bg-white p-8 rounded-lg shadow-lg mb-8">
      <h1 class="text-4xl font-bold mb-4">
        Torneig d'Escacs
      </h1>
      <p class="text-lg mb-4">
        Data: 15 de Novembre, 2023
      </p>
      <p class="text-lg mb-4">
        Lloc: Barcelona, Espanya
      </p>
      <p class="text-lg">
        Descripció: Un torneig d'escacs per a jugadors de tots els nivells.
      </p>
    </section>

    <section class="bg-white p-8 rounded-lg shadow-lg mb-8">
      <h2 class="text-2xl font-bold mb-4">
        Jugadors
      </h2>
      <ul class="list-disc list-inside">
        <li class="text-lg mb-2">
          Jugador 1
        </li>
        <li class="text-lg mb-2">
          Jugador 2
        </li>
        <li class="text-lg mb-2">
          Jugador 3
        </li>
        <!-- Afegir més jugadors aquí -->
      </ul>
    </section>

    <section class="bg-white p-8 rounded-lg shadow-lg mb-8">
      <h2 class="text-2xl font-bold mb-4">
        Rondes
      </h2>
      <ul class="list-disc list-inside">
        <li class="text-lg mb-2">
          Ronda 1: Jugador 1 vs Jugador 2
        </li>
        <li class="text-lg mb-2">
          Ronda 2: Jugador 3 vs Jugador 4
        </li>
        <li class="text-lg mb-2">
          Ronda 3: Jugador 1 vs Jugador 3
        </li>
        <!-- Afegir més rondes aquí -->
      </ul>
    </section>

    <section class="bg-white p-8 rounded-lg shadow-lg mb-8">
      <h2 class="text-2xl font-bold mb-4">
        Classificació
      </h2>
      <table class="min-w-full bg-white">
        <thead>
          <tr>
            <th class="py-2 px-4 border-b">
              Posició
            </th>
            <th class="py-2 px-4 border-b">
              Jugador
            </th>
            <th class="py-2 px-4 border-b">
              Punts
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="py-2 px-4 border-b">
              1
            </td>
            <td class="py-2 px-4 border-b">
              Jugador 1
            </td>
            <td class="py-2 px-4 border-b">
              3
            </td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b">
              2
            </td>
            <td class="py-2 px-4 border-b">
              Jugador 2
            </td>
            <td class="py-2 px-4 border-b">
              2
            </td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b">
              3
            </td>
            <td class="py-2 px-4 border-b">
              Jugador 3
            </td>
            <td class="py-2 px-4 border-b">
              1
            </td>
          </tr>
          <!-- Afegir més classificacions aquí -->
        </tbody>
      </table>
    </section>
  </div>
</template>

<script>
export default {
  name: 'TournamentsPage'
}
</script>

<style scoped></style>
