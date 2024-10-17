import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'node:url';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const _sfc_main = {
  name: "TournamentsPage"
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-gray-100 p-8" }, _attrs))}><section class="bg-white p-8 rounded-lg shadow-lg mb-8"><h1 class="text-4xl font-bold mb-4"> Torneig d&#39;Escacs </h1><p class="text-lg mb-4"> Data: 15 de Novembre, 2023 </p><p class="text-lg mb-4"> Lloc: Barcelona, Espanya </p><p class="text-lg"> Descripci\xF3: Un torneig d&#39;escacs per a jugadors de tots els nivells. </p></section><section class="bg-white p-8 rounded-lg shadow-lg mb-8"><h2 class="text-2xl font-bold mb-4"> Jugadors </h2><ul class="list-disc list-inside"><li class="text-lg mb-2"> Jugador 1 </li><li class="text-lg mb-2"> Jugador 2 </li><li class="text-lg mb-2"> Jugador 3 </li></ul></section><section class="bg-white p-8 rounded-lg shadow-lg mb-8"><h2 class="text-2xl font-bold mb-4"> Rondes </h2><ul class="list-disc list-inside"><li class="text-lg mb-2"> Ronda 1: Jugador 1 vs Jugador 2 </li><li class="text-lg mb-2"> Ronda 2: Jugador 3 vs Jugador 4 </li><li class="text-lg mb-2"> Ronda 3: Jugador 1 vs Jugador 3 </li></ul></section><section class="bg-white p-8 rounded-lg shadow-lg mb-8"><h2 class="text-2xl font-bold mb-4"> Classificaci\xF3 </h2><table class="min-w-full bg-white"><thead><tr><th class="py-2 px-4 border-b"> Posici\xF3 </th><th class="py-2 px-4 border-b"> Jugador </th><th class="py-2 px-4 border-b"> Punts </th></tr></thead><tbody><tr><td class="py-2 px-4 border-b"> 1 </td><td class="py-2 px-4 border-b"> Jugador 1 </td><td class="py-2 px-4 border-b"> 3 </td></tr><tr><td class="py-2 px-4 border-b"> 2 </td><td class="py-2 px-4 border-b"> Jugador 2 </td><td class="py-2 px-4 border-b"> 2 </td></tr><tr><td class="py-2 px-4 border-b"> 3 </td><td class="py-2 px-4 border-b"> Jugador 3 </td><td class="py-2 px-4 border-b"> 1 </td></tr></tbody></table></section></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/tournaments.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const tournaments = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { tournaments as default };
//# sourceMappingURL=tournaments-90wDVlbo.mjs.map
