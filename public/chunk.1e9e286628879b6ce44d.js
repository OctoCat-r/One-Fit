/*! For license information please see chunk.1e9e286628879b6ce44d.js.LICENSE.txt */
"use strict";
(self.webpackChunkai_workout_assistant =
  self.webpackChunkai_workout_assistant || []).push([
  [985],
  {
    38985: (e, t, a) => {
      a.d(t, { YL: () => $e });
      var n = {};
      a.r(n), a.d(n, { json: () => L });
      var s = {};
      a.r(s), a.d(s, { json: () => C });
      var r = {};
      a.r(r), a.d(r, { json: () => z });
      var o = {};
      a.r(o), a.d(o, { json: () => F });
      var p = {};
      a.r(p), a.d(p, { json: () => $ });
      var i = {};
      a.r(i), a.d(i, { json: () => R });
      var m = {};
      a.r(m), a.d(m, { json: () => P });
      var u = {};
      a.r(u), a.d(u, { json: () => B });
      var d = {};
      a.r(d), a.d(d, { json: () => j });
      var c = {};
      a.r(c), a.d(c, { json: () => U });
      var l = {};
      a.r(l), a.d(l, { json: () => H });
      var y = {};
      a.r(y), a.d(y, { json: () => q });
      var h = {};
      a.r(h), a.d(h, { json: () => G });
      var f = {};
      a.r(f), a.d(f, { json: () => W });
      var N = {};
      a.r(N), a.d(N, { json: () => Q });
      var g = {};
      a.r(g), a.d(g, { json: () => K });
      var T = {};
      a.r(T), a.d(T, { json: () => X });
      var b = {};
      a.r(b), a.d(b, { json: () => Y });
      var x = {};
      a.r(x), a.d(x, { json: () => Z });
      var S,
        _,
        O = a(88478);
      (0, O.OBj)().registerFlag(
        "KEEP_INTERMEDIATE_TENSORS",
        () => !1,
        (e) => {
          e &&
            console.warn(
              "Keep intermediate tensors is ON. This will print the values of all intermediate tensors during model inference. Not all models support this mode. For details, check e2e/benchmarks/ model_config.js. This significantly impacts performance."
            );
        }
      ),
        (function (e) {
          (e[(e.DT_INVALID = 0)] = "DT_INVALID"),
            (e[(e.DT_FLOAT = 1)] = "DT_FLOAT"),
            (e[(e.DT_DOUBLE = 2)] = "DT_DOUBLE"),
            (e[(e.DT_INT32 = 3)] = "DT_INT32"),
            (e[(e.DT_UINT8 = 4)] = "DT_UINT8"),
            (e[(e.DT_INT16 = 5)] = "DT_INT16"),
            (e[(e.DT_INT8 = 6)] = "DT_INT8"),
            (e[(e.DT_STRING = 7)] = "DT_STRING"),
            (e[(e.DT_COMPLEX64 = 8)] = "DT_COMPLEX64"),
            (e[(e.DT_INT64 = 9)] = "DT_INT64"),
            (e[(e.DT_BOOL = 10)] = "DT_BOOL"),
            (e[(e.DT_QINT8 = 11)] = "DT_QINT8"),
            (e[(e.DT_QUINT8 = 12)] = "DT_QUINT8"),
            (e[(e.DT_QINT32 = 13)] = "DT_QINT32"),
            (e[(e.DT_BFLOAT16 = 14)] = "DT_BFLOAT16"),
            (e[(e.DT_QINT16 = 15)] = "DT_QINT16"),
            (e[(e.DT_QUINT16 = 16)] = "DT_QUINT16"),
            (e[(e.DT_UINT16 = 17)] = "DT_UINT16"),
            (e[(e.DT_COMPLEX128 = 18)] = "DT_COMPLEX128"),
            (e[(e.DT_HALF = 19)] = "DT_HALF"),
            (e[(e.DT_RESOURCE = 20)] = "DT_RESOURCE"),
            (e[(e.DT_VARIANT = 21)] = "DT_VARIANT"),
            (e[(e.DT_UINT32 = 22)] = "DT_UINT32"),
            (e[(e.DT_UINT64 = 23)] = "DT_UINT64"),
            (e[(e.DT_FLOAT_REF = 101)] = "DT_FLOAT_REF"),
            (e[(e.DT_DOUBLE_REF = 102)] = "DT_DOUBLE_REF"),
            (e[(e.DT_INT32_REF = 103)] = "DT_INT32_REF"),
            (e[(e.DT_UINT8_REF = 104)] = "DT_UINT8_REF"),
            (e[(e.DT_INT16_REF = 105)] = "DT_INT16_REF"),
            (e[(e.DT_INT8_REF = 106)] = "DT_INT8_REF"),
            (e[(e.DT_STRING_REF = 107)] = "DT_STRING_REF"),
            (e[(e.DT_COMPLEX64_REF = 108)] = "DT_COMPLEX64_REF"),
            (e[(e.DT_INT64_REF = 109)] = "DT_INT64_REF"),
            (e[(e.DT_BOOL_REF = 110)] = "DT_BOOL_REF"),
            (e[(e.DT_QINT8_REF = 111)] = "DT_QINT8_REF"),
            (e[(e.DT_QUINT8_REF = 112)] = "DT_QUINT8_REF"),
            (e[(e.DT_QINT32_REF = 113)] = "DT_QINT32_REF"),
            (e[(e.DT_BFLOAT16_REF = 114)] = "DT_BFLOAT16_REF"),
            (e[(e.DT_QINT16_REF = 115)] = "DT_QINT16_REF"),
            (e[(e.DT_QUINT16_REF = 116)] = "DT_QUINT16_REF"),
            (e[(e.DT_UINT16_REF = 117)] = "DT_UINT16_REF"),
            (e[(e.DT_COMPLEX128_REF = 118)] = "DT_COMPLEX128_REF"),
            (e[(e.DT_HALF_REF = 119)] = "DT_HALF_REF"),
            (e[(e.DT_RESOURCE_REF = 120)] = "DT_RESOURCE_REF"),
            (e[(e.DT_VARIANT_REF = 121)] = "DT_VARIANT_REF"),
            (e[(e.DT_UINT32_REF = 122)] = "DT_UINT32_REF"),
            (e[(e.DT_UINT64_REF = 123)] = "DT_UINT64_REF");
        })(S || (S = {})),
        (function (e) {
          let t;
          !(function (e) {
            (e[(e.LEGACY = 0)] = "LEGACY"),
              (e[(e.V1 = 1)] = "V1"),
              (e[(e.V2 = 2)] = "V2");
          })(
            (t = e.CheckpointFormatVersion || (e.CheckpointFormatVersion = {}))
          );
        })(_ || (_ = {}));
      const w = {};
      function I(e) {
        return w[e];
      }
      function E(e, t, a, n, s) {
        const r = t.inputParams[e];
        if (r && void 0 !== r.inputIndexStart) {
          const e = r.inputIndexStart,
            o =
              0 === r.inputIndexEnd
                ? void 0
                : void 0 === r.inputIndexEnd
                ? e + 1
                : r.inputIndexEnd;
          if ("tensor" === r.type)
            return v(t.inputNames[r.inputIndexStart], a, n, s);
          if ("tensors" === r.type)
            return t.inputNames.slice(e, o).map((e) => v(e, a, n, s));
          const p = v(t.inputNames.slice(e)[0], a, n, s),
            i = p.dataSync();
          return "number" === r.type ? i[0] : O.D5U.toNestedArray(p.shape, i);
        }
        const o = t.attrParams[e];
        return o && o.value;
      }
      function v(e, t, a, n) {
        const [s, r] = k(e);
        if (null != n) {
          const e = n.getHashTableHandleByName(s);
          if (null != e) return e;
        }
        const o = a.currentContextIds.find((e) => !!t[A(s, e)]);
        return void 0 !== o ? t[A(s, o)][r] : void 0;
      }
      function D(e, t) {
        const [a, n, s] = k(e);
        return [A(a, t && t.currentContextId), n, s];
      }
      function A(e, t) {
        return t ? `${e}-${t}` : e;
      }
      function k(e) {
        const t = e.split(":");
        if (1 === t.length) return [e, 0, void 0];
        const a = t[0],
          n = 3 === t.length ? t[1] : void 0;
        return [a, Number(t[t.length - 1]), n];
      }
      function M(e, t, a) {
        let n = E("pad", e, t, a);
        if ("explicit" === n) {
          n = E("explicitPaddings", e, t, a);
          const s = [
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0],
          ];
          for (let e = 0; e < 4; e++)
            (s[e][0] = n[2 * e]), (s[e][1] = n[2 * e + 1]);
          return s;
        }
        return n;
      }
      function V(e) {
        return e.kept ? e : (0, O.d9v)(e);
      }
      const L = [
          {
            tfOpName: "Add",
            category: "arithmetic",
            inputs: [
              { start: 0, name: "a", type: "tensor" },
              { start: 1, name: "b", type: "tensor" },
            ],
            attrs: [
              { tfName: "T", name: "dtype", type: "dtype", notSupported: !0 },
            ],
          },
          {
            tfOpName: "AddV2",
            category: "arithmetic",
            inputs: [
              { start: 0, name: "a", type: "tensor" },
              { start: 1, name: "b", type: "tensor" },
            ],
            attrs: [
              { tfName: "T", name: "dtype", type: "dtype", notSupported: !0 },
            ],
          },
          {
            tfOpName: "AddN",
            category: "arithmetic",
            inputs: [{ start: 0, end: 0, name: "tensors", type: "tensors" }],
          },
          {
            tfOpName: "BiasAdd",
            category: "arithmetic",
            inputs: [
              { start: 0, name: "a", type: "tensor" },
              { start: 1, name: "b", type: "tensor" },
            ],
            attrs: [
              { tfName: "T", name: "dtype", type: "dtype", notSupported: !0 },
              {
                tfName: "data_format",
                name: "dataFormat",
                type: "string",
                notSupported: !0,
              },
            ],
          },
          {
            tfOpName: "Sub",
            category: "arithmetic",
            inputs: [
              { start: 0, name: "a", type: "tensor" },
              { start: 1, name: "b", type: "tensor" },
            ],
            attrs: [
              { tfName: "T", name: "dtype", type: "dtype", notSupported: !0 },
            ],
          },
          {
            tfOpName: "RealDiv",
            category: "arithmetic",
            inputs: [
              { start: 0, name: "a", type: "tensor" },
              { start: 1, name: "b", type: "tensor" },
            ],
            attrs: [
              { tfName: "T", name: "dtype", type: "dtype", notSupported: !0 },
            ],
          },
          {
            tfOpName: "Div",
            category: "arithmetic",
            inputs: [
              { start: 0, name: "a", type: "tensor" },
              { start: 1, name: "b", type: "tensor" },
            ],
            attrs: [
              { tfName: "T", name: "dtype", type: "dtype", notSupported: !0 },
            ],
          },
          {
            tfOpName: "DivNoNan",
            category: "arithmetic",
            inputs: [
              { start: 0, name: "a", type: "tensor" },
              { start: 1, name: "b", type: "tensor" },
            ],
            attrs: [
              { tfName: "T", name: "dtype", type: "dtype", notSupported: !0 },
            ],
          },
          {
            tfOpName: "FloorDiv",
            category: "arithmetic",
            inputs: [
              { start: 0, name: "a", type: "tensor" },
              { start: 1, name: "b", type: "tensor" },
            ],
            attrs: [
              { tfName: "T", name: "dtype", type: "dtype", notSupported: !0 },
            ],
          },
          {
            tfOpName: "Mul",
            category: "arithmetic",
            inputs: [
              { start: 0, name: "a", type: "tensor" },
              { start: 1, name: "b", type: "tensor" },
            ],
            attrs: [
              { tfName: "T", name: "dtype", type: "dtype", notSupported: !0 },
            ],
          },
          {
            tfOpName: "Maximum",
            category: "arithmetic",
            inputs: [
              { start: 0, name: "a", type: "tensor" },
              { start: 1, name: "b", type: "tensor" },
            ],
            attrs: [
              { tfName: "T", name: "dtype", type: "dtype", notSupported: !0 },
            ],
          },
          {
            tfOpName: "Minimum",
            category: "arithmetic",
            inputs: [
              { start: 0, name: "a", type: "tensor" },
              { start: 1, name: "b", type: "tensor" },
            ],
            attrs: [
              { tfName: "T", name: "dtype", type: "dtype", notSupported: !0 },
            ],
          },
          {
            tfOpName: "Pow",
            category: "arithmetic",
            inputs: [
              { start: 0, name: "a", type: "tensor" },
              { start: 1, name: "b", type: "tensor" },
            ],
            attrs: [
              { tfName: "T", name: "dtype", type: "dtype", notSupported: !0 },
            ],
          },
          {
            tfOpName: "SquaredDifference",
            category: "arithmetic",
            inputs: [
              { start: 0, name: "a", type: "tensor" },
              { start: 1, name: "b", type: "tensor" },
            ],
            attrs: [
              { tfName: "T", name: "dtype", type: "dtype", notSupported: !0 },
            ],
          },
          {
            tfOpName: "Mod",
            category: "arithmetic",
            inputs: [
              { start: 0, name: "a", type: "tensor" },
              { start: 1, name: "b", type: "tensor" },
            ],
            attrs: [
              { tfName: "T", name: "dtype", type: "dtype", notSupported: !0 },
            ],
          },
          {
            tfOpName: "FloorMod",
            category: "arithmetic",
            inputs: [
              { start: 0, name: "a", type: "tensor" },
              { start: 1, name: "b", type: "tensor" },
            ],
            attrs: [
              { tfName: "T", name: "dtype", type: "dtype", notSupported: !0 },
            ],
          },
        ],
        C = [
          {
            tfOpName: "Abs",
            category: "basic_math",
            inputs: [{ start: 0, name: "x", type: "tensor" }],
            attrs: [
              { tfName: "T", name: "dtype", type: "dtype", notSupported: !0 },
            ],
          },
          {
            tfOpName: "Acos",
            category: "basic_math",
            inputs: [{ start: 0, name: "x", type: "tensor" }],
            attrs: [
              { tfName: "T", name: "dtype", type: "dtype", notSupported: !0 },
            ],
          },
          {
            tfOpName: "Asin",
            category: "basic_math",
            inputs: [{ start: 0, name: "x", type: "tensor" }],
            attrs: [
              { tfName: "T", name: "dtype", type: "dtype", notSupported: !0 },
            ],
          },
          {
            tfOpName: "Atan",
            category: "basic_math",
            inputs: [{ start: 0, name: "x", type: "tensor" }],
            attrs: [
              { tfName: "T", name: "dtype", type: "dtype", notSupported: !0 },
            ],
          },
          {
            tfOpName: "Atan2",
            category: "basic_math",
            inputs: [
              { start: 0, name: "x", type: "tensor" },
              { start: 1, name: "y", type: "tensor" },
            ],
            attrs: [
              { tfName: "T", name: "dtype", type: "dtype", notSupported: !0 },
            ],
          },
          {
            tfOpName: "Ceil",
            category: "basic_math",
            inputs: [{ start: 0, name: "x", type: "tensor" }],
            attrs: [
              { tfName: "T", name: "dtype", type: "dtype", notSupported: !0 },
            ],
          },
          {
            tfOpName: "ClipByValue",
            category: "basic_math",
            inputs: [
              { start: 0, name: "x", type: "tensor" },
              { start: 1, name: "clipValueMin", type: "number" },
              { start: 2, name: "clipValueMax", type: "number" },
            ],
            attrs: [
              { tfName: "T", name: "dtype", type: "dtype", notSupported: !0 },
            ],
          },
          {
            tfOpName: "Complex",
            category: "basic_math",
            inputs: [
              { start: 0, name: "real", type: "tensor" },
              { start: 1, name: "imag", type: "tensor" },
            ],
            attrs: [
              { tfName: "T", name: "dtype", type: "dtype", notSupported: !0 },
            ],
          },
          {
            tfOpName: "ComplexAbs",
            category: "basic_math",
            inputs: [{ start: 0, name: "x", type: "tensor" }],
            attrs: [
              { tfName: "T", name: "dtype", type: "dtype", notSupported: !0 },
            ],
          },
          {
            tfOpName: "Cos",
            category: "basic_math",
            inputs: [{ start: 0, name: "x", type: "tensor" }],
            attrs: [
              { tfName: "T", name: "dtype", type: "dtype", notSupported: !0 },
            ],
          },
          {
            tfOpName: "Cosh",
            category: "basic_math",
            inputs: [{ start: 0, name: "x", type: "tensor" }],
            attrs: [
              { tfName: "T", name: "dtype", type: "dtype", notSupported: !0 },
            ],
          },
          {
            tfOpName: "Elu",
            category: "basic_math",
            inputs: [{ start: 0, name: "x", type: "tensor" }],
            attrs: [
              { tfName: "T", name: "dtype", type: "dtype", notSupported: !0 },
            ],
          },
          {
            tfOpName: "Exp",
            category: "basic_math",
            inputs: [{ start: 0, name: "x", type: "tensor" }],
            attrs: [
              { tfName: "T", name: "dtype", type: "dtype", notSupported: !0 },
            ],
          },
          {
            tfOpName: "Floor",
            category: "basic_math",
            inputs: [{ start: 0, name: "x", type: "tensor" }],
            attrs: [
              { tfName: "T", name: "dtype", type: "dtype", notSupported: !0 },
            ],
          },
          {
            tfOpName: "Log",
            category: "basic_math",
            inputs: [{ start: 0, name: "x", type: "tensor" }],
            attrs: [
              { tfName: "T", name: "dtype", type: "dtype", notSupported: !0 },
            ],
          },
          {
            tfOpName: "Imag",
            category: "basic_math",
            inputs: [{ start: 0, name: "x", type: "tensor" }],
            attrs: [
              { tfName: "T", name: "dtype", type: "dtype", notSupported: !0 },
              {
                tfName: "Tout",
                name: "outputType",
                type: "dtype",
                notSupported: !0,
              },
            ],
          },
          {
            tfOpName: "Neg",
            category: "basic_math",
            inputs: [{ start: 0, name: "x", type: "tensor" }],
            attrs: [
              { tfName: "T", name: "dtype", type: "dtype", notSupported: !0 },
            ],
          },
          {
            tfOpName: "Real",
            category: "basic_math",
            inputs: [{ start: 0, name: "x", type: "tensor" }],
            attrs: [
              { tfName: "T", name: "dtype", type: "dtype", notSupported: !0 },
              {
                tfName: "Tout",
                name: "outputType",
                type: "dtype",
                notSupported: !0,
              },
            ],
          },
          {
            tfOpName: "Prelu",
            category: "basic_math",
            inputs: [
              { start: 0, name: "x", type: "tensor" },
              { start: 1, name: "alpha", type: "tensor" },
            ],
            attrs: [
              { tfName: "T", name: "dtype", type: "dtype", notSupported: !0 },
            ],
          },
          {
            tfOpName: "Relu",
            category: "basic_math",
            inputs: [{ start: 0, name: "x", type: "tensor" }],
            attrs: [
              { tfName: "T", name: "dtype", type: "dtype", notSupported: !0 },
            ],
          },
          {
            tfOpName: "Relu6",
            category: "basic_math",
            inputs: [{ start: 0, name: "x", type: "tensor" }],
            attrs: [
              { tfName: "T", name: "dtype", type: "dtype", notSupported: !0 },
            ],
          },
          {
            tfOpName: "Selu",
            category: "basic_math",
            inputs: [{ start: 0, name: "x", type: "tensor" }],
            attrs: [
              { tfName: "T", name: "dtype", type: "dtype", notSupported: !0 },
            ],
          },
          {
            tfOpName: "Sigmoid",
            category: "basic_math",
            inputs: [{ start: 0, name: "x", type: "tensor" }],
            attrs: [
              { tfName: "T", name: "dtype", type: "dtype", notSupported: !0 },
            ],
          },
          {
            tfOpName: "Sin",
            category: "basic_math",
            inputs: [{ start: 0, name: "x", type: "tensor" }],
            attrs: [
              { tfName: "T", name: "dtype", type: "dtype", notSupported: !0 },
            ],
          },
          {
            tfOpName: "Sinh",
            category: "basic_math",
            inputs: [{ start: 0, name: "x", type: "tensor" }],
            attrs: [
              { tfName: "T", name: "dtype", type: "dtype", notSupported: !0 },
            ],
          },
          {
            tfOpName: "Sqrt",
            category: "basic_math",
            inputs: [{ start: 0, name: "x", type: "tensor" }],
            attrs: [
              { tfName: "T", name: "dtype", type: "dtype", notSupported: !0 },
            ],
          },
          {
            tfOpName: "Rsqrt",
            category: "basic_math",
            inputs: [{ start: 0, name: "x", type: "tensor" }],
            attrs: [
              { tfName: "T", name: "dtype", type: "dtype", notSupported: !0 },
            ],
          },
          {
            tfOpName: "Square",
            category: "basic_math",
            inputs: [{ start: 0, name: "x", type: "tensor" }],
            attrs: [
              { tfName: "T", name: "dtype", type: "dtype", notSupported: !0 },
            ],
          },
          {
            tfOpName: "Tan",
            category: "basic_math",
            inputs: [{ start: 0, name: "x", type: "tensor" }],
            attrs: [
              { tfName: "T", name: "dtype", type: "dtype", notSupported: !0 },
            ],
          },
          {
            tfOpName: "Tanh",
            category: "basic_math",
            inputs: [{ start: 0, name: "x", type: "tensor" }],
            attrs: [
              { tfName: "T", name: "dtype", type: "dtype", notSupported: !0 },
            ],
          },
          {
            tfOpName: "Sign",
            category: "basic_math",
            inputs: [{ start: 0, name: "x", type: "tensor" }],
            attrs: [
              { tfName: "T", name: "dtype", type: "dtype", notSupported: !0 },
            ],
          },
          {
            tfOpName: "Round",
            category: "basic_math",
            inputs: [{ start: 0, name: "x", type: "tensor" }],
            attrs: [
              { tfName: "T", name: "dtype", type: "dtype", notSupported: !0 },
            ],
          },
          {
            tfOpName: "Expm1",
            category: "basic_math",
            inputs: [{ start: 0, name: "x", type: "tensor" }],
            attrs: [
              { tfName: "T", name: "dtype", type: "dtype", notSupported: !0 },
            ],
          },
          {
            tfOpName: "Log1p",
            category: "basic_math",
            inputs: [{ start: 0, name: "x", type: "tensor" }],
            attrs: [
              { tfName: "T", name: "dtype", type: "dtype", notSupported: !0 },
            ],
          },
          {
            tfOpName: "Reciprocal",
            category: "basic_math",
            inputs: [{ start: 0, name: "x", type: "tensor" }],
            attrs: [
              { tfName: "T", name: "dtype", type: "dtype", notSupported: !0 },
            ],
          },
          {
            tfOpName: "Softplus",
            category: "basic_math",
            inputs: [{ start: 0, name: "x", type: "tensor" }],
            attrs: [
              { tfName: "T", name: "dtype", type: "dtype", notSupported: !0 },
            ],
          },
          {
            tfOpName: "Asinh",
            category: "basic_math",
            inputs: [{ start: 0, name: "x", type: "tensor" }],
            attrs: [
              { tfName: "T", name: "dtype", type: "dtype", notSupported: !0 },
            ],
          },
          {
            tfOpName: "Acosh",
            category: "basic_math",
            inputs: [{ start: 0, name: "x", type: "tensor" }],
            attrs: [
              { tfName: "T", name: "dtype", type: "dtype", notSupported: !0 },
            ],
          },
          {
            tfOpName: "Atanh",
            category: "basic_math",
            inputs: [{ start: 0, name: "x", type: "tensor" }],
            attrs: [
              { tfName: "T", name: "dtype", type: "dtype", notSupported: !0 },
            ],
          },
          {
            tfOpName: "Erf",
            category: "basic_math",
            inputs: [{ start: 0, name: "x", type: "tensor" }],
            attrs: [
              { tfName: "T", name: "dtype", type: "dtype", notSupported: !0 },
            ],
          },
          {
            tfOpName: "Prod",
            category: "basic_math",
            inputs: [
              { start: 0, name: "x", type: "tensor" },
              { start: 1, name: "axes", type: "number[]" },
            ],
            attrs: [
              {
                tfName: "keep_dims",
                name: "keepDims",
                type: "bool",
                notSupported: !0,
              },
              { tfName: "T", name: "dtype", type: "dtype", notSupported: !0 },
            ],
          },
          {
            tfOpName: "LeakyRelu",
            category: "basic_math",
            inputs: [{ start: 0, name: "x", type: "tensor" }],
            attrs: [
              {
                tfName: "alpha",
                name: "alpha",
                type: "number",
                defaultValue: 0.2,
              },
              { tfName: "T", name: "dtype", type: "dtype", notSupported: !0 },
            ],
          },
          {
            tfOpName: "IsNan",
            category: "basic_math",
            inputs: [{ start: 0, name: "x", type: "tensor" }],
            attrs: [
              { tfName: "T", name: "dtype", type: "dtype", notSupported: !0 },
            ],
          },
        ],
        z = [
          {
            tfOpName: "EmptyTensorList",
            category: "control",
            inputs: [
              { start: 0, name: "elementShape", type: "shape" },
              { start: 1, name: "maxNumElements", type: "number" },
            ],
            attrs: [
              { tfName: "element_dtype", name: "elementDType", type: "dtype" },
            ],
          },
          {
            tfOpName: "LoopCond",
            category: "control",
            inputs: [{ start: 0, name: "pred", type: "tensor" }],
          },
          {
            tfOpName: "Switch",
            category: "control",
            inputs: [
              { start: 0, name: "data", type: "tensor" },
              { start: 1, name: "pred", type: "tensor" },
            ],
          },
          {
            tfOpName: "Merge",
            category: "control",
            inputs: [{ start: 0, end: 0, name: "tensors", type: "tensors" }],
          },
          {
            tfOpName: "Enter",
            category: "control",
            inputs: [{ start: 0, name: "tensor", type: "tensor" }],
            attrs: [
              { tfName: "T", name: "dtype", type: "dtype", notSupported: !0 },
              { tfName: "frame_name", name: "frameName", type: "string" },
              { tfName: "is_constant", name: "isConstant", type: "bool" },
            ],
          },
          {
            tfOpName: "Exit",
            category: "control",
            inputs: [{ start: 0, name: "tensor", type: "tensor" }],
            attrs: [
              { tfName: "T", name: "dtype", type: "dtype", notSupported: !0 },
            ],
          },
          {
            tfOpName: "NextIteration",
            category: "control",
            inputs: [{ start: 0, name: "tensor", type: "tensor" }],
            attrs: [
              { tfName: "T", name: "dtype", type: "dtype", notSupported: !0 },
            ],
          },
          {
            tfOpName: "TensorArrayV3",
            category: "control",
            inputs: [{ start: 0, name: "size", type: "number" }],
            attrs: [
              { tfName: "dtype", name: "dtype", type: "dtype" },
              { tfName: "element_shape", name: "elementShape", type: "shape" },
              { tfName: "dynamic_size", name: "dynamicSize", type: "bool" },
              {
                tfName: "clear_after_read",
                name: "clearAfterRead",
                type: "bool",
              },
              {
                tfName: "identical_element_shapes",
                name: "identicalElementShapes",
                type: "bool",
              },
              { tfName: "tensor_array_name", name: "name", type: "string" },
            ],
          },
          {
            tfOpName: "TensorArrayWriteV3",
            category: "control",
            inputs: [
              { start: 0, name: "tensorArrayId", type: "tensor" },
              { start: 1, name: "index", type: "number" },
              { start: 2, name: "tensor", type: "tensor" },
              { start: 3, name: "flowIn", type: "number" },
            ],
            attrs: [
              { tfName: "T", name: "dtype", type: "dtype", notSupported: !0 },
            ],
          },
          {
            tfOpName: "TensorArrayReadV3",
            category: "control",
            inputs: [
              { start: 0, name: "tensorArrayId", type: "tensor" },
              { start: 1, name: "index", type: "number" },
              { start: 2, name: "flowIn", type: "number" },
            ],
            attrs: [
              {
                tfName: "dtype",
                name: "dtype",
                type: "dtype",
                notSupported: !0,
              },
            ],
          },
          {
            tfOpName: "TensorArrayGatherV3",
            category: "control",
            inputs: [
              { start: 0, name: "tensorArrayId", type: "tensor" },
              { start: 1, name: "indices", type: "number[]" },
              { start: 2, name: "flowIn", type: "number" },
            ],
            attrs: [
              { tfName: "dtype", name: "dtype", type: "dtype" },
              { tfName: "element_shape", name: "elementShape", type: "shape" },
            ],
          },
          {
            tfOpName: "TensorArrayScatterV3",
            category: "control",
            inputs: [
              { start: 0, name: "tensorArrayId", type: "tensor" },
              { start: 1, name: "indices", type: "number[]" },
              { start: 2, name: "tensor", type: "tensor" },
              { start: 3, name: "flowIn", type: "number" },
            ],
            attrs: [{ tfName: "T", name: "dtype", type: "dtype" }],
          },
          {
            tfOpName: "TensorArrayConcatV3",
            category: "control",
            inputs: [
              { start: 0, name: "tensorArrayId", type: "tensor" },
              { start: 1, name: "flowIn", type: "number" },
            ],
            attrs: [
              { tfName: "dtype", name: "dtype", type: "dtype" },
              {
                tfName: "element_shape_except0",
                name: "elementShapeExcept0",
                type: "shape",
                notSupported: !0,
              },
            ],
          },
          {
            tfOpName: "TensorArraySplitV3",
            category: "control",
            inputs: [
              { start: 0, name: "tensorArrayId", type: "tensor" },
              { start: 1, name: "tensor", type: "tensor" },
              { start: 2, name: "lengths", type: "number[]" },
              { start: 3, name: "flowIn", type: "number" },
            ],
            attrs: [{ tfName: "T", name: "dtype", type: "dtype" }],
          },
          {
            tfOpName: "TensorArraySizeV3",
            category: "control",
            inputs: [
              { start: 0, name: "tensorArrayId", type: "tensor" },
              { start: 1, name: "flowIn", type: "number" },
            ],
          },
          {
            tfOpName: "TensorArrayCloseV3",
            category: "control",
            inputs: [{ start: 0, name: "tensorArrayId", type: "tensor" }],
          },
          {
            tfOpName: "StatelessIf",
            category: "control",
            inputs: [
              { start: 0, name: "cond", type: "tensor" },
              { start: 1, end: 0, name: "args", type: "tensors" },
            ],
            attrs: [
              { tfName: "then_branch", name: "thenBranch", type: "func" },
              { tfName: "else_branch", name: "elseBranch", type: "func" },
            ],
          },
          {
            tfOpName: "If",
            category: "control",
            inputs: [
              { start: 0, name: "cond", type: "tensor" },
              { start: 1, end: 0, name: "args", type: "tensors" },
            ],
            attrs: [
              { tfName: "then_branch", name: "thenBranch", type: "func" },
              { tfName: "else_branch", name: "elseBranch", type: "func" },
            ],
          },
          {
            tfOpName: "StatelessWhile",
            category: "control",
            inputs: [{ start: 0, end: 0, name: "args", type: "tensors" }],
            attrs: [
              { tfName: "cond", name: "cond", type: "func" },
              { tfName: "body", name: "body", type: "func" },
            ],
          },
          {
            tfOpName: "While",
            category: "control",
            inputs: [{ start: 0, end: 0, name: "args", type: "tensors" }],
            attrs: [
              { tfName: "cond", name: "cond", type: "func" },
              { tfName: "body", name: "body", type: "func" },
            ],
          },
          {
            tfOpName: "TensorListScatter",
            category: "control",
            inputs: [
              { start: 0, name: "tensor", type: "tensor" },
              { start: 1, name: "indices", type: "number[]" },
              { start: 2, name: "elementShape", type: "shape" },
            ],
            attrs: [
              { tfName: "element_dtype", name: "elementDType", type: "dtype" },
            ],
          },
          {
            tfOpName: "TensorListScatterV2",
            category: "control",
            inputs: [
              { start: 0, name: "tensor", type: "tensor" },
              { start: 1, name: "indices", type: "number[]" },
              { start: 2, name: "elementShape", type: "shape" },
              { start: 3, name: "numElements", type: "number" },
            ],
            attrs: [
              { tfName: "element_dtype", name: "elementDType", type: "dtype" },
            ],
          },
          {
            tfOpName: "TensorListGather",
            category: "control",
            inputs: [
              { start: 0, name: "tensorListId", type: "tensor" },
              { start: 1, name: "indices", type: "number[]" },
              { start: 2, name: "elementShape", type: "shape" },
            ],
            attrs: [
              { tfName: "element_dtype", name: "elementDType", type: "dtype" },
            ],
          },
          {
            tfOpName: "TensorListGetItem",
            category: "control",
            inputs: [
              { start: 0, name: "tensorListId", type: "tensor" },
              { start: 1, name: "index", type: "number" },
              { start: 2, name: "elementShape", type: "shape" },
            ],
            attrs: [
              { tfName: "element_dtype", name: "elementDType", type: "dtype" },
            ],
          },
          {
            tfOpName: "TensorListSetItem",
            category: "control",
            inputs: [
              { start: 0, name: "tensorListId", type: "tensor" },
              { start: 1, name: "index", type: "number" },
              { start: 2, name: "tensor", type: "tensor" },
            ],
            attrs: [
              { tfName: "element_dtype", name: "elementDType", type: "dtype" },
            ],
          },
          {
            tfOpName: "TensorListReserve",
            category: "control",
            inputs: [
              { start: 0, name: "elementShape", type: "shape" },
              { start: 1, name: "numElements", type: "number" },
            ],
            attrs: [
              { tfName: "element_dtype", name: "elementDType", type: "dtype" },
            ],
          },
          {
            tfOpName: "TensorListFromTensor",
            category: "control",
            inputs: [
              { start: 0, name: "tensor", type: "tensor" },
              { start: 1, name: "elementShape", type: "shape" },
            ],
            attrs: [
              { tfName: "element_dtype", name: "elementDType", type: "dtype" },
            ],
          },
          {
            tfOpName: "TensorListStack",
            category: "control",
            inputs: [
              { start: 0, name: "tensorListId", type: "tensor" },
              { start: 1, name: "elementShape", type: "shape" },
            ],
            attrs: [
              { tfName: "element_dtype", name: "elementDType", type: "dtype" },
              { tfName: "num_elements", name: "numElements", type: "dtype" },
            ],
          },
          {
            tfOpName: "TensorListSplit",
            category: "control",
            inputs: [
              { start: 0, name: "tensor", type: "tensor" },
              { start: 1, name: "elementShape", type: "shape" },
              { start: 2, name: "lengths", type: "number[]" },
            ],
            attrs: [
              { tfName: "element_dtype", name: "elementDType", type: "dtype" },
            ],
          },
          {
            tfOpName: "TensorListConcat",
            category: "control",
            inputs: [{ start: 0, name: "tensorListId", type: "tensor" }],
            attrs: [
              { tfName: "element_shape", name: "elementShape", type: "shape" },
              { tfName: "element_dtype", name: "elementDType", type: "dtype" },
            ],
          },
          {
            tfOpName: "TensorListConcatV2",
            category: "control",
            inputs: [{ start: 0, name: "tensorListId", type: "tensor" }],
            attrs: [
              { tfName: "element_shape", name: "elementShape", type: "shape" },
              { tfName: "element_dtype", name: "elementDType", type: "dtype" },
            ],
          },
          {
            tfOpName: "TensorListPopBack",
            category: "control",
            inputs: [
              { start: 0, name: "tensorListId", type: "tensor" },
              { start: 1, name: "elementShape", type: "shape" },
            ],
            attrs: [
              { tfName: "element_dtype", name: "elementDType", type: "dtype" },
            ],
          },
          {
            tfOpName: "TensorListPushBack",
            category: "control",
            inputs: [
              { start: 0, name: "tensorListId", type: "tensor" },
              { start: 1, name: "tensor", type: "tensor" },
            ],
            attrs: [
              { tfName: "element_dtype", name: "elementDType", type: "dtype" },
            ],
          },
          {
            tfOpName: "TensorListLength",
            category: "control",
            inputs: [{ start: 0, name: "tensorListId", type: "tensor" }],
          },
          {
            tfOpName: "TensorListResize",
            category: "control",
            inputs: [
              { start: 0, name: "tensorListId", type: "tensor" },
              { start: 1, name: "size", type: "number" },
            ],
          },
        ],
        F = [
          {
            tfOpName: "AvgPool",
            category: "convolution",
            inputs: [{ start: 0, name: "x", type: "tensor" }],
            attrs: [
              { tfName: "strides", name: "strides", type: "number[]" },
              { tfName: "padding", name: "pad", type: "string" },
              {
                tfName: "data_format",
                name: "dataFormat",
                type: "string",
                notSupported: !0,
              },
              { tfName: "ksize", name: "kernelSize", type: "number[]" },
              { tfName: "T", name: "dtype", type: "dtype", notSupported: !0 },
            ],
          },
          {
            tfOpName: "MaxPool",
            category: "convolution",
            inputs: [{ start: 0, name: "x", type: "tensor" }],
            attrs: [
              { tfName: "strides", name: "strides", type: "number[]" },
              { tfName: "padding", name: "pad", type: "string" },
              {
                tfName: "data_format",
                name: "dataFormat",
                type: "string",
                notSupported: !0,
              },
              { tfName: "ksize", name: "kernelSize", type: "number[]" },
              {
                tfName: "explicit_paddings",
                name: "explicitPaddings",
                type: "number[]",
                defaultValue: [],
                notSupported: !0,
              },
              { tfName: "T", name: "dtype", type: "dtype", notSupported: !0 },
            ],
          },
          {
            tfOpName: "MaxPoolWithArgmax",
            category: "convolution",
            inputs: [{ start: 0, name: "x", type: "tensor" }],
            attrs: [
              { tfName: "strides", name: "strides", type: "number[]" },
              { tfName: "padding", name: "pad", type: "string" },
              { tfName: "ksize", name: "kernelSize", type: "number[]" },
              {
                tfName: "include_batch_in_index",
                name: "includeBatchInIndex",
                type: "bool",
              },
              { tfName: "T", name: "dtype", type: "dtype", notSupported: !0 },
            ],
          },
          {
            tfOpName: "AvgPool3D",
            category: "convolution",
            inputs: [{ start: 0, name: "x", type: "tensor" }],
            attrs: [
              { tfName: "strides", name: "strides", type: "number[]" },
              { tfName: "padding", name: "pad", type: "string" },
              {
                tfName: "data_format",
                name: "dataFormat",
                type: "string",
                notSupported: !0,
              },
              { tfName: "ksize", name: "kernelSize", type: "number[]" },
              { tfName: "T", name: "dtype", type: "dtype", notSupported: !0 },
            ],
          },
          {
            tfOpName: "MaxPool3D",
            category: "convolution",
            inputs: [{ start: 0, name: "x", type: "tensor" }],
            attrs: [
              { tfName: "strides", name: "strides", type: "number[]" },
              { tfName: "padding", name: "pad", type: "string" },
              {
                tfName: "data_format",
                name: "dataFormat",
                type: "string",
                notSupported: !0,
              },
              { tfName: "ksize", name: "kernelSize", type: "number[]" },
              { tfName: "T", name: "dtype", type: "dtype", notSupported: !0 },
            ],
          },
          {
            tfOpName: "Conv1D",
            category: "convolution",
            inputs: [
              { start: 0, name: "x", type: "tensor" },
              { start: 1, name: "filter", type: "tensor" },
            ],
            attrs: [
              { tfName: "stride", name: "stride", type: "number" },
              { tfName: "padding", name: "pad", type: "string" },
              {
                tfName: "data_format",
                name: "dataFormat",
                type: "string",
                defaultValue: "NWC",
              },
              { tfName: "T", name: "dtype", type: "dtype", notSupported: !0 },
              {
                tfName: "dilation",
                name: "dilation",
                type: "number",
                defaultValue: 1,
              },
            ],
          },
          {
            tfOpName: "Conv2D",
            category: "convolution",
            inputs: [
              { start: 0, name: "x", type: "tensor" },
              { start: 1, name: "filter", type: "tensor" },
            ],
            attrs: [
              { tfName: "T", name: "dtype", type: "dtype", notSupported: !0 },
              { tfName: "strides", name: "strides", type: "number[]" },
              { tfName: "padding", name: "pad", type: "string" },
              { tfName: "useCudnnOnGpu", name: "useCudnnOnGpu", type: "bool" },
              {
                tfName: "data_format",
                name: "dataFormat",
                type: "string",
                defaultValue: "NHWC",
              },
              {
                tfName: "explicit_paddings",
                name: "explicitPaddings",
                type: "number[]",
                defaultValue: [],
              },
              { tfName: "dilations", name: "dilations", type: "number[]" },
            ],
          },
          {
            tfOpName: "_FusedConv2D",
            category: "convolution",
            inputs: [
              { start: 0, name: "x", type: "tensor" },
              { start: 1, name: "filter", type: "tensor" },
              { start: 2, end: 0, name: "args", type: "tensors" },
            ],
            attrs: [
              { tfName: "num_args", name: "numArgs", type: "number" },
              { tfName: "T", name: "dtype", type: "dtype", notSupported: !0 },
              { tfName: "strides", name: "strides", type: "number[]" },
              { tfName: "padding", name: "pad", type: "string" },
              {
                tfName: "explicit_paddings",
                name: "explicitPaddings",
                type: "number[]",
                defaultValue: [],
              },
              {
                tfName: "use_cudnn_on_gpu",
                name: "useCudnnOnGpu",
                type: "bool",
                defaultValue: !0,
              },
              {
                tfName: "data_format",
                name: "dataFormat",
                type: "string",
                defaultValue: "NHWC",
              },
              {
                tfName: "dilations",
                name: "dilations",
                type: "number[]",
                defaultValue: [1, 1, 1, 1],
              },
              {
                tfName: "fused_ops",
                name: "fusedOps",
                type: "string[]",
                defaultValue: [],
              },
              {
                tfName: "epsilon",
                name: "epsilon",
                type: "number",
                defaultValue: 1e-4,
              },
              {
                tfName: "leakyrelu_alpha",
                name: "leakyreluAlpha",
                type: "number",
                defaultValue: 0.2,
              },
            ],
          },
          {
            tfOpName: "Conv2DBackpropInput",
            category: "convolution",
            inputs: [
              { start: 2, name: "x", type: "tensor" },
              { start: 1, name: "filter", type: "tensor" },
              { start: 0, name: "outputShape", type: "number[]" },
            ],
            attrs: [
              { tfName: "strides", name: "strides", type: "number[]" },
              { tfName: "padding", name: "pad", type: "string" },
              {
                tfName: "data_format",
                name: "dataFormat",
                type: "string",
                notSupported: !0,
              },
              {
                tfName: "explicit_paddings",
                name: "explicitPaddings",
                type: "number[]",
                defaultValue: [],
              },
              {
                tfName: "dilations",
                name: "dilations",
                type: "number[]",
                notSupported: !0,
              },
            ],
          },
          {
            tfOpName: "DepthwiseConv2d",
            category: "convolution",
            inputs: [
              { start: 0, name: "input", type: "tensor" },
              { start: 1, name: "filter", type: "tensor" },
            ],
            attrs: [
              { tfName: "strides", name: "strides", type: "number[]" },
              { tfName: "padding", name: "pad", type: "string" },
              {
                tfName: "data_format",
                name: "dataFormat",
                type: "string",
                defaultValue: "NHWC",
              },
              {
                tfName: "explicit_paddings",
                name: "explicitPaddings",
                type: "number[]",
                defaultValue: [],
              },
              { tfName: "dilations", name: "dilations", type: "number[]" },
            ],
          },
          {
            tfOpName: "DepthwiseConv2dNative",
            category: "convolution",
            inputs: [
              { start: 0, name: "input", type: "tensor" },
              { start: 1, name: "filter", type: "tensor" },
            ],
            attrs: [
              { tfName: "strides", name: "strides", type: "number[]" },
              { tfName: "padding", name: "pad", type: "string" },
              {
                tfName: "data_format",
                name: "dataFormat",
                type: "string",
                defaultValue: "NHWC",
              },
              {
                tfName: "explicit_paddings",
                name: "explicitPaddings",
                type: "number[]",
                defaultValue: [],
              },
              { tfName: "dilations", name: "dilations", type: "number[]" },
            ],
          },
          {
            tfOpName: "FusedDepthwiseConv2dNative",
            category: "convolution",
            inputs: [
              { start: 0, name: "x", type: "tensor" },
              { start: 1, name: "filter", type: "tensor" },
              { start: 2, end: 0, name: "args", type: "tensors" },
            ],
            attrs: [
              { tfName: "num_args", name: "numArgs", type: "number" },
              { tfName: "T", name: "dtype", type: "dtype", notSupported: !0 },
              { tfName: "strides", name: "strides", type: "number[]" },
              { tfName: "padding", name: "pad", type: "string" },
              {
                tfName: "data_format",
                name: "dataFormat",
                type: "string",
                defaultValue: "NHWC",
              },
              {
                tfName: "dilations",
                name: "dilations",
                type: "number[]",
                defaultValue: [1, 1, 1, 1],
              },
              {
                tfName: "fused_ops",
                name: "fusedOps",
                type: "string[]",
                defaultValue: [],
              },
              {
                tfName: "explicit_paddings",
                name: "explicitPaddings",
                type: "number[]",
                defaultValue: [],
              },
            ],
          },
          {
            tfOpName: "Conv3D",
            category: "convolution",
            inputs: [
              { start: 0, name: "x", type: "tensor" },
              { start: 1, name: "filter", type: "tensor" },
            ],
            attrs: [
              { tfName: "strides", name: "strides", type: "number[]" },
              { tfName: "padding", name: "pad", type: "string" },
              {
                tfName: "data_format",
                name: "dataFormat",
                type: "string",
                defaultValue: "NHWC",
              },
              { tfName: "dilations", name: "dilations", type: "number[]" },
            ],
          },
          {
            tfOpName: "Dilation2D",
            category: "convolution",
            inputs: [
              { start: 0, name: "x", type: "tensor" },
              { start: 1, name: "filter", type: "tensor" },
            ],
            attrs: [
              { tfName: "strides", name: "strides", type: "number[]" },
              { tfName: "rates", name: "dilations", type: "number[]" },
              { tfName: "padding", name: "pad", type: "string" },
            ],
          },
        ],
        $ = [
          {
            tfOpName: "Fill",
            category: "creation",
            inputs: [
              { start: 0, name: "shape", type: "number[]" },
              { start: 1, name: "value", type: "number" },
            ],
            attrs: [{ tfName: "T", name: "dtype", type: "dtype" }],
          },
          {
            tfOpName: "LinSpace",
            category: "creation",
            inputs: [
              { start: 0, name: "start", type: "number" },
              { start: 1, name: "stop", type: "number" },
              { start: 2, name: "num", type: "number" },
            ],
            attrs: [
              { tfName: "T", name: "dtype", type: "dtype", notSupported: !0 },
            ],
          },
          {
            tfOpName: "OneHot",
            category: "creation",
            inputs: [
              { start: 0, name: "indices", type: "tensor" },
              { start: 1, name: "depth", type: "number" },
              { start: 2, name: "onValue", type: "number", defaultValue: 1 },
              { start: 3, name: "offValue", type: "number", defaultValue: 0 },
            ],
            attrs: [
              {
                tfName: "axis",
                name: "axis",
                type: "number",
                notSupported: !0,
              },
              { tfName: "T", name: "dtype", type: "dtype" },
            ],
          },
          {
            tfOpName: "Ones",
            category: "creation",
            inputs: [{ start: 0, name: "shape", type: "number[]" }],
            attrs: [{ tfName: "T", name: "dtype", type: "dtype" }],
          },
          {
            tfOpName: "OnesLike",
            category: "creation",
            inputs: [{ start: 0, name: "x", type: "tensor" }],
            attrs: [{ tfName: "dtype", name: "dtype", type: "dtype" }],
          },
          {
            tfOpName: "RandomStandardNormal",
            category: "creation",
            inputs: [{ start: 0, name: "shape", type: "number[]" }],
            attrs: [
              { tfName: "seed", name: "seed", type: "number", defaultValue: 0 },
              {
                tfName: "seed2",
                name: "seed2",
                type: "number",
                defaultValue: 0,
                notSupported: !0,
              },
              { tfName: "dtype", name: "dtype", type: "dtype" },
              { tfName: "T", name: "T", type: "number", notSupported: !0 },
            ],
          },
          {
            tfOpName: "RandomUniform",
            category: "creation",
            inputs: [{ start: 0, name: "shape", type: "number[]" }],
            attrs: [
              {
                tfName: "minval",
                name: "minval",
                type: "number",
                defaultValue: 0,
              },
              {
                tfName: "maxval",
                name: "maxval",
                type: "number",
                defaultValue: 1,
              },
              { tfName: "dtype", name: "dtype", type: "dtype" },
              { tfName: "seed", name: "seed", type: "number", defaultValue: 0 },
              {
                tfName: "seed2",
                name: "seed2",
                type: "number",
                defaultValue: 0,
                notSupported: !0,
              },
              { tfName: "T", name: "T", type: "number", notSupported: !0 },
            ],
          },
          {
            tfOpName: "Range",
            category: "creation",
            inputs: [
              { start: 0, name: "start", type: "number" },
              { start: 1, name: "stop", type: "number" },
              { start: 2, name: "step", type: "number", defaultValue: 0 },
            ],
            attrs: [{ tfName: "Tidx", name: "dtype", type: "dtype" }],
          },
          {
            tfOpName: "TruncatedNormal",
            category: "creation",
            inputs: [{ start: 0, name: "shape", type: "number[]" }],
            attrs: [
              {
                tfName: "means",
                name: "mean",
                type: "number",
                defaultValue: 0,
              },
              {
                tfName: "stddev",
                name: "stdDev",
                type: "number",
                defaultValue: 1,
              },
              { tfName: "seed", name: "seed", type: "number" },
              {
                tfName: "seed2",
                name: "seed2",
                type: "number",
                defaultValue: 0,
                notSupported: !0,
              },
              { tfName: "dtype", name: "dtype", type: "dtype" },
              { tfName: "T", name: "T", type: "number", notSupported: !0 },
            ],
          },
          {
            tfOpName: "Zeros",
            category: "creation",
            inputs: [{ start: 0, name: "shape", type: "number[]" }],
            attrs: [{ tfName: "T", name: "dtype", type: "dtype" }],
          },
          {
            tfOpName: "ZerosLike",
            category: "creation",
            inputs: [{ start: 0, name: "x", type: "tensor" }],
            attrs: [{ tfName: "T", name: "dtype", type: "dtype" }],
          },
          {
            tfOpName: "Multinomial",
            category: "creation",
            inputs: [
              { start: 0, name: "logits", type: "tensor" },
              { start: 1, name: "numSamples", type: "number" },
            ],
            attrs: [
              { tfName: "seed", name: "seed", type: "number" },
              { tfName: "seed2", name: "seed2", type: "number" },
              { tfName: "T", name: "dtype", type: "dtype" },
              { tfName: "output_dtype", name: "output_dtype", type: "dtype" },
            ],
          },
        ],
        R = [
          {
            tfOpName: "NonMaxSuppressionV2",
            category: "dynamic",
            inputs: [
              { start: 0, name: "boxes", type: "tensor" },
              { start: 1, name: "scores", type: "tensor" },
              { start: 2, name: "maxOutputSize", type: "number" },
              { start: 3, name: "iouThreshold", type: "number" },
            ],
          },
          {
            tfOpName: "NonMaxSuppressionV3",
            category: "dynamic",
            inputs: [
              { start: 0, name: "boxes", type: "tensor" },
              { start: 1, name: "scores", type: "tensor" },
              { start: 2, name: "maxOutputSize", type: "number" },
              { start: 3, name: "iouThreshold", type: "number" },
              { start: 4, name: "scoreThreshold", type: "number" },
            ],
          },
          {
            tfOpName: "NonMaxSuppressionV4",
            category: "dynamic",
            inputs: [
              { start: 0, name: "boxes", type: "tensor" },
              { start: 1, name: "scores", type: "tensor" },
              { start: 2, name: "maxOutputSize", type: "number" },
              { start: 3, name: "iouThreshold", type: "number" },
              { start: 4, name: "scoreThreshold", type: "number" },
            ],
            attrs: [
              { tfName: "T", name: "dtype", type: "dtype", notSupported: !0 },
              {
                tfName: "T_threshold",
                name: "threshold",
                type: "dtype",
                notSupported: !0,
              },
              {
                tfName: "pad_to_max_output_size",
                name: "padToMaxOutputSize",
                type: "bool",
              },
            ],
          },
          {
            tfOpName: "NonMaxSuppressionV5",
            category: "dynamic",
            inputs: [
              { start: 0, name: "boxes", type: "tensor" },
              { start: 1, name: "scores", type: "tensor" },
              { start: 2, name: "maxOutputSize", type: "number" },
              { start: 3, name: "iouThreshold", type: "number" },
              { start: 4, name: "scoreThreshold", type: "number" },
              { start: 5, name: "softNmsSigma", type: "number" },
            ],
          },
          {
            tfOpName: "Where",
            category: "dynamic",
            inputs: [{ start: 0, name: "condition", type: "tensor" }],
            attrs: [
              { tfName: "T", name: "dtype", type: "dtype", notSupported: !0 },
            ],
          },
          {
            tfOpName: "ListDiff",
            category: "dynamic",
            inputs: [
              { start: 0, name: "x", type: "tensor" },
              { start: 1, name: "y", type: "tensor" },
            ],
            attrs: [
              { tfName: "T", name: "dtype", type: "dtype", notSupported: !0 },
            ],
          },
        ],
        P = [
          {
            tfOpName: "LowerBound",
            category: "evaluation",
            inputs: [
              { start: 0, name: "sortedSequence", type: "tensor" },
              { start: 1, name: "values", type: "tensor" },
            ],
          },
          {
            tfOpName: "TopKV2",
            category: "evaluation",
            inputs: [
              { start: 0, name: "x", type: "tensor" },
              { start: 1, name: "k", type: "number" },
            ],
            attrs: [{ tfName: "sorted", name: "sorted", type: "bool" }],
          },
          {
            tfOpName: "UpperBound",
            category: "evaluation",
            inputs: [
              { start: 0, name: "sortedSequence", type: "tensor" },
              { start: 1, name: "values", type: "tensor" },
            ],
          },
          {
            tfOpName: "Unique",
            category: "evaluation",
            inputs: [{ start: 0, name: "x", type: "tensor" }],
          },
          {
            tfOpName: "UniqueV2",
            category: "evaluation",
            inputs: [
              { start: 0, name: "x", type: "tensor" },
              { start: 1, name: "axis", type: "number" },
            ],
          },
        ],
        B = [
          {
            tfOpName: "PlaceholderWithDefault",
            category: "graph",
            inputs: [{ start: 0, name: "default", type: "tensor" }],
            attrs: [
              { tfName: "shape", name: "shape", type: "shape" },
              { tfName: "dtype", name: "dtype", type: "dtype" },
            ],
          },
          {
            tfOpName: "Placeholder",
            category: "graph",
            attrs: [
              { tfName: "shape", name: "shape", type: "shape" },
              { tfName: "dtype", name: "dtype", type: "dtype" },
            ],
          },
          { tfOpName: "Const", category: "graph" },
          {
            tfOpName: "Identity",
            category: "graph",
            inputs: [{ start: 0, name: "x", type: "tensor" }],
          },
          {
            tfOpName: "IdentityN",
            category: "graph",
            inputs: [{ start: 0, end: 0, name: "x", type: "tensors" }],
          },
          {
            tfOpName: "Snapshot",
            category: "graph",
            inputs: [{ start: 0, name: "x", type: "tensor" }],
          },
          {
            tfOpName: "Rank",
            category: "graph",
            inputs: [{ start: 0, name: "x", type: "tensor" }],
          },
          {
            tfOpName: "Size",
            category: "graph",
            inputs: [{ start: 0, name: "x", type: "tensor" }],
          },
          {
            tfOpName: "Shape",
            category: "graph",
            inputs: [{ start: 0, name: "x", type: "tensor" }],
          },
          {
            tfOpName: "ShapeN",
            category: "graph",
            inputs: [{ start: 0, end: 0, name: "x", type: "tensors" }],
          },
          {
            tfOpName: "Print",
            category: "graph",
            inputs: [
              { start: 0, name: "x", type: "tensor" },
              { start: 1, name: "data", type: "tensors" },
            ],
            attrs: [
              { tfName: "message", name: "message", type: "string" },
              {
                tfName: "first_n",
                name: "firstN",
                type: "number",
                notSupported: !0,
              },
              {
                tfName: "summarize",
                name: "summarize",
                type: "number",
                defaultValue: 3,
              },
            ],
          },
          { tfOpName: "NoOp", category: "graph", inputs: [] },
          {
            tfOpName: "StopGradient",
            category: "graph",
            inputs: [{ start: 0, name: "x", type: "tensor" }],
          },
          {
            tfOpName: "FakeQuantWithMinMaxVars",
            category: "graph",
            inputs: [{ start: 0, name: "x", type: "tensor" }],
            attrs: [
              { tfName: "min", name: "min", type: "number" },
              { tfName: "max", name: "max", type: "number" },
            ],
          },
        ],
        j = [
          {
            tfOpName: "HashTable",
            category: "hash_table",
            inputs: [],
            attrs: [
              { tfName: "shared_name", name: "sharedName", type: "string" },
              {
                tfName: "use_node_name_sharing",
                name: "useNodeNameSharing",
                type: "bool",
              },
              { tfName: "key_dtype", name: "keyDType", type: "dtype" },
              { tfName: "value_dtype", name: "valueDType", type: "dtype" },
            ],
          },
          {
            tfOpName: "HashTableV2",
            category: "hash_table",
            inputs: [],
            attrs: [
              { tfName: "shared_name", name: "sharedName", type: "string" },
              {
                tfName: "use_node_name_sharing",
                name: "useNodeNameSharing",
                type: "bool",
              },
              { tfName: "key_dtype", name: "keyDType", type: "dtype" },
              { tfName: "value_dtype", name: "valueDType", type: "dtype" },
            ],
          },
          {
            tfOpName: "LookupTableImport",
            category: "hash_table",
            inputs: [
              { start: 0, name: "tableHandle", type: "tensor" },
              { start: 1, name: "keys", type: "tensor" },
              { start: 2, name: "values", type: "tensor" },
            ],
            attrs: [
              { tfName: "Tin", name: "tIn", type: "dtype", notSupported: !0 },
              { tfName: "Tout", name: "tOut", type: "dtype", notSupported: !0 },
            ],
          },
          {
            tfOpName: "LookupTableImportV2",
            category: "hash_table",
            inputs: [
              { start: 0, name: "tableHandle", type: "tensor" },
              { start: 1, name: "keys", type: "tensor" },
              { start: 2, name: "values", type: "tensor" },
            ],
            attrs: [
              { tfName: "Tin", name: "tIn", type: "dtype", notSupported: !0 },
              { tfName: "Tout", name: "tOut", type: "dtype", notSupported: !0 },
            ],
          },
          {
            tfOpName: "LookupTableFind",
            category: "hash_table",
            inputs: [
              { start: 0, name: "tableHandle", type: "tensor" },
              { start: 1, name: "keys", type: "tensor" },
              { start: 2, name: "defaultValue", type: "tensor" },
            ],
            attrs: [
              { tfName: "Tin", name: "tIn", type: "dtype", notSupported: !0 },
              { tfName: "Tout", name: "tOut", type: "dtype", notSupported: !0 },
            ],
          },
          {
            tfOpName: "LookupTableFindV2",
            category: "hash_table",
            inputs: [
              { start: 0, name: "tableHandle", type: "tensor" },
              { start: 1, name: "keys", type: "tensor" },
              { start: 2, name: "defaultValue", type: "tensor" },
            ],
            attrs: [
              { tfName: "Tin", name: "tIn", type: "dtype", notSupported: !0 },
              { tfName: "Tout", name: "tOut", type: "dtype", notSupported: !0 },
            ],
          },
          {
            tfOpName: "LookupTableSize",
            category: "hash_table",
            inputs: [{ start: 0, name: "tableHandle", type: "tensor" }],
          },
          {
            tfOpName: "LookupTableSizeV2",
            category: "hash_table",
            inputs: [{ start: 0, name: "tableHandle", type: "tensor" }],
          },
          {
            tfOpName: "InitializeTable",
            category: "hash_table",
            inputs: [
              { start: 0, name: "tableHandle", type: "tensor" },
              { start: 1, name: "keys", type: "tensor" },
              { start: 2, name: "values", type: "tensor" },
            ],
          },
          {
            tfOpName: "InitializeTableV2",
            category: "hash_table",
            inputs: [
              { start: 0, name: "tableHandle", type: "tensor" },
              { start: 1, name: "keys", type: "tensor" },
              { start: 2, name: "values", type: "tensor" },
            ],
          },
        ],
        U = [
          {
            tfOpName: "ResizeBilinear",
            category: "image",
            inputs: [
              { start: 0, name: "images", type: "tensor" },
              { start: 1, name: "size", type: "number[]" },
            ],
            attrs: [
              { tfName: "align_corners", name: "alignCorners", type: "bool" },
              {
                tfName: "half_pixel_centers",
                name: "halfPixelCenters",
                type: "bool",
              },
              { tfName: "T", name: "dtype", type: "dtype", notSupported: !0 },
            ],
          },
          {
            tfOpName: "ResizeNearestNeighbor",
            category: "image",
            inputs: [
              { start: 0, name: "images", type: "tensor" },
              { start: 1, name: "size", type: "number[]" },
            ],
            attrs: [
              { tfName: "align_corners", name: "alignCorners", type: "bool" },
              {
                tfName: "half_pixel_centers",
                name: "halfPixelCenters",
                type: "bool",
              },
              { tfName: "T", name: "dtype", type: "dtype", notSupported: !0 },
            ],
          },
          {
            tfOpName: "CropAndResize",
            category: "image",
            inputs: [
              { start: 0, name: "image", type: "tensor" },
              { start: 1, name: "boxes", type: "tensor" },
              { start: 2, name: "boxInd", type: "tensor" },
              { start: 3, name: "cropSize", type: "number[]" },
            ],
            attrs: [
              { tfName: "method", name: "method", type: "string" },
              {
                tfName: "extrapolation_value",
                name: "extrapolationValue",
                type: "number",
              },
            ],
          },
          {
            tfOpName: "ImageProjectiveTransformV3",
            category: "image",
            inputs: [
              { start: 0, name: "images", type: "tensor" },
              { start: 1, name: "transforms", type: "tensor" },
              { start: 2, name: "outputShape", type: "number[]" },
              { start: 3, name: "fillValue", type: "number" },
            ],
            attrs: [
              {
                tfName: "interpolation",
                name: "interpolation",
                type: "string",
              },
              { tfName: "fill_mode", name: "fillMode", type: "string" },
            ],
          },
        ],
        H = [
          {
            tfOpName: "Equal",
            category: "logical",
            inputs: [
              { start: 0, name: "a", type: "tensor" },
              { start: 1, name: "b", type: "tensor" },
            ],
            attrs: [
              { tfName: "T", name: "dtype", type: "dtype", notSupported: !0 },
            ],
          },
          {
            tfOpName: "NotEqual",
            category: "logical",
            inputs: [
              { start: 0, name: "a", type: "tensor" },
              { start: 1, name: "b", type: "tensor" },
            ],
            attrs: [
              { tfName: "T", name: "dtype", type: "dtype", notSupported: !0 },
            ],
          },
          {
            tfOpName: "Greater",
            category: "logical",
            inputs: [
              { start: 0, name: "a", type: "tensor" },
              { start: 1, name: "b", type: "tensor" },
            ],
            attrs: [
              { tfName: "T", name: "dtype", type: "dtype", notSupported: !0 },
            ],
          },
          {
            tfOpName: "GreaterEqual",
            category: "logical",
            inputs: [
              { start: 0, name: "a", type: "tensor" },
              { start: 1, name: "b", type: "tensor" },
            ],
            attrs: [
              { tfName: "T", name: "dtype", type: "dtype", notSupported: !0 },
            ],
          },
          {
            tfOpName: "Less",
            category: "logical",
            inputs: [
              { start: 0, name: "a", type: "tensor" },
              { start: 1, name: "b", type: "tensor" },
            ],
            attrs: [
              { tfName: "T", name: "dtype", type: "dtype", notSupported: !0 },
            ],
          },
          {
            tfOpName: "LessEqual",
            category: "logical",
            inputs: [
              { start: 0, name: "a", type: "tensor" },
              { start: 1, name: "b", type: "tensor" },
            ],
            attrs: [
              { tfName: "T", name: "dtype", type: "dtype", notSupported: !0 },
            ],
          },
          {
            tfOpName: "LogicalAnd",
            category: "logical",
            inputs: [
              { start: 0, name: "a", type: "tensor" },
              { start: 1, name: "b", type: "tensor" },
            ],
            attrs: [
              { tfName: "T", name: "dtype", type: "dtype", notSupported: !0 },
            ],
          },
          {
            tfOpName: "LogicalNot",
            category: "logical",
            inputs: [{ start: 0, name: "a", type: "tensor" }],
            attrs: [
              { tfName: "T", name: "dtype", type: "dtype", notSupported: !0 },
            ],
          },
          {
            tfOpName: "LogicalOr",
            category: "logical",
            inputs: [
              { start: 0, name: "a", type: "tensor" },
              { start: 1, name: "b", type: "tensor" },
            ],
            attrs: [
              { tfName: "T", name: "dtype", type: "dtype", notSupported: !0 },
            ],
          },
          {
            tfOpName: "Select",
            category: "logical",
            inputs: [
              { start: 0, name: "condition", type: "tensor" },
              { start: 1, name: "a", type: "tensor" },
              { start: 2, name: "b", type: "tensor" },
            ],
            attrs: [
              { tfName: "T", name: "dtype", type: "dtype", notSupported: !0 },
            ],
          },
          {
            tfOpName: "SelectV2",
            category: "logical",
            inputs: [
              { start: 0, name: "condition", type: "tensor" },
              { start: 1, name: "a", type: "tensor" },
              { start: 2, name: "b", type: "tensor" },
            ],
            attrs: [
              { tfName: "T", name: "dtype", type: "dtype", notSupported: !0 },
            ],
          },
        ],
        q = [
          {
            tfOpName: "_FusedMatMul",
            category: "matrices",
            inputs: [
              { start: 0, name: "a", type: "tensor" },
              { start: 1, name: "b", type: "tensor" },
              { start: 2, end: 0, name: "args", type: "tensors" },
            ],
            attrs: [
              { tfName: "num_args", name: "numArgs", type: "number" },
              {
                tfName: "fused_ops",
                name: "fusedOps",
                type: "string[]",
                defaultValue: [],
              },
              {
                tfName: "epsilon",
                name: "epsilon",
                type: "number",
                defaultValue: 1e-4,
              },
              {
                tfName: "transpose_a",
                name: "transposeA",
                type: "bool",
                defaultValue: !1,
              },
              {
                tfName: "transpose_b",
                name: "transposeB",
                type: "bool",
                defaultValue: !1,
              },
              {
                tfName: "leakyrelu_alpha",
                name: "leakyreluAlpha",
                type: "number",
                defaultValue: 0.2,
              },
              { tfName: "T", name: "dtype", type: "dtype", notSupported: !0 },
            ],
          },
          {
            tfOpName: "MatMul",
            category: "matrices",
            inputs: [
              { start: 0, name: "a", type: "tensor" },
              { start: 1, name: "b", type: "tensor" },
            ],
            attrs: [
              {
                tfName: "transpose_a",
                name: "transposeA",
                type: "bool",
                defaultValue: !1,
              },
              {
                tfName: "transpose_b",
                name: "transposeB",
                type: "bool",
                defaultValue: !1,
              },
              { tfName: "T", name: "dtype", type: "dtype", notSupported: !0 },
            ],
          },
          {
            tfOpName: "BatchMatMul",
            category: "matrices",
            inputs: [
              { start: 0, name: "a", type: "tensor" },
              { start: 1, name: "b", type: "tensor" },
            ],
            attrs: [
              {
                tfName: "adj_x",
                name: "transposeA",
                type: "bool",
                defaultValue: !1,
              },
              {
                tfName: "adj_y",
                name: "transposeB",
                type: "bool",
                defaultValue: !1,
              },
              { tfName: "T", name: "dtype", type: "dtype", notSupported: !0 },
            ],
          },
          {
            tfOpName: "BatchMatMulV2",
            category: "matrices",
            inputs: [
              { start: 0, name: "a", type: "tensor" },
              { start: 1, name: "b", type: "tensor" },
            ],
            attrs: [
              {
                tfName: "adj_x",
                name: "transposeA",
                type: "bool",
                defaultValue: !1,
              },
              {
                tfName: "adj_y",
                name: "transposeB",
                type: "bool",
                defaultValue: !1,
              },
              { tfName: "T", name: "dtype", type: "dtype", notSupported: !0 },
            ],
          },
          {
            tfOpName: "Transpose",
            category: "matrices",
            inputs: [
              { start: 0, name: "x", type: "tensor" },
              { start: 1, name: "perm", type: "number[]" },
            ],
            attrs: [
              { tfName: "T", name: "dtype", type: "dtype", notSupported: !0 },
            ],
          },
          {
            tfOpName: "Einsum",
            category: "matrices",
            inputs: [{ start: 0, end: 0, name: "tensors", type: "tensors" }],
            attrs: [
              { tfName: "equation", name: "equation", type: "string" },
              { tfName: "N", name: "n", type: "number", defaultValue: 2 },
              { tfName: "T", name: "dtype", type: "dtype" },
            ],
          },
        ],
        G = [
          {
            tfOpName: "EuclideanNorm",
            category: "normalization",
            inputs: [
              { start: 0, name: "x", type: "tensor" },
              { start: 1, name: "axis", type: "number[]" },
            ],
            attrs: [
              {
                tfName: "keep_dims",
                name: "keepDims",
                type: "bool",
                defaultValue: !1,
              },
            ],
          },
          {
            tfOpName: "FusedBatchNorm",
            category: "normalization",
            inputs: [
              { start: 0, name: "x", type: "tensor" },
              { start: 1, name: "scale", type: "tensor" },
              { start: 2, name: "offset", type: "tensor" },
              { start: 3, name: "mean", type: "tensor" },
              { start: 4, name: "variance", type: "tensor" },
            ],
            attrs: [
              {
                tfName: "epsilon",
                name: "epsilon",
                type: "number",
                defaultValue: 0.001,
              },
              {
                tfName: "data_format",
                name: "dataFormat",
                type: "string",
                notSupported: !0,
              },
            ],
          },
          {
            tfOpName: "FusedBatchNormV2",
            category: "normalization",
            inputs: [
              { start: 0, name: "x", type: "tensor" },
              { start: 1, name: "scale", type: "tensor" },
              { start: 2, name: "offset", type: "tensor" },
              { start: 3, name: "mean", type: "tensor" },
              { start: 4, name: "variance", type: "tensor" },
            ],
            attrs: [
              {
                tfName: "epsilon",
                name: "epsilon",
                type: "number",
                defaultValue: 0.001,
              },
              {
                tfName: "data_format",
                name: "dataFormat",
                type: "string",
                notSupported: !0,
              },
            ],
          },
          {
            tfOpName: "FusedBatchNormV3",
            category: "normalization",
            inputs: [
              { start: 0, name: "x", type: "tensor" },
              { start: 1, name: "scale", type: "tensor" },
              { start: 2, name: "offset", type: "tensor" },
              { start: 3, name: "mean", type: "tensor" },
              { start: 4, name: "variance", type: "tensor" },
            ],
            attrs: [
              {
                tfName: "epsilon",
                name: "epsilon",
                type: "number",
                defaultValue: 0.001,
              },
              {
                tfName: "data_format",
                name: "dataFormat",
                type: "string",
                notSupported: !0,
              },
            ],
          },
          {
            tfOpName: "LRN",
            category: "normalization",
            inputs: [{ start: 0, name: "x", type: "tensor" }],
            attrs: [
              {
                tfName: "depth_radius",
                name: "radius",
                type: "number",
                defaultValue: 5,
              },
              { tfName: "bias", name: "bias", type: "number", defaultValue: 1 },
              {
                tfName: "alpha",
                name: "alpha",
                type: "number",
                defaultValue: 1,
              },
              {
                tfName: "beta",
                name: "beta",
                type: "number",
                defaultValue: 0.5,
              },
            ],
          },
          {
            tfOpName: "Softmax",
            category: "normalization",
            inputs: [{ start: 0, name: "x", type: "tensor" }],
          },
          {
            tfOpName: "LogSoftmax",
            category: "normalization",
            inputs: [{ start: 0, name: "x", type: "tensor" }],
          },
          {
            tfOpName: "SparseToDense",
            category: "normalization",
            inputs: [
              { start: 0, name: "sparseIndices", type: "tensor" },
              { start: 1, name: "outputShape", type: "number[]" },
              { start: 2, name: "sparseValues", type: "tensor" },
              { start: 3, name: "defaultValue", type: "tensor" },
            ],
            attrs: [
              {
                tfName: "validate_indices",
                name: "validateIndices",
                type: "bool",
                defaultValue: !0,
                notSupported: !0,
              },
            ],
          },
        ],
        W = [
          {
            tfOpName: "Bincount",
            category: "reduction",
            inputs: [
              { start: 0, name: "x", type: "tensor" },
              { start: 1, name: "size", type: "number" },
              { start: 2, name: "weights", type: "tensor" },
            ],
          },
          {
            tfOpName: "DenseBincount",
            category: "reduction",
            inputs: [
              { start: 0, name: "x", type: "tensor" },
              { start: 1, name: "size", type: "number" },
              { start: 2, name: "weights", type: "tensor" },
            ],
            attrs: [
              { tfName: "binary_output", name: "binaryOutput", type: "bool" },
            ],
          },
          {
            tfOpName: "Max",
            category: "reduction",
            inputs: [
              { start: 0, name: "x", type: "tensor" },
              { start: 1, name: "axis", type: "number[]" },
            ],
            attrs: [{ tfName: "keep_dims", name: "keepDims", type: "bool" }],
          },
          {
            tfOpName: "Mean",
            category: "reduction",
            inputs: [
              { start: 0, name: "x", type: "tensor" },
              { start: 1, name: "axis", type: "number[]" },
            ],
            attrs: [{ tfName: "keep_dims", name: "keepDims", type: "bool" }],
          },
          {
            tfOpName: "Min",
            category: "reduction",
            inputs: [
              { start: 0, name: "x", type: "tensor" },
              { start: 1, name: "axis", type: "number[]" },
            ],
            attrs: [{ tfName: "keep_dims", name: "keepDims", type: "bool" }],
          },
          {
            tfOpName: "Sum",
            category: "reduction",
            inputs: [
              { start: 0, name: "x", type: "tensor" },
              { start: 1, name: "axis", type: "number[]" },
            ],
            attrs: [{ tfName: "keep_dims", name: "keepDims", type: "bool" }],
          },
          {
            tfOpName: "All",
            category: "reduction",
            inputs: [
              { start: 0, name: "x", type: "tensor" },
              { start: 1, name: "axis", type: "number[]" },
            ],
            attrs: [{ tfName: "keep_dims", name: "keepDims", type: "bool" }],
          },
          {
            tfOpName: "Any",
            category: "reduction",
            inputs: [
              { start: 0, name: "x", type: "tensor" },
              { start: 1, name: "axis", type: "number[]" },
            ],
            attrs: [{ tfName: "keep_dims", name: "keepDims", type: "bool" }],
          },
          {
            tfOpName: "ArgMax",
            category: "reduction",
            inputs: [
              { start: 0, name: "x", type: "tensor" },
              { start: 1, name: "axis", type: "number" },
            ],
          },
          {
            tfOpName: "ArgMin",
            category: "reduction",
            inputs: [
              { start: 0, name: "x", type: "tensor" },
              { start: 1, name: "axis", type: "number" },
            ],
          },
          {
            tfOpName: "Prod",
            category: "reduction",
            inputs: [
              { start: 0, name: "x", type: "tensor" },
              { start: 1, name: "axis", type: "number[]" },
            ],
            attrs: [{ tfName: "keep_dims", name: "keepDims", type: "bool" }],
          },
          {
            tfOpName: "Cumprod",
            category: "reduction",
            inputs: [
              { start: 0, name: "x", type: "tensor" },
              { start: 1, name: "axis", type: "number" },
            ],
            attrs: [
              { tfName: "exclusive", name: "exclusive", type: "bool" },
              { tfName: "reverse", name: "reverse", type: "bool" },
            ],
          },
          {
            tfOpName: "Cumsum",
            category: "reduction",
            inputs: [
              { start: 0, name: "x", type: "tensor" },
              { start: 1, name: "axis", type: "number" },
            ],
            attrs: [
              { tfName: "exclusive", name: "exclusive", type: "bool" },
              { tfName: "reverse", name: "reverse", type: "bool" },
            ],
          },
        ],
        Q = [
          {
            tfOpName: "ConcatV2",
            category: "slice_join",
            inputs: [
              { start: 0, end: -1, name: "tensors", type: "tensors" },
              { start: -1, name: "axis", type: "number" },
            ],
            attrs: [
              { tfName: "N", name: "n", type: "number", defaultValue: 2 },
            ],
          },
          {
            tfOpName: "Concat",
            category: "slice_join",
            inputs: [
              { start: 1, end: 0, name: "tensors", type: "tensors" },
              { start: 0, name: "axis", type: "number" },
            ],
            attrs: [
              { tfName: "N", name: "n", type: "number", defaultValue: 2 },
            ],
          },
          {
            tfOpName: "GatherV2",
            category: "slice_join",
            inputs: [
              { start: 0, name: "x", type: "tensor" },
              { start: 1, name: "indices", type: "tensor" },
              { start: 2, name: "axis", type: "number", defaultValue: 0 },
            ],
            attrs: [
              {
                tfName: "batch_dims",
                name: "batchDims",
                type: "number",
                defaultValue: 0,
              },
            ],
          },
          {
            tfOpName: "Gather",
            category: "slice_join",
            inputs: [
              { start: 0, name: "x", type: "tensor" },
              { start: 1, name: "indices", type: "tensor" },
            ],
            attrs: [
              {
                tfName: "validate_indices",
                name: "validateIndices",
                type: "bool",
                notSupported: !0,
              },
            ],
          },
          {
            tfOpName: "Reverse",
            category: "slice_join",
            inputs: [
              { start: 0, name: "x", type: "tensor" },
              { start: 1, name: "dims", type: "bool[]" },
            ],
          },
          {
            tfOpName: "ReverseV2",
            category: "slice_join",
            inputs: [
              { start: 0, name: "x", type: "tensor" },
              { start: 1, name: "axis", type: "number[]" },
            ],
          },
          {
            tfOpName: "Slice",
            category: "slice_join",
            inputs: [
              { start: 0, name: "x", type: "tensor" },
              { start: 1, name: "begin", type: "number[]" },
              { start: 2, name: "size", type: "number[]" },
            ],
          },
          {
            tfOpName: "StridedSlice",
            category: "slice_join",
            inputs: [
              { start: 0, name: "x", type: "tensor" },
              { start: 1, name: "begin", type: "number[]" },
              { start: 2, name: "end", type: "number[]" },
              { start: 3, name: "strides", type: "number[]" },
            ],
            attrs: [
              {
                tfName: "begin_mask",
                name: "beginMask",
                type: "number",
                defaultValue: 0,
              },
              {
                tfName: "end_mask",
                name: "endMask",
                type: "number",
                defaultValue: 0,
              },
              {
                tfName: "new_axis_mask",
                name: "newAxisMask",
                type: "number",
                defaultValue: 0,
              },
              {
                tfName: "ellipsis_mask",
                name: "ellipsisMask",
                type: "number",
                defaultValue: 0,
              },
              {
                tfName: "shrink_axis_mask",
                name: "shrinkAxisMask",
                type: "number",
                defaultValue: 0,
              },
            ],
          },
          {
            tfOpName: "Pack",
            category: "slice_join",
            inputs: [{ start: 0, end: 0, name: "tensors", type: "tensors" }],
            attrs: [
              { tfName: "axis", name: "axis", type: "number", defaultValue: 0 },
            ],
          },
          {
            tfOpName: "Unpack",
            category: "slice_join",
            inputs: [{ start: 0, name: "tensor", type: "tensor" }],
            attrs: [
              { tfName: "axis", name: "axis", type: "number", defaultValue: 0 },
              {
                tfName: "num",
                name: "num",
                type: "number",
                defaultValue: 0,
                notSupported: !0,
              },
            ],
          },
          {
            tfOpName: "Tile",
            category: "slice_join",
            inputs: [
              { start: 0, name: "x", type: "tensor" },
              { start: 1, name: "reps", type: "number[]" },
            ],
          },
          {
            tfOpName: "Split",
            category: "slice_join",
            inputs: [
              { start: 0, name: "axis", type: "number", defaultValue: 0 },
              { start: 1, name: "x", type: "tensor" },
            ],
            attrs: [
              {
                tfName: "num_split",
                name: "numOrSizeSplits",
                type: "number",
                defaultValue: 1,
              },
            ],
          },
          {
            tfOpName: "SplitV",
            category: "slice_join",
            inputs: [
              { start: 0, name: "x", type: "tensor" },
              { start: 1, name: "numOrSizeSplits", type: "number[]" },
              { start: 2, name: "axis", type: "number", defaultValue: 0 },
            ],
          },
          {
            tfOpName: "ScatterNd",
            category: "slice_join",
            inputs: [
              { start: 0, name: "indices", type: "tensor" },
              { start: 1, name: "values", type: "tensor" },
              { start: 2, name: "shape", type: "number[]" },
            ],
          },
          {
            tfOpName: "GatherNd",
            category: "slice_join",
            inputs: [
              { start: 0, name: "x", type: "tensor" },
              { start: 1, name: "indices", type: "tensor" },
            ],
          },
          {
            tfOpName: "SparseToDense",
            category: "slice_join",
            inputs: [
              { start: 0, name: "sparseIndices", type: "tensor" },
              { start: 1, name: "outputShape", type: "number[]" },
              { start: 2, name: "sparseValues", type: "tensor" },
              { start: 3, name: "defaultValue", type: "tensor" },
            ],
            attrs: [
              {
                tfName: "validate_indices",
                name: "validateIndices",
                type: "bool",
                defaultValue: !1,
                notSupported: !0,
              },
            ],
          },
        ],
        K = [
          {
            tfOpName: "SparseFillEmptyRows",
            category: "sparse",
            inputs: [
              { start: 0, name: "indices", type: "tensor" },
              { start: 1, name: "values", type: "tensor" },
              { start: 2, name: "denseShape", type: "tensor" },
              { start: 3, name: "defaultValue", type: "tensor" },
            ],
          },
          {
            tfOpName: "SparseReshape",
            category: "sparse",
            inputs: [
              { start: 0, name: "inputIndices", type: "tensor" },
              { start: 1, name: "inputShape", type: "tensor" },
              { start: 2, name: "newShape", type: "tensor" },
            ],
            attrs: [
              { tfName: "T", name: "dtype", type: "dtype", notSupported: !0 },
            ],
          },
          {
            tfOpName: "SparseSegmentMean",
            category: "sparse",
            inputs: [
              { start: 0, name: "data", type: "tensor" },
              { start: 1, name: "indices", type: "tensor" },
              { start: 2, name: "segmentIds", type: "tensor" },
            ],
          },
          {
            tfOpName: "SparseSegmentSum",
            category: "sparse",
            inputs: [
              { start: 0, name: "data", type: "tensor" },
              { start: 1, name: "indices", type: "tensor" },
              { start: 2, name: "segmentIds", type: "tensor" },
            ],
          },
        ],
        X = [
          {
            tfOpName: "FFT",
            category: "spectral",
            inputs: [{ start: 0, name: "x", type: "tensor" }],
          },
          {
            tfOpName: "IFFT",
            category: "spectral",
            inputs: [{ start: 0, name: "x", type: "tensor" }],
          },
          {
            tfOpName: "RFFT",
            category: "spectral",
            inputs: [
              { start: 0, name: "x", type: "tensor" },
              {
                start: 1,
                name: "fft_length",
                type: "number",
                notSupported: !0,
              },
            ],
          },
          {
            tfOpName: "IRFFT",
            category: "spectral",
            inputs: [
              { start: 0, name: "x", type: "tensor" },
              {
                start: 1,
                name: "fft_length",
                type: "number",
                notSupported: !0,
              },
            ],
          },
        ],
        Y = [
          {
            tfOpName: "StringNGrams",
            category: "string",
            inputs: [
              { start: 0, name: "data", type: "tensor" },
              { start: 1, name: "dataSplits", type: "tensor" },
            ],
            attrs: [
              { tfName: "separator", name: "separator", type: "string" },
              { tfName: "ngram_widths", name: "nGramWidths", type: "number[]" },
              { tfName: "left_pad", name: "leftPad", type: "string" },
              { tfName: "right_pad", name: "rightPad", type: "string" },
              { tfName: "pad_width", name: "padWidth", type: "number" },
              {
                tfName: "preserve_short_sequences",
                name: "preserveShortSequences",
                type: "bool",
              },
            ],
            outputs: ["ngrams", "ngrams_splits"],
          },
          {
            tfOpName: "StringSplit",
            category: "string",
            inputs: [
              { start: 0, name: "input", type: "tensor" },
              { start: 1, name: "delimiter", type: "tensor" },
            ],
            attrs: [{ tfName: "skip_empty", name: "skipEmpty", type: "bool" }],
            outputs: ["indices", "values", "shape"],
          },
          {
            tfOpName: "StringToHashBucketFast",
            category: "string",
            inputs: [{ start: 0, name: "input", type: "tensor" }],
            attrs: [
              { tfName: "num_buckets", name: "numBuckets", type: "number" },
            ],
          },
        ],
        Z = [
          {
            tfOpName: "Cast",
            category: "transformation",
            inputs: [{ start: 0, name: "x", type: "tensor" }],
            attrs: [
              {
                tfName: "SrcT",
                name: "sdtype",
                type: "dtype",
                notSupported: !0,
              },
              { tfName: "DstT", name: "dtype", type: "dtype" },
            ],
          },
          {
            tfOpName: "ExpandDims",
            category: "transformation",
            inputs: [
              { start: 0, name: "x", type: "tensor" },
              { start: 1, name: "axis", type: "number" },
            ],
          },
          {
            tfOpName: "MirrorPad",
            category: "transformation",
            inputs: [
              { start: 0, name: "x", type: "tensor" },
              { start: 1, name: "padding", type: "number[]" },
            ],
            attrs: [{ tfName: "mode", name: "mode", type: "string" }],
          },
          {
            tfOpName: "Pad",
            category: "transformation",
            inputs: [
              { start: 0, name: "x", type: "tensor" },
              { start: 1, name: "padding", type: "number[]" },
            ],
            attrs: [
              {
                tfName: "constant_value",
                name: "constantValue",
                type: "number",
                defaultValue: 0,
              },
            ],
          },
          {
            tfOpName: "PadV2",
            category: "transformation",
            inputs: [
              { start: 0, name: "x", type: "tensor" },
              { start: 1, name: "padding", type: "number[]" },
              {
                start: 2,
                name: "constantValue",
                type: "number",
                defaultValue: 0,
              },
            ],
          },
          {
            tfOpName: "Reshape",
            category: "transformation",
            inputs: [
              { start: 0, name: "x", type: "tensor" },
              { start: 1, name: "shape", type: "number[]" },
            ],
          },
          {
            tfOpName: "Squeeze",
            category: "transformation",
            inputs: [{ start: 0, name: "x", type: "tensor" }],
            attrs: [
              {
                tfName: "axis",
                tfDeprecatedName: "squeeze_dims",
                name: "axis",
                type: "number[]",
              },
            ],
          },
          {
            tfOpName: "SpaceToBatchND",
            category: "transformation",
            inputs: [
              { start: 0, name: "x", type: "tensor" },
              { start: 1, name: "blockShape", type: "number[]" },
              { start: 2, name: "paddings", type: "number[]" },
            ],
          },
          {
            tfOpName: "BatchToSpaceND",
            category: "transformation",
            inputs: [
              { start: 0, name: "x", type: "tensor" },
              { start: 1, name: "blockShape", type: "number[]" },
              { start: 2, name: "crops", type: "number[]" },
            ],
          },
          {
            tfOpName: "DepthToSpace",
            category: "transformation",
            inputs: [{ start: 0, name: "x", type: "tensor" }],
            attrs: [
              { tfName: "block_size", name: "blockSize", type: "number" },
              { tfName: "data_format", name: "dataFormat", type: "string" },
            ],
          },
          {
            tfOpName: "BroadcastTo",
            category: "transformation",
            inputs: [
              { start: 0, name: "x", type: "tensor" },
              { start: 1, name: "shape", type: "number[]" },
            ],
            attrs: [],
          },
          {
            tfOpName: "BroadcastArgs",
            category: "transformation",
            inputs: [
              { start: 0, name: "s0", type: "tensor" },
              { start: 1, name: "s1", type: "tensor" },
            ],
            attrs: [],
          },
        ];
      class J {
        constructor() {
          const e = [].concat(
            ...[n, s, r, o, p, i, m, u, d, c, l, y, h, f, N, g, T, b, x].map(
              (e) => e.json
            )
          );
          this.opMappers = e.reduce((e, t) => ((e[t.tfOpName] = t), e), {});
        }
        static get Instance() {
          return this._instance || (this._instance = new this());
        }
        transformGraph(e, t = {}) {
          const a = e.node,
            n = [],
            s = [],
            r = [],
            o = a.reduce(
              (e, t) => (
                (e[t.name] = this.mapNode(t)),
                t.op.startsWith("Placeholder")
                  ? n.push(e[t.name])
                  : "Const" === t.op
                  ? s.push(e[t.name])
                  : (null != t.input && 0 !== t.input.length) ||
                    r.push(e[t.name]),
                e
              ),
              {}
            );
          let p = [];
          const i = [];
          let m = {},
            u = {};
          null != t &&
            ((m = this.mapSignatureEntries(t.inputs)),
            (u = this.mapSignatureEntries(t.outputs)));
          const d = Object.keys(o);
          d.forEach((e) => {
            const t = o[e];
            t.inputNames.forEach((e, a) => {
              const [n, , s] = D(e),
                r = o[n];
              if (null != r.outputs) {
                const e = r.outputs.indexOf(s);
                if (-1 !== e) {
                  const s = `${n}:${e}`;
                  t.inputNames[a] = s;
                }
              }
              t.inputs.push(r), r.children.push(t);
            });
          }),
            0 === Object.keys(u).length
              ? d.forEach((e) => {
                  const t = o[e];
                  0 === t.children.length && i.push(t);
                })
              : Object.keys(u).forEach((e) => {
                  const [t] = D(e),
                    a = o[t];
                  null != a && ((a.signatureKey = u[e]), i.push(a));
                }),
            Object.keys(m).length > 0
              ? Object.keys(m).forEach((e) => {
                  const [t] = D(e),
                    a = o[t];
                  a && ((a.signatureKey = m[e]), p.push(a));
                })
              : (p = n);
          let c = {};
          null != e.library &&
            null != e.library.function &&
            (c = e.library.function.reduce(
              (e, t) => ((e[t.signature.name] = this.mapFunction(t)), e),
              {}
            ));
          const l = {
            nodes: o,
            inputs: p,
            outputs: i,
            weights: s,
            placeholders: n,
            signature: t,
            functions: c,
          };
          return r.length > 0 && (l.initNodes = r), l;
        }
        mapSignatureEntries(e) {
          return Object.keys(e || {}).reduce(
            (t, a) => ((t[e[a].name] = a), t),
            {}
          );
        }
        mapNode(e) {
          const t = I(e.op) || this.opMappers[e.op] || {};
          null == e.attr && (e.attr = {});
          const a = {
            name: e.name,
            op: e.op,
            category: t.category,
            inputNames: (e.input || []).map((e) =>
              e.startsWith("^") ? e.slice(1) : e
            ),
            inputs: [],
            children: [],
            inputParams: {},
            attrParams: {},
            rawAttrs: e.attr,
            outputs: t.outputs,
          };
          return (
            null != t.inputs &&
              (a.inputParams = t.inputs.reduce(
                (e, t) => (
                  (e[t.name] = {
                    type: t.type,
                    inputIndexStart: t.start,
                    inputIndexEnd: t.end,
                  }),
                  e
                ),
                {}
              )),
            null != t.attrs &&
              (a.attrParams = t.attrs.reduce((t, a) => {
                const n = a.type;
                let s;
                switch (a.type) {
                  case "string":
                    (s = te(e.attr, a.tfName, a.defaultValue)),
                      void 0 === s &&
                        a.tfDeprecatedName &&
                        (s = te(e.attr, a.tfDeprecatedName, a.defaultValue));
                    break;
                  case "string[]":
                    (s = de(e.attr, a.tfName, a.defaultValue)),
                      void 0 === s &&
                        a.tfDeprecatedName &&
                        (s = de(e.attr, a.tfDeprecatedName, a.defaultValue));
                    break;
                  case "number":
                    (s = ne(e.attr, a.tfName, a.defaultValue || 0)),
                      void 0 === s &&
                        a.tfDeprecatedName &&
                        (s = ne(e.attr, a.tfDeprecatedName, a.defaultValue));
                    break;
                  case "number[]":
                    (s = ue(e.attr, a.tfName, a.defaultValue)),
                      void 0 === s &&
                        a.tfDeprecatedName &&
                        (s = ue(e.attr, a.tfDeprecatedName, a.defaultValue));
                    break;
                  case "bool":
                    (s = ae(e.attr, a.tfName, a.defaultValue)),
                      void 0 === s &&
                        a.tfDeprecatedName &&
                        (s = ae(e.attr, a.tfDeprecatedName, a.defaultValue));
                    break;
                  case "bool[]":
                    (s = le(e.attr, a.tfName, a.defaultValue)),
                      void 0 === s &&
                        a.tfDeprecatedName &&
                        (s = le(e.attr, a.tfDeprecatedName, a.defaultValue));
                    break;
                  case "shape":
                    (s = me(e.attr, a.tfName, a.defaultValue)),
                      void 0 === s &&
                        a.tfDeprecatedName &&
                        (s = me(e.attr, a.tfDeprecatedName, a.defaultValue));
                    break;
                  case "shape[]":
                    (s = ce(e.attr, a.tfName, a.defaultValue)),
                      void 0 === s &&
                        a.tfDeprecatedName &&
                        (s = ce(e.attr, a.tfDeprecatedName, a.defaultValue));
                    break;
                  case "dtype":
                    (s = oe(e.attr, a.tfName, a.defaultValue)),
                      void 0 === s &&
                        a.tfDeprecatedName &&
                        (s = oe(e.attr, a.tfDeprecatedName, a.defaultValue));
                    break;
                  case "dtype[]":
                    (s = pe(e.attr, a.tfName, a.defaultValue)),
                      void 0 === s &&
                        a.tfDeprecatedName &&
                        (s = pe(e.attr, a.tfDeprecatedName, a.defaultValue));
                    break;
                  case "func":
                    (s = re(e.attr, a.tfName, a.defaultValue)),
                      void 0 === s &&
                        a.tfDeprecatedName &&
                        (s = re(e.attr, a.tfDeprecatedName, a.defaultValue));
                    break;
                  case "tensor":
                  case "tensors":
                    break;
                  default:
                    throw new Error(
                      `Unsupported param type: ${a.type} for op: ${e.op}`
                    );
                }
                return (t[a.name] = { value: s, type: n }), t;
              }, {})),
            a
          );
        }
        mapFunction(e) {
          const t = e.nodeDef,
            a = [];
          let n = {};
          null != t &&
            (n = t.reduce(
              (e, t) => (
                (e[t.name] = this.mapNode(t)),
                "Const" === t.op && a.push(e[t.name]),
                e
              ),
              {}
            ));
          const s = [],
            r = [];
          e.signature.inputArg.forEach((e) => {
            const [t] = D(e.name),
              a = {
                name: t,
                op: "Placeholder",
                inputs: [],
                inputNames: [],
                category: "graph",
                inputParams: {},
                attrParams: { dtype: { value: se(e.type), type: "dtype" } },
                children: [],
              };
            (a.signatureKey = e.name), s.push(a), (n[t] = a);
          }),
            Object.keys(n).forEach((e) => {
              const t = n[e];
              t.inputNames.forEach((e, a) => {
                const [s, , r] = D(e),
                  o = n[s];
                if (null != o.outputs) {
                  const e = o.outputs.indexOf(r);
                  if (-1 !== e) {
                    const n = `${s}:${e}`;
                    t.inputNames[a] = n;
                  }
                }
                t.inputs.push(o), o.children.push(t);
              });
            });
          const o = e.ret;
          e.signature.outputArg.forEach((e) => {
            const [t, a] = D(o[e.name]),
              s = n[t];
            null != s && ((s.defaultOutput = a), r.push(s));
          });
          const p = this.mapArgsToSignature(e);
          return {
            nodes: n,
            inputs: s,
            outputs: r,
            weights: a,
            placeholders: [],
            signature: p,
          };
        }
        mapArgsToSignature(e) {
          return {
            methodName: e.signature.name,
            inputs: e.signature.inputArg.reduce(
              (e, t) => ((e[t.name] = this.mapArgToTensorInfo(t)), e),
              {}
            ),
            outputs: e.signature.outputArg.reduce(
              (t, a) => ((t[a.name] = this.mapArgToTensorInfo(a, e.ret)), t),
              {}
            ),
          };
        }
        mapArgToTensorInfo(e, t) {
          let a = e.name;
          return null != t && (a = t[a]), { name: a, dtype: e.type };
        }
      }
      function ee(e, t) {
        const a = Array.isArray(e)
          ? String.fromCharCode.apply(null, e)
          : (function (e) {
              const t = (0, O.OBj)().global;
              if (void 0 !== t.atob) return t.atob(e);
              if ("undefined" != typeof Buffer)
                return new Buffer(e, "base64").toString();
              throw new Error(
                "Unable to decode base64 in this environment. Missing built-in atob() or Buffer()"
              );
            })(e);
        return t ? a : a.toLowerCase();
      }
      function te(e, t, a, n = !1) {
        const s = e[t];
        return null != s ? ee(s.s, n) : a;
      }
      function ae(e, t, a) {
        const n = e[t];
        return n ? n.b : a;
      }
      function ne(e, t, a) {
        const n = e[t] || {},
          s = null != n.i ? n.i : null != n.f ? n.f : a;
        return "number" == typeof s ? s : parseInt(s, 10);
      }
      function se(e) {
        switch (("string" == typeof e && (e = S[e]), e)) {
          case S.DT_FLOAT:
          case S.DT_HALF:
            return "float32";
          case S.DT_INT32:
          case S.DT_INT64:
          case S.DT_INT8:
          case S.DT_UINT8:
            return "int32";
          case S.DT_BOOL:
            return "bool";
          case S.DT_DOUBLE:
            return "float32";
          case S.DT_STRING:
            return "string";
          default:
            return null;
        }
      }
      function re(e, t, a) {
        const n = e[t];
        return n && n.func ? n.func.name : a;
      }
      function oe(e, t, a) {
        const n = e[t];
        return n && n.type ? se(n.type) : a;
      }
      function pe(e, t, a) {
        const n = e[t];
        return n && n.list && n.list.type ? n.list.type.map((e) => se(e)) : a;
      }
      function ie(e) {
        if (!e.unknownRank)
          return null != e.dim
            ? e.dim.map((e) =>
                "number" == typeof e.size ? e.size : parseInt(e.size, 10)
              )
            : [];
      }
      function me(e, t, a) {
        const n = e[t];
        return n && n.shape ? ie(n.shape) : a;
      }
      function ue(e, t, a) {
        const n = e[t];
        return n
          ? ((n.list.f && n.list.f.length ? n.list.f : n.list.i) || []).map(
              (e) => ("number" == typeof e ? e : parseInt(e, 10))
            )
          : a;
      }
      function de(e, t, a, n = !1) {
        const s = e[t];
        return s && s.list && s.list.s ? s.list.s.map((e) => ee(e, n)) : a;
      }
      function ce(e, t, a) {
        const n = e[t];
        return n && n.list && n.list.shape ? n.list.shape.map((e) => ie(e)) : a;
      }
      function le(e, t, a) {
        const n = e[t];
        return n && n.list && n.list.b ? n.list.b : a;
      }
      class ye {
        constructor(e, t, a) {
          (this.node = e),
            (this.tensorMap = t),
            (this.context = a),
            (this.inputs = []),
            (this.attrs = {}),
            (this.inputs = e.inputNames.map((e) => this.getInput(e))),
            null != e.rawAttrs &&
              (this.attrs = Object.keys(e.rawAttrs).reduce(
                (e, t) => ((e[t] = this.getAttr(t)), e),
                {}
              ));
        }
        getInput(e) {
          return v(e, this.tensorMap, this.context);
        }
        getAttr(e, t) {
          const a = this.node.rawAttrs[e];
          if (null != a.tensor) return v(e, this.tensorMap, this.context);
          if (null != a.i || null != a.f) return ne(this.node.rawAttrs, e, t);
          if (null != a.s) return te(this.node.rawAttrs, e, t);
          if (null != a.b) return ae(this.node.rawAttrs, e, t);
          if (null != a.shape) return me(this.node.rawAttrs, e, t);
          if (null != a.type) return oe(this.node.rawAttrs, e, t);
          if (null != a.list) {
            if (null != a.list.i || null != a.list.f)
              return ue(this.node.rawAttrs, e, t);
            if (null != a.list.s) return de(this.node.rawAttrs, e, t);
            if (null != a.list.shape) return ce(this.node.rawAttrs, e, t);
            if (null != a.list.b) return le(this.node.rawAttrs, e, t);
            if (null != a.list.type) return pe(this.node.rawAttrs, e, t);
          }
          return t;
        }
      }
      var he = a(97611);
      function fe(e, t, a = "") {
        if ("number" != typeof e && "number" != typeof t) {
          O.D5U.assert(
            e.length === t.length,
            () => a + ` Shapes ${e} and ${t} must match`
          );
          for (let n = 0; n < e.length; n++) {
            const s = e[n],
              r = t[n];
            O.D5U.assert(
              s < 0 || r < 0 || s === r,
              () => a + ` Shapes ${e} and ${t} must match`
            );
          }
        }
      }
      function Ne(e) {
        return "number" != typeof e && !e.some((e) => e < 0);
      }
      function ge(e, t, a) {
        let n = Te(e, a);
        const s = !Ne(n);
        if (s && 0 === t.length)
          throw new Error(
            `Tried to calculate elements of an empty list with non-fully-defined elementShape: ${n}`
          );
        if (
          (s &&
            t.forEach((e) => {
              n = Te(e.shape, n);
            }),
          !Ne(n))
        )
          throw new Error(`Non-fully-defined elementShape: ${n}`);
        return n;
      }
      function Te(e, t) {
        if ("number" == typeof e) return t;
        if ("number" == typeof t) return e;
        if (e.length !== t.length)
          throw new Error(`Incompatible ranks during merge: ${e} vs. ${t}`);
        const a = [];
        for (let n = 0; n < e.length; ++n) {
          const s = e[n],
            r = t[n];
          if (s >= 0 && r >= 0 && s !== r)
            throw new Error(`Incompatible shape during merge: ${e} vs. ${t}`);
          a[n] = s >= 0 ? s : r;
        }
        return a;
      }
      class be {
        constructor(e, t, a, n, s, r, o) {
          (this.name = e),
            (this.dtype = t),
            (this.maxSize = a),
            (this.elementShape = n),
            (this.identicalElementShapes = s),
            (this.dynamicSize = r),
            (this.clearAfterRead = o),
            (this.tensors = []),
            (this.closed_ = !1),
            (this.idTensor = (0, O.iD$)(0)),
            (0, O.CnY)(this.idTensor);
        }
        get id() {
          return this.idTensor.id;
        }
        get closed() {
          return this.closed_;
        }
        clearAndClose(e) {
          this.tensors.forEach((t) => {
            (null != e && e.has(t.tensor.id)) || t.tensor.dispose();
          }),
            (this.tensors = []),
            (this.closed_ = !0),
            this.idTensor.dispose();
        }
        size() {
          return this.tensors.length;
        }
        read(e) {
          if (this.closed_)
            throw new Error(
              `TensorArray ${this.name} has already been closed.`
            );
          if (e < 0 || e >= this.size())
            throw new Error(
              `Tried to read from index ${e}, but array size is: ${this.size()}`
            );
          const t = this.tensors[e];
          if (t.cleared)
            throw new Error(
              `TensorArray ${this.name}: Could not read index ${e} twice because it was cleared after a previous read (perhaps try setting clear_after_read = false?).`
            );
          return (
            this.clearAfterRead && (t.cleared = !0), (t.read = !0), t.tensor
          );
        }
        readMany(e) {
          return e.map((e) => this.read(e));
        }
        write(e, t) {
          if (this.closed_)
            throw new Error(
              `TensorArray ${this.name} has already been closed.`
            );
          if (e < 0 || (!this.dynamicSize && e >= this.maxSize))
            throw new Error(
              `Tried to write to index ${e}, but array is not resizeable and size is: ${this.maxSize}`
            );
          const a = this.tensors[e] || {};
          if (t.dtype !== this.dtype)
            throw new Error(
              `TensorArray ${this.name}: Could not write to TensorArray index ${e},\n          because the value dtype is ${t.dtype}, but TensorArray dtype is ${this.dtype}.`
            );
          if (
            (0 !== this.size() ||
              (null != this.elementShape && 0 !== this.elementShape.length) ||
              (this.elementShape = t.shape),
            fe(
              this.elementShape,
              t.shape,
              `TensorArray ${this.name}: Could not write to TensorArray index ${e}.`
            ),
            a.read)
          )
            throw new Error(
              `TensorArray ${this.name}: Could not write to TensorArray index ${e}, because it has already been read.`
            );
          if (a.written)
            throw new Error(
              `TensorArray ${this.name}: Could not write to TensorArray index ${e}, because it has already been written.`
            );
          (a.tensor = t),
            (0, O.CnY)(t),
            (a.written = !0),
            (this.tensors[e] = a);
        }
        writeMany(e, t) {
          if (e.length !== t.length)
            throw new Error(
              `TensorArray ${this.name}: could not write multiple tensors,because the index size: ${e.length} is not the same as tensors size: ${t.length}.`
            );
          e.forEach((e, a) => this.write(e, t[a]));
        }
        gather(e, t) {
          if (t && t !== this.dtype)
            throw new Error(
              `TensorArray dtype is ${this.dtype} but gather requested dtype ${t}`
            );
          if (e) e = e.slice(0, this.size());
          else {
            e = [];
            for (let t = 0; t < this.size(); t++) e.push(t);
          }
          if (0 === e.length)
            return (0, O.XeE)([], [0].concat(this.elementShape));
          const a = this.readMany(e);
          return (
            fe(this.elementShape, a[0].shape, "TensorArray shape mismatch: "),
            (0, O.knu)(a, 0)
          );
        }
        concat(e) {
          if (e && e !== this.dtype)
            throw new Error(
              `TensorArray dtype is ${this.dtype} but concat requested dtype ${e}`
            );
          if (0 === this.size())
            return (0, O.XeE)([], [0].concat(this.elementShape));
          const t = [];
          for (let e = 0; e < this.size(); e++) t.push(e);
          const a = this.readMany(t);
          return (
            fe(
              this.elementShape,
              a[0].shape,
              `TensorArray shape mismatch: tensor array shape (${this.elementShape}) vs first tensor shape (${a[0].shape})`
            ),
            (0, O.zoF)(a, 0)
          );
        }
        scatter(e, t) {
          if (t.dtype !== this.dtype)
            throw new Error(
              `TensorArray dtype is ${this.dtype} but tensor has dtype ${t.dtype}`
            );
          if (e.length !== t.shape[0])
            throw new Error(
              `Expected len(indices) == tensor.shape[0], but saw: ${e.length} vs. ${t.shape[0]}`
            );
          const a = Math.max(...e);
          if (!this.dynamicSize && a >= this.maxSize)
            throw new Error(
              `Max index must be < array size (${a}  vs. ${this.maxSize})`
            );
          this.writeMany(e, (0, O.HHK)(t, 0));
        }
        split(e, t) {
          if (t.dtype !== this.dtype)
            throw new Error(
              `TensorArray dtype is ${this.dtype} but tensor has dtype ${t.dtype}`
            );
          let a = 0;
          const n = e.map((e) => ((a += e), a));
          if (a !== t.shape[0])
            throw new Error(
              `Expected sum of lengths to be equal to\n          tensor.shape[0], but sum of lengths is\n        ${a}, and tensor's shape is: ${t.shape}`
            );
          if (!this.dynamicSize && e.length !== this.maxSize)
            throw new Error(
              `TensorArray's size is not equal to the size of lengths (${this.maxSize} vs. ${e.length}), and the TensorArray is not marked as dynamically resizeable`
            );
          const s = 0 === a ? 0 : t.size / a,
            r = [];
          (0, O.lub)(() => {
            t = (0, O.XLQ)(t, [1, a, s]);
            for (let a = 0; a < e.length; ++a) {
              const o = [0, 0 === a ? 0 : n[a - 1], 0],
                p = [1, e[a], s];
              r[a] = (0, O.XLQ)((0, O.tPi)(t, o, p), this.elementShape);
            }
            return r;
          });
          const o = [];
          for (let t = 0; t < e.length; t++) o[t] = t;
          this.writeMany(o, r);
        }
      }
      class xe {
        constructor(e, t, a, n = -1) {
          (this.tensors = e),
            (this.elementShape = t),
            (this.elementDtype = a),
            null != e &&
              e.forEach((e) => {
                if (a !== e.dtype)
                  throw new Error(
                    `Invalid data types; op elements ${a}, but list elements ${e.dtype}`
                  );
                fe(t, e.shape, "TensorList shape mismatch: "), (0, O.CnY)(e);
              }),
            (this.idTensor = (0, O.iD$)(0)),
            (this.maxNumElements = n),
            (0, O.CnY)(this.idTensor);
        }
        get id() {
          return this.idTensor.id;
        }
        copy() {
          return new xe(
            [...this.tensors],
            this.elementShape,
            this.elementDtype
          );
        }
        clearAndClose(e) {
          this.tensors.forEach((t) => {
            (null != e && e.has(t.id)) || t.dispose();
          }),
            (this.tensors.length = 0),
            this.idTensor.dispose();
        }
        size() {
          return this.tensors.length;
        }
        stack(e, t, a = -1) {
          if (t !== this.elementDtype)
            throw new Error(
              `Invalid data types; op elements ${t}, but list elements ${this.elementDtype}`
            );
          if (-1 !== a && this.tensors.length !== a)
            throw new Error(
              `Operation expected a list with ${a} elements but got a list with ${this.tensors.length} elements.`
            );
          fe(e, this.elementShape, "TensorList shape mismatch: ");
          const n = ge(this.elementShape, this.tensors, e);
          return (0, O.lub)(() => {
            const e = this.tensors.map((e) => (0, O.XLQ)(e, n));
            return (0, O.knu)(e, 0);
          });
        }
        popBack(e, t) {
          if (t !== this.elementDtype)
            throw new Error(
              `Invalid data types; op elements ${t}, but list elements ${this.elementDtype}`
            );
          if (0 === this.size())
            throw new Error("Trying to pop from an empty list.");
          const a = ge(this.elementShape, this.tensors, e),
            n = this.tensors.pop();
          return (
            (n.kept = !1),
            fe(n.shape, e, "TensorList shape mismatch: "),
            (0, O.XLQ)(n, a)
          );
        }
        pushBack(e) {
          if (e.dtype !== this.elementDtype)
            throw new Error(
              `Invalid data types; op elements ${e.dtype}, but list elements ${this.elementDtype}`
            );
          if (
            (fe(e.shape, this.elementShape, "TensorList shape mismatch: "),
            this.maxNumElements === this.size())
          )
            throw new Error("Trying to push element into a full list.");
          (0, O.CnY)(e), this.tensors.push(e);
        }
        resize(e) {
          if (e < 0)
            throw new Error(
              `TensorListResize expects size to be non-negative. Got: ${e}`
            );
          if (-1 !== this.maxNumElements && e > this.maxNumElements)
            throw new Error(
              `TensorListResize input size ${e} is greater maxNumElement ${this.maxNumElements}.`
            );
          const t = new xe(
            [],
            this.elementShape,
            this.elementDtype,
            this.maxNumElements
          );
          t.tensors.length = e;
          for (let a = 0; a < Math.min(this.tensors.length, e); ++a)
            t.tensors[a] = this.tensors[a];
          return t;
        }
        getItem(e, t, a) {
          if (a !== this.elementDtype)
            throw new Error(
              `Invalid data types; op elements ${a}, but list elements ${this.elementDtype}`
            );
          if (e < 0 || e > this.tensors.length)
            throw new Error(
              `Trying to access element ${e} in a list with ${this.tensors.length} elements.`
            );
          if (null == this.tensors[e])
            throw new Error(`element at index ${e} is null.`);
          fe(this.tensors[e].shape, t, "TensorList shape mismatch: ");
          const n = ge(this.elementShape, this.tensors, t);
          return (0, O.XLQ)(this.tensors[e], n);
        }
        setItem(e, t) {
          if (t.dtype !== this.elementDtype)
            throw new Error(
              `Invalid data types; op elements ${t.dtype}, but list elements ${this.elementDtype}`
            );
          if (e < 0 || (-1 !== this.maxNumElements && e >= this.maxNumElements))
            throw new Error(
              `Trying to set element ${e} in a list with max ${this.maxNumElements} elements.`
            );
          fe(this.elementShape, t.shape, "TensorList shape mismatch: "),
            (0, O.CnY)(t),
            null != this.tensors[e] && (this.tensors[e].kept = !1),
            (this.tensors[e] = t);
        }
        gather(e, t, a) {
          if (t !== this.elementDtype)
            throw new Error(
              `Invalid data types; op elements ${t}, but list elements ${this.elementDtype}`
            );
          fe(this.elementShape, a, "TensorList shape mismatch: "),
            (e = e.slice(0, this.size()));
          const n = ge(this.elementShape, this.tensors, a);
          return 0 === e.length
            ? (0, O.XeE)([], [0].concat(n))
            : (0, O.lub)(() => {
                const t = e.map((e) => (0, O.XLQ)(this.tensors[e], n));
                return (0, O.knu)(t, 0);
              });
        }
        concat(e, t) {
          if (e && e !== this.elementDtype)
            throw new Error(
              `TensorList dtype is ${this.elementDtype} but concat requested dtype ${e}`
            );
          fe(this.elementShape, t, "TensorList shape mismatch: ");
          const a = ge(this.elementShape, this.tensors, t);
          return 0 === this.size()
            ? (0, O.XeE)([], [0].concat(a))
            : (0, O.lub)(() => {
                const e = this.tensors.map((e) => (0, O.XLQ)(e, a));
                return (0, O.zoF)(e, 0);
              });
        }
      }
      function Se(e, t, a) {
        const [n, s] = E("fusedOps", e, t, a),
          r = "biasadd" === n,
          o = !r,
          p = "prelu" === s,
          i = "fusedbatchnorm" === n,
          m = E("numArgs", e, t, a);
        if (r) {
          if (p && 2 !== m)
            throw new Error(
              "FusedConv2d and DepthwiseConv2d with BiasAdd and Prelu must have two extra arguments: bias and alpha."
            );
          if (!p && r && 1 !== m)
            throw new Error(
              "FusedConv2d and DepthwiseConv2d with BiasAdd must have one extra argument: bias."
            );
        }
        if (i)
          throw new Error(
            "FusedConv2d and DepthwiseConv2d with FusedBatchNorm is not supported"
          );
        const u = E("strides", e, t, a),
          d = M(e, t, a),
          c = E("dataFormat", e, t, a).toUpperCase(),
          l = E("dilations", e, t, a);
        let [y, h] = E("args", e, t, a);
        return (
          o && ((h = y), (y = void 0)),
          {
            stride: u,
            pad: d,
            dataFormat: c,
            dilations: l,
            biasArg: y,
            preluArg: h,
            activationFunc: s,
            leakyreluAlpha: E("leakyreluAlpha", e, t, a),
          }
        );
      }
      function _e(e, t, a) {
        return {
          boxes: E("boxes", e, t, a),
          scores: E("scores", e, t, a),
          maxOutputSize: E("maxOutputSize", e, t, a),
          iouThreshold: E("iouThreshold", e, t, a),
          scoreThreshold: E("scoreThreshold", e, t, a),
          softNmsSigma: E("softNmsSigma", e, t, a),
        };
      }
      var Oe = a(99494);
      class we {
        constructor(e, t) {
          (this.keyDType = e),
            (this.valueDType = t),
            (this.handle = (0, O.iD$)(0)),
            (this.tensorMap = new Map()),
            (0, O.CnY)(this.handle);
        }
        get id() {
          return this.handle.id;
        }
        clearAndClose() {
          this.tensorMap.forEach((e) => e.dispose()),
            this.tensorMap.clear(),
            this.handle.dispose();
        }
        size() {
          return this.tensorMap.size;
        }
        tensorSize() {
          return Oe.i(this.size(), "int32");
        }
        async import(e, t) {
          this.checkKeyAndValueTensor(e, t);
          const a = await e.data();
          return (
            this.tensorMap.forEach((e) => e.dispose()),
            this.tensorMap.clear(),
            (0, O.lub)(() => {
              const e = (0, O.HHK)(t),
                n = a.length,
                s = e.length;
              O.D5U.assert(
                n === s,
                () =>
                  `The number of elements doesn't match, keys has ${n} elements, the values has ${s} elements.`
              );
              for (let t = 0; t < n; t++) {
                const n = a[t],
                  s = e[t];
                (0, O.CnY)(s), this.tensorMap.set(n, s);
              }
              return this.handle;
            })
          );
        }
        async find(e, t) {
          this.checkKeyAndValueTensor(e, t);
          const a = await e.data();
          return (0, O.lub)(() => {
            const e = [];
            for (let n = 0; n < a.length; n++) {
              const s = a[n],
                r = this.findWithDefault(s, t);
              e.push(r);
            }
            return (0, O.knu)(e);
          });
        }
        findWithDefault(e, t) {
          const a = this.tensorMap.get(e);
          return null != a ? a : t;
        }
        checkKeyAndValueTensor(e, t) {
          if (e.dtype !== this.keyDType)
            throw new Error(
              `Expect key dtype ${this.keyDType}, but got ${e.dtype}`
            );
          if (t.dtype !== this.valueDType)
            throw new Error(
              `Expect value dtype ${this.valueDType}, but got ${t.dtype}`
            );
        }
      }
      function Ie(e, t, a, n, s = O.lub) {
        const r = ((e, t, a) => {
          switch (e.category) {
            case "arithmetic":
              return s(() =>
                ((e, t, a, n = he) => {
                  switch (e.op) {
                    case "BiasAdd":
                    case "AddV2":
                    case "Add":
                      return [n.add(E("a", e, t, a), E("b", e, t, a))];
                    case "AddN":
                      return [n.addN(E("tensors", e, t, a))];
                    case "FloorMod":
                    case "Mod":
                      return [n.mod(E("a", e, t, a), E("b", e, t, a))];
                    case "Mul":
                      return [n.mul(E("a", e, t, a), E("b", e, t, a))];
                    case "RealDiv":
                    case "Div":
                      return [n.div(E("a", e, t, a), E("b", e, t, a))];
                    case "DivNoNan":
                      return [n.divNoNan(E("a", e, t, a), E("b", e, t, a))];
                    case "FloorDiv":
                      return [n.floorDiv(E("a", e, t, a), E("b", e, t, a))];
                    case "Sub":
                      return [n.sub(E("a", e, t, a), E("b", e, t, a))];
                    case "Minimum":
                      return [n.minimum(E("a", e, t, a), E("b", e, t, a))];
                    case "Maximum":
                      return [n.maximum(E("a", e, t, a), E("b", e, t, a))];
                    case "Pow":
                      return [n.pow(E("a", e, t, a), E("b", e, t, a))];
                    case "SquaredDifference":
                      return [
                        n.squaredDifference(E("a", e, t, a), E("b", e, t, a)),
                      ];
                    default:
                      throw TypeError(`Node type ${e.op} is not implemented`);
                  }
                })(e, t, a)
              );
            case "basic_math":
              return s(() =>
                ((e, t, a, n = he) => {
                  switch (e.op) {
                    case "Abs":
                    case "ComplexAbs":
                      return [n.abs(E("x", e, t, a))];
                    case "Acos":
                      return [n.acos(E("x", e, t, a))];
                    case "Acosh":
                      return [n.acosh(E("x", e, t, a))];
                    case "Asin":
                      return [n.asin(E("x", e, t, a))];
                    case "Asinh":
                      return [n.asinh(E("x", e, t, a))];
                    case "Atan":
                      return [n.atan(E("x", e, t, a))];
                    case "Atan2":
                      return [n.atan2(E("x", e, t, a), E("y", e, t, a))];
                    case "Atanh":
                      return [n.atanh(E("x", e, t, a))];
                    case "Ceil":
                      return [n.ceil(E("x", e, t, a))];
                    case "Complex":
                      return [
                        n.complex(E("real", e, t, a), E("imag", e, t, a)),
                      ];
                    case "Cos":
                      return [n.cos(E("x", e, t, a))];
                    case "Cosh":
                      return [n.cosh(E("x", e, t, a))];
                    case "Elu":
                      return [n.elu(E("x", e, t, a))];
                    case "Erf":
                      return [n.erf(E("x", e, t, a))];
                    case "Exp":
                      return [n.exp(E("x", e, t, a))];
                    case "Expm1":
                      return [n.expm1(E("x", e, t, a))];
                    case "Floor":
                      return [n.floor(E("x", e, t, a))];
                    case "Log":
                      return [n.log(E("x", e, t, a))];
                    case "Log1p":
                      return [n.log1p(E("x", e, t, a))];
                    case "Imag":
                      return [n.imag(E("x", e, t, a))];
                    case "Neg":
                      return [n.neg(E("x", e, t, a))];
                    case "Reciprocal":
                      return [n.reciprocal(E("x", e, t, a))];
                    case "Real":
                      return [n.real(E("x", e, t, a))];
                    case "Relu":
                      return [n.relu(E("x", e, t, a))];
                    case "Round":
                      return [n.round(E("x", e, t, a))];
                    case "Selu":
                      return [n.selu(E("x", e, t, a))];
                    case "Sigmoid":
                      return [n.sigmoid(E("x", e, t, a))];
                    case "Sin":
                      return [n.sin(E("x", e, t, a))];
                    case "Sign":
                      return [n.sign(E("x", e, t, a))];
                    case "Sinh":
                      return [n.sinh(E("x", e, t, a))];
                    case "Softplus":
                      return [n.softplus(E("x", e, t, a))];
                    case "Sqrt":
                      return [n.sqrt(E("x", e, t, a))];
                    case "Square":
                      return [n.square(E("x", e, t, a))];
                    case "Tanh":
                      return [n.tanh(E("x", e, t, a))];
                    case "Tan":
                      return [n.tan(E("x", e, t, a))];
                    case "ClipByValue":
                      return [
                        n.clipByValue(
                          E("x", e, t, a),
                          E("clipValueMin", e, t, a),
                          E("clipValueMax", e, t, a)
                        ),
                      ];
                    case "Relu6":
                      return [n.relu6(E("x", e, t, a))];
                    case "Rsqrt":
                      return [n.rsqrt(v(e.inputNames[0], t, a))];
                    case "Prod":
                      return [n.prod(E("x", e, t, a), E("axes", e, t, a))];
                    case "LeakyRelu":
                      return [
                        n.leakyRelu(E("x", e, t, a), E("alpha", e, t, a)),
                      ];
                    case "Prelu":
                      return [n.prelu(E("x", e, t, a), E("alpha", e, t, a))];
                    case "IsNan":
                      return [n.isNaN(v(e.inputNames[0], t, a))];
                    default:
                      throw TypeError(`Node type ${e.op} is not implemented`);
                  }
                })(e, t, a)
              );
            case "control":
              return (async (e, t, a) => {
                switch (e.op) {
                  case "If":
                  case "StatelessIf": {
                    const n = E("thenBranch", e, t, a),
                      s = E("elseBranch", e, t, a),
                      r = E("cond", e, t, a),
                      o = E("args", e, t, a);
                    return (await r.data())[0]
                      ? a.functionMap[n].executeFunctionAsync(
                          o,
                          a.tensorArrayMap,
                          a.tensorListMap
                        )
                      : a.functionMap[s].executeFunctionAsync(
                          o,
                          a.tensorArrayMap,
                          a.tensorListMap
                        );
                  }
                  case "While":
                  case "StatelessWhile": {
                    const n = E("body", e, t, a),
                      s = E("cond", e, t, a),
                      r = E("args", e, t, a),
                      o = await a.functionMap[s].executeFunctionAsync(
                        r,
                        a.tensorArrayMap,
                        a.tensorListMap
                      ),
                      p = r.map((e) => e.id);
                    let i = await o[0].data();
                    o.forEach((e) => {
                      e.kept || -1 !== p.indexOf(e.id) || e.dispose();
                    });
                    let m = r;
                    for (; i[0]; ) {
                      const e = m;
                      m = await a.functionMap[n].executeFunctionAsync(
                        m,
                        a.tensorArrayMap,
                        a.tensorListMap
                      );
                      const t = m.map((e) => e.id);
                      e.forEach((e) => {
                        e.kept ||
                          -1 !== p.indexOf(e.id) ||
                          -1 !== t.indexOf(e.id) ||
                          e.dispose();
                      });
                      const r = await a.functionMap[s].executeFunctionAsync(
                        m,
                        a.tensorArrayMap,
                        a.tensorListMap
                      );
                      (i = await r[0].data()),
                        r.forEach((e) => {
                          e.kept ||
                            -1 !== p.indexOf(e.id) ||
                            -1 !== t.indexOf(e.id) ||
                            e.dispose();
                        });
                    }
                    return m;
                  }
                  case "LoopCond":
                    return [V(E("pred", e, t, a))];
                  case "Switch": {
                    const n = E("pred", e, t, a);
                    let s = E("data", e, t, a);
                    return (
                      s.kept || (s = V(s)),
                      (await n.data())[0] ? [void 0, s] : [s, void 0]
                    );
                  }
                  case "Merge": {
                    const n = e.inputNames.find((e) => void 0 !== v(e, t, a));
                    return n ? [V(v(n, t, a))] : void 0;
                  }
                  case "Enter": {
                    const n = E("frameName", e, t, a),
                      s = E("tensor", e, t, a);
                    return a.enterFrame(n), [V(s)];
                  }
                  case "Exit": {
                    const n = E("tensor", e, t, a);
                    return a.exitFrame(), [V(n)];
                  }
                  case "NextIteration": {
                    const n = E("tensor", e, t, a);
                    return a.nextIteration(), [V(n)];
                  }
                  case "TensorArrayV3": {
                    const n = E("size", e, t, a),
                      s = E("dtype", e, t, a),
                      r = E("elementShape", e, t, a),
                      o = E("dynamicSize", e, t, a),
                      p = E("clearAfterRead", e, t, a),
                      i = E("identicalElementShapes", e, t, a),
                      m = E("name", e, t, a),
                      u = new be(m, s, n, r, i, o, p);
                    return a.addTensorArray(u), [u.idTensor, (0, O.iD$)(1)];
                  }
                  case "TensorArrayWriteV3": {
                    const n = E("tensorArrayId", e, t, a),
                      s = E("index", e, t, a),
                      r = E("tensor", e, t, a),
                      o = a.getTensorArray(n.id);
                    return o.write(s, r), [o.idTensor];
                  }
                  case "TensorArrayReadV3": {
                    const n = E("tensorArrayId", e, t, a),
                      s = E("index", e, t, a);
                    return [a.getTensorArray(n.id).read(s)];
                  }
                  case "TensorArrayGatherV3": {
                    const n = E("tensorArrayId", e, t, a),
                      s = E("indices", e, t, a),
                      r = E("dtype", e, t, a);
                    return [a.getTensorArray(n.id).gather(s, r)];
                  }
                  case "TensorArrayScatterV3": {
                    const n = E("tensorArrayId", e, t, a),
                      s = E("indices", e, t, a),
                      r = E("tensor", e, t, a),
                      o = a.getTensorArray(n.id);
                    return o.scatter(s, r), [o.idTensor];
                  }
                  case "TensorArrayConcatV3": {
                    const n = E("tensorArrayId", e, t, a),
                      s = a.getTensorArray(n.id),
                      r = E("dtype", e, t, a);
                    return [s.concat(r)];
                  }
                  case "TensorArraySplitV3": {
                    const n = E("tensorArrayId", e, t, a),
                      s = E("tensor", e, t, a),
                      r = E("lengths", e, t, a),
                      o = a.getTensorArray(n.id);
                    return o.split(r, s), [o.idTensor];
                  }
                  case "TensorArraySizeV3": {
                    const n = E("tensorArrayId", e, t, a),
                      s = a.getTensorArray(n.id);
                    return [(0, O.iD$)(s.size(), "int32")];
                  }
                  case "TensorArrayCloseV3": {
                    const n = E("tensorArrayId", e, t, a),
                      s = a.getTensorArray(n.id);
                    return s.clearAndClose(), [s.idTensor];
                  }
                  case "TensorListSetItem": {
                    const n = E("tensorListId", e, t, a),
                      s = E("index", e, t, a),
                      r = E("tensor", e, t, a),
                      o = a.getTensorList(n.id);
                    return o.setItem(s, r), [o.idTensor];
                  }
                  case "TensorListGetItem": {
                    const n = E("tensorListId", e, t, a),
                      s = E("index", e, t, a),
                      r = E("elementShape", e, t, a),
                      o = E("elementDType", e, t, a);
                    return [a.getTensorList(n.id).getItem(s, r, o)];
                  }
                  case "TensorListScatterV2":
                  case "TensorListScatter": {
                    const n = E("indices", e, t, a),
                      s = (function (e, t, a, n) {
                        if (t.length !== e.shape[0])
                          throw new Error(
                            `Expected len(indices) == tensor.shape[0], but saw: ${t.length} vs. ${e.shape[0]}`
                          );
                        const s = Math.max(...t);
                        if (null != n && -1 !== n && s >= n)
                          throw new Error(
                            `Max index must be < array size (${s}  vs. ${n})`
                          );
                        const r = new xe([], a, e.dtype, n),
                          o = (0, O.HHK)(e, 0);
                        return (
                          t.forEach((e, t) => {
                            r.setItem(e, o[t]);
                          }),
                          r
                        );
                      })(
                        E("tensor", e, t, a),
                        n,
                        E("elementShape", e, t, a),
                        E("numElements", e, t, a)
                      );
                    return a.addTensorList(s), [s.idTensor];
                  }
                  case "TensorListReserve":
                  case "EmptyTensorList": {
                    const n = E("elementShape", e, t, a),
                      s = E("elementDType", e, t, a);
                    let r;
                    r =
                      "TensorListReserve" === e.op
                        ? "numElements"
                        : "maxNumElements";
                    const o = E(r, e, t, a),
                      p = (function (e, t, a, n) {
                        return new xe([], e, t, n);
                      })(n, s, 0, "TensorListReserve" === e.op ? -1 : o);
                    return a.addTensorList(p), [p.idTensor];
                  }
                  case "TensorListGather": {
                    const n = E("tensorListId", e, t, a),
                      s = E("indices", e, t, a),
                      r = E("elementShape", e, t, a),
                      o = E("elementDType", e, t, a);
                    return [a.getTensorList(n.id).gather(s, o, r)];
                  }
                  case "TensorListStack": {
                    const n = E("tensorListId", e, t, a),
                      s = E("elementShape", e, t, a),
                      r = E("elementDType", e, t, a),
                      o = E("numElements", e, t, a);
                    return [a.getTensorList(n.id).stack(s, r, o)];
                  }
                  case "TensorListFromTensor": {
                    const n = (function (e, t, a) {
                      const n = e.dtype;
                      if (e.shape.length < 1)
                        throw new Error(
                          `Tensor must be at least a vector, but saw shape: ${e.shape}`
                        );
                      if (e.dtype !== a)
                        throw new Error(
                          `Invalid data types; op elements ${e.dtype}, but list elements ${a}`
                        );
                      fe(e.shape.slice(1), t, "TensorList shape mismatch: ");
                      const s = (0, O.HHK)(e);
                      return new xe(s, t, n);
                    })(
                      E("tensor", e, t, a),
                      E("elementShape", e, t, a),
                      E("elementDType", e, t, a)
                    );
                    return a.addTensorList(n), [n.idTensor];
                  }
                  case "TensorListConcat":
                  case "TensorListConcatV2": {
                    const n = E("tensorListId", e, t, a),
                      s = a.getTensorList(n.id),
                      r = E("dtype", e, t, a),
                      o = E("elementShape", e, t, a);
                    return [s.concat(r, o)];
                  }
                  case "TensorListPushBack": {
                    const n = E("tensorListId", e, t, a),
                      s = E("tensor", e, t, a),
                      r = a.getTensorList(n.id);
                    return r.pushBack(s), [r.idTensor];
                  }
                  case "TensorListPopBack": {
                    const n = E("tensorListId", e, t, a),
                      s = E("elementShape", e, t, a),
                      r = E("elementDType", e, t, a);
                    return [a.getTensorList(n.id).popBack(s, r)];
                  }
                  case "TensorListSplit": {
                    const n = E("tensor", e, t, a),
                      s = E("elementShape", e, t, a),
                      r = (function (e, t, a) {
                        let n = 0;
                        const s = t.map((e) => ((n += e), n));
                        if (n !== e.shape[0])
                          throw new Error(
                            `Expected sum of lengths to be equal to\n          tensor.shape[0], but sum of lengths is\n        ${n}, and tensor's shape is: ${e.shape}`
                          );
                        const r = Te(e.shape.slice(1), a),
                          o = 0 === n ? 0 : e.size / n,
                          p = (0, O.lub)(() => {
                            const a = [];
                            e = (0, O.XLQ)(e, [1, n, o]);
                            for (let n = 0; n < t.length; ++n) {
                              const p = [0, 0 === n ? 0 : s[n - 1], 0],
                                i = [1, t[n], o];
                              a[n] = (0, O.XLQ)((0, O.tPi)(e, p, i), r);
                            }
                            return e.dispose(), a;
                          }),
                          i = new xe([], a, e.dtype, t.length);
                        for (let e = 0; e < p.length; e++) i.setItem(e, p[e]);
                        return i;
                      })(n, E("lengths", e, t, a), s);
                    return a.addTensorList(r), [r.idTensor];
                  }
                  case "TensorListLength": {
                    const n = E("tensorListId", e, t, a),
                      s = a.getTensorList(n.id);
                    return [(0, O.iD$)(s.size(), "int32")];
                  }
                  case "TensorListResize": {
                    const n = E("tensorListId", e, t, a),
                      s = E("size", e, t, a),
                      r = a.getTensorList(n.id).resize(s);
                    return a.addTensorList(r), [r.idTensor];
                  }
                  default:
                    throw TypeError(`Node type ${e.op} is not implemented`);
                }
              })(e, t, a);
            case "convolution":
              return s(() =>
                ((e, t, a, n = he) => {
                  switch (e.op) {
                    case "Conv1D": {
                      const s = E("stride", e, t, a),
                        r = E("pad", e, t, a),
                        o = E("dataFormat", e, t, a).toUpperCase(),
                        p = E("dilation", e, t, a);
                      return [
                        n.conv1d(
                          E("x", e, t, a),
                          E("filter", e, t, a),
                          s,
                          r,
                          o,
                          p
                        ),
                      ];
                    }
                    case "Conv2D": {
                      const s = E("strides", e, t, a),
                        r = M(e, t, a),
                        o = E("dataFormat", e, t, a).toUpperCase(),
                        p = E("dilations", e, t, a);
                      return [
                        n.conv2d(
                          E("x", e, t, a),
                          E("filter", e, t, a),
                          [s[1], s[2]],
                          r,
                          o,
                          [p[1], p[2]]
                        ),
                      ];
                    }
                    case "_FusedConv2D": {
                      const {
                        stride: s,
                        pad: r,
                        dataFormat: o,
                        dilations: p,
                        biasArg: i,
                        preluArg: m,
                        activationFunc: u,
                        leakyreluAlpha: d,
                      } = Se(e, t, a);
                      return [
                        n.fused.conv2d({
                          x: E("x", e, t, a),
                          filter: E("filter", e, t, a),
                          strides: [s[1], s[2]],
                          pad: r,
                          dataFormat: o,
                          dilations: [p[1], p[2]],
                          bias: i,
                          activation: u,
                          preluActivationWeights: m,
                          leakyreluAlpha: d,
                        }),
                      ];
                    }
                    case "FusedDepthwiseConv2dNative": {
                      const {
                        stride: s,
                        pad: r,
                        dataFormat: o,
                        dilations: p,
                        biasArg: i,
                        preluArg: m,
                        activationFunc: u,
                        leakyreluAlpha: d,
                      } = Se(e, t, a);
                      return [
                        n.fused.depthwiseConv2d({
                          x: E("x", e, t, a),
                          filter: E("filter", e, t, a),
                          strides: [s[1], s[2]],
                          pad: r,
                          dataFormat: o,
                          dilations: [p[1], p[2]],
                          bias: i,
                          activation: u,
                          preluActivationWeights: m,
                          leakyreluAlpha: d,
                        }),
                      ];
                    }
                    case "Conv2DBackpropInput":
                    case "Conv2dTranspose": {
                      const s = E("outputShape", e, t, a),
                        r = E("strides", e, t, a),
                        o = M(e, t, a);
                      return [
                        n.conv2dTranspose(
                          E("x", e, t, a),
                          E("filter", e, t, a),
                          s,
                          [r[1], r[2]],
                          o
                        ),
                      ];
                    }
                    case "DepthwiseConv2dNative":
                    case "DepthwiseConv2d": {
                      const s = E("strides", e, t, a),
                        r = M(e, t, a),
                        o = E("dilations", e, t, a),
                        p = E("dataFormat", e, t, a).toUpperCase();
                      return [
                        n.depthwiseConv2d(
                          E("input", e, t, a),
                          E("filter", e, t, a),
                          [s[1], s[2]],
                          r,
                          p,
                          [o[1], o[2]]
                        ),
                      ];
                    }
                    case "Conv3D": {
                      const s = E("strides", e, t, a),
                        r = E("pad", e, t, a),
                        o = E("dataFormat", e, t, a).toUpperCase(),
                        p = E("dilations", e, t, a);
                      return [
                        n.conv3d(
                          E("x", e, t, a),
                          E("filter", e, t, a),
                          [s[1], s[2], s[3]],
                          r,
                          o,
                          [p[1], p[2], p[3]]
                        ),
                      ];
                    }
                    case "AvgPool": {
                      const s = E("strides", e, t, a),
                        r = E("pad", e, t, a),
                        o = E("kernelSize", e, t, a);
                      return [
                        n.avgPool(
                          E("x", e, t, a),
                          [o[1], o[2]],
                          [s[1], s[2]],
                          r
                        ),
                      ];
                    }
                    case "MaxPool": {
                      const s = E("strides", e, t, a),
                        r = E("pad", e, t, a),
                        o = E("kernelSize", e, t, a);
                      return [
                        n.maxPool(
                          E("x", e, t, a),
                          [o[1], o[2]],
                          [s[1], s[2]],
                          r
                        ),
                      ];
                    }
                    case "MaxPoolWithArgmax": {
                      const s = E("strides", e, t, a),
                        r = E("pad", e, t, a),
                        o = E("kernelSize", e, t, a),
                        p = E("includeBatchInIndex", e, t, a),
                        { result: i, indexes: m } = n.maxPoolWithArgmax(
                          E("x", e, t, a),
                          [o[1], o[2]],
                          [s[1], s[2]],
                          r,
                          p
                        );
                      return [i, m];
                    }
                    case "AvgPool3D": {
                      const s = E("strides", e, t, a),
                        r = E("pad", e, t, a),
                        o = E("kernelSize", e, t, a);
                      return [
                        n.avgPool3d(
                          E("x", e, t, a),
                          [o[1], o[2], o[3]],
                          [s[1], s[2], s[3]],
                          r
                        ),
                      ];
                    }
                    case "MaxPool3D": {
                      const s = E("strides", e, t, a),
                        r = E("pad", e, t, a),
                        o = E("kernelSize", e, t, a);
                      return [
                        n.maxPool3d(
                          E("x", e, t, a),
                          [o[1], o[2], o[3]],
                          [s[1], s[2], s[3]],
                          r
                        ),
                      ];
                    }
                    case "Dilation2D": {
                      const s = E("strides", e, t, a),
                        r = E("pad", e, t, a),
                        o = E("dilations", e, t, a),
                        p = s[1],
                        i = s[2],
                        m = o[1],
                        u = o[2];
                      return [
                        n.dilation2d(
                          E("x", e, t, a),
                          E("filter", e, t, a),
                          [p, i],
                          r,
                          [m, u],
                          "NHWC"
                        ),
                      ];
                    }
                    default:
                      throw TypeError(`Node type ${e.op} is not implemented`);
                  }
                })(e, t, a)
              );
            case "creation":
              return s(() =>
                ((e, t, a, n = he) => {
                  switch (e.op) {
                    case "Fill": {
                      const s = E("shape", e, t, a),
                        r = E("dtype", e, t, a),
                        o = E("value", e, t, a);
                      return [n.fill(s, o, r)];
                    }
                    case "LinSpace": {
                      const s = E("start", e, t, a),
                        r = E("stop", e, t, a),
                        o = E("num", e, t, a);
                      return [n.linspace(s, r, o)];
                    }
                    case "Multinomial": {
                      const s = E("logits", e, t, a),
                        r = E("numSamples", e, t, a),
                        o = E("seed", e, t, a);
                      return [n.multinomial(s, r, o)];
                    }
                    case "OneHot": {
                      const s = E("indices", e, t, a),
                        r = E("depth", e, t, a),
                        o = E("onValue", e, t, a),
                        p = E("offValue", e, t, a),
                        i = E("dtype", e, t, a);
                      return [n.oneHot(s, r, o, p, i)];
                    }
                    case "Ones":
                      return [n.ones(E("shape", e, t, a), E("dtype", e, t, a))];
                    case "OnesLike":
                      return [n.onesLike(E("x", e, t, a))];
                    case "RandomStandardNormal":
                      return [
                        n.randomStandardNormal(
                          E("shape", e, t, a),
                          E("dtype", e, t, a),
                          E("seed", e, t, a)
                        ),
                      ];
                    case "RandomUniform":
                      return [
                        n.randomUniform(
                          E("shape", e, t, a),
                          E("minval", e, t, a),
                          E("maxval", e, t, a),
                          E("dtype", e, t, a)
                        ),
                      ];
                    case "Range": {
                      const s = E("start", e, t, a),
                        r = E("stop", e, t, a),
                        o = E("step", e, t, a);
                      return [n.range(s, r, o, E("dtype", e, t, a))];
                    }
                    case "TruncatedNormal": {
                      const s = E("shape", e, t, a),
                        r = E("mean", e, t, a),
                        o = E("stdDev", e, t, a),
                        p = E("seed", e, t, a);
                      return [
                        n.truncatedNormal(s, r, o, E("dtype", e, t, a), p),
                      ];
                    }
                    case "Zeros":
                      return [
                        n.zeros(E("shape", e, t, a), E("dtype", e, t, a)),
                      ];
                    case "ZerosLike":
                      return [n.zerosLike(E("x", e, t, a))];
                    default:
                      throw TypeError(`Node type ${e.op} is not implemented`);
                  }
                })(e, t, a)
              );
            case "dynamic":
              return (async (e, t, a, n, s = he) => {
                switch (e.op) {
                  case "NonMaxSuppressionV5": {
                    const {
                        boxes: n,
                        scores: r,
                        maxOutputSize: o,
                        iouThreshold: p,
                        scoreThreshold: i,
                        softNmsSigma: m,
                      } = _e(e, t, a),
                      u = await s.image.nonMaxSuppressionWithScoreAsync(
                        n,
                        r,
                        o,
                        p,
                        i,
                        m
                      );
                    return [u.selectedIndices, u.selectedScores];
                  }
                  case "NonMaxSuppressionV4": {
                    const {
                        boxes: n,
                        scores: r,
                        maxOutputSize: o,
                        iouThreshold: p,
                        scoreThreshold: i,
                      } = _e(e, t, a),
                      m = E("padToMaxOutputSize", e, t, a),
                      u = await s.image.nonMaxSuppressionPaddedAsync(
                        n,
                        r,
                        o,
                        p,
                        i,
                        m
                      );
                    return [u.selectedIndices, u.validOutputs];
                  }
                  case "NonMaxSuppressionV3":
                  case "NonMaxSuppressionV2": {
                    const {
                      boxes: n,
                      scores: r,
                      maxOutputSize: o,
                      iouThreshold: p,
                      scoreThreshold: i,
                    } = _e(e, t, a);
                    return [
                      await s.image.nonMaxSuppressionAsync(n, r, o, p, i),
                    ];
                  }
                  case "Where": {
                    const n = s.cast(E("condition", e, t, a), "bool"),
                      r = [await s.whereAsync(n)];
                    return n.dispose(), r;
                  }
                  case "ListDiff":
                    return s.setdiff1dAsync(E("x", e, t, a), E("y", e, t, a));
                  default:
                    throw TypeError(`Node type ${e.op} is not implemented`);
                }
              })(e, t, a);
            case "evaluation":
              return s(() =>
                ((e, t, a, n = he) => {
                  switch (e.op) {
                    case "LowerBound": {
                      const s = E("sortedSequence", e, t, a),
                        r = E("values", e, t, a);
                      return [n.lowerBound(s, r)];
                    }
                    case "TopKV2": {
                      const s = E("x", e, t, a),
                        r = E("k", e, t, a),
                        o = E("sorted", e, t, a),
                        p = n.topk(s, r, o);
                      return [p.values, p.indices];
                    }
                    case "UpperBound": {
                      const s = E("sortedSequence", e, t, a),
                        r = E("values", e, t, a);
                      return [n.upperBound(s, r)];
                    }
                    case "Unique": {
                      const s = E("x", e, t, a),
                        r = n.unique(s);
                      return [r.values, r.indices];
                    }
                    case "UniqueV2": {
                      const s = E("x", e, t, a),
                        r = E("axis", e, t, a),
                        o = n.unique(s, r);
                      return [o.values, o.indices];
                    }
                    default:
                      throw TypeError(`Node type ${e.op} is not implemented`);
                  }
                })(e, t, a)
              );
            case "image":
              return s(() =>
                ((e, t, a, n = he) => {
                  switch (e.op) {
                    case "ResizeBilinear": {
                      const s = E("images", e, t, a),
                        r = E("size", e, t, a),
                        o = E("alignCorners", e, t, a),
                        p = E("halfPixelCenters", e, t, a);
                      return [n.image.resizeBilinear(s, [r[0], r[1]], o, p)];
                    }
                    case "ResizeNearestNeighbor": {
                      const s = E("images", e, t, a),
                        r = E("size", e, t, a),
                        o = E("alignCorners", e, t, a),
                        p = E("halfPixelCenters", e, t, a);
                      return [
                        n.image.resizeNearestNeighbor(s, [r[0], r[1]], o, p),
                      ];
                    }
                    case "CropAndResize": {
                      const s = E("image", e, t, a),
                        r = E("boxes", e, t, a),
                        o = E("boxInd", e, t, a),
                        p = E("cropSize", e, t, a),
                        i = E("method", e, t, a),
                        m = E("extrapolationValue", e, t, a);
                      return [n.image.cropAndResize(s, r, o, p, i, m)];
                    }
                    case "ImageProjectiveTransformV3": {
                      const s = E("images", e, t, a),
                        r = E("transforms", e, t, a),
                        o = E("outputShape", e, t, a),
                        p = E("fillValue", e, t, a),
                        i = E("interpolation", e, t, a),
                        m = E("fillMode", e, t, a);
                      return [
                        n.image.transform(
                          s,
                          r,
                          i.toLowerCase(),
                          m.toLowerCase(),
                          p,
                          o
                        ),
                      ];
                    }
                    default:
                      throw TypeError(`Node type ${e.op} is not implemented`);
                  }
                })(e, t, a)
              );
            case "graph":
              return s(() =>
                ((e, t, a, n = he) => {
                  switch (e.op) {
                    case "Const":
                      return t[e.name];
                    case "PlaceholderWithDefault":
                      const s = E("default", e, t, a);
                      return [v(e.name, t, a) || s];
                    case "Placeholder":
                      return [v(e.name, t, a)];
                    case "Identity":
                    case "StopGradient":
                    case "FakeQuantWithMinMaxVars":
                    case "Snapshot":
                      return [V(E("x", e, t, a))];
                    case "IdentityN":
                      return E("x", e, t, a).map((e) => V(e));
                    case "Shape":
                      return [n.tensor1d(E("x", e, t, a).shape, "int32")];
                    case "ShapeN":
                      return E("x", e, t, a).map((e) => n.tensor1d(e.shape));
                    case "Size":
                      return [n.scalar(E("x", e, t, a).size, "int32")];
                    case "Rank":
                      return [n.scalar(E("x", e, t, a).rank, "int32")];
                    case "NoOp":
                      return [n.scalar(1)];
                    case "Print":
                      const r = E("x", e, t, a),
                        o = E("data", e, t, a),
                        p = E("message", e, t, a),
                        i = E("summarize", e, t, a);
                      console.warn(
                        "The graph has a tf.print() operation,usually used for debugging, which slows down performance."
                      ),
                        console.log(p);
                      for (let e = 0; e < o.length; e++)
                        console.log(
                          Array.prototype.slice
                            .call(o[e].dataSync())
                            .slice(0, i)
                        );
                      return [r];
                    default:
                      throw TypeError(`Node type ${e.op} is not implemented`);
                  }
                })(e, t, a)
              );
            case "logical":
              return s(() =>
                ((e, t, a, n = he) => {
                  switch (e.op) {
                    case "Equal":
                      return [n.equal(E("a", e, t, a), E("b", e, t, a))];
                    case "NotEqual":
                      return [n.notEqual(E("a", e, t, a), E("b", e, t, a))];
                    case "Greater":
                      return [n.greater(E("a", e, t, a), E("b", e, t, a))];
                    case "GreaterEqual":
                      return [n.greaterEqual(E("a", e, t, a), E("b", e, t, a))];
                    case "Less":
                      return [n.less(E("a", e, t, a), E("b", e, t, a))];
                    case "LessEqual":
                      return [n.lessEqual(E("a", e, t, a), E("b", e, t, a))];
                    case "LogicalAnd":
                      return [n.logicalAnd(E("a", e, t, a), E("b", e, t, a))];
                    case "LogicalNot":
                      return [n.logicalNot(E("a", e, t, a))];
                    case "LogicalOr":
                      return [n.logicalOr(E("a", e, t, a), E("b", e, t, a))];
                    case "Select":
                    case "SelectV2":
                      return [
                        n.where(
                          E("condition", e, t, a),
                          E("a", e, t, a),
                          E("b", e, t, a)
                        ),
                      ];
                    default:
                      throw TypeError(`Node type ${e.op} is not implemented`);
                  }
                })(e, t, a)
              );
            case "matrices":
              return s(() =>
                ((e, t, a, n = he) => {
                  switch (e.op) {
                    case "BatchMatMul":
                    case "BatchMatMulV2":
                    case "MatMul":
                      return [
                        n.matMul(
                          E("a", e, t, a),
                          E("b", e, t, a),
                          E("transposeA", e, t, a),
                          E("transposeB", e, t, a)
                        ),
                      ];
                    case "Einsum":
                      return [
                        n.einsum(
                          E("equation", e, t, a),
                          ...E("tensors", e, t, a)
                        ),
                      ];
                    case "Transpose":
                      return [n.transpose(E("x", e, t, a), E("perm", e, t, a))];
                    case "_FusedMatMul":
                      const [s, r] = E("fusedOps", e, t, a),
                        o = "biasadd" === s,
                        p = "prelu" === r,
                        i = E("numArgs", e, t, a),
                        m = E("leakyreluAlpha", e, t, a);
                      if (o) {
                        if (p && 2 !== i)
                          throw new Error(
                            "Fused MatMul with BiasAdd and Prelu must have two extra arguments: bias and alpha."
                          );
                        if (!p && 1 !== i)
                          throw new Error(
                            "Fused MatMul with BiasAdd must have one extra argument: bias."
                          );
                      }
                      const [u, d] = E("args", e, t, a);
                      return [
                        n.fused.matMul({
                          a: E("a", e, t, a),
                          b: E("b", e, t, a),
                          transposeA: E("transposeA", e, t, a),
                          transposeB: E("transposeB", e, t, a),
                          bias: u,
                          activation: r,
                          preluActivationWeights: d,
                          leakyreluAlpha: m,
                        }),
                      ];
                    default:
                      throw TypeError(`Node type ${e.op} is not implemented`);
                  }
                })(e, t, a)
              );
            case "normalization":
              return s(() =>
                ((e, t, a, n = he) => {
                  switch (e.op) {
                    case "EuclideanNorm":
                      return [
                        n.euclideanNorm(
                          E("x", e, t, a),
                          E("axis", e, t, a),
                          E("keepDims", e, t, a)
                        ),
                      ];
                    case "FusedBatchNorm":
                    case "FusedBatchNormV2":
                    case "FusedBatchNormV3":
                      return [
                        n.batchNorm(
                          E("x", e, t, a),
                          E("mean", e, t, a),
                          E("variance", e, t, a),
                          E("offset", e, t, a),
                          E("scale", e, t, a),
                          E("epsilon", e, t, a)
                        ),
                      ];
                    case "LRN":
                      return [
                        n.localResponseNormalization(
                          E("x", e, t, a),
                          E("radius", e, t, a),
                          E("bias", e, t, a),
                          E("alpha", e, t, a),
                          E("beta", e, t, a)
                        ),
                      ];
                    case "Softmax":
                      return [n.softmax(E("x", e, t, a))];
                    case "LogSoftmax":
                      return [n.logSoftmax(E("x", e, t, a))];
                    case "SparseToDense":
                      return [
                        n.sparseToDense(
                          E("sparseIndices", e, t, a),
                          E("outputShape", e, t, a),
                          E("sparseValues", e, t, a),
                          E("defaultValue", e, t, a)
                        ),
                      ];
                    default:
                      throw TypeError(`Node type ${e.op} is not implemented`);
                  }
                })(e, t, a)
              );
            case "ragged":
              return s(() =>
                ((e, t, a, n = he) => {
                  switch (e.op) {
                    case "RaggedGather": {
                      const { outputNestedSplits: s, outputDenseValues: r } =
                        n.raggedGather(
                          E("paramsNestedSplits", e, t, a),
                          E("paramsDenseValues", e, t, a),
                          E("indices", e, t, a),
                          E("outputRaggedRank", e, t, a)
                        );
                      return s.concat(r);
                    }
                    case "RaggedRange": {
                      const { rtNestedSplits: s, rtDenseValues: r } =
                        n.raggedRange(
                          E("starts", e, t, a),
                          E("limits", e, t, a),
                          E("splits", e, t, a)
                        );
                      return [s, r];
                    }
                    case "RaggedTensorToTensor":
                      return [
                        n.raggedTensorToTensor(
                          E("shape", e, t, a),
                          E("values", e, t, a),
                          E("defaultValue", e, t, a),
                          E("rowPartitionTensors", e, t, a),
                          E("rowPartitionTypes", e, t, a)
                        ),
                      ];
                    default:
                      throw TypeError(`Node type ${e.op} is not implemented`);
                  }
                })(e, t, a)
              );
            case "reduction":
              return s(() =>
                ((e, t, a, n = he) => {
                  switch (e.op) {
                    case "Max": {
                      const s = E("axis", e, t, a),
                        r = E("keepDims", e, t, a);
                      return [n.max(E("x", e, t, a), s, r)];
                    }
                    case "Mean": {
                      const s = E("axis", e, t, a),
                        r = E("keepDims", e, t, a);
                      return [n.mean(E("x", e, t, a), s, r)];
                    }
                    case "Min": {
                      const s = E("axis", e, t, a),
                        r = E("keepDims", e, t, a);
                      return [n.min(E("x", e, t, a), s, r)];
                    }
                    case "Sum": {
                      const s = E("axis", e, t, a),
                        r = E("keepDims", e, t, a);
                      return [n.sum(E("x", e, t, a), s, r)];
                    }
                    case "All": {
                      const s = E("axis", e, t, a),
                        r = E("keepDims", e, t, a);
                      return [n.all(E("x", e, t, a), s, r)];
                    }
                    case "Any": {
                      const s = E("axis", e, t, a),
                        r = E("keepDims", e, t, a);
                      return [n.any(E("x", e, t, a), s, r)];
                    }
                    case "ArgMax": {
                      const s = E("axis", e, t, a);
                      return [n.argMax(E("x", e, t, a), s)];
                    }
                    case "ArgMin": {
                      const s = E("axis", e, t, a);
                      return [n.argMin(E("x", e, t, a), s)];
                    }
                    case "Prod": {
                      const s = E("axis", e, t, a),
                        r = E("keepDims", e, t, a);
                      return [n.prod(E("x", e, t, a), s, r)];
                    }
                    case "Cumprod": {
                      const s = E("axis", e, t, a),
                        r = E("exclusive", e, t, a),
                        o = E("reverse", e, t, a);
                      return [n.cumprod(E("x", e, t, a), s, r, o)];
                    }
                    case "Cumsum": {
                      const s = E("axis", e, t, a),
                        r = E("exclusive", e, t, a),
                        o = E("reverse", e, t, a);
                      return [n.cumsum(E("x", e, t, a), s, r, o)];
                    }
                    case "Bincount":
                      const s = E("x", e, t, a),
                        r = E("weights", e, t, a),
                        o = E("size", e, t, a);
                      return [n.bincount(s, r, o)];
                    case "DenseBincount": {
                      const s = E("x", e, t, a),
                        r = E("weights", e, t, a),
                        o = E("size", e, t, a),
                        p = E("binaryOutput", e, t, a);
                      return [n.denseBincount(s, r, o, p)];
                    }
                    default:
                      throw TypeError(`Node type ${e.op} is not implemented`);
                  }
                })(e, t, a)
              );
            case "slice_join":
              return s(() =>
                ((e, t, a, n = he) => {
                  switch (e.op) {
                    case "ConcatV2":
                    case "Concat": {
                      const s = E("n", e, t, a),
                        r = E("axis", e, t, a);
                      let o = E("tensors", e, t, a);
                      return (o = o.slice(0, s)), [n.concat(o, r)];
                    }
                    case "Gather": {
                      const s = E("x", e, t, a),
                        r = E("indices", e, t, a);
                      return [n.gather(s, n.cast(r, "int32"), 0)];
                    }
                    case "GatherV2": {
                      const s = E("axis", e, t, a),
                        r = E("batchDims", e, t, a),
                        o = E("x", e, t, a),
                        p = E("indices", e, t, a);
                      return [n.gather(o, n.cast(p, "int32"), s, r)];
                    }
                    case "Reverse": {
                      const s = E("dims", e, t, a),
                        r = [];
                      for (let e = 0; e < s.length; e++) s[e] && r.push(e);
                      const o = E("x", e, t, a);
                      return [n.reverse(o, r)];
                    }
                    case "ReverseV2": {
                      const s = E("axis", e, t, a),
                        r = E("x", e, t, a);
                      return [n.reverse(r, s)];
                    }
                    case "Slice": {
                      const s = E("begin", e, t, a),
                        r = E("size", e, t, a);
                      return [n.slice(E("x", e, t, a), s, r)];
                    }
                    case "StridedSlice": {
                      const s = E("begin", e, t, a),
                        r = E("end", e, t, a),
                        o = E("strides", e, t, a),
                        p = E("beginMask", e, t, a),
                        i = E("endMask", e, t, a),
                        m = E("ellipsisMask", e, t, a),
                        u = E("newAxisMask", e, t, a),
                        d = E("shrinkAxisMask", e, t, a),
                        c = E("x", e, t, a);
                      return [n.stridedSlice(c, s, r, o, p, i, m, u, d)];
                    }
                    case "Pack":
                      return (0, O.lub)(() => {
                        const s = E("axis", e, t, a),
                          r = E("tensors", e, t, a),
                          o = r[0].shape,
                          p = n.squeeze(r[0]).shape,
                          i = r.map((e) => {
                            const t = O.D5U.arraysEqual(e.shape, o);
                            if (!t && !O.D5U.arraysEqual(n.squeeze(e).shape, p))
                              throw new Error(
                                "the input tensors shape does not match"
                              );
                            return t ? e : n.reshape(e, o);
                          });
                        return [n.stack(i, s)];
                      });
                    case "Unpack": {
                      const s = E("axis", e, t, a),
                        r = E("tensor", e, t, a);
                      return n.unstack(r, s);
                    }
                    case "Tile": {
                      const s = E("reps", e, t, a);
                      return [n.tile(E("x", e, t, a), s)];
                    }
                    case "Split":
                    case "SplitV": {
                      const s = E("axis", e, t, a),
                        r = E("numOrSizeSplits", e, t, a),
                        o = E("x", e, t, a);
                      return n.split(o, r, s);
                    }
                    case "ScatterNd": {
                      const s = E("indices", e, t, a),
                        r = E("values", e, t, a),
                        o = E("shape", e, t, a);
                      return [n.scatterND(s, r, o)];
                    }
                    case "GatherNd": {
                      const s = E("x", e, t, a),
                        r = E("indices", e, t, a);
                      return [n.gatherND(s, r)];
                    }
                    case "SparseToDense": {
                      const s = E("sparseIndices", e, t, a),
                        r = E("outputShape", e, t, a),
                        o = E("sparseValues", e, t, a),
                        p = E("defaultValue", e, t, a);
                      return [
                        n.sparseToDense(
                          s,
                          o,
                          r,
                          o.dtype === p.dtype ? p : n.cast(p, o.dtype)
                        ),
                      ];
                    }
                    default:
                      throw TypeError(`Node type ${e.op} is not implemented`);
                  }
                })(e, t, a)
              );
            case "sparse":
              return s(() =>
                ((e, t, a, n = he) => {
                  switch (e.op) {
                    case "SparseFillEmptyRows": {
                      const {
                        outputIndices: s,
                        outputValues: r,
                        emptyRowIndicator: o,
                        reverseIndexMap: p,
                      } = n.sparse.sparseFillEmptyRows(
                        E("indices", e, t, a),
                        E("values", e, t, a),
                        E("denseShape", e, t, a),
                        E("defaultValue", e, t, a)
                      );
                      return [s, r, o, p];
                    }
                    case "SparseReshape": {
                      const { outputIndices: s, outputShape: r } =
                        n.sparse.sparseReshape(
                          E("inputIndices", e, t, a),
                          E("inputShape", e, t, a),
                          E("newShape", e, t, a)
                        );
                      return [s, r];
                    }
                    case "SparseSegmentMean":
                      return [
                        n.sparse.sparseSegmentMean(
                          E("data", e, t, a),
                          E("indices", e, t, a),
                          E("segmentIds", e, t, a)
                        ),
                      ];
                    case "SparseSegmentSum":
                      return [
                        n.sparse.sparseSegmentSum(
                          E("data", e, t, a),
                          E("indices", e, t, a),
                          E("segmentIds", e, t, a)
                        ),
                      ];
                    default:
                      throw TypeError(`Node type ${e.op} is not implemented`);
                  }
                })(e, t, a)
              );
            case "spectral":
              return s(() =>
                ((e, t, a, n = he) => {
                  switch (e.op) {
                    case "FFT":
                      return [n.fft(E("x", e, t, a))];
                    case "IFFT":
                      return [n.ifft(E("x", e, t, a))];
                    case "RFFT":
                      return [n.rfft(E("x", e, t, a))];
                    case "IRFFT":
                      return [n.irfft(E("x", e, t, a))];
                    default:
                      throw TypeError(`Node type ${e.op} is not implemented`);
                  }
                })(e, t, a)
              );
            case "string":
              return s(() =>
                ((e, t, a, n = he) => {
                  switch (e.op) {
                    case "StringNGrams": {
                      const { nGrams: s, nGramsSplits: r } =
                        n.string.stringNGrams(
                          E("data", e, t, a),
                          E("dataSplits", e, t, a),
                          E("separator", e, t, a),
                          E("nGramWidths", e, t, a),
                          E("leftPad", e, t, a),
                          E("rightPad", e, t, a),
                          E("padWidth", e, t, a),
                          E("preserveShortSequences", e, t, a)
                        );
                      return [s, r];
                    }
                    case "StringSplit": {
                      const {
                        indices: s,
                        values: r,
                        shape: o,
                      } = n.string.stringSplit(
                        E("input", e, t, a),
                        E("delimiter", e, t, a),
                        E("skipEmpty", e, t, a)
                      );
                      return [s, r, o];
                    }
                    case "StringToHashBucketFast":
                      return [
                        n.string.stringToHashBucketFast(
                          E("input", e, t, a),
                          E("numBuckets", e, t, a)
                        ),
                      ];
                    default:
                      throw TypeError(`Node type ${e.op} is not implemented`);
                  }
                })(e, t, a)
              );
            case "transformation":
              return s(() =>
                ((e, t, a, n = he) => {
                  switch (e.op) {
                    case "Cast":
                      return [n.cast(E("x", e, t, a), E("dtype", e, t, a))];
                    case "ExpandDims": {
                      const s = E("axis", e, t, a);
                      return [n.expandDims(E("x", e, t, a), s)];
                    }
                    case "Squeeze": {
                      const s = E("axis", e, t, a);
                      return [n.squeeze(E("x", e, t, a), s)];
                    }
                    case "Reshape":
                      return [n.reshape(E("x", e, t, a), E("shape", e, t, a))];
                    case "MirrorPad":
                      return [
                        n.mirrorPad(
                          E("x", e, t, a),
                          E("padding", e, t, a),
                          E("mode", e, t, a)
                        ),
                      ];
                    case "PadV2":
                    case "Pad":
                      return [
                        n.pad(
                          E("x", e, t, a),
                          E("padding", e, t, a),
                          E("constantValue", e, t, a)
                        ),
                      ];
                    case "SpaceToBatchND": {
                      const s = E("blockShape", e, t, a),
                        r = E("paddings", e, t, a);
                      return [n.spaceToBatchND(E("x", e, t, a), s, r)];
                    }
                    case "BatchToSpaceND": {
                      const s = E("blockShape", e, t, a),
                        r = E("crops", e, t, a);
                      return [n.batchToSpaceND(E("x", e, t, a), s, r)];
                    }
                    case "DepthToSpace": {
                      const s = E("blockSize", e, t, a),
                        r = E("dataFormat", e, t, a).toUpperCase();
                      return [n.depthToSpace(E("x", e, t, a), s, r)];
                    }
                    case "BroadcastTo":
                      return [
                        n.broadcastTo(E("x", e, t, a), E("shape", e, t, a)),
                      ];
                    case "BroadcastArgs":
                      return [
                        n.broadcastArgs(E("s0", e, t, a), E("s1", e, t, a)),
                      ];
                    default:
                      throw TypeError(`Node type ${e.op} is not implemented`);
                  }
                })(e, t, a)
              );
            case "hash_table":
              return (async (e, t, a, n) => {
                switch (e.op) {
                  case "HashTable":
                  case "HashTableV2": {
                    const s = n.getHashTableHandleByName(e.name);
                    if (null != s) return [s];
                    {
                      const s = E("keyDType", e, t, a),
                        r = E("valueDType", e, t, a),
                        o = new we(s, r);
                      return n.addHashTable(e.name, o), [o.handle];
                    }
                  }
                  case "InitializeTable":
                  case "InitializeTableV2":
                  case "LookupTableImport":
                  case "LookupTableImportV2": {
                    const s = E("tableHandle", e, t, a, n),
                      r = E("keys", e, t, a),
                      o = E("values", e, t, a),
                      p = n.getHashTableById(s.id);
                    return [await p.import(r, o)];
                  }
                  case "LookupTableFind":
                  case "LookupTableFindV2": {
                    const s = E("tableHandle", e, t, a, n),
                      r = E("keys", e, t, a),
                      o = E("defaultValue", e, t, a),
                      p = n.getHashTableById(s.id);
                    return [await p.find(r, o)];
                  }
                  case "LookupTableSize":
                  case "LookupTableSizeV2": {
                    const s = E("tableHandle", e, t, a, n);
                    return [n.getHashTableById(s.id).tensorSize()];
                  }
                  default:
                    throw TypeError(`Node type ${e.op} is not implemented`);
                }
              })(e, t, a, n);
            case "custom":
              const r = I(e.op);
              if (r && r.customExecutor)
                return r.customExecutor(new ye(e, t, a));
              throw TypeError(`Custom op ${e.op} is not registered.`);
            default:
              throw TypeError(
                `Unknown op '${e.op}'. File an issue at https://github.com/tensorflow/tfjs/issues so we can add it, or register a custom execution with tf.registerOp()`
              );
          }
        })(e, t, a);
        return O.D5U.isPromise(r) ? r.then((e) => [].concat(e)) : [].concat(r);
      }
      class Ee {
        constructor(e = {}, t = {}, a = {}, n = {}) {
          (this.weightMap = e),
            (this.tensorArrayMap = t),
            (this.tensorListMap = a),
            (this.functionMap = n),
            (this.rootContext = { id: 0, frameName: "", iterationId: 0 }),
            (this.contexts = [this.rootContext]),
            (this.lastId = 0),
            this.generateCurrentContextIds();
        }
        newFrame(e, t) {
          return { id: e, frameName: t, iterationId: 0 };
        }
        set currentContext(e) {
          this.contexts !== e &&
            ((this.contexts = e), this.generateCurrentContextIds());
        }
        get currentContext() {
          return this.contexts;
        }
        get currentContextId() {
          return this._currentContextIds[0];
        }
        get currentContextIds() {
          return this._currentContextIds;
        }
        generateCurrentContextIds() {
          const e = [];
          for (let t = 0; t < this.contexts.length - 1; t++) {
            const a = this.contexts.slice(0, this.contexts.length - t);
            e.push(this.contextIdforContexts(a));
          }
          e.push(""), (this._currentContextIds = e);
        }
        contextIdforContexts(e) {
          return e
            ? e
                .map((e) =>
                  0 === e.id && 0 === e.iterationId
                    ? ""
                    : `${e.frameName}-${e.iterationId}`
                )
                .join("/")
            : "";
        }
        enterFrame(e) {
          this.contexts &&
            (this.lastId++,
            (this.contexts = this.contexts.slice()),
            this.contexts.push(this.newFrame(this.lastId, e)),
            this._currentContextIds.unshift(
              this.contextIdforContexts(this.contexts)
            ));
        }
        exitFrame() {
          if (!(this.contexts && this.contexts.length > 1))
            throw new Error("Cannot exit frame, the context is empty");
          (this.contexts = this.contexts.slice()),
            this.contexts.splice(-1),
            this.currentContextIds.shift();
        }
        nextIteration() {
          if (!(this.contexts && this.contexts.length > 0))
            throw new Error(
              "Cannot increase frame iteration, the context is empty"
            );
          {
            (this.contexts = this.contexts.slice()), this.lastId++;
            const e = Object.assign(
              {},
              this.contexts[this.contexts.length - 1]
            );
            (e.iterationId += 1),
              (e.id = this.lastId),
              this.contexts.splice(-1, 1, e),
              this._currentContextIds.splice(
                0,
                1,
                this.contextIdforContexts(this.contexts)
              );
          }
        }
        getWeight(e) {
          return this.weightMap[e];
        }
        addTensorArray(e) {
          this.tensorArrayMap[e.id] = e;
        }
        getTensorArray(e) {
          return this.tensorArrayMap[e];
        }
        addTensorList(e) {
          this.tensorListMap[e.id] = e;
        }
        getTensorList(e) {
          return this.tensorListMap[e];
        }
        dispose(e) {
          for (const t in this.tensorArrayMap)
            this.tensorArrayMap[t].clearAndClose(e);
          for (const t in this.tensorListMap)
            this.tensorListMap[t].clearAndClose(e);
        }
      }
      function ve(e, t, a, n) {
        const s = new Set(),
          r = [];
        let o = null,
          p = null;
        const i = new Set(),
          m = Object.keys(e).map((e) => k(e)[0]);
        let u = [];
        null != n && (u = n.map((e) => k(e.name)[0]));
        const d = [...t];
        for (; d.length > 0; ) {
          const e = d.pop();
          (Me(e) || Ve(e) || Le(e)) &&
            null == o &&
            ((o = e),
            (p = o.children.map((e) => e.name).filter((e) => s.has(e)))),
            s.add(e.name),
            null == a[e.name] &&
              -1 === m.indexOf(e.name) &&
              -1 === u.indexOf(e.name) &&
              (0 !== e.inputs.length
                ? e.inputs.forEach((e) => {
                    i.has(e.name) || (i.add(e.name), d.push(e));
                  })
                : r.push(e.name));
        }
        return {
          inputs: e,
          outputs: t,
          usedNodes: s,
          missingInputs: r,
          dynamicNode: o,
          syncInputs: p,
        };
      }
      const De = [
          "Switch",
          "Merge",
          "Enter",
          "Exit",
          "NextIteration",
          "StatelessIf",
          "StatelessWhile",
          "if",
          "While",
        ],
        Ae = [
          "NonMaxSuppressionV2",
          "NonMaxSuppressionV3",
          "NonMaxSuppressionV5",
          "Where",
        ],
        ke = [
          "HashTable",
          "HashTableV2",
          "LookupTableImport",
          "LookupTableImportV2",
          "LookupTableFind",
          "LookupTableFindV2",
          "LookupTableSize",
          "LookupTableSizeV2",
        ];
      function Me(e) {
        return De.indexOf(e.op) >= 0;
      }
      function Ve(e) {
        return Ae.indexOf(e.op) >= 0;
      }
      function Le(e) {
        return ke.indexOf(e.op) >= 0;
      }
      class Ce {
        constructor(e, t) {
          (this.graph = e),
            (this.parent = t),
            (this.compiledMap = new Map()),
            (this._weightMap = {}),
            (this.SEPERATOR = ","),
            (this._functions = {}),
            (this._functionExecutorMap = {}),
            (this.keepIntermediateTensors = !1),
            (this._outputs = e.outputs),
            (this._inputs = e.inputs),
            (this._initNodes = e.initNodes),
            (this._signature = e.signature),
            (this._functions = e.functions),
            null != e.functions &&
              Object.keys(e.functions).forEach((t) => {
                this._functionExecutorMap[t] = new Ce(e.functions[t], this);
              });
        }
        get weightIds() {
          return this.parent ? this.parent.weightIds : this._weightIds;
        }
        get functionExecutorMap() {
          return this.parent
            ? this.parent.functionExecutorMap
            : this._functionExecutorMap;
        }
        get weightMap() {
          return this.parent ? this.parent.weightMap : this._weightMap;
        }
        set weightMap(e) {
          const t = Object.keys(e).map((t) => e[t].map((e) => e.id));
          (this._weightIds = [].concat(...t)), (this._weightMap = e);
        }
        set resourceManager(e) {
          this._resourceManager = e;
        }
        get inputs() {
          return this._inputs.map((e) => ({
            name: e.name,
            shape: e.attrParams.shape ? e.attrParams.shape.value : void 0,
            dtype: e.attrParams.dtype ? e.attrParams.dtype.value : void 0,
          }));
        }
        get outputs() {
          return this._outputs.map((e) => ({
            name: e.name,
            shape: e.attrParams.shape ? e.attrParams.shape.value : void 0,
            dtype: e.attrParams.dtype ? e.attrParams.dtype.value : void 0,
          }));
        }
        get inputNodes() {
          return this._inputs.map((e) => e.signatureKey || e.name);
        }
        get outputNodes() {
          return this._outputs.map((e) => {
            const t = e.signatureKey || e.name;
            return e.defaultOutput ? `${t}:${e.defaultOutput}` : t;
          });
        }
        get functions() {
          return Object.keys(this._functions).reduce(
            (e, t) => ((e[t] = this._functions[t].signature), e),
            {}
          );
        }
        getCompilationKey(e, t) {
          const a = e.map((e) => e.name).sort(),
            n = t.map((e) => e.name).sort();
          return a.join(this.SEPERATOR) + "--" + n.join(this.SEPERATOR);
        }
        compile(e, t) {
          const a = ve(e, t, this.weightMap, this._initNodes),
            { missingInputs: n, dynamicNode: s, syncInputs: r } = a;
          if (null != s)
            throw new Error(
              `This execution contains the node '${s.name}', which has the dynamic op '${s.op}'. Please use model.executeAsync() instead. Alternatively, to avoid the dynamic ops, specify the inputs [${r}]`
            );
          if (n.length > 0) {
            const a = t.map((e) => e.name),
              s = Object.keys(e);
            throw new Error(
              `Cannot compute the outputs [${a}] from the provided inputs [${s}]. Missing the following inputs: [${n}]`
            );
          }
          return (function (e, t, a) {
            const { usedNodes: n, inputs: s } = a,
              r = [],
              o = Object.keys(s)
                .map((e) => k(e)[0])
                .map((t) => e.nodes[t]),
              p = e.initNodes;
            o.forEach((e) => {
              n.has(e.name) && r.push(e);
            }),
              e.weights.forEach((e) => {
                n.has(e.name) && r.push(e);
              }),
              null != p &&
                p.forEach((e) => {
                  n.has(e.name) && r.push(e);
                });
            const i = new Set(),
              m = [];
            for (; r.length > 0; ) {
              const e = r.pop();
              i.add(e.name),
                t[e.name] || m.push(e),
                e.children.forEach((e) => {
                  !i.has(e.name) &&
                    n.has(e.name) &&
                    e.inputs.every((e) => i.has(e.name)) &&
                    r.push(e);
                });
            }
            return m;
          })(this.graph, this.weightMap, a);
        }
        cloneAndKeepTensor(e) {
          if (null == e) return null;
          const t = e.clone();
          return (0, O.CnY)(t), t;
        }
        cloneTensorList(e) {
          return e ? e.map((e) => this.cloneAndKeepTensor(e)) : null;
        }
        cloneTensorMap(e) {
          return Object.fromEntries(
            Object.entries(e).map(([e, t]) => [e, this.cloneTensorList(t)])
          );
        }
        execute(e, t) {
          this.disposeIntermediateTensors(), (e = this.mapInputs(e));
          const a = Object.keys(e).sort();
          this.checkInputs(e),
            this.checkInputShapeAndType(e),
            (t = this.mapOutputs(t)),
            this.checkOutputs(t);
          const n = a.map((e) => this.graph.nodes[k(e)[0]]),
            s = t.map((e) => k(e)[0]);
          let r = s.map((e) => this.graph.nodes[e]);
          0 === r.length && (r = this._outputs);
          const o = this.getCompilationKey(n, r);
          let p = this.compiledMap.get(o);
          null == p && ((p = this.compile(e, r)), this.compiledMap.set(o, p));
          try {
            this.keepIntermediateTensors = (0, O.OBj)().getBool(
              "KEEP_INTERMEDIATE_TENSORS"
            );
          } catch (e) {
            (this.keepIntermediateTensors = !1), console.warn(e.message);
          }
          const i = {},
            m = {};
          return (0, O.lub)(() => {
            const a = new Ee(this.weightMap, i, m, this.functionExecutorMap),
              n = Object.assign({}, this.weightMap);
            this.keepIntermediateTensors &&
              (this.clonedTensorsMap = this.cloneTensorMap(this.weightMap)),
              Object.keys(e).forEach((t) => {
                const [a, s] = k(t),
                  r = [];
                (r[s] = e[t]),
                  (n[a] = r),
                  this.keepIntermediateTensors &&
                    (this.clonedTensorsMap[a] = this.cloneTensorList(r));
              });
            const r = this.getFrozenTensorIds(n),
              o = {};
            for (let e = 0; e < p.length; e++) {
              const t = p[e];
              if (!n[t.name]) {
                const e = Ie(t, n, a, this._resourceManager);
                if (O.D5U.isPromise(e))
                  throw new Error(
                    `The execution of the op '${t.op}' returned a promise. Please use model.executeAsync() instead.`
                  );
                (n[t.name] = e),
                  this.keepIntermediateTensors &&
                    (this.clonedTensorsMap[t.name] = this.cloneTensorList(e)),
                  this.checkTensorForDisposal(t.name, t, n, a, r, s, o);
              }
            }
            return (
              null == this.parent && a.dispose(r), t.map((e) => v(e, n, a))
            );
          });
        }
        getFrozenTensorIds(e) {
          const t = [].concat.apply(
            [],
            Object.keys(e)
              .map((t) => e[t])
              .map((e) => e.map((e) => e.id))
          );
          return new Set(t);
        }
        checkTensorForDisposal(e, t, a, n, s, r, o) {
          "control" !== t.category &&
            -1 === r.indexOf(e) &&
            (a[e].forEach((e) => {
              null != e && (o[e.id] = (o[e.id] || 0) + t.children.length);
            }),
            t.inputs.forEach((e) => {
              if ("control" !== e.category) {
                const t = (function (e, t, a) {
                  return t[A(e, a.currentContextId)];
                })(e.name, a, n);
                null != t &&
                  t.forEach((e) => {
                    if (e && !e.kept && !s.has(e.id)) {
                      const t = o[e.id];
                      1 === t
                        ? (e.dispose(), delete o[e.id])
                        : null != t && o[e.id]--;
                    }
                  });
              }
            }));
        }
        async executeAsync(e, t) {
          return this._executeAsync(e, t);
        }
        disposeIntermediateTensors() {
          this.clonedTensorsMap &&
            (Object.values(this.clonedTensorsMap).forEach((e) => {
              for (const t of e) t && !t.isDisposed && t.dispose();
            }),
            (this.clonedTensorsMap = null));
        }
        getIntermediateTensors() {
          return this.clonedTensorsMap;
        }
        async _executeAsync(e, t, a = !1, n = {}, s = {}) {
          this.disposeIntermediateTensors(),
            a ||
              ((e = this.mapInputs(e)),
              this.checkInputs(e),
              this.checkInputShapeAndType(e),
              (t = this.mapOutputs(t)),
              this.checkOutputs(t));
          try {
            this.keepIntermediateTensors = (0, O.OBj)().getBool(
              "KEEP_INTERMEDIATE_TENSORS"
            );
          } catch (e) {
            (this.keepIntermediateTensors = !1), console.warn(e.message);
          }
          const r = new Ee(this.weightMap, n, s, this.functionExecutorMap);
          this.keepIntermediateTensors &&
            (this.clonedTensorsMap = this.cloneTensorMap(this.weightMap));
          const o = await this.executeWithControlFlow(e, r, t, a),
            p = t.map((e) => v(e, o, r)),
            i = p.map((e) => e.id),
            m = Object.keys(e).map((t) => e[t].id),
            u = new Set([...i, ...m, ...this.weightIds]);
          return (
            Object.values(o).forEach((e) => {
              e.forEach((e) => {
                !e || e.isDisposed || u.has(e.id) || e.dispose();
              });
            }),
            null == this.parent && r.dispose(u),
            p
          );
        }
        async executeFunctionAsync(e, t, a) {
          const n = e.reduce(
            (e, t, a) => ((e[this.inputs[a].name] = t), e),
            {}
          );
          return this._executeAsync(n, this.outputNodes, !0, t, a);
        }
        async executeWithControlFlow(e, t, a, n) {
          const s = Object.keys(e),
            r = s.map((e) => this.graph.nodes[k(e)[0]]),
            o = a.map((e) => k(e)[0]);
          let p = o.map((e) => this.graph.nodes[e]);
          0 === p.length && (p = this._outputs);
          const {
              usedNodes: i,
              missingInputs: m,
              dynamicNode: u,
              syncInputs: d,
            } = ve(e, p, this.weightMap, this._initNodes),
            c = [...r, ...this.graph.weights, ...(this._initNodes || [])].map(
              (e) => ({ node: e, contexts: t.currentContext })
            ),
            l = Object.assign({}, this.weightMap);
          Object.keys(e).forEach((t) => {
            const [a, n] = k(t),
              s = [];
            (s[n] = e[t]), (l[a] = s);
          });
          const y = {},
            h = this.getFrozenTensorIds(l),
            f = {};
          for (; c.length > 0; ) {
            const e = this.processStack(r, c, t, l, f, h, o, y, i);
            await Promise.all(e);
          }
          null != u ||
            n ||
            console.warn(
              "This model execution did not contain any nodes with control flow or dynamic output shapes. You can use model.execute() instead."
            );
          const N = p
            .filter((e) => !Me(e) && !v(e.name, l, t))
            .map((e) => e.name);
          if (N.length > 0) {
            let e = "";
            throw (
              (null != u &&
                (e = `Alternatively, to avoid the dynamic ops, use model.execute() and specify the inputs [${d}]`),
              new Error(
                `Cannot compute the outputs [${N}] from the provided inputs [${s}]. Consider providing the following inputs: [${m}]. ${e}`
              ))
            );
          }
          return l;
        }
        processStack(e, t, a, n, s, r, o, p, i) {
          const m = [];
          for (; t.length > 0; ) {
            const e = t.pop();
            a.currentContext = e.contexts;
            let u = "";
            if (
              ("Enter" === e.node.op &&
                E("isConstant", e.node, n, a) &&
                ([u] = D(e.node.name, a)),
              null == n[e.node.name])
            ) {
              const d = Ie(e.node, n, a, this._resourceManager);
              u || ([u] = D(e.node.name, a));
              const c = a.currentContext;
              O.D5U.isPromise(d)
                ? m.push(
                    d.then(
                      (m) => (
                        (n[u] = m),
                        this.keepIntermediateTensors &&
                          (this.clonedTensorsMap[u] = this.cloneTensorList(m)),
                        (a.currentContext = c),
                        this.checkTensorForDisposal(u, e.node, n, a, r, o, p),
                        this.processChildNodes(e.node, t, a, n, s, i),
                        m
                      )
                    )
                  )
                : ((n[u] = d),
                  this.keepIntermediateTensors &&
                    (this.clonedTensorsMap[u] = this.cloneTensorList(d)),
                  this.checkTensorForDisposal(u, e.node, n, a, r, o, p),
                  this.processChildNodes(e.node, t, a, n, s, i));
            } else this.processChildNodes(e.node, t, a, n, s, i);
          }
          return m;
        }
        processChildNodes(e, t, a, n, s, r) {
          e.children.forEach((e) => {
            const [o] = D(e.name, a);
            !s[o] &&
              r.has(e.name) &&
              ("Merge" === e.op
                ? e.inputNames.some((e) => !!v(e, n, a)) &&
                  ((s[o] = !0), t.push({ contexts: a.currentContext, node: e }))
                : e.inputNames.every((e) => !!v(e, n, a)) &&
                  ((s[o] = !0),
                  t.push({ contexts: a.currentContext, node: e })));
          });
        }
        dispose() {
          Object.keys(this.weightMap).forEach((e) =>
            this.weightMap[e].forEach((e) => e.dispose())
          );
        }
        checkInputShapeAndType(e) {
          Object.keys(e).forEach((t) => {
            const a = e[t],
              [n] = k(t),
              s = this.graph.nodes[n];
            if (s.attrParams.shape && s.attrParams.shape.value) {
              const e = s.attrParams.shape.value,
                t =
                  e.length === a.shape.length &&
                  a.shape.every((t, a) => -1 === e[a] || e[a] === t);
              O.D5U.assert(
                t,
                () =>
                  `The shape of dict['${s.name}'] provided in model.execute(dict) must be [${e}], but was [${a.shape}]`
              );
            }
            s.attrParams.dtype &&
              s.attrParams.dtype.value &&
              O.D5U.assert(
                a.dtype === s.attrParams.dtype.value,
                () =>
                  `The dtype of dict['${s.name}'] provided in model.execute(dict) must be ${s.attrParams.dtype.value}, but was ${a.dtype}`
              );
          });
        }
        mapInputs(e) {
          var t, a;
          const n = {};
          for (const s in e) {
            const r =
              null ===
                (a =
                  null === (t = this._signature) || void 0 === t
                    ? void 0
                    : t.inputs) || void 0 === a
                ? void 0
                : a[s];
            null != r ? (n[r.name] = e[s]) : (n[s] = e[s]);
          }
          return n;
        }
        checkInputs(e) {
          const t = Object.keys(e).filter((e) => {
            const [t] = k(e);
            return null == this.graph.nodes[t];
          });
          if (t.length > 0)
            throw new Error(
              `The dict provided in model.execute(dict) has keys: [${t}] that are not part of graph`
            );
        }
        mapOutputs(e) {
          return e.map((e) => {
            var t, a;
            const n =
              null ===
                (a =
                  null === (t = this._signature) || void 0 === t
                    ? void 0
                    : t.outputs) || void 0 === a
                ? void 0
                : a[e];
            return null != n ? n.name : e;
          }, {});
        }
        checkOutputs(e) {
          e.forEach((e) => {
            const [t] = k(e);
            if (!this.graph.nodes[t])
              throw new Error(`The output '${e}' is not found in the graph`);
          });
        }
      }
      class ze {
        constructor(e = {}, t = {}) {
          (this.hashTableNameToHandle = e), (this.hashTableMap = t);
        }
        addHashTable(e, t) {
          (this.hashTableNameToHandle[e] = t.handle),
            (this.hashTableMap[t.id] = t);
        }
        getHashTableHandleByName(e) {
          return this.hashTableNameToHandle[e];
        }
        getHashTableById(e) {
          return this.hashTableMap[e];
        }
        dispose() {
          for (const e in this.hashTableMap)
            this.hashTableMap[e].clearAndClose(), delete this.hashTableMap[e];
          for (const e in this.hashTableNameToHandle)
            this.hashTableNameToHandle[e].dispose(),
              delete this.hashTableNameToHandle[e];
        }
      }
      class Fe {
        constructor(e, t = {}, a = O.io) {
          (this.modelUrl = e),
            (this.loadOptions = t),
            (this.version = "n/a"),
            (this.io = a),
            null == t && (this.loadOptions = {}),
            (this.resourceManager = new ze());
        }
        get modelVersion() {
          return this.version;
        }
        get inputNodes() {
          return this.executor.inputNodes;
        }
        get outputNodes() {
          return this.executor.outputNodes;
        }
        get inputs() {
          return this.executor.inputs;
        }
        get outputs() {
          return this.executor.outputs;
        }
        get weights() {
          return this.executor.weightMap;
        }
        get metadata() {
          return this.artifacts.userDefinedMetadata;
        }
        get modelSignature() {
          return this.signature;
        }
        get modelStructuredOutputKeys() {
          return this.structuredOutputKeys;
        }
        findIOHandler() {
          const e = this.modelUrl;
          if (null != e.load) this.handler = e;
          else if (null != this.loadOptions.requestInit)
            this.handler = this.io.browserHTTPRequest(e, this.loadOptions);
          else {
            const t = this.io.getLoadHandlers(e, this.loadOptions);
            if (0 === t.length)
              t.push(this.io.browserHTTPRequest(e, this.loadOptions));
            else if (t.length > 1)
              throw new Error(
                `Found more than one (${t.length}) load handlers for URL '${[
                  e,
                ]}'`
              );
            this.handler = t[0];
          }
        }
        load() {
          if ((this.findIOHandler(), null == this.handler.load))
            throw new Error(
              "Cannot proceed with model loading because the IOHandler provided does not have the `load` method implemented."
            );
          const e = this.handler.load();
          return O.D5U.isPromise(e)
            ? e.then((e) => this.loadSync(e))
            : this.loadSync(e);
        }
        loadSync(e) {
          this.artifacts = e;
          const t = this.artifacts.modelTopology;
          let a = this.artifacts.signature;
          if (null != this.artifacts.userDefinedMetadata) {
            const e = this.artifacts.userDefinedMetadata;
            null != e.signature && (a = e.signature),
              null != e.structuredOutputKeys &&
                (this.structuredOutputKeys = e.structuredOutputKeys);
          }
          (this.signature = a),
            (this.version = `${t.versions.producer}.${t.versions.minConsumer}`);
          const n = this.io.decodeWeights(
            this.artifacts.weightData,
            this.artifacts.weightSpecs
          );
          if (
            ((this.executor = new Ce(
              J.Instance.transformGraph(t, this.signature)
            )),
            (this.executor.weightMap = this.convertTensorMapToTensorsMap(n)),
            (this.executor.resourceManager = this.resourceManager),
            null != e.modelInitializer && null != e.modelInitializer.node)
          ) {
            const t = J.Instance.transformGraph(e.modelInitializer);
            (this.initializer = new Ce(t)),
              (this.initializer.weightMap = this.executor.weightMap),
              (this.initializer.resourceManager = this.resourceManager),
              (this.initializerSignature = e.initializerSignature);
          }
          return !0;
        }
        async save(e, t) {
          if ("string" == typeof e) {
            const t = this.io.getSaveHandlers(e);
            if (0 === t.length)
              throw new Error(`Cannot find any save handlers for URL '${e}'`);
            if (t.length > 1)
              throw new Error(
                `Found more than one (${t.length}) save handlers for URL '${e}'`
              );
            e = t[0];
          }
          if (null == e.save)
            throw new Error(
              "GraphModel.save() cannot proceed because the IOHandler provided does not have the `save` attribute defined."
            );
          return e.save(this.artifacts);
        }
        addStructuredOutputNames(e) {
          if (this.structuredOutputKeys) {
            const t = e instanceof O.esB ? [e] : e,
              a = {};
            return (
              t.forEach((e, t) => (a[this.structuredOutputKeys[t]] = e)), a
            );
          }
          return e;
        }
        predict(e, t) {
          const a = this.execute(e, this.outputNodes);
          return this.addStructuredOutputNames(a);
        }
        async predictAsync(e, t) {
          const a = await this.executeAsync(e, this.outputNodes);
          return this.addStructuredOutputNames(a);
        }
        normalizeInputs(e) {
          var t;
          if (!(e instanceof O.esB || Array.isArray(e))) {
            const a =
              null === (t = this.signature) || void 0 === t ? void 0 : t.inputs;
            if (null != a)
              for (const t in a) {
                const n = a[t];
                null != n.resourceId &&
                  (e[t] = this.resourceIdToCapturedInput[n.resourceId]);
              }
            return e;
          }
          e = Array.isArray(e) ? e : [e];
          const a = Object.keys(this.resourceIdToCapturedInput).length;
          if (e.length + a !== this.inputNodes.length)
            throw new Error(
              `Input tensor count mismatch, the graph model has ${
                this.inputNodes.length - a
              } non-resource placeholders, while there are ${
                e.length
              } input tensors provided.`
            );
          let n = 0;
          return this.inputNodes.reduce((t, a) => {
            var s, r, o;
            const p =
              null ===
                (o =
                  null ===
                    (r =
                      null === (s = this.signature) || void 0 === s
                        ? void 0
                        : s.inputs) || void 0 === r
                    ? void 0
                    : r[a]) || void 0 === o
                ? void 0
                : o.resourceId;
            return (
              (t[a] = null != p ? this.resourceIdToCapturedInput[p] : e[n++]), t
            );
          }, {});
        }
        normalizeOutputs(e) {
          return (e = e || this.outputNodes), Array.isArray(e) ? e : [e];
        }
        executeInitializerGraph() {
          return null == this.initializer
            ? []
            : null == this.initializerSignature
            ? this.initializer.execute({}, [])
            : this.initializer.execute(
                {},
                Object.keys(this.initializerSignature.outputs)
              );
        }
        async executeInitializerGraphAsync() {
          return null == this.initializer
            ? []
            : null == this.initializerSignature
            ? this.initializer.executeAsync({}, [])
            : this.initializer.executeAsync(
                {},
                Object.keys(this.initializerSignature.outputs)
              );
        }
        setResourceIdToCapturedInput(e) {
          if (
            ((this.resourceIdToCapturedInput = {}), this.initializerSignature)
          ) {
            const t = this.initializerSignature.outputs,
              a = Object.keys(t);
            for (let n = 0; n < a.length; n++) {
              const s = t[a[n]];
              this.resourceIdToCapturedInput[s.resourceId] = e[n];
            }
          }
        }
        execute(e, t) {
          null == this.resourceIdToCapturedInput &&
            this.setResourceIdToCapturedInput(this.executeInitializerGraph()),
            (e = this.normalizeInputs(e)),
            (t = this.normalizeOutputs(t));
          const a = this.executor.execute(e, t);
          return a.length > 1 ? a : a[0];
        }
        async executeAsync(e, t) {
          null == this.resourceIdToCapturedInput &&
            this.setResourceIdToCapturedInput(
              await this.executeInitializerGraphAsync()
            ),
            (e = this.normalizeInputs(e)),
            (t = this.normalizeOutputs(t));
          const a = await this.executor.executeAsync(e, t);
          return a.length > 1 ? a : a[0];
        }
        getIntermediateTensors() {
          return this.executor.getIntermediateTensors();
        }
        disposeIntermediateTensors() {
          this.executor.disposeIntermediateTensors();
        }
        convertTensorMapToTensorsMap(e) {
          return Object.keys(e).reduce((t, a) => ((t[a] = [e[a]]), t), {});
        }
        dispose() {
          this.executor.dispose(),
            this.initializer &&
              (this.initializer.dispose(),
              this.resourceIdToCapturedInput &&
                (0, O.B90)(this.resourceIdToCapturedInput)),
            this.resourceManager.dispose();
        }
      }
      async function $e(e, t = {}, a = O.io) {
        if (null == e)
          throw new Error(
            "modelUrl in loadGraphModel() cannot be null. Please provide a url or an IOHandler that loads the model"
          );
        null == t && (t = {}),
          t.fromTFHub &&
            "string" == typeof e &&
            (e = (function (e) {
              return (
                e.endsWith("/") || (e += "/"), `${e}model.json?tfjs-format=file`
              );
            })(e));
        const n = new Fe(e, t, a);
        return await n.load(), n;
      }
    },
  },
]);
