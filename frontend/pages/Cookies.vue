<template>
  <div class="max-w-7xl mx-auto p-6 bg-white shadow-md rounded-lg dark:bg-slate-800 dark:text-white my-12">
    <h1 class="text-3xl font-bold mb-4">
      Política de Cookies
    </h1>
    <p class="mb-6">
      Una cookie és un fitxer que es descarrega en un ordinador en accedir a determinats llocs web. Les cookies permeten a un lloc web, entre altres coses, emmagatzemar i recuperar informació sobre els hàbits de navegació d’un usuari o del seu equip i, depenent de la informació que continguin i de la manera com utilitzi el seu equip, poden permetre reconèixer l’usuari. Les cookies s’associen únicament a un usuari anònim i el seu ordinador o dispositiu, i no proporcionen referències que permetin identificar-ne les dades personals.
    </p>
    <section class="mb-6">
      <h2 class="text-2xl font-semibold mb-2">
        Tipus de Cookies utilitzades
      </h2>
      <p class="mb-4">
        El portal de Jugaripunt utilitza cookies dels tipus següents:
      </p>
      <ul class="list-disc list-inside mb-4">
        <li class="mb-2">
          <strong>Cookies tècniques:</strong> Necessàries per a l’ús del web.
        </li>
        <li class="mb-2">
          <strong>Cookies de personalització:</strong> Permeten a l’usuari accedir al servei amb característiques predefinides, com per exemple l’idioma, el navegador, la configuració regional, etc.
        </li>
        <li class="mb-2">
          <strong>Cookies d’anàlisi:</strong> Recullen informació de l’ús que es fa del web.
        </li>
      </ul>
    </section>
    <section class="mb-6">
      <h2 class="text-2xl font-semibold mb-2">
        Cookies analítiques de tercers
      </h2>
      <p class="mb-4">
        Les cookies analítiques de tercers que Jugaripunt utilitza al seu portal són les de Google Analytics: cookies analítiques que recullen informació del trànsit i el comportament dels usuaris al web de manera anònima.
      </p>
      <p class="mb-4">
        L’ús de les cookies de tercers és subjecte a les polítiques de privacitat pròpies d’aquests tercers.
      </p>
    </section>
    <section class="mb-6">
      <h2 class="text-2xl font-semibold mb-2">
        Control i gestió de les Cookies
      </h2>
      <p class="mb-4">
        La instal·lació de cookies es fa sempre que l’usuari en doni l’autorització al seu navegador. L’usuari sempre pot, si ho considera convenient, activar les opcions del navegador per a refusar la instal·lació de cookies.
      </p>
      <table class="w-full border-collapse mb-6">
        <thead>
          <tr>
            <th class="border px-4 py-2 bg-gray-200 dark:bg-slate-600">
              Nom de la Cookie
            </th>
            <th class="border px-4 py-2 bg-gray-200 dark:bg-slate-600">
              Tipus
            </th>
            <th class="border px-4 py-2 bg-gray-200 dark:bg-slate-600">
              Funció
            </th>
            <th class="border px-4 py-2 bg-gray-200 dark:bg-slate-600">
              Durada
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="border px-4 py-2">csrftoken</td>
            <td class="border px-4 py-2">Cookie tècnica</td>
            <td class="border px-4 py-2">
              Protegeix contra atacs de tipus <em>Cross-Site Request Forgery</em> (CSRF).
            </td>
            <td class="border px-4 py-2">1 any</td>
          </tr>
          <tr class="bg-gray-100 dark:bg-slate-600">
            <td class="border px-4 py-2">sessionid</td>
            <td class="border px-4 py-2">Cookie de sessió</td>
            <td class="border px-4 py-2">
              Identifica l’usuari autenticat durant la sessió per mantenir el seu estat de connexió.
            </td>
            <td class="border px-4 py-2">Fi de la sessió</td>
          </tr>
        </tbody>
      </table>
    </section>
  </div>
</template>

<script setup>
</script>

<style scoped>

h1 {
  font-size: 2em;
  margin-bottom: 0.5em;
}

h2 {
  font-size: 1.5em;
  margin-top: 1em;
  margin-bottom: 0.5em;
}

p {
  margin-bottom: 1em;
}

ul {
  list-style-type: disc;
  margin-left: 1.5em;
}

ul li {
  margin-bottom: 0.5em;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 1em;
}

table, th, td {
  border: 1px solid #ddd;
}

th, td {
  padding: 8px;
  text-align: left;
}

th {
  background-color: #f2f2f2;
}
</style>