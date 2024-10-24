import { _ as __nuxt_component_0$1 } from './nuxt-link-COteDoP9.mjs';
import { useSSRContext, mergeProps, withCtx, createTextVNode, createVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot } from 'vue/server-renderer';
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

const _sfc_main$1 = {
  name: "AppHeader"
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_0$1;
  _push(`<header${ssrRenderAttrs(mergeProps({ class: "p-4 bg-white text-slate-800 dark:bg-slate-800 dark:text-white" }, _attrs))}><div class="container mx-auto flex justify-between items-center">`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    to: "/",
    class: "text-2xl font-bold"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Jugar i Punt! `);
      } else {
        return [
          createTextVNode(" Jugar i Punt! ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<nav><ul class="flex space-x-4"><li>`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    to: "/",
    class: "hover:underline"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Inici `);
      } else {
        return [
          createTextVNode(" Inici ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    to: "/about",
    class: "hover:underline"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Sobre nosaltres `);
      } else {
        return [
          createTextVNode(" Sobre nosaltres ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    to: "/contact",
    class: "hover:underline"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Contacte `);
      } else {
        return [
          createTextVNode(" Contacte ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    to: "/tournaments",
    class: "hover:underline"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Tornejos `);
      } else {
        return [
          createTextVNode(" Tornejos ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul></nav><div class="flex space-x-4">`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/register" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<button class="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"${_scopeId}> Registre </button>`);
      } else {
        return [
          createVNode("button", { class: "bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700" }, " Registre ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/login" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<button class="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-700"${_scopeId}> Iniciar Sessi\xF3 </button>`);
      } else {
        return [
          createVNode("button", { class: "bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-700" }, " Iniciar Sessi\xF3 ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></header>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AppHeader.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_AppHeader = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_AppHeader, null, null, _parent));
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { _default as default };
//# sourceMappingURL=default-BXNDgm5r.mjs.map
