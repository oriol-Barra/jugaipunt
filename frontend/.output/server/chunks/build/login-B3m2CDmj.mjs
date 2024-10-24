import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr } from 'vue/server-renderer';
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
      email: "",
      password: ""
    };
  },
  methods: {
    submit() {
      this.loginWithMail(this.email, this.password);
    },
    loginWithMail(email, password) {
      alert("Login with Mail");
    },
    loginWithGoogle() {
      alert("Login with Google");
    },
    loginWithFacebook() {
      alert("Login with Facebook");
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-gray-100 flex flex-col justify-center items-center" }, _attrs))}><div class="bg-white p-8 rounded-lg shadow-lg w-full max-w-md"><h1 class="text-3xl font-bold mb-8 text-center"> Iniciar Sessi\xF3 </h1><form><div class="mb-4"><label class="block text-gray-700" for="email">Email</label><input id="email"${ssrRenderAttr("value", $data.email)} class="form-input mt-1 block w-full h-12 rounded px-4 border border-gray-300" type="email" required placeholder="Email"></div><div class="mb-4"><label class="block text-gray-700" for="password">Contrasenya</label><input id="password"${ssrRenderAttr("value", $data.password)} class="form-input mt-1 block w-full h-12 rounded px-4 border border-gray-300" type="password" required placeholder="Contrasenya"></div><button class="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 w-full mb-4" type="submit"> Iniciar Sessi\xF3 </button></form><div class="flex flex-col space-y-4"><button class="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-700 w-full"> Iniciar Sessi\xF3 amb Google </button><button class="bg-blue-800 text-white py-2 px-4 rounded hover:bg-blue-900 w-full"> Iniciar Sessi\xF3 amb Facebook </button></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const login = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { login as default };
//# sourceMappingURL=login-B3m2CDmj.mjs.map
