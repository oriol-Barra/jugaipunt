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
  name: "AboutPage"
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-gray-100 flex flex-col justify-center items-center" }, _attrs))}><section class="bg-white p-8 rounded-lg shadow-lg w-full max-w-4xl mt-4"><h1 class="text-4xl text-center mt-4 mb-8"> Sobre nosaltres </h1><div class="space-y-8"><div><h2 class="text-2xl font-bold mb-4"> Qui som? </h2><p class="text-lg"> Som un equip apassionat pels escacs i la tecnologia. El nostre objectiu \xE9s proporcionar una plataforma f\xE0cil d&#39;utilitzar per organitzar i seguir tornejos d&#39;escacs. </p></div><div><h2 class="text-2xl font-bold mb-4"> La nostra missi\xF3 </h2><p class="text-lg"> La nostra missi\xF3 \xE9s fomentar la comunitat d&#39;escacs oferint eines que facilitin la gesti\xF3 i participaci\xF3 en tornejos. Creiem que els escacs s\xF3n una eina poderosa per desenvolupar habilitats cognitives i socials. </p></div><div><h2 class="text-2xl font-bold mb-4"> El nostre equip </h2><p class="text-lg"> El nostre equip est\xE0 format per jugadors d&#39;escacs, desenvolupadors de programari i dissenyadors gr\xE0fics. Tots compartim la passi\xF3 pels escacs i la tecnologia, i treballem junts per crear la millor experi\xE8ncia possible per als nostres usuaris. </p></div></div></section></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const about = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { about as default };
//# sourceMappingURL=about-miMejZ-E.mjs.map
