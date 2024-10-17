import { _ as __nuxt_component_0 } from './nuxt-link-COteDoP9.mjs';
import { mergeProps, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
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
  name: "HomePage"
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-gray-100 flex flex-col justify-center items-center" }, _attrs))}><div class="bg-white p-8 rounded-lg shadow-lg text-center max-w-2xl"><h1 class="text-4xl font-bold mb-4"> Jugar i Punt! </h1><p class="text-xl mb-8"> El teu portal per organitzar i veure tornejos d&#39;escacs </p>`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/register" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<button class="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"${_scopeId}> Registra&#39;t Ara </button>`);
      } else {
        return [
          createVNode("button", { class: "bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700" }, " Registra't Ara ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-C4gHMDwr.mjs.map
