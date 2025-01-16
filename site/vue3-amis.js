import { defineComponent as r, openBlock as i, createElementBlock as m } from "vue";
const c = { id: "amisRoot" }, a = /* @__PURE__ */ r({
  __name: "index",
  props: ["option"],
  emits: ["onError"],
  setup(n, { emit: o }) {
    Promise.resolve({        }), Promise.resolve({           }), Promise.resolve({             });
    const t = n, e = o;
    return import("./sdk-th9lBmUh.js").then(() => {
      import("./rest-L8iL0D-t.js").then(() => {
        window.amisRequire("amis/embed").embed("#amisRoot", t.option);
      });
    }).catch(() => {
      console.warn("amis sdk加载失败"), e("onError");
    }), (s, l) => (i(), m("div", c));
  }
}), p = [a], d = (n) => {
  p.forEach((o) => {
    n.component((o == null ? void 0 : o.name) || "default", o);
  });
}, f = { install: d };
export {
  a as AmisRender,
  f as default
};
