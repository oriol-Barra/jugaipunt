import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
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
  data() {
    return {
      name: "",
      email: "",
      message: ""
    };
  },
  methods: {
    submit() {
      this(this.name, this.email, this.password);
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-gray-100 flex flex-col justify-center items-center" }, _attrs))}><section class="bg-white p-8 rounded-lg shadow-lg w-full max-w-4xl"><h1 class="text-4xl text-center mt-8 mb-8"> Contacte </h1><div class="flex flex-col md:flex-row"><div class="md:w-1/2 p-4"><h2 class="text-2xl font-bold mb-4"> Informaci\xF3 de Contacte </h2><p class="mb-2"> Adre\xE7a: Carrer de l&#39;Exemple, 123, Barcelona </p><p class="mb-2"> Tel\xE8fon: +34 123 456 789 </p><p class="mb-2"> Email: info@jugaripunt.com </p></div><div class="md:w-1/12 flex justify-center items-center"><div class="h-full w-px bg-gray-300"></div></div><div class="md:w-1/2 p-4"><h2 class="text-2xl font-bold mb-4"> Envia&#39;ns un missatge </h2><form><div class="mb-4"><label class="block text-gray-700" for="name">Nom</label><input id="name"${ssrRenderAttr("value", $data.name)} class="form-input mt-1 block w-full h-12 rounded px-4 border border-gray-300" type="text" required placeholder="Nom"></div><div class="mb-4"><label class="block text-gray-700" for="email">Email</label><input id="email"${ssrRenderAttr("value", $data.email)} class="form-input mt-1 block w-full h-12 rounded px-4 border border-gray-300" type="email" required placeholder="Email"></div><div class="mb-4"><label class="block text-gray-700" for="message">Missatge</label><textarea id="message" class="form-textarea mt-1 block w-full h-32 rounded px-4 border border-gray-300" required placeholder="Missatge">${ssrInterpolate($data.message)}</textarea></div><button class="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 w-full" type="submit"> Enviar </button></form></div></div></section></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/contact.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const contact = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { contact as default };
//# sourceMappingURL=contact-BJcmOXPI.mjs.map
