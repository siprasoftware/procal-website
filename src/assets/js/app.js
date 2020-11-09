function serviceText(a) {
  const b = serviceMessage[a]
  $(".service-desc").remove(),
    $(".product-figc").append('<h5 class="service-desc"></h5>'),
    $(".service-desc").html(b)
}
!(function (a, b) {
  "use strict"
  "object" == typeof module && "object" == typeof module.exports
    ? (module.exports = a.document
        ? b(a, !0)
        : function (a) {
            if (!a.document)
              throw new Error("jQuery requires a window with a document")
            return b(a)
          })
    : b(a)
})("undefined" != typeof window ? window : this, function (a, b) {
  "use strict"
  function c(a, b) {
    b = b || _
    var c = b.createElement("script")
    ;(c.text = a), b.head.appendChild(c).parentNode.removeChild(c)
  }
  function d(a) {
    var b = !!a && "length" in a && a.length,
      c = la.type(a)
    return (
      "function" !== c &&
      !la.isWindow(a) &&
      ("array" === c ||
        0 === b ||
        ("number" == typeof b && b > 0 && b - 1 in a))
    )
  }
  function e(a, b, c) {
    if (la.isFunction(b))
      return la.grep(a, function (a, d) {
        return !!b.call(a, d, a) !== c
      })
    if (b.nodeType)
      return la.grep(a, function (a) {
        return (a === b) !== c
      })
    if ("string" == typeof b) {
      if (sa.test(b)) return la.filter(b, a, c)
      b = la.filter(b, a)
    }
    return la.grep(a, function (a) {
      return ea.call(b, a) > -1 !== c && 1 === a.nodeType
    })
  }
  function f(a, b) {
    for (; (a = a[b]) && 1 !== a.nodeType; );
    return a
  }
  function g(a) {
    var b = {}
    return (
      la.each(a.match(xa) || [], function (a, c) {
        b[c] = !0
      }),
      b
    )
  }
  function h(a) {
    return a
  }
  function i(a) {
    throw a
  }
  function j(a, b, c) {
    var d
    try {
      a && la.isFunction((d = a.promise))
        ? d.call(a).done(b).fail(c)
        : a && la.isFunction((d = a.then))
        ? d.call(a, b, c)
        : b.call(void 0, a)
    } catch (a) {
      c.call(void 0, a)
    }
  }
  function k() {
    _.removeEventListener("DOMContentLoaded", k),
      a.removeEventListener("load", k),
      la.ready()
  }
  function l() {
    this.expando = la.expando + l.uid++
  }
  function m(a, b, c) {
    var d
    if (void 0 === c && 1 === a.nodeType)
      if (
        ((d = "data-" + b.replace(Fa, "-$&").toLowerCase()),
        "string" == typeof (c = a.getAttribute(d)))
      ) {
        try {
          c =
            "true" === c ||
            ("false" !== c &&
              ("null" === c
                ? null
                : +c + "" === c
                ? +c
                : Ea.test(c)
                ? JSON.parse(c)
                : c))
        } catch (a) {}
        Da.set(a, b, c)
      } else c = void 0
    return c
  }
  function n(a, b, c, d) {
    var e,
      f = 1,
      g = 20,
      h = d
        ? function () {
            return d.cur()
          }
        : function () {
            return la.css(a, b, "")
          },
      i = h(),
      j = (c && c[3]) || (la.cssNumber[b] ? "" : "px"),
      k = (la.cssNumber[b] || ("px" !== j && +i)) && Ha.exec(la.css(a, b))
    if (k && k[3] !== j) {
      ;(j = j || k[3]), (c = c || []), (k = +i || 1)
      do {
        ;(f = f || ".5"), (k /= f), la.style(a, b, k + j)
      } while (f !== (f = h() / i) && 1 !== f && --g)
    }
    return (
      c &&
        ((k = +k || +i || 0),
        (e = c[1] ? k + (c[1] + 1) * c[2] : +c[2]),
        d && ((d.unit = j), (d.start = k), (d.end = e))),
      e
    )
  }
  function o(a) {
    var b,
      c = a.ownerDocument,
      d = a.nodeName,
      e = La[d]
    return (
      e ||
      ((b = c.body.appendChild(c.createElement(d))),
      (e = la.css(b, "display")),
      b.parentNode.removeChild(b),
      "none" === e && (e = "block"),
      (La[d] = e),
      e)
    )
  }
  function p(a, b) {
    for (var c, d, e = [], f = 0, g = a.length; f < g; f++)
      (d = a[f]),
        d.style &&
          ((c = d.style.display),
          b
            ? ("none" === c &&
                ((e[f] = Ca.get(d, "display") || null),
                e[f] || (d.style.display = "")),
              "" === d.style.display && Ja(d) && (e[f] = o(d)))
            : "none" !== c && ((e[f] = "none"), Ca.set(d, "display", c)))
    for (f = 0; f < g; f++) null != e[f] && (a[f].style.display = e[f])
    return a
  }
  function q(a, b) {
    var c =
      void 0 !== a.getElementsByTagName
        ? a.getElementsByTagName(b || "*")
        : void 0 !== a.querySelectorAll
        ? a.querySelectorAll(b || "*")
        : []
    return void 0 === b || (b && la.nodeName(a, b)) ? la.merge([a], c) : c
  }
  function r(a, b) {
    for (var c = 0, d = a.length; c < d; c++)
      Ca.set(a[c], "globalEval", !b || Ca.get(b[c], "globalEval"))
  }
  function s(a, b, c, d, e) {
    for (
      var f,
        g,
        h,
        i,
        j,
        k,
        l = b.createDocumentFragment(),
        m = [],
        n = 0,
        o = a.length;
      n < o;
      n++
    )
      if ((f = a[n]) || 0 === f)
        if ("object" === la.type(f)) la.merge(m, f.nodeType ? [f] : f)
        else if (Qa.test(f)) {
          for (
            g = g || l.appendChild(b.createElement("div")),
              h = (Na.exec(f) || ["", ""])[1].toLowerCase(),
              i = Pa[h] || Pa._default,
              g.innerHTML = i[1] + la.htmlPrefilter(f) + i[2],
              k = i[0];
            k--;

          )
            g = g.lastChild
          la.merge(m, g.childNodes), (g = l.firstChild), (g.textContent = "")
        } else m.push(b.createTextNode(f))
    for (l.textContent = "", n = 0; (f = m[n++]); )
      if (d && la.inArray(f, d) > -1) e && e.push(f)
      else if (
        ((j = la.contains(f.ownerDocument, f)),
        (g = q(l.appendChild(f), "script")),
        j && r(g),
        c)
      )
        for (k = 0; (f = g[k++]); ) Oa.test(f.type || "") && c.push(f)
    return l
  }
  function t() {
    return !0
  }
  function u() {
    return !1
  }
  function v() {
    try {
      return _.activeElement
    } catch (a) {}
  }
  function w(a, b, c, d, e, f) {
    var g, h
    if ("object" == typeof b) {
      "string" != typeof c && ((d = d || c), (c = void 0))
      for (h in b) w(a, h, c, d, b[h], f)
      return a
    }
    if (
      (null == d && null == e
        ? ((e = c), (d = c = void 0))
        : null == e &&
          ("string" == typeof c
            ? ((e = d), (d = void 0))
            : ((e = d), (d = c), (c = void 0))),
      !1 === e)
    )
      e = u
    else if (!e) return a
    return (
      1 === f &&
        ((g = e),
        (e = function (a) {
          return la().off(a), g.apply(this, arguments)
        }),
        (e.guid = g.guid || (g.guid = la.guid++))),
      a.each(function () {
        la.event.add(this, b, e, d, c)
      })
    )
  }
  function x(a, b) {
    return la.nodeName(a, "table") &&
      la.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr")
      ? a.getElementsByTagName("tbody")[0] || a
      : a
  }
  function y(a) {
    return (a.type = (null !== a.getAttribute("type")) + "/" + a.type), a
  }
  function z(a) {
    var b = Xa.exec(a.type)
    return b ? (a.type = b[1]) : a.removeAttribute("type"), a
  }
  function A(a, b) {
    var c, d, e, f, g, h, i, j
    if (1 === b.nodeType) {
      if (
        Ca.hasData(a) &&
        ((f = Ca.access(a)), (g = Ca.set(b, f)), (j = f.events))
      ) {
        delete g.handle, (g.events = {})
        for (e in j)
          for (c = 0, d = j[e].length; c < d; c++) la.event.add(b, e, j[e][c])
      }
      Da.hasData(a) &&
        ((h = Da.access(a)), (i = la.extend({}, h)), Da.set(b, i))
    }
  }
  function B(a, b) {
    var c = b.nodeName.toLowerCase()
    "input" === c && Ma.test(a.type)
      ? (b.checked = a.checked)
      : ("input" !== c && "textarea" !== c) || (b.defaultValue = a.defaultValue)
  }
  function C(a, b, d, e) {
    b = ca.apply([], b)
    var f,
      g,
      h,
      i,
      j,
      k,
      l = 0,
      m = a.length,
      n = m - 1,
      o = b[0],
      p = la.isFunction(o)
    if (p || (m > 1 && "string" == typeof o && !ka.checkClone && Wa.test(o)))
      return a.each(function (c) {
        var f = a.eq(c)
        p && (b[0] = o.call(this, c, f.html())), C(f, b, d, e)
      })
    if (
      m &&
      ((f = s(b, a[0].ownerDocument, !1, a, e)),
      (g = f.firstChild),
      1 === f.childNodes.length && (f = g),
      g || e)
    ) {
      for (h = la.map(q(f, "script"), y), i = h.length; l < m; l++)
        (j = f),
          l !== n &&
            ((j = la.clone(j, !0, !0)), i && la.merge(h, q(j, "script"))),
          d.call(a[l], j, l)
      if (i)
        for (k = h[h.length - 1].ownerDocument, la.map(h, z), l = 0; l < i; l++)
          (j = h[l]),
            Oa.test(j.type || "") &&
              !Ca.access(j, "globalEval") &&
              la.contains(k, j) &&
              (j.src
                ? la._evalUrl && la._evalUrl(j.src)
                : c(j.textContent.replace(Ya, ""), k))
    }
    return a
  }
  function D(a, b, c) {
    for (var d, e = b ? la.filter(b, a) : a, f = 0; null != (d = e[f]); f++)
      c || 1 !== d.nodeType || la.cleanData(q(d)),
        d.parentNode &&
          (c && la.contains(d.ownerDocument, d) && r(q(d, "script")),
          d.parentNode.removeChild(d))
    return a
  }
  function E(a, b, c) {
    var d,
      e,
      f,
      g,
      h = a.style
    return (
      (c = c || _a(a)),
      c &&
        ((g = c.getPropertyValue(b) || c[b]),
        "" !== g || la.contains(a.ownerDocument, a) || (g = la.style(a, b)),
        !ka.pixelMarginRight() &&
          $a.test(g) &&
          Za.test(b) &&
          ((d = h.width),
          (e = h.minWidth),
          (f = h.maxWidth),
          (h.minWidth = h.maxWidth = h.width = g),
          (g = c.width),
          (h.width = d),
          (h.minWidth = e),
          (h.maxWidth = f))),
      void 0 !== g ? g + "" : g
    )
  }
  function F(a, b) {
    return {
      get: function () {
        return a()
          ? void delete this.get
          : (this.get = b).apply(this, arguments)
      },
    }
  }
  function G(a) {
    if (a in eb) return a
    for (var b = a[0].toUpperCase() + a.slice(1), c = db.length; c--; )
      if ((a = db[c] + b) in eb) return a
  }
  function H(a, b, c) {
    var d = Ha.exec(b)
    return d ? Math.max(0, d[2] - (c || 0)) + (d[3] || "px") : b
  }
  function I(a, b, c, d, e) {
    for (
      var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0,
        g = 0;
      f < 4;
      f += 2
    )
      "margin" === c && (g += la.css(a, c + Ia[f], !0, e)),
        d
          ? ("content" === c && (g -= la.css(a, "padding" + Ia[f], !0, e)),
            "margin" !== c &&
              (g -= la.css(a, "border" + Ia[f] + "Width", !0, e)))
          : ((g += la.css(a, "padding" + Ia[f], !0, e)),
            "padding" !== c &&
              (g += la.css(a, "border" + Ia[f] + "Width", !0, e)))
    return g
  }
  function J(a, b, c) {
    var d,
      e = !0,
      f = _a(a),
      g = "border-box" === la.css(a, "boxSizing", !1, f)
    if (
      (a.getClientRects().length && (d = a.getBoundingClientRect()[b]),
      d <= 0 || null == d)
    ) {
      if (
        ((d = E(a, b, f)), (d < 0 || null == d) && (d = a.style[b]), $a.test(d))
      )
        return d
      ;(e = g && (ka.boxSizingReliable() || d === a.style[b])),
        (d = parseFloat(d) || 0)
    }
    return d + I(a, b, c || (g ? "border" : "content"), e, f) + "px"
  }
  function K(a, b, c, d, e) {
    return new K.prototype.init(a, b, c, d, e)
  }
  function L() {
    gb && (a.requestAnimationFrame(L), la.fx.tick())
  }
  function M() {
    return (
      a.setTimeout(function () {
        fb = void 0
      }),
      (fb = la.now())
    )
  }
  function N(a, b) {
    var c,
      d = 0,
      e = { height: a }
    for (b = b ? 1 : 0; d < 4; d += 2 - b)
      (c = Ia[d]), (e["margin" + c] = e["padding" + c] = a)
    return b && (e.opacity = e.width = a), e
  }
  function O(a, b, c) {
    for (
      var d,
        e = (R.tweeners[b] || []).concat(R.tweeners["*"]),
        f = 0,
        g = e.length;
      f < g;
      f++
    )
      if ((d = e[f].call(c, b, a))) return d
  }
  function P(a, b, c) {
    var d,
      e,
      f,
      g,
      h,
      i,
      j,
      k,
      l = "width" in b || "height" in b,
      m = this,
      n = {},
      o = a.style,
      q = a.nodeType && Ja(a),
      r = Ca.get(a, "fxshow")
    c.queue ||
      ((g = la._queueHooks(a, "fx")),
      null == g.unqueued &&
        ((g.unqueued = 0),
        (h = g.empty.fire),
        (g.empty.fire = function () {
          g.unqueued || h()
        })),
      g.unqueued++,
      m.always(function () {
        m.always(function () {
          g.unqueued--, la.queue(a, "fx").length || g.empty.fire()
        })
      }))
    for (d in b)
      if (((e = b[d]), hb.test(e))) {
        if (
          (delete b[d], (f = f || "toggle" === e), e === (q ? "hide" : "show"))
        ) {
          if ("show" !== e || !r || void 0 === r[d]) continue
          q = !0
        }
        n[d] = (r && r[d]) || la.style(a, d)
      }
    if ((i = !la.isEmptyObject(b)) || !la.isEmptyObject(n)) {
      l &&
        1 === a.nodeType &&
        ((c.overflow = [o.overflow, o.overflowX, o.overflowY]),
        (j = r && r.display),
        null == j && (j = Ca.get(a, "display")),
        (k = la.css(a, "display")),
        "none" === k &&
          (j
            ? (k = j)
            : (p([a], !0),
              (j = a.style.display || j),
              (k = la.css(a, "display")),
              p([a]))),
        ("inline" === k || ("inline-block" === k && null != j)) &&
          "none" === la.css(a, "float") &&
          (i ||
            (m.done(function () {
              o.display = j
            }),
            null == j && ((k = o.display), (j = "none" === k ? "" : k))),
          (o.display = "inline-block"))),
        c.overflow &&
          ((o.overflow = "hidden"),
          m.always(function () {
            ;(o.overflow = c.overflow[0]),
              (o.overflowX = c.overflow[1]),
              (o.overflowY = c.overflow[2])
          })),
        (i = !1)
      for (d in n)
        i ||
          (r
            ? "hidden" in r && (q = r.hidden)
            : (r = Ca.access(a, "fxshow", { display: j })),
          f && (r.hidden = !q),
          q && p([a], !0),
          m.done(function () {
            q || p([a]), Ca.remove(a, "fxshow")
            for (d in n) la.style(a, d, n[d])
          })),
          (i = O(q ? r[d] : 0, d, m)),
          d in r || ((r[d] = i.start), q && ((i.end = i.start), (i.start = 0)))
    }
  }
  function Q(a, b) {
    var c, d, e, f, g
    for (c in a)
      if (
        ((d = la.camelCase(c)),
        (e = b[d]),
        (f = a[c]),
        la.isArray(f) && ((e = f[1]), (f = a[c] = f[0])),
        c !== d && ((a[d] = f), delete a[c]),
        (g = la.cssHooks[d]) && "expand" in g)
      ) {
        ;(f = g.expand(f)), delete a[d]
        for (c in f) c in a || ((a[c] = f[c]), (b[c] = e))
      } else b[d] = e
  }
  function R(a, b, c) {
    var d,
      e,
      f = 0,
      g = R.prefilters.length,
      h = la.Deferred().always(function () {
        delete i.elem
      }),
      i = function () {
        if (e) return !1
        for (
          var b = fb || M(),
            c = Math.max(0, j.startTime + j.duration - b),
            d = c / j.duration || 0,
            f = 1 - d,
            g = 0,
            i = j.tweens.length;
          g < i;
          g++
        )
          j.tweens[g].run(f)
        return (
          h.notifyWith(a, [j, f, c]),
          f < 1 && i ? c : (h.resolveWith(a, [j]), !1)
        )
      },
      j = h.promise({
        elem: a,
        props: la.extend({}, b),
        opts: la.extend(
          !0,
          { specialEasing: {}, easing: la.easing._default },
          c
        ),
        originalProperties: b,
        originalOptions: c,
        startTime: fb || M(),
        duration: c.duration,
        tweens: [],
        createTween: function (b, c) {
          var d = la.Tween(
            a,
            j.opts,
            b,
            c,
            j.opts.specialEasing[b] || j.opts.easing
          )
          return j.tweens.push(d), d
        },
        stop: function (b) {
          var c = 0,
            d = b ? j.tweens.length : 0
          if (e) return this
          for (e = !0; c < d; c++) j.tweens[c].run(1)
          return (
            b
              ? (h.notifyWith(a, [j, 1, 0]), h.resolveWith(a, [j, b]))
              : h.rejectWith(a, [j, b]),
            this
          )
        },
      }),
      k = j.props
    for (Q(k, j.opts.specialEasing); f < g; f++)
      if ((d = R.prefilters[f].call(j, a, k, j.opts)))
        return (
          la.isFunction(d.stop) &&
            (la._queueHooks(j.elem, j.opts.queue).stop = la.proxy(d.stop, d)),
          d
        )
    return (
      la.map(k, O, j),
      la.isFunction(j.opts.start) && j.opts.start.call(a, j),
      la.fx.timer(la.extend(i, { elem: a, anim: j, queue: j.opts.queue })),
      j
        .progress(j.opts.progress)
        .done(j.opts.done, j.opts.complete)
        .fail(j.opts.fail)
        .always(j.opts.always)
    )
  }
  function S(a) {
    return (a.getAttribute && a.getAttribute("class")) || ""
  }
  function T(a, b, c, d) {
    var e
    if (la.isArray(b))
      la.each(b, function (b, e) {
        c || sb.test(a)
          ? d(a, e)
          : T(
              a + "[" + ("object" == typeof e && null != e ? b : "") + "]",
              e,
              c,
              d
            )
      })
    else if (c || "object" !== la.type(b)) d(a, b)
    else for (e in b) T(a + "[" + e + "]", b[e], c, d)
  }
  function U(a) {
    return function (b, c) {
      "string" != typeof b && ((c = b), (b = "*"))
      var d,
        e = 0,
        f = b.toLowerCase().match(xa) || []
      if (la.isFunction(c))
        for (; (d = f[e++]); )
          "+" === d[0]
            ? ((d = d.slice(1) || "*"), (a[d] = a[d] || []).unshift(c))
            : (a[d] = a[d] || []).push(c)
    }
  }
  function V(a, b, c, d) {
    function e(h) {
      var i
      return (
        (f[h] = !0),
        la.each(a[h] || [], function (a, h) {
          var j = h(b, c, d)
          return "string" != typeof j || g || f[j]
            ? g
              ? !(i = j)
              : void 0
            : (b.dataTypes.unshift(j), e(j), !1)
        }),
        i
      )
    }
    var f = {},
      g = a === zb
    return e(b.dataTypes[0]) || (!f["*"] && e("*"))
  }
  function W(a, b) {
    var c,
      d,
      e = la.ajaxSettings.flatOptions || {}
    for (c in b) void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c])
    return d && la.extend(!0, a, d), a
  }
  function X(a, b, c) {
    for (var d, e, f, g, h = a.contents, i = a.dataTypes; "*" === i[0]; )
      i.shift(),
        void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"))
    if (d)
      for (e in h)
        if (h[e] && h[e].test(d)) {
          i.unshift(e)
          break
        }
    if (i[0] in c) f = i[0]
    else {
      for (e in c) {
        if (!i[0] || a.converters[e + " " + i[0]]) {
          f = e
          break
        }
        g || (g = e)
      }
      f = f || g
    }
    if (f) return f !== i[0] && i.unshift(f), c[f]
  }
  function Y(a, b, c, d) {
    var e,
      f,
      g,
      h,
      i,
      j = {},
      k = a.dataTypes.slice()
    if (k[1]) for (g in a.converters) j[g.toLowerCase()] = a.converters[g]
    for (f = k.shift(); f; )
      if (
        (a.responseFields[f] && (c[a.responseFields[f]] = b),
        !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)),
        (i = f),
        (f = k.shift()))
      )
        if ("*" === f) f = i
        else if ("*" !== i && i !== f) {
          if (!(g = j[i + " " + f] || j["* " + f]))
            for (e in j)
              if (
                ((h = e.split(" ")),
                h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]]))
              ) {
                !0 === g
                  ? (g = j[e])
                  : !0 !== j[e] && ((f = h[0]), k.unshift(h[1]))
                break
              }
          if (!0 !== g)
            if (g && a.throws) b = g(b)
            else
              try {
                b = g(b)
              } catch (a) {
                return {
                  state: "parsererror",
                  error: g ? a : "No conversion from " + i + " to " + f,
                }
              }
        }
    return { state: "success", data: b }
  }
  function Z(a) {
    return la.isWindow(a) ? a : 9 === a.nodeType && a.defaultView
  }
  var $ = [],
    _ = a.document,
    aa = Object.getPrototypeOf,
    ba = $.slice,
    ca = $.concat,
    da = $.push,
    ea = $.indexOf,
    fa = {},
    ga = fa.toString,
    ha = fa.hasOwnProperty,
    ia = ha.toString,
    ja = ia.call(Object),
    ka = {},
    la = function (a, b) {
      return new la.fn.init(a, b)
    },
    ma = function (a, b) {
      return b.toUpperCase()
    }
  ;(la.fn = la.prototype = {
    jquery: "3.1.0",
    constructor: la,
    length: 0,
    toArray: function () {
      return ba.call(this)
    },
    get: function (a) {
      return null != a
        ? a < 0
          ? this[a + this.length]
          : this[a]
        : ba.call(this)
    },
    pushStack: function (a) {
      var b = la.merge(this.constructor(), a)
      return (b.prevObject = this), b
    },
    each: function (a) {
      return la.each(this, a)
    },
    map: function (a) {
      return this.pushStack(
        la.map(this, function (b, c) {
          return a.call(b, c, b)
        })
      )
    },
    slice: function () {
      return this.pushStack(ba.apply(this, arguments))
    },
    first: function () {
      return this.eq(0)
    },
    last: function () {
      return this.eq(-1)
    },
    eq: function (a) {
      var b = this.length,
        c = +a + (a < 0 ? b : 0)
      return this.pushStack(c >= 0 && c < b ? [this[c]] : [])
    },
    end: function () {
      return this.prevObject || this.constructor()
    },
    push: da,
    sort: $.sort,
    splice: $.splice,
  }),
    (la.extend = la.fn.extend = function () {
      var a,
        b,
        c,
        d,
        e,
        f,
        g = arguments[0] || {},
        h = 1,
        i = arguments.length,
        j = !1
      for (
        "boolean" == typeof g && ((j = g), (g = arguments[h] || {}), h++),
          "object" == typeof g || la.isFunction(g) || (g = {}),
          h === i && ((g = this), h--);
        h < i;
        h++
      )
        if (null != (a = arguments[h]))
          for (b in a)
            (c = g[b]),
              (d = a[b]),
              g !== d &&
                (j && d && (la.isPlainObject(d) || (e = la.isArray(d)))
                  ? (e
                      ? ((e = !1), (f = c && la.isArray(c) ? c : []))
                      : (f = c && la.isPlainObject(c) ? c : {}),
                    (g[b] = la.extend(j, f, d)))
                  : void 0 !== d && (g[b] = d))
      return g
    }),
    la.extend({
      expando: "jQuery" + ("3.1.0" + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function (a) {
        throw new Error(a)
      },
      noop: function () {},
      isFunction: function (a) {
        return "function" === la.type(a)
      },
      isArray: Array.isArray,
      isWindow: function (a) {
        return null != a && a === a.window
      },
      isNumeric: function (a) {
        var b = la.type(a)
        return ("number" === b || "string" === b) && !isNaN(a - parseFloat(a))
      },
      isPlainObject: function (a) {
        var b, c
        return !(
          !a ||
          "[object Object]" !== ga.call(a) ||
          ((b = aa(a)) &&
            ("function" !=
              typeof (c = ha.call(b, "constructor") && b.constructor) ||
              ia.call(c) !== ja))
        )
      },
      isEmptyObject: function (a) {
        var b
        for (b in a) return !1
        return !0
      },
      type: function (a) {
        return null == a
          ? a + ""
          : "object" == typeof a || "function" == typeof a
          ? fa[ga.call(a)] || "object"
          : typeof a
      },
      globalEval: function (a) {
        c(a)
      },
      camelCase: function (a) {
        return a.replace(/^-ms-/, "ms-").replace(/-([a-z])/g, ma)
      },
      nodeName: function (a, b) {
        return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
      },
      each: function (a, b) {
        var c,
          e = 0
        if (d(a))
          for (c = a.length; e < c && !1 !== b.call(a[e], e, a[e]); e++);
        else for (e in a) if (!1 === b.call(a[e], e, a[e])) break
        return a
      },
      trim: function (a) {
        return null == a
          ? ""
          : (a + "").replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
      },
      makeArray: function (a, b) {
        var c = b || []
        return (
          null != a &&
            (d(Object(a))
              ? la.merge(c, "string" == typeof a ? [a] : a)
              : da.call(c, a)),
          c
        )
      },
      inArray: function (a, b, c) {
        return null == b ? -1 : ea.call(b, a, c)
      },
      merge: function (a, b) {
        for (var c = +b.length, d = 0, e = a.length; d < c; d++) a[e++] = b[d]
        return (a.length = e), a
      },
      grep: function (a, b, c) {
        for (var d = [], e = 0, f = a.length, g = !c; e < f; e++)
          !b(a[e], e) !== g && d.push(a[e])
        return d
      },
      map: function (a, b, c) {
        var e,
          f,
          g = 0,
          h = []
        if (d(a))
          for (e = a.length; g < e; g++)
            null != (f = b(a[g], g, c)) && h.push(f)
        else for (g in a) null != (f = b(a[g], g, c)) && h.push(f)
        return ca.apply([], h)
      },
      guid: 1,
      proxy: function (a, b) {
        var c, d, e
        if (
          ("string" == typeof b && ((c = a[b]), (b = a), (a = c)),
          la.isFunction(a))
        )
          return (
            (d = ba.call(arguments, 2)),
            (e = function () {
              return a.apply(b || this, d.concat(ba.call(arguments)))
            }),
            (e.guid = a.guid = a.guid || la.guid++),
            e
          )
      },
      now: Date.now,
      support: ka,
    }),
    "function" == typeof Symbol &&
      (la.fn[Symbol.iterator] = $[Symbol.iterator]),
    la.each(
      "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
        " "
      ),
      function (a, b) {
        fa["[object " + b + "]"] = b.toLowerCase()
      }
    )
  var na = (function (a) {
    function b(a, b, c, d) {
      var e,
        f,
        g,
        h,
        i,
        k,
        m,
        n = b && b.ownerDocument,
        o = b ? b.nodeType : 9
      if (
        ((c = c || []),
        "string" != typeof a || !a || (1 !== o && 9 !== o && 11 !== o))
      )
        return c
      if (
        !d &&
        ((b ? b.ownerDocument || b : N) !== F && E(b), (b = b || F), H)
      ) {
        if (11 !== o && (i = pa.exec(a)))
          if ((e = i[1])) {
            if (9 === o) {
              if (!(g = b.getElementById(e))) return c
              if (g.id === e) return c.push(g), c
            } else if (n && (g = n.getElementById(e)) && L(b, g) && g.id === e)
              return c.push(g), c
          } else {
            if (i[2]) return Y.apply(c, b.getElementsByTagName(a)), c
            if (
              (e = i[3]) &&
              u.getElementsByClassName &&
              b.getElementsByClassName
            )
              return Y.apply(c, b.getElementsByClassName(e)), c
          }
        if (u.qsa && !S[a + " "] && (!I || !I.test(a))) {
          if (1 !== o) (n = b), (m = a)
          else if ("object" !== b.nodeName.toLowerCase()) {
            for (
              (h = b.getAttribute("id"))
                ? (h = h.replace(ta, ua))
                : b.setAttribute("id", (h = M)),
                k = y(a),
                f = k.length;
              f--;

            )
              k[f] = "#" + h + " " + l(k[f])
            ;(m = k.join(",")), (n = (qa.test(a) && j(b.parentNode)) || b)
          }
          if (m)
            try {
              return Y.apply(c, n.querySelectorAll(m)), c
            } catch (a) {
            } finally {
              h === M && b.removeAttribute("id")
            }
        }
      }
      return A(a.replace(fa, "$1"), b, c, d)
    }
    function c() {
      function a(c, d) {
        return (
          b.push(c + " ") > v.cacheLength && delete a[b.shift()],
          (a[c + " "] = d)
        )
      }
      var b = []
      return a
    }
    function d(a) {
      return (a[M] = !0), a
    }
    function e(a) {
      var b = F.createElement("fieldset")
      try {
        return !!a(b)
      } catch (a) {
        return !1
      } finally {
        b.parentNode && b.parentNode.removeChild(b), (b = null)
      }
    }
    function f(a, b) {
      for (var c = a.split("|"), d = c.length; d--; ) v.attrHandle[c[d]] = b
    }
    function g(a, b) {
      var c = b && a,
        d =
          c &&
          1 === a.nodeType &&
          1 === b.nodeType &&
          a.sourceIndex - b.sourceIndex
      if (d) return d
      if (c) for (; (c = c.nextSibling); ) if (c === b) return -1
      return a ? 1 : -1
    }
    function h(a) {
      return function (b) {
        return (
          ("label" in b && b.disabled === a) ||
          ("form" in b && b.disabled === a) ||
          ("form" in b &&
            !1 === b.disabled &&
            (b.isDisabled === a ||
              (b.isDisabled !== !a && ("label" in b || !wa(b)) !== a)))
        )
      }
    }
    function i(a) {
      return d(function (b) {
        return (
          (b = +b),
          d(function (c, d) {
            for (var e, f = a([], c.length, b), g = f.length; g--; )
              c[(e = f[g])] && (c[e] = !(d[e] = c[e]))
          })
        )
      })
    }
    function j(a) {
      return a && void 0 !== a.getElementsByTagName && a
    }
    function k() {}
    function l(a) {
      for (var b = 0, c = a.length, d = ""; b < c; b++) d += a[b].value
      return d
    }
    function m(a, b, c) {
      var d = b.dir,
        e = b.next,
        f = e || d,
        g = c && "parentNode" === f,
        h = P++
      return b.first
        ? function (b, c, e) {
            for (; (b = b[d]); ) if (1 === b.nodeType || g) return a(b, c, e)
          }
        : function (b, c, i) {
            var j,
              k,
              l,
              m = [O, h]
            if (i) {
              for (; (b = b[d]); )
                if ((1 === b.nodeType || g) && a(b, c, i)) return !0
            } else
              for (; (b = b[d]); )
                if (1 === b.nodeType || g)
                  if (
                    ((l = b[M] || (b[M] = {})),
                    (k = l[b.uniqueID] || (l[b.uniqueID] = {})),
                    e && e === b.nodeName.toLowerCase())
                  )
                    b = b[d] || b
                  else {
                    if ((j = k[f]) && j[0] === O && j[1] === h)
                      return (m[2] = j[2])
                    if (((k[f] = m), (m[2] = a(b, c, i)))) return !0
                  }
          }
    }
    function n(a) {
      return a.length > 1
        ? function (b, c, d) {
            for (var e = a.length; e--; ) if (!a[e](b, c, d)) return !1
            return !0
          }
        : a[0]
    }
    function o(a, c, d) {
      for (var e = 0, f = c.length; e < f; e++) b(a, c[e], d)
      return d
    }
    function p(a, b, c, d, e) {
      for (var f, g = [], h = 0, i = a.length, j = null != b; h < i; h++)
        (f = a[h]) && ((c && !c(f, d, e)) || (g.push(f), j && b.push(h)))
      return g
    }
    function q(a, b, c, e, f, g) {
      return (
        e && !e[M] && (e = q(e)),
        f && !f[M] && (f = q(f, g)),
        d(function (d, g, h, i) {
          var j,
            k,
            l,
            m = [],
            n = [],
            q = g.length,
            r = d || o(b || "*", h.nodeType ? [h] : h, []),
            s = !a || (!d && b) ? r : p(r, m, a, h, i),
            t = c ? (f || (d ? a : q || e) ? [] : g) : s
          if ((c && c(s, t, h, i), e))
            for (j = p(t, n), e(j, [], h, i), k = j.length; k--; )
              (l = j[k]) && (t[n[k]] = !(s[n[k]] = l))
          if (d) {
            if (f || a) {
              if (f) {
                for (j = [], k = t.length; k--; )
                  (l = t[k]) && j.push((s[k] = l))
                f(null, (t = []), j, i)
              }
              for (k = t.length; k--; )
                (l = t[k]) &&
                  (j = f ? $(d, l) : m[k]) > -1 &&
                  (d[j] = !(g[j] = l))
            }
          } else (t = p(t === g ? t.splice(q, t.length) : t)), f ? f(null, g, t, i) : Y.apply(g, t)
        })
      )
    }
    function r(a) {
      for (
        var b,
          c,
          d,
          e = a.length,
          f = v.relative[a[0].type],
          g = f || v.relative[" "],
          h = f ? 1 : 0,
          i = m(
            function (a) {
              return a === b
            },
            g,
            !0
          ),
          j = m(
            function (a) {
              return $(b, a) > -1
            },
            g,
            !0
          ),
          k = [
            function (a, c, d) {
              var e =
                (!f && (d || c !== B)) ||
                ((b = c).nodeType ? i(a, c, d) : j(a, c, d))
              return (b = null), e
            },
          ];
        h < e;
        h++
      )
        if ((c = v.relative[a[h].type])) k = [m(n(k), c)]
        else {
          if (((c = v.filter[a[h].type].apply(null, a[h].matches)), c[M])) {
            for (d = ++h; d < e && !v.relative[a[d].type]; d++);
            return q(
              h > 1 && n(k),
              h > 1 &&
                l(
                  a
                    .slice(0, h - 1)
                    .concat({ value: " " === a[h - 2].type ? "*" : "" })
                ).replace(fa, "$1"),
              c,
              h < d && r(a.slice(h, d)),
              d < e && r((a = a.slice(d))),
              d < e && l(a)
            )
          }
          k.push(c)
        }
      return n(k)
    }
    function s(a, c) {
      var e = c.length > 0,
        f = a.length > 0,
        g = function (d, g, h, i, j) {
          var k,
            l,
            m,
            n = 0,
            o = "0",
            q = d && [],
            r = [],
            s = B,
            t = d || (f && v.find.TAG("*", j)),
            u = (O += null == s ? 1 : Math.random() || 0.1),
            w = t.length
          for (
            j && (B = g === F || g || j);
            o !== w && null != (k = t[o]);
            o++
          ) {
            if (f && k) {
              for (
                l = 0, g || k.ownerDocument === F || (E(k), (h = !H));
                (m = a[l++]);

              )
                if (m(k, g || F, h)) {
                  i.push(k)
                  break
                }
              j && (O = u)
            }
            e && ((k = !m && k) && n--, d && q.push(k))
          }
          if (((n += o), e && o !== n)) {
            for (l = 0; (m = c[l++]); ) m(q, r, g, h)
            if (d) {
              if (n > 0) for (; o--; ) q[o] || r[o] || (r[o] = W.call(i))
              r = p(r)
            }
            Y.apply(i, r),
              j && !d && r.length > 0 && n + c.length > 1 && b.uniqueSort(i)
          }
          return j && ((O = u), (B = s)), q
        }
      return e ? d(g) : g
    }
    var t,
      u,
      v,
      w,
      x,
      y,
      z,
      A,
      B,
      C,
      D,
      E,
      F,
      G,
      H,
      I,
      J,
      K,
      L,
      M = "sizzle" + 1 * new Date(),
      N = a.document,
      O = 0,
      P = 0,
      Q = c(),
      R = c(),
      S = c(),
      T = function (a, b) {
        return a === b && (D = !0), 0
      },
      U = {}.hasOwnProperty,
      V = [],
      W = V.pop,
      X = V.push,
      Y = V.push,
      Z = V.slice,
      $ = function (a, b) {
        for (var c = 0, d = a.length; c < d; c++) if (a[c] === b) return c
        return -1
      },
      _ =
        "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
      aa = "[\\x20\\t\\r\\n\\f]",
      ba = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
      ca =
        "\\[" +
        aa +
        "*(" +
        ba +
        ")(?:" +
        aa +
        "*([*^$|!~]?=)" +
        aa +
        "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
        ba +
        "))|)" +
        aa +
        "*\\]",
      da =
        ":(" +
        ba +
        ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
        ca +
        ")*)|.*)\\)|)",
      ea = new RegExp(aa + "+", "g"),
      fa = new RegExp(
        "^" + aa + "+|((?:^|[^\\\\])(?:\\\\.)*)" + aa + "+$",
        "g"
      ),
      ga = new RegExp("^" + aa + "*," + aa + "*"),
      ha = new RegExp("^" + aa + "*([>+~]|" + aa + ")" + aa + "*"),
      ia = new RegExp("=" + aa + "*([^\\]'\"]*?)" + aa + "*\\]", "g"),
      ja = new RegExp(da),
      ka = new RegExp("^" + ba + "$"),
      la = {
        ID: new RegExp("^#(" + ba + ")"),
        CLASS: new RegExp("^\\.(" + ba + ")"),
        TAG: new RegExp("^(" + ba + "|[*])"),
        ATTR: new RegExp("^" + ca),
        PSEUDO: new RegExp("^" + da),
        CHILD: new RegExp(
          "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
            aa +
            "*(even|odd|(([+-]|)(\\d*)n|)" +
            aa +
            "*(?:([+-]|)" +
            aa +
            "*(\\d+)|))" +
            aa +
            "*\\)|)",
          "i"
        ),
        bool: new RegExp("^(?:" + _ + ")$", "i"),
        needsContext: new RegExp(
          "^" +
            aa +
            "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
            aa +
            "*((?:-\\d)?\\d*)" +
            aa +
            "*\\)|)(?=[^-]|$)",
          "i"
        ),
      },
      ma = /^(?:input|select|textarea|button)$/i,
      na = /^h\d$/i,
      oa = /^[^{]+\{\s*\[native \w/,
      pa = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      qa = /[+~]/,
      ra = new RegExp("\\\\([\\da-f]{1,6}" + aa + "?|(" + aa + ")|.)", "ig"),
      sa = function (a, b, c) {
        var d = "0x" + b - 65536
        return d !== d || c
          ? b
          : d < 0
          ? String.fromCharCode(d + 65536)
          : String.fromCharCode((d >> 10) | 55296, (1023 & d) | 56320)
      },
      ta = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g,
      ua = function (a, b) {
        return b
          ? "\0" === a
            ? "�"
            : a.slice(0, -1) +
              "\\" +
              a.charCodeAt(a.length - 1).toString(16) +
              " "
          : "\\" + a
      },
      va = function () {
        E()
      },
      wa = m(
        function (a) {
          return !0 === a.disabled
        },
        { dir: "parentNode", next: "legend" }
      )
    try {
      Y.apply((V = Z.call(N.childNodes)), N.childNodes),
        V[N.childNodes.length].nodeType
    } catch (a) {
      Y = {
        apply: V.length
          ? function (a, b) {
              X.apply(a, Z.call(b))
            }
          : function (a, b) {
              for (var c = a.length, d = 0; (a[c++] = b[d++]); );
              a.length = c - 1
            },
      }
    }
    ;(u = b.support = {}),
      (x = b.isXML = function (a) {
        var b = a && (a.ownerDocument || a).documentElement
        return !!b && "HTML" !== b.nodeName
      }),
      (E = b.setDocument = function (a) {
        var b,
          c,
          d = a ? a.ownerDocument || a : N
        return d !== F && 9 === d.nodeType && d.documentElement
          ? ((F = d),
            (G = F.documentElement),
            (H = !x(F)),
            N !== F &&
              (c = F.defaultView) &&
              c.top !== c &&
              (c.addEventListener
                ? c.addEventListener("unload", va, !1)
                : c.attachEvent && c.attachEvent("onunload", va)),
            (u.attributes = e(function (a) {
              return (a.className = "i"), !a.getAttribute("className")
            })),
            (u.getElementsByTagName = e(function (a) {
              return (
                a.appendChild(F.createComment("")),
                !a.getElementsByTagName("*").length
              )
            })),
            (u.getElementsByClassName = oa.test(F.getElementsByClassName)),
            (u.getById = e(function (a) {
              return (
                (G.appendChild(a).id = M),
                !F.getElementsByName || !F.getElementsByName(M).length
              )
            })),
            u.getById
              ? ((v.find.ID = function (a, b) {
                  if (void 0 !== b.getElementById && H) {
                    var c = b.getElementById(a)
                    return c ? [c] : []
                  }
                }),
                (v.filter.ID = function (a) {
                  var b = a.replace(ra, sa)
                  return function (a) {
                    return a.getAttribute("id") === b
                  }
                }))
              : (delete v.find.ID,
                (v.filter.ID = function (a) {
                  var b = a.replace(ra, sa)
                  return function (a) {
                    var c =
                      void 0 !== a.getAttributeNode && a.getAttributeNode("id")
                    return c && c.value === b
                  }
                })),
            (v.find.TAG = u.getElementsByTagName
              ? function (a, b) {
                  return void 0 !== b.getElementsByTagName
                    ? b.getElementsByTagName(a)
                    : u.qsa
                    ? b.querySelectorAll(a)
                    : void 0
                }
              : function (a, b) {
                  var c,
                    d = [],
                    e = 0,
                    f = b.getElementsByTagName(a)
                  if ("*" === a) {
                    for (; (c = f[e++]); ) 1 === c.nodeType && d.push(c)
                    return d
                  }
                  return f
                }),
            (v.find.CLASS =
              u.getElementsByClassName &&
              function (a, b) {
                if (void 0 !== b.getElementsByClassName && H)
                  return b.getElementsByClassName(a)
              }),
            (J = []),
            (I = []),
            (u.qsa = oa.test(F.querySelectorAll)) &&
              (e(function (a) {
                ;(G.appendChild(a).innerHTML =
                  "<a id='" +
                  M +
                  "'></a><select id='" +
                  M +
                  "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                  a.querySelectorAll("[msallowcapture^='']").length &&
                    I.push("[*^$]=" + aa + "*(?:''|\"\")"),
                  a.querySelectorAll("[selected]").length ||
                    I.push("\\[" + aa + "*(?:value|" + _ + ")"),
                  a.querySelectorAll("[id~=" + M + "-]").length || I.push("~="),
                  a.querySelectorAll(":checked").length || I.push(":checked"),
                  a.querySelectorAll("a#" + M + "+*").length ||
                    I.push(".#.+[+~]")
              }),
              e(function (a) {
                a.innerHTML =
                  "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>"
                var b = F.createElement("input")
                b.setAttribute("type", "hidden"),
                  a.appendChild(b).setAttribute("name", "D"),
                  a.querySelectorAll("[name=d]").length &&
                    I.push("name" + aa + "*[*^$|!~]?="),
                  2 !== a.querySelectorAll(":enabled").length &&
                    I.push(":enabled", ":disabled"),
                  (G.appendChild(a).disabled = !0),
                  2 !== a.querySelectorAll(":disabled").length &&
                    I.push(":enabled", ":disabled"),
                  a.querySelectorAll("*,:x"),
                  I.push(",.*:")
              })),
            (u.matchesSelector = oa.test(
              (K =
                G.matches ||
                G.webkitMatchesSelector ||
                G.mozMatchesSelector ||
                G.oMatchesSelector ||
                G.msMatchesSelector)
            )) &&
              e(function (a) {
                ;(u.disconnectedMatch = K.call(a, "*")),
                  K.call(a, "[s!='']:x"),
                  J.push("!=", da)
              }),
            (I = I.length && new RegExp(I.join("|"))),
            (J = J.length && new RegExp(J.join("|"))),
            (b = oa.test(G.compareDocumentPosition)),
            (L =
              b || oa.test(G.contains)
                ? function (a, b) {
                    var c = 9 === a.nodeType ? a.documentElement : a,
                      d = b && b.parentNode
                    return (
                      a === d ||
                      !(
                        !d ||
                        1 !== d.nodeType ||
                        !(c.contains
                          ? c.contains(d)
                          : a.compareDocumentPosition &&
                            16 & a.compareDocumentPosition(d))
                      )
                    )
                  }
                : function (a, b) {
                    if (b) for (; (b = b.parentNode); ) if (b === a) return !0
                    return !1
                  }),
            (T = b
              ? function (a, b) {
                  if (a === b) return (D = !0), 0
                  var c =
                    !a.compareDocumentPosition - !b.compareDocumentPosition
                  return (
                    c ||
                    ((c =
                      (a.ownerDocument || a) === (b.ownerDocument || b)
                        ? a.compareDocumentPosition(b)
                        : 1),
                    1 & c ||
                    (!u.sortDetached && b.compareDocumentPosition(a) === c)
                      ? a === F || (a.ownerDocument === N && L(N, a))
                        ? -1
                        : b === F || (b.ownerDocument === N && L(N, b))
                        ? 1
                        : C
                        ? $(C, a) - $(C, b)
                        : 0
                      : 4 & c
                      ? -1
                      : 1)
                  )
                }
              : function (a, b) {
                  if (a === b) return (D = !0), 0
                  var c,
                    d = 0,
                    e = a.parentNode,
                    f = b.parentNode,
                    h = [a],
                    i = [b]
                  if (!e || !f)
                    return a === F
                      ? -1
                      : b === F
                      ? 1
                      : e
                      ? -1
                      : f
                      ? 1
                      : C
                      ? $(C, a) - $(C, b)
                      : 0
                  if (e === f) return g(a, b)
                  for (c = a; (c = c.parentNode); ) h.unshift(c)
                  for (c = b; (c = c.parentNode); ) i.unshift(c)
                  for (; h[d] === i[d]; ) d++
                  return d
                    ? g(h[d], i[d])
                    : h[d] === N
                    ? -1
                    : i[d] === N
                    ? 1
                    : 0
                }),
            F)
          : F
      }),
      (b.matches = function (a, c) {
        return b(a, null, null, c)
      }),
      (b.matchesSelector = function (a, c) {
        if (
          ((a.ownerDocument || a) !== F && E(a),
          (c = c.replace(ia, "='$1']")),
          u.matchesSelector &&
            H &&
            !S[c + " "] &&
            (!J || !J.test(c)) &&
            (!I || !I.test(c)))
        )
          try {
            var d = K.call(a, c)
            if (
              d ||
              u.disconnectedMatch ||
              (a.document && 11 !== a.document.nodeType)
            )
              return d
          } catch (a) {}
        return b(c, F, null, [a]).length > 0
      }),
      (b.contains = function (a, b) {
        return (a.ownerDocument || a) !== F && E(a), L(a, b)
      }),
      (b.attr = function (a, b) {
        ;(a.ownerDocument || a) !== F && E(a)
        var c = v.attrHandle[b.toLowerCase()],
          d = c && U.call(v.attrHandle, b.toLowerCase()) ? c(a, b, !H) : void 0
        return void 0 !== d
          ? d
          : u.attributes || !H
          ? a.getAttribute(b)
          : (d = a.getAttributeNode(b)) && d.specified
          ? d.value
          : null
      }),
      (b.escape = function (a) {
        return (a + "").replace(ta, ua)
      }),
      (b.error = function (a) {
        throw new Error("Syntax error, unrecognized expression: " + a)
      }),
      (b.uniqueSort = function (a) {
        var b,
          c = [],
          d = 0,
          e = 0
        if (
          ((D = !u.detectDuplicates),
          (C = !u.sortStable && a.slice(0)),
          a.sort(T),
          D)
        ) {
          for (; (b = a[e++]); ) b === a[e] && (d = c.push(e))
          for (; d--; ) a.splice(c[d], 1)
        }
        return (C = null), a
      }),
      (w = b.getText = function (a) {
        var b,
          c = "",
          d = 0,
          e = a.nodeType
        if (e) {
          if (1 === e || 9 === e || 11 === e) {
            if ("string" == typeof a.textContent) return a.textContent
            for (a = a.firstChild; a; a = a.nextSibling) c += w(a)
          } else if (3 === e || 4 === e) return a.nodeValue
        } else for (; (b = a[d++]); ) c += w(b)
        return c
      }),
      (v = b.selectors = {
        cacheLength: 50,
        createPseudo: d,
        match: la,
        attrHandle: {},
        find: {},
        relative: {
          ">": { dir: "parentNode", first: !0 },
          " ": { dir: "parentNode" },
          "+": { dir: "previousSibling", first: !0 },
          "~": { dir: "previousSibling" },
        },
        preFilter: {
          ATTR: function (a) {
            return (
              (a[1] = a[1].replace(ra, sa)),
              (a[3] = (a[3] || a[4] || a[5] || "").replace(ra, sa)),
              "~=" === a[2] && (a[3] = " " + a[3] + " "),
              a.slice(0, 4)
            )
          },
          CHILD: function (a) {
            return (
              (a[1] = a[1].toLowerCase()),
              "nth" === a[1].slice(0, 3)
                ? (a[3] || b.error(a[0]),
                  (a[4] = +(a[4]
                    ? a[5] + (a[6] || 1)
                    : 2 * ("even" === a[3] || "odd" === a[3]))),
                  (a[5] = +(a[7] + a[8] || "odd" === a[3])))
                : a[3] && b.error(a[0]),
              a
            )
          },
          PSEUDO: function (a) {
            var b,
              c = !a[6] && a[2]
            return la.CHILD.test(a[0])
              ? null
              : (a[3]
                  ? (a[2] = a[4] || a[5] || "")
                  : c &&
                    ja.test(c) &&
                    (b = y(c, !0)) &&
                    (b = c.indexOf(")", c.length - b) - c.length) &&
                    ((a[0] = a[0].slice(0, b)), (a[2] = c.slice(0, b))),
                a.slice(0, 3))
          },
        },
        filter: {
          TAG: function (a) {
            var b = a.replace(ra, sa).toLowerCase()
            return "*" === a
              ? function () {
                  return !0
                }
              : function (a) {
                  return a.nodeName && a.nodeName.toLowerCase() === b
                }
          },
          CLASS: function (a) {
            var b = Q[a + " "]
            return (
              b ||
              ((b = new RegExp("(^|" + aa + ")" + a + "(" + aa + "|$)")) &&
                Q(a, function (a) {
                  return b.test(
                    ("string" == typeof a.className && a.className) ||
                      (void 0 !== a.getAttribute && a.getAttribute("class")) ||
                      ""
                  )
                }))
            )
          },
          ATTR: function (a, c, d) {
            return function (e) {
              var f = b.attr(e, a)
              return null == f
                ? "!=" === c
                : !c ||
                    ((f += ""),
                    "=" === c
                      ? f === d
                      : "!=" === c
                      ? f !== d
                      : "^=" === c
                      ? d && 0 === f.indexOf(d)
                      : "*=" === c
                      ? d && f.indexOf(d) > -1
                      : "$=" === c
                      ? d && f.slice(-d.length) === d
                      : "~=" === c
                      ? (" " + f.replace(ea, " ") + " ").indexOf(d) > -1
                      : "|=" === c &&
                        (f === d || f.slice(0, d.length + 1) === d + "-"))
            }
          },
          CHILD: function (a, b, c, d, e) {
            var f = "nth" !== a.slice(0, 3),
              g = "last" !== a.slice(-4),
              h = "of-type" === b
            return 1 === d && 0 === e
              ? function (a) {
                  return !!a.parentNode
                }
              : function (b, c, i) {
                  var j,
                    k,
                    l,
                    m,
                    n,
                    o,
                    p = f !== g ? "nextSibling" : "previousSibling",
                    q = b.parentNode,
                    r = h && b.nodeName.toLowerCase(),
                    s = !i && !h,
                    t = !1
                  if (q) {
                    if (f) {
                      for (; p; ) {
                        for (m = b; (m = m[p]); )
                          if (
                            h
                              ? m.nodeName.toLowerCase() === r
                              : 1 === m.nodeType
                          )
                            return !1
                        o = p = "only" === a && !o && "nextSibling"
                      }
                      return !0
                    }
                    if (((o = [g ? q.firstChild : q.lastChild]), g && s)) {
                      for (
                        m = q,
                          l = m[M] || (m[M] = {}),
                          k = l[m.uniqueID] || (l[m.uniqueID] = {}),
                          j = k[a] || [],
                          n = j[0] === O && j[1],
                          t = n && j[2],
                          m = n && q.childNodes[n];
                        (m = (++n && m && m[p]) || (t = n = 0) || o.pop());

                      )
                        if (1 === m.nodeType && ++t && m === b) {
                          k[a] = [O, n, t]
                          break
                        }
                    } else if (
                      (s &&
                        ((m = b),
                        (l = m[M] || (m[M] = {})),
                        (k = l[m.uniqueID] || (l[m.uniqueID] = {})),
                        (j = k[a] || []),
                        (n = j[0] === O && j[1]),
                        (t = n)),
                      !1 === t)
                    )
                      for (
                        ;
                        (m = (++n && m && m[p]) || (t = n = 0) || o.pop()) &&
                        ((h
                          ? m.nodeName.toLowerCase() !== r
                          : 1 !== m.nodeType) ||
                          !++t ||
                          (s &&
                            ((l = m[M] || (m[M] = {})),
                            (k = l[m.uniqueID] || (l[m.uniqueID] = {})),
                            (k[a] = [O, t])),
                          m !== b));

                      );
                    return (t -= e) === d || (t % d == 0 && t / d >= 0)
                  }
                }
          },
          PSEUDO: function (a, c) {
            var e,
              f =
                v.pseudos[a] ||
                v.setFilters[a.toLowerCase()] ||
                b.error("unsupported pseudo: " + a)
            return f[M]
              ? f(c)
              : f.length > 1
              ? ((e = [a, a, "", c]),
                v.setFilters.hasOwnProperty(a.toLowerCase())
                  ? d(function (a, b) {
                      for (var d, e = f(a, c), g = e.length; g--; )
                        (d = $(a, e[g])), (a[d] = !(b[d] = e[g]))
                    })
                  : function (a) {
                      return f(a, 0, e)
                    })
              : f
          },
        },
        pseudos: {
          not: d(function (a) {
            var b = [],
              c = [],
              e = z(a.replace(fa, "$1"))
            return e[M]
              ? d(function (a, b, c, d) {
                  for (var f, g = e(a, null, d, []), h = a.length; h--; )
                    (f = g[h]) && (a[h] = !(b[h] = f))
                })
              : function (a, d, f) {
                  return (b[0] = a), e(b, null, f, c), (b[0] = null), !c.pop()
                }
          }),
          has: d(function (a) {
            return function (c) {
              return b(a, c).length > 0
            }
          }),
          contains: d(function (a) {
            return (
              (a = a.replace(ra, sa)),
              function (b) {
                return (b.textContent || b.innerText || w(b)).indexOf(a) > -1
              }
            )
          }),
          lang: d(function (a) {
            return (
              ka.test(a || "") || b.error("unsupported lang: " + a),
              (a = a.replace(ra, sa).toLowerCase()),
              function (b) {
                var c
                do {
                  if (
                    (c = H
                      ? b.lang
                      : b.getAttribute("xml:lang") || b.getAttribute("lang"))
                  )
                    return (
                      (c = c.toLowerCase()) === a || 0 === c.indexOf(a + "-")
                    )
                } while ((b = b.parentNode) && 1 === b.nodeType)
                return !1
              }
            )
          }),
          target: function (b) {
            var c = a.location && a.location.hash
            return c && c.slice(1) === b.id
          },
          root: function (a) {
            return a === G
          },
          focus: function (a) {
            return (
              a === F.activeElement &&
              (!F.hasFocus || F.hasFocus()) &&
              !!(a.type || a.href || ~a.tabIndex)
            )
          },
          enabled: h(!1),
          disabled: h(!0),
          checked: function (a) {
            var b = a.nodeName.toLowerCase()
            return (
              ("input" === b && !!a.checked) || ("option" === b && !!a.selected)
            )
          },
          selected: function (a) {
            return a.parentNode && a.parentNode.selectedIndex, !0 === a.selected
          },
          empty: function (a) {
            for (a = a.firstChild; a; a = a.nextSibling)
              if (a.nodeType < 6) return !1
            return !0
          },
          parent: function (a) {
            return !v.pseudos.empty(a)
          },
          header: function (a) {
            return na.test(a.nodeName)
          },
          input: function (a) {
            return ma.test(a.nodeName)
          },
          button: function (a) {
            var b = a.nodeName.toLowerCase()
            return ("input" === b && "button" === a.type) || "button" === b
          },
          text: function (a) {
            var b
            return (
              "input" === a.nodeName.toLowerCase() &&
              "text" === a.type &&
              (null == (b = a.getAttribute("type")) ||
                "text" === b.toLowerCase())
            )
          },
          first: i(function () {
            return [0]
          }),
          last: i(function (a, b) {
            return [b - 1]
          }),
          eq: i(function (a, b, c) {
            return [c < 0 ? c + b : c]
          }),
          even: i(function (a, b) {
            for (var c = 0; c < b; c += 2) a.push(c)
            return a
          }),
          odd: i(function (a, b) {
            for (var c = 1; c < b; c += 2) a.push(c)
            return a
          }),
          lt: i(function (a, b, c) {
            for (var d = c < 0 ? c + b : c; --d >= 0; ) a.push(d)
            return a
          }),
          gt: i(function (a, b, c) {
            for (var d = c < 0 ? c + b : c; ++d < b; ) a.push(d)
            return a
          }),
        },
      }),
      (v.pseudos.nth = v.pseudos.eq)
    for (t in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 })
      v.pseudos[t] = (function (a) {
        return function (b) {
          return "input" === b.nodeName.toLowerCase() && b.type === a
        }
      })(t)
    for (t in { submit: !0, reset: !0 })
      v.pseudos[t] = (function (a) {
        return function (b) {
          var c = b.nodeName.toLowerCase()
          return ("input" === c || "button" === c) && b.type === a
        }
      })(t)
    return (
      (k.prototype = v.filters = v.pseudos),
      (v.setFilters = new k()),
      (y = b.tokenize = function (a, c) {
        var d,
          e,
          f,
          g,
          h,
          i,
          j,
          k = R[a + " "]
        if (k) return c ? 0 : k.slice(0)
        for (h = a, i = [], j = v.preFilter; h; ) {
          ;(d && !(e = ga.exec(h))) ||
            (e && (h = h.slice(e[0].length) || h), i.push((f = []))),
            (d = !1),
            (e = ha.exec(h)) &&
              ((d = e.shift()),
              f.push({ value: d, type: e[0].replace(fa, " ") }),
              (h = h.slice(d.length)))
          for (g in v.filter)
            !(e = la[g].exec(h)) ||
              (j[g] && !(e = j[g](e))) ||
              ((d = e.shift()),
              f.push({ value: d, type: g, matches: e }),
              (h = h.slice(d.length)))
          if (!d) break
        }
        return c ? h.length : h ? b.error(a) : R(a, i).slice(0)
      }),
      (z = b.compile = function (a, b) {
        var c,
          d = [],
          e = [],
          f = S[a + " "]
        if (!f) {
          for (b || (b = y(a)), c = b.length; c--; )
            (f = r(b[c])), f[M] ? d.push(f) : e.push(f)
          ;(f = S(a, s(e, d))), (f.selector = a)
        }
        return f
      }),
      (A = b.select = function (a, b, c, d) {
        var e,
          f,
          g,
          h,
          i,
          k = "function" == typeof a && a,
          m = !d && y((a = k.selector || a))
        if (((c = c || []), 1 === m.length)) {
          if (
            ((f = m[0] = m[0].slice(0)),
            f.length > 2 &&
              "ID" === (g = f[0]).type &&
              u.getById &&
              9 === b.nodeType &&
              H &&
              v.relative[f[1].type])
          ) {
            if (!(b = (v.find.ID(g.matches[0].replace(ra, sa), b) || [])[0]))
              return c
            k && (b = b.parentNode), (a = a.slice(f.shift().value.length))
          }
          for (
            e = la.needsContext.test(a) ? 0 : f.length;
            e-- && ((g = f[e]), !v.relative[(h = g.type)]);

          )
            if (
              (i = v.find[h]) &&
              (d = i(
                g.matches[0].replace(ra, sa),
                (qa.test(f[0].type) && j(b.parentNode)) || b
              ))
            ) {
              if ((f.splice(e, 1), !(a = d.length && l(f))))
                return Y.apply(c, d), c
              break
            }
        }
        return (
          (k || z(a, m))(
            d,
            b,
            !H,
            c,
            !b || (qa.test(a) && j(b.parentNode)) || b
          ),
          c
        )
      }),
      (u.sortStable = M.split("").sort(T).join("") === M),
      (u.detectDuplicates = !!D),
      E(),
      (u.sortDetached = e(function (a) {
        return 1 & a.compareDocumentPosition(F.createElement("fieldset"))
      })),
      e(function (a) {
        return (
          (a.innerHTML = "<a href='#'></a>"),
          "#" === a.firstChild.getAttribute("href")
        )
      }) ||
        f("type|href|height|width", function (a, b, c) {
          if (!c) return a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
        }),
      (u.attributes &&
        e(function (a) {
          return (
            (a.innerHTML = "<input/>"),
            a.firstChild.setAttribute("value", ""),
            "" === a.firstChild.getAttribute("value")
          )
        })) ||
        f("value", function (a, b, c) {
          if (!c && "input" === a.nodeName.toLowerCase()) return a.defaultValue
        }),
      e(function (a) {
        return null == a.getAttribute("disabled")
      }) ||
        f(_, function (a, b, c) {
          var d
          if (!c)
            return !0 === a[b]
              ? b.toLowerCase()
              : (d = a.getAttributeNode(b)) && d.specified
              ? d.value
              : null
        }),
      b
    )
  })(a)
  ;(la.find = na),
    (la.expr = na.selectors),
    (la.expr[":"] = la.expr.pseudos),
    (la.uniqueSort = la.unique = na.uniqueSort),
    (la.text = na.getText),
    (la.isXMLDoc = na.isXML),
    (la.contains = na.contains),
    (la.escapeSelector = na.escape)
  var oa = function (a, b, c) {
      for (var d = [], e = void 0 !== c; (a = a[b]) && 9 !== a.nodeType; )
        if (1 === a.nodeType) {
          if (e && la(a).is(c)) break
          d.push(a)
        }
      return d
    },
    pa = function (a, b) {
      for (var c = []; a; a = a.nextSibling)
        1 === a.nodeType && a !== b && c.push(a)
      return c
    },
    qa = la.expr.match.needsContext,
    ra = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
    sa = /^.[^:#\[\.,]*$/
  ;(la.filter = function (a, b, c) {
    var d = b[0]
    return (
      c && (a = ":not(" + a + ")"),
      1 === b.length && 1 === d.nodeType
        ? la.find.matchesSelector(d, a)
          ? [d]
          : []
        : la.find.matches(
            a,
            la.grep(b, function (a) {
              return 1 === a.nodeType
            })
          )
    )
  }),
    la.fn.extend({
      find: function (a) {
        var b,
          c,
          d = this.length,
          e = this
        if ("string" != typeof a)
          return this.pushStack(
            la(a).filter(function () {
              for (b = 0; b < d; b++) if (la.contains(e[b], this)) return !0
            })
          )
        for (c = this.pushStack([]), b = 0; b < d; b++) la.find(a, e[b], c)
        return d > 1 ? la.uniqueSort(c) : c
      },
      filter: function (a) {
        return this.pushStack(e(this, a || [], !1))
      },
      not: function (a) {
        return this.pushStack(e(this, a || [], !0))
      },
      is: function (a) {
        return !!e(
          this,
          "string" == typeof a && qa.test(a) ? la(a) : a || [],
          !1
        ).length
      },
    })
  var ta,
    ua = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/
  ;((la.fn.init = function (a, b, c) {
    var d, e
    if (!a) return this
    if (((c = c || ta), "string" == typeof a)) {
      if (
        !(d =
          "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3
            ? [null, a, null]
            : ua.exec(a)) ||
        (!d[1] && b)
      )
        return !b || b.jquery ? (b || c).find(a) : this.constructor(b).find(a)
      if (d[1]) {
        if (
          ((b = b instanceof la ? b[0] : b),
          la.merge(
            this,
            la.parseHTML(d[1], b && b.nodeType ? b.ownerDocument || b : _, !0)
          ),
          ra.test(d[1]) && la.isPlainObject(b))
        )
          for (d in b)
            la.isFunction(this[d]) ? this[d](b[d]) : this.attr(d, b[d])
        return this
      }
      return (
        (e = _.getElementById(d[2])),
        e && ((this[0] = e), (this.length = 1)),
        this
      )
    }
    return a.nodeType
      ? ((this[0] = a), (this.length = 1), this)
      : la.isFunction(a)
      ? void 0 !== c.ready
        ? c.ready(a)
        : a(la)
      : la.makeArray(a, this)
  }).prototype = la.fn),
    (ta = la(_))
  var va = /^(?:parents|prev(?:Until|All))/,
    wa = { children: !0, contents: !0, next: !0, prev: !0 }
  la.fn.extend({
    has: function (a) {
      var b = la(a, this),
        c = b.length
      return this.filter(function () {
        for (var a = 0; a < c; a++) if (la.contains(this, b[a])) return !0
      })
    },
    closest: function (a, b) {
      var c,
        d = 0,
        e = this.length,
        f = [],
        g = "string" != typeof a && la(a)
      if (!qa.test(a))
        for (; d < e; d++)
          for (c = this[d]; c && c !== b; c = c.parentNode)
            if (
              c.nodeType < 11 &&
              (g
                ? g.index(c) > -1
                : 1 === c.nodeType && la.find.matchesSelector(c, a))
            ) {
              f.push(c)
              break
            }
      return this.pushStack(f.length > 1 ? la.uniqueSort(f) : f)
    },
    index: function (a) {
      return a
        ? "string" == typeof a
          ? ea.call(la(a), this[0])
          : ea.call(this, a.jquery ? a[0] : a)
        : this[0] && this[0].parentNode
        ? this.first().prevAll().length
        : -1
    },
    add: function (a, b) {
      return this.pushStack(la.uniqueSort(la.merge(this.get(), la(a, b))))
    },
    addBack: function (a) {
      return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
    },
  }),
    la.each(
      {
        parent: function (a) {
          var b = a.parentNode
          return b && 11 !== b.nodeType ? b : null
        },
        parents: function (a) {
          return oa(a, "parentNode")
        },
        parentsUntil: function (a, b, c) {
          return oa(a, "parentNode", c)
        },
        next: function (a) {
          return f(a, "nextSibling")
        },
        prev: function (a) {
          return f(a, "previousSibling")
        },
        nextAll: function (a) {
          return oa(a, "nextSibling")
        },
        prevAll: function (a) {
          return oa(a, "previousSibling")
        },
        nextUntil: function (a, b, c) {
          return oa(a, "nextSibling", c)
        },
        prevUntil: function (a, b, c) {
          return oa(a, "previousSibling", c)
        },
        siblings: function (a) {
          return pa((a.parentNode || {}).firstChild, a)
        },
        children: function (a) {
          return pa(a.firstChild)
        },
        contents: function (a) {
          return a.contentDocument || la.merge([], a.childNodes)
        },
      },
      function (a, b) {
        la.fn[a] = function (c, d) {
          var e = la.map(this, b, c)
          return (
            "Until" !== a.slice(-5) && (d = c),
            d && "string" == typeof d && (e = la.filter(d, e)),
            this.length > 1 &&
              (wa[a] || la.uniqueSort(e), va.test(a) && e.reverse()),
            this.pushStack(e)
          )
        }
      }
    )
  var xa = /\S+/g
  ;(la.Callbacks = function (a) {
    a = "string" == typeof a ? g(a) : la.extend({}, a)
    var b,
      c,
      d,
      e,
      f = [],
      h = [],
      i = -1,
      j = function () {
        for (e = a.once, d = b = !0; h.length; i = -1)
          for (c = h.shift(); ++i < f.length; )
            !1 === f[i].apply(c[0], c[1]) &&
              a.stopOnFalse &&
              ((i = f.length), (c = !1))
        a.memory || (c = !1), (b = !1), e && (f = c ? [] : "")
      },
      k = {
        add: function () {
          return (
            f &&
              (c && !b && ((i = f.length - 1), h.push(c)),
              (function b(c) {
                la.each(c, function (c, d) {
                  la.isFunction(d)
                    ? (a.unique && k.has(d)) || f.push(d)
                    : d && d.length && "string" !== la.type(d) && b(d)
                })
              })(arguments),
              c && !b && j()),
            this
          )
        },
        remove: function () {
          return (
            la.each(arguments, function (a, b) {
              for (var c; (c = la.inArray(b, f, c)) > -1; )
                f.splice(c, 1), c <= i && i--
            }),
            this
          )
        },
        has: function (a) {
          return a ? la.inArray(a, f) > -1 : f.length > 0
        },
        empty: function () {
          return f && (f = []), this
        },
        disable: function () {
          return (e = h = []), (f = c = ""), this
        },
        disabled: function () {
          return !f
        },
        lock: function () {
          return (e = h = []), c || b || (f = c = ""), this
        },
        locked: function () {
          return !!e
        },
        fireWith: function (a, c) {
          return (
            e ||
              ((c = c || []),
              (c = [a, c.slice ? c.slice() : c]),
              h.push(c),
              b || j()),
            this
          )
        },
        fire: function () {
          return k.fireWith(this, arguments), this
        },
        fired: function () {
          return !!d
        },
      }
    return k
  }),
    la.extend({
      Deferred: function (b) {
        var c = [
            [
              "notify",
              "progress",
              la.Callbacks("memory"),
              la.Callbacks("memory"),
              2,
            ],
            [
              "resolve",
              "done",
              la.Callbacks("once memory"),
              la.Callbacks("once memory"),
              0,
              "resolved",
            ],
            [
              "reject",
              "fail",
              la.Callbacks("once memory"),
              la.Callbacks("once memory"),
              1,
              "rejected",
            ],
          ],
          d = "pending",
          e = {
            state: function () {
              return d
            },
            always: function () {
              return f.done(arguments).fail(arguments), this
            },
            catch: function (a) {
              return e.then(null, a)
            },
            pipe: function () {
              var a = arguments
              return la
                .Deferred(function (b) {
                  la.each(c, function (c, d) {
                    var e = la.isFunction(a[d[4]]) && a[d[4]]
                    f[d[1]](function () {
                      var a = e && e.apply(this, arguments)
                      a && la.isFunction(a.promise)
                        ? a
                            .promise()
                            .progress(b.notify)
                            .done(b.resolve)
                            .fail(b.reject)
                        : b[d[0] + "With"](this, e ? [a] : arguments)
                    })
                  }),
                    (a = null)
                })
                .promise()
            },
            then: function (b, d, e) {
              function f(b, c, d, e) {
                return function () {
                  var j = this,
                    k = arguments,
                    l = function () {
                      var a, l
                      if (!(b < g)) {
                        if ((a = d.apply(j, k)) === c.promise())
                          throw new TypeError("Thenable self-resolution")
                        ;(l =
                          a &&
                          ("object" == typeof a || "function" == typeof a) &&
                          a.then),
                          la.isFunction(l)
                            ? e
                              ? l.call(a, f(g, c, h, e), f(g, c, i, e))
                              : (g++,
                                l.call(
                                  a,
                                  f(g, c, h, e),
                                  f(g, c, i, e),
                                  f(g, c, h, c.notifyWith)
                                ))
                            : (d !== h && ((j = void 0), (k = [a])),
                              (e || c.resolveWith)(j, k))
                      }
                    },
                    m = e
                      ? l
                      : function () {
                          try {
                            l()
                          } catch (a) {
                            la.Deferred.exceptionHook &&
                              la.Deferred.exceptionHook(a, m.stackTrace),
                              b + 1 >= g &&
                                (d !== i && ((j = void 0), (k = [a])),
                                c.rejectWith(j, k))
                          }
                        }
                  b
                    ? m()
                    : (la.Deferred.getStackHook &&
                        (m.stackTrace = la.Deferred.getStackHook()),
                      a.setTimeout(m))
                }
              }
              var g = 0
              return la
                .Deferred(function (a) {
                  c[0][3].add(f(0, a, la.isFunction(e) ? e : h, a.notifyWith)),
                    c[1][3].add(f(0, a, la.isFunction(b) ? b : h)),
                    c[2][3].add(f(0, a, la.isFunction(d) ? d : i))
                })
                .promise()
            },
            promise: function (a) {
              return null != a ? la.extend(a, e) : e
            },
          },
          f = {}
        return (
          la.each(c, function (a, b) {
            var g = b[2],
              h = b[5]
            ;(e[b[1]] = g.add),
              h &&
                g.add(
                  function () {
                    d = h
                  },
                  c[3 - a][2].disable,
                  c[0][2].lock
                ),
              g.add(b[3].fire),
              (f[b[0]] = function () {
                return (
                  f[b[0] + "With"](this === f ? void 0 : this, arguments), this
                )
              }),
              (f[b[0] + "With"] = g.fireWith)
          }),
          e.promise(f),
          b && b.call(f, f),
          f
        )
      },
      when: function (a) {
        var b = arguments.length,
          c = b,
          d = Array(c),
          e = ba.call(arguments),
          f = la.Deferred(),
          g = function (a) {
            return function (c) {
              ;(d[a] = this),
                (e[a] = arguments.length > 1 ? ba.call(arguments) : c),
                --b || f.resolveWith(d, e)
            }
          }
        if (
          b <= 1 &&
          (j(a, f.done(g(c)).resolve, f.reject),
          "pending" === f.state() || la.isFunction(e[c] && e[c].then))
        )
          return f.then()
        for (; c--; ) j(e[c], g(c), f.reject)
        return f.promise()
      },
    })
  var ya = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/
  ;(la.Deferred.exceptionHook = function (b, c) {
    a.console &&
      a.console.warn &&
      b &&
      ya.test(b.name) &&
      a.console.warn("jQuery.Deferred exception: " + b.message, b.stack, c)
  }),
    (la.readyException = function (b) {
      a.setTimeout(function () {
        throw b
      })
    })
  var za = la.Deferred()
  ;(la.fn.ready = function (a) {
    return (
      za.then(a).catch(function (a) {
        la.readyException(a)
      }),
      this
    )
  }),
    la.extend({
      isReady: !1,
      readyWait: 1,
      holdReady: function (a) {
        a ? la.readyWait++ : la.ready(!0)
      },
      ready: function (a) {
        ;(!0 === a ? --la.readyWait : la.isReady) ||
          ((la.isReady = !0),
          (!0 !== a && --la.readyWait > 0) || za.resolveWith(_, [la]))
      },
    }),
    (la.ready.then = za.then),
    "complete" === _.readyState ||
    ("loading" !== _.readyState && !_.documentElement.doScroll)
      ? a.setTimeout(la.ready)
      : (_.addEventListener("DOMContentLoaded", k),
        a.addEventListener("load", k))
  var Aa = function (a, b, c, d, e, f, g) {
      var h = 0,
        i = a.length,
        j = null == c
      if ("object" === la.type(c)) {
        e = !0
        for (h in c) Aa(a, b, h, c[h], !0, f, g)
      } else if (
        void 0 !== d &&
        ((e = !0),
        la.isFunction(d) || (g = !0),
        j &&
          (g
            ? (b.call(a, d), (b = null))
            : ((j = b),
              (b = function (a, b, c) {
                return j.call(la(a), c)
              }))),
        b)
      )
        for (; h < i; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)))
      return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
    },
    Ba = function (a) {
      return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType
    }
  ;(l.uid = 1),
    (l.prototype = {
      cache: function (a) {
        var b = a[this.expando]
        return (
          b ||
            ((b = {}),
            Ba(a) &&
              (a.nodeType
                ? (a[this.expando] = b)
                : Object.defineProperty(a, this.expando, {
                    value: b,
                    configurable: !0,
                  }))),
          b
        )
      },
      set: function (a, b, c) {
        var d,
          e = this.cache(a)
        if ("string" == typeof b) e[la.camelCase(b)] = c
        else for (d in b) e[la.camelCase(d)] = b[d]
        return e
      },
      get: function (a, b) {
        return void 0 === b
          ? this.cache(a)
          : a[this.expando] && a[this.expando][la.camelCase(b)]
      },
      access: function (a, b, c) {
        return void 0 === b || (b && "string" == typeof b && void 0 === c)
          ? this.get(a, b)
          : (this.set(a, b, c), void 0 !== c ? c : b)
      },
      remove: function (a, b) {
        var c,
          d = a[this.expando]
        if (void 0 !== d) {
          if (void 0 !== b) {
            la.isArray(b)
              ? (b = b.map(la.camelCase))
              : ((b = la.camelCase(b)), (b = b in d ? [b] : b.match(xa) || [])),
              (c = b.length)
            for (; c--; ) delete d[b[c]]
          }
          ;(void 0 === b || la.isEmptyObject(d)) &&
            (a.nodeType ? (a[this.expando] = void 0) : delete a[this.expando])
        }
      },
      hasData: function (a) {
        var b = a[this.expando]
        return void 0 !== b && !la.isEmptyObject(b)
      },
    })
  var Ca = new l(),
    Da = new l(),
    Ea = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    Fa = /[A-Z]/g
  la.extend({
    hasData: function (a) {
      return Da.hasData(a) || Ca.hasData(a)
    },
    data: function (a, b, c) {
      return Da.access(a, b, c)
    },
    removeData: function (a, b) {
      Da.remove(a, b)
    },
    _data: function (a, b, c) {
      return Ca.access(a, b, c)
    },
    _removeData: function (a, b) {
      Ca.remove(a, b)
    },
  }),
    la.fn.extend({
      data: function (a, b) {
        var c,
          d,
          e,
          f = this[0],
          g = f && f.attributes
        if (void 0 === a) {
          if (
            this.length &&
            ((e = Da.get(f)), 1 === f.nodeType && !Ca.get(f, "hasDataAttrs"))
          ) {
            for (c = g.length; c--; )
              g[c] &&
                ((d = g[c].name),
                0 === d.indexOf("data-") &&
                  ((d = la.camelCase(d.slice(5))), m(f, d, e[d])))
            Ca.set(f, "hasDataAttrs", !0)
          }
          return e
        }
        return "object" == typeof a
          ? this.each(function () {
              Da.set(this, a)
            })
          : Aa(
              this,
              function (b) {
                var c
                if (f && void 0 === b) {
                  if (void 0 !== (c = Da.get(f, a))) return c
                  if (void 0 !== (c = m(f, a))) return c
                } else
                  this.each(function () {
                    Da.set(this, a, b)
                  })
              },
              null,
              b,
              arguments.length > 1,
              null,
              !0
            )
      },
      removeData: function (a) {
        return this.each(function () {
          Da.remove(this, a)
        })
      },
    }),
    la.extend({
      queue: function (a, b, c) {
        var d
        if (a)
          return (
            (b = (b || "fx") + "queue"),
            (d = Ca.get(a, b)),
            c &&
              (!d || la.isArray(c)
                ? (d = Ca.access(a, b, la.makeArray(c)))
                : d.push(c)),
            d || []
          )
      },
      dequeue: function (a, b) {
        b = b || "fx"
        var c = la.queue(a, b),
          d = c.length,
          e = c.shift(),
          f = la._queueHooks(a, b),
          g = function () {
            la.dequeue(a, b)
          }
        "inprogress" === e && ((e = c.shift()), d--),
          e &&
            ("fx" === b && c.unshift("inprogress"),
            delete f.stop,
            e.call(a, g, f)),
          !d && f && f.empty.fire()
      },
      _queueHooks: function (a, b) {
        var c = b + "queueHooks"
        return (
          Ca.get(a, c) ||
          Ca.access(a, c, {
            empty: la.Callbacks("once memory").add(function () {
              Ca.remove(a, [b + "queue", c])
            }),
          })
        )
      },
    }),
    la.fn.extend({
      queue: function (a, b) {
        var c = 2
        return (
          "string" != typeof a && ((b = a), (a = "fx"), c--),
          arguments.length < c
            ? la.queue(this[0], a)
            : void 0 === b
            ? this
            : this.each(function () {
                var c = la.queue(this, a, b)
                la._queueHooks(this, a),
                  "fx" === a && "inprogress" !== c[0] && la.dequeue(this, a)
              })
        )
      },
      dequeue: function (a) {
        return this.each(function () {
          la.dequeue(this, a)
        })
      },
      clearQueue: function (a) {
        return this.queue(a || "fx", [])
      },
      promise: function (a, b) {
        var c,
          d = 1,
          e = la.Deferred(),
          f = this,
          g = this.length,
          h = function () {
            --d || e.resolveWith(f, [f])
          }
        for (
          "string" != typeof a && ((b = a), (a = void 0)), a = a || "fx";
          g--;

        )
          (c = Ca.get(f[g], a + "queueHooks")) &&
            c.empty &&
            (d++, c.empty.add(h))
        return h(), e.promise(b)
      },
    })
  var Ga = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    Ha = new RegExp("^(?:([+-])=|)(" + Ga + ")([a-z%]*)$", "i"),
    Ia = ["Top", "Right", "Bottom", "Left"],
    Ja = function (a, b) {
      return (
        (a = b || a),
        "none" === a.style.display ||
          ("" === a.style.display &&
            la.contains(a.ownerDocument, a) &&
            "none" === la.css(a, "display"))
      )
    },
    Ka = function (a, b, c, d) {
      var e,
        f,
        g = {}
      for (f in b) (g[f] = a.style[f]), (a.style[f] = b[f])
      e = c.apply(a, d || [])
      for (f in b) a.style[f] = g[f]
      return e
    },
    La = {}
  la.fn.extend({
    show: function () {
      return p(this, !0)
    },
    hide: function () {
      return p(this)
    },
    toggle: function (a) {
      return "boolean" == typeof a
        ? a
          ? this.show()
          : this.hide()
        : this.each(function () {
            Ja(this) ? la(this).show() : la(this).hide()
          })
    },
  })
  var Ma = /^(?:checkbox|radio)$/i,
    Na = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
    Oa = /^$|\/(?:java|ecma)script/i,
    Pa = {
      option: [1, "<select multiple='multiple'>", "</select>"],
      thead: [1, "<table>", "</table>"],
      col: [2, "<table><colgroup>", "</colgroup></table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      _default: [0, "", ""],
    }
  ;(Pa.optgroup = Pa.option),
    (Pa.tbody = Pa.tfoot = Pa.colgroup = Pa.caption = Pa.thead),
    (Pa.th = Pa.td)
  var Qa = /<|&#?\w+;/
  !(function () {
    var a = _.createDocumentFragment(),
      b = a.appendChild(_.createElement("div")),
      c = _.createElement("input")
    c.setAttribute("type", "radio"),
      c.setAttribute("checked", "checked"),
      c.setAttribute("name", "t"),
      b.appendChild(c),
      (ka.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked),
      (b.innerHTML = "<textarea>x</textarea>"),
      (ka.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue)
  })()
  var Ra = _.documentElement,
    Sa = /^key/,
    Ta = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
    Ua = /^([^.]*)(?:\.(.+)|)/
  ;(la.event = {
    global: {},
    add: function (a, b, c, d, e) {
      var f,
        g,
        h,
        i,
        j,
        k,
        l,
        m,
        n,
        o,
        p,
        q = Ca.get(a)
      if (q)
        for (
          c.handler && ((f = c), (c = f.handler), (e = f.selector)),
            e && la.find.matchesSelector(Ra, e),
            c.guid || (c.guid = la.guid++),
            (i = q.events) || (i = q.events = {}),
            (g = q.handle) ||
              (g = q.handle = function (b) {
                return void 0 !== la && la.event.triggered !== b.type
                  ? la.event.dispatch.apply(a, arguments)
                  : void 0
              }),
            b = (b || "").match(xa) || [""],
            j = b.length;
          j--;

        )
          (h = Ua.exec(b[j]) || []),
            (n = p = h[1]),
            (o = (h[2] || "").split(".").sort()),
            n &&
              ((l = la.event.special[n] || {}),
              (n = (e ? l.delegateType : l.bindType) || n),
              (l = la.event.special[n] || {}),
              (k = la.extend(
                {
                  type: n,
                  origType: p,
                  data: d,
                  handler: c,
                  guid: c.guid,
                  selector: e,
                  needsContext: e && la.expr.match.needsContext.test(e),
                  namespace: o.join("."),
                },
                f
              )),
              (m = i[n]) ||
                ((m = i[n] = []),
                (m.delegateCount = 0),
                (l.setup && !1 !== l.setup.call(a, d, o, g)) ||
                  (a.addEventListener && a.addEventListener(n, g))),
              l.add &&
                (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)),
              e ? m.splice(m.delegateCount++, 0, k) : m.push(k),
              (la.event.global[n] = !0))
    },
    remove: function (a, b, c, d, e) {
      var f,
        g,
        h,
        i,
        j,
        k,
        l,
        m,
        n,
        o,
        p,
        q = Ca.hasData(a) && Ca.get(a)
      if (q && (i = q.events)) {
        for (b = (b || "").match(xa) || [""], j = b.length; j--; )
          if (
            ((h = Ua.exec(b[j]) || []),
            (n = p = h[1]),
            (o = (h[2] || "").split(".").sort()),
            n)
          ) {
            for (
              l = la.event.special[n] || {},
                n = (d ? l.delegateType : l.bindType) || n,
                m = i[n] || [],
                h =
                  h[2] &&
                  new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                g = f = m.length;
              f--;

            )
              (k = m[f]),
                (!e && p !== k.origType) ||
                  (c && c.guid !== k.guid) ||
                  (h && !h.test(k.namespace)) ||
                  (d && d !== k.selector && ("**" !== d || !k.selector)) ||
                  (m.splice(f, 1),
                  k.selector && m.delegateCount--,
                  l.remove && l.remove.call(a, k))
            g &&
              !m.length &&
              ((l.teardown && !1 !== l.teardown.call(a, o, q.handle)) ||
                la.removeEvent(a, n, q.handle),
              delete i[n])
          } else for (n in i) la.event.remove(a, n + b[j], c, d, !0)
        la.isEmptyObject(i) && Ca.remove(a, "handle events")
      }
    },
    dispatch: function (a) {
      var b,
        c,
        d,
        e,
        f,
        g,
        h = la.event.fix(a),
        i = new Array(arguments.length),
        j = (Ca.get(this, "events") || {})[h.type] || [],
        k = la.event.special[h.type] || {}
      for (i[0] = h, b = 1; b < arguments.length; b++) i[b] = arguments[b]
      if (
        ((h.delegateTarget = this),
        !k.preDispatch || !1 !== k.preDispatch.call(this, h))
      ) {
        for (
          g = la.event.handlers.call(this, h, j), b = 0;
          (e = g[b++]) && !h.isPropagationStopped();

        )
          for (
            h.currentTarget = e.elem, c = 0;
            (f = e.handlers[c++]) && !h.isImmediatePropagationStopped();

          )
            (h.rnamespace && !h.rnamespace.test(f.namespace)) ||
              ((h.handleObj = f),
              (h.data = f.data),
              void 0 !==
                (d = (
                  (la.event.special[f.origType] || {}).handle || f.handler
                ).apply(e.elem, i)) &&
                !1 === (h.result = d) &&
                (h.preventDefault(), h.stopPropagation()))
        return k.postDispatch && k.postDispatch.call(this, h), h.result
      }
    },
    handlers: function (a, b) {
      var c,
        d,
        e,
        f,
        g = [],
        h = b.delegateCount,
        i = a.target
      if (
        h &&
        i.nodeType &&
        ("click" !== a.type || isNaN(a.button) || a.button < 1)
      )
        for (; i !== this; i = i.parentNode || this)
          if (1 === i.nodeType && (!0 !== i.disabled || "click" !== a.type)) {
            for (d = [], c = 0; c < h; c++)
              (f = b[c]),
                (e = f.selector + " "),
                void 0 === d[e] &&
                  (d[e] = f.needsContext
                    ? la(e, this).index(i) > -1
                    : la.find(e, this, null, [i]).length),
                d[e] && d.push(f)
            d.length && g.push({ elem: i, handlers: d })
          }
      return h < b.length && g.push({ elem: this, handlers: b.slice(h) }), g
    },
    addProp: function (a, b) {
      Object.defineProperty(la.Event.prototype, a, {
        enumerable: !0,
        configurable: !0,
        get: la.isFunction(b)
          ? function () {
              if (this.originalEvent) return b(this.originalEvent)
            }
          : function () {
              if (this.originalEvent) return this.originalEvent[a]
            },
        set: function (b) {
          Object.defineProperty(this, a, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: b,
          })
        },
      })
    },
    fix: function (a) {
      return a[la.expando] ? a : new la.Event(a)
    },
    special: {
      load: { noBubble: !0 },
      focus: {
        trigger: function () {
          if (this !== v() && this.focus) return this.focus(), !1
        },
        delegateType: "focusin",
      },
      blur: {
        trigger: function () {
          if (this === v() && this.blur) return this.blur(), !1
        },
        delegateType: "focusout",
      },
      click: {
        trigger: function () {
          if (
            "checkbox" === this.type &&
            this.click &&
            la.nodeName(this, "input")
          )
            return this.click(), !1
        },
        _default: function (a) {
          return la.nodeName(a.target, "a")
        },
      },
      beforeunload: {
        postDispatch: function (a) {
          void 0 !== a.result &&
            a.originalEvent &&
            (a.originalEvent.returnValue = a.result)
        },
      },
    },
  }),
    (la.removeEvent = function (a, b, c) {
      a.removeEventListener && a.removeEventListener(b, c)
    }),
    (la.Event = function (a, b) {
      return this instanceof la.Event
        ? (a && a.type
            ? ((this.originalEvent = a),
              (this.type = a.type),
              (this.isDefaultPrevented =
                a.defaultPrevented ||
                (void 0 === a.defaultPrevented && !1 === a.returnValue)
                  ? t
                  : u),
              (this.target =
                a.target && 3 === a.target.nodeType
                  ? a.target.parentNode
                  : a.target),
              (this.currentTarget = a.currentTarget),
              (this.relatedTarget = a.relatedTarget))
            : (this.type = a),
          b && la.extend(this, b),
          (this.timeStamp = (a && a.timeStamp) || la.now()),
          void (this[la.expando] = !0))
        : new la.Event(a, b)
    }),
    (la.Event.prototype = {
      constructor: la.Event,
      isDefaultPrevented: u,
      isPropagationStopped: u,
      isImmediatePropagationStopped: u,
      isSimulated: !1,
      preventDefault: function () {
        var a = this.originalEvent
        ;(this.isDefaultPrevented = t),
          a && !this.isSimulated && a.preventDefault()
      },
      stopPropagation: function () {
        var a = this.originalEvent
        ;(this.isPropagationStopped = t),
          a && !this.isSimulated && a.stopPropagation()
      },
      stopImmediatePropagation: function () {
        var a = this.originalEvent
        ;(this.isImmediatePropagationStopped = t),
          a && !this.isSimulated && a.stopImmediatePropagation(),
          this.stopPropagation()
      },
    }),
    la.each(
      {
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function (a) {
          var b = a.button
          return null == a.which && Sa.test(a.type)
            ? null != a.charCode
              ? a.charCode
              : a.keyCode
            : !a.which && void 0 !== b && Ta.test(a.type)
            ? 1 & b
              ? 1
              : 2 & b
              ? 3
              : 4 & b
              ? 2
              : 0
            : a.which
        },
      },
      la.event.addProp
    ),
    la.each(
      {
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout",
      },
      function (a, b) {
        la.event.special[a] = {
          delegateType: b,
          bindType: b,
          handle: function (a) {
            var c,
              d = this,
              e = a.relatedTarget,
              f = a.handleObj
            return (
              (e && (e === d || la.contains(d, e))) ||
                ((a.type = f.origType),
                (c = f.handler.apply(this, arguments)),
                (a.type = b)),
              c
            )
          },
        }
      }
    ),
    la.fn.extend({
      on: function (a, b, c, d) {
        return w(this, a, b, c, d)
      },
      one: function (a, b, c, d) {
        return w(this, a, b, c, d, 1)
      },
      off: function (a, b, c) {
        var d, e
        if (a && a.preventDefault && a.handleObj)
          return (
            (d = a.handleObj),
            la(a.delegateTarget).off(
              d.namespace ? d.origType + "." + d.namespace : d.origType,
              d.selector,
              d.handler
            ),
            this
          )
        if ("object" == typeof a) {
          for (e in a) this.off(e, b, a[e])
          return this
        }
        return (
          (!1 !== b && "function" != typeof b) || ((c = b), (b = void 0)),
          !1 === c && (c = u),
          this.each(function () {
            la.event.remove(this, a, c, b)
          })
        )
      },
    })
  var Va = /<script|<style|<link/i,
    Wa = /checked\s*(?:[^=]|=\s*.checked.)/i,
    Xa = /^true\/(.*)/,
    Ya = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g
  la.extend({
    htmlPrefilter: function (a) {
      return a.replace(
        /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        "<$1></$2>"
      )
    },
    clone: function (a, b, c) {
      var d,
        e,
        f,
        g,
        h = a.cloneNode(!0),
        i = la.contains(a.ownerDocument, a)
      if (
        !(
          ka.noCloneChecked ||
          (1 !== a.nodeType && 11 !== a.nodeType) ||
          la.isXMLDoc(a)
        )
      )
        for (g = q(h), f = q(a), d = 0, e = f.length; d < e; d++) B(f[d], g[d])
      if (b)
        if (c)
          for (f = f || q(a), g = g || q(h), d = 0, e = f.length; d < e; d++)
            A(f[d], g[d])
        else A(a, h)
      return (g = q(h, "script")), g.length > 0 && r(g, !i && q(a, "script")), h
    },
    cleanData: function (a) {
      for (var b, c, d, e = la.event.special, f = 0; void 0 !== (c = a[f]); f++)
        if (Ba(c)) {
          if ((b = c[Ca.expando])) {
            if (b.events)
              for (d in b.events)
                e[d] ? la.event.remove(c, d) : la.removeEvent(c, d, b.handle)
            c[Ca.expando] = void 0
          }
          c[Da.expando] && (c[Da.expando] = void 0)
        }
    },
  }),
    la.fn.extend({
      detach: function (a) {
        return D(this, a, !0)
      },
      remove: function (a) {
        return D(this, a)
      },
      text: function (a) {
        return Aa(
          this,
          function (a) {
            return void 0 === a
              ? la.text(this)
              : this.empty().each(function () {
                  ;(1 !== this.nodeType &&
                    11 !== this.nodeType &&
                    9 !== this.nodeType) ||
                    (this.textContent = a)
                })
          },
          null,
          a,
          arguments.length
        )
      },
      append: function () {
        return C(this, arguments, function (a) {
          if (
            1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType
          ) {
            x(this, a).appendChild(a)
          }
        })
      },
      prepend: function () {
        return C(this, arguments, function (a) {
          if (
            1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType
          ) {
            var b = x(this, a)
            b.insertBefore(a, b.firstChild)
          }
        })
      },
      before: function () {
        return C(this, arguments, function (a) {
          this.parentNode && this.parentNode.insertBefore(a, this)
        })
      },
      after: function () {
        return C(this, arguments, function (a) {
          this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
        })
      },
      empty: function () {
        for (var a, b = 0; null != (a = this[b]); b++)
          1 === a.nodeType && (la.cleanData(q(a, !1)), (a.textContent = ""))
        return this
      },
      clone: function (a, b) {
        return (
          (a = null != a && a),
          (b = null == b ? a : b),
          this.map(function () {
            return la.clone(this, a, b)
          })
        )
      },
      html: function (a) {
        return Aa(
          this,
          function (a) {
            var b = this[0] || {},
              c = 0,
              d = this.length
            if (void 0 === a && 1 === b.nodeType) return b.innerHTML
            if (
              "string" == typeof a &&
              !Va.test(a) &&
              !Pa[(Na.exec(a) || ["", ""])[1].toLowerCase()]
            ) {
              a = la.htmlPrefilter(a)
              try {
                for (; c < d; c++)
                  (b = this[c] || {}),
                    1 === b.nodeType &&
                      (la.cleanData(q(b, !1)), (b.innerHTML = a))
                b = 0
              } catch (a) {}
            }
            b && this.empty().append(a)
          },
          null,
          a,
          arguments.length
        )
      },
      replaceWith: function () {
        var a = []
        return C(
          this,
          arguments,
          function (b) {
            var c = this.parentNode
            la.inArray(this, a) < 0 &&
              (la.cleanData(q(this)), c && c.replaceChild(b, this))
          },
          a
        )
      },
    }),
    la.each(
      {
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith",
      },
      function (a, b) {
        la.fn[a] = function (a) {
          for (var c, d = [], e = la(a), f = e.length - 1, g = 0; g <= f; g++)
            (c = g === f ? this : this.clone(!0)),
              la(e[g])[b](c),
              da.apply(d, c.get())
          return this.pushStack(d)
        }
      }
    )
  var Za = /^margin/,
    $a = new RegExp("^(" + Ga + ")(?!px)[a-z%]+$", "i"),
    _a = function (b) {
      var c = b.ownerDocument.defaultView
      return (c && c.opener) || (c = a), c.getComputedStyle(b)
    }
  !(function () {
    function b() {
      if (h) {
        ;(h.style.cssText =
          "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%"),
          (h.innerHTML = ""),
          Ra.appendChild(g)
        var b = a.getComputedStyle(h)
        ;(c = "1%" !== b.top),
          (f = "2px" === b.marginLeft),
          (d = "4px" === b.width),
          (h.style.marginRight = "50%"),
          (e = "4px" === b.marginRight),
          Ra.removeChild(g),
          (h = null)
      }
    }
    var c,
      d,
      e,
      f,
      g = _.createElement("div"),
      h = _.createElement("div")
    h.style &&
      ((h.style.backgroundClip = "content-box"),
      (h.cloneNode(!0).style.backgroundClip = ""),
      (ka.clearCloneStyle = "content-box" === h.style.backgroundClip),
      (g.style.cssText =
        "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute"),
      g.appendChild(h),
      la.extend(ka, {
        pixelPosition: function () {
          return b(), c
        },
        boxSizingReliable: function () {
          return b(), d
        },
        pixelMarginRight: function () {
          return b(), e
        },
        reliableMarginLeft: function () {
          return b(), f
        },
      }))
  })()
  var ab = /^(none|table(?!-c[ea]).+)/,
    bb = { position: "absolute", visibility: "hidden", display: "block" },
    cb = { letterSpacing: "0", fontWeight: "400" },
    db = ["Webkit", "Moz", "ms"],
    eb = _.createElement("div").style
  la.extend({
    cssHooks: {
      opacity: {
        get: function (a, b) {
          if (b) {
            var c = E(a, "opacity")
            return "" === c ? "1" : c
          }
        },
      },
    },
    cssNumber: {
      animationIterationCount: !0,
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
    },
    cssProps: { float: "cssFloat" },
    style: function (a, b, c, d) {
      if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
        var e,
          f,
          g,
          h = la.camelCase(b),
          i = a.style
        return (
          (b = la.cssProps[h] || (la.cssProps[h] = G(h) || h)),
          (g = la.cssHooks[b] || la.cssHooks[h]),
          void 0 === c
            ? g && "get" in g && void 0 !== (e = g.get(a, !1, d))
              ? e
              : i[b]
            : ((f = typeof c),
              "string" === f &&
                (e = Ha.exec(c)) &&
                e[1] &&
                ((c = n(a, b, e)), (f = "number")),
              void (
                null != c &&
                c === c &&
                ("number" === f &&
                  (c += (e && e[3]) || (la.cssNumber[h] ? "" : "px")),
                ka.clearCloneStyle ||
                  "" !== c ||
                  0 !== b.indexOf("background") ||
                  (i[b] = "inherit"),
                (g && "set" in g && void 0 === (c = g.set(a, c, d))) ||
                  (i[b] = c))
              ))
        )
      }
    },
    css: function (a, b, c, d) {
      var e,
        f,
        g,
        h = la.camelCase(b)
      return (
        (b = la.cssProps[h] || (la.cssProps[h] = G(h) || h)),
        (g = la.cssHooks[b] || la.cssHooks[h]),
        g && "get" in g && (e = g.get(a, !0, c)),
        void 0 === e && (e = E(a, b, d)),
        "normal" === e && b in cb && (e = cb[b]),
        "" === c || c
          ? ((f = parseFloat(e)), !0 === c || isFinite(f) ? f || 0 : e)
          : e
      )
    },
  }),
    la.each(["height", "width"], function (a, b) {
      la.cssHooks[b] = {
        get: function (a, c, d) {
          if (c)
            return !ab.test(la.css(a, "display")) ||
              (a.getClientRects().length && a.getBoundingClientRect().width)
              ? J(a, b, d)
              : Ka(a, bb, function () {
                  return J(a, b, d)
                })
        },
        set: function (a, c, d) {
          var e,
            f = d && _a(a),
            g =
              d && I(a, b, d, "border-box" === la.css(a, "boxSizing", !1, f), f)
          return (
            g &&
              (e = Ha.exec(c)) &&
              "px" !== (e[3] || "px") &&
              ((a.style[b] = c), (c = la.css(a, b))),
            H(a, c, g)
          )
        },
      }
    }),
    (la.cssHooks.marginLeft = F(ka.reliableMarginLeft, function (a, b) {
      if (b)
        return (
          (parseFloat(E(a, "marginLeft")) ||
            a.getBoundingClientRect().left -
              Ka(a, { marginLeft: 0 }, function () {
                return a.getBoundingClientRect().left
              })) + "px"
        )
    })),
    la.each({ margin: "", padding: "", border: "Width" }, function (a, b) {
      ;(la.cssHooks[a + b] = {
        expand: function (c) {
          for (
            var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c];
            d < 4;
            d++
          )
            e[a + Ia[d] + b] = f[d] || f[d - 2] || f[0]
          return e
        },
      }),
        Za.test(a) || (la.cssHooks[a + b].set = H)
    }),
    la.fn.extend({
      css: function (a, b) {
        return Aa(
          this,
          function (a, b, c) {
            var d,
              e,
              f = {},
              g = 0
            if (la.isArray(b)) {
              for (d = _a(a), e = b.length; g < e; g++)
                f[b[g]] = la.css(a, b[g], !1, d)
              return f
            }
            return void 0 !== c ? la.style(a, b, c) : la.css(a, b)
          },
          a,
          b,
          arguments.length > 1
        )
      },
    }),
    (la.Tween = K),
    (K.prototype = {
      constructor: K,
      init: function (a, b, c, d, e, f) {
        ;(this.elem = a),
          (this.prop = c),
          (this.easing = e || la.easing._default),
          (this.options = b),
          (this.start = this.now = this.cur()),
          (this.end = d),
          (this.unit = f || (la.cssNumber[c] ? "" : "px"))
      },
      cur: function () {
        var a = K.propHooks[this.prop]
        return a && a.get ? a.get(this) : K.propHooks._default.get(this)
      },
      run: function (a) {
        var b,
          c = K.propHooks[this.prop]
        return (
          this.options.duration
            ? (this.pos = b = la.easing[this.easing](
                a,
                this.options.duration * a,
                0,
                1,
                this.options.duration
              ))
            : (this.pos = b = a),
          (this.now = (this.end - this.start) * b + this.start),
          this.options.step &&
            this.options.step.call(this.elem, this.now, this),
          c && c.set ? c.set(this) : K.propHooks._default.set(this),
          this
        )
      },
    }),
    (K.prototype.init.prototype = K.prototype),
    (K.propHooks = {
      _default: {
        get: function (a) {
          var b
          return 1 !== a.elem.nodeType ||
            (null != a.elem[a.prop] && null == a.elem.style[a.prop])
            ? a.elem[a.prop]
            : ((b = la.css(a.elem, a.prop, "")), b && "auto" !== b ? b : 0)
        },
        set: function (a) {
          la.fx.step[a.prop]
            ? la.fx.step[a.prop](a)
            : 1 !== a.elem.nodeType ||
              (null == a.elem.style[la.cssProps[a.prop]] &&
                !la.cssHooks[a.prop])
            ? (a.elem[a.prop] = a.now)
            : la.style(a.elem, a.prop, a.now + a.unit)
        },
      },
    }),
    (K.propHooks.scrollTop = K.propHooks.scrollLeft = {
      set: function (a) {
        a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
      },
    }),
    (la.easing = {
      linear: function (a) {
        return a
      },
      swing: function (a) {
        return 0.5 - Math.cos(a * Math.PI) / 2
      },
      _default: "swing",
    }),
    (la.fx = K.prototype.init),
    (la.fx.step = {})
  var fb,
    gb,
    hb = /^(?:toggle|show|hide)$/,
    ib = /queueHooks$/
  ;(la.Animation = la.extend(R, {
    tweeners: {
      "*": [
        function (a, b) {
          var c = this.createTween(a, b)
          return n(c.elem, a, Ha.exec(b), c), c
        },
      ],
    },
    tweener: function (a, b) {
      la.isFunction(a) ? ((b = a), (a = ["*"])) : (a = a.match(xa))
      for (var c, d = 0, e = a.length; d < e; d++)
        (c = a[d]),
          (R.tweeners[c] = R.tweeners[c] || []),
          R.tweeners[c].unshift(b)
    },
    prefilters: [P],
    prefilter: function (a, b) {
      b ? R.prefilters.unshift(a) : R.prefilters.push(a)
    },
  })),
    (la.speed = function (a, b, c) {
      var d =
        a && "object" == typeof a
          ? la.extend({}, a)
          : {
              complete: c || (!c && b) || (la.isFunction(a) && a),
              duration: a,
              easing: (c && b) || (b && !la.isFunction(b) && b),
            }
      return (
        la.fx.off || _.hidden
          ? (d.duration = 0)
          : (d.duration =
              "number" == typeof d.duration
                ? d.duration
                : d.duration in la.fx.speeds
                ? la.fx.speeds[d.duration]
                : la.fx.speeds._default),
        (null != d.queue && !0 !== d.queue) || (d.queue = "fx"),
        (d.old = d.complete),
        (d.complete = function () {
          la.isFunction(d.old) && d.old.call(this),
            d.queue && la.dequeue(this, d.queue)
        }),
        d
      )
    }),
    la.fn.extend({
      fadeTo: function (a, b, c, d) {
        return this.filter(Ja)
          .css("opacity", 0)
          .show()
          .end()
          .animate({ opacity: b }, a, c, d)
      },
      animate: function (a, b, c, d) {
        var e = la.isEmptyObject(a),
          f = la.speed(b, c, d),
          g = function () {
            var b = R(this, la.extend({}, a), f)
            ;(e || Ca.get(this, "finish")) && b.stop(!0)
          }
        return (
          (g.finish = g),
          e || !1 === f.queue ? this.each(g) : this.queue(f.queue, g)
        )
      },
      stop: function (a, b, c) {
        var d = function (a) {
          var b = a.stop
          delete a.stop, b(c)
        }
        return (
          "string" != typeof a && ((c = b), (b = a), (a = void 0)),
          b && !1 !== a && this.queue(a || "fx", []),
          this.each(function () {
            var b = !0,
              e = null != a && a + "queueHooks",
              f = la.timers,
              g = Ca.get(this)
            if (e) g[e] && g[e].stop && d(g[e])
            else for (e in g) g[e] && g[e].stop && ib.test(e) && d(g[e])
            for (e = f.length; e--; )
              f[e].elem !== this ||
                (null != a && f[e].queue !== a) ||
                (f[e].anim.stop(c), (b = !1), f.splice(e, 1))
            ;(!b && c) || la.dequeue(this, a)
          })
        )
      },
      finish: function (a) {
        return (
          !1 !== a && (a = a || "fx"),
          this.each(function () {
            var b,
              c = Ca.get(this),
              d = c[a + "queue"],
              e = c[a + "queueHooks"],
              f = la.timers,
              g = d ? d.length : 0
            for (
              c.finish = !0,
                la.queue(this, a, []),
                e && e.stop && e.stop.call(this, !0),
                b = f.length;
              b--;

            )
              f[b].elem === this &&
                f[b].queue === a &&
                (f[b].anim.stop(!0), f.splice(b, 1))
            for (b = 0; b < g; b++)
              d[b] && d[b].finish && d[b].finish.call(this)
            delete c.finish
          })
        )
      },
    }),
    la.each(["toggle", "show", "hide"], function (a, b) {
      var c = la.fn[b]
      la.fn[b] = function (a, d, e) {
        return null == a || "boolean" == typeof a
          ? c.apply(this, arguments)
          : this.animate(N(b, !0), a, d, e)
      }
    }),
    la.each(
      {
        slideDown: N("show"),
        slideUp: N("hide"),
        slideToggle: N("toggle"),
        fadeIn: { opacity: "show" },
        fadeOut: { opacity: "hide" },
        fadeToggle: { opacity: "toggle" },
      },
      function (a, b) {
        la.fn[a] = function (a, c, d) {
          return this.animate(b, a, c, d)
        }
      }
    ),
    (la.timers = []),
    (la.fx.tick = function () {
      var a,
        b = 0,
        c = la.timers
      for (fb = la.now(); b < c.length; b++)
        (a = c[b])() || c[b] !== a || c.splice(b--, 1)
      c.length || la.fx.stop(), (fb = void 0)
    }),
    (la.fx.timer = function (a) {
      la.timers.push(a), a() ? la.fx.start() : la.timers.pop()
    }),
    (la.fx.interval = 13),
    (la.fx.start = function () {
      gb ||
        (gb = a.requestAnimationFrame
          ? a.requestAnimationFrame(L)
          : a.setInterval(la.fx.tick, la.fx.interval))
    }),
    (la.fx.stop = function () {
      a.cancelAnimationFrame ? a.cancelAnimationFrame(gb) : a.clearInterval(gb),
        (gb = null)
    }),
    (la.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
    (la.fn.delay = function (b, c) {
      return (
        (b = la.fx ? la.fx.speeds[b] || b : b),
        (c = c || "fx"),
        this.queue(c, function (c, d) {
          var e = a.setTimeout(c, b)
          d.stop = function () {
            a.clearTimeout(e)
          }
        })
      )
    }),
    (function () {
      var a = _.createElement("input"),
        b = _.createElement("select"),
        c = b.appendChild(_.createElement("option"))
      ;(a.type = "checkbox"),
        (ka.checkOn = "" !== a.value),
        (ka.optSelected = c.selected),
        (a = _.createElement("input")),
        (a.value = "t"),
        (a.type = "radio"),
        (ka.radioValue = "t" === a.value)
    })()
  var jb,
    kb = la.expr.attrHandle
  la.fn.extend({
    attr: function (a, b) {
      return Aa(this, la.attr, a, b, arguments.length > 1)
    },
    removeAttr: function (a) {
      return this.each(function () {
        la.removeAttr(this, a)
      })
    },
  }),
    la.extend({
      attr: function (a, b, c) {
        var d,
          e,
          f = a.nodeType
        if (3 !== f && 8 !== f && 2 !== f)
          return void 0 === a.getAttribute
            ? la.prop(a, b, c)
            : ((1 === f && la.isXMLDoc(a)) ||
                (e =
                  la.attrHooks[b.toLowerCase()] ||
                  (la.expr.match.bool.test(b) ? jb : void 0)),
              void 0 !== c
                ? null === c
                  ? void la.removeAttr(a, b)
                  : e && "set" in e && void 0 !== (d = e.set(a, c, b))
                  ? d
                  : (a.setAttribute(b, c + ""), c)
                : e && "get" in e && null !== (d = e.get(a, b))
                ? d
                : ((d = la.find.attr(a, b)), null == d ? void 0 : d))
      },
      attrHooks: {
        type: {
          set: function (a, b) {
            if (!ka.radioValue && "radio" === b && la.nodeName(a, "input")) {
              var c = a.value
              return a.setAttribute("type", b), c && (a.value = c), b
            }
          },
        },
      },
      removeAttr: function (a, b) {
        var c,
          d = 0,
          e = b && b.match(xa)
        if (e && 1 === a.nodeType) for (; (c = e[d++]); ) a.removeAttribute(c)
      },
    }),
    (jb = {
      set: function (a, b, c) {
        return !1 === b ? la.removeAttr(a, c) : a.setAttribute(c, c), c
      },
    }),
    la.each(la.expr.match.bool.source.match(/\w+/g), function (a, b) {
      var c = kb[b] || la.find.attr
      kb[b] = function (a, b, d) {
        var e,
          f,
          g = b.toLowerCase()
        return (
          d ||
            ((f = kb[g]),
            (kb[g] = e),
            (e = null != c(a, b, d) ? g : null),
            (kb[g] = f)),
          e
        )
      }
    })
  var lb = /^(?:input|select|textarea|button)$/i,
    mb = /^(?:a|area)$/i
  la.fn.extend({
    prop: function (a, b) {
      return Aa(this, la.prop, a, b, arguments.length > 1)
    },
    removeProp: function (a) {
      return this.each(function () {
        delete this[la.propFix[a] || a]
      })
    },
  }),
    la.extend({
      prop: function (a, b, c) {
        var d,
          e,
          f = a.nodeType
        if (3 !== f && 8 !== f && 2 !== f)
          return (
            (1 === f && la.isXMLDoc(a)) ||
              ((b = la.propFix[b] || b), (e = la.propHooks[b])),
            void 0 !== c
              ? e && "set" in e && void 0 !== (d = e.set(a, c, b))
                ? d
                : (a[b] = c)
              : e && "get" in e && null !== (d = e.get(a, b))
              ? d
              : a[b]
          )
      },
      propHooks: {
        tabIndex: {
          get: function (a) {
            var b = la.find.attr(a, "tabindex")
            return b
              ? parseInt(b, 10)
              : lb.test(a.nodeName) || (mb.test(a.nodeName) && a.href)
              ? 0
              : -1
          },
        },
      },
      propFix: { for: "htmlFor", class: "className" },
    }),
    ka.optSelected ||
      (la.propHooks.selected = {
        get: function (a) {
          var b = a.parentNode
          return b && b.parentNode && b.parentNode.selectedIndex, null
        },
        set: function (a) {
          var b = a.parentNode
          b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex)
        },
      }),
    la.each(
      [
        "tabIndex",
        "readOnly",
        "maxLength",
        "cellSpacing",
        "cellPadding",
        "rowSpan",
        "colSpan",
        "useMap",
        "frameBorder",
        "contentEditable",
      ],
      function () {
        la.propFix[this.toLowerCase()] = this
      }
    )
  var nb = /[\t\r\n\f]/g
  la.fn.extend({
    addClass: function (a) {
      var b,
        c,
        d,
        e,
        f,
        g,
        h,
        i = 0
      if (la.isFunction(a))
        return this.each(function (b) {
          la(this).addClass(a.call(this, b, S(this)))
        })
      if ("string" == typeof a && a)
        for (b = a.match(xa) || []; (c = this[i++]); )
          if (
            ((e = S(c)),
            (d = 1 === c.nodeType && (" " + e + " ").replace(nb, " ")))
          ) {
            for (g = 0; (f = b[g++]); )
              d.indexOf(" " + f + " ") < 0 && (d += f + " ")
            ;(h = la.trim(d)), e !== h && c.setAttribute("class", h)
          }
      return this
    },
    removeClass: function (a) {
      var b,
        c,
        d,
        e,
        f,
        g,
        h,
        i = 0
      if (la.isFunction(a))
        return this.each(function (b) {
          la(this).removeClass(a.call(this, b, S(this)))
        })
      if (!arguments.length) return this.attr("class", "")
      if ("string" == typeof a && a)
        for (b = a.match(xa) || []; (c = this[i++]); )
          if (
            ((e = S(c)),
            (d = 1 === c.nodeType && (" " + e + " ").replace(nb, " ")))
          ) {
            for (g = 0; (f = b[g++]); )
              for (; d.indexOf(" " + f + " ") > -1; )
                d = d.replace(" " + f + " ", " ")
            ;(h = la.trim(d)), e !== h && c.setAttribute("class", h)
          }
      return this
    },
    toggleClass: function (a, b) {
      var c = typeof a
      return "boolean" == typeof b && "string" === c
        ? b
          ? this.addClass(a)
          : this.removeClass(a)
        : la.isFunction(a)
        ? this.each(function (c) {
            la(this).toggleClass(a.call(this, c, S(this), b), b)
          })
        : this.each(function () {
            var b, d, e, f
            if ("string" === c)
              for (d = 0, e = la(this), f = a.match(xa) || []; (b = f[d++]); )
                e.hasClass(b) ? e.removeClass(b) : e.addClass(b)
            else
              (void 0 !== a && "boolean" !== c) ||
                ((b = S(this)),
                b && Ca.set(this, "__className__", b),
                this.setAttribute &&
                  this.setAttribute(
                    "class",
                    b || !1 === a ? "" : Ca.get(this, "__className__") || ""
                  ))
          })
    },
    hasClass: function (a) {
      var b,
        c,
        d = 0
      for (b = " " + a + " "; (c = this[d++]); )
        if (
          1 === c.nodeType &&
          (" " + S(c) + " ").replace(nb, " ").indexOf(b) > -1
        )
          return !0
      return !1
    },
  })
  la.fn.extend({
    val: function (a) {
      var b,
        c,
        d,
        e = this[0]
      return arguments.length
        ? ((d = la.isFunction(a)),
          this.each(function (c) {
            var e
            1 === this.nodeType &&
              ((e = d ? a.call(this, c, la(this).val()) : a),
              null == e
                ? (e = "")
                : "number" == typeof e
                ? (e += "")
                : la.isArray(e) &&
                  (e = la.map(e, function (a) {
                    return null == a ? "" : a + ""
                  })),
              ((b =
                la.valHooks[this.type] ||
                la.valHooks[this.nodeName.toLowerCase()]) &&
                "set" in b &&
                void 0 !== b.set(this, e, "value")) ||
                (this.value = e))
          }))
        : e
        ? ((b = la.valHooks[e.type] || la.valHooks[e.nodeName.toLowerCase()]),
          b && "get" in b && void 0 !== (c = b.get(e, "value"))
            ? c
            : ((c = e.value),
              "string" == typeof c ? c.replace(/\r/g, "") : null == c ? "" : c))
        : void 0
    },
  }),
    la.extend({
      valHooks: {
        option: {
          get: function (a) {
            var b = la.find.attr(a, "value")
            return null != b
              ? b
              : la.trim(la.text(a)).replace(/[\x20\t\r\n\f]+/g, " ")
          },
        },
        select: {
          get: function (a) {
            for (
              var b,
                c,
                d = a.options,
                e = a.selectedIndex,
                f = "select-one" === a.type,
                g = f ? null : [],
                h = f ? e + 1 : d.length,
                i = e < 0 ? h : f ? e : 0;
              i < h;
              i++
            )
              if (
                ((c = d[i]),
                (c.selected || i === e) &&
                  !c.disabled &&
                  (!c.parentNode.disabled ||
                    !la.nodeName(c.parentNode, "optgroup")))
              ) {
                if (((b = la(c).val()), f)) return b
                g.push(b)
              }
            return g
          },
          set: function (a, b) {
            for (
              var c, d, e = a.options, f = la.makeArray(b), g = e.length;
              g--;

            )
              (d = e[g]),
                (d.selected = la.inArray(la.valHooks.option.get(d), f) > -1) &&
                  (c = !0)
            return c || (a.selectedIndex = -1), f
          },
        },
      },
    }),
    la.each(["radio", "checkbox"], function () {
      ;(la.valHooks[this] = {
        set: function (a, b) {
          if (la.isArray(b))
            return (a.checked = la.inArray(la(a).val(), b) > -1)
        },
      }),
        ka.checkOn ||
          (la.valHooks[this].get = function (a) {
            return null === a.getAttribute("value") ? "on" : a.value
          })
    })
  var ob = /^(?:focusinfocus|focusoutblur)$/
  la.extend(la.event, {
    trigger: function (b, c, d, e) {
      var f,
        g,
        h,
        i,
        j,
        k,
        l,
        m = [d || _],
        n = ha.call(b, "type") ? b.type : b,
        o = ha.call(b, "namespace") ? b.namespace.split(".") : []
      if (
        ((g = h = d = d || _),
        3 !== d.nodeType &&
          8 !== d.nodeType &&
          !ob.test(n + la.event.triggered) &&
          (n.indexOf(".") > -1 &&
            ((o = n.split(".")), (n = o.shift()), o.sort()),
          (j = n.indexOf(":") < 0 && "on" + n),
          (b = b[la.expando] ? b : new la.Event(n, "object" == typeof b && b)),
          (b.isTrigger = e ? 2 : 3),
          (b.namespace = o.join(".")),
          (b.rnamespace = b.namespace
            ? new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)")
            : null),
          (b.result = void 0),
          b.target || (b.target = d),
          (c = null == c ? [b] : la.makeArray(c, [b])),
          (l = la.event.special[n] || {}),
          e || !l.trigger || !1 !== l.trigger.apply(d, c)))
      ) {
        if (!e && !l.noBubble && !la.isWindow(d)) {
          for (
            i = l.delegateType || n, ob.test(i + n) || (g = g.parentNode);
            g;
            g = g.parentNode
          )
            m.push(g), (h = g)
          h === (d.ownerDocument || _) &&
            m.push(h.defaultView || h.parentWindow || a)
        }
        for (f = 0; (g = m[f++]) && !b.isPropagationStopped(); )
          (b.type = f > 1 ? i : l.bindType || n),
            (k = (Ca.get(g, "events") || {})[b.type] && Ca.get(g, "handle")),
            k && k.apply(g, c),
            (k = j && g[j]) &&
              k.apply &&
              Ba(g) &&
              ((b.result = k.apply(g, c)),
              !1 === b.result && b.preventDefault())
        return (
          (b.type = n),
          e ||
            b.isDefaultPrevented() ||
            (l._default && !1 !== l._default.apply(m.pop(), c)) ||
            !Ba(d) ||
            (j &&
              la.isFunction(d[n]) &&
              !la.isWindow(d) &&
              ((h = d[j]),
              h && (d[j] = null),
              (la.event.triggered = n),
              d[n](),
              (la.event.triggered = void 0),
              h && (d[j] = h))),
          b.result
        )
      }
    },
    simulate: function (a, b, c) {
      var d = la.extend(new la.Event(), c, { type: a, isSimulated: !0 })
      la.event.trigger(d, null, b)
    },
  }),
    la.fn.extend({
      trigger: function (a, b) {
        return this.each(function () {
          la.event.trigger(a, b, this)
        })
      },
      triggerHandler: function (a, b) {
        var c = this[0]
        if (c) return la.event.trigger(a, b, c, !0)
      },
    }),
    la.each(
      "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
        " "
      ),
      function (a, b) {
        la.fn[b] = function (a, c) {
          return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
        }
      }
    ),
    la.fn.extend({
      hover: function (a, b) {
        return this.mouseenter(a).mouseleave(b || a)
      },
    }),
    (ka.focusin = "onfocusin" in a),
    ka.focusin ||
      la.each({ focus: "focusin", blur: "focusout" }, function (a, b) {
        var c = function (a) {
          la.event.simulate(b, a.target, la.event.fix(a))
        }
        la.event.special[b] = {
          setup: function () {
            var d = this.ownerDocument || this,
              e = Ca.access(d, b)
            e || d.addEventListener(a, c, !0), Ca.access(d, b, (e || 0) + 1)
          },
          teardown: function () {
            var d = this.ownerDocument || this,
              e = Ca.access(d, b) - 1
            e
              ? Ca.access(d, b, e)
              : (d.removeEventListener(a, c, !0), Ca.remove(d, b))
          },
        }
      })
  var pb = a.location,
    qb = la.now(),
    rb = /\?/
  la.parseXML = function (b) {
    var c
    if (!b || "string" != typeof b) return null
    try {
      c = new a.DOMParser().parseFromString(b, "text/xml")
    } catch (a) {
      c = void 0
    }
    return (
      (c && !c.getElementsByTagName("parsererror").length) ||
        la.error("Invalid XML: " + b),
      c
    )
  }
  var sb = /\[\]$/,
    tb = /^(?:submit|button|image|reset|file)$/i,
    ub = /^(?:input|select|textarea|keygen)/i
  ;(la.param = function (a, b) {
    var c,
      d = [],
      e = function (a, b) {
        var c = la.isFunction(b) ? b() : b
        d[d.length] =
          encodeURIComponent(a) + "=" + encodeURIComponent(null == c ? "" : c)
      }
    if (la.isArray(a) || (a.jquery && !la.isPlainObject(a)))
      la.each(a, function () {
        e(this.name, this.value)
      })
    else for (c in a) T(c, a[c], b, e)
    return d.join("&")
  }),
    la.fn.extend({
      serialize: function () {
        return la.param(this.serializeArray())
      },
      serializeArray: function () {
        return this.map(function () {
          var a = la.prop(this, "elements")
          return a ? la.makeArray(a) : this
        })
          .filter(function () {
            var a = this.type
            return (
              this.name &&
              !la(this).is(":disabled") &&
              ub.test(this.nodeName) &&
              !tb.test(a) &&
              (this.checked || !Ma.test(a))
            )
          })
          .map(function (a, b) {
            var c = la(this).val()
            return null == c
              ? null
              : la.isArray(c)
              ? la.map(c, function (a) {
                  return { name: b.name, value: a.replace(/\r?\n/g, "\r\n") }
                })
              : { name: b.name, value: c.replace(/\r?\n/g, "\r\n") }
          })
          .get()
      },
    })
  var vb = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    wb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
    xb = /^(?:GET|HEAD)$/,
    yb = {},
    zb = {},
    Ab = "*/".concat("*"),
    Bb = _.createElement("a")
  ;(Bb.href = pb.href),
    la.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: pb.href,
        type: "GET",
        isLocal: wb.test(pb.protocol),
        global: !0,
        processData: !0,
        async: !0,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        accepts: {
          "*": Ab,
          text: "text/plain",
          html: "text/html",
          xml: "application/xml, text/xml",
          json: "application/json, text/javascript",
        },
        contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
        responseFields: {
          xml: "responseXML",
          text: "responseText",
          json: "responseJSON",
        },
        converters: {
          "* text": String,
          "text html": !0,
          "text json": JSON.parse,
          "text xml": la.parseXML,
        },
        flatOptions: { url: !0, context: !0 },
      },
      ajaxSetup: function (a, b) {
        return b ? W(W(a, la.ajaxSettings), b) : W(la.ajaxSettings, a)
      },
      ajaxPrefilter: U(yb),
      ajaxTransport: U(zb),
      ajax: function (b, c) {
        function d(b, c, d, h) {
          var j,
            m,
            n,
            u,
            v,
            w = c
          k ||
            ((k = !0),
            i && a.clearTimeout(i),
            (e = void 0),
            (g = h || ""),
            (x.readyState = b > 0 ? 4 : 0),
            (j = (b >= 200 && b < 300) || 304 === b),
            d && (u = X(o, x, d)),
            (u = Y(o, u, x, j)),
            j
              ? (o.ifModified &&
                  ((v = x.getResponseHeader("Last-Modified")),
                  v && (la.lastModified[f] = v),
                  (v = x.getResponseHeader("etag")) && (la.etag[f] = v)),
                204 === b || "HEAD" === o.type
                  ? (w = "nocontent")
                  : 304 === b
                  ? (w = "notmodified")
                  : ((w = u.state), (m = u.data), (n = u.error), (j = !n)))
              : ((n = w), (!b && w) || ((w = "error"), b < 0 && (b = 0))),
            (x.status = b),
            (x.statusText = (c || w) + ""),
            j ? r.resolveWith(p, [m, w, x]) : r.rejectWith(p, [x, w, n]),
            x.statusCode(t),
            (t = void 0),
            l && q.trigger(j ? "ajaxSuccess" : "ajaxError", [x, o, j ? m : n]),
            s.fireWith(p, [x, w]),
            l &&
              (q.trigger("ajaxComplete", [x, o]),
              --la.active || la.event.trigger("ajaxStop")))
        }
        "object" == typeof b && ((c = b), (b = void 0)), (c = c || {})
        var e,
          f,
          g,
          h,
          i,
          j,
          k,
          l,
          m,
          n,
          o = la.ajaxSetup({}, c),
          p = o.context || o,
          q = o.context && (p.nodeType || p.jquery) ? la(p) : la.event,
          r = la.Deferred(),
          s = la.Callbacks("once memory"),
          t = o.statusCode || {},
          u = {},
          v = {},
          w = "canceled",
          x = {
            readyState: 0,
            getResponseHeader: function (a) {
              var b
              if (k) {
                if (!h)
                  for (h = {}; (b = vb.exec(g)); ) h[b[1].toLowerCase()] = b[2]
                b = h[a.toLowerCase()]
              }
              return null == b ? null : b
            },
            getAllResponseHeaders: function () {
              return k ? g : null
            },
            setRequestHeader: function (a, b) {
              return (
                null == k &&
                  ((a = v[a.toLowerCase()] = v[a.toLowerCase()] || a),
                  (u[a] = b)),
                this
              )
            },
            overrideMimeType: function (a) {
              return null == k && (o.mimeType = a), this
            },
            statusCode: function (a) {
              var b
              if (a)
                if (k) x.always(a[x.status])
                else for (b in a) t[b] = [t[b], a[b]]
              return this
            },
            abort: function (a) {
              var b = a || w
              return e && e.abort(b), d(0, b), this
            },
          }
        if (
          (r.promise(x),
          (o.url = ((b || o.url || pb.href) + "").replace(
            /^\/\//,
            pb.protocol + "//"
          )),
          (o.type = c.method || c.type || o.method || o.type),
          (o.dataTypes = (o.dataType || "*").toLowerCase().match(xa) || [""]),
          null == o.crossDomain)
        ) {
          j = _.createElement("a")
          try {
            ;(j.href = o.url),
              (j.href = j.href),
              (o.crossDomain =
                Bb.protocol + "//" + Bb.host != j.protocol + "//" + j.host)
          } catch (a) {
            o.crossDomain = !0
          }
        }
        if (
          (o.data &&
            o.processData &&
            "string" != typeof o.data &&
            (o.data = la.param(o.data, o.traditional)),
          V(yb, o, c, x),
          k)
        )
          return x
        ;(l = la.event && o.global),
          l && 0 == la.active++ && la.event.trigger("ajaxStart"),
          (o.type = o.type.toUpperCase()),
          (o.hasContent = !xb.test(o.type)),
          (f = o.url.replace(/#.*$/, "")),
          o.hasContent
            ? o.data &&
              o.processData &&
              0 ===
                (o.contentType || "").indexOf(
                  "application/x-www-form-urlencoded"
                ) &&
              (o.data = o.data.replace(/%20/g, "+"))
            : ((n = o.url.slice(f.length)),
              o.data &&
                ((f += (rb.test(f) ? "&" : "?") + o.data), delete o.data),
              !1 === o.cache &&
                ((f = f.replace(/([?&])_=[^&]*/, "")),
                (n = (rb.test(f) ? "&" : "?") + "_=" + qb++ + n)),
              (o.url = f + n)),
          o.ifModified &&
            (la.lastModified[f] &&
              x.setRequestHeader("If-Modified-Since", la.lastModified[f]),
            la.etag[f] && x.setRequestHeader("If-None-Match", la.etag[f])),
          ((o.data && o.hasContent && !1 !== o.contentType) || c.contentType) &&
            x.setRequestHeader("Content-Type", o.contentType),
          x.setRequestHeader(
            "Accept",
            o.dataTypes[0] && o.accepts[o.dataTypes[0]]
              ? o.accepts[o.dataTypes[0]] +
                  ("*" !== o.dataTypes[0] ? ", " + Ab + "; q=0.01" : "")
              : o.accepts["*"]
          )
        for (m in o.headers) x.setRequestHeader(m, o.headers[m])
        if (o.beforeSend && (!1 === o.beforeSend.call(p, x, o) || k))
          return x.abort()
        if (
          ((w = "abort"),
          s.add(o.complete),
          x.done(o.success),
          x.fail(o.error),
          (e = V(zb, o, c, x)))
        ) {
          if (((x.readyState = 1), l && q.trigger("ajaxSend", [x, o]), k))
            return x
          o.async &&
            o.timeout > 0 &&
            (i = a.setTimeout(function () {
              x.abort("timeout")
            }, o.timeout))
          try {
            ;(k = !1), e.send(u, d)
          } catch (a) {
            if (k) throw a
            d(-1, a)
          }
        } else d(-1, "No Transport")
        return x
      },
      getJSON: function (a, b, c) {
        return la.get(a, b, c, "json")
      },
      getScript: function (a, b) {
        return la.get(a, void 0, b, "script")
      },
    }),
    la.each(["get", "post"], function (a, b) {
      la[b] = function (a, c, d, e) {
        return (
          la.isFunction(c) && ((e = e || d), (d = c), (c = void 0)),
          la.ajax(
            la.extend(
              { url: a, type: b, dataType: e, data: c, success: d },
              la.isPlainObject(a) && a
            )
          )
        )
      }
    }),
    (la._evalUrl = function (a) {
      return la.ajax({
        url: a,
        type: "GET",
        dataType: "script",
        cache: !0,
        async: !1,
        global: !1,
        throws: !0,
      })
    }),
    la.fn.extend({
      wrapAll: function (a) {
        var b
        return (
          this[0] &&
            (la.isFunction(a) && (a = a.call(this[0])),
            (b = la(a, this[0].ownerDocument).eq(0).clone(!0)),
            this[0].parentNode && b.insertBefore(this[0]),
            b
              .map(function () {
                for (var a = this; a.firstElementChild; )
                  a = a.firstElementChild
                return a
              })
              .append(this)),
          this
        )
      },
      wrapInner: function (a) {
        return la.isFunction(a)
          ? this.each(function (b) {
              la(this).wrapInner(a.call(this, b))
            })
          : this.each(function () {
              var b = la(this),
                c = b.contents()
              c.length ? c.wrapAll(a) : b.append(a)
            })
      },
      wrap: function (a) {
        var b = la.isFunction(a)
        return this.each(function (c) {
          la(this).wrapAll(b ? a.call(this, c) : a)
        })
      },
      unwrap: function (a) {
        return (
          this.parent(a)
            .not("body")
            .each(function () {
              la(this).replaceWith(this.childNodes)
            }),
          this
        )
      },
    }),
    (la.expr.pseudos.hidden = function (a) {
      return !la.expr.pseudos.visible(a)
    }),
    (la.expr.pseudos.visible = function (a) {
      return !!(a.offsetWidth || a.offsetHeight || a.getClientRects().length)
    }),
    (la.ajaxSettings.xhr = function () {
      try {
        return new a.XMLHttpRequest()
      } catch (a) {}
    })
  var Cb = { 0: 200, 1223: 204 },
    Db = la.ajaxSettings.xhr()
  ;(ka.cors = !!Db && "withCredentials" in Db),
    (ka.ajax = Db = !!Db),
    la.ajaxTransport(function (b) {
      var c, d
      if (ka.cors || (Db && !b.crossDomain))
        return {
          send: function (e, f) {
            var g,
              h = b.xhr()
            if (
              (h.open(b.type, b.url, b.async, b.username, b.password),
              b.xhrFields)
            )
              for (g in b.xhrFields) h[g] = b.xhrFields[g]
            b.mimeType && h.overrideMimeType && h.overrideMimeType(b.mimeType),
              b.crossDomain ||
                e["X-Requested-With"] ||
                (e["X-Requested-With"] = "XMLHttpRequest")
            for (g in e) h.setRequestHeader(g, e[g])
            ;(c = function (a) {
              return function () {
                c &&
                  ((c = d = h.onload = h.onerror = h.onabort = h.onreadystatechange = null),
                  "abort" === a
                    ? h.abort()
                    : "error" === a
                    ? "number" != typeof h.status
                      ? f(0, "error")
                      : f(h.status, h.statusText)
                    : f(
                        Cb[h.status] || h.status,
                        h.statusText,
                        "text" !== (h.responseType || "text") ||
                          "string" != typeof h.responseText
                          ? { binary: h.response }
                          : { text: h.responseText },
                        h.getAllResponseHeaders()
                      ))
              }
            }),
              (h.onload = c()),
              (d = h.onerror = c("error")),
              void 0 !== h.onabort
                ? (h.onabort = d)
                : (h.onreadystatechange = function () {
                    4 === h.readyState &&
                      a.setTimeout(function () {
                        c && d()
                      })
                  }),
              (c = c("abort"))
            try {
              h.send((b.hasContent && b.data) || null)
            } catch (a) {
              if (c) throw a
            }
          },
          abort: function () {
            c && c()
          },
        }
    }),
    la.ajaxPrefilter(function (a) {
      a.crossDomain && (a.contents.script = !1)
    }),
    la.ajaxSetup({
      accepts: {
        script:
          "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
      },
      contents: { script: /\b(?:java|ecma)script\b/ },
      converters: {
        "text script": function (a) {
          return la.globalEval(a), a
        },
      },
    }),
    la.ajaxPrefilter("script", function (a) {
      void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET")
    }),
    la.ajaxTransport("script", function (a) {
      if (a.crossDomain) {
        var b, c
        return {
          send: function (d, e) {
            ;(b = la("<script>")
              .prop({ charset: a.scriptCharset, src: a.url })
              .on(
                "load error",
                (c = function (a) {
                  b.remove(),
                    (c = null),
                    a && e("error" === a.type ? 404 : 200, a.type)
                })
              )),
              _.head.appendChild(b[0])
          },
          abort: function () {
            c && c()
          },
        }
      }
    })
  var Eb = [],
    Fb = /(=)\?(?=&|$)|\?\?/
  la.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function () {
      var a = Eb.pop() || la.expando + "_" + qb++
      return (this[a] = !0), a
    },
  }),
    la.ajaxPrefilter("json jsonp", function (b, c, d) {
      var e,
        f,
        g,
        h =
          !1 !== b.jsonp &&
          (Fb.test(b.url)
            ? "url"
            : "string" == typeof b.data &&
              0 ===
                (b.contentType || "").indexOf(
                  "application/x-www-form-urlencoded"
                ) &&
              Fb.test(b.data) &&
              "data")
      if (h || "jsonp" === b.dataTypes[0])
        return (
          (e = b.jsonpCallback = la.isFunction(b.jsonpCallback)
            ? b.jsonpCallback()
            : b.jsonpCallback),
          h
            ? (b[h] = b[h].replace(Fb, "$1" + e))
            : !1 !== b.jsonp &&
              (b.url += (rb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e),
          (b.converters["script json"] = function () {
            return g || la.error(e + " was not called"), g[0]
          }),
          (b.dataTypes[0] = "json"),
          (f = a[e]),
          (a[e] = function () {
            g = arguments
          }),
          d.always(function () {
            void 0 === f ? la(a).removeProp(e) : (a[e] = f),
              b[e] && ((b.jsonpCallback = c.jsonpCallback), Eb.push(e)),
              g && la.isFunction(f) && f(g[0]),
              (g = f = void 0)
          }),
          "script"
        )
    }),
    (ka.createHTMLDocument = (function () {
      var a = _.implementation.createHTMLDocument("").body
      return (
        (a.innerHTML = "<form></form><form></form>"), 2 === a.childNodes.length
      )
    })()),
    (la.parseHTML = function (a, b, c) {
      if ("string" != typeof a) return []
      "boolean" == typeof b && ((c = b), (b = !1))
      var d, e, f
      return (
        b ||
          (ka.createHTMLDocument
            ? ((b = _.implementation.createHTMLDocument("")),
              (d = b.createElement("base")),
              (d.href = _.location.href),
              b.head.appendChild(d))
            : (b = _)),
        (e = ra.exec(a)),
        (f = !c && []),
        e
          ? [b.createElement(e[1])]
          : ((e = s([a], b, f)),
            f && f.length && la(f).remove(),
            la.merge([], e.childNodes))
      )
    }),
    (la.fn.load = function (a, b, c) {
      var d,
        e,
        f,
        g = this,
        h = a.indexOf(" ")
      return (
        h > -1 && ((d = la.trim(a.slice(h))), (a = a.slice(0, h))),
        la.isFunction(b)
          ? ((c = b), (b = void 0))
          : b && "object" == typeof b && (e = "POST"),
        g.length > 0 &&
          la
            .ajax({ url: a, type: e || "GET", dataType: "html", data: b })
            .done(function (a) {
              ;(f = arguments),
                g.html(d ? la("<div>").append(la.parseHTML(a)).find(d) : a)
            })
            .always(
              c &&
                function (a, b) {
                  g.each(function () {
                    c.apply(this, f || [a.responseText, b, a])
                  })
                }
            ),
        this
      )
    }),
    la.each(
      [
        "ajaxStart",
        "ajaxStop",
        "ajaxComplete",
        "ajaxError",
        "ajaxSuccess",
        "ajaxSend",
      ],
      function (a, b) {
        la.fn[b] = function (a) {
          return this.on(b, a)
        }
      }
    ),
    (la.expr.pseudos.animated = function (a) {
      return la.grep(la.timers, function (b) {
        return a === b.elem
      }).length
    }),
    (la.offset = {
      setOffset: function (a, b, c) {
        var d,
          e,
          f,
          g,
          h,
          i,
          j,
          k = la.css(a, "position"),
          l = la(a),
          m = {}
        "static" === k && (a.style.position = "relative"),
          (h = l.offset()),
          (f = la.css(a, "top")),
          (i = la.css(a, "left")),
          (j =
            ("absolute" === k || "fixed" === k) &&
            (f + i).indexOf("auto") > -1),
          j
            ? ((d = l.position()), (g = d.top), (e = d.left))
            : ((g = parseFloat(f) || 0), (e = parseFloat(i) || 0)),
          la.isFunction(b) && (b = b.call(a, c, la.extend({}, h))),
          null != b.top && (m.top = b.top - h.top + g),
          null != b.left && (m.left = b.left - h.left + e),
          "using" in b ? b.using.call(a, m) : l.css(m)
      },
    }),
    la.fn.extend({
      offset: function (a) {
        if (arguments.length)
          return void 0 === a
            ? this
            : this.each(function (b) {
                la.offset.setOffset(this, a, b)
              })
        var b,
          c,
          d,
          e,
          f = this[0]
        return f
          ? f.getClientRects().length
            ? ((d = f.getBoundingClientRect()),
              d.width || d.height
                ? ((e = f.ownerDocument),
                  (c = Z(e)),
                  (b = e.documentElement),
                  {
                    top: d.top + c.pageYOffset - b.clientTop,
                    left: d.left + c.pageXOffset - b.clientLeft,
                  })
                : d)
            : { top: 0, left: 0 }
          : void 0
      },
      position: function () {
        if (this[0]) {
          var a,
            b,
            c = this[0],
            d = { top: 0, left: 0 }
          return (
            "fixed" === la.css(c, "position")
              ? (b = c.getBoundingClientRect())
              : ((a = this.offsetParent()),
                (b = this.offset()),
                la.nodeName(a[0], "html") || (d = a.offset()),
                (d = {
                  top: d.top + la.css(a[0], "borderTopWidth", !0),
                  left: d.left + la.css(a[0], "borderLeftWidth", !0),
                })),
            {
              top: b.top - d.top - la.css(c, "marginTop", !0),
              left: b.left - d.left - la.css(c, "marginLeft", !0),
            }
          )
        }
      },
      offsetParent: function () {
        return this.map(function () {
          for (
            var a = this.offsetParent;
            a && "static" === la.css(a, "position");

          )
            a = a.offsetParent
          return a || Ra
        })
      },
    }),
    la.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (
      a,
      b
    ) {
      var c = "pageYOffset" === b
      la.fn[a] = function (d) {
        return Aa(
          this,
          function (a, d, e) {
            var f = Z(a)
            return void 0 === e
              ? f
                ? f[b]
                : a[d]
              : void (f
                  ? f.scrollTo(c ? f.pageXOffset : e, c ? e : f.pageYOffset)
                  : (a[d] = e))
          },
          a,
          d,
          arguments.length
        )
      }
    }),
    la.each(["top", "left"], function (a, b) {
      la.cssHooks[b] = F(ka.pixelPosition, function (a, c) {
        if (c) return (c = E(a, b)), $a.test(c) ? la(a).position()[b] + "px" : c
      })
    }),
    la.each({ Height: "height", Width: "width" }, function (a, b) {
      la.each({ padding: "inner" + a, content: b, "": "outer" + a }, function (
        c,
        d
      ) {
        la.fn[d] = function (e, f) {
          var g = arguments.length && (c || "boolean" != typeof e),
            h = c || (!0 === e || !0 === f ? "margin" : "border")
          return Aa(
            this,
            function (b, c, e) {
              var f
              return la.isWindow(b)
                ? 0 === d.indexOf("outer")
                  ? b["inner" + a]
                  : b.document.documentElement["client" + a]
                : 9 === b.nodeType
                ? ((f = b.documentElement),
                  Math.max(
                    b.body["scroll" + a],
                    f["scroll" + a],
                    b.body["offset" + a],
                    f["offset" + a],
                    f["client" + a]
                  ))
                : void 0 === e
                ? la.css(b, c, h)
                : la.style(b, c, e, h)
            },
            b,
            g ? e : void 0,
            g
          )
        }
      })
    }),
    la.fn.extend({
      bind: function (a, b, c) {
        return this.on(a, null, b, c)
      },
      unbind: function (a, b) {
        return this.off(a, null, b)
      },
      delegate: function (a, b, c, d) {
        return this.on(b, a, c, d)
      },
      undelegate: function (a, b, c) {
        return 1 === arguments.length
          ? this.off(a, "**")
          : this.off(b, a || "**", c)
      },
    }),
    (la.parseJSON = JSON.parse),
    "function" == typeof define &&
      define.amd &&
      define("jquery", [], function () {
        return la
      })
  var Gb = a.jQuery,
    Hb = a.$
  return (
    (la.noConflict = function (b) {
      return (
        a.$ === la && (a.$ = Hb), b && a.jQuery === la && (a.jQuery = Gb), la
      )
    }),
    b || (a.jQuery = a.$ = la),
    la
  )
}),
  (function (a) {
    function b() {}
    function c(a) {
      function c(b) {
        b.prototype.option ||
          (b.prototype.option = function (b) {
            a.isPlainObject(b) && (this.options = a.extend(!0, this.options, b))
          })
      }
      function e(b, c) {
        a.fn[b] = function (e) {
          if ("string" == typeof e) {
            for (
              var g = d.call(arguments, 1), h = 0, i = this.length;
              i > h;
              h++
            ) {
              var j = this[h],
                k = a.data(j, b)
              if (k)
                if (a.isFunction(k[e]) && "_" !== e.charAt(0)) {
                  var l = k[e].apply(k, g)
                  if (void 0 !== l) return l
                } else f("no such method '" + e + "' for " + b + " instance")
              else
                f(
                  "cannot call methods on " +
                    b +
                    " prior to initialization; attempted to call '" +
                    e +
                    "'"
                )
            }
            return this
          }
          return this.each(function () {
            var d = a.data(this, b)
            d
              ? (d.option(e), d._init())
              : ((d = new c(this, e)), a.data(this, b, d))
          })
        }
      }
      if (a) {
        var f =
          "undefined" == typeof console
            ? b
            : function (a) {
                console.error(a)
              }
        return (
          (a.bridget = function (a, b) {
            c(b), e(a, b)
          }),
          a.bridget
        )
      }
    }
    var d = Array.prototype.slice
    "function" == typeof define && define.amd
      ? define("jquery-bridget/jquery.bridget", ["jquery"], c)
      : c("object" == typeof exports ? require("jquery") : a.jQuery)
  })(window),
  (function (a) {
    function b(a) {
      return new RegExp("(^|\\s+)" + a + "(\\s+|$)")
    }
    function c(a, b) {
      ;(d(a, b) ? f : e)(a, b)
    }
    var d, e, f
    "classList" in document.documentElement
      ? ((d = function (a, b) {
          return a.classList.contains(b)
        }),
        (e = function (a, b) {
          a.classList.add(b)
        }),
        (f = function (a, b) {
          a.classList.remove(b)
        }))
      : ((d = function (a, c) {
          return b(c).test(a.className)
        }),
        (e = function (a, b) {
          d(a, b) || (a.className = a.className + " " + b)
        }),
        (f = function (a, c) {
          a.className = a.className.replace(b(c), " ")
        }))
    var g = {
      hasClass: d,
      addClass: e,
      removeClass: f,
      toggleClass: c,
      has: d,
      add: e,
      remove: f,
      toggle: c,
    }
    "function" == typeof define && define.amd
      ? define("classie/classie", g)
      : "object" == typeof exports
      ? (module.exports = g)
      : (a.classie = g)
  })(window),
  function () {
    "use strict"
    function a() {}
    function b(a, b) {
      for (var c = a.length; c--; ) if (a[c].listener === b) return c
      return -1
    }
    function c(a) {
      return function () {
        return this[a].apply(this, arguments)
      }
    }
    var d = a.prototype,
      e = this,
      f = e.EventEmitter
    ;(d.getListeners = function (a) {
      var b,
        c,
        d = this._getEvents()
      if (a instanceof RegExp) {
        b = {}
        for (c in d) d.hasOwnProperty(c) && a.test(c) && (b[c] = d[c])
      } else b = d[a] || (d[a] = [])
      return b
    }),
      (d.flattenListeners = function (a) {
        var b,
          c = []
        for (b = 0; b < a.length; b += 1) c.push(a[b].listener)
        return c
      }),
      (d.getListenersAsObject = function (a) {
        var b,
          c = this.getListeners(a)
        return c instanceof Array && ((b = {}), (b[a] = c)), b || c
      }),
      (d.addListener = function (a, c) {
        var d,
          e = this.getListenersAsObject(a),
          f = "object" == typeof c
        for (d in e)
          e.hasOwnProperty(d) &&
            -1 === b(e[d], c) &&
            e[d].push(f ? c : { listener: c, once: !1 })
        return this
      }),
      (d.on = c("addListener")),
      (d.addOnceListener = function (a, b) {
        return this.addListener(a, { listener: b, once: !0 })
      }),
      (d.once = c("addOnceListener")),
      (d.defineEvent = function (a) {
        return this.getListeners(a), this
      }),
      (d.defineEvents = function (a) {
        for (var b = 0; b < a.length; b += 1) this.defineEvent(a[b])
        return this
      }),
      (d.removeListener = function (a, c) {
        var d,
          e,
          f = this.getListenersAsObject(a)
        for (e in f)
          f.hasOwnProperty(e) && -1 !== (d = b(f[e], c)) && f[e].splice(d, 1)
        return this
      }),
      (d.off = c("removeListener")),
      (d.addListeners = function (a, b) {
        return this.manipulateListeners(!1, a, b)
      }),
      (d.removeListeners = function (a, b) {
        return this.manipulateListeners(!0, a, b)
      }),
      (d.manipulateListeners = function (a, b, c) {
        var d,
          e,
          f = a ? this.removeListener : this.addListener,
          g = a ? this.removeListeners : this.addListeners
        if ("object" != typeof b || b instanceof RegExp)
          for (d = c.length; d--; ) f.call(this, b, c[d])
        else
          for (d in b)
            b.hasOwnProperty(d) &&
              (e = b[d]) &&
              ("function" == typeof e ? f.call(this, d, e) : g.call(this, d, e))
        return this
      }),
      (d.removeEvent = function (a) {
        var b,
          c = typeof a,
          d = this._getEvents()
        if ("string" === c) delete d[a]
        else if (a instanceof RegExp)
          for (b in d) d.hasOwnProperty(b) && a.test(b) && delete d[b]
        else delete this._events
        return this
      }),
      (d.removeAllListeners = c("removeEvent")),
      (d.emitEvent = function (a, b) {
        var c,
          d,
          e,
          f = this.getListenersAsObject(a)
        for (e in f)
          if (f.hasOwnProperty(e))
            for (d = f[e].length; d--; )
              (c = f[e][d]),
                !0 === c.once && this.removeListener(a, c.listener),
                c.listener.apply(this, b || []) ===
                  this._getOnceReturnValue() &&
                  this.removeListener(a, c.listener)
        return this
      }),
      (d.trigger = c("emitEvent")),
      (d.emit = function (a) {
        var b = Array.prototype.slice.call(arguments, 1)
        return this.emitEvent(a, b)
      }),
      (d.setOnceReturnValue = function (a) {
        return (this._onceReturnValue = a), this
      }),
      (d._getOnceReturnValue = function () {
        return !this.hasOwnProperty("_onceReturnValue") || this._onceReturnValue
      }),
      (d._getEvents = function () {
        return this._events || (this._events = {})
      }),
      (a.noConflict = function () {
        return (e.EventEmitter = f), a
      }),
      "function" == typeof define && define.amd
        ? define("eventEmitter/EventEmitter", [], function () {
            return a
          })
        : "object" == typeof module && module.exports
        ? (module.exports = a)
        : (e.EventEmitter = a)
  }.call(this),
  (function (a) {
    function b(b) {
      var c = a.event
      return (c.target = c.target || c.srcElement || b), c
    }
    var c = document.documentElement,
      d = function () {}
    c.addEventListener
      ? (d = function (a, b, c) {
          a.addEventListener(b, c, !1)
        })
      : c.attachEvent &&
        (d = function (a, c, d) {
          ;(a[c + d] = d.handleEvent
            ? function () {
                var c = b(a)
                d.handleEvent.call(d, c)
              }
            : function () {
                var c = b(a)
                d.call(a, c)
              }),
            a.attachEvent("on" + c, a[c + d])
        })
    var e = function () {}
    c.removeEventListener
      ? (e = function (a, b, c) {
          a.removeEventListener(b, c, !1)
        })
      : c.detachEvent &&
        (e = function (a, b, c) {
          a.detachEvent("on" + b, a[b + c])
          try {
            delete a[b + c]
          } catch (d) {
            a[b + c] = void 0
          }
        })
    var f = { bind: d, unbind: e }
    "function" == typeof define && define.amd
      ? define("eventie/eventie", f)
      : "object" == typeof exports
      ? (module.exports = f)
      : (a.eventie = f)
  })(window),
  (function (a) {
    function b(a) {
      if (a) {
        if ("string" == typeof d[a]) return a
        a = a.charAt(0).toUpperCase() + a.slice(1)
        for (var b, e = 0, f = c.length; f > e; e++)
          if (((b = c[e] + a), "string" == typeof d[b])) return b
      }
    }
    var c = "Webkit Moz ms Ms O".split(" "),
      d = document.documentElement.style
    "function" == typeof define && define.amd
      ? define("get-style-property/get-style-property", [], function () {
          return b
        })
      : "object" == typeof exports
      ? (module.exports = b)
      : (a.getStyleProperty = b)
  })(window),
  (function (a, b) {
    function c(a) {
      var b = parseFloat(a)
      return -1 === a.indexOf("%") && !isNaN(b) && b
    }
    function d() {}
    function e() {
      for (
        var a = {
            width: 0,
            height: 0,
            innerWidth: 0,
            innerHeight: 0,
            outerWidth: 0,
            outerHeight: 0,
          },
          b = 0,
          c = h.length;
        c > b;
        b++
      ) {
        a[h[b]] = 0
      }
      return a
    }
    function f(b) {
      function d() {
        if (!m) {
          m = !0
          var d = a.getComputedStyle
          if (
            ((j = (function () {
              var a = d
                ? function (a) {
                    return d(a, null)
                  }
                : function (a) {
                    return a.currentStyle
                  }
              return function (b) {
                var c = a(b)
                return (
                  c ||
                    g(
                      "Style returned " +
                        c +
                        ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"
                    ),
                  c
                )
              }
            })()),
            (k = b("boxSizing")))
          ) {
            var e = document.createElement("div")
            ;(e.style.width = "200px"),
              (e.style.padding = "1px 2px 3px 4px"),
              (e.style.borderStyle = "solid"),
              (e.style.borderWidth = "1px 2px 3px 4px"),
              (e.style[k] = "border-box")
            var f = document.body || document.documentElement
            f.appendChild(e)
            var h = j(e)
            ;(l = 200 === c(h.width)), f.removeChild(e)
          }
        }
      }
      function f(a) {
        if (
          (d(),
          "string" == typeof a && (a = document.querySelector(a)),
          a && "object" == typeof a && a.nodeType)
        ) {
          var b = j(a)
          if ("none" === b.display) return e()
          var f = {}
          ;(f.width = a.offsetWidth), (f.height = a.offsetHeight)
          for (
            var g = (f.isBorderBox = !(!k || !b[k] || "border-box" !== b[k])),
              m = 0,
              n = h.length;
            n > m;
            m++
          ) {
            var o = h[m],
              p = b[o]
            p = i(a, p)
            var q = parseFloat(p)
            f[o] = isNaN(q) ? 0 : q
          }
          var r = f.paddingLeft + f.paddingRight,
            s = f.paddingTop + f.paddingBottom,
            t = f.marginLeft + f.marginRight,
            u = f.marginTop + f.marginBottom,
            v = f.borderLeftWidth + f.borderRightWidth,
            w = f.borderTopWidth + f.borderBottomWidth,
            x = g && l,
            y = c(b.width)
          !1 !== y && (f.width = y + (x ? 0 : r + v))
          var z = c(b.height)
          return (
            !1 !== z && (f.height = z + (x ? 0 : s + w)),
            (f.innerWidth = f.width - (r + v)),
            (f.innerHeight = f.height - (s + w)),
            (f.outerWidth = f.width + t),
            (f.outerHeight = f.height + u),
            f
          )
        }
      }
      function i(b, c) {
        if (a.getComputedStyle || -1 === c.indexOf("%")) return c
        var d = b.style,
          e = d.left,
          f = b.runtimeStyle,
          g = f && f.left
        return (
          g && (f.left = b.currentStyle.left),
          (d.left = c),
          (c = d.pixelLeft),
          (d.left = e),
          g && (f.left = g),
          c
        )
      }
      var j,
        k,
        l,
        m = !1
      return f
    }
    var g =
        "undefined" == typeof console
          ? d
          : function (a) {
              console.error(a)
            },
      h = [
        "paddingLeft",
        "paddingRight",
        "paddingTop",
        "paddingBottom",
        "marginLeft",
        "marginRight",
        "marginTop",
        "marginBottom",
        "borderLeftWidth",
        "borderRightWidth",
        "borderTopWidth",
        "borderBottomWidth",
      ]
    "function" == typeof define && define.amd
      ? define("get-size/get-size", [
          "get-style-property/get-style-property",
        ], f)
      : "object" == typeof exports
      ? (module.exports = f(require("desandro-get-style-property")))
      : (a.getSize = f(a.getStyleProperty))
  })(window),
  (function (a) {
    function b(a) {
      "function" == typeof a && (b.isReady ? a() : g.push(a))
    }
    function c(a) {
      var c = "readystatechange" === a.type && "complete" !== f.readyState
      b.isReady || c || d()
    }
    function d() {
      b.isReady = !0
      for (var a = 0, c = g.length; c > a; a++) {
        ;(0, g[a])()
      }
    }
    function e(e) {
      return (
        "complete" === f.readyState
          ? d()
          : (e.bind(f, "DOMContentLoaded", c),
            e.bind(f, "readystatechange", c),
            e.bind(a, "load", c)),
        b
      )
    }
    var f = a.document,
      g = []
    ;(b.isReady = !1),
      "function" == typeof define && define.amd
        ? define("doc-ready/doc-ready", ["eventie/eventie"], e)
        : "object" == typeof exports
        ? (module.exports = e(require("eventie")))
        : (a.docReady = e(a.eventie))
  })(window),
  (function (a) {
    "use strict"
    function b(a, b) {
      return a[g](b)
    }
    function c(a) {
      if (!a.parentNode) {
        document.createDocumentFragment().appendChild(a)
      }
    }
    function d(a, b) {
      c(a)
      for (
        var d = a.parentNode.querySelectorAll(b), e = 0, f = d.length;
        f > e;
        e++
      )
        if (d[e] === a) return !0
      return !1
    }
    function e(a, d) {
      return c(a), b(a, d)
    }
    var f,
      g = (function () {
        if (a.matches) return "matches"
        if (a.matchesSelector) return "matchesSelector"
        for (
          var b = ["webkit", "moz", "ms", "o"], c = 0, d = b.length;
          d > c;
          c++
        ) {
          var e = b[c],
            f = e + "MatchesSelector"
          if (a[f]) return f
        }
      })()
    if (g) {
      var h = document.createElement("div"),
        i = b(h, "div")
      f = i ? b : e
    } else f = d
    "function" == typeof define && define.amd
      ? define("matches-selector/matches-selector", [], function () {
          return f
        })
      : "object" == typeof exports
      ? (module.exports = f)
      : (window.matchesSelector = f)
  })(Element.prototype),
  (function (a, b) {
    "use strict"
    "function" == typeof define && define.amd
      ? define("fizzy-ui-utils/utils", [
          "doc-ready/doc-ready",
          "matches-selector/matches-selector",
        ], function (c, d) {
          return b(a, c, d)
        })
      : "object" == typeof exports
      ? (module.exports = b(
          a,
          require("doc-ready"),
          require("desandro-matches-selector")
        ))
      : (a.fizzyUIUtils = b(a, a.docReady, a.matchesSelector))
  })(window, function (a, b, c) {
    var d = {}
    ;(d.extend = function (a, b) {
      for (var c in b) a[c] = b[c]
      return a
    }),
      (d.modulo = function (a, b) {
        return ((a % b) + b) % b
      })
    var e = Object.prototype.toString
    ;(d.isArray = function (a) {
      return "[object Array]" == e.call(a)
    }),
      (d.makeArray = function (a) {
        var b = []
        if (d.isArray(a)) b = a
        else if (a && "number" == typeof a.length)
          for (var c = 0, e = a.length; e > c; c++) b.push(a[c])
        else b.push(a)
        return b
      }),
      (d.indexOf = Array.prototype.indexOf
        ? function (a, b) {
            return a.indexOf(b)
          }
        : function (a, b) {
            for (var c = 0, d = a.length; d > c; c++) if (a[c] === b) return c
            return -1
          }),
      (d.removeFrom = function (a, b) {
        var c = d.indexOf(a, b)
        ;-1 != c && a.splice(c, 1)
      }),
      (d.isElement =
        "function" == typeof HTMLElement || "object" == typeof HTMLElement
          ? function (a) {
              return a instanceof HTMLElement
            }
          : function (a) {
              return (
                a &&
                "object" == typeof a &&
                1 == a.nodeType &&
                "string" == typeof a.nodeName
              )
            }),
      (d.setText = (function () {
        function a(a, c) {
          ;(b =
            b ||
            (void 0 !== document.documentElement.textContent
              ? "textContent"
              : "innerText")),
            (a[b] = c)
        }
        var b
        return a
      })()),
      (d.getParent = function (a, b) {
        for (; a != document.body; ) if (((a = a.parentNode), c(a, b))) return a
      }),
      (d.getQueryElement = function (a) {
        return "string" == typeof a ? document.querySelector(a) : a
      }),
      (d.handleEvent = function (a) {
        var b = "on" + a.type
        this[b] && this[b](a)
      }),
      (d.filterFindElements = function (a, b) {
        a = d.makeArray(a)
        for (var e = [], f = 0, g = a.length; g > f; f++) {
          var h = a[f]
          if (d.isElement(h))
            if (b) {
              c(h, b) && e.push(h)
              for (
                var i = h.querySelectorAll(b), j = 0, k = i.length;
                k > j;
                j++
              )
                e.push(i[j])
            } else e.push(h)
        }
        return e
      }),
      (d.debounceMethod = function (a, b, c) {
        var d = a.prototype[b],
          e = b + "Timeout"
        a.prototype[b] = function () {
          var a = this[e]
          a && clearTimeout(a)
          var b = arguments,
            f = this
          this[e] = setTimeout(function () {
            d.apply(f, b), delete f[e]
          }, c || 100)
        }
      }),
      (d.toDashed = function (a) {
        return a
          .replace(/(.)([A-Z])/g, function (a, b, c) {
            return b + "-" + c
          })
          .toLowerCase()
      })
    var f = a.console
    return (
      (d.htmlInit = function (c, e) {
        b(function () {
          for (
            var b = d.toDashed(e),
              g = document.querySelectorAll(".js-" + b),
              h = "data-" + b + "-options",
              i = 0,
              j = g.length;
            j > i;
            i++
          ) {
            var k,
              l = g[i],
              m = l.getAttribute(h)
            try {
              k = m && JSON.parse(m)
            } catch (a) {
              f &&
                f.error(
                  "Error parsing " +
                    h +
                    " on " +
                    l.nodeName.toLowerCase() +
                    (l.id ? "#" + l.id : "") +
                    ": " +
                    a
                )
              continue
            }
            var n = new c(l, k),
              o = a.jQuery
            o && o.data(l, e, n)
          }
        })
      }),
      d
    )
  }),
  (function (a, b) {
    "use strict"
    "function" == typeof define && define.amd
      ? define("flickity/js/cell", ["get-size/get-size"], function (c) {
          return b(a, c)
        })
      : "object" == typeof exports
      ? (module.exports = b(a, require("get-size")))
      : ((a.Flickity = a.Flickity || {}), (a.Flickity.Cell = b(a, a.getSize)))
  })(window, function (a, b) {
    function c(a, b) {
      ;(this.element = a), (this.parent = b), this.create()
    }
    var d = "attachEvent" in a
    return (
      (c.prototype.create = function () {
        ;(this.element.style.position = "absolute"),
          d && this.element.setAttribute("unselectable", "on"),
          (this.x = 0),
          (this.shift = 0)
      }),
      (c.prototype.destroy = function () {
        this.element.style.position = ""
        var a = this.parent.originSide
        this.element.style[a] = ""
      }),
      (c.prototype.getSize = function () {
        this.size = b(this.element)
      }),
      (c.prototype.setPosition = function (a) {
        ;(this.x = a), this.setDefaultTarget(), this.renderPosition(a)
      }),
      (c.prototype.setDefaultTarget = function () {
        var a = "left" == this.parent.originSide ? "marginLeft" : "marginRight"
        this.target =
          this.x + this.size[a] + this.size.width * this.parent.cellAlign
      }),
      (c.prototype.renderPosition = function (a) {
        var b = this.parent.originSide
        this.element.style[b] = this.parent.getPositionValue(a)
      }),
      (c.prototype.wrapShift = function (a) {
        ;(this.shift = a),
          this.renderPosition(this.x + this.parent.slideableWidth * a)
      }),
      (c.prototype.remove = function () {
        this.element.parentNode.removeChild(this.element)
      }),
      c
    )
  }),
  (function (a, b) {
    "use strict"
    "function" == typeof define && define.amd
      ? define("flickity/js/animate", [
          "get-style-property/get-style-property",
          "fizzy-ui-utils/utils",
        ], function (c, d) {
          return b(a, c, d)
        })
      : "object" == typeof exports
      ? (module.exports = b(
          a,
          require("desandro-get-style-property"),
          require("fizzy-ui-utils")
        ))
      : ((a.Flickity = a.Flickity || {}),
        (a.Flickity.animatePrototype = b(
          a,
          a.getStyleProperty,
          a.fizzyUIUtils
        )))
  })(window, function (a, b, c) {
    for (
      var d,
        e = 0,
        f = "webkit moz ms o".split(" "),
        g = a.requestAnimationFrame,
        h = a.cancelAnimationFrame,
        i = 0;
      i < f.length && (!g || !h);
      i++
    )
      (d = f[i]),
        (g = g || a[d + "RequestAnimationFrame"]),
        (h =
          h ||
          a[d + "CancelAnimationFrame"] ||
          a[d + "CancelRequestAnimationFrame"])
    ;(g && h) ||
      ((g = function (b) {
        var c = new Date().getTime(),
          d = Math.max(0, 16 - (c - e)),
          f = a.setTimeout(function () {
            b(c + d)
          }, d)
        return (e = c + d), f
      }),
      (h = function (b) {
        a.clearTimeout(b)
      }))
    var j = {}
    ;(j.startAnimation = function () {
      this.isAnimating ||
        ((this.isAnimating = !0), (this.restingFrames = 0), this.animate())
    }),
      (j.animate = function () {
        this.applyDragForce(), this.applySelectedAttraction()
        var a = this.x
        if (
          (this.integratePhysics(),
          this.positionSlider(),
          this.settle(a),
          this.isAnimating)
        ) {
          var b = this
          g(function () {
            b.animate()
          })
        }
      })
    var k = b("transform"),
      l = !!b("perspective")
    return (
      (j.positionSlider = function () {
        var a = this.x
        this.options.wrapAround &&
          this.cells.length > 1 &&
          ((a = c.modulo(a, this.slideableWidth)),
          (a -= this.slideableWidth),
          this.shiftWrapCells(a)),
          (a += this.cursorPosition),
          (a = this.options.rightToLeft && k ? -a : a)
        var b = this.getPositionValue(a)
        k
          ? (this.slider.style[k] =
              l && this.isAnimating
                ? "translate3d(" + b + ",0,0)"
                : "translateX(" + b + ")")
          : (this.slider.style[this.originSide] = b)
      }),
      (j.positionSliderAtSelected = function () {
        if (this.cells.length) {
          var a = this.cells[this.selectedIndex]
          ;(this.x = -a.target), this.positionSlider()
        }
      }),
      (j.getPositionValue = function (a) {
        return this.options.percentPosition
          ? 0.01 * Math.round((a / this.size.innerWidth) * 1e4) + "%"
          : Math.round(a) + "px"
      }),
      (j.settle = function (a) {
        this.isPointerDown ||
          Math.round(100 * this.x) != Math.round(100 * a) ||
          this.restingFrames++,
          this.restingFrames > 2 &&
            ((this.isAnimating = !1),
            delete this.isFreeScrolling,
            l && this.positionSlider(),
            this.dispatchEvent("settle"))
      }),
      (j.shiftWrapCells = function (a) {
        var b = this.cursorPosition + a
        this._shiftCells(this.beforeShiftCells, b, -1)
        var c =
          this.size.innerWidth - (a + this.slideableWidth + this.cursorPosition)
        this._shiftCells(this.afterShiftCells, c, 1)
      }),
      (j._shiftCells = function (a, b, c) {
        for (var d = 0, e = a.length; e > d; d++) {
          var f = a[d],
            g = b > 0 ? c : 0
          f.wrapShift(g), (b -= f.size.outerWidth)
        }
      }),
      (j._unshiftCells = function (a) {
        if (a && a.length)
          for (var b = 0, c = a.length; c > b; b++) a[b].wrapShift(0)
      }),
      (j.integratePhysics = function () {
        ;(this.velocity += this.accel),
          (this.x += this.velocity),
          (this.velocity *= this.getFrictionFactor()),
          (this.accel = 0)
      }),
      (j.applyForce = function (a) {
        this.accel += a
      }),
      (j.getFrictionFactor = function () {
        return (
          1 -
          this.options[this.isFreeScrolling ? "freeScrollFriction" : "friction"]
        )
      }),
      (j.getRestingPosition = function () {
        return this.x + this.velocity / (1 - this.getFrictionFactor())
      }),
      (j.applyDragForce = function () {
        if (this.isPointerDown) {
          var a = this.dragX - this.x,
            b = a - this.velocity
          this.applyForce(b)
        }
      }),
      (j.applySelectedAttraction = function () {
        var a = this.cells.length
        if (!this.isPointerDown && !this.isFreeScrolling && a) {
          var b = this.cells[this.selectedIndex],
            c =
              this.options.wrapAround && a > 1
                ? this.slideableWidth * Math.floor(this.selectedIndex / a)
                : 0,
            d = -1 * (b.target + c) - this.x,
            e = d * this.options.selectedAttraction
          this.applyForce(e)
        }
      }),
      j
    )
  }),
  (function (a, b) {
    "use strict"
    if ("function" == typeof define && define.amd)
      define("flickity/js/flickity", [
        "classie/classie",
        "eventEmitter/EventEmitter",
        "eventie/eventie",
        "get-size/get-size",
        "fizzy-ui-utils/utils",
        "./cell",
        "./animate",
      ], function (c, d, e, f, g, h, i) {
        return b(a, c, d, e, f, g, h, i)
      })
    else if ("object" == typeof exports)
      module.exports = b(
        a,
        require("desandro-classie"),
        require("wolfy87-eventemitter"),
        require("eventie"),
        require("get-size"),
        require("fizzy-ui-utils"),
        require("./cell"),
        require("./animate")
      )
    else {
      var c = a.Flickity
      a.Flickity = b(
        a,
        a.classie,
        a.EventEmitter,
        a.eventie,
        a.getSize,
        a.fizzyUIUtils,
        c.Cell,
        c.animatePrototype
      )
    }
  })(window, function (a, b, c, d, e, f, g, h) {
    function i(a, b) {
      for (a = f.makeArray(a); a.length; ) b.appendChild(a.shift())
    }
    function j(a, b) {
      var c = f.getQueryElement(a)
      return c
        ? ((this.element = c),
          k && (this.$element = k(this.element)),
          (this.options = f.extend({}, this.constructor.defaults)),
          this.option(b),
          void this._create())
        : void (m && m.error("Bad element for Flickity: " + (c || a)))
    }
    var k = a.jQuery,
      l = a.getComputedStyle,
      m = a.console,
      n = 0,
      o = {}
    ;(j.defaults = {
      accessibility: !0,
      cellAlign: "center",
      freeScrollFriction: 0.075,
      friction: 0.28,
      percentPosition: !0,
      resize: !0,
      selectedAttraction: 0.025,
      setGallerySize: !0,
    }),
      (j.createMethods = []),
      f.extend(j.prototype, c.prototype),
      (j.prototype._create = function () {
        var b = (this.guid = ++n)
        ;(this.element.flickityGUID = b),
          (o[b] = this),
          (this.selectedIndex = 0),
          (this.restingFrames = 0),
          (this.x = 0),
          (this.velocity = 0),
          (this.accel = 0),
          (this.originSide = this.options.rightToLeft ? "right" : "left"),
          (this.viewport = document.createElement("div")),
          (this.viewport.className = "flickity-viewport"),
          j.setUnselectable(this.viewport),
          this._createSlider(),
          (this.options.resize || this.options.watchCSS) &&
            (d.bind(a, "resize", this), (this.isResizeBound = !0))
        for (var c = 0, e = j.createMethods.length; e > c; c++) {
          this[j.createMethods[c]]()
        }
        this.options.watchCSS ? this.watchCSS() : this.activate()
      }),
      (j.prototype.option = function (a) {
        f.extend(this.options, a)
      }),
      (j.prototype.activate = function () {
        if (!this.isActive) {
          ;(this.isActive = !0),
            b.add(this.element, "flickity-enabled"),
            this.options.rightToLeft && b.add(this.element, "flickity-rtl"),
            this.getSize()
          i(this._filterFindCellElements(this.element.children), this.slider),
            this.viewport.appendChild(this.slider),
            this.element.appendChild(this.viewport),
            this.reloadCells(),
            this.options.accessibility &&
              ((this.element.tabIndex = 0),
              d.bind(this.element, "keydown", this)),
            this.emit("activate")
          var a,
            c = this.options.initialIndex
          ;(a = this.isInitActivated
            ? this.selectedIndex
            : void 0 !== c && this.cells[c]
            ? c
            : 0),
            this.select(a, !1, !0),
            (this.isInitActivated = !0)
        }
      }),
      (j.prototype._createSlider = function () {
        var a = document.createElement("div")
        ;(a.className = "flickity-slider"),
          (a.style[this.originSide] = 0),
          (this.slider = a)
      }),
      (j.prototype._filterFindCellElements = function (a) {
        return f.filterFindElements(a, this.options.cellSelector)
      }),
      (j.prototype.reloadCells = function () {
        ;(this.cells = this._makeCells(this.slider.children)),
          this.positionCells(),
          this._getWrapShiftCells(),
          this.setGallerySize()
      }),
      (j.prototype._makeCells = function (a) {
        for (
          var b = this._filterFindCellElements(a), c = [], d = 0, e = b.length;
          e > d;
          d++
        ) {
          var f = b[d],
            h = new g(f, this)
          c.push(h)
        }
        return c
      }),
      (j.prototype.getLastCell = function () {
        return this.cells[this.cells.length - 1]
      }),
      (j.prototype.positionCells = function () {
        this._sizeCells(this.cells), this._positionCells(0)
      }),
      (j.prototype._positionCells = function (a) {
        ;(a = a || 0), (this.maxCellHeight = a ? this.maxCellHeight || 0 : 0)
        var b = 0
        if (a > 0) {
          var c = this.cells[a - 1]
          b = c.x + c.size.outerWidth
        }
        for (var d, e = this.cells.length, f = a; e > f; f++)
          (d = this.cells[f]),
            d.setPosition(b),
            (b += d.size.outerWidth),
            (this.maxCellHeight = Math.max(
              d.size.outerHeight,
              this.maxCellHeight
            ))
        ;(this.slideableWidth = b), this._containCells()
      }),
      (j.prototype._sizeCells = function (a) {
        for (var b = 0, c = a.length; c > b; b++) {
          a[b].getSize()
        }
      }),
      (j.prototype._init = j.prototype.reposition = function () {
        this.positionCells(), this.positionSliderAtSelected()
      }),
      (j.prototype.getSize = function () {
        ;(this.size = e(this.element)),
          this.setCellAlign(),
          (this.cursorPosition = this.size.innerWidth * this.cellAlign)
      })
    var p = {
      center: { left: 0.5, right: 0.5 },
      left: { left: 0, right: 1 },
      right: { right: 0, left: 1 },
    }
    ;(j.prototype.setCellAlign = function () {
      var a = p[this.options.cellAlign]
      this.cellAlign = a ? a[this.originSide] : this.options.cellAlign
    }),
      (j.prototype.setGallerySize = function () {
        this.options.setGallerySize &&
          (this.viewport.style.height = this.maxCellHeight + "px")
      }),
      (j.prototype._getWrapShiftCells = function () {
        if (this.options.wrapAround) {
          this._unshiftCells(this.beforeShiftCells),
            this._unshiftCells(this.afterShiftCells)
          var a = this.cursorPosition,
            b = this.cells.length - 1
          ;(this.beforeShiftCells = this._getGapCells(a, b, -1)),
            (a = this.size.innerWidth - this.cursorPosition),
            (this.afterShiftCells = this._getGapCells(a, 0, 1))
        }
      }),
      (j.prototype._getGapCells = function (a, b, c) {
        for (var d = []; a > 0; ) {
          var e = this.cells[b]
          if (!e) break
          d.push(e), (b += c), (a -= e.size.outerWidth)
        }
        return d
      }),
      (j.prototype._containCells = function () {
        if (
          this.options.contain &&
          !this.options.wrapAround &&
          this.cells.length
        )
          for (
            var a = this.options.rightToLeft ? "marginRight" : "marginLeft",
              b = this.options.rightToLeft ? "marginLeft" : "marginRight",
              c = this.cells[0].size[a],
              d = this.getLastCell(),
              e = this.slideableWidth - d.size[b],
              f = e - this.size.innerWidth * (1 - this.cellAlign),
              g = e < this.size.innerWidth,
              h = 0,
              i = this.cells.length;
            i > h;
            h++
          ) {
            var j = this.cells[h]
            j.setDefaultTarget(),
              g
                ? (j.target = e * this.cellAlign)
                : ((j.target = Math.max(j.target, this.cursorPosition + c)),
                  (j.target = Math.min(j.target, f)))
          }
      }),
      (j.prototype.dispatchEvent = function (a, b, c) {
        var d = [b].concat(c)
        if ((this.emitEvent(a, d), k && this.$element))
          if (b) {
            var e = k.Event(b)
            ;(e.type = a), this.$element.trigger(e, c)
          } else this.$element.trigger(a, c)
      }),
      (j.prototype.select = function (a, b, c) {
        if (this.isActive) {
          a = parseInt(a, 10)
          var d = this.cells.length
          this.options.wrapAround &&
            d > 1 &&
            (0 > a
              ? (this.x -= this.slideableWidth)
              : a >= d && (this.x += this.slideableWidth)),
            (this.options.wrapAround || b) && (a = f.modulo(a, d)),
            this.cells[a] &&
              ((this.selectedIndex = a),
              this.setSelectedCell(),
              c ? this.positionSliderAtSelected() : this.startAnimation(),
              this.dispatchEvent("cellSelect"))
        }
      }),
      (j.prototype.previous = function (a) {
        this.select(this.selectedIndex - 1, a)
      }),
      (j.prototype.next = function (a) {
        this.select(this.selectedIndex + 1, a)
      }),
      (j.prototype.setSelectedCell = function () {
        this._removeSelectedCellClass(),
          (this.selectedCell = this.cells[this.selectedIndex]),
          (this.selectedElement = this.selectedCell.element),
          b.add(this.selectedElement, "is-selected")
      }),
      (j.prototype._removeSelectedCellClass = function () {
        this.selectedCell && b.remove(this.selectedCell.element, "is-selected")
      }),
      (j.prototype.getCell = function (a) {
        for (var b = 0, c = this.cells.length; c > b; b++) {
          var d = this.cells[b]
          if (d.element == a) return d
        }
      }),
      (j.prototype.getCells = function (a) {
        a = f.makeArray(a)
        for (var b = [], c = 0, d = a.length; d > c; c++) {
          var e = a[c],
            g = this.getCell(e)
          g && b.push(g)
        }
        return b
      }),
      (j.prototype.getCellElements = function () {
        for (var a = [], b = 0, c = this.cells.length; c > b; b++)
          a.push(this.cells[b].element)
        return a
      }),
      (j.prototype.getParentCell = function (a) {
        var b = this.getCell(a)
        return (
          b || ((a = f.getParent(a, ".flickity-slider > *")), this.getCell(a))
        )
      }),
      (j.prototype.getAdjacentCellElements = function (a, b) {
        if (!a) return [this.selectedElement]
        b = void 0 === b ? this.selectedIndex : b
        var c = this.cells.length
        if (1 + 2 * a >= c) return this.getCellElements()
        for (var d = [], e = b - a; b + a >= e; e++) {
          var g = this.options.wrapAround ? f.modulo(e, c) : e,
            h = this.cells[g]
          h && d.push(h.element)
        }
        return d
      }),
      (j.prototype.uiChange = function () {
        this.emit("uiChange")
      }),
      (j.prototype.childUIPointerDown = function (a) {
        this.emitEvent("childUIPointerDown", [a])
      }),
      (j.prototype.onresize = function () {
        this.watchCSS(), this.resize()
      }),
      f.debounceMethod(j, "onresize", 150),
      (j.prototype.resize = function () {
        this.isActive &&
          (this.getSize(),
          this.options.wrapAround &&
            (this.x = f.modulo(this.x, this.slideableWidth)),
          this.positionCells(),
          this._getWrapShiftCells(),
          this.setGallerySize(),
          this.positionSliderAtSelected())
      })
    var q = (j.supportsConditionalCSS = (function () {
      var a
      return function () {
        if (void 0 !== a) return a
        if (!l) return void (a = !1)
        var b = document.createElement("style"),
          c = document.createTextNode(
            'body:after { content: "foo"; display: none; }'
          )
        b.appendChild(c), document.head.appendChild(b)
        var d = l(document.body, ":after").content
        return (a = -1 != d.indexOf("foo")), document.head.removeChild(b), a
      }
    })())
    ;(j.prototype.watchCSS = function () {
      var a = this.options.watchCSS
      if (a) {
        if (!q()) {
          return void this["fallbackOn" == a ? "activate" : "deactivate"]()
        }
        ;-1 != l(this.element, ":after").content.indexOf("flickity")
          ? this.activate()
          : this.deactivate()
      }
    }),
      (j.prototype.onkeydown = function (a) {
        if (
          this.options.accessibility &&
          (!document.activeElement || document.activeElement == this.element)
        )
          if (37 == a.keyCode) {
            var b = this.options.rightToLeft ? "next" : "previous"
            this.uiChange(), this[b]()
          } else if (39 == a.keyCode) {
            var c = this.options.rightToLeft ? "previous" : "next"
            this.uiChange(), this[c]()
          }
      }),
      (j.prototype.deactivate = function () {
        if (this.isActive) {
          b.remove(this.element, "flickity-enabled"),
            b.remove(this.element, "flickity-rtl")
          for (var a = 0, c = this.cells.length; c > a; a++) {
            this.cells[a].destroy()
          }
          this._removeSelectedCellClass(),
            this.element.removeChild(this.viewport),
            i(this.slider.children, this.element),
            this.options.accessibility &&
              (this.element.removeAttribute("tabIndex"),
              d.unbind(this.element, "keydown", this)),
            (this.isActive = !1),
            this.emit("deactivate")
        }
      }),
      (j.prototype.destroy = function () {
        this.deactivate(),
          this.isResizeBound && d.unbind(a, "resize", this),
          this.emit("destroy"),
          k && this.$element && k.removeData(this.element, "flickity"),
          delete this.element.flickityGUID,
          delete o[this.guid]
      }),
      f.extend(j.prototype, h)
    var r = "attachEvent" in a
    return (
      (j.setUnselectable = function (a) {
        r && a.setAttribute("unselectable", "on")
      }),
      (j.data = function (a) {
        a = f.getQueryElement(a)
        var b = a && a.flickityGUID
        return b && o[b]
      }),
      f.htmlInit(j, "flickity"),
      k && k.bridget && k.bridget("flickity", j),
      (j.Cell = g),
      j
    )
  }),
  (function (a, b) {
    "use strict"
    "function" == typeof define && define.amd
      ? define("unipointer/unipointer", [
          "eventEmitter/EventEmitter",
          "eventie/eventie",
        ], function (c, d) {
          return b(a, c, d)
        })
      : "object" == typeof exports
      ? (module.exports = b(
          a,
          require("wolfy87-eventemitter"),
          require("eventie")
        ))
      : (a.Unipointer = b(a, a.EventEmitter, a.eventie))
  })(window, function (a, b, c) {
    function d() {}
    function e() {}
    ;(e.prototype = new b()),
      (e.prototype.bindStartEvent = function (a) {
        this._bindStartEvent(a, !0)
      }),
      (e.prototype.unbindStartEvent = function (a) {
        this._bindStartEvent(a, !1)
      }),
      (e.prototype._bindStartEvent = function (b, d) {
        d = void 0 === d || !!d
        var e = d ? "bind" : "unbind"
        a.navigator.pointerEnabled
          ? c[e](b, "pointerdown", this)
          : a.navigator.msPointerEnabled
          ? c[e](b, "MSPointerDown", this)
          : (c[e](b, "mousedown", this), c[e](b, "touchstart", this))
      }),
      (e.prototype.handleEvent = function (a) {
        var b = "on" + a.type
        this[b] && this[b](a)
      }),
      (e.prototype.getTouch = function (a) {
        for (var b = 0, c = a.length; c > b; b++) {
          var d = a[b]
          if (d.identifier == this.pointerIdentifier) return d
        }
      }),
      (e.prototype.onmousedown = function (a) {
        var b = a.button
        ;(b && 0 !== b && 1 !== b) || this._pointerDown(a, a)
      }),
      (e.prototype.ontouchstart = function (a) {
        this._pointerDown(a, a.changedTouches[0])
      }),
      (e.prototype.onMSPointerDown = e.prototype.onpointerdown = function (a) {
        this._pointerDown(a, a)
      }),
      (e.prototype._pointerDown = function (a, b) {
        this.isPointerDown ||
          ((this.isPointerDown = !0),
          (this.pointerIdentifier =
            void 0 !== b.pointerId ? b.pointerId : b.identifier),
          this.pointerDown(a, b))
      }),
      (e.prototype.pointerDown = function (a, b) {
        this._bindPostStartEvents(a), this.emitEvent("pointerDown", [a, b])
      })
    var f = {
      mousedown: ["mousemove", "mouseup"],
      touchstart: ["touchmove", "touchend", "touchcancel"],
      pointerdown: ["pointermove", "pointerup", "pointercancel"],
      MSPointerDown: ["MSPointerMove", "MSPointerUp", "MSPointerCancel"],
    }
    return (
      (e.prototype._bindPostStartEvents = function (b) {
        if (b) {
          for (
            var d = f[b.type],
              e = b.preventDefault ? a : document,
              g = 0,
              h = d.length;
            h > g;
            g++
          ) {
            var i = d[g]
            c.bind(e, i, this)
          }
          this._boundPointerEvents = { events: d, node: e }
        }
      }),
      (e.prototype._unbindPostStartEvents = function () {
        var a = this._boundPointerEvents
        if (a && a.events) {
          for (var b = 0, d = a.events.length; d > b; b++) {
            var e = a.events[b]
            c.unbind(a.node, e, this)
          }
          delete this._boundPointerEvents
        }
      }),
      (e.prototype.onmousemove = function (a) {
        this._pointerMove(a, a)
      }),
      (e.prototype.onMSPointerMove = e.prototype.onpointermove = function (a) {
        a.pointerId == this.pointerIdentifier && this._pointerMove(a, a)
      }),
      (e.prototype.ontouchmove = function (a) {
        var b = this.getTouch(a.changedTouches)
        b && this._pointerMove(a, b)
      }),
      (e.prototype._pointerMove = function (a, b) {
        this.pointerMove(a, b)
      }),
      (e.prototype.pointerMove = function (a, b) {
        this.emitEvent("pointerMove", [a, b])
      }),
      (e.prototype.onmouseup = function (a) {
        this._pointerUp(a, a)
      }),
      (e.prototype.onMSPointerUp = e.prototype.onpointerup = function (a) {
        a.pointerId == this.pointerIdentifier && this._pointerUp(a, a)
      }),
      (e.prototype.ontouchend = function (a) {
        var b = this.getTouch(a.changedTouches)
        b && this._pointerUp(a, b)
      }),
      (e.prototype._pointerUp = function (a, b) {
        this._pointerDone(), this.pointerUp(a, b)
      }),
      (e.prototype.pointerUp = function (a, b) {
        this.emitEvent("pointerUp", [a, b])
      }),
      (e.prototype._pointerDone = function () {
        ;(this.isPointerDown = !1),
          delete this.pointerIdentifier,
          this._unbindPostStartEvents(),
          this.pointerDone()
      }),
      (e.prototype.pointerDone = d),
      (e.prototype.onMSPointerCancel = e.prototype.onpointercancel = function (
        a
      ) {
        a.pointerId == this.pointerIdentifier && this._pointerCancel(a, a)
      }),
      (e.prototype.ontouchcancel = function (a) {
        var b = this.getTouch(a.changedTouches)
        b && this._pointerCancel(a, b)
      }),
      (e.prototype._pointerCancel = function (a, b) {
        this._pointerDone(), this.pointerCancel(a, b)
      }),
      (e.prototype.pointerCancel = function (a, b) {
        this.emitEvent("pointerCancel", [a, b])
      }),
      (e.getPointerPoint = function (a) {
        return {
          x: void 0 !== a.pageX ? a.pageX : a.clientX,
          y: void 0 !== a.pageY ? a.pageY : a.clientY,
        }
      }),
      e
    )
  }),
  (function (a, b) {
    "use strict"
    "function" == typeof define && define.amd
      ? define("unidragger/unidragger", [
          "eventie/eventie",
          "unipointer/unipointer",
        ], function (c, d) {
          return b(a, c, d)
        })
      : "object" == typeof exports
      ? (module.exports = b(a, require("eventie"), require("unipointer")))
      : (a.Unidragger = b(a, a.eventie, a.Unipointer))
  })(window, function (a, b, c) {
    function d() {}
    function e(a) {
      a.preventDefault ? a.preventDefault() : (a.returnValue = !1)
    }
    function f() {}
    function g() {
      return !1
    }
    ;(f.prototype = new c()),
      (f.prototype.bindHandles = function () {
        this._bindHandles(!0)
      }),
      (f.prototype.unbindHandles = function () {
        this._bindHandles(!1)
      })
    var h = a.navigator
    f.prototype._bindHandles = function (a) {
      a = void 0 === a || !!a
      var c
      c = h.pointerEnabled
        ? function (b) {
            b.style.touchAction = a ? "none" : ""
          }
        : h.msPointerEnabled
        ? function (b) {
            b.style.msTouchAction = a ? "none" : ""
          }
        : function () {
            a && j(g)
          }
      for (
        var d = a ? "bind" : "unbind", e = 0, f = this.handles.length;
        f > e;
        e++
      ) {
        var g = this.handles[e]
        this._bindStartEvent(g, a), c(g), b[d](g, "click", this)
      }
    }
    var i = "attachEvent" in document.documentElement,
      j = i
        ? function (a) {
            "IMG" == a.nodeName && (a.ondragstart = g)
            for (
              var b = a.querySelectorAll("img"), c = 0, d = b.length;
              d > c;
              c++
            ) {
              b[c].ondragstart = g
            }
          }
        : d
    ;(f.prototype.pointerDown = function (c, d) {
      if ("INPUT" == c.target.nodeName && "range" == c.target.type)
        return (this.isPointerDown = !1), void delete this.pointerIdentifier
      this._dragPointerDown(c, d)
      var e = document.activeElement
      e && e.blur && e.blur(),
        this._bindPostStartEvents(c),
        (this.pointerDownScroll = f.getScrollPosition()),
        b.bind(a, "scroll", this),
        this.emitEvent("pointerDown", [c, d])
    }),
      (f.prototype._dragPointerDown = function (a, b) {
        this.pointerDownPoint = c.getPointerPoint(b)
        var d = "touchstart" == a.type,
          f = a.target.nodeName
        d || "SELECT" == f || e(a)
      }),
      (f.prototype.pointerMove = function (a, b) {
        var c = this._dragPointerMove(a, b)
        this.emitEvent("pointerMove", [a, b, c]), this._dragMove(a, b, c)
      }),
      (f.prototype._dragPointerMove = function (a, b) {
        var d = c.getPointerPoint(b),
          e = {
            x: d.x - this.pointerDownPoint.x,
            y: d.y - this.pointerDownPoint.y,
          }
        return (
          !this.isDragging && this.hasDragStarted(e) && this._dragStart(a, b), e
        )
      }),
      (f.prototype.hasDragStarted = function (a) {
        return Math.abs(a.x) > 3 || Math.abs(a.y) > 3
      }),
      (f.prototype.pointerUp = function (a, b) {
        this.emitEvent("pointerUp", [a, b]), this._dragPointerUp(a, b)
      }),
      (f.prototype._dragPointerUp = function (a, b) {
        this.isDragging ? this._dragEnd(a, b) : this._staticClick(a, b)
      }),
      (f.prototype.pointerDone = function () {
        b.unbind(a, "scroll", this)
      }),
      (f.prototype._dragStart = function (a, b) {
        ;(this.isDragging = !0),
          (this.dragStartPoint = f.getPointerPoint(b)),
          (this.isPreventingClicks = !0),
          this.dragStart(a, b)
      }),
      (f.prototype.dragStart = function (a, b) {
        this.emitEvent("dragStart", [a, b])
      }),
      (f.prototype._dragMove = function (a, b, c) {
        this.isDragging && this.dragMove(a, b, c)
      }),
      (f.prototype.dragMove = function (a, b, c) {
        e(a), this.emitEvent("dragMove", [a, b, c])
      }),
      (f.prototype._dragEnd = function (a, b) {
        this.isDragging = !1
        var c = this
        setTimeout(function () {
          delete c.isPreventingClicks
        }),
          this.dragEnd(a, b)
      }),
      (f.prototype.dragEnd = function (a, b) {
        this.emitEvent("dragEnd", [a, b])
      }),
      (f.prototype.pointerDone = function () {
        b.unbind(a, "scroll", this), delete this.pointerDownScroll
      }),
      (f.prototype.onclick = function (a) {
        this.isPreventingClicks && e(a)
      }),
      (f.prototype._staticClick = function (a, b) {
        if (!this.isIgnoringMouseUp || "mouseup" != a.type) {
          var c = a.target.nodeName
          if (
            (("INPUT" == c || "TEXTAREA" == c) && a.target.focus(),
            this.staticClick(a, b),
            "mouseup" != a.type)
          ) {
            this.isIgnoringMouseUp = !0
            var d = this
            setTimeout(function () {
              delete d.isIgnoringMouseUp
            }, 400)
          }
        }
      }),
      (f.prototype.staticClick = function (a, b) {
        this.emitEvent("staticClick", [a, b])
      }),
      (f.prototype.onscroll = function () {
        var a = f.getScrollPosition(),
          b = this.pointerDownScroll.x - a.x,
          c = this.pointerDownScroll.y - a.y
        ;(Math.abs(b) > 3 || Math.abs(c) > 3) && this._pointerDone()
      }),
      (f.getPointerPoint = function (a) {
        return {
          x: void 0 !== a.pageX ? a.pageX : a.clientX,
          y: void 0 !== a.pageY ? a.pageY : a.clientY,
        }
      })
    var k = void 0 !== a.pageYOffset
    return (
      (f.getScrollPosition = function () {
        return {
          x: k ? a.pageXOffset : document.body.scrollLeft,
          y: k ? a.pageYOffset : document.body.scrollTop,
        }
      }),
      (f.getPointerPoint = c.getPointerPoint),
      f
    )
  }),
  (function (a, b) {
    "use strict"
    "function" == typeof define && define.amd
      ? define("flickity/js/drag", [
          "classie/classie",
          "eventie/eventie",
          "./flickity",
          "unidragger/unidragger",
          "fizzy-ui-utils/utils",
        ], function (c, d, e, f, g) {
          return b(a, c, d, e, f, g)
        })
      : "object" == typeof exports
      ? (module.exports = b(
          a,
          require("desandro-classie"),
          require("eventie"),
          require("./flickity"),
          require("unidragger"),
          require("fizzy-ui-utils")
        ))
      : (a.Flickity = b(
          a,
          a.classie,
          a.eventie,
          a.Flickity,
          a.Unidragger,
          a.fizzyUIUtils
        ))
  })(window, function (a, b, c, d, e, f) {
    function g(a) {
      a.preventDefault ? a.preventDefault() : (a.returnValue = !1)
    }
    function h(b) {
      return e.getPointerPoint(b).y - a.pageYOffset
    }
    f.extend(d.defaults, { draggable: !0, touchVerticalScroll: !0 }),
      d.createMethods.push("_createDrag"),
      f.extend(d.prototype, e.prototype),
      (d.prototype._createDrag = function () {
        this.on("activate", this.bindDrag),
          this.on("uiChange", this._uiChangeDrag),
          this.on("childUIPointerDown", this._childUIPointerDownDrag),
          this.on("deactivate", this.unbindDrag)
      }),
      (d.prototype.bindDrag = function () {
        this.options.draggable &&
          !this.isDragBound &&
          (b.add(this.element, "is-draggable"),
          (this.handles = [this.viewport]),
          this.bindHandles(),
          (this.isDragBound = !0))
      }),
      (d.prototype.unbindDrag = function () {
        this.isDragBound &&
          (b.remove(this.element, "is-draggable"),
          this.unbindHandles(),
          delete this.isDragBound)
      }),
      (d.prototype._uiChangeDrag = function () {
        delete this.isFreeScrolling
      }),
      (d.prototype._childUIPointerDownDrag = function (a) {
        g(a), this.pointerDownFocus(a)
      }),
      (d.prototype.pointerDown = function (d, f) {
        if ("INPUT" == d.target.nodeName && "range" == d.target.type)
          return (this.isPointerDown = !1), void delete this.pointerIdentifier
        this._dragPointerDown(d, f)
        var g = document.activeElement
        g && g.blur && g != this.element && g != document.body && g.blur(),
          this.pointerDownFocus(d),
          (this.dragX = this.x),
          b.add(this.viewport, "is-pointer-down"),
          this._bindPostStartEvents(d),
          (this.pointerDownScroll = e.getScrollPosition()),
          c.bind(a, "scroll", this),
          this.dispatchEvent("pointerDown", d, [f])
      })
    var i = { touchstart: !0, MSPointerDown: !0 },
      j = { INPUT: !0, SELECT: !0 }
    ;(d.prototype.pointerDownFocus = function (b) {
      if (this.options.accessibility && !i[b.type] && !j[b.target.nodeName]) {
        var c = a.pageYOffset
        this.element.focus(), a.pageYOffset != c && a.scrollTo(a.pageXOffset, c)
      }
    }),
      (d.prototype.pointerMove = function (a, b) {
        var c = this._dragPointerMove(a, b)
        this.touchVerticalScrollMove(a, b, c),
          this._dragMove(a, b, c),
          this.dispatchEvent("pointerMove", a, [b, c])
      }),
      (d.prototype.hasDragStarted = function (a) {
        return !this.isTouchScrolling && Math.abs(a.x) > 3
      }),
      (d.prototype.pointerUp = function (a, c) {
        delete this.isTouchScrolling,
          b.remove(this.viewport, "is-pointer-down"),
          this.dispatchEvent("pointerUp", a, [c]),
          this._dragPointerUp(a, c)
      })
    var k = { touchmove: !0, MSPointerMove: !0 }
    return (
      (d.prototype.touchVerticalScrollMove = function (b, c, d) {
        var e = this.options.touchVerticalScroll
        !("withDrag" == e ? !e : this.isDragging || !e) &&
          k[b.type] &&
          !this.isTouchScrolling &&
          Math.abs(d.y) > 10 &&
          ((this.startScrollY = a.pageYOffset),
          (this.pointerWindowStartY = h(c)),
          (this.isTouchScrolling = !0))
      }),
      (d.prototype.dragStart = function (a, b) {
        ;(this.dragStartPosition = this.x),
          this.startAnimation(),
          this.dispatchEvent("dragStart", a, [b])
      }),
      (d.prototype.dragMove = function (a, b, c) {
        g(a), (this.previousDragX = this.dragX)
        var d = this.options.rightToLeft ? -1 : 1,
          e = this.dragStartPosition + c.x * d
        if (!this.options.wrapAround && this.cells.length) {
          var f = Math.max(-this.cells[0].target, this.dragStartPosition)
          e = e > f ? 0.5 * (e + f) : e
          var h = Math.min(-this.getLastCell().target, this.dragStartPosition)
          e = h > e ? 0.5 * (e + h) : e
        }
        ;(this.dragX = e),
          (this.dragMoveTime = new Date()),
          this.dispatchEvent("dragMove", a, [b, c])
      }),
      (d.prototype.dragEnd = function (a, b) {
        this.options.freeScroll && (this.isFreeScrolling = !0)
        var c = this.dragEndRestingSelect()
        if (this.options.freeScroll && !this.options.wrapAround) {
          var d = this.getRestingPosition()
          this.isFreeScrolling =
            -d > this.cells[0].target && -d < this.getLastCell().target
        } else
          this.options.freeScroll ||
            c != this.selectedIndex ||
            (c += this.dragEndBoostSelect())
        delete this.previousDragX,
          this.select(c),
          this.dispatchEvent("dragEnd", a, [b])
      }),
      (d.prototype.dragEndRestingSelect = function () {
        var a = this.getRestingPosition(),
          b = Math.abs(this.getCellDistance(-a, this.selectedIndex)),
          c = this._getClosestResting(a, b, 1),
          d = this._getClosestResting(a, b, -1)
        return c.distance < d.distance ? c.index : d.index
      }),
      (d.prototype._getClosestResting = function (a, b, c) {
        for (
          var d = this.selectedIndex,
            e = 1 / 0,
            f =
              this.options.contain && !this.options.wrapAround
                ? function (a, b) {
                    return b >= a
                  }
                : function (a, b) {
                    return b > a
                  };
          f(b, e) &&
          ((d += c), (e = b), null !== (b = this.getCellDistance(-a, d)));

        )
          b = Math.abs(b)
        return { distance: e, index: d - c }
      }),
      (d.prototype.getCellDistance = function (a, b) {
        var c = this.cells.length,
          d = this.options.wrapAround && c > 1,
          e = d ? f.modulo(b, c) : b,
          g = this.cells[e]
        if (!g) return null
        var h = d ? this.slideableWidth * Math.floor(b / c) : 0
        return a - (g.target + h)
      }),
      (d.prototype.dragEndBoostSelect = function () {
        if (
          void 0 === this.previousDragX ||
          !this.dragMoveTime ||
          new Date() - this.dragMoveTime > 100
        )
          return 0
        var a = this.getCellDistance(-this.dragX, this.selectedIndex),
          b = this.previousDragX - this.dragX
        return a > 0 && b > 0 ? 1 : 0 > a && 0 > b ? -1 : 0
      }),
      (d.prototype.staticClick = function (a, b) {
        var c = this.getParentCell(a.target),
          d = c && c.element,
          e = c && f.indexOf(this.cells, c)
        this.dispatchEvent("staticClick", a, [b, d, e])
      }),
      d
    )
  }),
  (function (a, b) {
    "use strict"
    "function" == typeof define && define.amd
      ? define("tap-listener/tap-listener", [
          "unipointer/unipointer",
        ], function (c) {
          return b(a, c)
        })
      : "object" == typeof exports
      ? (module.exports = b(a, require("unipointer")))
      : (a.TapListener = b(a, a.Unipointer))
  })(window, function (a, b) {
    function c(a) {
      a.preventDefault ? a.preventDefault() : (a.returnValue = !1)
    }
    function d(a) {
      this.bindTap(a)
    }
    ;(d.prototype = new b()),
      (d.prototype.bindTap = function (a) {
        a &&
          (this.unbindTap(), (this.tapElement = a), this._bindStartEvent(a, !0))
      }),
      (d.prototype.unbindTap = function () {
        this.tapElement &&
          (this._bindStartEvent(this.tapElement, !0), delete this.tapElement)
      })
    var e = d.prototype.pointerDown
    d.prototype.pointerDown = function (a) {
      "touchstart" == a.type && c(a), e.apply(this, arguments)
    }
    var f = void 0 !== a.pageYOffset
    return (
      (d.prototype.pointerUp = function (c, d) {
        var e = b.getPointerPoint(d),
          g = this.tapElement.getBoundingClientRect(),
          h = f ? a.pageXOffset : document.body.scrollLeft,
          i = f ? a.pageYOffset : document.body.scrollTop
        e.x >= g.left + h &&
          e.x <= g.right + h &&
          e.y >= g.top + i &&
          e.y <= g.bottom + i &&
          this.emitEvent("tap", [c, d])
      }),
      (d.prototype.destroy = function () {
        this.pointerDone(), this.unbindTap()
      }),
      d
    )
  }),
  (function (a, b) {
    "use strict"
    "function" == typeof define && define.amd
      ? define("flickity/js/prev-next-button", [
          "eventie/eventie",
          "./flickity",
          "tap-listener/tap-listener",
          "fizzy-ui-utils/utils",
        ], function (c, d, e, f) {
          return b(a, c, d, e, f)
        })
      : "object" == typeof exports
      ? (module.exports = b(
          a,
          require("eventie"),
          require("./flickity"),
          require("tap-listener"),
          require("fizzy-ui-utils")
        ))
      : b(a, a.eventie, a.Flickity, a.TapListener, a.fizzyUIUtils)
  })(window, function (a, b, c, d, e) {
    function f(a, b) {
      ;(this.direction = a), (this.parent = b), this._create()
    }
    function g(a) {
      return "string" == typeof a
        ? a
        : "M " +
            a.x0 +
            ",50 L " +
            a.x1 +
            "," +
            (a.y1 + 50) +
            " L " +
            a.x2 +
            "," +
            (a.y2 + 50) +
            " L " +
            a.x3 +
            ",50  L " +
            a.x2 +
            "," +
            (50 - a.y2) +
            " L " +
            a.x1 +
            "," +
            (50 - a.y1) +
            " Z"
    }
    var h = "http://www.w3.org/2000/svg",
      i = (function () {
        function a() {
          if (void 0 !== b) return b
          var a = document.createElement("div")
          return (
            (a.innerHTML = "<svg/>"),
            (b = (a.firstChild && a.firstChild.namespaceURI) == h)
          )
        }
        var b
        return a
      })()
    return (
      (f.prototype = new d()),
      (f.prototype._create = function () {
        ;(this.isEnabled = !0), (this.isPrevious = -1 == this.direction)
        var a = this.parent.options.rightToLeft ? 1 : -1
        this.isLeft = this.direction == a
        var b = (this.element = document.createElement("button"))
        if (
          ((b.className = "flickity-prev-next-button"),
          (b.className += this.isPrevious ? " previous" : " next"),
          b.setAttribute("type", "button"),
          this.disable(),
          c.setUnselectable(b),
          i())
        ) {
          var d = this.createSVG()
          b.appendChild(d)
        } else this.setArrowText(), (b.className += " no-svg")
        var e = this
        ;(this.onCellSelect = function () {
          e.update()
        }),
          this.parent.on("cellSelect", this.onCellSelect),
          this.on("tap", this.onTap),
          this.on("pointerDown", function (a, b) {
            e.parent.childUIPointerDown(b)
          })
      }),
      (f.prototype.activate = function () {
        this.bindTap(this.element),
          b.bind(this.element, "click", this),
          this.parent.element.appendChild(this.element)
      }),
      (f.prototype.deactivate = function () {
        this.parent.element.removeChild(this.element),
          d.prototype.destroy.call(this),
          b.unbind(this.element, "click", this)
      }),
      (f.prototype.createSVG = function () {
        var a = document.createElementNS(h, "svg")
        a.setAttribute("viewBox", "0 0 100 100")
        var b = document.createElementNS(h, "path"),
          c = g(this.parent.options.arrowShape)
        return (
          b.setAttribute("d", c),
          b.setAttribute("class", "arrow"),
          this.isLeft ||
            b.setAttribute("transform", "translate(100, 100) rotate(180) "),
          a.appendChild(b),
          a
        )
      }),
      (f.prototype.setArrowText = function () {
        var a = this.parent.options,
          b = this.isLeft ? a.leftArrowText : a.rightArrowText
        e.setText(this.element, b)
      }),
      (f.prototype.onTap = function () {
        if (this.isEnabled) {
          this.parent.uiChange()
          var a = this.isPrevious ? "previous" : "next"
          this.parent[a]()
        }
      }),
      (f.prototype.handleEvent = e.handleEvent),
      (f.prototype.onclick = function () {
        var a = document.activeElement
        a && a == this.element && this.onTap()
      }),
      (f.prototype.enable = function () {
        this.isEnabled || ((this.element.disabled = !1), (this.isEnabled = !0))
      }),
      (f.prototype.disable = function () {
        this.isEnabled && ((this.element.disabled = !0), (this.isEnabled = !1))
      }),
      (f.prototype.update = function () {
        var a = this.parent.cells
        if (this.parent.options.wrapAround && a.length > 1)
          return void this.enable()
        var b = a.length ? a.length - 1 : 0,
          c = this.isPrevious ? 0 : b
        this[this.parent.selectedIndex == c ? "disable" : "enable"]()
      }),
      (f.prototype.destroy = function () {
        this.deactivate()
      }),
      e.extend(c.defaults, {
        prevNextButtons: !0,
        leftArrowText: "‹",
        rightArrowText: "›",
        arrowShape: { x0: 10, x1: 60, y1: 50, x2: 70, y2: 40, x3: 30 },
      }),
      c.createMethods.push("_createPrevNextButtons"),
      (c.prototype._createPrevNextButtons = function () {
        this.options.prevNextButtons &&
          ((this.prevButton = new f(-1, this)),
          (this.nextButton = new f(1, this)),
          this.on("activate", this.activatePrevNextButtons))
      }),
      (c.prototype.activatePrevNextButtons = function () {
        this.prevButton.activate(),
          this.nextButton.activate(),
          this.on("deactivate", this.deactivatePrevNextButtons)
      }),
      (c.prototype.deactivatePrevNextButtons = function () {
        this.prevButton.deactivate(),
          this.nextButton.deactivate(),
          this.off("deactivate", this.deactivatePrevNextButtons)
      }),
      (c.PrevNextButton = f),
      c
    )
  }),
  (function (a, b) {
    "use strict"
    "function" == typeof define && define.amd
      ? define("flickity/js/page-dots", [
          "eventie/eventie",
          "./flickity",
          "tap-listener/tap-listener",
          "fizzy-ui-utils/utils",
        ], function (c, d, e, f) {
          return b(a, c, d, e, f)
        })
      : "object" == typeof exports
      ? (module.exports = b(
          a,
          require("eventie"),
          require("./flickity"),
          require("tap-listener"),
          require("fizzy-ui-utils")
        ))
      : b(a, a.eventie, a.Flickity, a.TapListener, a.fizzyUIUtils)
  })(window, function (a, b, c, d, e) {
    function f(a) {
      ;(this.parent = a), this._create()
    }
    return (
      (f.prototype = new d()),
      (f.prototype._create = function () {
        ;(this.holder = document.createElement("ol")),
          (this.holder.className = "flickity-page-dots"),
          c.setUnselectable(this.holder),
          (this.dots = [])
        var a = this
        ;(this.onCellSelect = function () {
          a.updateSelected()
        }),
          this.parent.on("cellSelect", this.onCellSelect),
          this.on("tap", this.onTap),
          this.on("pointerDown", function (b, c) {
            a.parent.childUIPointerDown(c)
          })
      }),
      (f.prototype.activate = function () {
        this.setDots(),
          this.bindTap(this.holder),
          this.parent.element.appendChild(this.holder)
      }),
      (f.prototype.deactivate = function () {
        this.parent.element.removeChild(this.holder),
          d.prototype.destroy.call(this)
      }),
      (f.prototype.setDots = function () {
        var a = this.parent.cells.length - this.dots.length
        a > 0 ? this.addDots(a) : 0 > a && this.removeDots(-a)
      }),
      (f.prototype.addDots = function (a) {
        for (var b = document.createDocumentFragment(), c = []; a; ) {
          var d = document.createElement("li")
          ;(d.className = "dot"), b.appendChild(d), c.push(d), a--
        }
        this.holder.appendChild(b), (this.dots = this.dots.concat(c))
      }),
      (f.prototype.removeDots = function (a) {
        for (
          var b = this.dots.splice(this.dots.length - a, a),
            c = 0,
            d = b.length;
          d > c;
          c++
        ) {
          var e = b[c]
          this.holder.removeChild(e)
        }
      }),
      (f.prototype.updateSelected = function () {
        this.selectedDot && (this.selectedDot.className = "dot"),
          this.dots.length &&
            ((this.selectedDot = this.dots[this.parent.selectedIndex]),
            (this.selectedDot.className = "dot is-selected"))
      }),
      (f.prototype.onTap = function (a) {
        var b = a.target
        if ("LI" == b.nodeName) {
          this.parent.uiChange()
          var c = e.indexOf(this.dots, b)
          this.parent.select(c)
        }
      }),
      (f.prototype.destroy = function () {
        this.deactivate()
      }),
      (c.PageDots = f),
      e.extend(c.defaults, { pageDots: !0 }),
      c.createMethods.push("_createPageDots"),
      (c.prototype._createPageDots = function () {
        this.options.pageDots &&
          ((this.pageDots = new f(this)),
          this.on("activate", this.activatePageDots),
          this.on("cellAddedRemoved", this.onCellAddedRemovedPageDots),
          this.on("deactivate", this.deactivatePageDots))
      }),
      (c.prototype.activatePageDots = function () {
        this.pageDots.activate()
      }),
      (c.prototype.onCellAddedRemovedPageDots = function () {
        this.pageDots.setDots()
      }),
      (c.prototype.deactivatePageDots = function () {
        this.pageDots.deactivate()
      }),
      (c.PageDots = f),
      c
    )
  }),
  (function (a, b) {
    "use strict"
    "function" == typeof define && define.amd
      ? define("flickity/js/player", [
          "eventEmitter/EventEmitter",
          "eventie/eventie",
          "fizzy-ui-utils/utils",
          "./flickity",
        ], function (a, c, d, e) {
          return b(a, c, d, e)
        })
      : "object" == typeof exports
      ? (module.exports = b(
          require("wolfy87-eventemitter"),
          require("eventie"),
          require("fizzy-ui-utils"),
          require("./flickity")
        ))
      : b(a.EventEmitter, a.eventie, a.fizzyUIUtils, a.Flickity)
  })(window, function (a, b, c, d) {
    function e(a) {
      if (((this.isPlaying = !1), (this.parent = a), g)) {
        var b = this
        this.onVisibilityChange = function () {
          b.visibilityChange()
        }
      }
    }
    var f, g
    return (
      "hidden" in document
        ? ((f = "hidden"), (g = "visibilitychange"))
        : "webkitHidden" in document &&
          ((f = "webkitHidden"), (g = "webkitvisibilitychange")),
      (e.prototype = new a()),
      (e.prototype.play = function () {
        ;(this.isPlaying = !0),
          delete this.isPaused,
          g && document.addEventListener(g, this.onVisibilityChange, !1),
          this.tick()
      }),
      (e.prototype.tick = function () {
        if (this.isPlaying && !this.isPaused) {
          this.tickTime = new Date()
          var a = this.parent.options.autoPlay
          a = "number" == typeof a ? a : 3e3
          var b = this
          this.timeout = setTimeout(function () {
            b.parent.next(!0), b.tick()
          }, a)
        }
      }),
      (e.prototype.stop = function () {
        ;(this.isPlaying = !1),
          delete this.isPaused,
          this.clear(),
          g && document.removeEventListener(g, this.onVisibilityChange, !1)
      }),
      (e.prototype.clear = function () {
        clearTimeout(this.timeout)
      }),
      (e.prototype.pause = function () {
        this.isPlaying && ((this.isPaused = !0), this.clear())
      }),
      (e.prototype.unpause = function () {
        this.isPaused && this.play()
      }),
      (e.prototype.visibilityChange = function () {
        this[document[f] ? "pause" : "unpause"]()
      }),
      c.extend(d.defaults, { pauseAutoPlayOnHover: !0 }),
      d.createMethods.push("_createPlayer"),
      (d.prototype._createPlayer = function () {
        ;(this.player = new e(this)),
          this.on("activate", this.activatePlayer),
          this.on("uiChange", this.stopPlayer),
          this.on("pointerDown", this.stopPlayer),
          this.on("deactivate", this.deactivatePlayer)
      }),
      (d.prototype.activatePlayer = function () {
        this.options.autoPlay &&
          (this.player.play(),
          b.bind(this.element, "mouseenter", this),
          (this.isMouseenterBound = !0))
      }),
      (d.prototype.stopPlayer = function () {
        this.player.stop()
      }),
      (d.prototype.deactivatePlayer = function () {
        this.player.stop(),
          this.isMouseenterBound &&
            (b.unbind(this.element, "mouseenter", this),
            delete this.isMouseenterBound)
      }),
      (d.prototype.onmouseenter = function () {
        this.options.pauseAutoPlayOnHover &&
          (this.player.pause(), b.bind(this.element, "mouseleave", this))
      }),
      (d.prototype.onmouseleave = function () {
        this.player.unpause(), b.unbind(this.element, "mouseleave", this)
      }),
      (d.Player = e),
      d
    )
  }),
  (function (a, b) {
    "use strict"
    "function" == typeof define && define.amd
      ? define("flickity/js/add-remove-cell", [
          "./flickity",
          "fizzy-ui-utils/utils",
        ], function (c, d) {
          return b(a, c, d)
        })
      : "object" == typeof exports
      ? (module.exports = b(
          a,
          require("./flickity"),
          require("fizzy-ui-utils")
        ))
      : b(a, a.Flickity, a.fizzyUIUtils)
  })(window, function (a, b, c) {
    function d(a) {
      for (
        var b = document.createDocumentFragment(), c = 0, d = a.length;
        d > c;
        c++
      ) {
        var e = a[c]
        b.appendChild(e.element)
      }
      return b
    }
    return (
      (b.prototype.insert = function (a, b) {
        var c = this._makeCells(a)
        if (c && c.length) {
          var e = this.cells.length
          b = void 0 === b ? e : b
          var f = d(c),
            g = b == e
          if (g) this.slider.appendChild(f)
          else {
            var h = this.cells[b].element
            this.slider.insertBefore(f, h)
          }
          if (0 === b) this.cells = c.concat(this.cells)
          else if (g) this.cells = this.cells.concat(c)
          else {
            var i = this.cells.splice(b, e - b)
            this.cells = this.cells.concat(c).concat(i)
          }
          this._sizeCells(c)
          var j = b > this.selectedIndex ? 0 : c.length
          this._cellAddedRemoved(b, j)
        }
      }),
      (b.prototype.append = function (a) {
        this.insert(a, this.cells.length)
      }),
      (b.prototype.prepend = function (a) {
        this.insert(a, 0)
      }),
      (b.prototype.remove = function (a) {
        var b,
          d,
          e,
          f = this.getCells(a),
          g = 0
        for (b = 0, d = f.length; d > b; b++) {
          e = f[b]
          g -= c.indexOf(this.cells, e) < this.selectedIndex ? 1 : 0
        }
        for (b = 0, d = f.length; d > b; b++)
          (e = f[b]), e.remove(), c.removeFrom(this.cells, e)
        f.length && this._cellAddedRemoved(0, g)
      }),
      (b.prototype._cellAddedRemoved = function (a, b) {
        ;(b = b || 0),
          (this.selectedIndex += b),
          (this.selectedIndex = Math.max(
            0,
            Math.min(this.cells.length - 1, this.selectedIndex)
          )),
          this.emitEvent("cellAddedRemoved", [a, b]),
          this.cellChange(a, !0)
      }),
      (b.prototype.cellSizeChange = function (a) {
        var b = this.getCell(a)
        if (b) {
          b.getSize()
          var d = c.indexOf(this.cells, b)
          this.cellChange(d)
        }
      }),
      (b.prototype.cellChange = function (a, b) {
        var c = this.slideableWidth
        this._positionCells(a),
          this._getWrapShiftCells(),
          this.setGallerySize(),
          this.options.freeScroll
            ? ((this.x += c - this.slideableWidth), this.positionSlider())
            : (b && this.positionSliderAtSelected(),
              this.select(this.selectedIndex))
      }),
      b
    )
  }),
  (function (a, b) {
    "use strict"
    "function" == typeof define && define.amd
      ? define("flickity/js/lazyload", [
          "classie/classie",
          "eventie/eventie",
          "./flickity",
          "fizzy-ui-utils/utils",
        ], function (c, d, e, f) {
          return b(a, c, d, e, f)
        })
      : "object" == typeof exports
      ? (module.exports = b(
          a,
          require("desandro-classie"),
          require("eventie"),
          require("./flickity"),
          require("fizzy-ui-utils")
        ))
      : b(a, a.classie, a.eventie, a.Flickity, a.fizzyUIUtils)
  })(window, function (a, b, c, d, e) {
    "use strict"
    function f(a) {
      if ("IMG" == a.nodeName && a.getAttribute("data-flickity-lazyload"))
        return [a]
      var b = a.querySelectorAll("img[data-flickity-lazyload]")
      return e.makeArray(b)
    }
    function g(a, b) {
      ;(this.img = a), (this.flickity = b), this.load()
    }
    return (
      d.createMethods.push("_createLazyload"),
      (d.prototype._createLazyload = function () {
        this.on("cellSelect", this.lazyLoad)
      }),
      (d.prototype.lazyLoad = function () {
        var a = this.options.lazyLoad
        if (a) {
          for (
            var b = "number" == typeof a ? a : 0,
              c = this.getAdjacentCellElements(b),
              d = [],
              e = 0,
              h = c.length;
            h > e;
            e++
          ) {
            var i = c[e],
              j = f(i)
            d = d.concat(j)
          }
          for (e = 0, h = d.length; h > e; e++) {
            new g(d[e], this)
          }
        }
      }),
      (g.prototype.handleEvent = e.handleEvent),
      (g.prototype.load = function () {
        c.bind(this.img, "load", this),
          c.bind(this.img, "error", this),
          (this.img.src = this.img.getAttribute("data-flickity-lazyload")),
          this.img.removeAttribute("data-flickity-lazyload")
      }),
      (g.prototype.onload = function (a) {
        this.complete(a, "flickity-lazyloaded")
      }),
      (g.prototype.onerror = function (a) {
        this.complete(a, "flickity-lazyerror")
      }),
      (g.prototype.complete = function (a, d) {
        c.unbind(this.img, "load", this), c.unbind(this.img, "error", this)
        var e = this.flickity.getParentCell(this.img),
          f = e && e.element
        this.flickity.cellSizeChange(f),
          b.add(this.img, d),
          this.flickity.dispatchEvent("lazyLoad", a, f)
      }),
      (d.LazyLoader = g),
      d
    )
  }),
  (function (a, b) {
    "use strict"
    "function" == typeof define && define.amd
      ? define("flickity/js/index", [
          "./flickity",
          "./drag",
          "./prev-next-button",
          "./page-dots",
          "./player",
          "./add-remove-cell",
          "./lazyload",
        ], b)
      : "object" == typeof exports &&
        (module.exports = b(
          require("./flickity"),
          require("./drag"),
          require("./prev-next-button"),
          require("./page-dots"),
          require("./player"),
          require("./add-remove-cell"),
          require("./lazyload")
        ))
  })(window, function (a) {
    return a
  }),
  (function (a, b) {
    "use strict"
    "function" == typeof define && define.amd
      ? define("flickity-as-nav-for/as-nav-for", [
          "classie/classie",
          "flickity/js/index",
          "fizzy-ui-utils/utils",
        ], function (c, d, e) {
          return b(a, c, d, e)
        })
      : "object" == typeof exports
      ? (module.exports = b(
          a,
          require("desandro-classie"),
          require("flickity"),
          require("fizzy-ui-utils")
        ))
      : (a.Flickity = b(a, a.classie, a.Flickity, a.fizzyUIUtils))
  })(window, function (a, b, c, d) {
    return (
      c.createMethods.push("_createAsNavFor"),
      (c.prototype._createAsNavFor = function () {
        this.on("activate", this.activateAsNavFor),
          this.on("deactivate", this.deactivateAsNavFor),
          this.on("destroy", this.destroyAsNavFor)
        var a = this.options.asNavFor
        if (a) {
          var b = this
          setTimeout(function () {
            b.setNavCompanion(a)
          })
        }
      }),
      (c.prototype.setNavCompanion = function (a) {
        a = d.getQueryElement(a)
        var b = c.data(a)
        if (b && b != this) {
          this.navCompanion = b
          var e = this
          ;(this.onNavCompanionSelect = function () {
            e.navCompanionSelect()
          }),
            b.on("cellSelect", this.onNavCompanionSelect),
            this.on("staticClick", this.onNavStaticClick),
            this.navCompanionSelect()
        }
      }),
      (c.prototype.navCompanionSelect = function () {
        if (this.navCompanion) {
          var a = this.navCompanion.selectedIndex
          this.select(a),
            this.removeNavSelectedElement(),
            this.selectedIndex == a &&
              ((this.navSelectedElement = this.cells[a].element),
              b.add(this.navSelectedElement, "is-nav-selected"))
        }
      }),
      (c.prototype.activateAsNavFor = function () {
        this.navCompanionSelect()
      }),
      (c.prototype.removeNavSelectedElement = function () {
        this.navSelectedElement &&
          (b.remove(this.navSelectedElement, "is-nav-selected"),
          delete this.navSelectedElement)
      }),
      (c.prototype.onNavStaticClick = function (a, b, c, d) {
        "number" == typeof d && this.navCompanion.select(d)
      }),
      (c.prototype.deactivateAsNavFor = function () {
        this.removeNavSelectedElement()
      }),
      (c.prototype.destroyAsNavFor = function () {
        this.navCompanion &&
          (this.navCompanion.off("cellSelect", this.onNavCompanionSelect),
          this.off("staticClick", this.onNavStaticClick),
          delete this.navCompanion)
      }),
      c
    )
  }),
  (function (a, b) {
    "use strict"
    "function" == typeof define && define.amd
      ? define("imagesloaded/imagesloaded", [
          "eventEmitter/EventEmitter",
          "eventie/eventie",
        ], function (c, d) {
          return b(a, c, d)
        })
      : "object" == typeof module && module.exports
      ? (module.exports = b(
          a,
          require("wolfy87-eventemitter"),
          require("eventie")
        ))
      : (a.imagesLoaded = b(a, a.EventEmitter, a.eventie))
  })(window, function (a, b, c) {
    function d(a, b) {
      for (var c in b) a[c] = b[c]
      return a
    }
    function e(a) {
      return "[object Array]" == l.call(a)
    }
    function f(a) {
      var b = []
      if (e(a)) b = a
      else if ("number" == typeof a.length)
        for (var c = 0; c < a.length; c++) b.push(a[c])
      else b.push(a)
      return b
    }
    function g(a, b, c) {
      if (!(this instanceof g)) return new g(a, b, c)
      "string" == typeof a && (a = document.querySelectorAll(a)),
        (this.elements = f(a)),
        (this.options = d({}, this.options)),
        "function" == typeof b ? (c = b) : d(this.options, b),
        c && this.on("always", c),
        this.getImages(),
        j && (this.jqDeferred = new j.Deferred())
      var e = this
      setTimeout(function () {
        e.check()
      })
    }
    function h(a) {
      this.img = a
    }
    function i(a, b) {
      ;(this.url = a), (this.element = b), (this.img = new Image())
    }
    var j = a.jQuery,
      k = a.console,
      l = Object.prototype.toString
    ;(g.prototype = new b()),
      (g.prototype.options = {}),
      (g.prototype.getImages = function () {
        this.images = []
        for (var a = 0; a < this.elements.length; a++) {
          var b = this.elements[a]
          this.addElementImages(b)
        }
      }),
      (g.prototype.addElementImages = function (a) {
        "IMG" == a.nodeName && this.addImage(a),
          !0 === this.options.background && this.addElementBackgroundImages(a)
        var b = a.nodeType
        if (b && m[b]) {
          for (var c = a.querySelectorAll("img"), d = 0; d < c.length; d++) {
            var e = c[d]
            this.addImage(e)
          }
          if ("string" == typeof this.options.background) {
            var f = a.querySelectorAll(this.options.background)
            for (d = 0; d < f.length; d++) {
              var g = f[d]
              this.addElementBackgroundImages(g)
            }
          }
        }
      })
    var m = { 1: !0, 9: !0, 11: !0 }
    g.prototype.addElementBackgroundImages = function (a) {
      for (
        var b = n(a),
          c = /url\(['"]*([^'"\)]+)['"]*\)/gi,
          d = c.exec(b.backgroundImage);
        null !== d;

      ) {
        var e = d && d[1]
        e && this.addBackground(e, a), (d = c.exec(b.backgroundImage))
      }
    }
    var n =
      a.getComputedStyle ||
      function (a) {
        return a.currentStyle
      }
    return (
      (g.prototype.addImage = function (a) {
        var b = new h(a)
        this.images.push(b)
      }),
      (g.prototype.addBackground = function (a, b) {
        var c = new i(a, b)
        this.images.push(c)
      }),
      (g.prototype.check = function () {
        function a(a, c, d) {
          setTimeout(function () {
            b.progress(a, c, d)
          })
        }
        var b = this
        if (
          ((this.progressedCount = 0),
          (this.hasAnyBroken = !1),
          !this.images.length)
        )
          return void this.complete()
        for (var c = 0; c < this.images.length; c++) {
          var d = this.images[c]
          d.once("progress", a), d.check()
        }
      }),
      (g.prototype.progress = function (a, b, c) {
        this.progressedCount++,
          (this.hasAnyBroken = this.hasAnyBroken || !a.isLoaded),
          this.emit("progress", this, a, b),
          this.jqDeferred &&
            this.jqDeferred.notify &&
            this.jqDeferred.notify(this, a),
          this.progressedCount == this.images.length && this.complete(),
          this.options.debug && k && k.log("progress: " + c, a, b)
      }),
      (g.prototype.complete = function () {
        var a = this.hasAnyBroken ? "fail" : "done"
        if (
          ((this.isComplete = !0),
          this.emit(a, this),
          this.emit("always", this),
          this.jqDeferred)
        ) {
          var b = this.hasAnyBroken ? "reject" : "resolve"
          this.jqDeferred[b](this)
        }
      }),
      (h.prototype = new b()),
      (h.prototype.check = function () {
        return this.getIsImageComplete()
          ? void this.confirm(0 !== this.img.naturalWidth, "naturalWidth")
          : ((this.proxyImage = new Image()),
            c.bind(this.proxyImage, "load", this),
            c.bind(this.proxyImage, "error", this),
            c.bind(this.img, "load", this),
            c.bind(this.img, "error", this),
            void (this.proxyImage.src = this.img.src))
      }),
      (h.prototype.getIsImageComplete = function () {
        return this.img.complete && void 0 !== this.img.naturalWidth
      }),
      (h.prototype.confirm = function (a, b) {
        ;(this.isLoaded = a), this.emit("progress", this, this.img, b)
      }),
      (h.prototype.handleEvent = function (a) {
        var b = "on" + a.type
        this[b] && this[b](a)
      }),
      (h.prototype.onload = function () {
        this.confirm(!0, "onload"), this.unbindEvents()
      }),
      (h.prototype.onerror = function () {
        this.confirm(!1, "onerror"), this.unbindEvents()
      }),
      (h.prototype.unbindEvents = function () {
        c.unbind(this.proxyImage, "load", this),
          c.unbind(this.proxyImage, "error", this),
          c.unbind(this.img, "load", this),
          c.unbind(this.img, "error", this)
      }),
      (i.prototype = new h()),
      (i.prototype.check = function () {
        c.bind(this.img, "load", this),
          c.bind(this.img, "error", this),
          (this.img.src = this.url),
          this.getIsImageComplete() &&
            (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"),
            this.unbindEvents())
      }),
      (i.prototype.unbindEvents = function () {
        c.unbind(this.img, "load", this), c.unbind(this.img, "error", this)
      }),
      (i.prototype.confirm = function (a, b) {
        ;(this.isLoaded = a), this.emit("progress", this, this.element, b)
      }),
      (g.makeJQueryPlugin = function (b) {
        ;(b = b || a.jQuery) &&
          ((j = b),
          (j.fn.imagesLoaded = function (a, b) {
            return new g(this, a, b).jqDeferred.promise(j(this))
          }))
      }),
      g.makeJQueryPlugin(),
      g
    )
  }),
  (function (a, b) {
    "use strict"
    "function" == typeof define && define.amd
      ? define(["flickity/js/index", "imagesloaded/imagesloaded"], function (
          c,
          d
        ) {
          return b(a, c, d)
        })
      : "object" == typeof exports
      ? (module.exports = b(a, require("flickity"), require("imagesloaded")))
      : (a.Flickity = b(a, a.Flickity, a.imagesLoaded))
  })(window, function (a, b, c) {
    "use strict"
    return (
      b.createMethods.push("_createImagesLoaded"),
      (b.prototype._createImagesLoaded = function () {
        this.on("activate", this.imagesLoaded)
      }),
      (b.prototype.imagesLoaded = function () {
        function a(a, c) {
          var d = b.getParentCell(c.img)
          b.cellSizeChange(d && d.element),
            b.options.freeScroll || b.positionSliderAtSelected()
        }
        if (this.options.imagesLoaded) {
          var b = this
          c(this.slider).on("progress", a)
        }
      }),
      b
    )
  }),
  (function (a, b) {
    "function" == typeof define && define.amd
      ? define(["jquery"], function (c) {
          return b(c, a, a.document, a.Math)
        })
      : "undefined" != typeof exports
      ? (module.exports = b(require("jquery"), a, a.document, a.Math))
      : b(jQuery, a, a.document, a.Math)
  })("undefined" != typeof window ? window : this, function (a, b, c, d, e) {
    var f = a(b),
      g = a(c)
    a.fn.fullpage = function (h) {
      function i(a) {
        a
          .find(".fp-slides")
          .after(
            '<div class="fp-controlArrow fp-prev"></div><div class="fp-controlArrow fp-next"></div>'
          ),
          "#fff" != h.controlArrowColor &&
            (a
              .find(".fp-controlArrow.fp-next")
              .css(
                "border-color",
                "transparent transparent transparent " + h.controlArrowColor
              ),
            a
              .find(".fp-controlArrow.fp-prev")
              .css(
                "border-color",
                "transparent " +
                  h.controlArrowColor +
                  " transparent transparent"
              )),
          h.loopHorizontal || a.find(".fp-controlArrow.fp-prev").hide()
      }
      function j() {
        a(".fp-section").each(function () {
          var b = a(this).find(".fp-slide")
          b.length
            ? b.each(function () {
                M(a(this))
              })
            : M(a(this))
        }),
          k()
      }
      function k() {
        var b = a(".fp-section.active"),
          c = b.find("SLIDES_WRAPPER"),
          d = b.find(".fp-scrollable")
        c.length && (d = c.find(".fp-slide.active")),
          d.mouseover(),
          A(b),
          B(b),
          a.isFunction(h.afterLoad) &&
            h.afterLoad.call(b, b.data("anchor"), b.index(".fp-section") + 1),
          a.isFunction(h.afterRender) && h.afterRender.call(sa)
      }
      function l() {
        var b
        if (!h.autoScrolling || h.scrollBar) {
          for (
            var e = f.scrollTop(),
              g = 0,
              i = d.abs(e - c.querySelectorAll(".fp-section")[0].offsetTop),
              j = c.querySelectorAll(".fp-section"),
              k = 0;
            k < j.length;
            ++k
          ) {
            var l = d.abs(e - j[k].offsetTop)
            l < i && ((g = k), (i = l))
          }
          b = a(j).eq(g)
        }
        if (!h.autoScrolling || h.scrollBar) {
          if (!b.hasClass("active")) {
            if (
              ((Fa = !0),
              (e = a(".fp-section.active")),
              (g = e.index(".fp-section") + 1),
              (i = L(b)),
              (j = b.data("anchor")),
              (k = b.index(".fp-section") + 1),
              (l = b.find(".fp-slide.active")),
              l.length)
            )
              var m = l.data("anchor"),
                n = l.index()
            va &&
              (b.addClass("active").siblings().removeClass("active"),
              a.isFunction(h.onLeave) && h.onLeave.call(e, g, k, i),
              a.isFunction(h.afterLoad) && h.afterLoad.call(b, j, k),
              A(b),
              K(j, k - 1),
              h.anchors.length && ((la = j), V(n, m, j, k))),
              clearTimeout(Ba),
              (Ba = setTimeout(function () {
                Fa = !1
              }, 100))
          }
          h.fitToSection &&
            (clearTimeout(Ca),
            (Ca = setTimeout(function () {
              va &&
                (a(".fp-section.active").is(b) && (ua = !0), w(b), (ua = !1))
            }, 1e3)))
        }
      }
      function m(a) {
        return a.find(".fp-slides").length
          ? a.find(".fp-slide.active").find(".fp-scrollable")
          : a.find(".fp-scrollable")
      }
      function n(a, b) {
        if (xa.m[a]) {
          var c, d
          if (
            ("down" == a
              ? ((c = "bottom"), (d = ka.moveSectionDown))
              : ((c = "top"), (d = ka.moveSectionUp)),
            0 < b.length)
          ) {
            if (
              !(c =
                "top" === c
                  ? !b.scrollTop()
                  : "bottom" === c
                  ? b.scrollTop() + 1 + b.innerHeight() >= b[0].scrollHeight
                  : void 0)
            )
              return !0
            d()
          } else d()
        }
      }
      function o(b) {
        var c = b.originalEvent
        if (!p(b.target) && q(c)) {
          h.autoScrolling && b.preventDefault(), (b = a(".fp-section.active"))
          var e = m(b)
          va &&
            !pa &&
            ((c = aa(c)),
            (Ia = c.y),
            (Ja = c.x),
            b.find(".fp-slides").length && d.abs(Ha - Ja) > d.abs(Ga - Ia)
              ? d.abs(Ha - Ja) > (f.width() / 100) * h.touchSensitivity &&
                (Ha > Ja
                  ? xa.m.right && ka.moveSlideRight()
                  : xa.m.left && ka.moveSlideLeft())
              : h.autoScrolling &&
                d.abs(Ga - Ia) > (f.height() / 100) * h.touchSensitivity &&
                (Ga > Ia ? n("down", e) : Ia > Ga && n("up", e)))
        }
      }
      function p(b, c) {
        c = c || 0
        var d = a(b).parent()
        return (
          !!(
            c < h.normalScrollElementTouchThreshold &&
            d.is(h.normalScrollElements)
          ) ||
          (c != h.normalScrollElementTouchThreshold && p(d, ++c))
        )
      }
      function q(a) {
        return void 0 === a.pointerType || "mouse" != a.pointerType
      }
      function r(a) {
        ;(a = a.originalEvent),
          h.fitToSection && ia.stop(),
          q(a) && ((a = aa(a)), (Ga = a.y), (Ha = a.x))
      }
      function s(a, b) {
        for (
          var c = 0, e = a.slice(d.max(a.length - b, 1)), f = 0;
          f < e.length;
          f++
        )
          c += e[f]
        return d.ceil(c / b)
      }
      function t(c) {
        var e = new Date().getTime()
        if (h.autoScrolling && !oa) {
          c = c || b.event
          var f = c.wheelDelta || -c.deltaY || -c.detail,
            g = d.max(-1, d.min(1, f))
          return (
            149 < wa.length && wa.shift(),
            wa.push(d.abs(f)),
            h.scrollBar &&
              (c.preventDefault ? c.preventDefault() : (c.returnValue = !1)),
            (c = a(".fp-section.active")),
            (c = m(c)),
            (f = e - Ka),
            (Ka = e),
            200 < f && (wa = []),
            va &&
              ((e = s(wa, 10)),
              (f = s(wa, 70)),
              e >= f && (0 > g ? n("down", c) : n("up", c))),
            !1
          )
        }
        h.fitToSection && ia.stop()
      }
      function u(b) {
        var c = a(".fp-section.active").find(".fp-slides"),
          d = c.find(".fp-slide").length
        if (!(!c.length || pa || 2 > d)) {
          var d = c.find(".fp-slide.active"),
            e = null,
            e = "prev" === b ? d.prev(".fp-slide") : d.next(".fp-slide")
          if (!e.length) {
            if (!h.loopHorizontal) return
            e = "prev" === b ? d.siblings(":last") : d.siblings(":first")
          }
          ;(pa = !0), F(c, e)
        }
      }
      function v() {
        a(".fp-slide.active").each(function () {
          ba(a(this), "internal")
        })
      }
      function w(b, c, d) {
        var e = b.position()
        if (
          void 0 !== e &&
          ((c = {
            element: b,
            callback: c,
            isMovementUp: d,
            dest: e,
            dtop: e.top,
            yMovement: L(b),
            anchorLink: b.data("anchor"),
            sectionIndex: b.index(".fp-section"),
            activeSlide: b.find(".fp-slide.active"),
            activeSection: a(".fp-section.active"),
            leavingSection: a(".fp-section.active").index(".fp-section") + 1,
            localIsResizing: ua,
          }),
          !(
            (c.activeSection.is(b) && !ua) ||
            (h.scrollBar && f.scrollTop() === c.dtop)
          ))
        ) {
          if (c.activeSlide.length)
            var g = c.activeSlide.data("anchor"),
              i = c.activeSlide.index()
          if (
            (h.autoScrolling &&
              h.continuousVertical &&
              void 0 !== c.isMovementUp &&
              ((!c.isMovementUp && "up" == c.yMovement) ||
                (c.isMovementUp && "down" == c.yMovement)) &&
              (c.isMovementUp
                ? a(".fp-section.active").before(
                    c.activeSection.nextAll(".fp-section")
                  )
                : a(".fp-section.active").after(
                    c.activeSection.prevAll(".fp-section").get().reverse()
                  ),
              ca(a(".fp-section.active").position().top),
              v(),
              (c.wrapAroundElements = c.activeSection),
              (c.dest = c.element.position()),
              (c.dtop = c.dest.top),
              (c.yMovement = L(c.element))),
            a.isFunction(h.onLeave) && !c.localIsResizing)
          ) {
            if (
              !1 ===
              h.onLeave.call(
                c.activeSection,
                c.leavingSection,
                c.sectionIndex + 1,
                c.yMovement
              )
            )
              return
            C(c.activeSection)
          }
          b.addClass("active").siblings().removeClass("active"),
            (va = !1),
            V(i, g, c.anchorLink, c.sectionIndex),
            x(c),
            (la = c.anchorLink),
            K(c.anchorLink, c.sectionIndex)
        }
      }
      function x(b) {
        if (h.css3 && h.autoScrolling && !h.scrollBar)
          Q("translate3d(0px, -" + b.dtop + "px, 0px)", !0),
            h.scrollingSpeed
              ? (za = setTimeout(function () {
                  z(b)
                }, h.scrollingSpeed))
              : z(b)
        else {
          var c = y(b)
          a(c.element)
            .animate(c.options, h.scrollingSpeed, h.easing)
            .promise()
            .done(function () {
              z(b)
            })
        }
      }
      function y(a) {
        var b = {}
        return (
          h.autoScrolling && !h.scrollBar
            ? ((b.options = { top: -a.dtop }),
              (b.element = ".fullpage-wrapper"))
            : ((b.options = { scrollTop: a.dtop }), (b.element = "html, body")),
          b
        )
      }
      function z(b) {
        b.wrapAroundElements &&
          b.wrapAroundElements.length &&
          (b.isMovementUp
            ? a(".fp-section:first").before(b.wrapAroundElements)
            : a(".fp-section:last").after(b.wrapAroundElements),
          ca(a(".fp-section.active").position().top),
          v()),
          b.element.find(".fp-scrollable").mouseover(),
          a.isFunction(h.afterLoad) &&
            !b.localIsResizing &&
            h.afterLoad.call(b.element, b.anchorLink, b.sectionIndex + 1),
          A(b.element),
          B(b.element),
          (va = !0),
          a.isFunction(b.callback) && b.callback.call(this)
      }
      function A(b) {
        var c = b.find(".fp-slide.active")
        c.length && (b = a(c)),
          b
            .find("img[data-src], video[data-src], audio[data-src]")
            .each(function () {
              a(this).attr("src", a(this).data("src")),
                a(this).removeAttr("data-src")
            })
      }
      function B(b) {
        b.find("video, audio").each(function () {
          var b = a(this).get(0)
          b.hasAttribute("autoplay") && "function" == typeof b.play && b.play()
        })
      }
      function C(b) {
        b.find("video, audio").each(function () {
          var b = a(this).get(0)
          b.hasAttribute("data-ignore") ||
            "function" != typeof b.pause ||
            b.pause()
        })
      }
      function D() {
        if (!Fa && !h.lockAnchors) {
          var a = b.location.hash.replace("#", "").split("/"),
            c = a[0],
            a = a[1]
          if (c.length) {
            var d = void 0 === la,
              e = void 0 === la && void 0 === a && !pa
            ;((c && c !== la && !d) || e || (!pa && ma != a)) && S(c, a)
          }
        }
      }
      function E(a) {
        va &&
          (a.pageY < La
            ? ka.moveSectionUp()
            : a.pageY > La && ka.moveSectionDown()),
          (La = a.pageY)
      }
      function F(b, c) {
        var e = c.position(),
          f = c.index(),
          g = b.closest(".fp-section"),
          i = g.index(".fp-section"),
          j = g.data("anchor"),
          k = g.find(".fp-slidesNav"),
          l = X(c),
          m = ua
        if (h.onSlideLeave) {
          var n,
            o = g.find(".fp-slide.active"),
            p = o.index()
          if (
            ((n = p == f ? "none" : p > f ? "left" : "right"),
            !m &&
              "none" !== n &&
              a.isFunction(h.onSlideLeave) &&
              !1 === h.onSlideLeave.call(o, j, i + 1, p, n, f))
          )
            return void (pa = !1)
        }
        c.addClass("active").siblings().removeClass("active"),
          A(c),
          !h.loopHorizontal &&
            h.controlArrows &&
            (g.find(".fp-controlArrow.fp-prev").toggle(0 !== f),
            g.find(".fp-controlArrow.fp-next").toggle(!c.is(":last-child"))),
          g.hasClass("active") && V(f, l, j, i)
        var q = function () {
          m ||
            (a.isFunction(h.afterSlideLoad) &&
              h.afterSlideLoad.call(c, j, i + 1, l, f)),
            (pa = !1)
        }
        h.css3
          ? ((e = "translate3d(-" + d.round(e.left) + "px, 0px, 0px)"),
            I(b.find(".fp-slidesContainer"), 0 < h.scrollingSpeed).css(da(e)),
            (Aa = setTimeout(
              function () {
                q()
              },
              h.scrollingSpeed,
              h.easing
            )))
          : b.animate(
              { scrollLeft: d.round(e.left) },
              h.scrollingSpeed,
              h.easing,
              function () {
                q()
              }
            ),
          k.find(".active").removeClass("active"),
          k.find("li").eq(f).find("a").addClass("active")
      }
      function G() {
        if ((H(), qa)) {
          var b = a(c.activeElement)
          b.is("textarea") ||
            b.is("input") ||
            b.is("select") ||
            ((b = f.height()),
            d.abs(b - Ma) > (20 * d.max(Ma, b)) / 100 &&
              (ka.reBuild(!0), (Ma = b)))
        } else
          clearTimeout(ya),
            (ya = setTimeout(function () {
              ka.reBuild(!0)
            }, 350))
      }
      function H() {
        var a = h.responsive || h.responsiveWidth,
          b = h.responsiveHeight
        a && ka.setResponsive(f.width() < a),
          b &&
            (sa.hasClass("fp-responsive") || ka.setResponsive(f.height() < b))
      }
      function I(a) {
        var b = "all " + h.scrollingSpeed + "ms " + h.easingcss3
        return (
          a.removeClass("fp-notransition"),
          a.css({ "-webkit-transition": b, transition: b })
        )
      }
      function J(a, b) {
        if (825 > a || 900 > b) {
          var c = d.min((100 * a) / 825, (100 * b) / 900).toFixed(2)
          ja.css("font-size", c + "%")
        } else ja.css("font-size", "100%")
      }
      function K(b, c) {
        h.menu &&
          (a(h.menu).find(".active").removeClass("active"),
          a(h.menu)
            .find('[data-menuanchor="' + b + '"]')
            .addClass("active")),
          h.navigation &&
            (a("#fp-nav").find(".active").removeClass("active"),
            b
              ? a("#fp-nav")
                  .find('a[href="#' + b + '"]')
                  .addClass("active")
              : a("#fp-nav").find("li").eq(c).find("a").addClass("active"))
      }
      function L(b) {
        var c = a(".fp-section.active").index(".fp-section")
        return (
          (b = b.index(".fp-section")), c == b ? "none" : c > b ? "up" : "down"
        )
      }
      function M(a) {
        a.css("overflow", "hidden")
        var b,
          c = a.closest(".fp-section"),
          d = a.find(".fp-scrollable")
        d.length
          ? (b = d.get(0).scrollHeight)
          : ((b = a.get(0).scrollHeight),
            h.verticalCentered &&
              (b = a.find(".fp-tableCell").get(0).scrollHeight)),
          (c =
            ta -
            parseInt(c.css("padding-bottom")) -
            parseInt(c.css("padding-top"))),
          b > c
            ? d.length
              ? d
                  .css("height", c + "px")
                  .parent()
                  .css("height", c + "px")
              : (h.verticalCentered
                  ? a
                      .find(".fp-tableCell")
                      .wrapInner('<div class="fp-scrollable" />')
                  : a.wrapInner('<div class="fp-scrollable" />'),
                a.find(".fp-scrollable").slimScroll({
                  allowPageScroll: !0,
                  height: c + "px",
                  size: "10px",
                  alwaysVisible: !0,
                }))
            : N(a),
          a.css("overflow", "")
      }
      function N(a) {
        a.find(".fp-scrollable").children().first().unwrap().unwrap(),
          a.find(".slimScrollBar").remove(),
          a.find(".slimScrollRail").remove()
      }
      function O(a) {
        a.addClass("fp-table").wrapInner(
          '<div class="fp-tableCell" style="height:' + P(a) + 'px;" />'
        )
      }
      function P(a) {
        var b = ta
        return (
          (h.paddingTop || h.paddingBottom) &&
            ((b = a),
            b.hasClass("fp-section") || (b = a.closest(".fp-section")),
            (a =
              parseInt(b.css("padding-top")) +
              parseInt(b.css("padding-bottom"))),
            (b = ta - a)),
          b
        )
      }
      function Q(a, b) {
        b ? I(sa) : sa.addClass("fp-notransition"),
          sa.css(da(a)),
          setTimeout(function () {
            sa.removeClass("fp-notransition")
          }, 10)
      }
      function R(b) {
        var c = a('.fp-section[data-anchor="' + b + '"]')
        return c.length || (c = a(".fp-section").eq(b - 1)), c
      }
      function S(a, b) {
        var c = R(a)
        void 0 === b && (b = 0),
          a === la || c.hasClass("active")
            ? T(c, b)
            : w(c, function () {
                T(c, b)
              })
      }
      function T(a, b) {
        if (void 0 !== b) {
          var c,
            d = a.find(".fp-slides")
          c = a.find(".fp-slides")
          var e = c.find('.fp-slide[data-anchor="' + b + '"]')
          e.length || (e = c.find(".fp-slide").eq(b)),
            (c = e),
            c.length && F(d, c)
        }
      }
      function U(a, b) {
        a.append('<div class="fp-slidesNav"><ul></ul></div>')
        var c = a.find(".fp-slidesNav")
        c.addClass(h.slidesNavPosition)
        for (var d = 0; d < b; d++)
          c.find("ul").append('<li><a href="#"><span></span></a></li>')
        c.css("margin-left", "-" + c.width() / 2 + "px"),
          c.find("li").first().find("a").addClass("active")
      }
      function V(a, b, c, d) {
        ;(d = ""),
          h.anchors.length &&
            !h.lockAnchors &&
            (a
              ? (void 0 !== c && (d = c),
                void 0 === b && (b = a),
                (ma = b),
                W(d + "/" + b))
              : (void 0 !== a && (ma = b), W(c))),
          Y()
      }
      function W(a) {
        if (h.recordHistory) location.hash = a
        else if (qa || ra) history.replaceState(e, e, "#" + a)
        else {
          var c = b.location.href.split("#")[0]
          b.location.replace(c + "#" + a)
        }
      }
      function X(a) {
        var b = a.data("anchor")
        return (a = a.index()), void 0 === b && (b = a), b
      }
      function Y() {
        var b = a(".fp-section.active"),
          c = b.find(".fp-slide.active"),
          d = b.data("anchor"),
          e = X(c),
          b = b.index(".fp-section"),
          b = String(b)
        h.anchors.length && (b = d),
          c.length && (b = b + "-" + e),
          (b = b.replace("/", "-").replace("#", "")),
          (ja[0].className = ja[0].className.replace(
            RegExp("\\b\\s?fp-viewing-[^\\s]+\\b", "g"),
            ""
          )),
          ja.addClass("fp-viewing-" + b),
          ja.trigger("pageChanged")
      }
      function Z() {
        if (qa || ra) {
          var b = _()
          a(".fullpage-wrapper")
            .off("touchstart " + b.down)
            .on("touchstart " + b.down, r),
            a(".fullpage-wrapper")
              .off("touchmove " + b.move)
              .on("touchmove " + b.move, o)
        }
      }
      function $() {
        if (qa || ra) {
          var b = _()
          a(".fullpage-wrapper").off("touchstart " + b.down),
            a(".fullpage-wrapper").off("touchmove " + b.move)
        }
      }
      function _() {
        return b.PointerEvent
          ? { down: "pointerdown", move: "pointermove" }
          : { down: "MSPointerDown", move: "MSPointerMove" }
      }
      function aa(a) {
        var b = []
        return (
          (b.y =
            void 0 !== a.pageY && (a.pageY || a.pageX)
              ? a.pageY
              : a.touches[0].pageY),
          (b.x =
            void 0 !== a.pageX && (a.pageY || a.pageX)
              ? a.pageX
              : a.touches[0].pageX),
          ra &&
            q(a) &&
            h.scrollBar &&
            ((b.y = a.touches[0].pageY), (b.x = a.touches[0].pageX)),
          b
        )
      }
      function ba(a, b) {
        ka.setScrollingSpeed(0, "internal"),
          void 0 !== b && (ua = !0),
          F(a.closest(".fp-slides"), a),
          void 0 !== b && (ua = !1),
          ka.setScrollingSpeed(Ea.scrollingSpeed, "internal")
      }
      function ca(a) {
        h.scrollBar
          ? sa.scrollTop(a)
          : h.css3
          ? Q("translate3d(0px, -" + a + "px, 0px)", !1)
          : sa.css("top", -a)
      }
      function da(a) {
        return {
          "-webkit-transform": a,
          "-moz-transform": a,
          "-ms-transform": a,
          transform: a,
        }
      }
      function ea(a, b, c) {
        switch (b) {
          case "up":
            xa[c].up = a
            break
          case "down":
            xa[c].down = a
            break
          case "left":
            xa[c].left = a
            break
          case "right":
            xa[c].right = a
            break
          case "all":
            "m" == c ? ka.setAllowScrolling(a) : ka.setKeyboardScrolling(a)
        }
      }
      function fa() {
        ca(0),
          a("#fp-nav, .fp-slidesNav, .fp-controlArrow").remove(),
          a(".fp-section").css({
            height: "",
            "background-color": "",
            padding: "",
          }),
          a(".fp-slide").css({ width: "" }),
          sa.css({
            height: "",
            position: "",
            "-ms-touch-action": "",
            "touch-action": "",
          }),
          a(".fp-section, .fp-slide").each(function () {
            N(a(this)), a(this).removeClass("fp-table active")
          }),
          sa.addClass("fp-notransition"),
          sa
            .find(".fp-tableCell, .fp-slidesContainer, .fp-slides")
            .each(function () {
              a(this).replaceWith(this.childNodes)
            }),
          ia.scrollTop(0)
      }
      function ga(a, b, c) {
        ;(h[a] = b), "internal" !== c && (Ea[a] = b)
      }
      function ha(a, b) {
        console && console[a] && console[a]("fullPage: " + b)
      }
      var ia = a("html, body"),
        ja = a("body"),
        ka = a.fn.fullpage
      ;(h = a.extend(
        {
          menu: !1,
          anchors: [],
          lockAnchors: !1,
          navigation: !1,
          navigationPosition: "right",
          navigationTooltips: [],
          showActiveTooltip: !1,
          slidesNavigation: !1,
          slidesNavPosition: "bottom",
          scrollBar: !1,
          css3: !0,
          scrollingSpeed: 700,
          autoScrolling: !0,
          fitToSection: !0,
          easing: "easeInOutCubic",
          easingcss3: "ease",
          loopBottom: !1,
          loopTop: !1,
          loopHorizontal: !0,
          continuousVertical: !1,
          normalScrollElements: null,
          scrollOverflow: !1,
          touchSensitivity: 5,
          normalScrollElementTouchThreshold: 5,
          keyboardScrolling: !0,
          animateAnchor: !0,
          recordHistory: !0,
          controlArrows: !0,
          controlArrowColor: "#fff",
          verticalCentered: !0,
          resize: !1,
          sectionsColor: [],
          paddingTop: 0,
          paddingBottom: 0,
          fixedElements: null,
          responsive: 0,
          responsiveWidth: 0,
          responsiveHeight: 0,
          sectionSelector: ".section",
          slideSelector: ".slide",
          afterLoad: null,
          onLeave: null,
          afterRender: null,
          afterResize: null,
          afterReBuild: null,
          afterSlideLoad: null,
          onSlideLeave: null,
        },
        h
      )),
        (function () {
          h.continuousVertical &&
            (h.loopTop || h.loopBottom) &&
            ((h.continuousVertical = !1),
            ha(
              "warn",
              "Option `loopTop/loopBottom` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled"
            )),
            h.scrollBar &&
              h.scrollOverflow &&
              ha(
                "warn",
                "Option `scrollBar` is mutually exclusive with `scrollOverflow`. Sections with scrollOverflow might not work well in Firefox"
              ),
            h.continuousVertical &&
              h.scrollBar &&
              ((h.continuousVertical = !1),
              ha(
                "warn",
                "Option `scrollBar` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled"
              )),
            a.each(h.anchors, function (b, c) {
              ;(a("#" + c).length || a('[name="' + c + '"]').length) &&
                ha(
                  "error",
                  "data-anchor tags can not have the same value as any `id` element on the site (or `name` element for IE)."
                )
            })
        })(),
        a.extend(a.easing, {
          easeInOutCubic: function (a, b, c, d, e) {
            return 1 > (b /= e / 2)
              ? (d / 2) * b * b * b + c
              : (d / 2) * ((b -= 2) * b * b + 2) + c
          },
        }),
        a.extend(a.easing, {
          easeInQuart: function (a, b, c, d, e) {
            return d * (b /= e) * b * b * b + c
          },
        }),
        (ka.setAutoScrolling = function (b, c) {
          ga("autoScrolling", b, c)
          var d = a(".fp-section.active")
          h.autoScrolling && !h.scrollBar
            ? (ia.css({ overflow: "hidden", height: "100%" }),
              ka.setRecordHistory(h.recordHistory, "internal"),
              sa.css({ "-ms-touch-action": "none", "touch-action": "none" }),
              d.length && ca(d.position().top))
            : (ia.css({ overflow: "visible", height: "initial" }),
              ka.setRecordHistory(!1, "internal"),
              sa.css({ "-ms-touch-action": "", "touch-action": "" }),
              ca(0),
              d.length && ia.scrollTop(d.position().top))
        }),
        (ka.setRecordHistory = function (a, b) {
          ga("recordHistory", a, b)
        }),
        (ka.setScrollingSpeed = function (a, b) {
          ga("scrollingSpeed", a, b)
        }),
        (ka.setFitToSection = function (a, b) {
          ga("fitToSection", a, b)
        }),
        (ka.setLockAnchors = function (a) {
          h.lockAnchors = a
        }),
        (ka.setMouseWheelScrolling = function (a) {
          a
            ? c.addEventListener
              ? (c.addEventListener("mousewheel", t, !1),
                c.addEventListener("wheel", t, !1),
                c.addEventListener("DOMMouseScroll", t, !1))
              : c.attachEvent("onmousewheel", t)
            : c.addEventListener
            ? (c.removeEventListener("mousewheel", t, !1),
              c.removeEventListener("wheel", t, !1),
              c.removeEventListener("DOMMouseScroll", t, !1))
            : c.detachEvent("onmousewheel", t)
        }),
        (ka.setAllowScrolling = function (b, c) {
          void 0 !== c
            ? ((c = c.replace(/ /g, "").split(",")),
              a.each(c, function (a, c) {
                ea(b, c, "m")
              }))
            : b
            ? (ka.setMouseWheelScrolling(!0), Z())
            : (ka.setMouseWheelScrolling(!1), $())
        }),
        (ka.setKeyboardScrolling = function (b, c) {
          void 0 !== c
            ? ((c = c.replace(/ /g, "").split(",")),
              a.each(c, function (a, c) {
                ea(b, c, "k")
              }))
            : (h.keyboardScrolling = b)
        }),
        (ka.moveSectionUp = function () {
          var b = a(".fp-section.active").prev(".fp-section")
          b.length ||
            (!h.loopTop && !h.continuousVertical) ||
            (b = a(".fp-section").last()),
            b.length && w(b, null, !0)
        }),
        (ka.moveSectionDown = function () {
          var b = a(".fp-section.active").next(".fp-section")
          b.length ||
            (!h.loopBottom && !h.continuousVertical) ||
            (b = a(".fp-section").first()),
            !b.length ||
              (h.onBeforeMoveSection &&
                a.isFunction(h.onBeforeMoveSection) &&
                !1 ===
                  h.onBeforeMoveSection.call(
                    this,
                    direction,
                    currentSlide,
                    destiny,
                    slides,
                    activeSection
                  )) ||
              w(b, null, !1)
        }),
        (ka.silentMoveTo = function (a, b) {
          ka.setScrollingSpeed(0, "internal"),
            ka.moveTo(a, b),
            ka.setScrollingSpeed(Ea.scrollingSpeed, "internal")
        }),
        (ka.moveTo = function (a, b) {
          var c = R(a)
          void 0 !== b ? S(a, b) : 0 < c.length && w(c)
        }),
        (ka.moveSlideRight = function () {
          u("next")
        }),
        (ka.moveSlideLeft = function () {
          u("prev")
        }),
        (ka.reBuild = function (b) {
          if (!sa.hasClass("fp-destroyed")) {
            ua = !0
            var c = f.width()
            ;(ta = f.height()),
              h.resize && J(ta, c),
              a(".fp-section").each(function () {
                var b = a(this).find(".fp-slides"),
                  c = a(this).find(".fp-slide")
                h.verticalCentered &&
                  a(this)
                    .find(".fp-tableCell")
                    .css("height", P(a(this)) + "px"),
                  a(this).css("height", ta + "px"),
                  h.scrollOverflow &&
                    (c.length
                      ? c.each(function () {
                          M(a(this))
                        })
                      : M(a(this))),
                  1 < c.length && F(b, b.find(".fp-slide.active"))
              }),
              (c = a(".fp-section.active").index(".fp-section")) &&
                ka.silentMoveTo(c + 1),
              (ua = !1),
              a.isFunction(h.afterResize) && b && h.afterResize.call(sa),
              a.isFunction(h.afterReBuild) && !b && h.afterReBuild.call(sa)
          }
        }),
        (ka.setResponsive = function (b) {
          var c = sa.hasClass("fp-responsive")
          b
            ? c ||
              (ka.setAutoScrolling(!1, "internal"),
              ka.setFitToSection(!1, "internal"),
              a("#fp-nav").hide(),
              sa.addClass("fp-responsive"))
            : c &&
              (ka.setAutoScrolling(Ea.autoScrolling, "internal"),
              ka.setFitToSection(Ea.autoScrolling, "internal"),
              a("#fp-nav").show(),
              sa.removeClass("fp-responsive"))
        })
      var la,
        ma,
        na,
        oa,
        pa = !1,
        qa = navigator.userAgent.match(
          /(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/
        ),
        ra =
          "ontouchstart" in b ||
          0 < navigator.msMaxTouchPoints ||
          navigator.maxTouchPoints,
        sa = a(this),
        ta = f.height(),
        ua = !1,
        va = !0,
        wa = [],
        xa = { m: { up: !0, down: !0, left: !0, right: !0 } }
      xa.k = a.extend(!0, {}, xa.m)
      var ya,
        za,
        Aa,
        Ba,
        Ca,
        Da,
        Ea = a.extend(!0, {}, h)
      a(this).length &&
        (sa.css({ height: "100%", position: "relative" }),
        sa.addClass("fullpage-wrapper"),
        a("html").addClass("fp-enabled")),
        h.css3 &&
          (h.css3 = (function () {
            var a,
              d = c.createElement("p"),
              f = {
                webkitTransform: "-webkit-transform",
                OTransform: "-o-transform",
                msTransform: "-ms-transform",
                MozTransform: "-moz-transform",
                transform: "transform",
              }
            c.body.insertBefore(d, null)
            for (var g in f)
              d.style[g] !== e &&
                ((d.style[g] = "translate3d(1px,1px,1px)"),
                (a = b.getComputedStyle(d).getPropertyValue(f[g])))
            return (
              c.body.removeChild(d), a !== e && 0 < a.length && "none" !== a
            )
          })()),
        ka.setAllowScrolling(!0),
        sa.removeClass("fp-destroyed"),
        a(h.sectionSelector).each(function () {
          a(this).addClass("fp-section")
        }),
        a(h.slideSelector).each(function () {
          a(this).addClass("fp-slide")
        }),
        h.navigation &&
          (function () {
            ja.append('<div id="fp-nav"><ul></ul></div>'),
              (na = a("#fp-nav")),
              na.addClass(function () {
                return h.showActiveTooltip
                  ? "fp-show-active " + h.navigationPosition
                  : h.navigationPosition
              })
            for (var b = 0; b < a(".fp-section").length; b++) {
              var c = ""
              h.anchors.length && (c = h.anchors[b])
              var c = '<li><a href="#' + c + '"><span></span></a>',
                d = h.navigationTooltips[b]
              void 0 !== d &&
                "" !== d &&
                (c +=
                  '<div class="fp-tooltip ' +
                  h.navigationPosition +
                  '">' +
                  d +
                  "</div>"),
                (c += "</li>"),
                na.find("ul").append(c)
            }
          })(),
        a(".fp-section")
          .each(function (b) {
            var c = a(this),
              d = a(this).find(".fp-slide"),
              e = d.length
            if (
              (b ||
                0 !== a(".fp-section.active").length ||
                a(this).addClass("active"),
              a(this).css("height", ta + "px"),
              h.paddingTop && a(this).css("padding-top", h.paddingTop),
              h.paddingBottom && a(this).css("padding-bottom", h.paddingBottom),
              void 0 !== h.sectionsColor[b] &&
                a(this).css("background-color", h.sectionsColor[b]),
              void 0 !== h.anchors[b] &&
                (a(this).attr("data-anchor", h.anchors[b]),
                a(this).hasClass("active") && K(h.anchors[b], b)),
              0 < e)
            ) {
              b = 100 * e
              var f = 100 / e
              d.wrapAll('<div class="fp-slidesContainer" />'),
                d.parent().wrap('<div class="fp-slides" />'),
                a(this)
                  .find(".fp-slidesContainer")
                  .css("width", b + "%"),
                1 < e &&
                  (h.controlArrows && i(a(this)),
                  h.slidesNavigation && U(a(this), e)),
                d.each(function (b) {
                  a(this).css("width", f + "%"),
                    h.verticalCentered && O(a(this))
                }),
                (c = c.find(".fp-slide.active")),
                c.length ? ba(c) : d.eq(0).addClass("active")
            } else h.verticalCentered && O(a(this))
          })
          .promise()
          .done(function () {
            ka.setAutoScrolling(h.autoScrolling, "internal")
            var d = a(".fp-section.active").find(".fp-slide.active")
            if (
              (d.length &&
                (0 !== a(".fp-section.active").index(".fp-section") ||
                  (0 === a(".fp-section.active").index(".fp-section") &&
                    0 !== d.index())) &&
                ba(d),
              h.fixedElements && h.css3 && a(h.fixedElements).appendTo(ja),
              h.navigation &&
                (na.css("margin-top", "-" + na.height() / 2 + "px"),
                na
                  .find("li")
                  .eq(a(".fp-section.active").index(".fp-section"))
                  .find("a")
                  .addClass("active")),
              h.menu &&
                h.css3 &&
                a(h.menu).closest(".fullpage-wrapper").length &&
                a(h.menu).appendTo(ja),
              h.scrollOverflow
                ? ("complete" === c.readyState && j(), f.on("load", j))
                : k(),
              H(),
              !h.animateAnchor &&
                ((d = b.location.hash.replace("#", "").split("/")[0]),
                d.length))
            ) {
              var e = a('[data-anchor="' + d + '"]')
              e.length &&
                (h.autoScrolling
                  ? ca(e.position().top)
                  : (ca(0), ia.scrollTop(e.position().top)),
                K(d, null),
                a.isFunction(h.afterLoad) &&
                  h.afterLoad.call(e, d, e.index(".fp-section") + 1),
                e.addClass("active").siblings().removeClass("active"))
            }
            Y(),
              f.on("load", function () {
                var a = b.location.hash.replace("#", "").split("/"),
                  c = a[0],
                  a = a[1]
                c && S(c, a)
              })
          })
      var Fa = !1
      f.on("scroll", l)
      var Ga = 0,
        Ha = 0,
        Ia = 0,
        Ja = 0,
        Ka = new Date().getTime()
      f.on("hashchange", D),
        g.keydown(function (b) {
          clearTimeout(Da)
          var c = a(":focus")
          c.is("textarea") ||
            c.is("input") ||
            c.is("select") ||
            !h.keyboardScrolling ||
            !h.autoScrolling ||
            (-1 < a.inArray(b.which, [40, 38, 32, 33, 34]) &&
              b.preventDefault(),
            (Da = setTimeout(function () {
              var c = b.shiftKey
              switch (((oa = b.ctrlKey), b.which)) {
                case 38:
                case 33:
                  xa.k.up && ka.moveSectionUp()
                  break
                case 32:
                  if (c && xa.k.up) {
                    ka.moveSectionUp()
                    break
                  }
                case 40:
                case 34:
                  xa.k.down && ka.moveSectionDown()
                  break
                case 36:
                  xa.k.up && ka.moveTo(1)
                  break
                case 35:
                  xa.k.down && ka.moveTo(a(".fp-section").length)
                  break
                case 37:
                  xa.k.left && ka.moveSlideLeft()
                  break
                case 39:
                  xa.k.right && ka.moveSlideRight()
              }
            }, 150)))
        }),
        g.keyup(function (a) {
          oa = a.ctrlKey
        }),
        a(b).blur(function () {
          oa = !1
        }),
        sa.mousedown(function (a) {
          2 == a.which && ((La = a.pageY), sa.on("mousemove", E))
        }),
        sa.mouseup(function (a) {
          2 == a.which && sa.off("mousemove")
        })
      var La = 0
      g.on("click touchstart", "#fp-nav a", function (b) {
        b.preventDefault(),
          (b = a(this).parent().index()),
          w(a(".fp-section").eq(b))
      }),
        g.on("click touchstart", ".fp-slidesNav a", function (b) {
          b.preventDefault(),
            (b = a(this).closest(".fp-section").find(".fp-slides")),
            F(b, b.find(".fp-slide").eq(a(this).closest("li").index()))
        }),
        h.normalScrollElements &&
          (g.on("mouseenter", h.normalScrollElements, function () {
            ka.setMouseWheelScrolling(!1)
          }),
          g.on("mouseleave", h.normalScrollElements, function () {
            ka.setMouseWheelScrolling(!0)
          })),
        a(".fp-section").on(
          "click touchstart",
          ".fp-controlArrow",
          function () {
            a(this).hasClass("fp-prev")
              ? xa.m.left && ka.moveSlideLeft()
              : xa.m.right && ka.moveSlideRight()
          }
        ),
        f.resize(G)
      var Ma = ta
      ka.destroy = function (b) {
        ka.setAutoScrolling(!1, "internal"),
          ka.setAllowScrolling(!1),
          ka.setKeyboardScrolling(!1),
          sa.addClass("fp-destroyed"),
          clearTimeout(Aa),
          clearTimeout(za),
          clearTimeout(ya),
          clearTimeout(Ba),
          clearTimeout(Ca),
          f.off("scroll", l).off("hashchange", D).off("resize", G),
          g
            .off("click", "#fp-nav a")
            .off("mouseenter", "#fp-nav li")
            .off("mouseleave", "#fp-nav li")
            .off("click", ".fp-slidesNav a")
            .off("mouseover", h.normalScrollElements)
            .off("mouseout", h.normalScrollElements),
          a(".fp-section").off("click", ".fp-controlArrow"),
          b && fa()
      }
    }
  }),
  (function (a) {
    jQuery.fn.extend({
      slimScroll: function (b) {
        var c = a.extend(
          {
            width: "auto",
            height: "250px",
            size: "7px",
            color: "#000",
            position: "right",
            distance: "1px",
            start: "top",
            opacity: 0.4,
            alwaysVisible: !1,
            disableFadeOut: !1,
            railVisible: !1,
            railColor: "#333",
            railOpacity: 0.2,
            railDraggable: !0,
            railClass: "slimScrollRail",
            barClass: "slimScrollBar",
            wrapperClass: "slimScrollDiv",
            allowPageScroll: !1,
            wheelStep: 20,
            touchScrollStep: 200,
            borderRadius: "7px",
            railBorderRadius: "7px",
          },
          b
        )
        return (
          this.each(function () {
            function d(b) {
              if (i) {
                b = b || window.event
                var d = 0
                b.wheelDelta && (d = -b.wheelDelta / 120),
                  b.detail && (d = b.detail / 3),
                  a(b.target || b.srcTarget || b.srcElement)
                    .closest("." + c.wrapperClass)
                    .is(r.parent()) && e(d, !0),
                  b.preventDefault && !q && b.preventDefault(),
                  q || (b.returnValue = !1)
              }
            }
            function e(a, b, d) {
              q = !1
              var e = a,
                f = r.outerHeight() - u.outerHeight()
              b &&
                ((e =
                  parseInt(u.css("top")) +
                  ((a * parseInt(c.wheelStep)) / 100) * u.outerHeight()),
                (e = Math.min(Math.max(e, 0), f)),
                (e = 0 < a ? Math.ceil(e) : Math.floor(e)),
                u.css({ top: e + "px" })),
                (o =
                  parseInt(u.css("top")) / (r.outerHeight() - u.outerHeight())),
                (e = o * (r[0].scrollHeight - r.outerHeight())),
                d &&
                  ((e = a),
                  (a = (e / r[0].scrollHeight) * r.outerHeight()),
                  (a = Math.min(Math.max(a, 0), f)),
                  u.css({ top: a + "px" })),
                r.scrollTop(e),
                r.trigger("slimscrolling", ~~e),
                g(),
                h()
            }
            function f() {
              ;(n = Math.max(
                (r.outerHeight() / r[0].scrollHeight) * r.outerHeight(),
                30
              )),
                u.css({ height: n + "px" })
              var a = n == r.outerHeight() ? "none" : "block"
              u.css({ display: a })
            }
            function g() {
              f(),
                clearTimeout(l),
                o == ~~o
                  ? ((q = c.allowPageScroll),
                    p != o &&
                      r.trigger("slimscroll", 0 == ~~o ? "top" : "bottom"))
                  : (q = !1),
                (p = o),
                n >= r.outerHeight()
                  ? (q = !0)
                  : (u.stop(!0, !0).fadeIn("fast"),
                    c.railVisible && v.stop(!0, !0).fadeIn("fast"))
            }
            function h() {
              c.alwaysVisible ||
                (l = setTimeout(function () {
                  ;(c.disableFadeOut && i) ||
                    j ||
                    k ||
                    (u.fadeOut("slow"), v.fadeOut("slow"))
                }, 1e3))
            }
            var i,
              j,
              k,
              l,
              m,
              n,
              o,
              p,
              q = !1,
              r = a(this)
            if (r.parent().hasClass(c.wrapperClass)) {
              var s = r.scrollTop(),
                u = r.parent().find("." + c.barClass),
                v = r.parent().find("." + c.railClass)
              if ((f(), a.isPlainObject(b))) {
                if ("height" in b && "auto" == b.height) {
                  r.parent().css("height", "auto"), r.css("height", "auto")
                  var w = r.parent().parent().height()
                  r.parent().css("height", w), r.css("height", w)
                }
                if ("scrollTo" in b) s = parseInt(c.scrollTo)
                else if ("scrollBy" in b) s += parseInt(c.scrollBy)
                else if ("destroy" in b)
                  return (
                    (function () {
                      window.removeEventListener
                        ? (this.removeEventListener("DOMMouseScroll", d),
                          this.removeEventListener("mousewheel", d))
                        : document.detachEvent("onmousewheel", d)
                    })(),
                    u.remove(),
                    v.remove(),
                    void r.unwrap()
                  )
                e(s, !1, !0)
              }
            } else {
              ;(c.height = "auto" == b.height ? r.parent().height() : b.height),
                (s = a("<div></div>").addClass(c.wrapperClass).css({
                  position: "relative",
                  overflow: "hidden",
                  width: c.width,
                  height: c.height,
                })),
                r.css({ overflow: "hidden", width: c.width, height: c.height })
              var v = a("<div></div>")
                  .addClass(c.railClass)
                  .css({
                    width: c.size,
                    height: "100%",
                    position: "absolute",
                    top: 0,
                    display:
                      c.alwaysVisible && c.railVisible ? "block" : "none",
                    "border-radius": c.railBorderRadius,
                    background: c.railColor,
                    opacity: c.railOpacity,
                    zIndex: 90,
                  }),
                u = a("<div></div>")
                  .addClass(c.barClass)
                  .css({
                    background: c.color,
                    width: c.size,
                    position: "absolute",
                    top: 0,
                    opacity: c.opacity,
                    display: c.alwaysVisible ? "block" : "none",
                    "border-radius": c.borderRadius,
                    BorderRadius: c.borderRadius,
                    MozBorderRadius: c.borderRadius,
                    WebkitBorderRadius: c.borderRadius,
                    zIndex: 99,
                  }),
                w =
                  "right" == c.position
                    ? { right: c.distance }
                    : { left: c.distance }
              v.css(w),
                u.css(w),
                r.wrap(s),
                r.parent().append(u),
                r.parent().append(v),
                c.railDraggable &&
                  u
                    .bind("mousedown", function (b) {
                      var c = a(document)
                      return (
                        (k = !0),
                        (t = parseFloat(u.css("top"))),
                        (pageY = b.pageY),
                        c.bind("mousemove.slimscroll", function (a) {
                          ;(currTop = t + a.pageY - pageY),
                            u.css("top", currTop),
                            e(0, u.position().top, !1)
                        }),
                        c.bind("mouseup.slimscroll", function (a) {
                          ;(k = !1), h(), c.unbind(".slimscroll")
                        }),
                        !1
                      )
                    })
                    .bind("selectstart.slimscroll", function (a) {
                      return a.stopPropagation(), a.preventDefault(), !1
                    }),
                v.hover(
                  function () {
                    g()
                  },
                  function () {
                    h()
                  }
                ),
                u.hover(
                  function () {
                    j = !0
                  },
                  function () {
                    j = !1
                  }
                ),
                r.hover(
                  function () {
                    ;(i = !0), g(), h()
                  },
                  function () {
                    ;(i = !1), h()
                  }
                ),
                r.bind("touchstart", function (a, b) {
                  a.originalEvent.touches.length &&
                    (m = a.originalEvent.touches[0].pageY)
                }),
                r.bind("touchmove", function (a) {
                  q || a.originalEvent.preventDefault(),
                    a.originalEvent.touches.length &&
                      (e(
                        (m - a.originalEvent.touches[0].pageY) /
                          c.touchScrollStep,
                        !0
                      ),
                      (m = a.originalEvent.touches[0].pageY))
                }),
                f(),
                "bottom" === c.start
                  ? (u.css({ top: r.outerHeight() - u.outerHeight() }),
                    e(0, !0))
                  : "top" !== c.start &&
                    (e(a(c.start).position().top, null, !0),
                    c.alwaysVisible || u.hide()),
                (function () {
                  window.addEventListener
                    ? (this.addEventListener("DOMMouseScroll", d, !1),
                      this.addEventListener("mousewheel", d, !1))
                    : document.attachEvent("onmousewheel", d)
                })()
            }
          }),
          this
        )
      },
    }),
      jQuery.fn.extend({ slimscroll: jQuery.fn.slimScroll })
  })(jQuery)
var _gsScope =
  "undefined" != typeof module && module.exports && "undefined" != typeof global
    ? global
    : this || window
if (
  ((_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function () {
    "use strict"
    _gsScope._gsDefine(
      "TweenMax",
      ["core.Animation", "core.SimpleTimeline", "TweenLite"],
      function (a, b, c) {
        var d = function (a) {
            var b,
              c = [],
              d = a.length
            for (b = 0; b !== d; c.push(a[b++]));
            return c
          },
          e = function (a, b, d) {
            c.call(this, a, b, d),
              (this._cycle = 0),
              (this._yoyo = !0 === this.vars.yoyo),
              (this._repeat = this.vars.repeat || 0),
              (this._repeatDelay = this.vars.repeatDelay || 0),
              (this._dirty = !0),
              (this.render = e.prototype.render)
          },
          f = 1e-10,
          g = c._internals,
          h = g.isSelector,
          i = g.isArray,
          j = (e.prototype = c.to({}, 0.1, {})),
          k = []
        ;(e.version = "1.17.0"),
          (j.constructor = e),
          (j.kill()._gc = !1),
          (e.killTweensOf = e.killDelayedCallsTo = c.killTweensOf),
          (e.getTweensOf = c.getTweensOf),
          (e.lagSmoothing = c.lagSmoothing),
          (e.ticker = c.ticker),
          (e.render = c.render),
          (j.invalidate = function () {
            return (
              (this._yoyo = !0 === this.vars.yoyo),
              (this._repeat = this.vars.repeat || 0),
              (this._repeatDelay = this.vars.repeatDelay || 0),
              this._uncache(!0),
              c.prototype.invalidate.call(this)
            )
          }),
          (j.updateTo = function (a, b) {
            var d,
              e = this.ratio,
              f = this.vars.immediateRender || a.immediateRender
            b &&
              this._startTime < this._timeline._time &&
              ((this._startTime = this._timeline._time),
              this._uncache(!1),
              this._gc
                ? this._enabled(!0, !1)
                : this._timeline.insert(this, this._startTime - this._delay))
            for (d in a) this.vars[d] = a[d]
            if (this._initted || f)
              if (b) (this._initted = !1), f && this.render(0, !0, !0)
              else if (
                (this._gc && this._enabled(!0, !1),
                this._notifyPluginsOfEnabled &&
                  this._firstPT &&
                  c._onPluginEvent("_onDisable", this),
                this._time / this._duration > 0.998)
              ) {
                var g = this._time
                this.render(0, !0, !1),
                  (this._initted = !1),
                  this.render(g, !0, !1)
              } else if (this._time > 0 || f) {
                ;(this._initted = !1), this._init()
                for (var h, i = 1 / (1 - e), j = this._firstPT; j; )
                  (h = j.s + j.c), (j.c *= i), (j.s = h - j.c), (j = j._next)
              }
            return this
          }),
          (j.render = function (a, b, c) {
            this._initted ||
              (0 === this._duration && this.vars.repeat && this.invalidate())
            var d,
              e,
              h,
              i,
              j,
              k,
              l,
              m,
              n = this._dirty ? this.totalDuration() : this._totalDuration,
              o = this._time,
              p = this._totalTime,
              q = this._cycle,
              r = this._duration,
              s = this._rawPrevTime
            if (
              (a >= n
                ? ((this._totalTime = n),
                  (this._cycle = this._repeat),
                  this._yoyo && 0 != (1 & this._cycle)
                    ? ((this._time = 0),
                      (this.ratio = this._ease._calcEnd
                        ? this._ease.getRatio(0)
                        : 0))
                    : ((this._time = r),
                      (this.ratio = this._ease._calcEnd
                        ? this._ease.getRatio(1)
                        : 1)),
                  this._reversed ||
                    ((d = !0),
                    (e = "onComplete"),
                    (c = c || this._timeline.autoRemoveChildren)),
                  0 === r &&
                    (this._initted || !this.vars.lazy || c) &&
                    (this._startTime === this._timeline._duration && (a = 0),
                    (0 === a || s < 0 || s === f) &&
                      s !== a &&
                      ((c = !0), s > f && (e = "onReverseComplete")),
                    (this._rawPrevTime = m = !b || a || s === a ? a : f)))
                : a < 1e-7
                ? ((this._totalTime = this._time = this._cycle = 0),
                  (this.ratio = this._ease._calcEnd
                    ? this._ease.getRatio(0)
                    : 0),
                  (0 !== p || (0 === r && s > 0)) &&
                    ((e = "onReverseComplete"), (d = this._reversed)),
                  a < 0 &&
                    ((this._active = !1),
                    0 === r &&
                      (this._initted || !this.vars.lazy || c) &&
                      (s >= 0 && (c = !0),
                      (this._rawPrevTime = m = !b || a || s === a ? a : f))),
                  this._initted || (c = !0))
                : ((this._totalTime = this._time = a),
                  0 !== this._repeat &&
                    ((i = r + this._repeatDelay),
                    (this._cycle = (this._totalTime / i) >> 0),
                    0 !== this._cycle &&
                      this._cycle === this._totalTime / i &&
                      this._cycle--,
                    (this._time = this._totalTime - this._cycle * i),
                    this._yoyo &&
                      0 != (1 & this._cycle) &&
                      (this._time = r - this._time),
                    this._time > r
                      ? (this._time = r)
                      : this._time < 0 && (this._time = 0)),
                  this._easeType
                    ? ((j = this._time / r),
                      (k = this._easeType),
                      (l = this._easePower),
                      (1 === k || (3 === k && j >= 0.5)) && (j = 1 - j),
                      3 === k && (j *= 2),
                      1 === l
                        ? (j *= j)
                        : 2 === l
                        ? (j *= j * j)
                        : 3 === l
                        ? (j *= j * j * j)
                        : 4 === l && (j *= j * j * j * j),
                      1 === k
                        ? (this.ratio = 1 - j)
                        : 2 === k
                        ? (this.ratio = j)
                        : this._time / r < 0.5
                        ? (this.ratio = j / 2)
                        : (this.ratio = 1 - j / 2))
                    : (this.ratio = this._ease.getRatio(this._time / r))),
              o === this._time && !c && q === this._cycle)
            )
              return void (
                p !== this._totalTime &&
                this._onUpdate &&
                (b || this._callback("onUpdate"))
              )
            if (!this._initted) {
              if ((this._init(), !this._initted || this._gc)) return
              if (
                !c &&
                this._firstPT &&
                ((!1 !== this.vars.lazy && this._duration) ||
                  (this.vars.lazy && !this._duration))
              )
                return (
                  (this._time = o),
                  (this._totalTime = p),
                  (this._rawPrevTime = s),
                  (this._cycle = q),
                  g.lazyTweens.push(this),
                  void (this._lazy = [a, b])
                )
              this._time && !d
                ? (this.ratio = this._ease.getRatio(this._time / r))
                : d &&
                  this._ease._calcEnd &&
                  (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
            }
            for (
              !1 !== this._lazy && (this._lazy = !1),
                this._active ||
                  (!this._paused &&
                    this._time !== o &&
                    a >= 0 &&
                    (this._active = !0)),
                0 === p &&
                  (2 === this._initted && a > 0 && this._init(),
                  this._startAt &&
                    (a >= 0
                      ? this._startAt.render(a, b, c)
                      : e || (e = "_dummyGS")),
                  this.vars.onStart &&
                    ((0 === this._totalTime && 0 !== r) ||
                      b ||
                      this._callback("onStart"))),
                h = this._firstPT;
              h;

            )
              h.f
                ? h.t[h.p](h.c * this.ratio + h.s)
                : (h.t[h.p] = h.c * this.ratio + h.s),
                (h = h._next)
            this._onUpdate &&
              (a < 0 &&
                this._startAt &&
                this._startTime &&
                this._startAt.render(a, b, c),
              b ||
                ((this._totalTime !== p || d) && this._callback("onUpdate"))),
              this._cycle !== q &&
                (b ||
                  this._gc ||
                  (this.vars.onRepeat && this._callback("onRepeat"))),
              e &&
                ((this._gc && !c) ||
                  (a < 0 &&
                    this._startAt &&
                    !this._onUpdate &&
                    this._startTime &&
                    this._startAt.render(a, b, c),
                  d &&
                    (this._timeline.autoRemoveChildren && this._enabled(!1, !1),
                    (this._active = !1)),
                  !b && this.vars[e] && this._callback(e),
                  0 === r &&
                    this._rawPrevTime === f &&
                    m !== f &&
                    (this._rawPrevTime = 0)))
          }),
          (e.to = function (a, b, c) {
            return new e(a, b, c)
          }),
          (e.from = function (a, b, c) {
            return (
              (c.runBackwards = !0),
              (c.immediateRender = 0 != c.immediateRender),
              new e(a, b, c)
            )
          }),
          (e.fromTo = function (a, b, c, d) {
            return (
              (d.startAt = c),
              (d.immediateRender =
                0 != d.immediateRender && 0 != c.immediateRender),
              new e(a, b, d)
            )
          }),
          (e.staggerTo = e.allTo = function (a, b, f, g, j, l, m) {
            g = g || 0
            var n,
              o,
              p,
              q,
              r = f.delay || 0,
              s = [],
              t = function () {
                f.onComplete &&
                  f.onComplete.apply(f.onCompleteScope || this, arguments),
                  j.apply(m || f.callbackScope || this, l || k)
              }
            for (
              i(a) ||
                ("string" == typeof a && (a = c.selector(a) || a),
                h(a) && (a = d(a))),
                a = a || [],
                g < 0 && ((a = d(a)), a.reverse(), (g *= -1)),
                n = a.length - 1,
                p = 0;
              p <= n;
              p++
            ) {
              o = {}
              for (q in f) o[q] = f[q]
              ;(o.delay = r),
                p === n && j && (o.onComplete = t),
                (s[p] = new e(a[p], b, o)),
                (r += g)
            }
            return s
          }),
          (e.staggerFrom = e.allFrom = function (a, b, c, d, f, g, h) {
            return (
              (c.runBackwards = !0),
              (c.immediateRender = 0 != c.immediateRender),
              e.staggerTo(a, b, c, d, f, g, h)
            )
          }),
          (e.staggerFromTo = e.allFromTo = function (a, b, c, d, f, g, h, i) {
            return (
              (d.startAt = c),
              (d.immediateRender =
                0 != d.immediateRender && 0 != c.immediateRender),
              e.staggerTo(a, b, d, f, g, h, i)
            )
          }),
          (e.delayedCall = function (a, b, c, d, f) {
            return new e(b, 0, {
              delay: a,
              onComplete: b,
              onCompleteParams: c,
              callbackScope: d,
              onReverseComplete: b,
              onReverseCompleteParams: c,
              immediateRender: !1,
              useFrames: f,
              overwrite: 0,
            })
          }),
          (e.set = function (a, b) {
            return new e(a, 0, b)
          }),
          (e.isTweening = function (a) {
            return c.getTweensOf(a, !0).length > 0
          })
        var l = function (a, b) {
            for (var d = [], e = 0, f = a._first; f; )
              f instanceof c
                ? (d[e++] = f)
                : (b && (d[e++] = f), (d = d.concat(l(f, b))), (e = d.length)),
                (f = f._next)
            return d
          },
          m = (e.getAllTweens = function (b) {
            return l(a._rootTimeline, b).concat(l(a._rootFramesTimeline, b))
          })
        ;(e.killAll = function (a, c, d, e) {
          null == c && (c = !0), null == d && (d = !0)
          var f,
            g,
            h,
            i = m(0 != e),
            j = i.length,
            k = c && d && e
          for (h = 0; h < j; h++)
            (g = i[h]),
              (k ||
                g instanceof b ||
                ((f = g.target === g.vars.onComplete) && d) ||
                (c && !f)) &&
                (a
                  ? g.totalTime(g._reversed ? 0 : g.totalDuration())
                  : g._enabled(!1, !1))
        }),
          (e.killChildTweensOf = function (a, b) {
            if (null != a) {
              var f,
                j,
                k,
                l,
                m,
                n = g.tweenLookup
              if (
                ("string" == typeof a && (a = c.selector(a) || a),
                h(a) && (a = d(a)),
                i(a))
              )
                for (l = a.length; --l > -1; ) e.killChildTweensOf(a[l], b)
              else {
                f = []
                for (k in n)
                  for (j = n[k].target.parentNode; j; )
                    j === a && (f = f.concat(n[k].tweens)), (j = j.parentNode)
                for (m = f.length, l = 0; l < m; l++)
                  b && f[l].totalTime(f[l].totalDuration()),
                    f[l]._enabled(!1, !1)
              }
            }
          })
        var n = function (a, c, d, e) {
          ;(c = !1 !== c), (d = !1 !== d), (e = !1 !== e)
          for (var f, g, h = m(e), i = c && d && e, j = h.length; --j > -1; )
            (g = h[j]),
              (i ||
                g instanceof b ||
                ((f = g.target === g.vars.onComplete) && d) ||
                (c && !f)) &&
                g.paused(a)
        }
        return (
          (e.pauseAll = function (a, b, c) {
            n(!0, a, b, c)
          }),
          (e.resumeAll = function (a, b, c) {
            n(!1, a, b, c)
          }),
          (e.globalTimeScale = function (b) {
            var d = a._rootTimeline,
              e = c.ticker.time
            return arguments.length
              ? ((b = b || f),
                (d._startTime = e - ((e - d._startTime) * d._timeScale) / b),
                (d = a._rootFramesTimeline),
                (e = c.ticker.frame),
                (d._startTime = e - ((e - d._startTime) * d._timeScale) / b),
                (d._timeScale = a._rootTimeline._timeScale = b),
                b)
              : d._timeScale
          }),
          (j.progress = function (a) {
            return arguments.length
              ? this.totalTime(
                  this.duration() *
                    (this._yoyo && 0 != (1 & this._cycle) ? 1 - a : a) +
                    this._cycle * (this._duration + this._repeatDelay),
                  !1
                )
              : this._time / this.duration()
          }),
          (j.totalProgress = function (a) {
            return arguments.length
              ? this.totalTime(this.totalDuration() * a, !1)
              : this._totalTime / this.totalDuration()
          }),
          (j.time = function (a, b) {
            return arguments.length
              ? (this._dirty && this.totalDuration(),
                a > this._duration && (a = this._duration),
                this._yoyo && 0 != (1 & this._cycle)
                  ? (a =
                      this._duration -
                      a +
                      this._cycle * (this._duration + this._repeatDelay))
                  : 0 !== this._repeat &&
                    (a += this._cycle * (this._duration + this._repeatDelay)),
                this.totalTime(a, b))
              : this._time
          }),
          (j.duration = function (b) {
            return arguments.length
              ? a.prototype.duration.call(this, b)
              : this._duration
          }),
          (j.totalDuration = function (a) {
            return arguments.length
              ? -1 === this._repeat
                ? this
                : this.duration(
                    (a - this._repeat * this._repeatDelay) / (this._repeat + 1)
                  )
              : (this._dirty &&
                  ((this._totalDuration =
                    -1 === this._repeat
                      ? 999999999999
                      : this._duration * (this._repeat + 1) +
                        this._repeatDelay * this._repeat),
                  (this._dirty = !1)),
                this._totalDuration)
          }),
          (j.repeat = function (a) {
            return arguments.length
              ? ((this._repeat = a), this._uncache(!0))
              : this._repeat
          }),
          (j.repeatDelay = function (a) {
            return arguments.length
              ? ((this._repeatDelay = a), this._uncache(!0))
              : this._repeatDelay
          }),
          (j.yoyo = function (a) {
            return arguments.length ? ((this._yoyo = a), this) : this._yoyo
          }),
          e
        )
      },
      !0
    ),
      _gsScope._gsDefine(
        "TimelineLite",
        ["core.Animation", "core.SimpleTimeline", "TweenLite"],
        function (a, b, c) {
          var d = function (a) {
              b.call(this, a),
                (this._labels = {}),
                (this.autoRemoveChildren = !0 === this.vars.autoRemoveChildren),
                (this.smoothChildTiming = !0 === this.vars.smoothChildTiming),
                (this._sortChildren = !0),
                (this._onUpdate = this.vars.onUpdate)
              var c,
                d,
                e = this.vars
              for (d in e)
                (c = e[d]),
                  i(c) &&
                    -1 !== c.join("").indexOf("{self}") &&
                    (e[d] = this._swapSelfInParams(c))
              i(e.tweens) && this.add(e.tweens, 0, e.align, e.stagger)
            },
            e = 1e-10,
            f = c._internals,
            g = (d._internals = {}),
            h = f.isSelector,
            i = f.isArray,
            j = f.lazyTweens,
            k = f.lazyRender,
            l = [],
            m = _gsScope._gsDefine.globals,
            n = function (a) {
              var b,
                c = {}
              for (b in a) c[b] = a[b]
              return c
            },
            o = (g.pauseCallback = function (a, b, c, d) {
              var f,
                g = a._timeline,
                h = g._totalTime,
                i = a._startTime,
                j = a._rawPrevTime < 0 || (0 === a._rawPrevTime && g._reversed),
                k = j ? 0 : e,
                m = j ? e : 0
              if (b || !this._forcingPlayhead) {
                for (g.pause(i), f = a._prev; f && f._startTime === i; )
                  (f._rawPrevTime = m), (f = f._prev)
                for (f = a._next; f && f._startTime === i; )
                  (f._rawPrevTime = k), (f = f._next)
                b && b.apply(d || g.vars.callbackScope || g, c || l),
                  (!this._forcingPlayhead && g._paused) || g.seek(h)
              }
            }),
            p = function (a) {
              var b,
                c = [],
                d = a.length
              for (b = 0; b !== d; c.push(a[b++]));
              return c
            },
            q = (d.prototype = new b())
          return (
            (d.version = "1.17.0"),
            (q.constructor = d),
            (q.kill()._gc = q._forcingPlayhead = !1),
            (q.to = function (a, b, d, e) {
              var f = (d.repeat && m.TweenMax) || c
              return b ? this.add(new f(a, b, d), e) : this.set(a, d, e)
            }),
            (q.from = function (a, b, d, e) {
              return this.add(((d.repeat && m.TweenMax) || c).from(a, b, d), e)
            }),
            (q.fromTo = function (a, b, d, e, f) {
              var g = (e.repeat && m.TweenMax) || c
              return b ? this.add(g.fromTo(a, b, d, e), f) : this.set(a, e, f)
            }),
            (q.staggerTo = function (a, b, e, f, g, i, j, k) {
              var l,
                m = new d({
                  onComplete: i,
                  onCompleteParams: j,
                  callbackScope: k,
                  smoothChildTiming: this.smoothChildTiming,
                })
              for (
                "string" == typeof a && (a = c.selector(a) || a),
                  a = a || [],
                  h(a) && (a = p(a)),
                  f = f || 0,
                  f < 0 && ((a = p(a)), a.reverse(), (f *= -1)),
                  l = 0;
                l < a.length;
                l++
              )
                e.startAt && (e.startAt = n(e.startAt)),
                  m.to(a[l], b, n(e), l * f)
              return this.add(m, g)
            }),
            (q.staggerFrom = function (a, b, c, d, e, f, g, h) {
              return (
                (c.immediateRender = 0 != c.immediateRender),
                (c.runBackwards = !0),
                this.staggerTo(a, b, c, d, e, f, g, h)
              )
            }),
            (q.staggerFromTo = function (a, b, c, d, e, f, g, h, i) {
              return (
                (d.startAt = c),
                (d.immediateRender =
                  0 != d.immediateRender && 0 != c.immediateRender),
                this.staggerTo(a, b, d, e, f, g, h, i)
              )
            }),
            (q.call = function (a, b, d, e) {
              return this.add(c.delayedCall(0, a, b, d), e)
            }),
            (q.set = function (a, b, d) {
              return (
                (d = this._parseTimeOrLabel(d, 0, !0)),
                null == b.immediateRender &&
                  (b.immediateRender = d === this._time && !this._paused),
                this.add(new c(a, 0, b), d)
              )
            }),
            (d.exportRoot = function (a, b) {
              ;(a = a || {}),
                null == a.smoothChildTiming && (a.smoothChildTiming = !0)
              var e,
                f,
                g = new d(a),
                h = g._timeline
              for (
                null == b && (b = !0),
                  h._remove(g, !0),
                  g._startTime = 0,
                  g._rawPrevTime = g._time = g._totalTime = h._time,
                  e = h._first;
                e;

              )
                (f = e._next),
                  (b && e instanceof c && e.target === e.vars.onComplete) ||
                    g.add(e, e._startTime - e._delay),
                  (e = f)
              return h.add(g, 0), g
            }),
            (q.add = function (e, f, g, h) {
              var j, k, l, m, n, o
              if (
                ("number" != typeof f &&
                  (f = this._parseTimeOrLabel(f, 0, !0, e)),
                !(e instanceof a))
              ) {
                if (e instanceof Array || (e && e.push && i(e))) {
                  for (
                    g = g || "normal", h = h || 0, j = f, k = e.length, l = 0;
                    l < k;
                    l++
                  )
                    i((m = e[l])) && (m = new d({ tweens: m })),
                      this.add(m, j),
                      "string" != typeof m &&
                        "function" != typeof m &&
                        ("sequence" === g
                          ? (j =
                              m._startTime + m.totalDuration() / m._timeScale)
                          : "start" === g && (m._startTime -= m.delay())),
                      (j += h)
                  return this._uncache(!0)
                }
                if ("string" == typeof e) return this.addLabel(e, f)
                if ("function" != typeof e)
                  throw (
                    "Cannot add " +
                    e +
                    " into the timeline; it is not a tween, timeline, function, or string."
                  )
                e = c.delayedCall(0, e)
              }
              if (
                (b.prototype.add.call(this, e, f),
                (this._gc || this._time === this._duration) &&
                  !this._paused &&
                  this._duration < this.duration())
              )
                for (n = this, o = n.rawTime() > e._startTime; n._timeline; )
                  o && n._timeline.smoothChildTiming
                    ? n.totalTime(n._totalTime, !0)
                    : n._gc && n._enabled(!0, !1),
                    (n = n._timeline)
              return this
            }),
            (q.remove = function (b) {
              if (b instanceof a) return this._remove(b, !1)
              if (b instanceof Array || (b && b.push && i(b))) {
                for (var c = b.length; --c > -1; ) this.remove(b[c])
                return this
              }
              return "string" == typeof b
                ? this.removeLabel(b)
                : this.kill(null, b)
            }),
            (q._remove = function (a, c) {
              b.prototype._remove.call(this, a, c)
              var d = this._last
              return (
                d
                  ? this._time >
                      d._startTime + d._totalDuration / d._timeScale &&
                    ((this._time = this.duration()),
                    (this._totalTime = this._totalDuration))
                  : (this._time = this._totalTime = this._duration = this._totalDuration = 0),
                this
              )
            }),
            (q.append = function (a, b) {
              return this.add(a, this._parseTimeOrLabel(null, b, !0, a))
            }),
            (q.insert = q.insertMultiple = function (a, b, c, d) {
              return this.add(a, b || 0, c, d)
            }),
            (q.appendMultiple = function (a, b, c, d) {
              return this.add(a, this._parseTimeOrLabel(null, b, !0, a), c, d)
            }),
            (q.addLabel = function (a, b) {
              return (this._labels[a] = this._parseTimeOrLabel(b)), this
            }),
            (q.addPause = function (a, b, d, e) {
              var f = c.delayedCall(0, o, ["{self}", b, d, e], this)
              return (f.data = "isPause"), this.add(f, a)
            }),
            (q.removeLabel = function (a) {
              return delete this._labels[a], this
            }),
            (q.getLabelTime = function (a) {
              return null != this._labels[a] ? this._labels[a] : -1
            }),
            (q._parseTimeOrLabel = function (b, c, d, e) {
              var f
              if (e instanceof a && e.timeline === this) this.remove(e)
              else if (e && (e instanceof Array || (e.push && i(e))))
                for (f = e.length; --f > -1; )
                  e[f] instanceof a &&
                    e[f].timeline === this &&
                    this.remove(e[f])
              if ("string" == typeof c)
                return this._parseTimeOrLabel(
                  c,
                  d && "number" == typeof b && null == this._labels[c]
                    ? b - this.duration()
                    : 0,
                  d
                )
              if (
                ((c = c || 0),
                "string" != typeof b || (!isNaN(b) && null == this._labels[b]))
              )
                null == b && (b = this.duration())
              else {
                if (-1 === (f = b.indexOf("=")))
                  return null == this._labels[b]
                    ? d
                      ? (this._labels[b] = this.duration() + c)
                      : c
                    : this._labels[b] + c
                ;(c =
                  parseInt(b.charAt(f - 1) + "1", 10) *
                  Number(b.substr(f + 1))),
                  (b =
                    f > 1
                      ? this._parseTimeOrLabel(b.substr(0, f - 1), 0, d)
                      : this.duration())
              }
              return Number(b) + c
            }),
            (q.seek = function (a, b) {
              return this.totalTime(
                "number" == typeof a ? a : this._parseTimeOrLabel(a),
                !1 !== b
              )
            }),
            (q.stop = function () {
              return this.paused(!0)
            }),
            (q.gotoAndPlay = function (a, b) {
              return this.play(a, b)
            }),
            (q.gotoAndStop = function (a, b) {
              return this.pause(a, b)
            }),
            (q.render = function (a, b, c) {
              this._gc && this._enabled(!0, !1)
              var d,
                f,
                g,
                h,
                i,
                l = this._dirty ? this.totalDuration() : this._totalDuration,
                m = this._time,
                n = this._startTime,
                o = this._timeScale,
                p = this._paused
              if (a >= l)
                (this._totalTime = this._time = l),
                  this._reversed ||
                    this._hasPausedChild() ||
                    ((f = !0),
                    (h = "onComplete"),
                    (i = !!this._timeline.autoRemoveChildren),
                    0 === this._duration &&
                      (0 === a ||
                        this._rawPrevTime < 0 ||
                        this._rawPrevTime === e) &&
                      this._rawPrevTime !== a &&
                      this._first &&
                      ((i = !0),
                      this._rawPrevTime > e && (h = "onReverseComplete"))),
                  (this._rawPrevTime =
                    this._duration || !b || a || this._rawPrevTime === a
                      ? a
                      : e),
                  (a = l + 1e-4)
              else if (a < 1e-7)
                if (
                  ((this._totalTime = this._time = 0),
                  (0 !== m ||
                    (0 === this._duration &&
                      this._rawPrevTime !== e &&
                      (this._rawPrevTime > 0 ||
                        (a < 0 && this._rawPrevTime >= 0)))) &&
                    ((h = "onReverseComplete"), (f = this._reversed)),
                  a < 0)
                )
                  (this._active = !1),
                    this._timeline.autoRemoveChildren && this._reversed
                      ? ((i = f = !0), (h = "onReverseComplete"))
                      : this._rawPrevTime >= 0 && this._first && (i = !0),
                    (this._rawPrevTime = a)
                else {
                  if (
                    ((this._rawPrevTime =
                      this._duration || !b || a || this._rawPrevTime === a
                        ? a
                        : e),
                    0 === a && f)
                  )
                    for (d = this._first; d && 0 === d._startTime; )
                      d._duration || (f = !1), (d = d._next)
                  ;(a = 0), this._initted || (i = !0)
                }
              else this._totalTime = this._time = this._rawPrevTime = a
              if ((this._time !== m && this._first) || c || i) {
                if (
                  (this._initted || (this._initted = !0),
                  this._active ||
                    (!this._paused &&
                      this._time !== m &&
                      a > 0 &&
                      (this._active = !0)),
                  0 === m &&
                    this.vars.onStart &&
                    0 !== this._time &&
                    (b || this._callback("onStart")),
                  this._time >= m)
                )
                  for (
                    d = this._first;
                    d && ((g = d._next), !this._paused || p);

                  )
                    (d._active ||
                      (d._startTime <= this._time && !d._paused && !d._gc)) &&
                      (d._reversed
                        ? d.render(
                            (d._dirty ? d.totalDuration() : d._totalDuration) -
                              (a - d._startTime) * d._timeScale,
                            b,
                            c
                          )
                        : d.render((a - d._startTime) * d._timeScale, b, c)),
                      (d = g)
                else
                  for (
                    d = this._last;
                    d && ((g = d._prev), !this._paused || p);

                  )
                    (d._active ||
                      (d._startTime <= m && !d._paused && !d._gc)) &&
                      (d._reversed
                        ? d.render(
                            (d._dirty ? d.totalDuration() : d._totalDuration) -
                              (a - d._startTime) * d._timeScale,
                            b,
                            c
                          )
                        : d.render((a - d._startTime) * d._timeScale, b, c)),
                      (d = g)
                this._onUpdate &&
                  (b || (j.length && k(), this._callback("onUpdate"))),
                  h &&
                    (this._gc ||
                      (n !== this._startTime && o === this._timeScale) ||
                      ((0 === this._time || l >= this.totalDuration()) &&
                        (f &&
                          (j.length && k(),
                          this._timeline.autoRemoveChildren &&
                            this._enabled(!1, !1),
                          (this._active = !1)),
                        !b && this.vars[h] && this._callback(h))))
              }
            }),
            (q._hasPausedChild = function () {
              for (var a = this._first; a; ) {
                if (a._paused || (a instanceof d && a._hasPausedChild()))
                  return !0
                a = a._next
              }
              return !1
            }),
            (q.getChildren = function (a, b, d, e) {
              e = e || -9999999999
              for (var f = [], g = this._first, h = 0; g; )
                g._startTime < e ||
                  (g instanceof c
                    ? !1 !== b && (f[h++] = g)
                    : (!1 !== d && (f[h++] = g),
                      !1 !== a &&
                        ((f = f.concat(g.getChildren(!0, b, d))),
                        (h = f.length)))),
                  (g = g._next)
              return f
            }),
            (q.getTweensOf = function (a, b) {
              var d,
                e,
                f = this._gc,
                g = [],
                h = 0
              for (
                f && this._enabled(!0, !0), d = c.getTweensOf(a), e = d.length;
                --e > -1;

              )
                (d[e].timeline === this || (b && this._contains(d[e]))) &&
                  (g[h++] = d[e])
              return f && this._enabled(!1, !0), g
            }),
            (q.recent = function () {
              return this._recent
            }),
            (q._contains = function (a) {
              for (var b = a.timeline; b; ) {
                if (b === this) return !0
                b = b.timeline
              }
              return !1
            }),
            (q.shiftChildren = function (a, b, c) {
              c = c || 0
              for (var d, e = this._first, f = this._labels; e; )
                e._startTime >= c && (e._startTime += a), (e = e._next)
              if (b) for (d in f) f[d] >= c && (f[d] += a)
              return this._uncache(!0)
            }),
            (q._kill = function (a, b) {
              if (!a && !b) return this._enabled(!1, !1)
              for (
                var c = b ? this.getTweensOf(b) : this.getChildren(!0, !0, !1),
                  d = c.length,
                  e = !1;
                --d > -1;

              )
                c[d]._kill(a, b) && (e = !0)
              return e
            }),
            (q.clear = function (a) {
              var b = this.getChildren(!1, !0, !0),
                c = b.length
              for (this._time = this._totalTime = 0; --c > -1; )
                b[c]._enabled(!1, !1)
              return !1 !== a && (this._labels = {}), this._uncache(!0)
            }),
            (q.invalidate = function () {
              for (var b = this._first; b; ) b.invalidate(), (b = b._next)
              return a.prototype.invalidate.call(this)
            }),
            (q._enabled = function (a, c) {
              if (a === this._gc)
                for (var d = this._first; d; ) d._enabled(a, !0), (d = d._next)
              return b.prototype._enabled.call(this, a, c)
            }),
            (q.totalTime = function (b, c, d) {
              this._forcingPlayhead = !0
              var e = a.prototype.totalTime.apply(this, arguments)
              return (this._forcingPlayhead = !1), e
            }),
            (q.duration = function (a) {
              return arguments.length
                ? (0 !== this.duration() &&
                    0 !== a &&
                    this.timeScale(this._duration / a),
                  this)
                : (this._dirty && this.totalDuration(), this._duration)
            }),
            (q.totalDuration = function (a) {
              if (!arguments.length) {
                if (this._dirty) {
                  for (var b, c, d = 0, e = this._last, f = 999999999999; e; )
                    (b = e._prev),
                      e._dirty && e.totalDuration(),
                      e._startTime > f && this._sortChildren && !e._paused
                        ? this.add(e, e._startTime - e._delay)
                        : (f = e._startTime),
                      e._startTime < 0 &&
                        !e._paused &&
                        ((d -= e._startTime),
                        this._timeline.smoothChildTiming &&
                          (this._startTime += e._startTime / this._timeScale),
                        this.shiftChildren(-e._startTime, !1, -9999999999),
                        (f = 0)),
                      (c = e._startTime + e._totalDuration / e._timeScale),
                      c > d && (d = c),
                      (e = b)
                  ;(this._duration = this._totalDuration = d),
                    (this._dirty = !1)
                }
                return this._totalDuration
              }
              return (
                0 !== this.totalDuration() &&
                  0 !== a &&
                  this.timeScale(this._totalDuration / a),
                this
              )
            }),
            (q.paused = function (b) {
              if (!b)
                for (var c = this._first, d = this._time; c; )
                  c._startTime === d &&
                    "isPause" === c.data &&
                    (c._rawPrevTime = 0),
                    (c = c._next)
              return a.prototype.paused.apply(this, arguments)
            }),
            (q.usesFrames = function () {
              for (var b = this._timeline; b._timeline; ) b = b._timeline
              return b === a._rootFramesTimeline
            }),
            (q.rawTime = function () {
              return this._paused
                ? this._totalTime
                : (this._timeline.rawTime() - this._startTime) * this._timeScale
            }),
            d
          )
        },
        !0
      ),
      _gsScope._gsDefine(
        "TimelineMax",
        ["TimelineLite", "TweenLite", "easing.Ease"],
        function (a, b, c) {
          var d = function (b) {
              a.call(this, b),
                (this._repeat = this.vars.repeat || 0),
                (this._repeatDelay = this.vars.repeatDelay || 0),
                (this._cycle = 0),
                (this._yoyo = !0 === this.vars.yoyo),
                (this._dirty = !0)
            },
            e = 1e-10,
            f = b._internals,
            g = f.lazyTweens,
            h = f.lazyRender,
            i = new c(null, null, 1, 0),
            j = (d.prototype = new a())
          return (
            (j.constructor = d),
            (j.kill()._gc = !1),
            (d.version = "1.17.0"),
            (j.invalidate = function () {
              return (
                (this._yoyo = !0 === this.vars.yoyo),
                (this._repeat = this.vars.repeat || 0),
                (this._repeatDelay = this.vars.repeatDelay || 0),
                this._uncache(!0),
                a.prototype.invalidate.call(this)
              )
            }),
            (j.addCallback = function (a, c, d, e) {
              return this.add(b.delayedCall(0, a, d, e), c)
            }),
            (j.removeCallback = function (a, b) {
              if (a)
                if (null == b) this._kill(null, a)
                else
                  for (
                    var c = this.getTweensOf(a, !1),
                      d = c.length,
                      e = this._parseTimeOrLabel(b);
                    --d > -1;

                  )
                    c[d]._startTime === e && c[d]._enabled(!1, !1)
              return this
            }),
            (j.removePause = function (b) {
              return this.removeCallback(a._internals.pauseCallback, b)
            }),
            (j.tweenTo = function (a, c) {
              c = c || {}
              var d,
                e,
                f,
                g = {
                  ease: i,
                  useFrames: this.usesFrames(),
                  immediateRender: !1,
                }
              for (e in c) g[e] = c[e]
              return (
                (g.time = this._parseTimeOrLabel(a)),
                (d =
                  Math.abs(Number(g.time) - this._time) / this._timeScale ||
                  0.001),
                (f = new b(this, d, g)),
                (g.onStart = function () {
                  f.target.paused(!0),
                    f.vars.time !== f.target.time() &&
                      d === f.duration() &&
                      f.duration(
                        Math.abs(f.vars.time - f.target.time()) /
                          f.target._timeScale
                      ),
                    c.onStart && f._callback("onStart")
                }),
                f
              )
            }),
            (j.tweenFromTo = function (a, b, c) {
              ;(c = c || {}),
                (a = this._parseTimeOrLabel(a)),
                (c.startAt = {
                  onComplete: this.seek,
                  onCompleteParams: [a],
                  callbackScope: this,
                }),
                (c.immediateRender = !1 !== c.immediateRender)
              var d = this.tweenTo(b, c)
              return d.duration(
                Math.abs(d.vars.time - a) / this._timeScale || 0.001
              )
            }),
            (j.render = function (a, b, c) {
              this._gc && this._enabled(!0, !1)
              var d,
                f,
                i,
                j,
                k,
                l,
                m = this._dirty ? this.totalDuration() : this._totalDuration,
                n = this._duration,
                o = this._time,
                p = this._totalTime,
                q = this._startTime,
                r = this._timeScale,
                s = this._rawPrevTime,
                t = this._paused,
                u = this._cycle
              if (a >= m)
                this._locked ||
                  ((this._totalTime = m), (this._cycle = this._repeat)),
                  this._reversed ||
                    this._hasPausedChild() ||
                    ((f = !0),
                    (j = "onComplete"),
                    (k = !!this._timeline.autoRemoveChildren),
                    0 === this._duration &&
                      (0 === a || s < 0 || s === e) &&
                      s !== a &&
                      this._first &&
                      ((k = !0), s > e && (j = "onReverseComplete"))),
                  (this._rawPrevTime =
                    this._duration || !b || a || this._rawPrevTime === a
                      ? a
                      : e),
                  this._yoyo && 0 != (1 & this._cycle)
                    ? (this._time = a = 0)
                    : ((this._time = n), (a = n + 1e-4))
              else if (a < 1e-7)
                if (
                  (this._locked || (this._totalTime = this._cycle = 0),
                  (this._time = 0),
                  (0 !== o ||
                    (0 === n &&
                      s !== e &&
                      (s > 0 || (a < 0 && s >= 0)) &&
                      !this._locked)) &&
                    ((j = "onReverseComplete"), (f = this._reversed)),
                  a < 0)
                )
                  (this._active = !1),
                    this._timeline.autoRemoveChildren && this._reversed
                      ? ((k = f = !0), (j = "onReverseComplete"))
                      : s >= 0 && this._first && (k = !0),
                    (this._rawPrevTime = a)
                else {
                  if (
                    ((this._rawPrevTime =
                      n || !b || a || this._rawPrevTime === a ? a : e),
                    0 === a && f)
                  )
                    for (d = this._first; d && 0 === d._startTime; )
                      d._duration || (f = !1), (d = d._next)
                  ;(a = 0), this._initted || (k = !0)
                }
              else
                0 === n && s < 0 && (k = !0),
                  (this._time = this._rawPrevTime = a),
                  this._locked ||
                    ((this._totalTime = a),
                    0 !== this._repeat &&
                      ((l = n + this._repeatDelay),
                      (this._cycle = (this._totalTime / l) >> 0),
                      0 !== this._cycle &&
                        this._cycle === this._totalTime / l &&
                        this._cycle--,
                      (this._time = this._totalTime - this._cycle * l),
                      this._yoyo &&
                        0 != (1 & this._cycle) &&
                        (this._time = n - this._time),
                      this._time > n
                        ? ((this._time = n), (a = n + 1e-4))
                        : this._time < 0
                        ? (this._time = a = 0)
                        : (a = this._time)))
              if (this._cycle !== u && !this._locked) {
                var v = this._yoyo && 0 != (1 & u),
                  w = v === (this._yoyo && 0 != (1 & this._cycle)),
                  x = this._totalTime,
                  y = this._cycle,
                  z = this._rawPrevTime,
                  A = this._time
                if (
                  ((this._totalTime = u * n),
                  this._cycle < u ? (v = !v) : (this._totalTime += n),
                  (this._time = o),
                  (this._rawPrevTime = 0 === n ? s - 1e-4 : s),
                  (this._cycle = u),
                  (this._locked = !0),
                  (o = v ? 0 : n),
                  this.render(o, b, 0 === n),
                  b ||
                    this._gc ||
                    (this.vars.onRepeat && this._callback("onRepeat")),
                  w && ((o = v ? n + 1e-4 : -1e-4), this.render(o, !0, !1)),
                  (this._locked = !1),
                  this._paused && !t)
                )
                  return
                ;(this._time = A),
                  (this._totalTime = x),
                  (this._cycle = y),
                  (this._rawPrevTime = z)
              }
              if (!((this._time !== o && this._first) || c || k))
                return void (
                  p !== this._totalTime &&
                  this._onUpdate &&
                  (b || this._callback("onUpdate"))
                )
              if (
                (this._initted || (this._initted = !0),
                this._active ||
                  (!this._paused &&
                    this._totalTime !== p &&
                    a > 0 &&
                    (this._active = !0)),
                0 === p &&
                  this.vars.onStart &&
                  0 !== this._totalTime &&
                  (b || this._callback("onStart")),
                this._time >= o)
              )
                for (
                  d = this._first;
                  d && ((i = d._next), !this._paused || t);

                )
                  (d._active ||
                    (d._startTime <= this._time && !d._paused && !d._gc)) &&
                    (d._reversed
                      ? d.render(
                          (d._dirty ? d.totalDuration() : d._totalDuration) -
                            (a - d._startTime) * d._timeScale,
                          b,
                          c
                        )
                      : d.render((a - d._startTime) * d._timeScale, b, c)),
                    (d = i)
              else
                for (d = this._last; d && ((i = d._prev), !this._paused || t); )
                  (d._active || (d._startTime <= o && !d._paused && !d._gc)) &&
                    (d._reversed
                      ? d.render(
                          (d._dirty ? d.totalDuration() : d._totalDuration) -
                            (a - d._startTime) * d._timeScale,
                          b,
                          c
                        )
                      : d.render((a - d._startTime) * d._timeScale, b, c)),
                    (d = i)
              this._onUpdate &&
                (b || (g.length && h(), this._callback("onUpdate"))),
                j &&
                  (this._locked ||
                    this._gc ||
                    (q !== this._startTime && r === this._timeScale) ||
                    ((0 === this._time || m >= this.totalDuration()) &&
                      (f &&
                        (g.length && h(),
                        this._timeline.autoRemoveChildren &&
                          this._enabled(!1, !1),
                        (this._active = !1)),
                      !b && this.vars[j] && this._callback(j))))
            }),
            (j.getActive = function (a, b, c) {
              null == a && (a = !0),
                null == b && (b = !0),
                null == c && (c = !1)
              var d,
                e,
                f = [],
                g = this.getChildren(a, b, c),
                h = 0,
                i = g.length
              for (d = 0; d < i; d++) (e = g[d]), e.isActive() && (f[h++] = e)
              return f
            }),
            (j.getLabelAfter = function (a) {
              a || (0 !== a && (a = this._time))
              var b,
                c = this.getLabelsArray(),
                d = c.length
              for (b = 0; b < d; b++) if (c[b].time > a) return c[b].name
              return null
            }),
            (j.getLabelBefore = function (a) {
              null == a && (a = this._time)
              for (var b = this.getLabelsArray(), c = b.length; --c > -1; )
                if (b[c].time < a) return b[c].name
              return null
            }),
            (j.getLabelsArray = function () {
              var a,
                b = [],
                c = 0
              for (a in this._labels)
                b[c++] = { time: this._labels[a], name: a }
              return (
                b.sort(function (a, b) {
                  return a.time - b.time
                }),
                b
              )
            }),
            (j.progress = function (a, b) {
              return arguments.length
                ? this.totalTime(
                    this.duration() *
                      (this._yoyo && 0 != (1 & this._cycle) ? 1 - a : a) +
                      this._cycle * (this._duration + this._repeatDelay),
                    b
                  )
                : this._time / this.duration()
            }),
            (j.totalProgress = function (a, b) {
              return arguments.length
                ? this.totalTime(this.totalDuration() * a, b)
                : this._totalTime / this.totalDuration()
            }),
            (j.totalDuration = function (b) {
              return arguments.length
                ? -1 === this._repeat
                  ? this
                  : this.duration(
                      (b - this._repeat * this._repeatDelay) /
                        (this._repeat + 1)
                    )
                : (this._dirty &&
                    (a.prototype.totalDuration.call(this),
                    (this._totalDuration =
                      -1 === this._repeat
                        ? 999999999999
                        : this._duration * (this._repeat + 1) +
                          this._repeatDelay * this._repeat)),
                  this._totalDuration)
            }),
            (j.time = function (a, b) {
              return arguments.length
                ? (this._dirty && this.totalDuration(),
                  a > this._duration && (a = this._duration),
                  this._yoyo && 0 != (1 & this._cycle)
                    ? (a =
                        this._duration -
                        a +
                        this._cycle * (this._duration + this._repeatDelay))
                    : 0 !== this._repeat &&
                      (a += this._cycle * (this._duration + this._repeatDelay)),
                  this.totalTime(a, b))
                : this._time
            }),
            (j.repeat = function (a) {
              return arguments.length
                ? ((this._repeat = a), this._uncache(!0))
                : this._repeat
            }),
            (j.repeatDelay = function (a) {
              return arguments.length
                ? ((this._repeatDelay = a), this._uncache(!0))
                : this._repeatDelay
            }),
            (j.yoyo = function (a) {
              return arguments.length ? ((this._yoyo = a), this) : this._yoyo
            }),
            (j.currentLabel = function (a) {
              return arguments.length
                ? this.seek(a, !0)
                : this.getLabelBefore(this._time + 1e-8)
            }),
            d
          )
        },
        !0
      ),
      (function () {
        var a = 180 / Math.PI,
          b = [],
          c = [],
          d = [],
          e = {},
          f = _gsScope._gsDefine.globals,
          g = function (a, b, c, d) {
            ;(this.a = a),
              (this.b = b),
              (this.c = c),
              (this.d = d),
              (this.da = d - a),
              (this.ca = c - a),
              (this.ba = b - a)
          },
          h = function (a, b, c, d) {
            var e = { a: a },
              f = {},
              g = {},
              h = { c: d },
              i = (a + b) / 2,
              j = (b + c) / 2,
              k = (c + d) / 2,
              l = (i + j) / 2,
              m = (j + k) / 2,
              n = (m - l) / 8
            return (
              (e.b = i + (a - i) / 4),
              (f.b = l + n),
              (e.c = f.a = (e.b + f.b) / 2),
              (f.c = g.a = (l + m) / 2),
              (g.b = m - n),
              (h.b = k + (d - k) / 4),
              (g.c = h.a = (g.b + h.b) / 2),
              [e, f, g, h]
            )
          },
          i = function (a, e, f, g, i) {
            var j,
              k,
              l,
              m,
              n,
              o,
              p,
              q,
              r,
              s,
              t,
              u,
              v,
              w = a.length - 1,
              x = 0,
              y = a[0].a
            for (j = 0; j < w; j++)
              (n = a[x]),
                (k = n.a),
                (l = n.d),
                (m = a[x + 1].d),
                i
                  ? ((t = b[j]),
                    (u = c[j]),
                    (v = ((u + t) * e * 0.25) / (g ? 0.5 : d[j] || 0.5)),
                    (o = l - (l - k) * (g ? 0.5 * e : 0 !== t ? v / t : 0)),
                    (p = l + (m - l) * (g ? 0.5 * e : 0 !== u ? v / u : 0)),
                    (q =
                      l -
                      (o + (((p - o) * ((3 * t) / (t + u) + 0.5)) / 4 || 0))))
                  : ((o = l - (l - k) * e * 0.5),
                    (p = l + (m - l) * e * 0.5),
                    (q = l - (o + p) / 2)),
                (o += q),
                (p += q),
                (n.c = r = o),
                (n.b = 0 !== j ? y : (y = n.a + 0.6 * (n.c - n.a))),
                (n.da = l - k),
                (n.ca = r - k),
                (n.ba = y - k),
                f
                  ? ((s = h(k, y, r, l)),
                    a.splice(x, 1, s[0], s[1], s[2], s[3]),
                    (x += 4))
                  : x++,
                (y = p)
            ;(n = a[x]),
              (n.b = y),
              (n.c = y + 0.4 * (n.d - y)),
              (n.da = n.d - n.a),
              (n.ca = n.c - n.a),
              (n.ba = y - n.a),
              f &&
                ((s = h(n.a, y, n.c, n.d)),
                a.splice(x, 1, s[0], s[1], s[2], s[3]))
          },
          j = function (a, d, e, f) {
            var h,
              i,
              j,
              k,
              l,
              m,
              n = []
            if (f)
              for (a = [f].concat(a), i = a.length; --i > -1; )
                "string" == typeof (m = a[i][d]) &&
                  "=" === m.charAt(1) &&
                  (a[i][d] = f[d] + Number(m.charAt(0) + m.substr(2)))
            if ((h = a.length - 2) < 0)
              return (n[0] = new g(a[0][d], 0, 0, a[h < -1 ? 0 : 1][d])), n
            for (i = 0; i < h; i++)
              (j = a[i][d]),
                (k = a[i + 1][d]),
                (n[i] = new g(j, 0, 0, k)),
                e &&
                  ((l = a[i + 2][d]),
                  (b[i] = (b[i] || 0) + (k - j) * (k - j)),
                  (c[i] = (c[i] || 0) + (l - k) * (l - k)))
            return (n[i] = new g(a[i][d], 0, 0, a[i + 1][d])), n
          },
          k = function (a, f, g, h, k, l) {
            var m,
              n,
              o,
              p,
              q,
              r,
              s,
              t,
              u = {},
              v = [],
              w = l || a[0]
            ;(k =
              "string" == typeof k
                ? "," + k + ","
                : ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,"),
              null == f && (f = 1)
            for (n in a[0]) v.push(n)
            if (a.length > 1) {
              for (t = a[a.length - 1], s = !0, m = v.length; --m > -1; )
                if (((n = v[m]), Math.abs(w[n] - t[n]) > 0.05)) {
                  s = !1
                  break
                }
              s &&
                ((a = a.concat()),
                l && a.unshift(l),
                a.push(a[1]),
                (l = a[a.length - 3]))
            }
            for (b.length = c.length = d.length = 0, m = v.length; --m > -1; )
              (n = v[m]),
                (e[n] = -1 !== k.indexOf("," + n + ",")),
                (u[n] = j(a, n, e[n], l))
            for (m = b.length; --m > -1; )
              (b[m] = Math.sqrt(b[m])), (c[m] = Math.sqrt(c[m]))
            if (!h) {
              for (m = v.length; --m > -1; )
                if (e[n])
                  for (o = u[v[m]], r = o.length - 1, p = 0; p < r; p++)
                    (q = o[p + 1].da / c[p] + o[p].da / b[p]),
                      (d[p] = (d[p] || 0) + q * q)
              for (m = d.length; --m > -1; ) d[m] = Math.sqrt(d[m])
            }
            for (m = v.length, p = g ? 4 : 1; --m > -1; )
              (n = v[m]),
                (o = u[n]),
                i(o, f, g, h, e[n]),
                s && (o.splice(0, p), o.splice(o.length - p, p))
            return u
          },
          l = function (a, b, c) {
            b = b || "soft"
            var d,
              e,
              f,
              h,
              i,
              j,
              k,
              l,
              m,
              n,
              o,
              p = {},
              q = "cubic" === b ? 3 : 2,
              r = "soft" === b,
              s = []
            if ((r && c && (a = [c].concat(a)), null == a || a.length < q + 1))
              throw "invalid Bezier data"
            for (m in a[0]) s.push(m)
            for (j = s.length; --j > -1; ) {
              for (
                m = s[j], p[m] = i = [], n = 0, l = a.length, k = 0;
                k < l;
                k++
              )
                (d =
                  null == c
                    ? a[k][m]
                    : "string" == typeof (o = a[k][m]) && "=" === o.charAt(1)
                    ? c[m] + Number(o.charAt(0) + o.substr(2))
                    : Number(o)),
                  r && k > 1 && k < l - 1 && (i[n++] = (d + i[n - 2]) / 2),
                  (i[n++] = d)
              for (l = n - q + 1, n = 0, k = 0; k < l; k += q)
                (d = i[k]),
                  (e = i[k + 1]),
                  (f = i[k + 2]),
                  (h = 2 === q ? 0 : i[k + 3]),
                  (i[n++] = o =
                    3 === q
                      ? new g(d, e, f, h)
                      : new g(d, (2 * e + d) / 3, (2 * e + f) / 3, f))
              i.length = n
            }
            return p
          },
          m = function (a, b, c) {
            for (
              var d, e, f, g, h, i, j, k, l, m, n, o = 1 / c, p = a.length;
              --p > -1;

            )
              for (
                m = a[p],
                  f = m.a,
                  g = m.d - f,
                  h = m.c - f,
                  i = m.b - f,
                  d = e = 0,
                  k = 1;
                k <= c;
                k++
              )
                (j = o * k),
                  (l = 1 - j),
                  (d = e - (e = (j * j * g + 3 * l * (j * h + l * i)) * j)),
                  (n = p * c + k - 1),
                  (b[n] = (b[n] || 0) + d * d)
          },
          n = function (a, b) {
            b = b >> 0 || 6
            var c,
              d,
              e,
              f,
              g = [],
              h = [],
              i = 0,
              j = 0,
              k = b - 1,
              l = [],
              n = []
            for (c in a) m(a[c], g, b)
            for (e = g.length, d = 0; d < e; d++)
              (i += Math.sqrt(g[d])),
                (f = d % b),
                (n[f] = i),
                f === k &&
                  ((j += i),
                  (f = (d / b) >> 0),
                  (l[f] = n),
                  (h[f] = j),
                  (i = 0),
                  (n = []))
            return { length: j, lengths: h, segments: l }
          },
          o = _gsScope._gsDefine.plugin({
            propName: "bezier",
            priority: -1,
            version: "1.3.4",
            API: 2,
            global: !0,
            init: function (a, b, c) {
              ;(this._target = a),
                b instanceof Array && (b = { values: b }),
                (this._func = {}),
                (this._round = {}),
                (this._props = []),
                (this._timeRes =
                  null == b.timeResolution ? 6 : parseInt(b.timeResolution, 10))
              var d,
                e,
                f,
                g,
                h,
                i = b.values || [],
                j = {},
                m = i[0],
                o = b.autoRotate || c.vars.orientToBezier
              this._autoRotate = o
                ? o instanceof Array
                  ? o
                  : [["x", "y", "rotation", !0 === o ? 0 : Number(o) || 0]]
                : null
              for (d in m) this._props.push(d)
              for (f = this._props.length; --f > -1; )
                (d = this._props[f]),
                  this._overwriteProps.push(d),
                  (e = this._func[d] = "function" == typeof a[d]),
                  (j[d] = e
                    ? a[
                        d.indexOf("set") ||
                        "function" != typeof a["get" + d.substr(3)]
                          ? d
                          : "get" + d.substr(3)
                      ]()
                    : parseFloat(a[d])),
                  h || (j[d] !== i[0][d] && (h = j))
              if (
                ((this._beziers =
                  "cubic" !== b.type &&
                  "quadratic" !== b.type &&
                  "soft" !== b.type
                    ? k(
                        i,
                        isNaN(b.curviness) ? 1 : b.curviness,
                        !1,
                        "thruBasic" === b.type,
                        b.correlate,
                        h
                      )
                    : l(i, b.type, j)),
                (this._segCount = this._beziers[d].length),
                this._timeRes)
              ) {
                var p = n(this._beziers, this._timeRes)
                ;(this._length = p.length),
                  (this._lengths = p.lengths),
                  (this._segments = p.segments),
                  (this._l1 = this._li = this._s1 = this._si = 0),
                  (this._l2 = this._lengths[0]),
                  (this._curSeg = this._segments[0]),
                  (this._s2 = this._curSeg[0]),
                  (this._prec = 1 / this._curSeg.length)
              }
              if ((o = this._autoRotate))
                for (
                  this._initialRotations = [],
                    o[0] instanceof Array || (this._autoRotate = o = [o]),
                    f = o.length;
                  --f > -1;

                ) {
                  for (g = 0; g < 3; g++)
                    (d = o[f][g]),
                      (this._func[d] =
                        "function" == typeof a[d] &&
                        a[
                          d.indexOf("set") ||
                          "function" != typeof a["get" + d.substr(3)]
                            ? d
                            : "get" + d.substr(3)
                        ])
                  ;(d = o[f][2]),
                    (this._initialRotations[f] = this._func[d]
                      ? this._func[d].call(this._target)
                      : this._target[d])
                }
              return (this._startRatio = c.vars.runBackwards ? 1 : 0), !0
            },
            set: function (b) {
              var c,
                d,
                e,
                f,
                g,
                h,
                i,
                j,
                k,
                l,
                m = this._segCount,
                n = this._func,
                o = this._target,
                p = b !== this._startRatio
              if (this._timeRes) {
                if (
                  ((k = this._lengths),
                  (l = this._curSeg),
                  (b *= this._length),
                  (e = this._li),
                  b > this._l2 && e < m - 1)
                ) {
                  for (j = m - 1; e < j && (this._l2 = k[++e]) <= b; );
                  ;(this._l1 = k[e - 1]),
                    (this._li = e),
                    (this._curSeg = l = this._segments[e]),
                    (this._s2 = l[(this._s1 = this._si = 0)])
                } else if (b < this._l1 && e > 0) {
                  for (; e > 0 && (this._l1 = k[--e]) >= b; );
                  0 === e && b < this._l1 ? (this._l1 = 0) : e++,
                    (this._l2 = k[e]),
                    (this._li = e),
                    (this._curSeg = l = this._segments[e]),
                    (this._s1 = l[(this._si = l.length - 1) - 1] || 0),
                    (this._s2 = l[this._si])
                }
                if (
                  ((c = e),
                  (b -= this._l1),
                  (e = this._si),
                  b > this._s2 && e < l.length - 1)
                ) {
                  for (j = l.length - 1; e < j && (this._s2 = l[++e]) <= b; );
                  ;(this._s1 = l[e - 1]), (this._si = e)
                } else if (b < this._s1 && e > 0) {
                  for (; e > 0 && (this._s1 = l[--e]) >= b; );
                  0 === e && b < this._s1 ? (this._s1 = 0) : e++,
                    (this._s2 = l[e]),
                    (this._si = e)
                }
                h = (e + (b - this._s1) / (this._s2 - this._s1)) * this._prec
              } else
                (c = b < 0 ? 0 : b >= 1 ? m - 1 : (m * b) >> 0),
                  (h = (b - c * (1 / m)) * m)
              for (d = 1 - h, e = this._props.length; --e > -1; )
                (f = this._props[e]),
                  (g = this._beziers[f][c]),
                  (i =
                    (h * h * g.da + 3 * d * (h * g.ca + d * g.ba)) * h + g.a),
                  this._round[f] && (i = Math.round(i)),
                  n[f] ? o[f](i) : (o[f] = i)
              if (this._autoRotate) {
                var q,
                  r,
                  s,
                  t,
                  u,
                  v,
                  w,
                  x = this._autoRotate
                for (e = x.length; --e > -1; )
                  (f = x[e][2]),
                    (v = x[e][3] || 0),
                    (w = !0 === x[e][4] ? 1 : a),
                    (g = this._beziers[x[e][0]]),
                    (q = this._beziers[x[e][1]]),
                    g &&
                      q &&
                      ((g = g[c]),
                      (q = q[c]),
                      (r = g.a + (g.b - g.a) * h),
                      (t = g.b + (g.c - g.b) * h),
                      (r += (t - r) * h),
                      (t += (g.c + (g.d - g.c) * h - t) * h),
                      (s = q.a + (q.b - q.a) * h),
                      (u = q.b + (q.c - q.b) * h),
                      (s += (u - s) * h),
                      (u += (q.c + (q.d - q.c) * h - u) * h),
                      (i = p
                        ? Math.atan2(u - s, t - r) * w + v
                        : this._initialRotations[e]),
                      n[f] ? o[f](i) : (o[f] = i))
              }
            },
          }),
          p = o.prototype
        ;(o.bezierThrough = k),
          (o.cubicToQuadratic = h),
          (o._autoCSS = !0),
          (o.quadraticToCubic = function (a, b, c) {
            return new g(a, (2 * b + a) / 3, (2 * b + c) / 3, c)
          }),
          (o._cssRegister = function () {
            var a = f.CSSPlugin
            if (a) {
              var b = a._internals,
                c = b._parseToProxy,
                d = b._setPluginRatio,
                e = b.CSSPropTween
              b._registerComplexSpecialProp("bezier", {
                parser: function (a, b, f, g, h, i) {
                  b instanceof Array && (b = { values: b }), (i = new o())
                  var j,
                    k,
                    l,
                    m = b.values,
                    n = m.length - 1,
                    p = [],
                    q = {}
                  if (n < 0) return h
                  for (j = 0; j <= n; j++)
                    (l = c(a, m[j], g, h, i, n !== j)), (p[j] = l.end)
                  for (k in b) q[k] = b[k]
                  return (
                    (q.values = p),
                    (h = new e(a, "bezier", 0, 0, l.pt, 2)),
                    (h.data = l),
                    (h.plugin = i),
                    (h.setRatio = d),
                    0 === q.autoRotate && (q.autoRotate = !0),
                    !q.autoRotate ||
                      q.autoRotate instanceof Array ||
                      ((j = !0 === q.autoRotate ? 0 : Number(q.autoRotate)),
                      (q.autoRotate =
                        null != l.end.left
                          ? [["left", "top", "rotation", j, !1]]
                          : null != l.end.x && [
                              ["x", "y", "rotation", j, !1],
                            ])),
                    q.autoRotate &&
                      (g._transform || g._enableTransforms(!1),
                      (l.autoRotate = g._target._gsTransform)),
                    i._onInitTween(l.proxy, q, g._tween),
                    h
                  )
                },
              })
            }
          }),
          (p._roundProps = function (a, b) {
            for (var c = this._overwriteProps, d = c.length; --d > -1; )
              (a[c[d]] || a.bezier || a.bezierThrough) &&
                (this._round[c[d]] = b)
          }),
          (p._kill = function (a) {
            var b,
              c,
              d = this._props
            for (b in this._beziers)
              if (b in a)
                for (
                  delete this._beziers[b], delete this._func[b], c = d.length;
                  --c > -1;

                )
                  d[c] === b && d.splice(c, 1)
            return this._super._kill.call(this, a)
          })
      })(),
      _gsScope._gsDefine(
        "plugins.CSSPlugin",
        ["plugins.TweenPlugin", "TweenLite"],
        function (a, b) {
          var c,
            d,
            e,
            f,
            g = function () {
              a.call(this, "css"),
                (this._overwriteProps.length = 0),
                (this.setRatio = g.prototype.setRatio)
            },
            h = _gsScope._gsDefine.globals,
            i = {},
            j = (g.prototype = new a("css"))
          ;(j.constructor = g),
            (g.version = "1.17.0"),
            (g.API = 2),
            (g.defaultTransformPerspective = 0),
            (g.defaultSkewType = "compensated"),
            (g.defaultSmoothOrigin = !0),
            (j = "px"),
            (g.suffixMap = {
              top: j,
              right: j,
              bottom: j,
              left: j,
              width: j,
              height: j,
              fontSize: j,
              padding: j,
              margin: j,
              perspective: j,
              lineHeight: "",
            })
          var k,
            l,
            m,
            n,
            o,
            p,
            q = /(?:\d|\-\d|\.\d|\-\.\d)+/g,
            r = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
            s = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
            t = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,
            u = /(?:\d|\-|\+|=|#|\.)*/g,
            v = /opacity *= *([^)]*)/i,
            w = /opacity:([^;]*)/i,
            x = /^(rgb|hsl)/,
            y = /([A-Z])/g,
            z = /-([a-z])/gi,
            A = function (a, b) {
              return b.toUpperCase()
            },
            B = /(?:Left|Right|Width)/i,
            C = /,(?=[^\)]*(?:\(|$))/gi,
            D = Math.PI / 180,
            E = 180 / Math.PI,
            F = {},
            G = document,
            H = function (a) {
              return G.createElementNS
                ? G.createElementNS("http://www.w3.org/1999/xhtml", a)
                : G.createElement(a)
            },
            I = H("div"),
            J = H("img"),
            K = (g._internals = { _specialProps: i }),
            L = navigator.userAgent,
            M = (function () {
              var a = L.indexOf("Android"),
                b = H("a")
              return (
                (m =
                  -1 !== L.indexOf("Safari") &&
                  -1 === L.indexOf("Chrome") &&
                  (-1 === a || Number(L.substr(a + 8, 1)) > 3)),
                (o = m && Number(L.substr(L.indexOf("Version/") + 8, 1)) < 6),
                (n = -1 !== L.indexOf("Firefox")),
                (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(L) ||
                  /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(L)) &&
                  (p = parseFloat(RegExp.$1)),
                !!b &&
                  ((b.style.cssText = "top:1px;opacity:.55;"),
                  /^0.55/.test(b.style.opacity))
              )
            })(),
            N = function (a) {
              return v.test(
                "string" == typeof a
                  ? a
                  : (a.currentStyle ? a.currentStyle.filter : a.style.filter) ||
                      ""
              )
                ? parseFloat(RegExp.$1) / 100
                : 1
            },
            O = function (a) {
              window.console && console.log(a)
            },
            P = "",
            Q = "",
            R = function (a, b) {
              b = b || I
              var c,
                d,
                e = b.style
              if (void 0 !== e[a]) return a
              for (
                a = a.charAt(0).toUpperCase() + a.substr(1),
                  c = ["O", "Moz", "ms", "Ms", "Webkit"],
                  d = 5;
                --d > -1 && void 0 === e[c[d] + a];

              );
              return d >= 0
                ? ((Q = 3 === d ? "ms" : c[d]),
                  (P = "-" + Q.toLowerCase() + "-"),
                  Q + a)
                : null
            },
            S = G.defaultView ? G.defaultView.getComputedStyle : function () {},
            T = (g.getStyle = function (a, b, c, d, e) {
              var f
              return M || "opacity" !== b
                ? (!d && a.style[b]
                    ? (f = a.style[b])
                    : (c = c || S(a))
                    ? (f =
                        c[b] ||
                        c.getPropertyValue(b) ||
                        c.getPropertyValue(b.replace(y, "-$1").toLowerCase()))
                    : a.currentStyle && (f = a.currentStyle[b]),
                  null == e ||
                  (f && "none" !== f && "auto" !== f && "auto auto" !== f)
                    ? f
                    : e)
                : N(a)
            }),
            U = (K.convertToPixels = function (a, c, d, e, f) {
              if ("px" === e || !e) return d
              if ("auto" === e || !d) return 0
              var h,
                i,
                j,
                k = B.test(c),
                l = a,
                m = I.style,
                n = d < 0
              if ((n && (d = -d), "%" === e && -1 !== c.indexOf("border")))
                h = (d / 100) * (k ? a.clientWidth : a.clientHeight)
              else {
                if (
                  ((m.cssText =
                    "border:0 solid red;position:" +
                    T(a, "position") +
                    ";line-height:0;"),
                  "%" !== e && l.appendChild)
                )
                  m[k ? "borderLeftWidth" : "borderTopWidth"] = d + e
                else {
                  if (
                    ((l = a.parentNode || G.body),
                    (i = l._gsCache),
                    (j = b.ticker.frame),
                    i && k && i.time === j)
                  )
                    return (i.width * d) / 100
                  m[k ? "width" : "height"] = d + e
                }
                l.appendChild(I),
                  (h = parseFloat(I[k ? "offsetWidth" : "offsetHeight"])),
                  l.removeChild(I),
                  k &&
                    "%" === e &&
                    !1 !== g.cacheWidths &&
                    ((i = l._gsCache = l._gsCache || {}),
                    (i.time = j),
                    (i.width = (h / d) * 100)),
                  0 !== h || f || (h = U(a, c, d, e, !0))
              }
              return n ? -h : h
            }),
            V = (K.calculateOffset = function (a, b, c) {
              if ("absolute" !== T(a, "position", c)) return 0
              var d = "left" === b ? "Left" : "Top",
                e = T(a, "margin" + d, c)
              return (
                a["offset" + d] -
                (U(a, b, parseFloat(e), e.replace(u, "")) || 0)
              )
            }),
            W = function (a, b) {
              var c,
                d,
                e,
                f = {}
              if ((b = b || S(a, null)))
                if ((c = b.length))
                  for (; --c > -1; )
                    (e = b[c]),
                      (-1 !== e.indexOf("-transform") && ta !== e) ||
                        (f[e.replace(z, A)] = b.getPropertyValue(e))
                else
                  for (c in b)
                    (-1 !== c.indexOf("Transform") && sa !== c) || (f[c] = b[c])
              else if ((b = a.currentStyle || a.style))
                for (c in b)
                  "string" == typeof c &&
                    void 0 === f[c] &&
                    (f[c.replace(z, A)] = b[c])
              return (
                M || (f.opacity = N(a)),
                (d = Fa(a, b, !1)),
                (f.rotation = d.rotation),
                (f.skewX = d.skewX),
                (f.scaleX = d.scaleX),
                (f.scaleY = d.scaleY),
                (f.x = d.x),
                (f.y = d.y),
                va &&
                  ((f.z = d.z),
                  (f.rotationX = d.rotationX),
                  (f.rotationY = d.rotationY),
                  (f.scaleZ = d.scaleZ)),
                f.filters && delete f.filters,
                f
              )
            },
            X = function (a, b, c, d, e) {
              var f,
                g,
                h,
                i = {},
                j = a.style
              for (g in c)
                "cssText" !== g &&
                  "length" !== g &&
                  isNaN(g) &&
                  (b[g] !== (f = c[g]) || (e && e[g])) &&
                  -1 === g.indexOf("Origin") &&
                  (("number" != typeof f && "string" != typeof f) ||
                    ((i[g] =
                      "auto" !== f || ("left" !== g && "top" !== g)
                        ? ("" !== f && "auto" !== f && "none" !== f) ||
                          "string" != typeof b[g] ||
                          "" === b[g].replace(t, "")
                          ? f
                          : 0
                        : V(a, g)),
                    void 0 !== j[g] && (h = new ja(j, g, j[g], h))))
              if (d) for (g in d) "className" !== g && (i[g] = d[g])
              return { difs: i, firstMPT: h }
            },
            Y = { width: ["Left", "Right"], height: ["Top", "Bottom"] },
            Z = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
            $ = function (a, b, c) {
              var d = parseFloat(
                  "width" === b ? a.offsetWidth : a.offsetHeight
                ),
                e = Y[b],
                f = e.length
              for (c = c || S(a, null); --f > -1; )
                (d -= parseFloat(T(a, "padding" + e[f], c, !0)) || 0),
                  (d -= parseFloat(T(a, "border" + e[f] + "Width", c, !0)) || 0)
              return d
            },
            _ = function (a, b) {
              ;(null != a && "" !== a && "auto" !== a && "auto auto" !== a) ||
                (a = "0 0")
              var c = a.split(" "),
                d =
                  -1 !== a.indexOf("left")
                    ? "0%"
                    : -1 !== a.indexOf("right")
                    ? "100%"
                    : c[0],
                e =
                  -1 !== a.indexOf("top")
                    ? "0%"
                    : -1 !== a.indexOf("bottom")
                    ? "100%"
                    : c[1]
              return (
                null == e
                  ? (e = "center" === d ? "50%" : "0")
                  : "center" === e && (e = "50%"),
                ("center" === d ||
                  (isNaN(parseFloat(d)) && -1 === (d + "").indexOf("="))) &&
                  (d = "50%"),
                (a = d + " " + e + (c.length > 2 ? " " + c[2] : "")),
                b &&
                  ((b.oxp = -1 !== d.indexOf("%")),
                  (b.oyp = -1 !== e.indexOf("%")),
                  (b.oxr = "=" === d.charAt(1)),
                  (b.oyr = "=" === e.charAt(1)),
                  (b.ox = parseFloat(d.replace(t, ""))),
                  (b.oy = parseFloat(e.replace(t, ""))),
                  (b.v = a)),
                b || a
              )
            },
            aa = function (a, b) {
              return "string" == typeof a && "=" === a.charAt(1)
                ? parseInt(a.charAt(0) + "1", 10) * parseFloat(a.substr(2))
                : parseFloat(a) - parseFloat(b)
            },
            ba = function (a, b) {
              return null == a
                ? b
                : "string" == typeof a && "=" === a.charAt(1)
                ? parseInt(a.charAt(0) + "1", 10) * parseFloat(a.substr(2)) + b
                : parseFloat(a)
            },
            ca = function (a, b, c, d) {
              var e, f, g, h, i
              return (
                null == a
                  ? (h = b)
                  : "number" == typeof a
                  ? (h = a)
                  : ((e = 360),
                    (f = a.split("_")),
                    (i = "=" === a.charAt(1)),
                    (g =
                      (i
                        ? parseInt(a.charAt(0) + "1", 10) *
                          parseFloat(f[0].substr(2))
                        : parseFloat(f[0])) *
                        (-1 === a.indexOf("rad") ? 1 : E) -
                      (i ? 0 : b)),
                    f.length &&
                      (d && (d[c] = b + g),
                      -1 !== a.indexOf("short") &&
                        (g %= e) !== g % (e / 2) &&
                        (g = g < 0 ? g + e : g - e),
                      -1 !== a.indexOf("_cw") && g < 0
                        ? (g = ((g + 9999999999 * e) % e) - ((g / e) | 0) * e)
                        : -1 !== a.indexOf("ccw") &&
                          g > 0 &&
                          (g = ((g - 9999999999 * e) % e) - ((g / e) | 0) * e)),
                    (h = b + g)),
                h < 1e-6 && h > -1e-6 && (h = 0),
                h
              )
            },
            da = {
              aqua: [0, 255, 255],
              lime: [0, 255, 0],
              silver: [192, 192, 192],
              black: [0, 0, 0],
              maroon: [128, 0, 0],
              teal: [0, 128, 128],
              blue: [0, 0, 255],
              navy: [0, 0, 128],
              white: [255, 255, 255],
              fuchsia: [255, 0, 255],
              olive: [128, 128, 0],
              yellow: [255, 255, 0],
              orange: [255, 165, 0],
              gray: [128, 128, 128],
              purple: [128, 0, 128],
              green: [0, 128, 0],
              red: [255, 0, 0],
              pink: [255, 192, 203],
              cyan: [0, 255, 255],
              transparent: [255, 255, 255, 0],
            },
            ea = function (a, b, c) {
              return (
                (a = a < 0 ? a + 1 : a > 1 ? a - 1 : a),
                (255 *
                  (6 * a < 1
                    ? b + (c - b) * a * 6
                    : a < 0.5
                    ? c
                    : 3 * a < 2
                    ? b + (c - b) * (2 / 3 - a) * 6
                    : b) +
                  0.5) |
                  0
              )
            },
            fa = (g.parseColor = function (a) {
              var b, c, d, e, f, g
              return a && "" !== a
                ? "number" == typeof a
                  ? [a >> 16, (a >> 8) & 255, 255 & a]
                  : ("," === a.charAt(a.length - 1) &&
                      (a = a.substr(0, a.length - 1)),
                    da[a]
                      ? da[a]
                      : "#" === a.charAt(0)
                      ? (4 === a.length &&
                          ((b = a.charAt(1)),
                          (c = a.charAt(2)),
                          (d = a.charAt(3)),
                          (a = "#" + b + b + c + c + d + d)),
                        (a = parseInt(a.substr(1), 16)),
                        [a >> 16, (a >> 8) & 255, 255 & a])
                      : "hsl" === a.substr(0, 3)
                      ? ((a = a.match(q)),
                        (e = (Number(a[0]) % 360) / 360),
                        (f = Number(a[1]) / 100),
                        (g = Number(a[2]) / 100),
                        (c = g <= 0.5 ? g * (f + 1) : g + f - g * f),
                        (b = 2 * g - c),
                        a.length > 3 && (a[3] = Number(a[3])),
                        (a[0] = ea(e + 1 / 3, b, c)),
                        (a[1] = ea(e, b, c)),
                        (a[2] = ea(e - 1 / 3, b, c)),
                        a)
                      : ((a = a.match(q) || da.transparent),
                        (a[0] = Number(a[0])),
                        (a[1] = Number(a[1])),
                        (a[2] = Number(a[2])),
                        a.length > 3 && (a[3] = Number(a[3])),
                        a))
                : da.black
            }),
            ga = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#.+?\\b"
          for (j in da) ga += "|" + j + "\\b"
          ga = new RegExp(ga + ")", "gi")
          var ha = function (a, b, c, d) {
              if (null == a)
                return function (a) {
                  return a
                }
              var e,
                f = b ? (a.match(ga) || [""])[0] : "",
                g = a.split(f).join("").match(s) || [],
                h = a.substr(0, a.indexOf(g[0])),
                i = ")" === a.charAt(a.length - 1) ? ")" : "",
                j = -1 !== a.indexOf(" ") ? " " : ",",
                k = g.length,
                l = k > 0 ? g[0].replace(q, "") : ""
              return k
                ? (e = b
                    ? function (a) {
                        var b, m, n, o
                        if ("number" == typeof a) a += l
                        else if (d && C.test(a)) {
                          for (
                            o = a.replace(C, "|").split("|"), n = 0;
                            n < o.length;
                            n++
                          )
                            o[n] = e(o[n])
                          return o.join(",")
                        }
                        if (
                          ((b = (a.match(ga) || [f])[0]),
                          (m = a.split(b).join("").match(s) || []),
                          (n = m.length),
                          k > n--)
                        )
                          for (; ++n < k; )
                            m[n] = c ? m[((n - 1) / 2) | 0] : g[n]
                        return (
                          h +
                          m.join(j) +
                          j +
                          b +
                          i +
                          (-1 !== a.indexOf("inset") ? " inset" : "")
                        )
                      }
                    : function (a) {
                        var b, f, m
                        if ("number" == typeof a) a += l
                        else if (d && C.test(a)) {
                          for (
                            f = a.replace(C, "|").split("|"), m = 0;
                            m < f.length;
                            m++
                          )
                            f[m] = e(f[m])
                          return f.join(",")
                        }
                        if (((b = a.match(s) || []), (m = b.length), k > m--))
                          for (; ++m < k; )
                            b[m] = c ? b[((m - 1) / 2) | 0] : g[m]
                        return h + b.join(j) + i
                      })
                : function (a) {
                    return a
                  }
            },
            ia = function (a) {
              return (
                (a = a.split(",")),
                function (b, c, d, e, f, g, h) {
                  var i,
                    j = (c + "").split(" ")
                  for (h = {}, i = 0; i < 4; i++)
                    h[a[i]] = j[i] = j[i] || j[((i - 1) / 2) >> 0]
                  return e.parse(b, h, f, g)
                }
              )
            },
            ja =
              ((K._setPluginRatio = function (a) {
                this.plugin.setRatio(a)
                for (
                  var b, c, d, e, f = this.data, g = f.proxy, h = f.firstMPT;
                  h;

                )
                  (b = g[h.v]),
                    h.r
                      ? (b = Math.round(b))
                      : b < 1e-6 && b > -1e-6 && (b = 0),
                    (h.t[h.p] = b),
                    (h = h._next)
                if (
                  (f.autoRotate && (f.autoRotate.rotation = g.rotation),
                  1 === a)
                )
                  for (h = f.firstMPT; h; ) {
                    if (((c = h.t), c.type)) {
                      if (1 === c.type) {
                        for (e = c.xs0 + c.s + c.xs1, d = 1; d < c.l; d++)
                          e += c["xn" + d] + c["xs" + (d + 1)]
                        c.e = e
                      }
                    } else c.e = c.s + c.xs0
                    h = h._next
                  }
              }),
              function (a, b, c, d, e) {
                ;(this.t = a),
                  (this.p = b),
                  (this.v = c),
                  (this.r = e),
                  d && ((d._prev = this), (this._next = d))
              }),
            ka =
              ((K._parseToProxy = function (a, b, c, d, e, f) {
                var g,
                  h,
                  i,
                  j,
                  k,
                  l = d,
                  m = {},
                  n = {},
                  o = c._transform,
                  p = F
                for (
                  c._transform = null,
                    F = b,
                    d = k = c.parse(a, b, d, e),
                    F = p,
                    f &&
                      ((c._transform = o),
                      l &&
                        ((l._prev = null), l._prev && (l._prev._next = null)));
                  d && d !== l;

                ) {
                  if (
                    d.type <= 1 &&
                    ((h = d.p),
                    (n[h] = d.s + d.c),
                    (m[h] = d.s),
                    f || ((j = new ja(d, "s", h, j, d.r)), (d.c = 0)),
                    1 === d.type)
                  )
                    for (g = d.l; --g > 0; )
                      (i = "xn" + g),
                        (h = d.p + "_" + i),
                        (n[h] = d.data[i]),
                        (m[h] = d[i]),
                        f || (j = new ja(d, i, h, j, d.rxp[i]))
                  d = d._next
                }
                return { proxy: m, end: n, firstMPT: j, pt: k }
              }),
              (K.CSSPropTween = function (a, b, d, e, g, h, i, j, k, l, m) {
                ;(this.t = a),
                  (this.p = b),
                  (this.s = d),
                  (this.c = e),
                  (this.n = i || b),
                  a instanceof ka || f.push(this.n),
                  (this.r = j),
                  (this.type = h || 0),
                  k && ((this.pr = k), (c = !0)),
                  (this.b = void 0 === l ? d : l),
                  (this.e = void 0 === m ? d + e : m),
                  g && ((this._next = g), (g._prev = this))
              })),
            la = function (a, b, c, d, e, f) {
              var g = new ka(a, b, c, d - c, e, -1, f)
              return (g.b = c), (g.e = g.xs0 = d), g
            },
            ma = (g.parseComplex = function (a, b, c, d, e, f, g, h, i, j) {
              ;(c = c || f || ""),
                (g = new ka(a, b, 0, 0, g, j ? 2 : 1, null, !1, h, c, d)),
                (d += "")
              var l,
                m,
                n,
                o,
                p,
                s,
                t,
                u,
                v,
                w,
                y,
                z,
                A = c.split(", ").join(",").split(" "),
                B = d.split(", ").join(",").split(" "),
                D = A.length,
                E = !1 !== k
              for (
                (-1 === d.indexOf(",") && -1 === c.indexOf(",")) ||
                  ((A = A.join(" ").replace(C, ", ").split(" ")),
                  (B = B.join(" ").replace(C, ", ").split(" ")),
                  (D = A.length)),
                  D !== B.length &&
                    ((A = (f || "").split(" ")), (D = A.length)),
                  g.plugin = i,
                  g.setRatio = j,
                  l = 0;
                l < D;
                l++
              )
                if (((o = A[l]), (p = B[l]), (u = parseFloat(o)) || 0 === u))
                  g.appendXtra(
                    "",
                    u,
                    aa(p, u),
                    p.replace(r, ""),
                    E && -1 !== p.indexOf("px"),
                    !0
                  )
                else if (e && ("#" === o.charAt(0) || da[o] || x.test(o)))
                  (z = "," === p.charAt(p.length - 1) ? ")," : ")"),
                    (o = fa(o)),
                    (p = fa(p)),
                    (v = o.length + p.length > 6),
                    v && !M && 0 === p[3]
                      ? ((g["xs" + g.l] += g.l
                          ? " transparent"
                          : "transparent"),
                        (g.e = g.e.split(B[l]).join("transparent")))
                      : (M || (v = !1),
                        g
                          .appendXtra(
                            v ? "rgba(" : "rgb(",
                            o[0],
                            p[0] - o[0],
                            ",",
                            !0,
                            !0
                          )
                          .appendXtra("", o[1], p[1] - o[1], ",", !0)
                          .appendXtra("", o[2], p[2] - o[2], v ? "," : z, !0),
                        v &&
                          ((o = o.length < 4 ? 1 : o[3]),
                          g.appendXtra(
                            "",
                            o,
                            (p.length < 4 ? 1 : p[3]) - o,
                            z,
                            !1
                          )))
                else if ((s = o.match(q))) {
                  if (!(t = p.match(r)) || t.length !== s.length) return g
                  for (n = 0, m = 0; m < s.length; m++)
                    (y = s[m]),
                      (w = o.indexOf(y, n)),
                      g.appendXtra(
                        o.substr(n, w - n),
                        Number(y),
                        aa(t[m], y),
                        "",
                        E && "px" === o.substr(w + y.length, 2),
                        0 === m
                      ),
                      (n = w + y.length)
                  g["xs" + g.l] += o.substr(n)
                } else g["xs" + g.l] += g.l ? " " + o : o
              if (-1 !== d.indexOf("=") && g.data) {
                for (z = g.xs0 + g.data.s, l = 1; l < g.l; l++)
                  z += g["xs" + l] + g.data["xn" + l]
                g.e = z + g["xs" + l]
              }
              return g.l || ((g.type = -1), (g.xs0 = g.e)), g.xfirst || g
            }),
            na = 9
          for (j = ka.prototype, j.l = j.pr = 0; --na > 0; )
            (j["xn" + na] = 0), (j["xs" + na] = "")
          ;(j.xs0 = ""),
            (j._next = j._prev = j.xfirst = j.data = j.plugin = j.setRatio = j.rxp = null),
            (j.appendXtra = function (a, b, c, d, e, f) {
              var g = this,
                h = g.l
              return (
                (g["xs" + h] += f && h ? " " + a : a || ""),
                c || 0 === h || g.plugin
                  ? (g.l++,
                    (g.type = g.setRatio ? 2 : 1),
                    (g["xs" + g.l] = d || ""),
                    h > 0
                      ? ((g.data["xn" + h] = b + c),
                        (g.rxp["xn" + h] = e),
                        (g["xn" + h] = b),
                        g.plugin ||
                          ((g.xfirst = new ka(
                            g,
                            "xn" + h,
                            b,
                            c,
                            g.xfirst || g,
                            0,
                            g.n,
                            e,
                            g.pr
                          )),
                          (g.xfirst.xs0 = 0)),
                        g)
                      : ((g.data = { s: b + c }),
                        (g.rxp = {}),
                        (g.s = b),
                        (g.c = c),
                        (g.r = e),
                        g))
                  : ((g["xs" + h] += b + (d || "")), g)
              )
            })
          var oa = function (a, b) {
              ;(b = b || {}),
                (this.p = b.prefix ? R(a) || a : a),
                (i[a] = i[this.p] = this),
                (this.format =
                  b.formatter ||
                  ha(b.defaultValue, b.color, b.collapsible, b.multi)),
                b.parser && (this.parse = b.parser),
                (this.clrs = b.color),
                (this.multi = b.multi),
                (this.keyword = b.keyword),
                (this.dflt = b.defaultValue),
                (this.pr = b.priority || 0)
            },
            pa = (K._registerComplexSpecialProp = function (a, b, c) {
              "object" != typeof b && (b = { parser: c })
              var d,
                e = a.split(","),
                f = b.defaultValue
              for (c = c || [f], d = 0; d < e.length; d++)
                (b.prefix = 0 === d && b.prefix),
                  (b.defaultValue = c[d] || f),
                  new oa(e[d], b)
            })
          ;(j = oa.prototype),
            (j.parseComplex = function (a, b, c, d, e, f) {
              var g,
                h,
                i,
                j,
                k,
                l,
                m = this.keyword
              if (
                (this.multi &&
                  (C.test(c) || C.test(b)
                    ? ((h = b.replace(C, "|").split("|")),
                      (i = c.replace(C, "|").split("|")))
                    : m && ((h = [b]), (i = [c]))),
                i)
              ) {
                for (
                  j = i.length > h.length ? i.length : h.length, g = 0;
                  g < j;
                  g++
                )
                  (b = h[g] = h[g] || this.dflt),
                    (c = i[g] = i[g] || this.dflt),
                    m &&
                      ((k = b.indexOf(m)),
                      (l = c.indexOf(m)),
                      k !== l &&
                        (-1 === l
                          ? (h[g] = h[g].split(m).join(""))
                          : -1 === k && (h[g] += " " + m)))
                ;(b = h.join(", ")), (c = i.join(", "))
              }
              return ma(a, this.p, b, c, this.clrs, this.dflt, d, this.pr, e, f)
            }),
            (j.parse = function (a, b, c, d, f, g, h) {
              return this.parseComplex(
                a.style,
                this.format(T(a, this.p, e, !1, this.dflt)),
                this.format(b),
                f,
                g
              )
            }),
            (g.registerSpecialProp = function (a, b, c) {
              pa(a, {
                parser: function (a, d, e, f, g, h, i) {
                  var j = new ka(a, e, 0, 0, g, 2, e, !1, c)
                  return (j.plugin = h), (j.setRatio = b(a, d, f._tween, e)), j
                },
                priority: c,
              })
            }),
            (g.useSVGTransformAttr = m || n)
          var qa,
            ra = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(
              ","
            ),
            sa = R("transform"),
            ta = P + "transform",
            ua = R("transformOrigin"),
            va = null !== R("perspective"),
            wa = (K.Transform = function () {
              ;(this.perspective =
                parseFloat(g.defaultTransformPerspective) || 0),
                (this.force3D =
                  !(!1 === g.defaultForce3D || !va) &&
                  (g.defaultForce3D || "auto"))
            }),
            xa = window.SVGElement,
            ya = function (a, b, c) {
              var d,
                e = G.createElementNS("http://www.w3.org/2000/svg", a)
              for (d in c)
                e.setAttributeNS(
                  null,
                  d.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(),
                  c[d]
                )
              return b.appendChild(e), e
            },
            za = G.documentElement,
            Aa = (function () {
              var a,
                b,
                c,
                d = p || (/Android/i.test(L) && !window.chrome)
              return (
                G.createElementNS &&
                  !d &&
                  ((a = ya("svg", za)),
                  (b = ya("rect", a, { width: 100, height: 50, x: 100 })),
                  (c = b.getBoundingClientRect().width),
                  (b.style[ua] = "50% 50%"),
                  (b.style[sa] = "scaleX(0.5)"),
                  (d = c === b.getBoundingClientRect().width && !(n && va)),
                  za.removeChild(a)),
                d
              )
            })(),
            Ba = function (a, b, c, d, e) {
              var f,
                h,
                i,
                j,
                k,
                l,
                m,
                n,
                o,
                p,
                q,
                r,
                s,
                t,
                u = a._gsTransform,
                v = Ea(a, !0)
              u && ((s = u.xOrigin), (t = u.yOrigin)),
                (!d || (f = d.split(" ")).length < 2) &&
                  ((m = a.getBBox()),
                  (b = _(b).split(" ")),
                  (f = [
                    (-1 !== b[0].indexOf("%")
                      ? (parseFloat(b[0]) / 100) * m.width
                      : parseFloat(b[0])) + m.x,
                    (-1 !== b[1].indexOf("%")
                      ? (parseFloat(b[1]) / 100) * m.height
                      : parseFloat(b[1])) + m.y,
                  ])),
                (c.xOrigin = j = parseFloat(f[0])),
                (c.yOrigin = k = parseFloat(f[1])),
                d &&
                  v !== Da &&
                  ((l = v[0]),
                  (m = v[1]),
                  (n = v[2]),
                  (o = v[3]),
                  (p = v[4]),
                  (q = v[5]),
                  (r = l * o - m * n),
                  (h = j * (o / r) + k * (-n / r) + (n * q - o * p) / r),
                  (i = j * (-m / r) + k * (l / r) - (l * q - m * p) / r),
                  (j = c.xOrigin = f[0] = h),
                  (k = c.yOrigin = f[1] = i)),
                u &&
                  (e || (!1 !== e && !1 !== g.defaultSmoothOrigin)
                    ? ((h = j - s),
                      (i = k - t),
                      (u.xOffset += h * v[0] + i * v[2] - h),
                      (u.yOffset += h * v[1] + i * v[3] - i))
                    : (u.xOffset = u.yOffset = 0)),
                a.setAttribute("data-svg-origin", f.join(" "))
            },
            Ca = function (a) {
              return !!(
                xa &&
                "function" == typeof a.getBBox &&
                a.getCTM &&
                (!a.parentNode || (a.parentNode.getBBox && a.parentNode.getCTM))
              )
            },
            Da = [1, 0, 0, 1, 0, 0],
            Ea = function (a, b) {
              var c,
                d,
                e,
                f,
                g,
                h = a._gsTransform || new wa()
              if (
                (sa
                  ? (d = T(a, ta, null, !0))
                  : a.currentStyle &&
                    ((d = a.currentStyle.filter.match(
                      /(M11|M12|M21|M22)=[\d\-\.e]+/gi
                    )),
                    (d =
                      d && 4 === d.length
                        ? [
                            d[0].substr(4),
                            Number(d[2].substr(4)),
                            Number(d[1].substr(4)),
                            d[3].substr(4),
                            h.x || 0,
                            h.y || 0,
                          ].join(",")
                        : "")),
                (c = !d || "none" === d || "matrix(1, 0, 0, 1, 0, 0)" === d),
                (h.svg || (a.getBBox && Ca(a))) &&
                  (c &&
                    -1 !== (a.style[sa] + "").indexOf("matrix") &&
                    ((d = a.style[sa]), (c = 0)),
                  (e = a.getAttribute("transform")),
                  c &&
                    e &&
                    (-1 !== e.indexOf("matrix")
                      ? ((d = e), (c = 0))
                      : -1 !== e.indexOf("translate") &&
                        ((d =
                          "matrix(1,0,0,1," +
                          e.match(/(?:\-|\b)[\d\-\.e]+\b/gi).join(",") +
                          ")"),
                        (c = 0)))),
                c)
              )
                return Da
              for (
                e = (d || "").match(/(?:\-|\b)[\d\-\.e]+\b/gi) || [],
                  na = e.length;
                --na > -1;

              )
                (f = Number(e[na])),
                  (e[na] = (g = f - (f |= 0))
                    ? ((1e5 * g + (g < 0 ? -0.5 : 0.5)) | 0) / 1e5 + f
                    : f)
              return b && e.length > 6
                ? [e[0], e[1], e[4], e[5], e[12], e[13]]
                : e
            },
            Fa = (K.getTransform = function (a, c, d, f) {
              if (a._gsTransform && d && !f) return a._gsTransform
              var h,
                i,
                j,
                k,
                l,
                m,
                n = d ? a._gsTransform || new wa() : new wa(),
                o = n.scaleX < 0,
                p = 1e5,
                q = va
                  ? parseFloat(T(a, ua, c, !1, "0 0 0").split(" ")[2]) ||
                    n.zOrigin ||
                    0
                  : 0,
                r = parseFloat(g.defaultTransformPerspective) || 0
              if (
                ((n.svg = !(!a.getBBox || !Ca(a))),
                n.svg &&
                  (Ba(
                    a,
                    T(a, ua, e, !1, "50% 50%") + "",
                    n,
                    a.getAttribute("data-svg-origin")
                  ),
                  (qa = g.useSVGTransformAttr || Aa)),
                (h = Ea(a)) !== Da)
              ) {
                if (16 === h.length) {
                  var s,
                    t,
                    u,
                    v,
                    w,
                    x = h[0],
                    y = h[1],
                    z = h[2],
                    A = h[3],
                    B = h[4],
                    C = h[5],
                    D = h[6],
                    F = h[7],
                    G = h[8],
                    H = h[9],
                    I = h[10],
                    J = h[12],
                    K = h[13],
                    L = h[14],
                    M = h[11],
                    N = Math.atan2(D, I)
                  n.zOrigin &&
                    ((L = -n.zOrigin),
                    (J = G * L - h[12]),
                    (K = H * L - h[13]),
                    (L = I * L + n.zOrigin - h[14])),
                    (n.rotationX = N * E),
                    N &&
                      ((v = Math.cos(-N)),
                      (w = Math.sin(-N)),
                      (s = B * v + G * w),
                      (t = C * v + H * w),
                      (u = D * v + I * w),
                      (G = B * -w + G * v),
                      (H = C * -w + H * v),
                      (I = D * -w + I * v),
                      (M = F * -w + M * v),
                      (B = s),
                      (C = t),
                      (D = u)),
                    (N = Math.atan2(G, I)),
                    (n.rotationY = N * E),
                    N &&
                      ((v = Math.cos(-N)),
                      (w = Math.sin(-N)),
                      (s = x * v - G * w),
                      (t = y * v - H * w),
                      (u = z * v - I * w),
                      (H = y * w + H * v),
                      (I = z * w + I * v),
                      (M = A * w + M * v),
                      (x = s),
                      (y = t),
                      (z = u)),
                    (N = Math.atan2(y, x)),
                    (n.rotation = N * E),
                    N &&
                      ((v = Math.cos(-N)),
                      (w = Math.sin(-N)),
                      (x = x * v + B * w),
                      (t = y * v + C * w),
                      (C = y * -w + C * v),
                      (D = z * -w + D * v),
                      (y = t)),
                    n.rotationX &&
                      Math.abs(n.rotationX) + Math.abs(n.rotation) > 359.9 &&
                      ((n.rotationX = n.rotation = 0), (n.rotationY += 180)),
                    (n.scaleX = ((Math.sqrt(x * x + y * y) * p + 0.5) | 0) / p),
                    (n.scaleY = ((Math.sqrt(C * C + H * H) * p + 0.5) | 0) / p),
                    (n.scaleZ = ((Math.sqrt(D * D + I * I) * p + 0.5) | 0) / p),
                    (n.skewX = 0),
                    (n.perspective = M ? 1 / (M < 0 ? -M : M) : 0),
                    (n.x = J),
                    (n.y = K),
                    (n.z = L),
                    n.svg &&
                      ((n.x -= n.xOrigin - (n.xOrigin * x - n.yOrigin * B)),
                      (n.y -= n.yOrigin - (n.yOrigin * y - n.xOrigin * C)))
                } else if (
                  (!va ||
                    f ||
                    !h.length ||
                    n.x !== h[4] ||
                    n.y !== h[5] ||
                    (!n.rotationX && !n.rotationY)) &&
                  (void 0 === n.x || "none" !== T(a, "display", c))
                ) {
                  var O = h.length >= 6,
                    P = O ? h[0] : 1,
                    Q = h[1] || 0,
                    R = h[2] || 0,
                    S = O ? h[3] : 1
                  ;(n.x = h[4] || 0),
                    (n.y = h[5] || 0),
                    (j = Math.sqrt(P * P + Q * Q)),
                    (k = Math.sqrt(S * S + R * R)),
                    (l = P || Q ? Math.atan2(Q, P) * E : n.rotation || 0),
                    (m = R || S ? Math.atan2(R, S) * E + l : n.skewX || 0),
                    Math.abs(m) > 90 &&
                      Math.abs(m) < 270 &&
                      (o
                        ? ((j *= -1),
                          (m += l <= 0 ? 180 : -180),
                          (l += l <= 0 ? 180 : -180))
                        : ((k *= -1), (m += m <= 0 ? 180 : -180))),
                    (n.scaleX = j),
                    (n.scaleY = k),
                    (n.rotation = l),
                    (n.skewX = m),
                    va &&
                      ((n.rotationX = n.rotationY = n.z = 0),
                      (n.perspective = r),
                      (n.scaleZ = 1)),
                    n.svg &&
                      ((n.x -= n.xOrigin - (n.xOrigin * P + n.yOrigin * R)),
                      (n.y -= n.yOrigin - (n.xOrigin * Q + n.yOrigin * S)))
                }
                n.zOrigin = q
                for (i in n) n[i] < 2e-5 && n[i] > -2e-5 && (n[i] = 0)
              }
              return (
                d &&
                  ((a._gsTransform = n),
                  n.svg &&
                    (qa && a.style[sa]
                      ? b.delayedCall(0.001, function () {
                          Ja(a.style, sa)
                        })
                      : !qa &&
                        a.getAttribute("transform") &&
                        b.delayedCall(0.001, function () {
                          a.removeAttribute("transform")
                        }))),
                n
              )
            }),
            Ga = function (a) {
              var b,
                c,
                d = this.data,
                e = -d.rotation * D,
                f = e + d.skewX * D,
                g = 1e5,
                h = ((Math.cos(e) * d.scaleX * g) | 0) / g,
                i = ((Math.sin(e) * d.scaleX * g) | 0) / g,
                j = ((Math.sin(f) * -d.scaleY * g) | 0) / g,
                k = ((Math.cos(f) * d.scaleY * g) | 0) / g,
                l = this.t.style,
                m = this.t.currentStyle
              if (m) {
                ;(c = i), (i = -j), (j = -c), (b = m.filter), (l.filter = "")
                var n,
                  o,
                  q = this.t.offsetWidth,
                  r = this.t.offsetHeight,
                  s = "absolute" !== m.position,
                  t =
                    "progid:DXImageTransform.Microsoft.Matrix(M11=" +
                    h +
                    ", M12=" +
                    i +
                    ", M21=" +
                    j +
                    ", M22=" +
                    k,
                  w = d.x + (q * d.xPercent) / 100,
                  x = d.y + (r * d.yPercent) / 100
                if (
                  (null != d.ox &&
                    ((n = (d.oxp ? q * d.ox * 0.01 : d.ox) - q / 2),
                    (o = (d.oyp ? r * d.oy * 0.01 : d.oy) - r / 2),
                    (w += n - (n * h + o * i)),
                    (x += o - (n * j + o * k))),
                  s
                    ? ((n = q / 2),
                      (o = r / 2),
                      (t +=
                        ", Dx=" +
                        (n - (n * h + o * i) + w) +
                        ", Dy=" +
                        (o - (n * j + o * k) + x) +
                        ")"))
                    : (t += ", sizingMethod='auto expand')"),
                  -1 !== b.indexOf("DXImageTransform.Microsoft.Matrix(")
                    ? (l.filter = b.replace(
                        /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
                        t
                      ))
                    : (l.filter = t + " " + b),
                  (0 !== a && 1 !== a) ||
                    (1 === h &&
                      0 === i &&
                      0 === j &&
                      1 === k &&
                      ((s && -1 === t.indexOf("Dx=0, Dy=0")) ||
                        (v.test(b) && 100 !== parseFloat(RegExp.$1)) ||
                        (-1 === b.indexOf(b.indexOf("Alpha")) &&
                          l.removeAttribute("filter")))),
                  !s)
                ) {
                  var y,
                    z,
                    A,
                    B = p < 8 ? 1 : -1
                  for (
                    n = d.ieOffsetX || 0,
                      o = d.ieOffsetY || 0,
                      d.ieOffsetX = Math.round(
                        (q - ((h < 0 ? -h : h) * q + (i < 0 ? -i : i) * r)) /
                          2 +
                          w
                      ),
                      d.ieOffsetY = Math.round(
                        (r - ((k < 0 ? -k : k) * r + (j < 0 ? -j : j) * q)) /
                          2 +
                          x
                      ),
                      na = 0;
                    na < 4;
                    na++
                  )
                    (z = Z[na]),
                      (y = m[z]),
                      (c =
                        -1 !== y.indexOf("px")
                          ? parseFloat(y)
                          : U(this.t, z, parseFloat(y), y.replace(u, "")) || 0),
                      (A =
                        c !== d[z]
                          ? na < 2
                            ? -d.ieOffsetX
                            : -d.ieOffsetY
                          : na < 2
                          ? n - d.ieOffsetX
                          : o - d.ieOffsetY),
                      (l[z] =
                        (d[z] = Math.round(
                          c - A * (0 === na || 2 === na ? 1 : B)
                        )) + "px")
                }
              }
            },
            Ha = (K.set3DTransformRatio = K.setTransformRatio = function (a) {
              var b,
                c,
                d,
                e,
                f,
                g,
                h,
                i,
                j,
                k,
                l,
                m,
                o,
                p,
                q,
                r,
                s,
                t,
                u,
                v,
                w,
                x,
                y,
                z = this.data,
                A = this.t.style,
                B = z.rotation,
                C = z.rotationX,
                E = z.rotationY,
                F = z.scaleX,
                G = z.scaleY,
                H = z.scaleZ,
                I = z.x,
                J = z.y,
                K = z.z,
                L = z.svg,
                M = z.perspective,
                N = z.force3D
              if (
                ((((1 === a || 0 === a) &&
                  "auto" === N &&
                  (this.tween._totalTime === this.tween._totalDuration ||
                    !this.tween._totalTime)) ||
                  !N) &&
                  !K &&
                  !M &&
                  !E &&
                  !C) ||
                (qa && L) ||
                !va
              )
                return void (B || z.skewX || L
                  ? ((B *= D),
                    (x = z.skewX * D),
                    (y = 1e5),
                    (b = Math.cos(B) * F),
                    (e = Math.sin(B) * F),
                    (c = Math.sin(B - x) * -G),
                    (f = Math.cos(B - x) * G),
                    x &&
                      "simple" === z.skewType &&
                      ((s = Math.tan(x)),
                      (s = Math.sqrt(1 + s * s)),
                      (c *= s),
                      (f *= s),
                      z.skewY && ((b *= s), (e *= s))),
                    L &&
                      ((I +=
                        z.xOrigin -
                        (z.xOrigin * b + z.yOrigin * c) +
                        z.xOffset),
                      (J +=
                        z.yOrigin -
                        (z.xOrigin * e + z.yOrigin * f) +
                        z.yOffset),
                      qa &&
                        (z.xPercent || z.yPercent) &&
                        ((p = this.t.getBBox()),
                        (I += 0.01 * z.xPercent * p.width),
                        (J += 0.01 * z.yPercent * p.height)),
                      (p = 1e-6),
                      I < p && I > -p && (I = 0),
                      J < p && J > -p && (J = 0)),
                    (u =
                      ((b * y) | 0) / y +
                      "," +
                      ((e * y) | 0) / y +
                      "," +
                      ((c * y) | 0) / y +
                      "," +
                      ((f * y) | 0) / y +
                      "," +
                      I +
                      "," +
                      J +
                      ")"),
                    L && qa
                      ? this.t.setAttribute("transform", "matrix(" + u)
                      : (A[sa] =
                          (z.xPercent || z.yPercent
                            ? "translate(" +
                              z.xPercent +
                              "%," +
                              z.yPercent +
                              "%) matrix("
                            : "matrix(") + u))
                  : (A[sa] =
                      (z.xPercent || z.yPercent
                        ? "translate(" +
                          z.xPercent +
                          "%," +
                          z.yPercent +
                          "%) matrix("
                        : "matrix(") +
                      F +
                      ",0,0," +
                      G +
                      "," +
                      I +
                      "," +
                      J +
                      ")"))
              if (
                (n &&
                  ((p = 1e-4),
                  F < p && F > -p && (F = H = 2e-5),
                  G < p && G > -p && (G = H = 2e-5),
                  !M || z.z || z.rotationX || z.rotationY || (M = 0)),
                B || z.skewX)
              )
                (B *= D),
                  (q = b = Math.cos(B)),
                  (r = e = Math.sin(B)),
                  z.skewX &&
                    ((B -= z.skewX * D),
                    (q = Math.cos(B)),
                    (r = Math.sin(B)),
                    "simple" === z.skewType &&
                      ((s = Math.tan(z.skewX * D)),
                      (s = Math.sqrt(1 + s * s)),
                      (q *= s),
                      (r *= s),
                      z.skewY && ((b *= s), (e *= s)))),
                  (c = -r),
                  (f = q)
              else {
                if (!(E || C || 1 !== H || M || L))
                  return void (A[sa] =
                    (z.xPercent || z.yPercent
                      ? "translate(" +
                        z.xPercent +
                        "%," +
                        z.yPercent +
                        "%) translate3d("
                      : "translate3d(") +
                    I +
                    "px," +
                    J +
                    "px," +
                    K +
                    "px)" +
                    (1 !== F || 1 !== G ? " scale(" + F + "," + G + ")" : ""))
                ;(b = f = 1), (c = e = 0)
              }
              ;(j = 1),
                (d = g = h = i = k = l = 0),
                (m = M ? -1 / M : 0),
                (o = z.zOrigin),
                (p = 1e-6),
                (v = ","),
                (w = "0"),
                (B = E * D),
                B &&
                  ((q = Math.cos(B)),
                  (r = Math.sin(B)),
                  (h = -r),
                  (k = m * -r),
                  (d = b * r),
                  (g = e * r),
                  (j = q),
                  (m *= q),
                  (b *= q),
                  (e *= q)),
                (B = C * D),
                B &&
                  ((q = Math.cos(B)),
                  (r = Math.sin(B)),
                  (s = c * q + d * r),
                  (t = f * q + g * r),
                  (i = j * r),
                  (l = m * r),
                  (d = c * -r + d * q),
                  (g = f * -r + g * q),
                  (j *= q),
                  (m *= q),
                  (c = s),
                  (f = t)),
                1 !== H && ((d *= H), (g *= H), (j *= H), (m *= H)),
                1 !== G && ((c *= G), (f *= G), (i *= G), (l *= G)),
                1 !== F && ((b *= F), (e *= F), (h *= F), (k *= F)),
                (o || L) &&
                  (o && ((I += d * -o), (J += g * -o), (K += j * -o + o)),
                  L &&
                    ((I +=
                      z.xOrigin - (z.xOrigin * b + z.yOrigin * c) + z.xOffset),
                    (J +=
                      z.yOrigin - (z.xOrigin * e + z.yOrigin * f) + z.yOffset)),
                  I < p && I > -p && (I = w),
                  J < p && J > -p && (J = w),
                  K < p && K > -p && (K = 0)),
                (u =
                  z.xPercent || z.yPercent
                    ? "translate(" +
                      z.xPercent +
                      "%," +
                      z.yPercent +
                      "%) matrix3d("
                    : "matrix3d("),
                (u +=
                  (b < p && b > -p ? w : b) +
                  v +
                  (e < p && e > -p ? w : e) +
                  v +
                  (h < p && h > -p ? w : h)),
                (u +=
                  v +
                  (k < p && k > -p ? w : k) +
                  v +
                  (c < p && c > -p ? w : c) +
                  v +
                  (f < p && f > -p ? w : f)),
                C || E
                  ? ((u +=
                      v +
                      (i < p && i > -p ? w : i) +
                      v +
                      (l < p && l > -p ? w : l) +
                      v +
                      (d < p && d > -p ? w : d)),
                    (u +=
                      v +
                      (g < p && g > -p ? w : g) +
                      v +
                      (j < p && j > -p ? w : j) +
                      v +
                      (m < p && m > -p ? w : m) +
                      v))
                  : (u += ",0,0,0,0,1,0,"),
                (u += I + v + J + v + K + v + (M ? 1 + -K / M : 1) + ")"),
                (A[sa] = u)
            })
          ;(j = wa.prototype),
            (j.x = j.y = j.z = j.skewX = j.skewY = j.rotation = j.rotationX = j.rotationY = j.zOrigin = j.xPercent = j.yPercent = j.xOffset = j.yOffset = 0),
            (j.scaleX = j.scaleY = j.scaleZ = 1),
            pa(
              "transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin",
              {
                parser: function (a, b, c, d, f, h, i) {
                  if (d._lastParsedTransform === i) return f
                  d._lastParsedTransform = i
                  var j,
                    k,
                    l,
                    m,
                    n,
                    o,
                    p,
                    q,
                    r,
                    s = a._gsTransform,
                    t = (d._transform = Fa(a, e, !0, i.parseTransform)),
                    u = a.style,
                    v = ra.length,
                    w = i,
                    x = {},
                    y = "transformOrigin"
                  if ("string" == typeof w.transform && sa)
                    (l = I.style),
                      (l[sa] = w.transform),
                      (l.display = "block"),
                      (l.position = "absolute"),
                      G.body.appendChild(I),
                      (j = Fa(I, null, !1)),
                      G.body.removeChild(I),
                      null != w.xPercent &&
                        (j.xPercent = ba(w.xPercent, t.xPercent)),
                      null != w.yPercent &&
                        (j.yPercent = ba(w.yPercent, t.yPercent))
                  else if ("object" == typeof w) {
                    if (
                      ((j = {
                        scaleX: ba(
                          null != w.scaleX ? w.scaleX : w.scale,
                          t.scaleX
                        ),
                        scaleY: ba(
                          null != w.scaleY ? w.scaleY : w.scale,
                          t.scaleY
                        ),
                        scaleZ: ba(w.scaleZ, t.scaleZ),
                        x: ba(w.x, t.x),
                        y: ba(w.y, t.y),
                        z: ba(w.z, t.z),
                        xPercent: ba(w.xPercent, t.xPercent),
                        yPercent: ba(w.yPercent, t.yPercent),
                        perspective: ba(w.transformPerspective, t.perspective),
                      }),
                      null != (p = w.directionalRotation))
                    )
                      if ("object" == typeof p) for (l in p) w[l] = p[l]
                      else w.rotation = p
                    "string" == typeof w.x &&
                      -1 !== w.x.indexOf("%") &&
                      ((j.x = 0), (j.xPercent = ba(w.x, t.xPercent))),
                      "string" == typeof w.y &&
                        -1 !== w.y.indexOf("%") &&
                        ((j.y = 0), (j.yPercent = ba(w.y, t.yPercent))),
                      (j.rotation = ca(
                        "rotation" in w
                          ? w.rotation
                          : "shortRotation" in w
                          ? w.shortRotation + "_short"
                          : "rotationZ" in w
                          ? w.rotationZ
                          : t.rotation,
                        t.rotation,
                        "rotation",
                        x
                      )),
                      va &&
                        ((j.rotationX = ca(
                          "rotationX" in w
                            ? w.rotationX
                            : "shortRotationX" in w
                            ? w.shortRotationX + "_short"
                            : t.rotationX || 0,
                          t.rotationX,
                          "rotationX",
                          x
                        )),
                        (j.rotationY = ca(
                          "rotationY" in w
                            ? w.rotationY
                            : "shortRotationY" in w
                            ? w.shortRotationY + "_short"
                            : t.rotationY || 0,
                          t.rotationY,
                          "rotationY",
                          x
                        ))),
                      (j.skewX =
                        null == w.skewX ? t.skewX : ca(w.skewX, t.skewX)),
                      (j.skewY =
                        null == w.skewY ? t.skewY : ca(w.skewY, t.skewY)),
                      (k = j.skewY - t.skewY) &&
                        ((j.skewX += k), (j.rotation += k))
                  }
                  for (
                    va &&
                      null != w.force3D &&
                      ((t.force3D = w.force3D), (o = !0)),
                      t.skewType =
                        w.skewType || t.skewType || g.defaultSkewType,
                      (n =
                        t.force3D ||
                        t.z ||
                        t.rotationX ||
                        t.rotationY ||
                        j.z ||
                        j.rotationX ||
                        j.rotationY ||
                        j.perspective) ||
                        null == w.scale ||
                        (j.scaleZ = 1);
                    --v > -1;

                  )
                    (c = ra[v]),
                      ((m = j[c] - t[c]) > 1e-6 ||
                        m < -1e-6 ||
                        null != w[c] ||
                        null != F[c]) &&
                        ((o = !0),
                        (f = new ka(t, c, t[c], m, f)),
                        c in x && (f.e = x[c]),
                        (f.xs0 = 0),
                        (f.plugin = h),
                        d._overwriteProps.push(f.n))
                  return (
                    (m = w.transformOrigin),
                    t.svg &&
                      (m || w.svgOrigin) &&
                      ((q = t.xOffset),
                      (r = t.yOffset),
                      Ba(a, _(m), j, w.svgOrigin, w.smoothOrigin),
                      (f = la(
                        t,
                        "xOrigin",
                        (s ? t : j).xOrigin,
                        j.xOrigin,
                        f,
                        y
                      )),
                      (f = la(
                        t,
                        "yOrigin",
                        (s ? t : j).yOrigin,
                        j.yOrigin,
                        f,
                        y
                      )),
                      (q === t.xOffset && r === t.yOffset) ||
                        ((f = la(
                          t,
                          "xOffset",
                          s ? q : t.xOffset,
                          t.xOffset,
                          f,
                          y
                        )),
                        (f = la(
                          t,
                          "yOffset",
                          s ? r : t.yOffset,
                          t.yOffset,
                          f,
                          y
                        ))),
                      (m = qa ? null : "0px 0px")),
                    (m || (va && n && t.zOrigin)) &&
                      (sa
                        ? ((o = !0),
                          (c = ua),
                          (m = (m || T(a, c, e, !1, "50% 50%")) + ""),
                          (f = new ka(u, c, 0, 0, f, -1, y)),
                          (f.b = u[c]),
                          (f.plugin = h),
                          va
                            ? ((l = t.zOrigin),
                              (m = m.split(" ")),
                              (t.zOrigin =
                                (m.length > 2 && (0 === l || "0px" !== m[2])
                                  ? parseFloat(m[2])
                                  : l) || 0),
                              (f.xs0 = f.e =
                                m[0] + " " + (m[1] || "50%") + " 0px"),
                              (f = new ka(t, "zOrigin", 0, 0, f, -1, f.n)),
                              (f.b = l),
                              (f.xs0 = f.e = t.zOrigin))
                            : (f.xs0 = f.e = m))
                        : _(m + "", t)),
                    o &&
                      (d._transformType =
                        (t.svg && qa) || (!n && 3 !== this._transformType)
                          ? 2
                          : 3),
                    f
                  )
                },
                prefix: !0,
              }
            ),
            pa("boxShadow", {
              defaultValue: "0px 0px 0px 0px #999",
              prefix: !0,
              color: !0,
              multi: !0,
              keyword: "inset",
            }),
            pa("borderRadius", {
              defaultValue: "0px",
              parser: function (a, b, c, f, g, h) {
                b = this.format(b)
                var i,
                  j,
                  k,
                  l,
                  m,
                  n,
                  o,
                  p,
                  q,
                  r,
                  s,
                  t,
                  u,
                  v,
                  w,
                  x,
                  y = [
                    "borderTopLeftRadius",
                    "borderTopRightRadius",
                    "borderBottomRightRadius",
                    "borderBottomLeftRadius",
                  ],
                  z = a.style
                for (
                  q = parseFloat(a.offsetWidth),
                    r = parseFloat(a.offsetHeight),
                    i = b.split(" "),
                    j = 0;
                  j < y.length;
                  j++
                )
                  this.p.indexOf("border") && (y[j] = R(y[j])),
                    (m = l = T(a, y[j], e, !1, "0px")),
                    -1 !== m.indexOf(" ") &&
                      ((l = m.split(" ")), (m = l[0]), (l = l[1])),
                    (n = k = i[j]),
                    (o = parseFloat(m)),
                    (t = m.substr((o + "").length)),
                    (u = "=" === n.charAt(1)),
                    u
                      ? ((p = parseInt(n.charAt(0) + "1", 10)),
                        (n = n.substr(2)),
                        (p *= parseFloat(n)),
                        (s = n.substr((p + "").length - (p < 0 ? 1 : 0)) || ""))
                      : ((p = parseFloat(n)), (s = n.substr((p + "").length))),
                    "" === s && (s = d[c] || t),
                    s !== t &&
                      ((v = U(a, "borderLeft", o, t)),
                      (w = U(a, "borderTop", o, t)),
                      "%" === s
                        ? ((m = (v / q) * 100 + "%"), (l = (w / r) * 100 + "%"))
                        : "em" === s
                        ? ((x = U(a, "borderLeft", 1, "em")),
                          (m = v / x + "em"),
                          (l = w / x + "em"))
                        : ((m = v + "px"), (l = w + "px")),
                      u &&
                        ((n = parseFloat(m) + p + s),
                        (k = parseFloat(l) + p + s))),
                    (g = ma(z, y[j], m + " " + l, n + " " + k, !1, "0px", g))
                return g
              },
              prefix: !0,
              formatter: ha("0px 0px 0px 0px", !1, !0),
            }),
            pa("backgroundPosition", {
              defaultValue: "0 0",
              parser: function (a, b, c, d, f, g) {
                var h,
                  i,
                  j,
                  k,
                  l,
                  m,
                  n = "background-position",
                  o = e || S(a, null),
                  q = this.format(
                    (o
                      ? p
                        ? o.getPropertyValue(n + "-x") +
                          " " +
                          o.getPropertyValue(n + "-y")
                        : o.getPropertyValue(n)
                      : a.currentStyle.backgroundPositionX +
                        " " +
                        a.currentStyle.backgroundPositionY) || "0 0"
                  ),
                  r = this.format(b)
                if (
                  (-1 !== q.indexOf("%")) != (-1 !== r.indexOf("%")) &&
                  (m = T(a, "backgroundImage").replace(
                    /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
                    ""
                  )) &&
                  "none" !== m
                ) {
                  for (
                    h = q.split(" "),
                      i = r.split(" "),
                      J.setAttribute("src", m),
                      j = 2;
                    --j > -1;

                  )
                    (q = h[j]),
                      (k = -1 !== q.indexOf("%")) !==
                        (-1 !== i[j].indexOf("%")) &&
                        ((l =
                          0 === j
                            ? a.offsetWidth - J.width
                            : a.offsetHeight - J.height),
                        (h[j] = k
                          ? (parseFloat(q) / 100) * l + "px"
                          : (parseFloat(q) / l) * 100 + "%"))
                  q = h.join(" ")
                }
                return this.parseComplex(a.style, q, r, f, g)
              },
              formatter: _,
            }),
            pa("backgroundSize", { defaultValue: "0 0", formatter: _ }),
            pa("perspective", { defaultValue: "0px", prefix: !0 }),
            pa("perspectiveOrigin", { defaultValue: "50% 50%", prefix: !0 }),
            pa("transformStyle", { prefix: !0 }),
            pa("backfaceVisibility", { prefix: !0 }),
            pa("userSelect", { prefix: !0 }),
            pa("margin", {
              parser: ia("marginTop,marginRight,marginBottom,marginLeft"),
            }),
            pa("padding", {
              parser: ia("paddingTop,paddingRight,paddingBottom,paddingLeft"),
            }),
            pa("clip", {
              defaultValue: "rect(0px,0px,0px,0px)",
              parser: function (a, b, c, d, f, g) {
                var h, i, j
                return (
                  p < 9
                    ? ((i = a.currentStyle),
                      (j = p < 8 ? " " : ","),
                      (h =
                        "rect(" +
                        i.clipTop +
                        j +
                        i.clipRight +
                        j +
                        i.clipBottom +
                        j +
                        i.clipLeft +
                        ")"),
                      (b = this.format(b).split(",").join(j)))
                    : ((h = this.format(T(a, this.p, e, !1, this.dflt))),
                      (b = this.format(b))),
                  this.parseComplex(a.style, h, b, f, g)
                )
              },
            }),
            pa("textShadow", {
              defaultValue: "0px 0px 0px #999",
              color: !0,
              multi: !0,
            }),
            pa("autoRound,strictUnits", {
              parser: function (a, b, c, d, e) {
                return e
              },
            }),
            pa("border", {
              defaultValue: "0px solid #000",
              parser: function (a, b, c, d, f, g) {
                return this.parseComplex(
                  a.style,
                  this.format(
                    T(a, "borderTopWidth", e, !1, "0px") +
                      " " +
                      T(a, "borderTopStyle", e, !1, "solid") +
                      " " +
                      T(a, "borderTopColor", e, !1, "#000")
                  ),
                  this.format(b),
                  f,
                  g
                )
              },
              color: !0,
              formatter: function (a) {
                var b = a.split(" ")
                return (
                  b[0] +
                  " " +
                  (b[1] || "solid") +
                  " " +
                  (a.match(ga) || ["#000"])[0]
                )
              },
            }),
            pa("borderWidth", {
              parser: ia(
                "borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth"
              ),
            }),
            pa("float,cssFloat,styleFloat", {
              parser: function (a, b, c, d, e, f) {
                var g = a.style,
                  h = "cssFloat" in g ? "cssFloat" : "styleFloat"
                return new ka(g, h, 0, 0, e, -1, c, !1, 0, g[h], b)
              },
            })
          var Ia = function (a) {
            var b,
              c = this.t,
              d = c.filter || T(this.data, "filter") || "",
              e = (this.s + this.c * a) | 0
            100 === e &&
              (-1 === d.indexOf("atrix(") &&
              -1 === d.indexOf("radient(") &&
              -1 === d.indexOf("oader(")
                ? (c.removeAttribute("filter"), (b = !T(this.data, "filter")))
                : ((c.filter = d.replace(/alpha\(opacity *=.+?\)/i, "")),
                  (b = !0))),
              b ||
                (this.xn1 && (c.filter = d = d || "alpha(opacity=" + e + ")"),
                -1 === d.indexOf("pacity")
                  ? (0 === e && this.xn1) ||
                    (c.filter = d + " alpha(opacity=" + e + ")")
                  : (c.filter = d.replace(v, "opacity=" + e)))
          }
          pa("opacity,alpha,autoAlpha", {
            defaultValue: "1",
            parser: function (a, b, c, d, f, g) {
              var h = parseFloat(T(a, "opacity", e, !1, "1")),
                i = a.style,
                j = "autoAlpha" === c
              return (
                "string" == typeof b &&
                  "=" === b.charAt(1) &&
                  (b =
                    ("-" === b.charAt(0) ? -1 : 1) * parseFloat(b.substr(2)) +
                    h),
                j &&
                  1 === h &&
                  "hidden" === T(a, "visibility", e) &&
                  0 !== b &&
                  (h = 0),
                M
                  ? (f = new ka(i, "opacity", h, b - h, f))
                  : ((f = new ka(i, "opacity", 100 * h, 100 * (b - h), f)),
                    (f.xn1 = j ? 1 : 0),
                    (i.zoom = 1),
                    (f.type = 2),
                    (f.b = "alpha(opacity=" + f.s + ")"),
                    (f.e = "alpha(opacity=" + (f.s + f.c) + ")"),
                    (f.data = a),
                    (f.plugin = g),
                    (f.setRatio = Ia)),
                j &&
                  ((f = new ka(
                    i,
                    "visibility",
                    0,
                    0,
                    f,
                    -1,
                    null,
                    !1,
                    0,
                    0 !== h ? "inherit" : "hidden",
                    0 === b ? "hidden" : "inherit"
                  )),
                  (f.xs0 = "inherit"),
                  d._overwriteProps.push(f.n),
                  d._overwriteProps.push(c)),
                f
              )
            },
          })
          var Ja = function (a, b) {
              b &&
                (a.removeProperty
                  ? (("ms" !== b.substr(0, 2) && "webkit" !== b.substr(0, 6)) ||
                      (b = "-" + b),
                    a.removeProperty(b.replace(y, "-$1").toLowerCase()))
                  : a.removeAttribute(b))
            },
            Ka = function (a) {
              if (((this.t._gsClassPT = this), 1 === a || 0 === a)) {
                this.t.setAttribute("class", 0 === a ? this.b : this.e)
                for (var b = this.data, c = this.t.style; b; )
                  b.v ? (c[b.p] = b.v) : Ja(c, b.p), (b = b._next)
                1 === a &&
                  this.t._gsClassPT === this &&
                  (this.t._gsClassPT = null)
              } else
                this.t.getAttribute("class") !== this.e &&
                  this.t.setAttribute("class", this.e)
            }
          pa("className", {
            parser: function (a, b, d, f, g, h, i) {
              var j,
                k,
                l,
                m,
                n,
                o = a.getAttribute("class") || "",
                p = a.style.cssText
              if (
                ((g = f._classNamePT = new ka(a, d, 0, 0, g, 2)),
                (g.setRatio = Ka),
                (g.pr = -11),
                (c = !0),
                (g.b = o),
                (k = W(a, e)),
                (l = a._gsClassPT))
              ) {
                for (m = {}, n = l.data; n; ) (m[n.p] = 1), (n = n._next)
                l.setRatio(1)
              }
              return (
                (a._gsClassPT = g),
                (g.e =
                  "=" !== b.charAt(1)
                    ? b
                    : o.replace(
                        new RegExp("\\s*\\b" + b.substr(2) + "\\b"),
                        ""
                      ) + ("+" === b.charAt(0) ? " " + b.substr(2) : "")),
                a.setAttribute("class", g.e),
                (j = X(a, k, W(a), i, m)),
                a.setAttribute("class", o),
                (g.data = j.firstMPT),
                (a.style.cssText = p),
                (g = g.xfirst = f.parse(a, j.difs, g, h))
              )
            },
          })
          var La = function (a) {
            if (
              (1 === a || 0 === a) &&
              this.data._totalTime === this.data._totalDuration &&
              "isFromStart" !== this.data.data
            ) {
              var b,
                c,
                d,
                e,
                f,
                g = this.t.style,
                h = i.transform.parse
              if ("all" === this.e) (g.cssText = ""), (e = !0)
              else
                for (
                  b = this.e.split(" ").join("").split(","), d = b.length;
                  --d > -1;

                )
                  (c = b[d]),
                    i[c] &&
                      (i[c].parse === h
                        ? (e = !0)
                        : (c = "transformOrigin" === c ? ua : i[c].p)),
                    Ja(g, c)
              e &&
                (Ja(g, sa),
                (f = this.t._gsTransform) &&
                  (f.svg && this.t.removeAttribute("data-svg-origin"),
                  delete this.t._gsTransform))
            }
          }
          for (
            pa("clearProps", {
              parser: function (a, b, d, e, f) {
                return (
                  (f = new ka(a, d, 0, 0, f, 2)),
                  (f.setRatio = La),
                  (f.e = b),
                  (f.pr = -10),
                  (f.data = e._tween),
                  (c = !0),
                  f
                )
              },
            }),
              j = "bezier,throwProps,physicsProps,physics2D".split(","),
              na = j.length;
            na--;

          )
            !(function (a) {
              if (!i[a]) {
                var b = a.charAt(0).toUpperCase() + a.substr(1) + "Plugin"
                pa(a, {
                  parser: function (a, c, d, e, f, g, j) {
                    var k = h.com.greensock.plugins[b]
                    return k
                      ? (k._cssRegister(), i[d].parse(a, c, d, e, f, g, j))
                      : (O("Error: " + b + " js file not loaded."), f)
                  },
                })
              }
            })(j[na])
          ;(j = g.prototype),
            (j._firstPT = j._lastParsedTransform = j._transform = null),
            (j._onInitTween = function (a, b, h) {
              if (!a.nodeType) return !1
              ;(this._target = a),
                (this._tween = h),
                (this._vars = b),
                (k = b.autoRound),
                (c = !1),
                (d = b.suffixMap || g.suffixMap),
                (e = S(a, "")),
                (f = this._overwriteProps)
              var j,
                n,
                p,
                q,
                r,
                s,
                t,
                u,
                v,
                x = a.style
              if (
                (l &&
                  "" === x.zIndex &&
                  (("auto" !== (j = T(a, "zIndex", e)) && "" !== j) ||
                    this._addLazySet(x, "zIndex", 0)),
                "string" == typeof b &&
                  ((q = x.cssText),
                  (j = W(a, e)),
                  (x.cssText = q + ";" + b),
                  (j = X(a, j, W(a)).difs),
                  !M && w.test(b) && (j.opacity = parseFloat(RegExp.$1)),
                  (b = j),
                  (x.cssText = q)),
                b.className
                  ? (this._firstPT = n = i.className.parse(
                      a,
                      b.className,
                      "className",
                      this,
                      null,
                      null,
                      b
                    ))
                  : (this._firstPT = n = this.parse(a, b, null)),
                this._transformType)
              ) {
                for (
                  v = 3 === this._transformType,
                    sa
                      ? m &&
                        ((l = !0),
                        "" === x.zIndex &&
                          (("auto" !== (t = T(a, "zIndex", e)) && "" !== t) ||
                            this._addLazySet(x, "zIndex", 0)),
                        o &&
                          this._addLazySet(
                            x,
                            "WebkitBackfaceVisibility",
                            this._vars.WebkitBackfaceVisibility ||
                              (v ? "visible" : "hidden")
                          ))
                      : (x.zoom = 1),
                    p = n;
                  p && p._next;

                )
                  p = p._next
                ;(u = new ka(a, "transform", 0, 0, null, 2)),
                  this._linkCSSP(u, null, p),
                  (u.setRatio = sa ? Ha : Ga),
                  (u.data = this._transform || Fa(a, e, !0)),
                  (u.tween = h),
                  (u.pr = -1),
                  f.pop()
              }
              if (c) {
                for (; n; ) {
                  for (s = n._next, p = q; p && p.pr > n.pr; ) p = p._next
                  ;(n._prev = p ? p._prev : r) ? (n._prev._next = n) : (q = n),
                    (n._next = p) ? (p._prev = n) : (r = n),
                    (n = s)
                }
                this._firstPT = q
              }
              return !0
            }),
            (j.parse = function (a, b, c, f) {
              var g,
                h,
                j,
                l,
                m,
                n,
                o,
                p,
                q,
                r,
                s = a.style
              for (g in b)
                (n = b[g]),
                  (h = i[g]),
                  h
                    ? (c = h.parse(a, n, g, this, c, f, b))
                    : ((m = T(a, g, e) + ""),
                      (q = "string" == typeof n),
                      "color" === g ||
                      "fill" === g ||
                      "stroke" === g ||
                      -1 !== g.indexOf("Color") ||
                      (q && x.test(n))
                        ? (q ||
                            ((n = fa(n)),
                            (n =
                              (n.length > 3 ? "rgba(" : "rgb(") +
                              n.join(",") +
                              ")")),
                          (c = ma(s, g, m, n, !0, "transparent", c, 0, f)))
                        : !q || (-1 === n.indexOf(" ") && -1 === n.indexOf(","))
                        ? ((j = parseFloat(m)),
                          (o = j || 0 === j ? m.substr((j + "").length) : ""),
                          ("" !== m && "auto" !== m) ||
                            ("width" === g || "height" === g
                              ? ((j = $(a, g, e)), (o = "px"))
                              : "left" === g || "top" === g
                              ? ((j = V(a, g, e)), (o = "px"))
                              : ((j = "opacity" !== g ? 0 : 1), (o = ""))),
                          (r = q && "=" === n.charAt(1)),
                          r
                            ? ((l = parseInt(n.charAt(0) + "1", 10)),
                              (n = n.substr(2)),
                              (l *= parseFloat(n)),
                              (p = n.replace(u, "")))
                            : ((l = parseFloat(n)),
                              (p = q ? n.replace(u, "") : "")),
                          "" === p && (p = g in d ? d[g] : o),
                          (n = l || 0 === l ? (r ? l + j : l) + p : b[g]),
                          o !== p &&
                            "" !== p &&
                            (l || 0 === l) &&
                            j &&
                            ((j = U(a, g, j, o)),
                            "%" === p
                              ? ((j /= U(a, g, 100, "%") / 100),
                                !0 !== b.strictUnits && (m = j + "%"))
                              : "em" === p
                              ? (j /= U(a, g, 1, "em"))
                              : "px" !== p && ((l = U(a, g, l, p)), (p = "px")),
                            r && (l || 0 === l) && (n = l + j + p)),
                          r && (l += j),
                          (!j && 0 !== j) || (!l && 0 !== l)
                            ? void 0 !== s[g] &&
                              (n || (n + "" != "NaN" && null != n))
                              ? ((c = new ka(
                                  s,
                                  g,
                                  l || j || 0,
                                  0,
                                  c,
                                  -1,
                                  g,
                                  !1,
                                  0,
                                  m,
                                  n
                                )),
                                (c.xs0 =
                                  "none" !== n ||
                                  ("display" !== g && -1 === g.indexOf("Style"))
                                    ? n
                                    : m))
                              : O("invalid " + g + " tween value: " + b[g])
                            : ((c = new ka(
                                s,
                                g,
                                j,
                                l - j,
                                c,
                                0,
                                g,
                                !1 !== k && ("px" === p || "zIndex" === g),
                                0,
                                m,
                                n
                              )),
                              (c.xs0 = p)))
                        : (c = ma(s, g, m, n, !0, null, c, 0, f))),
                  f && c && !c.plugin && (c.plugin = f)
              return c
            }),
            (j.setRatio = function (a) {
              var b,
                c,
                d,
                e = this._firstPT
              if (
                1 !== a ||
                (this._tween._time !== this._tween._duration &&
                  0 !== this._tween._time)
              )
                if (
                  a ||
                  (this._tween._time !== this._tween._duration &&
                    0 !== this._tween._time) ||
                  -1e-6 === this._tween._rawPrevTime
                )
                  for (; e; ) {
                    if (
                      ((b = e.c * a + e.s),
                      e.r
                        ? (b = Math.round(b))
                        : b < 1e-6 && b > -1e-6 && (b = 0),
                      e.type)
                    )
                      if (1 === e.type)
                        if (2 === (d = e.l))
                          e.t[e.p] = e.xs0 + b + e.xs1 + e.xn1 + e.xs2
                        else if (3 === d)
                          e.t[e.p] =
                            e.xs0 + b + e.xs1 + e.xn1 + e.xs2 + e.xn2 + e.xs3
                        else if (4 === d)
                          e.t[e.p] =
                            e.xs0 +
                            b +
                            e.xs1 +
                            e.xn1 +
                            e.xs2 +
                            e.xn2 +
                            e.xs3 +
                            e.xn3 +
                            e.xs4
                        else if (5 === d)
                          e.t[e.p] =
                            e.xs0 +
                            b +
                            e.xs1 +
                            e.xn1 +
                            e.xs2 +
                            e.xn2 +
                            e.xs3 +
                            e.xn3 +
                            e.xs4 +
                            e.xn4 +
                            e.xs5
                        else {
                          for (c = e.xs0 + b + e.xs1, d = 1; d < e.l; d++)
                            c += e["xn" + d] + e["xs" + (d + 1)]
                          e.t[e.p] = c
                        }
                      else
                        -1 === e.type
                          ? (e.t[e.p] = e.xs0)
                          : e.setRatio && e.setRatio(a)
                    else e.t[e.p] = b + e.xs0
                    e = e._next
                  }
                else
                  for (; e; )
                    2 !== e.type ? (e.t[e.p] = e.b) : e.setRatio(a),
                      (e = e._next)
              else
                for (; e; ) {
                  if (2 !== e.type)
                    if (e.r && -1 !== e.type)
                      if (((b = Math.round(e.s + e.c)), e.type)) {
                        if (1 === e.type) {
                          for (
                            d = e.l, c = e.xs0 + b + e.xs1, d = 1;
                            d < e.l;
                            d++
                          )
                            c += e["xn" + d] + e["xs" + (d + 1)]
                          e.t[e.p] = c
                        }
                      } else e.t[e.p] = b + e.xs0
                    else e.t[e.p] = e.e
                  else e.setRatio(a)
                  e = e._next
                }
            }),
            (j._enableTransforms = function (a) {
              ;(this._transform = this._transform || Fa(this._target, e, !0)),
                (this._transformType =
                  (this._transform.svg && qa) ||
                  (!a && 3 !== this._transformType)
                    ? 2
                    : 3)
            })
          var Ma = function (a) {
            ;(this.t[this.p] = this.e),
              this.data._linkCSSP(this, this._next, null, !0)
          }
          ;(j._addLazySet = function (a, b, c) {
            var d = (this._firstPT = new ka(a, b, 0, 0, this._firstPT, 2))
            ;(d.e = c), (d.setRatio = Ma), (d.data = this)
          }),
            (j._linkCSSP = function (a, b, c, d) {
              return (
                a &&
                  (b && (b._prev = a),
                  a._next && (a._next._prev = a._prev),
                  a._prev
                    ? (a._prev._next = a._next)
                    : this._firstPT === a &&
                      ((this._firstPT = a._next), (d = !0)),
                  c
                    ? (c._next = a)
                    : d || null !== this._firstPT || (this._firstPT = a),
                  (a._next = b),
                  (a._prev = c)),
                a
              )
            }),
            (j._kill = function (b) {
              var c,
                d,
                e,
                f = b
              if (b.autoAlpha || b.alpha) {
                f = {}
                for (d in b) f[d] = b[d]
                ;(f.opacity = 1), f.autoAlpha && (f.visibility = 1)
              }
              return (
                b.className &&
                  (c = this._classNamePT) &&
                  ((e = c.xfirst),
                  e && e._prev
                    ? this._linkCSSP(e._prev, c._next, e._prev._prev)
                    : e === this._firstPT && (this._firstPT = c._next),
                  c._next && this._linkCSSP(c._next, c._next._next, e._prev),
                  (this._classNamePT = null)),
                a.prototype._kill.call(this, f)
              )
            })
          var Na = function (a, b, c) {
            var d, e, f, g
            if (a.slice) for (e = a.length; --e > -1; ) Na(a[e], b, c)
            else
              for (d = a.childNodes, e = d.length; --e > -1; )
                (f = d[e]),
                  (g = f.type),
                  f.style && (b.push(W(f)), c && c.push(f)),
                  (1 !== g && 9 !== g && 11 !== g) ||
                    !f.childNodes.length ||
                    Na(f, b, c)
          }
          return (
            (g.cascadeTo = function (a, c, d) {
              var e,
                f,
                g,
                h,
                i = b.to(a, c, d),
                j = [i],
                k = [],
                l = [],
                m = [],
                n = b._internals.reservedProps
              for (
                a = i._targets || i.target,
                  Na(a, k, m),
                  i.render(c, !0, !0),
                  Na(a, l),
                  i.render(0, !0, !0),
                  i._enabled(!0),
                  e = m.length;
                --e > -1;

              )
                if (((f = X(m[e], k[e], l[e])), f.firstMPT)) {
                  f = f.difs
                  for (g in d) n[g] && (f[g] = d[g])
                  h = {}
                  for (g in f) h[g] = k[e][g]
                  j.push(b.fromTo(m[e], c, h, f))
                }
              return j
            }),
            a.activate([g]),
            g
          )
        },
        !0
      ),
      (function () {
        var a = _gsScope._gsDefine.plugin({
            propName: "roundProps",
            priority: -1,
            API: 2,
            init: function (a, b, c) {
              return (this._tween = c), !0
            },
          }),
          b = a.prototype
        ;(b._onInitAllProps = function () {
          for (
            var a,
              b,
              c,
              d = this._tween,
              e =
                d.vars.roundProps instanceof Array
                  ? d.vars.roundProps
                  : d.vars.roundProps.split(","),
              f = e.length,
              g = {},
              h = d._propLookup.roundProps;
            --f > -1;

          )
            g[e[f]] = 1
          for (f = e.length; --f > -1; )
            for (a = e[f], b = d._firstPT; b; )
              (c = b._next),
                b.pg
                  ? b.t._roundProps(g, !0)
                  : b.n === a &&
                    (this._add(b.t, a, b.s, b.c),
                    c && (c._prev = b._prev),
                    b._prev
                      ? (b._prev._next = c)
                      : d._firstPT === b && (d._firstPT = c),
                    (b._next = b._prev = null),
                    (d._propLookup[a] = h)),
                (b = c)
          return !1
        }),
          (b._add = function (a, b, c, d) {
            this._addTween(a, b, c, c + d, b, !0), this._overwriteProps.push(b)
          })
      })(),
      (function () {
        var a = /(?:\d|\-|\+|=|#|\.)*/g,
          b = /[A-Za-z%]/g
        _gsScope._gsDefine.plugin({
          propName: "attr",
          API: 2,
          version: "0.4.0",
          init: function (c, d, e) {
            var f, g, h, i, j
            if ("function" != typeof c.setAttribute) return !1
            ;(this._target = c),
              (this._proxy = {}),
              (this._start = {}),
              (this._end = {}),
              (this._suffix = {})
            for (f in d)
              (this._start[f] = this._proxy[f] = g = c.getAttribute(f) + ""),
                (this._end[f] = h = d[f] + ""),
                (this._suffix[f] = i = b.test(h)
                  ? h.replace(a, "")
                  : b.test(g)
                  ? g.replace(a, "")
                  : ""),
                i && -1 !== (j = h.indexOf(i)) && (h = h.substr(0, j)),
                this._addTween(this._proxy, f, parseFloat(g), h, f) ||
                  (this._suffix[f] = ""),
                "=" === h.charAt(1) &&
                  (this._end[f] = this._firstPT.s + this._firstPT.c + i),
                this._overwriteProps.push(f)
            return !0
          },
          set: function (a) {
            this._super.setRatio.call(this, a)
            for (
              var b,
                c = this._overwriteProps,
                d = c.length,
                e = 1 === a ? this._end : a ? this._proxy : this._start,
                f = e === this._proxy;
              --d > -1;

            )
              (b = c[d]),
                this._target.setAttribute(b, e[b] + (f ? this._suffix[b] : ""))
          },
        })
      })(),
      (_gsScope._gsDefine.plugin({
        propName: "directionalRotation",
        version: "0.2.1",
        API: 2,
        init: function (a, b, c) {
          "object" != typeof b && (b = { rotation: b }), (this.finals = {})
          var d,
            e,
            f,
            g,
            h,
            i,
            j = !0 === b.useRadians ? 2 * Math.PI : 360
          for (d in b)
            "useRadians" !== d &&
              ((i = (b[d] + "").split("_")),
              (e = i[0]),
              (f = parseFloat(
                "function" != typeof a[d]
                  ? a[d]
                  : a[
                      d.indexOf("set") ||
                      "function" != typeof a["get" + d.substr(3)]
                        ? d
                        : "get" + d.substr(3)
                    ]()
              )),
              (g = this.finals[d] =
                "string" == typeof e && "=" === e.charAt(1)
                  ? f + parseInt(e.charAt(0) + "1", 10) * Number(e.substr(2))
                  : Number(e) || 0),
              (h = g - f),
              i.length &&
                ((e = i.join("_")),
                -1 !== e.indexOf("short") &&
                  (h %= j) !== h % (j / 2) &&
                  (h = h < 0 ? h + j : h - j),
                -1 !== e.indexOf("_cw") && h < 0
                  ? (h = ((h + 9999999999 * j) % j) - ((h / j) | 0) * j)
                  : -1 !== e.indexOf("ccw") &&
                    h > 0 &&
                    (h = ((h - 9999999999 * j) % j) - ((h / j) | 0) * j)),
              (h > 1e-6 || h < -1e-6) &&
                (this._addTween(a, d, f, f + h, d),
                this._overwriteProps.push(d)))
          return !0
        },
        set: function (a) {
          var b
          if (1 !== a) this._super.setRatio.call(this, a)
          else
            for (b = this._firstPT; b; )
              b.f ? b.t[b.p](this.finals[b.p]) : (b.t[b.p] = this.finals[b.p]),
                (b = b._next)
        },
      })._autoCSS = !0),
      _gsScope._gsDefine(
        "easing.Back",
        ["easing.Ease"],
        function (a) {
          var b,
            c,
            d,
            e = _gsScope.GreenSockGlobals || _gsScope,
            f = e.com.greensock,
            g = 2 * Math.PI,
            h = Math.PI / 2,
            i = f._class,
            j = function (b, c) {
              var d = i("easing." + b, function () {}, !0),
                e = (d.prototype = new a())
              return (e.constructor = d), (e.getRatio = c), d
            },
            k = a.register || function () {},
            l = function (a, b, c, d, e) {
              var f = i(
                "easing." + a,
                { easeOut: new b(), easeIn: new c(), easeInOut: new d() },
                !0
              )
              return k(f, a), f
            },
            m = function (a, b, c) {
              ;(this.t = a),
                (this.v = b),
                c &&
                  ((this.next = c),
                  (c.prev = this),
                  (this.c = c.v - b),
                  (this.gap = c.t - a))
            },
            n = function (b, c) {
              var d = i(
                  "easing." + b,
                  function (a) {
                    ;(this._p1 = a || 0 === a ? a : 1.70158),
                      (this._p2 = 1.525 * this._p1)
                  },
                  !0
                ),
                e = (d.prototype = new a())
              return (
                (e.constructor = d),
                (e.getRatio = c),
                (e.config = function (a) {
                  return new d(a)
                }),
                d
              )
            },
            o = l(
              "Back",
              n("BackOut", function (a) {
                return (a -= 1) * a * ((this._p1 + 1) * a + this._p1) + 1
              }),
              n("BackIn", function (a) {
                return a * a * ((this._p1 + 1) * a - this._p1)
              }),
              n("BackInOut", function (a) {
                return (a *= 2) < 1
                  ? 0.5 * a * a * ((this._p2 + 1) * a - this._p2)
                  : 0.5 * ((a -= 2) * a * ((this._p2 + 1) * a + this._p2) + 2)
              })
            ),
            p = i(
              "easing.SlowMo",
              function (a, b, c) {
                ;(b = b || 0 === b ? b : 0.7),
                  null == a ? (a = 0.7) : a > 1 && (a = 1),
                  (this._p = 1 !== a ? b : 0),
                  (this._p1 = (1 - a) / 2),
                  (this._p2 = a),
                  (this._p3 = this._p1 + this._p2),
                  (this._calcEnd = !0 === c)
              },
              !0
            ),
            q = (p.prototype = new a())
          return (
            (q.constructor = p),
            (q.getRatio = function (a) {
              var b = a + (0.5 - a) * this._p
              return a < this._p1
                ? this._calcEnd
                  ? 1 - (a = 1 - a / this._p1) * a
                  : b - (a = 1 - a / this._p1) * a * a * a * b
                : a > this._p3
                ? this._calcEnd
                  ? 1 - (a = (a - this._p3) / this._p1) * a
                  : b + (a - b) * (a = (a - this._p3) / this._p1) * a * a * a
                : this._calcEnd
                ? 1
                : b
            }),
            (p.ease = new p(0.7, 0.7)),
            (q.config = p.config = function (a, b, c) {
              return new p(a, b, c)
            }),
            (b = i(
              "easing.SteppedEase",
              function (a) {
                ;(a = a || 1), (this._p1 = 1 / a), (this._p2 = a + 1)
              },
              !0
            )),
            (q = b.prototype = new a()),
            (q.constructor = b),
            (q.getRatio = function (a) {
              return (
                a < 0 ? (a = 0) : a >= 1 && (a = 0.999999999),
                ((this._p2 * a) >> 0) * this._p1
              )
            }),
            (q.config = b.config = function (a) {
              return new b(a)
            }),
            (c = i(
              "easing.RoughEase",
              function (b) {
                b = b || {}
                for (
                  var c,
                    d,
                    e,
                    f,
                    g,
                    h,
                    i = b.taper || "none",
                    j = [],
                    k = 0,
                    l = 0 | (b.points || 20),
                    n = l,
                    o = !1 !== b.randomize,
                    p = !0 === b.clamp,
                    q = b.template instanceof a ? b.template : null,
                    r = "number" == typeof b.strength ? 0.4 * b.strength : 0.4;
                  --n > -1;

                )
                  (c = o ? Math.random() : (1 / l) * n),
                    (d = q ? q.getRatio(c) : c),
                    "none" === i
                      ? (e = r)
                      : "out" === i
                      ? ((f = 1 - c), (e = f * f * r))
                      : "in" === i
                      ? (e = c * c * r)
                      : c < 0.5
                      ? ((f = 2 * c), (e = f * f * 0.5 * r))
                      : ((f = 2 * (1 - c)), (e = f * f * 0.5 * r)),
                    o
                      ? (d += Math.random() * e - 0.5 * e)
                      : n % 2
                      ? (d += 0.5 * e)
                      : (d -= 0.5 * e),
                    p && (d > 1 ? (d = 1) : d < 0 && (d = 0)),
                    (j[k++] = { x: c, y: d })
                for (
                  j.sort(function (a, b) {
                    return a.x - b.x
                  }),
                    h = new m(1, 1, null),
                    n = l;
                  --n > -1;

                )
                  (g = j[n]), (h = new m(g.x, g.y, h))
                this._prev = new m(0, 0, 0 !== h.t ? h : h.next)
              },
              !0
            )),
            (q = c.prototype = new a()),
            (q.constructor = c),
            (q.getRatio = function (a) {
              var b = this._prev
              if (a > b.t) {
                for (; b.next && a >= b.t; ) b = b.next
                b = b.prev
              } else for (; b.prev && a <= b.t; ) b = b.prev
              return (this._prev = b), b.v + ((a - b.t) / b.gap) * b.c
            }),
            (q.config = function (a) {
              return new c(a)
            }),
            (c.ease = new c()),
            l(
              "Bounce",
              j("BounceOut", function (a) {
                return a < 1 / 2.75
                  ? 7.5625 * a * a
                  : a < 2 / 2.75
                  ? 7.5625 * (a -= 1.5 / 2.75) * a + 0.75
                  : a < 2.5 / 2.75
                  ? 7.5625 * (a -= 2.25 / 2.75) * a + 0.9375
                  : 7.5625 * (a -= 2.625 / 2.75) * a + 0.984375
              }),
              j("BounceIn", function (a) {
                return (a = 1 - a) < 1 / 2.75
                  ? 1 - 7.5625 * a * a
                  : a < 2 / 2.75
                  ? 1 - (7.5625 * (a -= 1.5 / 2.75) * a + 0.75)
                  : a < 2.5 / 2.75
                  ? 1 - (7.5625 * (a -= 2.25 / 2.75) * a + 0.9375)
                  : 1 - (7.5625 * (a -= 2.625 / 2.75) * a + 0.984375)
              }),
              j("BounceInOut", function (a) {
                var b = a < 0.5
                return (
                  (a = b ? 1 - 2 * a : 2 * a - 1),
                  (a =
                    a < 1 / 2.75
                      ? 7.5625 * a * a
                      : a < 2 / 2.75
                      ? 7.5625 * (a -= 1.5 / 2.75) * a + 0.75
                      : a < 2.5 / 2.75
                      ? 7.5625 * (a -= 2.25 / 2.75) * a + 0.9375
                      : 7.5625 * (a -= 2.625 / 2.75) * a + 0.984375),
                  b ? 0.5 * (1 - a) : 0.5 * a + 0.5
                )
              })
            ),
            l(
              "Circ",
              j("CircOut", function (a) {
                return Math.sqrt(1 - (a -= 1) * a)
              }),
              j("CircIn", function (a) {
                return -(Math.sqrt(1 - a * a) - 1)
              }),
              j("CircInOut", function (a) {
                return (a *= 2) < 1
                  ? -0.5 * (Math.sqrt(1 - a * a) - 1)
                  : 0.5 * (Math.sqrt(1 - (a -= 2) * a) + 1)
              })
            ),
            (d = function (b, c, d) {
              var e = i(
                  "easing." + b,
                  function (a, b) {
                    ;(this._p1 = a >= 1 ? a : 1),
                      (this._p2 = (b || d) / (a < 1 ? a : 1)),
                      (this._p3 =
                        (this._p2 / g) * (Math.asin(1 / this._p1) || 0)),
                      (this._p2 = g / this._p2)
                  },
                  !0
                ),
                f = (e.prototype = new a())
              return (
                (f.constructor = e),
                (f.getRatio = c),
                (f.config = function (a, b) {
                  return new e(a, b)
                }),
                e
              )
            }),
            l(
              "Elastic",
              d(
                "ElasticOut",
                function (a) {
                  return (
                    this._p1 *
                      Math.pow(2, -10 * a) *
                      Math.sin((a - this._p3) * this._p2) +
                    1
                  )
                },
                0.3
              ),
              d(
                "ElasticIn",
                function (a) {
                  return (
                    -this._p1 *
                    Math.pow(2, 10 * (a -= 1)) *
                    Math.sin((a - this._p3) * this._p2)
                  )
                },
                0.3
              ),
              d(
                "ElasticInOut",
                function (a) {
                  return (a *= 2) < 1
                    ? this._p1 *
                        Math.pow(2, 10 * (a -= 1)) *
                        Math.sin((a - this._p3) * this._p2) *
                        -0.5
                    : this._p1 *
                        Math.pow(2, -10 * (a -= 1)) *
                        Math.sin((a - this._p3) * this._p2) *
                        0.5 +
                        1
                },
                0.45
              )
            ),
            l(
              "Expo",
              j("ExpoOut", function (a) {
                return 1 - Math.pow(2, -10 * a)
              }),
              j("ExpoIn", function (a) {
                return Math.pow(2, 10 * (a - 1)) - 0.001
              }),
              j("ExpoInOut", function (a) {
                return (a *= 2) < 1
                  ? 0.5 * Math.pow(2, 10 * (a - 1))
                  : 0.5 * (2 - Math.pow(2, -10 * (a - 1)))
              })
            ),
            l(
              "Sine",
              j("SineOut", function (a) {
                return Math.sin(a * h)
              }),
              j("SineIn", function (a) {
                return 1 - Math.cos(a * h)
              }),
              j("SineInOut", function (a) {
                return -0.5 * (Math.cos(Math.PI * a) - 1)
              })
            ),
            i(
              "easing.EaseLookup",
              {
                find: function (b) {
                  return a.map[b]
                },
              },
              !0
            ),
            k(e.SlowMo, "SlowMo", "ease,"),
            k(c, "RoughEase", "ease,"),
            k(b, "SteppedEase", "ease,"),
            o
          )
        },
        !0
      )
  }),
  _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
  (function (a, b) {
    "use strict"
    var c = (a.GreenSockGlobals = a.GreenSockGlobals || a)
    if (!c.TweenLite) {
      var d,
        e,
        f,
        g,
        h,
        i = function (a) {
          var b,
            d = a.split("."),
            e = c
          for (b = 0; b < d.length; b++) e[d[b]] = e = e[d[b]] || {}
          return e
        },
        j = i("com.greensock"),
        k = 1e-10,
        l = function (a) {
          var b,
            c = [],
            d = a.length
          for (b = 0; b !== d; c.push(a[b++]));
          return c
        },
        m = function () {},
        n = (function () {
          var a = Object.prototype.toString,
            b = a.call([])
          return function (c) {
            return (
              null != c &&
              (c instanceof Array ||
                ("object" == typeof c && !!c.push && a.call(c) === b))
            )
          }
        })(),
        o = {},
        p = function (b, d, e, f) {
          ;(this.sc = o[b] ? o[b].sc : []),
            (o[b] = this),
            (this.gsClass = null),
            (this.func = e)
          var g = []
          ;(this.check = function (h) {
            for (var j, k, l, m, n = d.length, q = n; --n > -1; )
              (j = o[d[n]] || new p(d[n], [])).gsClass
                ? ((g[n] = j.gsClass), q--)
                : h && j.sc.push(this)
            if (0 === q && e)
              for (
                k = ("com.greensock." + b).split("."),
                  l = k.pop(),
                  m = i(k.join("."))[l] = this.gsClass = e.apply(e, g),
                  f &&
                    ((c[l] = m),
                    "function" == typeof define && define.amd
                      ? define((a.GreenSockAMDPath
                          ? a.GreenSockAMDPath + "/"
                          : "") + b.split(".").pop(), [], function () {
                          return m
                        })
                      : "TweenMax" === b &&
                        "undefined" != typeof module &&
                        module.exports &&
                        (module.exports = m)),
                  n = 0;
                n < this.sc.length;
                n++
              )
                this.sc[n].check()
          }),
            this.check(!0)
        },
        q = (a._gsDefine = function (a, b, c, d) {
          return new p(a, b, c, d)
        }),
        r = (j._class = function (a, b, c) {
          return (
            (b = b || function () {}),
            q(
              a,
              [],
              function () {
                return b
              },
              c
            ),
            b
          )
        })
      q.globals = c
      var s = [0, 0, 1, 1],
        t = [],
        u = r(
          "easing.Ease",
          function (a, b, c, d) {
            ;(this._func = a),
              (this._type = c || 0),
              (this._power = d || 0),
              (this._params = b ? s.concat(b) : s)
          },
          !0
        ),
        v = (u.map = {}),
        w = (u.register = function (a, b, c, d) {
          for (
            var e,
              f,
              g,
              h,
              i = b.split(","),
              k = i.length,
              l = (c || "easeIn,easeOut,easeInOut").split(",");
            --k > -1;

          )
            for (
              f = i[k],
                e = d ? r("easing." + f, null, !0) : j.easing[f] || {},
                g = l.length;
              --g > -1;

            )
              (h = l[g]),
                (v[f + "." + h] = v[h + f] = e[h] = a.getRatio
                  ? a
                  : a[h] || new a())
        })
      for (
        f = u.prototype,
          f._calcEnd = !1,
          f.getRatio = function (a) {
            if (this._func)
              return (this._params[0] = a), this._func.apply(null, this._params)
            var b = this._type,
              c = this._power,
              d = 1 === b ? 1 - a : 2 === b ? a : a < 0.5 ? 2 * a : 2 * (1 - a)
            return (
              1 === c
                ? (d *= d)
                : 2 === c
                ? (d *= d * d)
                : 3 === c
                ? (d *= d * d * d)
                : 4 === c && (d *= d * d * d * d),
              1 === b ? 1 - d : 2 === b ? d : a < 0.5 ? d / 2 : 1 - d / 2
            )
          },
          d = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"],
          e = d.length;
        --e > -1;

      )
        (f = d[e] + ",Power" + e),
          w(new u(null, null, 1, e), f, "easeOut", !0),
          w(
            new u(null, null, 2, e),
            f,
            "easeIn" + (0 === e ? ",easeNone" : "")
          ),
          w(new u(null, null, 3, e), f, "easeInOut")
      ;(v.linear = j.easing.Linear.easeIn), (v.swing = j.easing.Quad.easeInOut)
      var x = r("events.EventDispatcher", function (a) {
        ;(this._listeners = {}), (this._eventTarget = a || this)
      })
      ;(f = x.prototype),
        (f.addEventListener = function (a, b, c, d, e) {
          e = e || 0
          var f,
            i,
            j = this._listeners[a],
            k = 0
          for (
            null == j && (this._listeners[a] = j = []), i = j.length;
            --i > -1;

          )
            (f = j[i]),
              f.c === b && f.s === c
                ? j.splice(i, 1)
                : 0 === k && f.pr < e && (k = i + 1)
          j.splice(k, 0, { c: b, s: c, up: d, pr: e }),
            this !== g || h || g.wake()
        }),
        (f.removeEventListener = function (a, b) {
          var c,
            d = this._listeners[a]
          if (d)
            for (c = d.length; --c > -1; )
              if (d[c].c === b) return void d.splice(c, 1)
        }),
        (f.dispatchEvent = function (a) {
          var b,
            c,
            d,
            e = this._listeners[a]
          if (e)
            for (b = e.length, c = this._eventTarget; --b > -1; )
              (d = e[b]) &&
                (d.up
                  ? d.c.call(d.s || c, { type: a, target: c })
                  : d.c.call(d.s || c))
        })
      var y = a.requestAnimationFrame,
        z = a.cancelAnimationFrame,
        A =
          Date.now ||
          function () {
            return new Date().getTime()
          },
        B = A()
      for (d = ["ms", "moz", "webkit", "o"], e = d.length; --e > -1 && !y; )
        (y = a[d[e] + "RequestAnimationFrame"]),
          (z =
            a[d[e] + "CancelAnimationFrame"] ||
            a[d[e] + "CancelRequestAnimationFrame"])
      r("Ticker", function (a, b) {
        var c,
          d,
          e,
          f,
          i,
          j = this,
          l = A(),
          n = !1 !== b && y,
          o = 500,
          p = 33,
          q = function (a) {
            var b,
              g,
              h = A() - B
            h > o && (l += h - p),
              (B += h),
              (j.time = (B - l) / 1e3),
              (b = j.time - i),
              (!c || b > 0 || !0 === a) &&
                (j.frame++, (i += b + (b >= f ? 0.004 : f - b)), (g = !0)),
              !0 !== a && (e = d(q)),
              g && j.dispatchEvent("tick")
          }
        x.call(j),
          (j.time = j.frame = 0),
          (j.tick = function () {
            q(!0)
          }),
          (j.lagSmoothing = function (a, b) {
            ;(o = a || 1 / k), (p = Math.min(b, o, 0))
          }),
          (j.sleep = function () {
            null != e &&
              (n && z ? z(e) : clearTimeout(e),
              (d = m),
              (e = null),
              j === g && (h = !1))
          }),
          (j.wake = function () {
            null !== e ? j.sleep() : j.frame > 10 && (B = A() - o + 5),
              (d =
                0 === c
                  ? m
                  : n && y
                  ? y
                  : function (a) {
                      return setTimeout(a, (1e3 * (i - j.time) + 1) | 0)
                    }),
              j === g && (h = !0),
              q(2)
          }),
          (j.fps = function (a) {
            return arguments.length
              ? ((c = a),
                (f = 1 / (c || 60)),
                (i = this.time + f),
                void j.wake())
              : c
          }),
          (j.useRAF = function (a) {
            return arguments.length ? (j.sleep(), (n = a), void j.fps(c)) : n
          }),
          j.fps(a),
          setTimeout(function () {
            n && j.frame < 5 && j.useRAF(!1)
          }, 1500)
      }),
        (f = j.Ticker.prototype = new j.events.EventDispatcher()),
        (f.constructor = j.Ticker)
      var C = r("core.Animation", function (a, b) {
        if (
          ((this.vars = b = b || {}),
          (this._duration = this._totalDuration = a || 0),
          (this._delay = Number(b.delay) || 0),
          (this._timeScale = 1),
          (this._active = !0 === b.immediateRender),
          (this.data = b.data),
          (this._reversed = !0 === b.reversed),
          R)
        ) {
          h || g.wake()
          var c = this.vars.useFrames ? Q : R
          c.add(this, c._time), this.vars.paused && this.paused(!0)
        }
      })
      ;(g = C.ticker = new j.Ticker()),
        (f = C.prototype),
        (f._dirty = f._gc = f._initted = f._paused = !1),
        (f._totalTime = f._time = 0),
        (f._rawPrevTime = -1),
        (f._next = f._last = f._onUpdate = f._timeline = f.timeline = null),
        (f._paused = !1)
      var D = function () {
        h && A() - B > 2e3 && g.wake(), setTimeout(D, 2e3)
      }
      D(),
        (f.play = function (a, b) {
          return null != a && this.seek(a, b), this.reversed(!1).paused(!1)
        }),
        (f.pause = function (a, b) {
          return null != a && this.seek(a, b), this.paused(!0)
        }),
        (f.resume = function (a, b) {
          return null != a && this.seek(a, b), this.paused(!1)
        }),
        (f.seek = function (a, b) {
          return this.totalTime(Number(a), !1 !== b)
        }),
        (f.restart = function (a, b) {
          return this.reversed(!1)
            .paused(!1)
            .totalTime(a ? -this._delay : 0, !1 !== b, !0)
        }),
        (f.reverse = function (a, b) {
          return (
            null != a && this.seek(a || this.totalDuration(), b),
            this.reversed(!0).paused(!1)
          )
        }),
        (f.render = function (a, b, c) {}),
        (f.invalidate = function () {
          return (
            (this._time = this._totalTime = 0),
            (this._initted = this._gc = !1),
            (this._rawPrevTime = -1),
            (!this._gc && this.timeline) || this._enabled(!0),
            this
          )
        }),
        (f.isActive = function () {
          var a,
            b = this._timeline,
            c = this._startTime
          return (
            !b ||
            (!this._gc &&
              !this._paused &&
              b.isActive() &&
              (a = b.rawTime()) >= c &&
              a < c + this.totalDuration() / this._timeScale)
          )
        }),
        (f._enabled = function (a, b) {
          return (
            h || g.wake(),
            (this._gc = !a),
            (this._active = this.isActive()),
            !0 !== b &&
              (a && !this.timeline
                ? this._timeline.add(this, this._startTime - this._delay)
                : !a && this.timeline && this._timeline._remove(this, !0)),
            !1
          )
        }),
        (f._kill = function (a, b) {
          return this._enabled(!1, !1)
        }),
        (f.kill = function (a, b) {
          return this._kill(a, b), this
        }),
        (f._uncache = function (a) {
          for (var b = a ? this : this.timeline; b; )
            (b._dirty = !0), (b = b.timeline)
          return this
        }),
        (f._swapSelfInParams = function (a) {
          for (var b = a.length, c = a.concat(); --b > -1; )
            "{self}" === a[b] && (c[b] = this)
          return c
        }),
        (f._callback = function (a) {
          var b = this.vars
          b[a].apply(
            b[a + "Scope"] || b.callbackScope || this,
            b[a + "Params"] || t
          )
        }),
        (f.eventCallback = function (a, b, c, d) {
          if ("on" === (a || "").substr(0, 2)) {
            var e = this.vars
            if (1 === arguments.length) return e[a]
            null == b
              ? delete e[a]
              : ((e[a] = b),
                (e[a + "Params"] =
                  n(c) && -1 !== c.join("").indexOf("{self}")
                    ? this._swapSelfInParams(c)
                    : c),
                (e[a + "Scope"] = d)),
              "onUpdate" === a && (this._onUpdate = b)
          }
          return this
        }),
        (f.delay = function (a) {
          return arguments.length
            ? (this._timeline.smoothChildTiming &&
                this.startTime(this._startTime + a - this._delay),
              (this._delay = a),
              this)
            : this._delay
        }),
        (f.duration = function (a) {
          return arguments.length
            ? ((this._duration = this._totalDuration = a),
              this._uncache(!0),
              this._timeline.smoothChildTiming &&
                this._time > 0 &&
                this._time < this._duration &&
                0 !== a &&
                this.totalTime(this._totalTime * (a / this._duration), !0),
              this)
            : ((this._dirty = !1), this._duration)
        }),
        (f.totalDuration = function (a) {
          return (
            (this._dirty = !1),
            arguments.length ? this.duration(a) : this._totalDuration
          )
        }),
        (f.time = function (a, b) {
          return arguments.length
            ? (this._dirty && this.totalDuration(),
              this.totalTime(a > this._duration ? this._duration : a, b))
            : this._time
        }),
        (f.totalTime = function (a, b, c) {
          if ((h || g.wake(), !arguments.length)) return this._totalTime
          if (this._timeline) {
            if (
              (a < 0 && !c && (a += this.totalDuration()),
              this._timeline.smoothChildTiming)
            ) {
              this._dirty && this.totalDuration()
              var d = this._totalDuration,
                e = this._timeline
              if (
                (a > d && !c && (a = d),
                (this._startTime =
                  (this._paused ? this._pauseTime : e._time) -
                  (this._reversed ? d - a : a) / this._timeScale),
                e._dirty || this._uncache(!1),
                e._timeline)
              )
                for (; e._timeline; )
                  e._timeline._time !==
                    (e._startTime + e._totalTime) / e._timeScale &&
                    e.totalTime(e._totalTime, !0),
                    (e = e._timeline)
            }
            this._gc && this._enabled(!0, !1),
              (this._totalTime === a && 0 !== this._duration) ||
                (this.render(a, b, !1), I.length && T())
          }
          return this
        }),
        (f.progress = f.totalProgress = function (a, b) {
          return arguments.length
            ? this.totalTime(this.duration() * a, b)
            : this._time / this.duration()
        }),
        (f.startTime = function (a) {
          return arguments.length
            ? (a !== this._startTime &&
                ((this._startTime = a),
                this.timeline &&
                  this.timeline._sortChildren &&
                  this.timeline.add(this, a - this._delay)),
              this)
            : this._startTime
        }),
        (f.endTime = function (a) {
          return (
            this._startTime +
            (0 != a ? this.totalDuration() : this.duration()) / this._timeScale
          )
        }),
        (f.timeScale = function (a) {
          if (!arguments.length) return this._timeScale
          if (
            ((a = a || k), this._timeline && this._timeline.smoothChildTiming)
          ) {
            var b = this._pauseTime,
              c = b || 0 === b ? b : this._timeline.totalTime()
            this._startTime = c - ((c - this._startTime) * this._timeScale) / a
          }
          return (this._timeScale = a), this._uncache(!1)
        }),
        (f.reversed = function (a) {
          return arguments.length
            ? (a != this._reversed &&
                ((this._reversed = a),
                this.totalTime(
                  this._timeline && !this._timeline.smoothChildTiming
                    ? this.totalDuration() - this._totalTime
                    : this._totalTime,
                  !0
                )),
              this)
            : this._reversed
        }),
        (f.paused = function (a) {
          if (!arguments.length) return this._paused
          var b,
            c,
            d = this._timeline
          return (
            a != this._paused &&
              d &&
              (h || a || g.wake(),
              (b = d.rawTime()),
              (c = b - this._pauseTime),
              !a &&
                d.smoothChildTiming &&
                ((this._startTime += c), this._uncache(!1)),
              (this._pauseTime = a ? b : null),
              (this._paused = a),
              (this._active = this.isActive()),
              !a &&
                0 !== c &&
                this._initted &&
                this.duration() &&
                this.render(
                  d.smoothChildTiming
                    ? this._totalTime
                    : (b - this._startTime) / this._timeScale,
                  !0,
                  !0
                )),
            this._gc && !a && this._enabled(!0, !1),
            this
          )
        })
      var E = r("core.SimpleTimeline", function (a) {
        C.call(this, 0, a),
          (this.autoRemoveChildren = this.smoothChildTiming = !0)
      })
      ;(f = E.prototype = new C()),
        (f.constructor = E),
        (f.kill()._gc = !1),
        (f._first = f._last = f._recent = null),
        (f._sortChildren = !1),
        (f.add = f.insert = function (a, b, c, d) {
          var e, f
          if (
            ((a._startTime = Number(b || 0) + a._delay),
            a._paused &&
              this !== a._timeline &&
              (a._pauseTime =
                a._startTime + (this.rawTime() - a._startTime) / a._timeScale),
            a.timeline && a.timeline._remove(a, !0),
            (a.timeline = a._timeline = this),
            a._gc && a._enabled(!0, !0),
            (e = this._last),
            this._sortChildren)
          )
            for (f = a._startTime; e && e._startTime > f; ) e = e._prev
          return (
            e
              ? ((a._next = e._next), (e._next = a))
              : ((a._next = this._first), (this._first = a)),
            a._next ? (a._next._prev = a) : (this._last = a),
            (a._prev = e),
            (this._recent = a),
            this._timeline && this._uncache(!0),
            this
          )
        }),
        (f._remove = function (a, b) {
          return (
            a.timeline === this &&
              (b || a._enabled(!1, !0),
              a._prev
                ? (a._prev._next = a._next)
                : this._first === a && (this._first = a._next),
              a._next
                ? (a._next._prev = a._prev)
                : this._last === a && (this._last = a._prev),
              (a._next = a._prev = a.timeline = null),
              a === this._recent && (this._recent = this._last),
              this._timeline && this._uncache(!0)),
            this
          )
        }),
        (f.render = function (a, b, c) {
          var d,
            e = this._first
          for (this._totalTime = this._time = this._rawPrevTime = a; e; )
            (d = e._next),
              (e._active || (a >= e._startTime && !e._paused)) &&
                (e._reversed
                  ? e.render(
                      (e._dirty ? e.totalDuration() : e._totalDuration) -
                        (a - e._startTime) * e._timeScale,
                      b,
                      c
                    )
                  : e.render((a - e._startTime) * e._timeScale, b, c)),
              (e = d)
        }),
        (f.rawTime = function () {
          return h || g.wake(), this._totalTime
        })
      var F = r(
          "TweenLite",
          function (b, c, d) {
            if (
              (C.call(this, c, d),
              (this.render = F.prototype.render),
              null == b)
            )
              throw "Cannot tween a null target."
            this.target = b = "string" != typeof b ? b : F.selector(b) || b
            var e,
              f,
              g,
              h =
                b.jquery ||
                (b.length &&
                  b !== a &&
                  b[0] &&
                  (b[0] === a || (b[0].nodeType && b[0].style && !b.nodeType))),
              i = this.vars.overwrite
            if (
              ((this._overwrite = i =
                null == i
                  ? P[F.defaultOverwrite]
                  : "number" == typeof i
                  ? i >> 0
                  : P[i]),
              (h || b instanceof Array || (b.push && n(b))) &&
                "number" != typeof b[0])
            )
              for (
                this._targets = g = l(b),
                  this._propLookup = [],
                  this._siblings = [],
                  e = 0;
                e < g.length;
                e++
              )
                (f = g[e]),
                  f
                    ? "string" != typeof f
                      ? f.length &&
                        f !== a &&
                        f[0] &&
                        (f[0] === a ||
                          (f[0].nodeType && f[0].style && !f.nodeType))
                        ? (g.splice(e--, 1),
                          (this._targets = g = g.concat(l(f))))
                        : ((this._siblings[e] = U(f, this, !1)),
                          1 === i &&
                            this._siblings[e].length > 1 &&
                            W(f, this, null, 1, this._siblings[e]))
                      : "string" == typeof (f = g[e--] = F.selector(f)) &&
                        g.splice(e + 1, 1)
                    : g.splice(e--, 1)
            else
              (this._propLookup = {}),
                (this._siblings = U(b, this, !1)),
                1 === i &&
                  this._siblings.length > 1 &&
                  W(b, this, null, 1, this._siblings)
            ;(this.vars.immediateRender ||
              (0 === c &&
                0 === this._delay &&
                !1 !== this.vars.immediateRender)) &&
              ((this._time = -k), this.render(-this._delay))
          },
          !0
        ),
        G = function (b) {
          return (
            b &&
            b.length &&
            b !== a &&
            b[0] &&
            (b[0] === a || (b[0].nodeType && b[0].style && !b.nodeType))
          )
        },
        H = function (a, b) {
          var c,
            d = {}
          for (c in a)
            O[c] ||
              (c in b &&
                "transform" !== c &&
                "x" !== c &&
                "y" !== c &&
                "width" !== c &&
                "height" !== c &&
                "className" !== c &&
                "border" !== c) ||
              !(!L[c] || (L[c] && L[c]._autoCSS)) ||
              ((d[c] = a[c]), delete a[c])
          a.css = d
        }
      ;(f = F.prototype = new C()),
        (f.constructor = F),
        (f.kill()._gc = !1),
        (f.ratio = 0),
        (f._firstPT = f._targets = f._overwrittenProps = f._startAt = null),
        (f._notifyPluginsOfEnabled = f._lazy = !1),
        (F.version = "1.17.0"),
        (F.defaultEase = f._ease = new u(null, null, 1, 1)),
        (F.defaultOverwrite = "auto"),
        (F.ticker = g),
        (F.autoSleep = 120),
        (F.lagSmoothing = function (a, b) {
          g.lagSmoothing(a, b)
        }),
        (F.selector =
          a.$ ||
          a.jQuery ||
          function (b) {
            var c = a.$ || a.jQuery
            return c
              ? ((F.selector = c), c(b))
              : "undefined" == typeof document
              ? b
              : document.querySelectorAll
              ? document.querySelectorAll(b)
              : document.getElementById("#" === b.charAt(0) ? b.substr(1) : b)
          })
      var I = [],
        J = {},
        K = (F._internals = { isArray: n, isSelector: G, lazyTweens: I }),
        L = (F._plugins = {}),
        M = (K.tweenLookup = {}),
        N = 0,
        O = (K.reservedProps = {
          ease: 1,
          delay: 1,
          overwrite: 1,
          onComplete: 1,
          onCompleteParams: 1,
          onCompleteScope: 1,
          useFrames: 1,
          runBackwards: 1,
          startAt: 1,
          onUpdate: 1,
          onUpdateParams: 1,
          onUpdateScope: 1,
          onStart: 1,
          onStartParams: 1,
          onStartScope: 1,
          onReverseComplete: 1,
          onReverseCompleteParams: 1,
          onReverseCompleteScope: 1,
          onRepeat: 1,
          onRepeatParams: 1,
          onRepeatScope: 1,
          easeParams: 1,
          yoyo: 1,
          immediateRender: 1,
          repeat: 1,
          repeatDelay: 1,
          data: 1,
          paused: 1,
          reversed: 1,
          autoCSS: 1,
          lazy: 1,
          onOverwrite: 1,
          callbackScope: 1,
        }),
        P = {
          none: 0,
          all: 1,
          auto: 2,
          concurrent: 3,
          allOnStart: 4,
          preexisting: 5,
          true: 1,
          false: 0,
        },
        Q = (C._rootFramesTimeline = new E()),
        R = (C._rootTimeline = new E()),
        S = 30,
        T = (K.lazyRender = function () {
          var a,
            b = I.length
          for (J = {}; --b > -1; )
            (a = I[b]) &&
              !1 !== a._lazy &&
              (a.render(a._lazy[0], a._lazy[1], !0), (a._lazy = !1))
          I.length = 0
        })
      ;(R._startTime = g.time),
        (Q._startTime = g.frame),
        (R._active = Q._active = !0),
        setTimeout(T, 1),
        (C._updateRoot = F.render = function () {
          var a, b, c
          if (
            (I.length && T(),
            R.render((g.time - R._startTime) * R._timeScale, !1, !1),
            Q.render((g.frame - Q._startTime) * Q._timeScale, !1, !1),
            I.length && T(),
            g.frame >= S)
          ) {
            S = g.frame + (parseInt(F.autoSleep, 10) || 120)
            for (c in M) {
              for (b = M[c].tweens, a = b.length; --a > -1; )
                b[a]._gc && b.splice(a, 1)
              0 === b.length && delete M[c]
            }
            if (
              (!(c = R._first) || c._paused) &&
              F.autoSleep &&
              !Q._first &&
              1 === g._listeners.tick.length
            ) {
              for (; c && c._paused; ) c = c._next
              c || g.sleep()
            }
          }
        }),
        g.addEventListener("tick", C._updateRoot)
      var U = function (a, b, c) {
          var d,
            e,
            f = a._gsTweenID
          if (
            (M[f || (a._gsTweenID = f = "t" + N++)] ||
              (M[f] = { target: a, tweens: [] }),
            b && ((d = M[f].tweens), (d[(e = d.length)] = b), c))
          )
            for (; --e > -1; ) d[e] === b && d.splice(e, 1)
          return M[f].tweens
        },
        V = function (a, b, c, d) {
          var e,
            f,
            g = a.vars.onOverwrite
          return (
            g && (e = g(a, b, c, d)),
            (g = F.onOverwrite),
            g && (f = g(a, b, c, d)),
            !1 !== e && !1 !== f
          )
        },
        W = function (a, b, c, d, e) {
          var f, g, h, i
          if (1 === d || d >= 4) {
            for (i = e.length, f = 0; f < i; f++)
              if ((h = e[f]) !== b) h._gc || (h._kill(null, a, b) && (g = !0))
              else if (5 === d) break
            return g
          }
          var j,
            l = b._startTime + k,
            m = [],
            n = 0,
            o = 0 === b._duration
          for (f = e.length; --f > -1; )
            (h = e[f]) === b ||
              h._gc ||
              h._paused ||
              (h._timeline !== b._timeline
                ? ((j = j || X(b, 0, o)), 0 === X(h, j, o) && (m[n++] = h))
                : h._startTime <= l &&
                  h._startTime + h.totalDuration() / h._timeScale > l &&
                  (((o || !h._initted) && l - h._startTime <= 2e-10) ||
                    (m[n++] = h)))
          for (f = n; --f > -1; )
            if (
              ((h = m[f]),
              2 === d && h._kill(c, a, b) && (g = !0),
              2 !== d || (!h._firstPT && h._initted))
            ) {
              if (2 !== d && !V(h, b)) continue
              h._enabled(!1, !1) && (g = !0)
            }
          return g
        },
        X = function (a, b, c) {
          for (
            var d = a._timeline, e = d._timeScale, f = a._startTime;
            d._timeline;

          ) {
            if (((f += d._startTime), (e *= d._timeScale), d._paused))
              return -100
            d = d._timeline
          }
          return (
            (f /= e),
            f > b
              ? f - b
              : (c && f === b) || (!a._initted && f - b < 2 * k)
              ? k
              : (f += a.totalDuration() / a._timeScale / e) > b + k
              ? 0
              : f - b - k
          )
        }
      ;(f._init = function () {
        var a,
          b,
          c,
          d,
          e,
          f = this.vars,
          g = this._overwrittenProps,
          h = this._duration,
          i = !!f.immediateRender,
          j = f.ease
        if (f.startAt) {
          this._startAt && (this._startAt.render(-1, !0), this._startAt.kill()),
            (e = {})
          for (d in f.startAt) e[d] = f.startAt[d]
          if (
            ((e.overwrite = !1),
            (e.immediateRender = !0),
            (e.lazy = i && !1 !== f.lazy),
            (e.startAt = e.delay = null),
            (this._startAt = F.to(this.target, 0, e)),
            i)
          )
            if (this._time > 0) this._startAt = null
            else if (0 !== h) return
        } else if (f.runBackwards && 0 !== h)
          if (this._startAt)
            this._startAt.render(-1, !0),
              this._startAt.kill(),
              (this._startAt = null)
          else {
            0 !== this._time && (i = !1), (c = {})
            for (d in f) (O[d] && "autoCSS" !== d) || (c[d] = f[d])
            if (
              ((c.overwrite = 0),
              (c.data = "isFromStart"),
              (c.lazy = i && !1 !== f.lazy),
              (c.immediateRender = i),
              (this._startAt = F.to(this.target, 0, c)),
              i)
            ) {
              if (0 === this._time) return
            } else
              this._startAt._init(),
                this._startAt._enabled(!1),
                this.vars.immediateRender && (this._startAt = null)
          }
        if (
          ((this._ease = j = j
            ? j instanceof u
              ? j
              : "function" == typeof j
              ? new u(j, f.easeParams)
              : v[j] || F.defaultEase
            : F.defaultEase),
          f.easeParams instanceof Array &&
            j.config &&
            (this._ease = j.config.apply(j, f.easeParams)),
          (this._easeType = this._ease._type),
          (this._easePower = this._ease._power),
          (this._firstPT = null),
          this._targets)
        )
          for (a = this._targets.length; --a > -1; )
            this._initProps(
              this._targets[a],
              (this._propLookup[a] = {}),
              this._siblings[a],
              g ? g[a] : null
            ) && (b = !0)
        else
          b = this._initProps(this.target, this._propLookup, this._siblings, g)
        if (
          (b && F._onPluginEvent("_onInitAllProps", this),
          g &&
            (this._firstPT ||
              ("function" != typeof this.target && this._enabled(!1, !1))),
          f.runBackwards)
        )
          for (c = this._firstPT; c; ) (c.s += c.c), (c.c = -c.c), (c = c._next)
        ;(this._onUpdate = f.onUpdate), (this._initted = !0)
      }),
        (f._initProps = function (b, c, d, e) {
          var f, g, h, i, j, k
          if (null == b) return !1
          J[b._gsTweenID] && T(),
            this.vars.css ||
              (b.style &&
                b !== a &&
                b.nodeType &&
                L.css &&
                !1 !== this.vars.autoCSS &&
                H(this.vars, b))
          for (f in this.vars) {
            if (((k = this.vars[f]), O[f]))
              k &&
                (k instanceof Array || (k.push && n(k))) &&
                -1 !== k.join("").indexOf("{self}") &&
                (this.vars[f] = k = this._swapSelfInParams(k, this))
            else if (
              L[f] &&
              (i = new L[f]())._onInitTween(b, this.vars[f], this)
            ) {
              for (
                this._firstPT = j = {
                  _next: this._firstPT,
                  t: i,
                  p: "setRatio",
                  s: 0,
                  c: 1,
                  f: !0,
                  n: f,
                  pg: !0,
                  pr: i._priority,
                },
                  g = i._overwriteProps.length;
                --g > -1;

              )
                c[i._overwriteProps[g]] = this._firstPT
              ;(i._priority || i._onInitAllProps) && (h = !0),
                (i._onDisable || i._onEnable) &&
                  (this._notifyPluginsOfEnabled = !0)
            } else
              (this._firstPT = c[f] = j = {
                _next: this._firstPT,
                t: b,
                p: f,
                f: "function" == typeof b[f],
                n: f,
                pg: !1,
                pr: 0,
              }),
                (j.s = j.f
                  ? b[
                      f.indexOf("set") ||
                      "function" != typeof b["get" + f.substr(3)]
                        ? f
                        : "get" + f.substr(3)
                    ]()
                  : parseFloat(b[f])),
                (j.c =
                  "string" == typeof k && "=" === k.charAt(1)
                    ? parseInt(k.charAt(0) + "1", 10) * Number(k.substr(2))
                    : Number(k) - j.s || 0)
            j && j._next && (j._next._prev = j)
          }
          return e && this._kill(e, b)
            ? this._initProps(b, c, d, e)
            : this._overwrite > 1 &&
              this._firstPT &&
              d.length > 1 &&
              W(b, this, c, this._overwrite, d)
            ? (this._kill(c, b), this._initProps(b, c, d, e))
            : (this._firstPT &&
                ((!1 !== this.vars.lazy && this._duration) ||
                  (this.vars.lazy && !this._duration)) &&
                (J[b._gsTweenID] = !0),
              h)
        }),
        (f.render = function (a, b, c) {
          var d,
            e,
            f,
            g,
            h = this._time,
            i = this._duration,
            j = this._rawPrevTime
          if (a >= i)
            (this._totalTime = this._time = i),
              (this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1),
              this._reversed ||
                ((d = !0),
                (e = "onComplete"),
                (c = c || this._timeline.autoRemoveChildren)),
              0 === i &&
                (this._initted || !this.vars.lazy || c) &&
                (this._startTime === this._timeline._duration && (a = 0),
                (0 === a || j < 0 || (j === k && "isPause" !== this.data)) &&
                  j !== a &&
                  ((c = !0), j > k && (e = "onReverseComplete")),
                (this._rawPrevTime = g = !b || a || j === a ? a : k))
          else if (a < 1e-7)
            (this._totalTime = this._time = 0),
              (this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0),
              (0 !== h || (0 === i && j > 0)) &&
                ((e = "onReverseComplete"), (d = this._reversed)),
              a < 0 &&
                ((this._active = !1),
                0 === i &&
                  (this._initted || !this.vars.lazy || c) &&
                  (j >= 0 && (j !== k || "isPause" !== this.data) && (c = !0),
                  (this._rawPrevTime = g = !b || a || j === a ? a : k))),
              this._initted || (c = !0)
          else if (((this._totalTime = this._time = a), this._easeType)) {
            var l = a / i,
              m = this._easeType,
              n = this._easePower
            ;(1 === m || (3 === m && l >= 0.5)) && (l = 1 - l),
              3 === m && (l *= 2),
              1 === n
                ? (l *= l)
                : 2 === n
                ? (l *= l * l)
                : 3 === n
                ? (l *= l * l * l)
                : 4 === n && (l *= l * l * l * l),
              (this.ratio =
                1 === m ? 1 - l : 2 === m ? l : a / i < 0.5 ? l / 2 : 1 - l / 2)
          } else this.ratio = this._ease.getRatio(a / i)
          if (this._time !== h || c) {
            if (!this._initted) {
              if ((this._init(), !this._initted || this._gc)) return
              if (
                !c &&
                this._firstPT &&
                ((!1 !== this.vars.lazy && this._duration) ||
                  (this.vars.lazy && !this._duration))
              )
                return (
                  (this._time = this._totalTime = h),
                  (this._rawPrevTime = j),
                  I.push(this),
                  void (this._lazy = [a, b])
                )
              this._time && !d
                ? (this.ratio = this._ease.getRatio(this._time / i))
                : d &&
                  this._ease._calcEnd &&
                  (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
            }
            for (
              !1 !== this._lazy && (this._lazy = !1),
                this._active ||
                  (!this._paused &&
                    this._time !== h &&
                    a >= 0 &&
                    (this._active = !0)),
                0 === h &&
                  (this._startAt &&
                    (a >= 0
                      ? this._startAt.render(a, b, c)
                      : e || (e = "_dummyGS")),
                  this.vars.onStart &&
                    ((0 === this._time && 0 !== i) ||
                      b ||
                      this._callback("onStart"))),
                f = this._firstPT;
              f;

            )
              f.f
                ? f.t[f.p](f.c * this.ratio + f.s)
                : (f.t[f.p] = f.c * this.ratio + f.s),
                (f = f._next)
            this._onUpdate &&
              (a < 0 &&
                this._startAt &&
                -1e-4 !== a &&
                this._startAt.render(a, b, c),
              b || ((this._time !== h || d) && this._callback("onUpdate"))),
              e &&
                ((this._gc && !c) ||
                  (a < 0 &&
                    this._startAt &&
                    !this._onUpdate &&
                    -1e-4 !== a &&
                    this._startAt.render(a, b, c),
                  d &&
                    (this._timeline.autoRemoveChildren && this._enabled(!1, !1),
                    (this._active = !1)),
                  !b && this.vars[e] && this._callback(e),
                  0 === i &&
                    this._rawPrevTime === k &&
                    g !== k &&
                    (this._rawPrevTime = 0)))
          }
        }),
        (f._kill = function (a, b, c) {
          if (
            ("all" === a && (a = null),
            null == a && (null == b || b === this.target))
          )
            return (this._lazy = !1), this._enabled(!1, !1)
          b =
            "string" != typeof b
              ? b || this._targets || this.target
              : F.selector(b) || b
          var d,
            e,
            f,
            g,
            h,
            i,
            j,
            k,
            l,
            m =
              c &&
              this._time &&
              c._startTime === this._startTime &&
              this._timeline === c._timeline
          if ((n(b) || G(b)) && "number" != typeof b[0])
            for (d = b.length; --d > -1; ) this._kill(a, b[d], c) && (i = !0)
          else {
            if (this._targets) {
              for (d = this._targets.length; --d > -1; )
                if (b === this._targets[d]) {
                  ;(h = this._propLookup[d] || {}),
                    (this._overwrittenProps = this._overwrittenProps || []),
                    (e = this._overwrittenProps[d] = a
                      ? this._overwrittenProps[d] || {}
                      : "all")
                  break
                }
            } else {
              if (b !== this.target) return !1
              ;(h = this._propLookup),
                (e = this._overwrittenProps = a
                  ? this._overwrittenProps || {}
                  : "all")
            }
            if (h) {
              if (
                ((j = a || h),
                (k =
                  a !== e &&
                  "all" !== e &&
                  a !== h &&
                  ("object" != typeof a || !a._tempKill)),
                c && (F.onOverwrite || this.vars.onOverwrite))
              ) {
                for (f in j) h[f] && (l || (l = []), l.push(f))
                if ((l || !a) && !V(this, c, b, l)) return !1
              }
              for (f in j)
                (g = h[f]) &&
                  (m && (g.f ? g.t[g.p](g.s) : (g.t[g.p] = g.s), (i = !0)),
                  g.pg && g.t._kill(j) && (i = !0),
                  (g.pg && 0 !== g.t._overwriteProps.length) ||
                    (g._prev
                      ? (g._prev._next = g._next)
                      : g === this._firstPT && (this._firstPT = g._next),
                    g._next && (g._next._prev = g._prev),
                    (g._next = g._prev = null)),
                  delete h[f]),
                  k && (e[f] = 1)
              !this._firstPT && this._initted && this._enabled(!1, !1)
            }
          }
          return i
        }),
        (f.invalidate = function () {
          return (
            this._notifyPluginsOfEnabled &&
              F._onPluginEvent("_onDisable", this),
            (this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null),
            (this._notifyPluginsOfEnabled = this._active = this._lazy = !1),
            (this._propLookup = this._targets ? {} : []),
            C.prototype.invalidate.call(this),
            this.vars.immediateRender &&
              ((this._time = -k), this.render(-this._delay)),
            this
          )
        }),
        (f._enabled = function (a, b) {
          if ((h || g.wake(), a && this._gc)) {
            var c,
              d = this._targets
            if (d)
              for (c = d.length; --c > -1; )
                this._siblings[c] = U(d[c], this, !0)
            else this._siblings = U(this.target, this, !0)
          }
          return (
            C.prototype._enabled.call(this, a, b),
            !(!this._notifyPluginsOfEnabled || !this._firstPT) &&
              F._onPluginEvent(a ? "_onEnable" : "_onDisable", this)
          )
        }),
        (F.to = function (a, b, c) {
          return new F(a, b, c)
        }),
        (F.from = function (a, b, c) {
          return (
            (c.runBackwards = !0),
            (c.immediateRender = 0 != c.immediateRender),
            new F(a, b, c)
          )
        }),
        (F.fromTo = function (a, b, c, d) {
          return (
            (d.startAt = c),
            (d.immediateRender =
              0 != d.immediateRender && 0 != c.immediateRender),
            new F(a, b, d)
          )
        }),
        (F.delayedCall = function (a, b, c, d, e) {
          return new F(b, 0, {
            delay: a,
            onComplete: b,
            onCompleteParams: c,
            callbackScope: d,
            onReverseComplete: b,
            onReverseCompleteParams: c,
            immediateRender: !1,
            lazy: !1,
            useFrames: e,
            overwrite: 0,
          })
        }),
        (F.set = function (a, b) {
          return new F(a, 0, b)
        }),
        (F.getTweensOf = function (a, b) {
          if (null == a) return []
          a = "string" != typeof a ? a : F.selector(a) || a
          var c, d, e, f
          if ((n(a) || G(a)) && "number" != typeof a[0]) {
            for (c = a.length, d = []; --c > -1; )
              d = d.concat(F.getTweensOf(a[c], b))
            for (c = d.length; --c > -1; )
              for (f = d[c], e = c; --e > -1; ) f === d[e] && d.splice(c, 1)
          } else
            for (d = U(a).concat(), c = d.length; --c > -1; )
              (d[c]._gc || (b && !d[c].isActive())) && d.splice(c, 1)
          return d
        }),
        (F.killTweensOf = F.killDelayedCallsTo = function (a, b, c) {
          "object" == typeof b && ((c = b), (b = !1))
          for (var d = F.getTweensOf(a, b), e = d.length; --e > -1; )
            d[e]._kill(c, a)
        })
      var Y = r(
        "plugins.TweenPlugin",
        function (a, b) {
          ;(this._overwriteProps = (a || "").split(",")),
            (this._propName = this._overwriteProps[0]),
            (this._priority = b || 0),
            (this._super = Y.prototype)
        },
        !0
      )
      if (
        ((f = Y.prototype),
        (Y.version = "1.10.1"),
        (Y.API = 2),
        (f._firstPT = null),
        (f._addTween = function (a, b, c, d, e, f) {
          var g, h
          if (
            null != d &&
            (g =
              "number" == typeof d || "=" !== d.charAt(1)
                ? Number(d) - Number(c)
                : parseInt(d.charAt(0) + "1", 10) * Number(d.substr(2)))
          )
            return (
              (this._firstPT = h = {
                _next: this._firstPT,
                t: a,
                p: b,
                s: c,
                c: g,
                f: "function" == typeof a[b],
                n: e || b,
                r: f,
              }),
              h._next && (h._next._prev = h),
              h
            )
        }),
        (f.setRatio = function (a) {
          for (var b, c = this._firstPT; c; )
            (b = c.c * a + c.s),
              c.r ? (b = Math.round(b)) : b < 1e-6 && b > -1e-6 && (b = 0),
              c.f ? c.t[c.p](b) : (c.t[c.p] = b),
              (c = c._next)
        }),
        (f._kill = function (a) {
          var b,
            c = this._overwriteProps,
            d = this._firstPT
          if (null != a[this._propName]) this._overwriteProps = []
          else for (b = c.length; --b > -1; ) null != a[c[b]] && c.splice(b, 1)
          for (; d; )
            null != a[d.n] &&
              (d._next && (d._next._prev = d._prev),
              d._prev
                ? ((d._prev._next = d._next), (d._prev = null))
                : this._firstPT === d && (this._firstPT = d._next)),
              (d = d._next)
          return !1
        }),
        (f._roundProps = function (a, b) {
          for (var c = this._firstPT; c; )
            (a[this._propName] ||
              (null != c.n && a[c.n.split(this._propName + "_").join("")])) &&
              (c.r = b),
              (c = c._next)
        }),
        (F._onPluginEvent = function (a, b) {
          var c,
            d,
            e,
            f,
            g,
            h = b._firstPT
          if ("_onInitAllProps" === a) {
            for (; h; ) {
              for (g = h._next, d = e; d && d.pr > h.pr; ) d = d._next
              ;(h._prev = d ? d._prev : f) ? (h._prev._next = h) : (e = h),
                (h._next = d) ? (d._prev = h) : (f = h),
                (h = g)
            }
            h = b._firstPT = e
          }
          for (; h; )
            h.pg && "function" == typeof h.t[a] && h.t[a]() && (c = !0),
              (h = h._next)
          return c
        }),
        (Y.activate = function (a) {
          for (var b = a.length; --b > -1; )
            a[b].API === Y.API && (L[new a[b]()._propName] = a[b])
          return !0
        }),
        (q.plugin = function (a) {
          if (!(a && a.propName && a.init && a.API))
            throw "illegal plugin definition."
          var b,
            c = a.propName,
            d = a.priority || 0,
            e = a.overwriteProps,
            f = {
              init: "_onInitTween",
              set: "setRatio",
              kill: "_kill",
              round: "_roundProps",
              initAll: "_onInitAllProps",
            },
            g = r(
              "plugins." + c.charAt(0).toUpperCase() + c.substr(1) + "Plugin",
              function () {
                Y.call(this, c, d), (this._overwriteProps = e || [])
              },
              !0 === a.global
            ),
            h = (g.prototype = new Y(c))
          ;(h.constructor = g), (g.API = a.API)
          for (b in f) "function" == typeof a[b] && (h[f[b]] = a[b])
          return (g.version = a.version), Y.activate([g]), g
        }),
        (d = a._gsQueue))
      ) {
        for (e = 0; e < d.length; e++) d[e]()
        for (f in o)
          o[f].func ||
            a.console.log(
              "GSAP encountered missing dependency: com.greensock." + f
            )
      }
      h = !1
    }
  })(
    "undefined" != typeof module &&
      module.exports &&
      "undefined" != typeof global
      ? global
      : this || window
  ),
  function () {
    function a() {}
    function b(a, b) {
      for (var c = a.length; c--; ) if (a[c].listener === b) return c
      return -1
    }
    function c(a) {
      return function () {
        return this[a].apply(this, arguments)
      }
    }
    var d = a.prototype,
      e = this,
      f = e.EventEmitter
    ;(d.getListeners = function (a) {
      var b,
        c,
        d = this._getEvents()
      if ("object" == typeof a) {
        b = {}
        for (c in d) d.hasOwnProperty(c) && a.test(c) && (b[c] = d[c])
      } else b = d[a] || (d[a] = [])
      return b
    }),
      (d.flattenListeners = function (a) {
        var b,
          c = []
        for (b = 0; a.length > b; b += 1) c.push(a[b].listener)
        return c
      }),
      (d.getListenersAsObject = function (a) {
        var b,
          c = this.getListeners(a)
        return c instanceof Array && ((b = {}), (b[a] = c)), b || c
      }),
      (d.addListener = function (a, c) {
        var d,
          e = this.getListenersAsObject(a),
          f = "object" == typeof c
        for (d in e)
          e.hasOwnProperty(d) &&
            -1 === b(e[d], c) &&
            e[d].push(f ? c : { listener: c, once: !1 })
        return this
      }),
      (d.on = c("addListener")),
      (d.addOnceListener = function (a, b) {
        return this.addListener(a, { listener: b, once: !0 })
      }),
      (d.once = c("addOnceListener")),
      (d.defineEvent = function (a) {
        return this.getListeners(a), this
      }),
      (d.defineEvents = function (a) {
        for (var b = 0; a.length > b; b += 1) this.defineEvent(a[b])
        return this
      }),
      (d.removeListener = function (a, c) {
        var d,
          e,
          f = this.getListenersAsObject(a)
        for (e in f)
          f.hasOwnProperty(e) && -1 !== (d = b(f[e], c)) && f[e].splice(d, 1)
        return this
      }),
      (d.off = c("removeListener")),
      (d.addListeners = function (a, b) {
        return this.manipulateListeners(!1, a, b)
      }),
      (d.removeListeners = function (a, b) {
        return this.manipulateListeners(!0, a, b)
      }),
      (d.manipulateListeners = function (a, b, c) {
        var d,
          e,
          f = a ? this.removeListener : this.addListener,
          g = a ? this.removeListeners : this.addListeners
        if ("object" != typeof b || b instanceof RegExp)
          for (d = c.length; d--; ) f.call(this, b, c[d])
        else
          for (d in b)
            b.hasOwnProperty(d) &&
              (e = b[d]) &&
              ("function" == typeof e ? f.call(this, d, e) : g.call(this, d, e))
        return this
      }),
      (d.removeEvent = function (a) {
        var b,
          c = typeof a,
          d = this._getEvents()
        if ("string" === c) delete d[a]
        else if ("object" === c)
          for (b in d) d.hasOwnProperty(b) && a.test(b) && delete d[b]
        else delete this._events
        return this
      }),
      (d.removeAllListeners = c("removeEvent")),
      (d.emitEvent = function (a, b) {
        var c,
          d,
          e,
          f = this.getListenersAsObject(a)
        for (e in f)
          if (f.hasOwnProperty(e))
            for (d = f[e].length; d--; )
              (c = f[e][d]),
                !0 === c.once && this.removeListener(a, c.listener),
                c.listener.apply(this, b || []) ===
                  this._getOnceReturnValue() &&
                  this.removeListener(a, c.listener)
        return this
      }),
      (d.trigger = c("emitEvent")),
      (d.emit = function (a) {
        var b = Array.prototype.slice.call(arguments, 1)
        return this.emitEvent(a, b)
      }),
      (d.setOnceReturnValue = function (a) {
        return (this._onceReturnValue = a), this
      }),
      (d._getOnceReturnValue = function () {
        return !this.hasOwnProperty("_onceReturnValue") || this._onceReturnValue
      }),
      (d._getEvents = function () {
        return this._events || (this._events = {})
      }),
      (a.noConflict = function () {
        return (e.EventEmitter = f), a
      }),
      "function" == typeof define && define.amd
        ? define("eventEmitter/EventEmitter", [], function () {
            return a
          })
        : "object" == typeof module && module.exports
        ? (module.exports = a)
        : (this.EventEmitter = a)
  }.call(this),
  (function (a) {
    function b(b) {
      var c = a.event
      return (c.target = c.target || c.srcElement || b), c
    }
    var c = document.documentElement,
      d = function () {}
    c.addEventListener
      ? (d = function (a, b, c) {
          a.addEventListener(b, c, !1)
        })
      : c.attachEvent &&
        (d = function (a, c, d) {
          ;(a[c + d] = d.handleEvent
            ? function () {
                var c = b(a)
                d.handleEvent.call(d, c)
              }
            : function () {
                var c = b(a)
                d.call(a, c)
              }),
            a.attachEvent("on" + c, a[c + d])
        })
    var e = function () {}
    c.removeEventListener
      ? (e = function (a, b, c) {
          a.removeEventListener(b, c, !1)
        })
      : c.detachEvent &&
        (e = function (a, b, c) {
          a.detachEvent("on" + b, a[b + c])
          try {
            delete a[b + c]
          } catch (d) {
            a[b + c] = void 0
          }
        })
    var f = { bind: d, unbind: e }
    "function" == typeof define && define.amd
      ? define("eventie/eventie", f)
      : (a.eventie = f)
  })(this),
  (function (a, b) {
    "function" == typeof define && define.amd
      ? define(["eventEmitter/EventEmitter", "eventie/eventie"], function (
          c,
          d
        ) {
          return b(a, c, d)
        })
      : "object" == typeof exports
      ? (module.exports = b(
          a,
          require("wolfy87-eventemitter"),
          require("eventie")
        ))
      : (a.imagesLoaded = b(a, a.EventEmitter, a.eventie))
  })(window, function (a, b, c) {
    function d(a, b) {
      for (var c in b) a[c] = b[c]
      return a
    }
    function e(a) {
      return "[object Array]" === m.call(a)
    }
    function f(a) {
      var b = []
      if (e(a)) b = a
      else if ("number" == typeof a.length)
        for (var c = 0, d = a.length; d > c; c++) b.push(a[c])
      else b.push(a)
      return b
    }
    function g(a, b, c) {
      if (!(this instanceof g)) return new g(a, b)
      "string" == typeof a && (a = document.querySelectorAll(a)),
        (this.elements = f(a)),
        (this.options = d({}, this.options)),
        "function" == typeof b ? (c = b) : d(this.options, b),
        c && this.on("always", c),
        this.getImages(),
        j && (this.jqDeferred = new j.Deferred())
      var e = this
      setTimeout(function () {
        e.check()
      })
    }
    function h(a) {
      this.img = a
    }
    function i(a) {
      ;(this.src = a), (n[a] = this)
    }
    var j = a.jQuery,
      k = a.console,
      l = void 0 !== k,
      m = Object.prototype.toString
    ;(g.prototype = new b()),
      (g.prototype.options = {}),
      (g.prototype.getImages = function () {
        this.images = []
        for (var a = 0, b = this.elements.length; b > a; a++) {
          var c = this.elements[a]
          "IMG" === c.nodeName && this.addImage(c)
          var d = c.nodeType
          if (d && (1 === d || 9 === d || 11 === d))
            for (
              var e = c.querySelectorAll("img"), f = 0, g = e.length;
              g > f;
              f++
            ) {
              var h = e[f]
              this.addImage(h)
            }
        }
      }),
      (g.prototype.addImage = function (a) {
        var b = new h(a)
        this.images.push(b)
      }),
      (g.prototype.check = function () {
        function a(a, e) {
          return (
            b.options.debug && l && k.log("confirm", a, e),
            b.progress(a),
            c++,
            c === d && b.complete(),
            !0
          )
        }
        var b = this,
          c = 0,
          d = this.images.length
        if (((this.hasAnyBroken = !1), !d)) return void this.complete()
        for (var e = 0; d > e; e++) {
          var f = this.images[e]
          f.on("confirm", a), f.check()
        }
      }),
      (g.prototype.progress = function (a) {
        this.hasAnyBroken = this.hasAnyBroken || !a.isLoaded
        var b = this
        setTimeout(function () {
          b.emit("progress", b, a),
            b.jqDeferred && b.jqDeferred.notify && b.jqDeferred.notify(b, a)
        })
      }),
      (g.prototype.complete = function () {
        var a = this.hasAnyBroken ? "fail" : "done"
        this.isComplete = !0
        var b = this
        setTimeout(function () {
          if ((b.emit(a, b), b.emit("always", b), b.jqDeferred)) {
            var c = b.hasAnyBroken ? "reject" : "resolve"
            b.jqDeferred[c](b)
          }
        })
      }),
      j &&
        (j.fn.imagesLoaded = function (a, b) {
          return new g(this, a, b).jqDeferred.promise(j(this))
        }),
      (h.prototype = new b()),
      (h.prototype.check = function () {
        var a = n[this.img.src] || new i(this.img.src)
        if (a.isConfirmed)
          return void this.confirm(a.isLoaded, "cached was confirmed")
        if (this.img.complete && void 0 !== this.img.naturalWidth)
          return void this.confirm(0 !== this.img.naturalWidth, "naturalWidth")
        var b = this
        a.on("confirm", function (a, c) {
          return b.confirm(a.isLoaded, c), !0
        }),
          a.check()
      }),
      (h.prototype.confirm = function (a, b) {
        ;(this.isLoaded = a), this.emit("confirm", this, b)
      })
    var n = {}
    return (
      (i.prototype = new b()),
      (i.prototype.check = function () {
        if (!this.isChecked) {
          var a = new Image()
          c.bind(a, "load", this),
            c.bind(a, "error", this),
            (a.src = this.src),
            (this.isChecked = !0)
        }
      }),
      (i.prototype.handleEvent = function (a) {
        var b = "on" + a.type
        this[b] && this[b](a)
      }),
      (i.prototype.onload = function (a) {
        this.confirm(!0, "onload"), this.unbindProxyEvents(a)
      }),
      (i.prototype.onerror = function (a) {
        this.confirm(!1, "onerror"), this.unbindProxyEvents(a)
      }),
      (i.prototype.confirm = function (a, b) {
        ;(this.isConfirmed = !0),
          (this.isLoaded = a),
          this.emit("confirm", this, b)
      }),
      (i.prototype.unbindProxyEvents = function (a) {
        c.unbind(a.target, "load", this), c.unbind(a.target, "error", this)
      }),
      g
    )
  }),
  (function (a) {
    function b() {}
    function c(a) {
      function c(b) {
        b.prototype.option ||
          (b.prototype.option = function (b) {
            a.isPlainObject(b) && (this.options = a.extend(!0, this.options, b))
          })
      }
      function e(b, c) {
        a.fn[b] = function (e) {
          if ("string" == typeof e) {
            for (
              var g = d.call(arguments, 1), h = 0, i = this.length;
              i > h;
              h++
            ) {
              var j = this[h],
                k = a.data(j, b)
              if (k)
                if (a.isFunction(k[e]) && "_" !== e.charAt(0)) {
                  var l = k[e].apply(k, g)
                  if (void 0 !== l) return l
                } else f("no such method '" + e + "' for " + b + " instance")
              else
                f(
                  "cannot call methods on " +
                    b +
                    " prior to initialization; attempted to call '" +
                    e +
                    "'"
                )
            }
            return this
          }
          return this.each(function () {
            var d = a.data(this, b)
            d
              ? (d.option(e), d._init())
              : ((d = new c(this, e)), a.data(this, b, d))
          })
        }
      }
      if (a) {
        var f =
          "undefined" == typeof console
            ? b
            : function (a) {
                console.error(a)
              }
        return (
          (a.bridget = function (a, b) {
            c(b), e(a, b)
          }),
          a.bridget
        )
      }
    }
    var d = Array.prototype.slice
    "function" == typeof define && define.amd
      ? define("jquery-bridget/jquery.bridget", ["jquery"], c)
      : c("object" == typeof exports ? require("jquery") : a.jQuery)
  })(window),
  (function (a) {
    function b(b) {
      var c = a.event
      return (c.target = c.target || c.srcElement || b), c
    }
    var c = document.documentElement,
      d = function () {}
    c.addEventListener
      ? (d = function (a, b, c) {
          a.addEventListener(b, c, !1)
        })
      : c.attachEvent &&
        (d = function (a, c, d) {
          ;(a[c + d] = d.handleEvent
            ? function () {
                var c = b(a)
                d.handleEvent.call(d, c)
              }
            : function () {
                var c = b(a)
                d.call(a, c)
              }),
            a.attachEvent("on" + c, a[c + d])
        })
    var e = function () {}
    c.removeEventListener
      ? (e = function (a, b, c) {
          a.removeEventListener(b, c, !1)
        })
      : c.detachEvent &&
        (e = function (a, b, c) {
          a.detachEvent("on" + b, a[b + c])
          try {
            delete a[b + c]
          } catch (d) {
            a[b + c] = void 0
          }
        })
    var f = { bind: d, unbind: e }
    "function" == typeof define && define.amd
      ? define("eventie/eventie", f)
      : "object" == typeof exports
      ? (module.exports = f)
      : (a.eventie = f)
  })(window),
  function () {
    "use strict"
    function a() {}
    function b(a, b) {
      for (var c = a.length; c--; ) if (a[c].listener === b) return c
      return -1
    }
    function c(a) {
      return function () {
        return this[a].apply(this, arguments)
      }
    }
    var d = a.prototype,
      e = this,
      f = e.EventEmitter
    ;(d.getListeners = function (a) {
      var b,
        c,
        d = this._getEvents()
      if (a instanceof RegExp) {
        b = {}
        for (c in d) d.hasOwnProperty(c) && a.test(c) && (b[c] = d[c])
      } else b = d[a] || (d[a] = [])
      return b
    }),
      (d.flattenListeners = function (a) {
        var b,
          c = []
        for (b = 0; b < a.length; b += 1) c.push(a[b].listener)
        return c
      }),
      (d.getListenersAsObject = function (a) {
        var b,
          c = this.getListeners(a)
        return c instanceof Array && ((b = {}), (b[a] = c)), b || c
      }),
      (d.addListener = function (a, c) {
        var d,
          e = this.getListenersAsObject(a),
          f = "object" == typeof c
        for (d in e)
          e.hasOwnProperty(d) &&
            -1 === b(e[d], c) &&
            e[d].push(f ? c : { listener: c, once: !1 })
        return this
      }),
      (d.on = c("addListener")),
      (d.addOnceListener = function (a, b) {
        return this.addListener(a, { listener: b, once: !0 })
      }),
      (d.once = c("addOnceListener")),
      (d.defineEvent = function (a) {
        return this.getListeners(a), this
      }),
      (d.defineEvents = function (a) {
        for (var b = 0; b < a.length; b += 1) this.defineEvent(a[b])
        return this
      }),
      (d.removeListener = function (a, c) {
        var d,
          e,
          f = this.getListenersAsObject(a)
        for (e in f)
          f.hasOwnProperty(e) && -1 !== (d = b(f[e], c)) && f[e].splice(d, 1)
        return this
      }),
      (d.off = c("removeListener")),
      (d.addListeners = function (a, b) {
        return this.manipulateListeners(!1, a, b)
      }),
      (d.removeListeners = function (a, b) {
        return this.manipulateListeners(!0, a, b)
      }),
      (d.manipulateListeners = function (a, b, c) {
        var d,
          e,
          f = a ? this.removeListener : this.addListener,
          g = a ? this.removeListeners : this.addListeners
        if ("object" != typeof b || b instanceof RegExp)
          for (d = c.length; d--; ) f.call(this, b, c[d])
        else
          for (d in b)
            b.hasOwnProperty(d) &&
              (e = b[d]) &&
              ("function" == typeof e ? f.call(this, d, e) : g.call(this, d, e))
        return this
      }),
      (d.removeEvent = function (a) {
        var b,
          c = typeof a,
          d = this._getEvents()
        if ("string" === c) delete d[a]
        else if (a instanceof RegExp)
          for (b in d) d.hasOwnProperty(b) && a.test(b) && delete d[b]
        else delete this._events
        return this
      }),
      (d.removeAllListeners = c("removeEvent")),
      (d.emitEvent = function (a, b) {
        var c,
          d,
          e,
          f = this.getListenersAsObject(a)
        for (e in f)
          if (f.hasOwnProperty(e))
            for (d = f[e].length; d--; )
              (c = f[e][d]),
                !0 === c.once && this.removeListener(a, c.listener),
                c.listener.apply(this, b || []) ===
                  this._getOnceReturnValue() &&
                  this.removeListener(a, c.listener)
        return this
      }),
      (d.trigger = c("emitEvent")),
      (d.emit = function (a) {
        var b = Array.prototype.slice.call(arguments, 1)
        return this.emitEvent(a, b)
      }),
      (d.setOnceReturnValue = function (a) {
        return (this._onceReturnValue = a), this
      }),
      (d._getOnceReturnValue = function () {
        return !this.hasOwnProperty("_onceReturnValue") || this._onceReturnValue
      }),
      (d._getEvents = function () {
        return this._events || (this._events = {})
      }),
      (a.noConflict = function () {
        return (e.EventEmitter = f), a
      }),
      "function" == typeof define && define.amd
        ? define("eventEmitter/EventEmitter", [], function () {
            return a
          })
        : "object" == typeof module && module.exports
        ? (module.exports = a)
        : (e.EventEmitter = a)
  }.call(this),
  (function (a) {
    function b(a) {
      if (a) {
        if ("string" == typeof d[a]) return a
        a = a.charAt(0).toUpperCase() + a.slice(1)
        for (var b, e = 0, f = c.length; f > e; e++)
          if (((b = c[e] + a), "string" == typeof d[b])) return b
      }
    }
    var c = "Webkit Moz ms Ms O".split(" "),
      d = document.documentElement.style
    "function" == typeof define && define.amd
      ? define("get-style-property/get-style-property", [], function () {
          return b
        })
      : "object" == typeof exports
      ? (module.exports = b)
      : (a.getStyleProperty = b)
  })(window),
  (function (a, b) {
    function c(a) {
      var b = parseFloat(a)
      return -1 === a.indexOf("%") && !isNaN(b) && b
    }
    function d() {}
    function e() {
      for (
        var a = {
            width: 0,
            height: 0,
            innerWidth: 0,
            innerHeight: 0,
            outerWidth: 0,
            outerHeight: 0,
          },
          b = 0,
          c = h.length;
        c > b;
        b++
      ) {
        a[h[b]] = 0
      }
      return a
    }
    function f(b) {
      function d() {
        if (!m) {
          m = !0
          var d = a.getComputedStyle
          if (
            ((j = (function () {
              var a = d
                ? function (a) {
                    return d(a, null)
                  }
                : function (a) {
                    return a.currentStyle
                  }
              return function (b) {
                var c = a(b)
                return (
                  c ||
                    g(
                      "Style returned " +
                        c +
                        ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"
                    ),
                  c
                )
              }
            })()),
            (k = b("boxSizing")))
          ) {
            var e = document.createElement("div")
            ;(e.style.width = "200px"),
              (e.style.padding = "1px 2px 3px 4px"),
              (e.style.borderStyle = "solid"),
              (e.style.borderWidth = "1px 2px 3px 4px"),
              (e.style[k] = "border-box")
            var f = document.body || document.documentElement
            f.appendChild(e)
            var h = j(e)
            ;(l = 200 === c(h.width)), f.removeChild(e)
          }
        }
      }
      function f(a) {
        if (
          (d(),
          "string" == typeof a && (a = document.querySelector(a)),
          a && "object" == typeof a && a.nodeType)
        ) {
          var b = j(a)
          if ("none" === b.display) return e()
          var f = {}
          ;(f.width = a.offsetWidth), (f.height = a.offsetHeight)
          for (
            var g = (f.isBorderBox = !(!k || !b[k] || "border-box" !== b[k])),
              m = 0,
              n = h.length;
            n > m;
            m++
          ) {
            var o = h[m],
              p = b[o]
            p = i(a, p)
            var q = parseFloat(p)
            f[o] = isNaN(q) ? 0 : q
          }
          var r = f.paddingLeft + f.paddingRight,
            s = f.paddingTop + f.paddingBottom,
            t = f.marginLeft + f.marginRight,
            u = f.marginTop + f.marginBottom,
            v = f.borderLeftWidth + f.borderRightWidth,
            w = f.borderTopWidth + f.borderBottomWidth,
            x = g && l,
            y = c(b.width)
          !1 !== y && (f.width = y + (x ? 0 : r + v))
          var z = c(b.height)
          return (
            !1 !== z && (f.height = z + (x ? 0 : s + w)),
            (f.innerWidth = f.width - (r + v)),
            (f.innerHeight = f.height - (s + w)),
            (f.outerWidth = f.width + t),
            (f.outerHeight = f.height + u),
            f
          )
        }
      }
      function i(b, c) {
        if (a.getComputedStyle || -1 === c.indexOf("%")) return c
        var d = b.style,
          e = d.left,
          f = b.runtimeStyle,
          g = f && f.left
        return (
          g && (f.left = b.currentStyle.left),
          (d.left = c),
          (c = d.pixelLeft),
          (d.left = e),
          g && (f.left = g),
          c
        )
      }
      var j,
        k,
        l,
        m = !1
      return f
    }
    var g =
        "undefined" == typeof console
          ? d
          : function (a) {
              console.error(a)
            },
      h = [
        "paddingLeft",
        "paddingRight",
        "paddingTop",
        "paddingBottom",
        "marginLeft",
        "marginRight",
        "marginTop",
        "marginBottom",
        "borderLeftWidth",
        "borderRightWidth",
        "borderTopWidth",
        "borderBottomWidth",
      ]
    "function" == typeof define && define.amd
      ? define("get-size/get-size", [
          "get-style-property/get-style-property",
        ], f)
      : "object" == typeof exports
      ? (module.exports = f(require("desandro-get-style-property")))
      : (a.getSize = f(a.getStyleProperty))
  })(window),
  (function (a) {
    function b(a) {
      "function" == typeof a && (b.isReady ? a() : g.push(a))
    }
    function c(a) {
      var c = "readystatechange" === a.type && "complete" !== f.readyState
      b.isReady || c || d()
    }
    function d() {
      b.isReady = !0
      for (var a = 0, c = g.length; c > a; a++) {
        ;(0, g[a])()
      }
    }
    function e(e) {
      return (
        "complete" === f.readyState
          ? d()
          : (e.bind(f, "DOMContentLoaded", c),
            e.bind(f, "readystatechange", c),
            e.bind(a, "load", c)),
        b
      )
    }
    var f = a.document,
      g = []
    ;(b.isReady = !1),
      "function" == typeof define && define.amd
        ? define("doc-ready/doc-ready", ["eventie/eventie"], e)
        : "object" == typeof exports
        ? (module.exports = e(require("eventie")))
        : (a.docReady = e(a.eventie))
  })(window),
  (function (a) {
    "use strict"
    function b(a, b) {
      return a[g](b)
    }
    function c(a) {
      if (!a.parentNode) {
        document.createDocumentFragment().appendChild(a)
      }
    }
    function d(a, b) {
      c(a)
      for (
        var d = a.parentNode.querySelectorAll(b), e = 0, f = d.length;
        f > e;
        e++
      )
        if (d[e] === a) return !0
      return !1
    }
    function e(a, d) {
      return c(a), b(a, d)
    }
    var f,
      g = (function () {
        if (a.matches) return "matches"
        if (a.matchesSelector) return "matchesSelector"
        for (
          var b = ["webkit", "moz", "ms", "o"], c = 0, d = b.length;
          d > c;
          c++
        ) {
          var e = b[c],
            f = e + "MatchesSelector"
          if (a[f]) return f
        }
      })()
    if (g) {
      var h = document.createElement("div"),
        i = b(h, "div")
      f = i ? b : e
    } else f = d
    "function" == typeof define && define.amd
      ? define("matches-selector/matches-selector", [], function () {
          return f
        })
      : "object" == typeof exports
      ? (module.exports = f)
      : (window.matchesSelector = f)
  })(Element.prototype),
  (function (a, b) {
    "use strict"
    "function" == typeof define && define.amd
      ? define("fizzy-ui-utils/utils", [
          "doc-ready/doc-ready",
          "matches-selector/matches-selector",
        ], function (c, d) {
          return b(a, c, d)
        })
      : "object" == typeof exports
      ? (module.exports = b(
          a,
          require("doc-ready"),
          require("desandro-matches-selector")
        ))
      : (a.fizzyUIUtils = b(a, a.docReady, a.matchesSelector))
  })(window, function (a, b, c) {
    var d = {}
    ;(d.extend = function (a, b) {
      for (var c in b) a[c] = b[c]
      return a
    }),
      (d.modulo = function (a, b) {
        return ((a % b) + b) % b
      })
    var e = Object.prototype.toString
    ;(d.isArray = function (a) {
      return "[object Array]" == e.call(a)
    }),
      (d.makeArray = function (a) {
        var b = []
        if (d.isArray(a)) b = a
        else if (a && "number" == typeof a.length)
          for (var c = 0, e = a.length; e > c; c++) b.push(a[c])
        else b.push(a)
        return b
      }),
      (d.indexOf = Array.prototype.indexOf
        ? function (a, b) {
            return a.indexOf(b)
          }
        : function (a, b) {
            for (var c = 0, d = a.length; d > c; c++) if (a[c] === b) return c
            return -1
          }),
      (d.removeFrom = function (a, b) {
        var c = d.indexOf(a, b)
        ;-1 != c && a.splice(c, 1)
      }),
      (d.isElement =
        "function" == typeof HTMLElement || "object" == typeof HTMLElement
          ? function (a) {
              return a instanceof HTMLElement
            }
          : function (a) {
              return (
                a &&
                "object" == typeof a &&
                1 == a.nodeType &&
                "string" == typeof a.nodeName
              )
            }),
      (d.setText = (function () {
        function a(a, c) {
          ;(b =
            b ||
            (void 0 !== document.documentElement.textContent
              ? "textContent"
              : "innerText")),
            (a[b] = c)
        }
        var b
        return a
      })()),
      (d.getParent = function (a, b) {
        for (; a != document.body; ) if (((a = a.parentNode), c(a, b))) return a
      }),
      (d.getQueryElement = function (a) {
        return "string" == typeof a ? document.querySelector(a) : a
      }),
      (d.handleEvent = function (a) {
        var b = "on" + a.type
        this[b] && this[b](a)
      }),
      (d.filterFindElements = function (a, b) {
        a = d.makeArray(a)
        for (var e = [], f = 0, g = a.length; g > f; f++) {
          var h = a[f]
          if (d.isElement(h))
            if (b) {
              c(h, b) && e.push(h)
              for (
                var i = h.querySelectorAll(b), j = 0, k = i.length;
                k > j;
                j++
              )
                e.push(i[j])
            } else e.push(h)
        }
        return e
      }),
      (d.debounceMethod = function (a, b, c) {
        var d = a.prototype[b],
          e = b + "Timeout"
        a.prototype[b] = function () {
          var a = this[e]
          a && clearTimeout(a)
          var b = arguments,
            f = this
          this[e] = setTimeout(function () {
            d.apply(f, b), delete f[e]
          }, c || 100)
        }
      }),
      (d.toDashed = function (a) {
        return a
          .replace(/(.)([A-Z])/g, function (a, b, c) {
            return b + "-" + c
          })
          .toLowerCase()
      })
    var f = a.console
    return (
      (d.htmlInit = function (c, e) {
        b(function () {
          for (
            var b = d.toDashed(e),
              g = document.querySelectorAll(".js-" + b),
              h = "data-" + b + "-options",
              i = 0,
              j = g.length;
            j > i;
            i++
          ) {
            var k,
              l = g[i],
              m = l.getAttribute(h)
            try {
              k = m && JSON.parse(m)
            } catch (a) {
              f &&
                f.error(
                  "Error parsing " +
                    h +
                    " on " +
                    l.nodeName.toLowerCase() +
                    (l.id ? "#" + l.id : "") +
                    ": " +
                    a
                )
              continue
            }
            var n = new c(l, k),
              o = a.jQuery
            o && o.data(l, e, n)
          }
        })
      }),
      d
    )
  }),
  (function (a, b) {
    "use strict"
    "function" == typeof define && define.amd
      ? define("outlayer/item", [
          "eventEmitter/EventEmitter",
          "get-size/get-size",
          "get-style-property/get-style-property",
          "fizzy-ui-utils/utils",
        ], function (c, d, e, f) {
          return b(a, c, d, e, f)
        })
      : "object" == typeof exports
      ? (module.exports = b(
          a,
          require("wolfy87-eventemitter"),
          require("get-size"),
          require("desandro-get-style-property"),
          require("fizzy-ui-utils")
        ))
      : ((a.Outlayer = {}),
        (a.Outlayer.Item = b(
          a,
          a.EventEmitter,
          a.getSize,
          a.getStyleProperty,
          a.fizzyUIUtils
        )))
  })(window, function (a, b, c, d, e) {
    "use strict"
    function f(a) {
      for (var b in a) return !1
      return null, !0
    }
    function g(a, b) {
      a &&
        ((this.element = a),
        (this.layout = b),
        (this.position = { x: 0, y: 0 }),
        this._create())
    }
    var h = a.getComputedStyle,
      i = h
        ? function (a) {
            return h(a, null)
          }
        : function (a) {
            return a.currentStyle
          },
      j = d("transition"),
      k = d("transform"),
      l = j && k,
      m = !!d("perspective"),
      n = {
        WebkitTransition: "webkitTransitionEnd",
        MozTransition: "transitionend",
        OTransition: "otransitionend",
        transition: "transitionend",
      }[j],
      o = [
        "transform",
        "transition",
        "transitionDuration",
        "transitionProperty",
      ],
      p = (function () {
        for (var a = {}, b = 0, c = o.length; c > b; b++) {
          var e = o[b],
            f = d(e)
          f && f !== e && (a[e] = f)
        }
        return a
      })()
    e.extend(g.prototype, b.prototype),
      (g.prototype._create = function () {
        ;(this._transn = { ingProperties: {}, clean: {}, onEnd: {} }),
          this.css({ position: "absolute" })
      }),
      (g.prototype.handleEvent = function (a) {
        var b = "on" + a.type
        this[b] && this[b](a)
      }),
      (g.prototype.getSize = function () {
        this.size = c(this.element)
      }),
      (g.prototype.css = function (a) {
        var b = this.element.style
        for (var c in a) {
          b[p[c] || c] = a[c]
        }
      }),
      (g.prototype.getPosition = function () {
        var a = i(this.element),
          b = this.layout.options,
          c = b.isOriginLeft,
          d = b.isOriginTop,
          e = a[c ? "left" : "right"],
          f = a[d ? "top" : "bottom"],
          g = this.layout.size,
          h =
            -1 != e.indexOf("%")
              ? (parseFloat(e) / 100) * g.width
              : parseInt(e, 10),
          j =
            -1 != f.indexOf("%")
              ? (parseFloat(f) / 100) * g.height
              : parseInt(f, 10)
        ;(h = isNaN(h) ? 0 : h),
          (j = isNaN(j) ? 0 : j),
          (h -= c ? g.paddingLeft : g.paddingRight),
          (j -= d ? g.paddingTop : g.paddingBottom),
          (this.position.x = h),
          (this.position.y = j)
      }),
      (g.prototype.layoutPosition = function () {
        var a = this.layout.size,
          b = this.layout.options,
          c = {},
          d = b.isOriginLeft ? "paddingLeft" : "paddingRight",
          e = b.isOriginLeft ? "left" : "right",
          f = b.isOriginLeft ? "right" : "left",
          g = this.position.x + a[d]
        ;(c[e] = this.getXValue(g)), (c[f] = "")
        var h = b.isOriginTop ? "paddingTop" : "paddingBottom",
          i = b.isOriginTop ? "top" : "bottom",
          j = b.isOriginTop ? "bottom" : "top",
          k = this.position.y + a[h]
        ;(c[i] = this.getYValue(k)),
          (c[j] = ""),
          this.css(c),
          this.emitEvent("layout", [this])
      }),
      (g.prototype.getXValue = function (a) {
        var b = this.layout.options
        return b.percentPosition && !b.isHorizontal
          ? (a / this.layout.size.width) * 100 + "%"
          : a + "px"
      }),
      (g.prototype.getYValue = function (a) {
        var b = this.layout.options
        return b.percentPosition && b.isHorizontal
          ? (a / this.layout.size.height) * 100 + "%"
          : a + "px"
      }),
      (g.prototype._transitionTo = function (a, b) {
        this.getPosition()
        var c = this.position.x,
          d = this.position.y,
          e = parseInt(a, 10),
          f = parseInt(b, 10),
          g = e === this.position.x && f === this.position.y
        if ((this.setPosition(a, b), g && !this.isTransitioning))
          return void this.layoutPosition()
        var h = a - c,
          i = b - d,
          j = {}
        ;(j.transform = this.getTranslate(h, i)),
          this.transition({
            to: j,
            onTransitionEnd: { transform: this.layoutPosition },
            isCleaning: !0,
          })
      }),
      (g.prototype.getTranslate = function (a, b) {
        var c = this.layout.options
        return (
          (a = c.isOriginLeft ? a : -a),
          (b = c.isOriginTop ? b : -b),
          m
            ? "translate3d(" + a + "px, " + b + "px, 0)"
            : "translate(" + a + "px, " + b + "px)"
        )
      }),
      (g.prototype.goTo = function (a, b) {
        this.setPosition(a, b), this.layoutPosition()
      }),
      (g.prototype.moveTo = l ? g.prototype._transitionTo : g.prototype.goTo),
      (g.prototype.setPosition = function (a, b) {
        ;(this.position.x = parseInt(a, 10)),
          (this.position.y = parseInt(b, 10))
      }),
      (g.prototype._nonTransition = function (a) {
        this.css(a.to), a.isCleaning && this._removeStyles(a.to)
        for (var b in a.onTransitionEnd) a.onTransitionEnd[b].call(this)
      }),
      (g.prototype._transition = function (a) {
        if (!parseFloat(this.layout.options.transitionDuration))
          return void this._nonTransition(a)
        var b = this._transn
        for (var c in a.onTransitionEnd) b.onEnd[c] = a.onTransitionEnd[c]
        for (c in a.to)
          (b.ingProperties[c] = !0), a.isCleaning && (b.clean[c] = !0)
        if (a.from) {
          this.css(a.from)
          this.element.offsetHeight
          null
        }
        this.enableTransition(a.to), this.css(a.to), (this.isTransitioning = !0)
      })
    var q =
      "opacity," +
      (function (a) {
        return a.replace(/([A-Z])/g, function (a) {
          return "-" + a.toLowerCase()
        })
      })(p.transform || "transform")
    ;(g.prototype.enableTransition = function () {
      this.isTransitioning ||
        (this.css({
          transitionProperty: q,
          transitionDuration: this.layout.options.transitionDuration,
        }),
        this.element.addEventListener(n, this, !1))
    }),
      (g.prototype.transition =
        g.prototype[j ? "_transition" : "_nonTransition"]),
      (g.prototype.onwebkitTransitionEnd = function (a) {
        this.ontransitionend(a)
      }),
      (g.prototype.onotransitionend = function (a) {
        this.ontransitionend(a)
      })
    var r = {
      "-webkit-transform": "transform",
      "-moz-transform": "transform",
      "-o-transform": "transform",
    }
    ;(g.prototype.ontransitionend = function (a) {
      if (a.target === this.element) {
        var b = this._transn,
          c = r[a.propertyName] || a.propertyName
        if (
          (delete b.ingProperties[c],
          f(b.ingProperties) && this.disableTransition(),
          c in b.clean &&
            ((this.element.style[a.propertyName] = ""), delete b.clean[c]),
          c in b.onEnd)
        ) {
          b.onEnd[c].call(this), delete b.onEnd[c]
        }
        this.emitEvent("transitionEnd", [this])
      }
    }),
      (g.prototype.disableTransition = function () {
        this.removeTransitionStyles(),
          this.element.removeEventListener(n, this, !1),
          (this.isTransitioning = !1)
      }),
      (g.prototype._removeStyles = function (a) {
        var b = {}
        for (var c in a) b[c] = ""
        this.css(b)
      })
    var s = { transitionProperty: "", transitionDuration: "" }
    return (
      (g.prototype.removeTransitionStyles = function () {
        this.css(s)
      }),
      (g.prototype.removeElem = function () {
        this.element.parentNode.removeChild(this.element),
          this.css({ display: "" }),
          this.emitEvent("remove", [this])
      }),
      (g.prototype.remove = function () {
        if (!j || !parseFloat(this.layout.options.transitionDuration))
          return void this.removeElem()
        var a = this
        this.once("transitionEnd", function () {
          a.removeElem()
        }),
          this.hide()
      }),
      (g.prototype.reveal = function () {
        delete this.isHidden, this.css({ display: "" })
        var a = this.layout.options,
          b = {}
        ;(b[
          this.getHideRevealTransitionEndProperty("visibleStyle")
        ] = this.onRevealTransitionEnd),
          this.transition({
            from: a.hiddenStyle,
            to: a.visibleStyle,
            isCleaning: !0,
            onTransitionEnd: b,
          })
      }),
      (g.prototype.onRevealTransitionEnd = function () {
        this.isHidden || this.emitEvent("reveal")
      }),
      (g.prototype.getHideRevealTransitionEndProperty = function (a) {
        var b = this.layout.options[a]
        if (b.opacity) return "opacity"
        for (var c in b) return c
      }),
      (g.prototype.hide = function () {
        ;(this.isHidden = !0), this.css({ display: "" })
        var a = this.layout.options,
          b = {}
        ;(b[
          this.getHideRevealTransitionEndProperty("hiddenStyle")
        ] = this.onHideTransitionEnd),
          this.transition({
            from: a.visibleStyle,
            to: a.hiddenStyle,
            isCleaning: !0,
            onTransitionEnd: b,
          })
      }),
      (g.prototype.onHideTransitionEnd = function () {
        this.isHidden && (this.css({ display: "none" }), this.emitEvent("hide"))
      }),
      (g.prototype.destroy = function () {
        this.css({
          position: "",
          left: "",
          right: "",
          top: "",
          bottom: "",
          transition: "",
          transform: "",
        })
      }),
      g
    )
  }),
  (function (a, b) {
    "use strict"
    "function" == typeof define && define.amd
      ? define("outlayer/outlayer", [
          "eventie/eventie",
          "eventEmitter/EventEmitter",
          "get-size/get-size",
          "fizzy-ui-utils/utils",
          "./item",
        ], function (c, d, e, f, g) {
          return b(a, c, d, e, f, g)
        })
      : "object" == typeof exports
      ? (module.exports = b(
          a,
          require("eventie"),
          require("wolfy87-eventemitter"),
          require("get-size"),
          require("fizzy-ui-utils"),
          require("./item")
        ))
      : (a.Outlayer = b(
          a,
          a.eventie,
          a.EventEmitter,
          a.getSize,
          a.fizzyUIUtils,
          a.Outlayer.Item
        ))
  })(window, function (a, b, c, d, e, f) {
    "use strict"
    function g(a, b) {
      var c = e.getQueryElement(a)
      if (!c)
        return void (
          h &&
          h.error(
            "Bad element for " + this.constructor.namespace + ": " + (c || a)
          )
        )
      ;(this.element = c),
        i && (this.$element = i(this.element)),
        (this.options = e.extend({}, this.constructor.defaults)),
        this.option(b)
      var d = ++k
      ;(this.element.outlayerGUID = d),
        (l[d] = this),
        this._create(),
        this.options.isInitLayout && this.layout()
    }
    var h = a.console,
      i = a.jQuery,
      j = function () {},
      k = 0,
      l = {}
    return (
      (g.namespace = "outlayer"),
      (g.Item = f),
      (g.defaults = {
        containerStyle: { position: "relative" },
        isInitLayout: !0,
        isOriginLeft: !0,
        isOriginTop: !0,
        isResizeBound: !0,
        isResizingContainer: !0,
        transitionDuration: "0.4s",
        hiddenStyle: { opacity: 0, transform: "scale(0.001)" },
        visibleStyle: { opacity: 1, transform: "scale(1)" },
      }),
      e.extend(g.prototype, c.prototype),
      (g.prototype.option = function (a) {
        e.extend(this.options, a)
      }),
      (g.prototype._create = function () {
        this.reloadItems(),
          (this.stamps = []),
          this.stamp(this.options.stamp),
          e.extend(this.element.style, this.options.containerStyle),
          this.options.isResizeBound && this.bindResize()
      }),
      (g.prototype.reloadItems = function () {
        this.items = this._itemize(this.element.children)
      }),
      (g.prototype._itemize = function (a) {
        for (
          var b = this._filterFindItemElements(a),
            c = this.constructor.Item,
            d = [],
            e = 0,
            f = b.length;
          f > e;
          e++
        ) {
          var g = b[e],
            h = new c(g, this)
          d.push(h)
        }
        return d
      }),
      (g.prototype._filterFindItemElements = function (a) {
        return e.filterFindElements(a, this.options.itemSelector)
      }),
      (g.prototype.getItemElements = function () {
        for (var a = [], b = 0, c = this.items.length; c > b; b++)
          a.push(this.items[b].element)
        return a
      }),
      (g.prototype.layout = function () {
        this._resetLayout(), this._manageStamps()
        var a =
          void 0 !== this.options.isLayoutInstant
            ? this.options.isLayoutInstant
            : !this._isLayoutInited
        this.layoutItems(this.items, a), (this._isLayoutInited = !0)
      }),
      (g.prototype._init = g.prototype.layout),
      (g.prototype._resetLayout = function () {
        this.getSize()
      }),
      (g.prototype.getSize = function () {
        this.size = d(this.element)
      }),
      (g.prototype._getMeasurement = function (a, b) {
        var c,
          f = this.options[a]
        f
          ? ("string" == typeof f
              ? (c = this.element.querySelector(f))
              : e.isElement(f) && (c = f),
            (this[a] = c ? d(c)[b] : f))
          : (this[a] = 0)
      }),
      (g.prototype.layoutItems = function (a, b) {
        ;(a = this._getItemsForLayout(a)),
          this._layoutItems(a, b),
          this._postLayout()
      }),
      (g.prototype._getItemsForLayout = function (a) {
        for (var b = [], c = 0, d = a.length; d > c; c++) {
          var e = a[c]
          e.isIgnored || b.push(e)
        }
        return b
      }),
      (g.prototype._layoutItems = function (a, b) {
        if ((this._emitCompleteOnItems("layout", a), a && a.length)) {
          for (var c = [], d = 0, e = a.length; e > d; d++) {
            var f = a[d],
              g = this._getItemLayoutPosition(f)
            ;(g.item = f), (g.isInstant = b || f.isLayoutInstant), c.push(g)
          }
          this._processLayoutQueue(c)
        }
      }),
      (g.prototype._getItemLayoutPosition = function () {
        return { x: 0, y: 0 }
      }),
      (g.prototype._processLayoutQueue = function (a) {
        for (var b = 0, c = a.length; c > b; b++) {
          var d = a[b]
          this._positionItem(d.item, d.x, d.y, d.isInstant)
        }
      }),
      (g.prototype._positionItem = function (a, b, c, d) {
        d ? a.goTo(b, c) : a.moveTo(b, c)
      }),
      (g.prototype._postLayout = function () {
        this.resizeContainer()
      }),
      (g.prototype.resizeContainer = function () {
        if (this.options.isResizingContainer) {
          var a = this._getContainerSize()
          a &&
            (this._setContainerMeasure(a.width, !0),
            this._setContainerMeasure(a.height, !1))
        }
      }),
      (g.prototype._getContainerSize = j),
      (g.prototype._setContainerMeasure = function (a, b) {
        if (void 0 !== a) {
          var c = this.size
          c.isBorderBox &&
            (a += b
              ? c.paddingLeft +
                c.paddingRight +
                c.borderLeftWidth +
                c.borderRightWidth
              : c.paddingBottom +
                c.paddingTop +
                c.borderTopWidth +
                c.borderBottomWidth),
            (a = Math.max(a, 0)),
            (this.element.style[b ? "width" : "height"] = a + "px")
        }
      }),
      (g.prototype._emitCompleteOnItems = function (a, b) {
        function c() {
          e.dispatchEvent(a + "Complete", null, [b])
        }
        function d() {
          ++g === f && c()
        }
        var e = this,
          f = b.length
        if (!b || !f) return void c()
        for (var g = 0, h = 0, i = b.length; i > h; h++) {
          b[h].once(a, d)
        }
      }),
      (g.prototype.dispatchEvent = function (a, b, c) {
        var d = b ? [b].concat(c) : c
        if ((this.emitEvent(a, d), i))
          if (((this.$element = this.$element || i(this.element)), b)) {
            var e = i.Event(b)
            ;(e.type = a), this.$element.trigger(e, c)
          } else this.$element.trigger(a, c)
      }),
      (g.prototype.ignore = function (a) {
        var b = this.getItem(a)
        b && (b.isIgnored = !0)
      }),
      (g.prototype.unignore = function (a) {
        var b = this.getItem(a)
        b && delete b.isIgnored
      }),
      (g.prototype.stamp = function (a) {
        if ((a = this._find(a))) {
          this.stamps = this.stamps.concat(a)
          for (var b = 0, c = a.length; c > b; b++) {
            var d = a[b]
            this.ignore(d)
          }
        }
      }),
      (g.prototype.unstamp = function (a) {
        if ((a = this._find(a)))
          for (var b = 0, c = a.length; c > b; b++) {
            var d = a[b]
            e.removeFrom(this.stamps, d), this.unignore(d)
          }
      }),
      (g.prototype._find = function (a) {
        return a
          ? ("string" == typeof a && (a = this.element.querySelectorAll(a)),
            (a = e.makeArray(a)))
          : void 0
      }),
      (g.prototype._manageStamps = function () {
        if (this.stamps && this.stamps.length) {
          this._getBoundingRect()
          for (var a = 0, b = this.stamps.length; b > a; a++) {
            var c = this.stamps[a]
            this._manageStamp(c)
          }
        }
      }),
      (g.prototype._getBoundingRect = function () {
        var a = this.element.getBoundingClientRect(),
          b = this.size
        this._boundingRect = {
          left: a.left + b.paddingLeft + b.borderLeftWidth,
          top: a.top + b.paddingTop + b.borderTopWidth,
          right: a.right - (b.paddingRight + b.borderRightWidth),
          bottom: a.bottom - (b.paddingBottom + b.borderBottomWidth),
        }
      }),
      (g.prototype._manageStamp = j),
      (g.prototype._getElementOffset = function (a) {
        var b = a.getBoundingClientRect(),
          c = this._boundingRect,
          e = d(a)
        return {
          left: b.left - c.left - e.marginLeft,
          top: b.top - c.top - e.marginTop,
          right: c.right - b.right - e.marginRight,
          bottom: c.bottom - b.bottom - e.marginBottom,
        }
      }),
      (g.prototype.handleEvent = function (a) {
        var b = "on" + a.type
        this[b] && this[b](a)
      }),
      (g.prototype.bindResize = function () {
        this.isResizeBound ||
          (b.bind(a, "resize", this), (this.isResizeBound = !0))
      }),
      (g.prototype.unbindResize = function () {
        this.isResizeBound && b.unbind(a, "resize", this),
          (this.isResizeBound = !1)
      }),
      (g.prototype.onresize = function () {
        function a() {
          b.resize(), delete b.resizeTimeout
        }
        this.resizeTimeout && clearTimeout(this.resizeTimeout)
        var b = this
        this.resizeTimeout = setTimeout(a, 100)
      }),
      (g.prototype.resize = function () {
        this.isResizeBound && this.needsResizeLayout() && this.layout()
      }),
      (g.prototype.needsResizeLayout = function () {
        var a = d(this.element)
        return this.size && a && a.innerWidth !== this.size.innerWidth
      }),
      (g.prototype.addItems = function (a) {
        var b = this._itemize(a)
        return b.length && (this.items = this.items.concat(b)), b
      }),
      (g.prototype.appended = function (a) {
        var b = this.addItems(a)
        b.length && (this.layoutItems(b, !0), this.reveal(b))
      }),
      (g.prototype.prepended = function (a) {
        var b = this._itemize(a)
        if (b.length) {
          var c = this.items.slice(0)
          ;(this.items = b.concat(c)),
            this._resetLayout(),
            this._manageStamps(),
            this.layoutItems(b, !0),
            this.reveal(b),
            this.layoutItems(c)
        }
      }),
      (g.prototype.reveal = function (a) {
        this._emitCompleteOnItems("reveal", a)
        for (var b = a && a.length, c = 0; b && b > c; c++) {
          a[c].reveal()
        }
      }),
      (g.prototype.hide = function (a) {
        this._emitCompleteOnItems("hide", a)
        for (var b = a && a.length, c = 0; b && b > c; c++) {
          a[c].hide()
        }
      }),
      (g.prototype.revealItemElements = function (a) {
        var b = this.getItems(a)
        this.reveal(b)
      }),
      (g.prototype.hideItemElements = function (a) {
        var b = this.getItems(a)
        this.hide(b)
      }),
      (g.prototype.getItem = function (a) {
        for (var b = 0, c = this.items.length; c > b; b++) {
          var d = this.items[b]
          if (d.element === a) return d
        }
      }),
      (g.prototype.getItems = function (a) {
        a = e.makeArray(a)
        for (var b = [], c = 0, d = a.length; d > c; c++) {
          var f = a[c],
            g = this.getItem(f)
          g && b.push(g)
        }
        return b
      }),
      (g.prototype.remove = function (a) {
        var b = this.getItems(a)
        if ((this._emitCompleteOnItems("remove", b), b && b.length))
          for (var c = 0, d = b.length; d > c; c++) {
            var f = b[c]
            f.remove(), e.removeFrom(this.items, f)
          }
      }),
      (g.prototype.destroy = function () {
        var a = this.element.style
        ;(a.height = ""), (a.position = ""), (a.width = "")
        for (var b = 0, c = this.items.length; c > b; b++) {
          this.items[b].destroy()
        }
        this.unbindResize()
        var d = this.element.outlayerGUID
        delete l[d],
          delete this.element.outlayerGUID,
          i && i.removeData(this.element, this.constructor.namespace)
      }),
      (g.data = function (a) {
        a = e.getQueryElement(a)
        var b = a && a.outlayerGUID
        return b && l[b]
      }),
      (g.create = function (a, b) {
        function c() {
          g.apply(this, arguments)
        }
        return (
          Object.create
            ? (c.prototype = Object.create(g.prototype))
            : e.extend(c.prototype, g.prototype),
          (c.prototype.constructor = c),
          (c.defaults = e.extend({}, g.defaults)),
          e.extend(c.defaults, b),
          (c.prototype.settings = {}),
          (c.namespace = a),
          (c.data = g.data),
          (c.Item = function () {
            f.apply(this, arguments)
          }),
          (c.Item.prototype = new f()),
          e.htmlInit(c, a),
          i && i.bridget && i.bridget(a, c),
          c
        )
      }),
      (g.Item = f),
      g
    )
  }),
  (function (a, b) {
    "use strict"
    "function" == typeof define && define.amd
      ? define("isotope/js/item", ["outlayer/outlayer"], b)
      : "object" == typeof exports
      ? (module.exports = b(require("outlayer")))
      : ((a.Isotope = a.Isotope || {}), (a.Isotope.Item = b(a.Outlayer)))
  })(window, function (a) {
    "use strict"
    function b() {
      a.Item.apply(this, arguments)
    }
    ;(b.prototype = new a.Item()),
      (b.prototype._create = function () {
        ;(this.id = this.layout.itemGUID++),
          a.Item.prototype._create.call(this),
          (this.sortData = {})
      }),
      (b.prototype.updateSortData = function () {
        if (!this.isIgnored) {
          ;(this.sortData.id = this.id),
            (this.sortData["original-order"] = this.id),
            (this.sortData.random = Math.random())
          var a = this.layout.options.getSortData,
            b = this.layout._sorters
          for (var c in a) {
            var d = b[c]
            this.sortData[c] = d(this.element, this)
          }
        }
      })
    var c = b.prototype.destroy
    return (
      (b.prototype.destroy = function () {
        c.apply(this, arguments), this.css({ display: "" })
      }),
      b
    )
  }),
  (function (a, b) {
    "use strict"
    "function" == typeof define && define.amd
      ? define("isotope/js/layout-mode", [
          "get-size/get-size",
          "outlayer/outlayer",
        ], b)
      : "object" == typeof exports
      ? (module.exports = b(require("get-size"), require("outlayer")))
      : ((a.Isotope = a.Isotope || {}),
        (a.Isotope.LayoutMode = b(a.getSize, a.Outlayer)))
  })(window, function (a, b) {
    "use strict"
    function c(a) {
      ;(this.isotope = a),
        a &&
          ((this.options = a.options[this.namespace]),
          (this.element = a.element),
          (this.items = a.filteredItems),
          (this.size = a.size))
    }
    return (
      (function () {
        for (
          var a = [
              "_resetLayout",
              "_getItemLayoutPosition",
              "_manageStamp",
              "_getContainerSize",
              "_getElementOffset",
              "needsResizeLayout",
            ],
            d = 0,
            e = a.length;
          e > d;
          d++
        ) {
          var f = a[d]
          c.prototype[f] = (function (a) {
            return function () {
              return b.prototype[a].apply(this.isotope, arguments)
            }
          })(f)
        }
      })(),
      (c.prototype.needsVerticalResizeLayout = function () {
        var b = a(this.isotope.element)
        return (
          this.isotope.size &&
          b &&
          b.innerHeight != this.isotope.size.innerHeight
        )
      }),
      (c.prototype._getMeasurement = function () {
        this.isotope._getMeasurement.apply(this, arguments)
      }),
      (c.prototype.getColumnWidth = function () {
        this.getSegmentSize("column", "Width")
      }),
      (c.prototype.getRowHeight = function () {
        this.getSegmentSize("row", "Height")
      }),
      (c.prototype.getSegmentSize = function (a, b) {
        var c = a + b,
          d = "outer" + b
        if ((this._getMeasurement(c, d), !this[c])) {
          var e = this.getFirstItemSize()
          this[c] = (e && e[d]) || this.isotope.size["inner" + b]
        }
      }),
      (c.prototype.getFirstItemSize = function () {
        var b = this.isotope.filteredItems[0]
        return b && b.element && a(b.element)
      }),
      (c.prototype.layout = function () {
        this.isotope.layout.apply(this.isotope, arguments)
      }),
      (c.prototype.getSize = function () {
        this.isotope.getSize(), (this.size = this.isotope.size)
      }),
      (c.modes = {}),
      (c.create = function (a, b) {
        function d() {
          c.apply(this, arguments)
        }
        return (
          (d.prototype = new c()),
          b && (d.options = b),
          (d.prototype.namespace = a),
          (c.modes[a] = d),
          d
        )
      }),
      c
    )
  }),
  (function (a, b) {
    "use strict"
    "function" == typeof define && define.amd
      ? define("masonry/masonry", [
          "outlayer/outlayer",
          "get-size/get-size",
          "fizzy-ui-utils/utils",
        ], b)
      : "object" == typeof exports
      ? (module.exports = b(
          require("outlayer"),
          require("get-size"),
          require("fizzy-ui-utils")
        ))
      : (a.Masonry = b(a.Outlayer, a.getSize, a.fizzyUIUtils))
  })(window, function (a, b, c) {
    var d = a.create("masonry")
    return (
      (d.prototype._resetLayout = function () {
        this.getSize(),
          this._getMeasurement("columnWidth", "outerWidth"),
          this._getMeasurement("gutter", "outerWidth"),
          this.measureColumns()
        var a = this.cols
        for (this.colYs = []; a--; ) this.colYs.push(0)
        this.maxY = 0
      }),
      (d.prototype.measureColumns = function () {
        if ((this.getContainerWidth(), !this.columnWidth)) {
          var a = this.items[0],
            c = a && a.element
          this.columnWidth = (c && b(c).outerWidth) || this.containerWidth
        }
        var d = (this.columnWidth += this.gutter),
          e = this.containerWidth + this.gutter,
          f = e / d,
          g = d - (e % d),
          h = g && 1 > g ? "round" : "floor"
        ;(f = Math[h](f)), (this.cols = Math.max(f, 1))
      }),
      (d.prototype.getContainerWidth = function () {
        var a = this.options.isFitWidth
            ? this.element.parentNode
            : this.element,
          c = b(a)
        this.containerWidth = c && c.innerWidth
      }),
      (d.prototype._getItemLayoutPosition = function (a) {
        a.getSize()
        var b = a.size.outerWidth % this.columnWidth,
          d = b && 1 > b ? "round" : "ceil",
          e = Math[d](a.size.outerWidth / this.columnWidth)
        e = Math.min(e, this.cols)
        for (
          var f = this._getColGroup(e),
            g = Math.min.apply(Math, f),
            h = c.indexOf(f, g),
            i = { x: this.columnWidth * h, y: g },
            j = g + a.size.outerHeight,
            k = this.cols + 1 - f.length,
            l = 0;
          k > l;
          l++
        )
          this.colYs[h + l] = j
        return i
      }),
      (d.prototype._getColGroup = function (a) {
        if (2 > a) return this.colYs
        for (var b = [], c = this.cols + 1 - a, d = 0; c > d; d++) {
          var e = this.colYs.slice(d, d + a)
          b[d] = Math.max.apply(Math, e)
        }
        return b
      }),
      (d.prototype._manageStamp = function (a) {
        var c = b(a),
          d = this._getElementOffset(a),
          e = this.options.isOriginLeft ? d.left : d.right,
          f = e + c.outerWidth,
          g = Math.floor(e / this.columnWidth)
        g = Math.max(0, g)
        var h = Math.floor(f / this.columnWidth)
        ;(h -= f % this.columnWidth ? 0 : 1), (h = Math.min(this.cols - 1, h))
        for (
          var i = (this.options.isOriginTop ? d.top : d.bottom) + c.outerHeight,
            j = g;
          h >= j;
          j++
        )
          this.colYs[j] = Math.max(i, this.colYs[j])
      }),
      (d.prototype._getContainerSize = function () {
        this.maxY = Math.max.apply(Math, this.colYs)
        var a = { height: this.maxY }
        return (
          this.options.isFitWidth && (a.width = this._getContainerFitWidth()), a
        )
      }),
      (d.prototype._getContainerFitWidth = function () {
        for (var a = 0, b = this.cols; --b && 0 === this.colYs[b]; ) a++
        return (this.cols - a) * this.columnWidth - this.gutter
      }),
      (d.prototype.needsResizeLayout = function () {
        var a = this.containerWidth
        return this.getContainerWidth(), a !== this.containerWidth
      }),
      d
    )
  }),
  (function (a, b) {
    "use strict"
    "function" == typeof define && define.amd
      ? define("isotope/js/layout-modes/masonry", [
          "../layout-mode",
          "masonry/masonry",
        ], b)
      : "object" == typeof exports
      ? (module.exports = b(
          require("../layout-mode"),
          require("masonry-layout")
        ))
      : b(a.Isotope.LayoutMode, a.Masonry)
  })(window, function (a, b) {
    "use strict"
    var c = a.create("masonry"),
      d = c.prototype._getElementOffset,
      e = c.prototype.layout,
      f = c.prototype._getMeasurement
    ;(function (a, b) {
      for (var c in b) a[c] = b[c]
    })(c.prototype, b.prototype),
      (c.prototype._getElementOffset = d),
      (c.prototype.layout = e),
      (c.prototype._getMeasurement = f)
    var g = c.prototype.measureColumns
    c.prototype.measureColumns = function () {
      ;(this.items = this.isotope.filteredItems), g.call(this)
    }
    var h = c.prototype._manageStamp
    return (
      (c.prototype._manageStamp = function () {
        ;(this.options.isOriginLeft = this.isotope.options.isOriginLeft),
          (this.options.isOriginTop = this.isotope.options.isOriginTop),
          h.apply(this, arguments)
      }),
      c
    )
  }),
  (function (a, b) {
    "use strict"
    "function" == typeof define && define.amd
      ? define("isotope/js/layout-modes/fit-rows", ["../layout-mode"], b)
      : "object" == typeof exports
      ? (module.exports = b(require("../layout-mode")))
      : b(a.Isotope.LayoutMode)
  })(window, function (a) {
    "use strict"
    var b = a.create("fitRows")
    return (
      (b.prototype._resetLayout = function () {
        ;(this.x = 0),
          (this.y = 0),
          (this.maxY = 0),
          this._getMeasurement("gutter", "outerWidth")
      }),
      (b.prototype._getItemLayoutPosition = function (a) {
        a.getSize()
        var b = a.size.outerWidth + this.gutter,
          c = this.isotope.size.innerWidth + this.gutter
        0 !== this.x && b + this.x > c && ((this.x = 0), (this.y = this.maxY))
        var d = { x: this.x, y: this.y }
        return (
          (this.maxY = Math.max(this.maxY, this.y + a.size.outerHeight)),
          (this.x += b),
          d
        )
      }),
      (b.prototype._getContainerSize = function () {
        return { height: this.maxY }
      }),
      b
    )
  }),
  (function (a, b) {
    "use strict"
    "function" == typeof define && define.amd
      ? define("isotope/js/layout-modes/vertical", ["../layout-mode"], b)
      : "object" == typeof exports
      ? (module.exports = b(require("../layout-mode")))
      : b(a.Isotope.LayoutMode)
  })(window, function (a) {
    "use strict"
    var b = a.create("vertical", { horizontalAlignment: 0 })
    return (
      (b.prototype._resetLayout = function () {
        this.y = 0
      }),
      (b.prototype._getItemLayoutPosition = function (a) {
        a.getSize()
        var b =
            (this.isotope.size.innerWidth - a.size.outerWidth) *
            this.options.horizontalAlignment,
          c = this.y
        return (this.y += a.size.outerHeight), { x: b, y: c }
      }),
      (b.prototype._getContainerSize = function () {
        return { height: this.y }
      }),
      b
    )
  }),
  (function (a, b) {
    "use strict"
    "function" == typeof define && define.amd
      ? define([
          "outlayer/outlayer",
          "get-size/get-size",
          "matches-selector/matches-selector",
          "fizzy-ui-utils/utils",
          "isotope/js/item",
          "isotope/js/layout-mode",
          "isotope/js/layout-modes/masonry",
          "isotope/js/layout-modes/fit-rows",
          "isotope/js/layout-modes/vertical",
        ], function (c, d, e, f, g, h) {
          return b(a, c, d, e, f, g, h)
        })
      : "object" == typeof exports
      ? (module.exports = b(
          a,
          require("outlayer"),
          require("get-size"),
          require("desandro-matches-selector"),
          require("fizzy-ui-utils"),
          require("./item"),
          require("./layout-mode"),
          require("./layout-modes/masonry"),
          require("./layout-modes/fit-rows"),
          require("./layout-modes/vertical")
        ))
      : (a.Isotope = b(
          a,
          a.Outlayer,
          a.getSize,
          a.matchesSelector,
          a.fizzyUIUtils,
          a.Isotope.Item,
          a.Isotope.LayoutMode
        ))
  })(window, function (a, b, c, d, e, f, g) {
    function h(a, b) {
      return function (c, d) {
        for (var e = 0, f = a.length; f > e; e++) {
          var g = a[e],
            h = c.sortData[g],
            i = d.sortData[g]
          if (h > i || i > h) {
            var j = void 0 !== b[g] ? b[g] : b,
              k = j ? 1 : -1
            return (h > i ? 1 : -1) * k
          }
        }
        return 0
      }
    }
    var i = a.jQuery,
      j = String.prototype.trim
        ? function (a) {
            return a.trim()
          }
        : function (a) {
            return a.replace(/^\s+|\s+$/g, "")
          },
      k = document.documentElement,
      l = k.textContent
        ? function (a) {
            return a.textContent
          }
        : function (a) {
            return a.innerText
          },
      m = b.create("isotope", {
        layoutMode: "masonry",
        isJQueryFiltering: !0,
        sortAscending: !0,
      })
    ;(m.Item = f),
      (m.LayoutMode = g),
      (m.prototype._create = function () {
        ;(this.itemGUID = 0),
          (this._sorters = {}),
          this._getSorters(),
          b.prototype._create.call(this),
          (this.modes = {}),
          (this.filteredItems = this.items),
          (this.sortHistory = ["original-order"])
        for (var a in g.modes) this._initLayoutMode(a)
      }),
      (m.prototype.reloadItems = function () {
        ;(this.itemGUID = 0), b.prototype.reloadItems.call(this)
      }),
      (m.prototype._itemize = function () {
        for (
          var a = b.prototype._itemize.apply(this, arguments),
            c = 0,
            d = a.length;
          d > c;
          c++
        ) {
          a[c].id = this.itemGUID++
        }
        return this._updateItemsSortData(a), a
      }),
      (m.prototype._initLayoutMode = function (a) {
        var b = g.modes[a],
          c = this.options[a] || {}
        ;(this.options[a] = b.options ? e.extend(b.options, c) : c),
          (this.modes[a] = new b(this))
      }),
      (m.prototype.layout = function () {
        return !this._isLayoutInited && this.options.isInitLayout
          ? void this.arrange()
          : void this._layout()
      }),
      (m.prototype._layout = function () {
        var a = this._getIsInstant()
        this._resetLayout(),
          this._manageStamps(),
          this.layoutItems(this.filteredItems, a),
          (this._isLayoutInited = !0)
      }),
      (m.prototype.arrange = function (a) {
        function b() {
          d.reveal(c.needReveal), d.hide(c.needHide)
        }
        this.option(a), this._getIsInstant()
        var c = this._filter(this.items)
        this.filteredItems = c.matches
        var d = this
        this._bindArrangeComplete(),
          this._isInstant ? this._noTransition(b) : b(),
          this._sort(),
          this._layout()
      }),
      (m.prototype._init = m.prototype.arrange),
      (m.prototype._getIsInstant = function () {
        var a =
          void 0 !== this.options.isLayoutInstant
            ? this.options.isLayoutInstant
            : !this._isLayoutInited
        return (this._isInstant = a), a
      }),
      (m.prototype._bindArrangeComplete = function () {
        function a() {
          b &&
            c &&
            d &&
            e.dispatchEvent("arrangeComplete", null, [e.filteredItems])
        }
        var b,
          c,
          d,
          e = this
        this.once("layoutComplete", function () {
          ;(b = !0), a()
        }),
          this.once("hideComplete", function () {
            ;(c = !0), a()
          }),
          this.once("revealComplete", function () {
            ;(d = !0), a()
          })
      }),
      (m.prototype._filter = function (a) {
        var b = this.options.filter
        b = b || "*"
        for (
          var c = [],
            d = [],
            e = [],
            f = this._getFilterTest(b),
            g = 0,
            h = a.length;
          h > g;
          g++
        ) {
          var i = a[g]
          if (!i.isIgnored) {
            var j = f(i)
            j && c.push(i),
              j && i.isHidden ? d.push(i) : j || i.isHidden || e.push(i)
          }
        }
        return { matches: c, needReveal: d, needHide: e }
      }),
      (m.prototype._getFilterTest = function (a) {
        return i && this.options.isJQueryFiltering
          ? function (b) {
              return i(b.element).is(a)
            }
          : "function" == typeof a
          ? function (b) {
              return a(b.element)
            }
          : function (b) {
              return d(b.element, a)
            }
      }),
      (m.prototype.updateSortData = function (a) {
        var b
        a ? ((a = e.makeArray(a)), (b = this.getItems(a))) : (b = this.items),
          this._getSorters(),
          this._updateItemsSortData(b)
      }),
      (m.prototype._getSorters = function () {
        var a = this.options.getSortData
        for (var b in a) {
          var c = a[b]
          this._sorters[b] = n(c)
        }
      }),
      (m.prototype._updateItemsSortData = function (a) {
        for (var b = a && a.length, c = 0; b && b > c; c++) {
          a[c].updateSortData()
        }
      })
    var n = (function () {
      function a(a) {
        if ("string" != typeof a) return a
        var c = j(a).split(" "),
          d = c[0],
          e = d.match(/^\[(.+)\]$/),
          f = e && e[1],
          g = b(f, d),
          h = m.sortDataParsers[c[1]]
        return (a = h
          ? function (a) {
              return a && h(g(a))
            }
          : function (a) {
              return a && g(a)
            })
      }
      function b(a, b) {
        return a
          ? function (b) {
              return b.getAttribute(a)
            }
          : function (a) {
              var c = a.querySelector(b)
              return c && l(c)
            }
      }
      return a
    })()
    ;(m.sortDataParsers = {
      parseInt: function (a) {
        return parseInt(a, 10)
      },
      parseFloat: function (a) {
        return parseFloat(a)
      },
    }),
      (m.prototype._sort = function () {
        var a = this.options.sortBy
        if (a) {
          var b = [].concat.apply(a, this.sortHistory),
            c = h(b, this.options.sortAscending)
          this.filteredItems.sort(c),
            a != this.sortHistory[0] && this.sortHistory.unshift(a)
        }
      }),
      (m.prototype._mode = function () {
        var a = this.options.layoutMode,
          b = this.modes[a]
        if (!b) throw new Error("No layout mode: " + a)
        return (b.options = this.options[a]), b
      }),
      (m.prototype._resetLayout = function () {
        b.prototype._resetLayout.call(this), this._mode()._resetLayout()
      }),
      (m.prototype._getItemLayoutPosition = function (a) {
        return this._mode()._getItemLayoutPosition(a)
      }),
      (m.prototype._manageStamp = function (a) {
        this._mode()._manageStamp(a)
      }),
      (m.prototype._getContainerSize = function () {
        return this._mode()._getContainerSize()
      }),
      (m.prototype.needsResizeLayout = function () {
        return this._mode().needsResizeLayout()
      }),
      (m.prototype.appended = function (a) {
        var b = this.addItems(a)
        if (b.length) {
          var c = this._filterRevealAdded(b)
          this.filteredItems = this.filteredItems.concat(c)
        }
      }),
      (m.prototype.prepended = function (a) {
        var b = this._itemize(a)
        if (b.length) {
          this._resetLayout(), this._manageStamps()
          var c = this._filterRevealAdded(b)
          this.layoutItems(this.filteredItems),
            (this.filteredItems = c.concat(this.filteredItems)),
            (this.items = b.concat(this.items))
        }
      }),
      (m.prototype._filterRevealAdded = function (a) {
        var b = this._filter(a)
        return (
          this.hide(b.needHide),
          this.reveal(b.matches),
          this.layoutItems(b.matches, !0),
          b.matches
        )
      }),
      (m.prototype.insert = function (a) {
        var b = this.addItems(a)
        if (b.length) {
          var c,
            d,
            e = b.length
          for (c = 0; e > c; c++)
            (d = b[c]), this.element.appendChild(d.element)
          var f = this._filter(b).matches
          for (c = 0; e > c; c++) b[c].isLayoutInstant = !0
          for (this.arrange(), c = 0; e > c; c++) delete b[c].isLayoutInstant
          this.reveal(f)
        }
      })
    var o = m.prototype.remove
    return (
      (m.prototype.remove = function (a) {
        a = e.makeArray(a)
        var b = this.getItems(a)
        o.call(this, a)
        var c = b && b.length
        if (c)
          for (var d = 0; c > d; d++) {
            var f = b[d]
            e.removeFrom(this.filteredItems, f)
          }
      }),
      (m.prototype.shuffle = function () {
        for (var a = 0, b = this.items.length; b > a; a++) {
          this.items[a].sortData.random = Math.random()
        }
        ;(this.options.sortBy = "random"), this._sort(), this._layout()
      }),
      (m.prototype._noTransition = function (a) {
        var b = this.options.transitionDuration
        this.options.transitionDuration = 0
        var c = a.call(this)
        return (this.options.transitionDuration = b), c
      }),
      (m.prototype.getFilteredItemElements = function () {
        for (var a = [], b = 0, c = this.filteredItems.length; c > b; b++)
          a.push(this.filteredItems[b].element)
        return a
      }),
      m
    )
  }),
  (jQuery.easing.jswing = jQuery.easing.swing),
  jQuery.extend(jQuery.easing, {
    def: "easeOutQuad",
    swing: function (a, b, c, d, e) {
      return jQuery.easing[jQuery.easing.def](a, b, c, d, e)
    },
    easeInQuad: function (a, b, c, d, e) {
      return d * (b /= e) * b + c
    },
    easeOutQuad: function (a, b, c, d, e) {
      return -d * (b /= e) * (b - 2) + c
    },
    easeInOutQuad: function (a, b, c, d, e) {
      return (b /= e / 2) < 1
        ? (d / 2) * b * b + c
        : (-d / 2) * (--b * (b - 2) - 1) + c
    },
    easeInCubic: function (a, b, c, d, e) {
      return d * (b /= e) * b * b + c
    },
    easeOutCubic: function (a, b, c, d, e) {
      return d * ((b = b / e - 1) * b * b + 1) + c
    },
    easeInOutCubic: function (a, b, c, d, e) {
      return (b /= e / 2) < 1
        ? (d / 2) * b * b * b + c
        : (d / 2) * ((b -= 2) * b * b + 2) + c
    },
    easeInQuart: function (a, b, c, d, e) {
      return d * (b /= e) * b * b * b + c
    },
    easeOutQuart: function (a, b, c, d, e) {
      return -d * ((b = b / e - 1) * b * b * b - 1) + c
    },
    easeInOutQuart: function (a, b, c, d, e) {
      return (b /= e / 2) < 1
        ? (d / 2) * b * b * b * b + c
        : (-d / 2) * ((b -= 2) * b * b * b - 2) + c
    },
    easeInQuint: function (a, b, c, d, e) {
      return d * (b /= e) * b * b * b * b + c
    },
    easeOutQuint: function (a, b, c, d, e) {
      return d * ((b = b / e - 1) * b * b * b * b + 1) + c
    },
    easeInOutQuint: function (a, b, c, d, e) {
      return (b /= e / 2) < 1
        ? (d / 2) * b * b * b * b * b + c
        : (d / 2) * ((b -= 2) * b * b * b * b + 2) + c
    },
    easeInSine: function (a, b, c, d, e) {
      return -d * Math.cos((b / e) * (Math.PI / 2)) + d + c
    },
    easeOutSine: function (a, b, c, d, e) {
      return d * Math.sin((b / e) * (Math.PI / 2)) + c
    },
    easeInOutSine: function (a, b, c, d, e) {
      return (-d / 2) * (Math.cos((Math.PI * b) / e) - 1) + c
    },
    easeInExpo: function (a, b, c, d, e) {
      return 0 == b ? c : d * Math.pow(2, 10 * (b / e - 1)) + c
    },
    easeOutExpo: function (a, b, c, d, e) {
      return b == e ? c + d : d * (1 - Math.pow(2, (-10 * b) / e)) + c
    },
    easeInOutExpo: function (a, b, c, d, e) {
      return 0 == b
        ? c
        : b == e
        ? c + d
        : (b /= e / 2) < 1
        ? (d / 2) * Math.pow(2, 10 * (b - 1)) + c
        : (d / 2) * (2 - Math.pow(2, -10 * --b)) + c
    },
    easeInCirc: function (a, b, c, d, e) {
      return -d * (Math.sqrt(1 - (b /= e) * b) - 1) + c
    },
    easeOutCirc: function (a, b, c, d, e) {
      return d * Math.sqrt(1 - (b = b / e - 1) * b) + c
    },
    easeInOutCirc: function (a, b, c, d, e) {
      return (b /= e / 2) < 1
        ? (-d / 2) * (Math.sqrt(1 - b * b) - 1) + c
        : (d / 2) * (Math.sqrt(1 - (b -= 2) * b) + 1) + c
    },
    easeInElastic: function (a, b, c, d, e) {
      var f = 1.70158,
        g = 0,
        h = d
      if (0 == b) return c
      if (1 == (b /= e)) return c + d
      if ((g || (g = 0.3 * e), h < Math.abs(d))) {
        h = d
        var f = g / 4
      } else var f = (g / (2 * Math.PI)) * Math.asin(d / h)
      return (
        -h *
          Math.pow(2, 10 * (b -= 1)) *
          Math.sin(((b * e - f) * (2 * Math.PI)) / g) +
        c
      )
    },
    easeOutElastic: function (a, b, c, d, e) {
      var f = 1.70158,
        g = 0,
        h = d
      if (0 == b) return c
      if (1 == (b /= e)) return c + d
      if ((g || (g = 0.3 * e), h < Math.abs(d))) {
        h = d
        var f = g / 4
      } else var f = (g / (2 * Math.PI)) * Math.asin(d / h)
      return (
        h * Math.pow(2, -10 * b) * Math.sin(((b * e - f) * (2 * Math.PI)) / g) +
        d +
        c
      )
    },
    easeInOutElastic: function (a, b, c, d, e) {
      var f = 1.70158,
        g = 0,
        h = d
      if (0 == b) return c
      if (2 == (b /= e / 2)) return c + d
      if ((g || (g = e * (0.3 * 1.5)), h < Math.abs(d))) {
        h = d
        var f = g / 4
      } else var f = (g / (2 * Math.PI)) * Math.asin(d / h)
      return b < 1
        ? h *
            Math.pow(2, 10 * (b -= 1)) *
            Math.sin(((b * e - f) * (2 * Math.PI)) / g) *
            -0.5 +
            c
        : h *
            Math.pow(2, -10 * (b -= 1)) *
            Math.sin(((b * e - f) * (2 * Math.PI)) / g) *
            0.5 +
            d +
            c
    },
    easeInBack: function (a, b, c, d, e, f) {
      return (
        void 0 == f && (f = 1.70158), d * (b /= e) * b * ((f + 1) * b - f) + c
      )
    },
    easeOutBack: function (a, b, c, d, e, f) {
      return (
        void 0 == f && (f = 1.70158),
        d * ((b = b / e - 1) * b * ((f + 1) * b + f) + 1) + c
      )
    },
    easeInOutBack: function (a, b, c, d, e, f) {
      return (
        void 0 == f && (f = 1.70158),
        (b /= e / 2) < 1
          ? (d / 2) * (b * b * ((1 + (f *= 1.525)) * b - f)) + c
          : (d / 2) * ((b -= 2) * b * ((1 + (f *= 1.525)) * b + f) + 2) + c
      )
    },
    easeInBounce: function (a, b, c, d, e) {
      return d - jQuery.easing.easeOutBounce(a, e - b, 0, d, e) + c
    },
    easeOutBounce: function (a, b, c, d, e) {
      return (b /= e) < 1 / 2.75
        ? d * (7.5625 * b * b) + c
        : b < 2 / 2.75
        ? d * (7.5625 * (b -= 1.5 / 2.75) * b + 0.75) + c
        : b < 2.5 / 2.75
        ? d * (7.5625 * (b -= 2.25 / 2.75) * b + 0.9375) + c
        : d * (7.5625 * (b -= 2.625 / 2.75) * b + 0.984375) + c
    },
    easeInOutBounce: function (a, b, c, d, e) {
      return b < e / 2
        ? 0.5 * jQuery.easing.easeInBounce(a, 2 * b, 0, d, e) + c
        : 0.5 * jQuery.easing.easeOutBounce(a, 2 * b - e, 0, d, e) + 0.5 * d + c
    },
  }),
  (function (a) {
    function b() {}
    function c(a) {
      function c(b) {
        b.prototype.option ||
          (b.prototype.option = function (b) {
            a.isPlainObject(b) && (this.options = a.extend(!0, this.options, b))
          })
      }
      function e(b, c) {
        a.fn[b] = function (e) {
          if ("string" == typeof e) {
            for (
              var g = d.call(arguments, 1), h = 0, i = this.length;
              i > h;
              h++
            ) {
              var j = this[h],
                k = a.data(j, b)
              if (k)
                if (a.isFunction(k[e]) && "_" !== e.charAt(0)) {
                  var l = k[e].apply(k, g)
                  if (void 0 !== l) return l
                } else f("no such method '" + e + "' for " + b + " instance")
              else
                f(
                  "cannot call methods on " +
                    b +
                    " prior to initialization; attempted to call '" +
                    e +
                    "'"
                )
            }
            return this
          }
          return this.each(function () {
            var d = a.data(this, b)
            d
              ? (d.option(e), d._init())
              : ((d = new c(this, e)), a.data(this, b, d))
          })
        }
      }
      if (a) {
        var f =
          "undefined" == typeof console
            ? b
            : function (a) {
                console.error(a)
              }
        return (
          (a.bridget = function (a, b) {
            c(b), e(a, b)
          }),
          a.bridget
        )
      }
    }
    var d = Array.prototype.slice
    "function" == typeof define && define.amd
      ? define("jquery-bridget/jquery.bridget", ["jquery"], c)
      : c("object" == typeof exports ? require("jquery") : a.jQuery)
  })(window),
  (function (a) {
    function b(b) {
      var c = a.event
      return (c.target = c.target || c.srcElement || b), c
    }
    var c = document.documentElement,
      d = function () {}
    c.addEventListener
      ? (d = function (a, b, c) {
          a.addEventListener(b, c, !1)
        })
      : c.attachEvent &&
        (d = function (a, c, d) {
          ;(a[c + d] = d.handleEvent
            ? function () {
                var c = b(a)
                d.handleEvent.call(d, c)
              }
            : function () {
                var c = b(a)
                d.call(a, c)
              }),
            a.attachEvent("on" + c, a[c + d])
        })
    var e = function () {}
    c.removeEventListener
      ? (e = function (a, b, c) {
          a.removeEventListener(b, c, !1)
        })
      : c.detachEvent &&
        (e = function (a, b, c) {
          a.detachEvent("on" + b, a[b + c])
          try {
            delete a[b + c]
          } catch (d) {
            a[b + c] = void 0
          }
        })
    var f = { bind: d, unbind: e }
    "function" == typeof define && define.amd
      ? define("eventie/eventie", f)
      : "object" == typeof exports
      ? (module.exports = f)
      : (a.eventie = f)
  })(window),
  function () {
    function a() {}
    function b(a, b) {
      for (var c = a.length; c--; ) if (a[c].listener === b) return c
      return -1
    }
    function c(a) {
      return function () {
        return this[a].apply(this, arguments)
      }
    }
    var d = a.prototype,
      e = this,
      f = e.EventEmitter
    ;(d.getListeners = function (a) {
      var b,
        c,
        d = this._getEvents()
      if (a instanceof RegExp) {
        b = {}
        for (c in d) d.hasOwnProperty(c) && a.test(c) && (b[c] = d[c])
      } else b = d[a] || (d[a] = [])
      return b
    }),
      (d.flattenListeners = function (a) {
        var b,
          c = []
        for (b = 0; b < a.length; b += 1) c.push(a[b].listener)
        return c
      }),
      (d.getListenersAsObject = function (a) {
        var b,
          c = this.getListeners(a)
        return c instanceof Array && ((b = {}), (b[a] = c)), b || c
      }),
      (d.addListener = function (a, c) {
        var d,
          e = this.getListenersAsObject(a),
          f = "object" == typeof c
        for (d in e)
          e.hasOwnProperty(d) &&
            -1 === b(e[d], c) &&
            e[d].push(f ? c : { listener: c, once: !1 })
        return this
      }),
      (d.on = c("addListener")),
      (d.addOnceListener = function (a, b) {
        return this.addListener(a, { listener: b, once: !0 })
      }),
      (d.once = c("addOnceListener")),
      (d.defineEvent = function (a) {
        return this.getListeners(a), this
      }),
      (d.defineEvents = function (a) {
        for (var b = 0; b < a.length; b += 1) this.defineEvent(a[b])
        return this
      }),
      (d.removeListener = function (a, c) {
        var d,
          e,
          f = this.getListenersAsObject(a)
        for (e in f)
          f.hasOwnProperty(e) && -1 !== (d = b(f[e], c)) && f[e].splice(d, 1)
        return this
      }),
      (d.off = c("removeListener")),
      (d.addListeners = function (a, b) {
        return this.manipulateListeners(!1, a, b)
      }),
      (d.removeListeners = function (a, b) {
        return this.manipulateListeners(!0, a, b)
      }),
      (d.manipulateListeners = function (a, b, c) {
        var d,
          e,
          f = a ? this.removeListener : this.addListener,
          g = a ? this.removeListeners : this.addListeners
        if ("object" != typeof b || b instanceof RegExp)
          for (d = c.length; d--; ) f.call(this, b, c[d])
        else
          for (d in b)
            b.hasOwnProperty(d) &&
              (e = b[d]) &&
              ("function" == typeof e ? f.call(this, d, e) : g.call(this, d, e))
        return this
      }),
      (d.removeEvent = function (a) {
        var b,
          c = typeof a,
          d = this._getEvents()
        if ("string" === c) delete d[a]
        else if (a instanceof RegExp)
          for (b in d) d.hasOwnProperty(b) && a.test(b) && delete d[b]
        else delete this._events
        return this
      }),
      (d.removeAllListeners = c("removeEvent")),
      (d.emitEvent = function (a, b) {
        var c,
          d,
          e,
          f = this.getListenersAsObject(a)
        for (e in f)
          if (f.hasOwnProperty(e))
            for (d = f[e].length; d--; )
              (c = f[e][d]),
                !0 === c.once && this.removeListener(a, c.listener),
                c.listener.apply(this, b || []) ===
                  this._getOnceReturnValue() &&
                  this.removeListener(a, c.listener)
        return this
      }),
      (d.trigger = c("emitEvent")),
      (d.emit = function (a) {
        var b = Array.prototype.slice.call(arguments, 1)
        return this.emitEvent(a, b)
      }),
      (d.setOnceReturnValue = function (a) {
        return (this._onceReturnValue = a), this
      }),
      (d._getOnceReturnValue = function () {
        return !this.hasOwnProperty("_onceReturnValue") || this._onceReturnValue
      }),
      (d._getEvents = function () {
        return this._events || (this._events = {})
      }),
      (a.noConflict = function () {
        return (e.EventEmitter = f), a
      }),
      "function" == typeof define && define.amd
        ? define("eventEmitter/EventEmitter", [], function () {
            return a
          })
        : "object" == typeof module && module.exports
        ? (module.exports = a)
        : (e.EventEmitter = a)
  }.call(this),
  (function (a) {
    function b(a) {
      if (a) {
        if ("string" == typeof d[a]) return a
        a = a.charAt(0).toUpperCase() + a.slice(1)
        for (var b, e = 0, f = c.length; f > e; e++)
          if (((b = c[e] + a), "string" == typeof d[b])) return b
      }
    }
    var c = "Webkit Moz ms Ms O".split(" "),
      d = document.documentElement.style
    "function" == typeof define && define.amd
      ? define("get-style-property/get-style-property", [], function () {
          return b
        })
      : "object" == typeof exports
      ? (module.exports = b)
      : (a.getStyleProperty = b)
  })(window),
  (function (a) {
    function b(a) {
      var b = parseFloat(a)
      return -1 === a.indexOf("%") && !isNaN(b) && b
    }
    function c() {}
    function d() {
      for (
        var a = {
            width: 0,
            height: 0,
            innerWidth: 0,
            innerHeight: 0,
            outerWidth: 0,
            outerHeight: 0,
          },
          b = 0,
          c = g.length;
        c > b;
        b++
      ) {
        a[g[b]] = 0
      }
      return a
    }
    function e(c) {
      function e() {
        if (!m) {
          m = !0
          var d = a.getComputedStyle
          if (
            ((j = (function () {
              var a = d
                ? function (a) {
                    return d(a, null)
                  }
                : function (a) {
                    return a.currentStyle
                  }
              return function (b) {
                var c = a(b)
                return (
                  c ||
                    f(
                      "Style returned " +
                        c +
                        ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"
                    ),
                  c
                )
              }
            })()),
            (k = c("boxSizing")))
          ) {
            var e = document.createElement("div")
            ;(e.style.width = "200px"),
              (e.style.padding = "1px 2px 3px 4px"),
              (e.style.borderStyle = "solid"),
              (e.style.borderWidth = "1px 2px 3px 4px"),
              (e.style[k] = "border-box")
            var g = document.body || document.documentElement
            g.appendChild(e)
            var h = j(e)
            ;(l = 200 === b(h.width)), g.removeChild(e)
          }
        }
      }
      function h(a) {
        if (
          (e(),
          "string" == typeof a && (a = document.querySelector(a)),
          a && "object" == typeof a && a.nodeType)
        ) {
          var c = j(a)
          if ("none" === c.display) return d()
          var f = {}
          ;(f.width = a.offsetWidth), (f.height = a.offsetHeight)
          for (
            var h = (f.isBorderBox = !(!k || !c[k] || "border-box" !== c[k])),
              m = 0,
              n = g.length;
            n > m;
            m++
          ) {
            var o = g[m],
              p = c[o]
            p = i(a, p)
            var q = parseFloat(p)
            f[o] = isNaN(q) ? 0 : q
          }
          var r = f.paddingLeft + f.paddingRight,
            s = f.paddingTop + f.paddingBottom,
            t = f.marginLeft + f.marginRight,
            u = f.marginTop + f.marginBottom,
            v = f.borderLeftWidth + f.borderRightWidth,
            w = f.borderTopWidth + f.borderBottomWidth,
            x = h && l,
            y = b(c.width)
          !1 !== y && (f.width = y + (x ? 0 : r + v))
          var z = b(c.height)
          return (
            !1 !== z && (f.height = z + (x ? 0 : s + w)),
            (f.innerWidth = f.width - (r + v)),
            (f.innerHeight = f.height - (s + w)),
            (f.outerWidth = f.width + t),
            (f.outerHeight = f.height + u),
            f
          )
        }
      }
      function i(b, c) {
        if (a.getComputedStyle || -1 === c.indexOf("%")) return c
        var d = b.style,
          e = d.left,
          f = b.runtimeStyle,
          g = f && f.left
        return (
          g && (f.left = b.currentStyle.left),
          (d.left = c),
          (c = d.pixelLeft),
          (d.left = e),
          g && (f.left = g),
          c
        )
      }
      var j,
        k,
        l,
        m = !1
      return h
    }
    var f =
        "undefined" == typeof console
          ? c
          : function (a) {
              console.error(a)
            },
      g = [
        "paddingLeft",
        "paddingRight",
        "paddingTop",
        "paddingBottom",
        "marginLeft",
        "marginRight",
        "marginTop",
        "marginBottom",
        "borderLeftWidth",
        "borderRightWidth",
        "borderTopWidth",
        "borderBottomWidth",
      ]
    "function" == typeof define && define.amd
      ? define("get-size/get-size", [
          "get-style-property/get-style-property",
        ], e)
      : "object" == typeof exports
      ? (module.exports = e(require("desandro-get-style-property")))
      : (a.getSize = e(a.getStyleProperty))
  })(window),
  (function (a) {
    function b(a) {
      "function" == typeof a && (b.isReady ? a() : g.push(a))
    }
    function c(a) {
      var c = "readystatechange" === a.type && "complete" !== f.readyState
      b.isReady || c || d()
    }
    function d() {
      b.isReady = !0
      for (var a = 0, c = g.length; c > a; a++) {
        ;(0, g[a])()
      }
    }
    function e(e) {
      return (
        "complete" === f.readyState
          ? d()
          : (e.bind(f, "DOMContentLoaded", c),
            e.bind(f, "readystatechange", c),
            e.bind(a, "load", c)),
        b
      )
    }
    var f = a.document,
      g = []
    ;(b.isReady = !1),
      "function" == typeof define && define.amd
        ? define("doc-ready/doc-ready", ["eventie/eventie"], e)
        : "object" == typeof exports
        ? (module.exports = e(require("eventie")))
        : (a.docReady = e(a.eventie))
  })(window),
  (function (a) {
    function b(a, b) {
      return a[g](b)
    }
    function c(a) {
      if (!a.parentNode) {
        document.createDocumentFragment().appendChild(a)
      }
    }
    function d(a, b) {
      c(a)
      for (
        var d = a.parentNode.querySelectorAll(b), e = 0, f = d.length;
        f > e;
        e++
      )
        if (d[e] === a) return !0
      return !1
    }
    function e(a, d) {
      return c(a), b(a, d)
    }
    var f,
      g = (function () {
        if (a.matches) return "matches"
        if (a.matchesSelector) return "matchesSelector"
        for (
          var b = ["webkit", "moz", "ms", "o"], c = 0, d = b.length;
          d > c;
          c++
        ) {
          var e = b[c],
            f = e + "MatchesSelector"
          if (a[f]) return f
        }
      })()
    if (g) {
      var h = document.createElement("div"),
        i = b(h, "div")
      f = i ? b : e
    } else f = d
    "function" == typeof define && define.amd
      ? define("matches-selector/matches-selector", [], function () {
          return f
        })
      : "object" == typeof exports
      ? (module.exports = f)
      : (window.matchesSelector = f)
  })(Element.prototype),
  (function (a, b) {
    "function" == typeof define && define.amd
      ? define("fizzy-ui-utils/utils", [
          "doc-ready/doc-ready",
          "matches-selector/matches-selector",
        ], function (c, d) {
          return b(a, c, d)
        })
      : "object" == typeof exports
      ? (module.exports = b(
          a,
          require("doc-ready"),
          require("desandro-matches-selector")
        ))
      : (a.fizzyUIUtils = b(a, a.docReady, a.matchesSelector))
  })(window, function (a, b, c) {
    var d = {}
    ;(d.extend = function (a, b) {
      for (var c in b) a[c] = b[c]
      return a
    }),
      (d.modulo = function (a, b) {
        return ((a % b) + b) % b
      })
    var e = Object.prototype.toString
    ;(d.isArray = function (a) {
      return "[object Array]" == e.call(a)
    }),
      (d.makeArray = function (a) {
        var b = []
        if (d.isArray(a)) b = a
        else if (a && "number" == typeof a.length)
          for (var c = 0, e = a.length; e > c; c++) b.push(a[c])
        else b.push(a)
        return b
      }),
      (d.indexOf = Array.prototype.indexOf
        ? function (a, b) {
            return a.indexOf(b)
          }
        : function (a, b) {
            for (var c = 0, d = a.length; d > c; c++) if (a[c] === b) return c
            return -1
          }),
      (d.removeFrom = function (a, b) {
        var c = d.indexOf(a, b)
        ;-1 != c && a.splice(c, 1)
      }),
      (d.isElement =
        "function" == typeof HTMLElement || "object" == typeof HTMLElement
          ? function (a) {
              return a instanceof HTMLElement
            }
          : function (a) {
              return (
                a &&
                "object" == typeof a &&
                1 == a.nodeType &&
                "string" == typeof a.nodeName
              )
            }),
      (d.setText = (function () {
        function a(a, c) {
          ;(b =
            b ||
            (void 0 !== document.documentElement.textContent
              ? "textContent"
              : "innerText")),
            (a[b] = c)
        }
        var b
        return a
      })()),
      (d.getParent = function (a, b) {
        for (; a != document.body; ) if (((a = a.parentNode), c(a, b))) return a
      }),
      (d.getQueryElement = function (a) {
        return "string" == typeof a ? document.querySelector(a) : a
      }),
      (d.handleEvent = function (a) {
        var b = "on" + a.type
        this[b] && this[b](a)
      }),
      (d.filterFindElements = function (a, b) {
        a = d.makeArray(a)
        for (var e = [], f = 0, g = a.length; g > f; f++) {
          var h = a[f]
          if (d.isElement(h))
            if (b) {
              c(h, b) && e.push(h)
              for (
                var i = h.querySelectorAll(b), j = 0, k = i.length;
                k > j;
                j++
              )
                e.push(i[j])
            } else e.push(h)
        }
        return e
      }),
      (d.debounceMethod = function (a, b, c) {
        var d = a.prototype[b],
          e = b + "Timeout"
        a.prototype[b] = function () {
          var a = this[e]
          a && clearTimeout(a)
          var b = arguments,
            f = this
          this[e] = setTimeout(function () {
            d.apply(f, b), delete f[e]
          }, c || 100)
        }
      }),
      (d.toDashed = function (a) {
        return a
          .replace(/(.)([A-Z])/g, function (a, b, c) {
            return b + "-" + c
          })
          .toLowerCase()
      })
    var f = a.console
    return (
      (d.htmlInit = function (c, e) {
        b(function () {
          for (
            var b = d.toDashed(e),
              g = document.querySelectorAll(".js-" + b),
              h = "data-" + b + "-options",
              i = 0,
              j = g.length;
            j > i;
            i++
          ) {
            var k,
              l = g[i],
              m = l.getAttribute(h)
            try {
              k = m && JSON.parse(m)
            } catch (a) {
              f &&
                f.error(
                  "Error parsing " +
                    h +
                    " on " +
                    l.nodeName.toLowerCase() +
                    (l.id ? "#" + l.id : "") +
                    ": " +
                    a
                )
              continue
            }
            var n = new c(l, k),
              o = a.jQuery
            o && o.data(l, e, n)
          }
        })
      }),
      d
    )
  }),
  (function (a, b) {
    "function" == typeof define && define.amd
      ? define("outlayer/item", [
          "eventEmitter/EventEmitter",
          "get-size/get-size",
          "get-style-property/get-style-property",
          "fizzy-ui-utils/utils",
        ], function (c, d, e, f) {
          return b(a, c, d, e, f)
        })
      : "object" == typeof exports
      ? (module.exports = b(
          a,
          require("wolfy87-eventemitter"),
          require("get-size"),
          require("desandro-get-style-property"),
          require("fizzy-ui-utils")
        ))
      : ((a.Outlayer = {}),
        (a.Outlayer.Item = b(
          a,
          a.EventEmitter,
          a.getSize,
          a.getStyleProperty,
          a.fizzyUIUtils
        )))
  })(window, function (a, b, c, d, e) {
    function f(a) {
      for (var b in a) return !1
      return null, !0
    }
    function g(a, b) {
      a &&
        ((this.element = a),
        (this.layout = b),
        (this.position = { x: 0, y: 0 }),
        this._create())
    }
    var h = a.getComputedStyle,
      i = h
        ? function (a) {
            return h(a, null)
          }
        : function (a) {
            return a.currentStyle
          },
      j = d("transition"),
      k = d("transform"),
      l = j && k,
      m = !!d("perspective"),
      n = {
        WebkitTransition: "webkitTransitionEnd",
        MozTransition: "transitionend",
        OTransition: "otransitionend",
        transition: "transitionend",
      }[j],
      o = [
        "transform",
        "transition",
        "transitionDuration",
        "transitionProperty",
      ],
      p = (function () {
        for (var a = {}, b = 0, c = o.length; c > b; b++) {
          var e = o[b],
            f = d(e)
          f && f !== e && (a[e] = f)
        }
        return a
      })()
    e.extend(g.prototype, b.prototype),
      (g.prototype._create = function () {
        ;(this._transn = { ingProperties: {}, clean: {}, onEnd: {} }),
          this.css({ position: "absolute" })
      }),
      (g.prototype.handleEvent = function (a) {
        var b = "on" + a.type
        this[b] && this[b](a)
      }),
      (g.prototype.getSize = function () {
        this.size = c(this.element)
      }),
      (g.prototype.css = function (a) {
        var b = this.element.style
        for (var c in a) {
          b[p[c] || c] = a[c]
        }
      }),
      (g.prototype.getPosition = function () {
        var a = i(this.element),
          b = this.layout.options,
          c = b.isOriginLeft,
          d = b.isOriginTop,
          e = a[c ? "left" : "right"],
          f = a[d ? "top" : "bottom"],
          g = this.layout.size,
          h =
            -1 != e.indexOf("%")
              ? (parseFloat(e) / 100) * g.width
              : parseInt(e, 10),
          j =
            -1 != f.indexOf("%")
              ? (parseFloat(f) / 100) * g.height
              : parseInt(f, 10)
        ;(h = isNaN(h) ? 0 : h),
          (j = isNaN(j) ? 0 : j),
          (h -= c ? g.paddingLeft : g.paddingRight),
          (j -= d ? g.paddingTop : g.paddingBottom),
          (this.position.x = h),
          (this.position.y = j)
      }),
      (g.prototype.layoutPosition = function () {
        var a = this.layout.size,
          b = this.layout.options,
          c = {},
          d = b.isOriginLeft ? "paddingLeft" : "paddingRight",
          e = b.isOriginLeft ? "left" : "right",
          f = b.isOriginLeft ? "right" : "left",
          g = this.position.x + a[d]
        ;(c[e] = this.getXValue(g)), (c[f] = "")
        var h = b.isOriginTop ? "paddingTop" : "paddingBottom",
          i = b.isOriginTop ? "top" : "bottom",
          j = b.isOriginTop ? "bottom" : "top",
          k = this.position.y + a[h]
        ;(c[i] = this.getYValue(k)),
          (c[j] = ""),
          this.css(c),
          this.emitEvent("layout", [this])
      }),
      (g.prototype.getXValue = function (a) {
        var b = this.layout.options
        return b.percentPosition && !b.isHorizontal
          ? (a / this.layout.size.width) * 100 + "%"
          : a + "px"
      }),
      (g.prototype.getYValue = function (a) {
        var b = this.layout.options
        return b.percentPosition && b.isHorizontal
          ? (a / this.layout.size.height) * 100 + "%"
          : a + "px"
      }),
      (g.prototype._transitionTo = function (a, b) {
        this.getPosition()
        var c = this.position.x,
          d = this.position.y,
          e = parseInt(a, 10),
          f = parseInt(b, 10),
          g = e === this.position.x && f === this.position.y
        if ((this.setPosition(a, b), g && !this.isTransitioning))
          return void this.layoutPosition()
        var h = a - c,
          i = b - d,
          j = {}
        ;(j.transform = this.getTranslate(h, i)),
          this.transition({
            to: j,
            onTransitionEnd: { transform: this.layoutPosition },
            isCleaning: !0,
          })
      }),
      (g.prototype.getTranslate = function (a, b) {
        var c = this.layout.options
        return (
          (a = c.isOriginLeft ? a : -a),
          (b = c.isOriginTop ? b : -b),
          m
            ? "translate3d(" + a + "px, " + b + "px, 0)"
            : "translate(" + a + "px, " + b + "px)"
        )
      }),
      (g.prototype.goTo = function (a, b) {
        this.setPosition(a, b), this.layoutPosition()
      }),
      (g.prototype.moveTo = l ? g.prototype._transitionTo : g.prototype.goTo),
      (g.prototype.setPosition = function (a, b) {
        ;(this.position.x = parseInt(a, 10)),
          (this.position.y = parseInt(b, 10))
      }),
      (g.prototype._nonTransition = function (a) {
        this.css(a.to), a.isCleaning && this._removeStyles(a.to)
        for (var b in a.onTransitionEnd) a.onTransitionEnd[b].call(this)
      }),
      (g.prototype._transition = function (a) {
        if (!parseFloat(this.layout.options.transitionDuration))
          return void this._nonTransition(a)
        var b = this._transn
        for (var c in a.onTransitionEnd) b.onEnd[c] = a.onTransitionEnd[c]
        for (c in a.to)
          (b.ingProperties[c] = !0), a.isCleaning && (b.clean[c] = !0)
        if (a.from) {
          this.css(a.from)
          this.element.offsetHeight
          null
        }
        this.enableTransition(a.to), this.css(a.to), (this.isTransitioning = !0)
      })
    var q =
      "opacity," +
      (function (a) {
        return a.replace(/([A-Z])/g, function (a) {
          return "-" + a.toLowerCase()
        })
      })(p.transform || "transform")
    ;(g.prototype.enableTransition = function () {
      this.isTransitioning ||
        (this.css({
          transitionProperty: q,
          transitionDuration: this.layout.options.transitionDuration,
        }),
        this.element.addEventListener(n, this, !1))
    }),
      (g.prototype.transition =
        g.prototype[j ? "_transition" : "_nonTransition"]),
      (g.prototype.onwebkitTransitionEnd = function (a) {
        this.ontransitionend(a)
      }),
      (g.prototype.onotransitionend = function (a) {
        this.ontransitionend(a)
      })
    var r = {
      "-webkit-transform": "transform",
      "-moz-transform": "transform",
      "-o-transform": "transform",
    }
    ;(g.prototype.ontransitionend = function (a) {
      if (a.target === this.element) {
        var b = this._transn,
          c = r[a.propertyName] || a.propertyName
        if (
          (delete b.ingProperties[c],
          f(b.ingProperties) && this.disableTransition(),
          c in b.clean &&
            ((this.element.style[a.propertyName] = ""), delete b.clean[c]),
          c in b.onEnd)
        ) {
          b.onEnd[c].call(this), delete b.onEnd[c]
        }
        this.emitEvent("transitionEnd", [this])
      }
    }),
      (g.prototype.disableTransition = function () {
        this.removeTransitionStyles(),
          this.element.removeEventListener(n, this, !1),
          (this.isTransitioning = !1)
      }),
      (g.prototype._removeStyles = function (a) {
        var b = {}
        for (var c in a) b[c] = ""
        this.css(b)
      })
    var s = { transitionProperty: "", transitionDuration: "" }
    return (
      (g.prototype.removeTransitionStyles = function () {
        this.css(s)
      }),
      (g.prototype.removeElem = function () {
        this.element.parentNode.removeChild(this.element),
          this.css({ display: "" }),
          this.emitEvent("remove", [this])
      }),
      (g.prototype.remove = function () {
        if (!j || !parseFloat(this.layout.options.transitionDuration))
          return void this.removeElem()
        var a = this
        this.once("transitionEnd", function () {
          a.removeElem()
        }),
          this.hide()
      }),
      (g.prototype.reveal = function () {
        delete this.isHidden, this.css({ display: "" })
        var a = this.layout.options,
          b = {}
        ;(b[
          this.getHideRevealTransitionEndProperty("visibleStyle")
        ] = this.onRevealTransitionEnd),
          this.transition({
            from: a.hiddenStyle,
            to: a.visibleStyle,
            isCleaning: !0,
            onTransitionEnd: b,
          })
      }),
      (g.prototype.onRevealTransitionEnd = function () {
        this.isHidden || this.emitEvent("reveal")
      }),
      (g.prototype.getHideRevealTransitionEndProperty = function (a) {
        var b = this.layout.options[a]
        if (b.opacity) return "opacity"
        for (var c in b) return c
      }),
      (g.prototype.hide = function () {
        ;(this.isHidden = !0), this.css({ display: "" })
        var a = this.layout.options,
          b = {}
        ;(b[
          this.getHideRevealTransitionEndProperty("hiddenStyle")
        ] = this.onHideTransitionEnd),
          this.transition({
            from: a.visibleStyle,
            to: a.hiddenStyle,
            isCleaning: !0,
            onTransitionEnd: b,
          })
      }),
      (g.prototype.onHideTransitionEnd = function () {
        this.isHidden && (this.css({ display: "none" }), this.emitEvent("hide"))
      }),
      (g.prototype.destroy = function () {
        this.css({
          position: "",
          left: "",
          right: "",
          top: "",
          bottom: "",
          transition: "",
          transform: "",
        })
      }),
      g
    )
  }),
  (function (a, b) {
    "function" == typeof define && define.amd
      ? define("outlayer/outlayer", [
          "eventie/eventie",
          "eventEmitter/EventEmitter",
          "get-size/get-size",
          "fizzy-ui-utils/utils",
          "./item",
        ], function (c, d, e, f, g) {
          return b(a, c, d, e, f, g)
        })
      : "object" == typeof exports
      ? (module.exports = b(
          a,
          require("eventie"),
          require("wolfy87-eventemitter"),
          require("get-size"),
          require("fizzy-ui-utils"),
          require("./item")
        ))
      : (a.Outlayer = b(
          a,
          a.eventie,
          a.EventEmitter,
          a.getSize,
          a.fizzyUIUtils,
          a.Outlayer.Item
        ))
  })(window, function (a, b, c, d, e, f) {
    function g(a, b) {
      var c = e.getQueryElement(a)
      if (!c)
        return void (
          h &&
          h.error(
            "Bad element for " + this.constructor.namespace + ": " + (c || a)
          )
        )
      ;(this.element = c),
        i && (this.$element = i(this.element)),
        (this.options = e.extend({}, this.constructor.defaults)),
        this.option(b)
      var d = ++k
      ;(this.element.outlayerGUID = d),
        (l[d] = this),
        this._create(),
        this.options.isInitLayout && this.layout()
    }
    var h = a.console,
      i = a.jQuery,
      j = function () {},
      k = 0,
      l = {}
    return (
      (g.namespace = "outlayer"),
      (g.Item = f),
      (g.defaults = {
        containerStyle: { position: "relative" },
        isInitLayout: !0,
        isOriginLeft: !0,
        isOriginTop: !0,
        isResizeBound: !0,
        isResizingContainer: !0,
        transitionDuration: "0.4s",
        hiddenStyle: { opacity: 0, transform: "scale(0.001)" },
        visibleStyle: { opacity: 1, transform: "scale(1)" },
      }),
      e.extend(g.prototype, c.prototype),
      (g.prototype.option = function (a) {
        e.extend(this.options, a)
      }),
      (g.prototype._create = function () {
        this.reloadItems(),
          (this.stamps = []),
          this.stamp(this.options.stamp),
          e.extend(this.element.style, this.options.containerStyle),
          this.options.isResizeBound && this.bindResize()
      }),
      (g.prototype.reloadItems = function () {
        this.items = this._itemize(this.element.children)
      }),
      (g.prototype._itemize = function (a) {
        for (
          var b = this._filterFindItemElements(a),
            c = this.constructor.Item,
            d = [],
            e = 0,
            f = b.length;
          f > e;
          e++
        ) {
          var g = b[e],
            h = new c(g, this)
          d.push(h)
        }
        return d
      }),
      (g.prototype._filterFindItemElements = function (a) {
        return e.filterFindElements(a, this.options.itemSelector)
      }),
      (g.prototype.getItemElements = function () {
        for (var a = [], b = 0, c = this.items.length; c > b; b++)
          a.push(this.items[b].element)
        return a
      }),
      (g.prototype.layout = function () {
        this._resetLayout(), this._manageStamps()
        var a =
          void 0 !== this.options.isLayoutInstant
            ? this.options.isLayoutInstant
            : !this._isLayoutInited
        this.layoutItems(this.items, a), (this._isLayoutInited = !0)
      }),
      (g.prototype._init = g.prototype.layout),
      (g.prototype._resetLayout = function () {
        this.getSize()
      }),
      (g.prototype.getSize = function () {
        this.size = d(this.element)
      }),
      (g.prototype._getMeasurement = function (a, b) {
        var c,
          f = this.options[a]
        f
          ? ("string" == typeof f
              ? (c = this.element.querySelector(f))
              : e.isElement(f) && (c = f),
            (this[a] = c ? d(c)[b] : f))
          : (this[a] = 0)
      }),
      (g.prototype.layoutItems = function (a, b) {
        ;(a = this._getItemsForLayout(a)),
          this._layoutItems(a, b),
          this._postLayout()
      }),
      (g.prototype._getItemsForLayout = function (a) {
        for (var b = [], c = 0, d = a.length; d > c; c++) {
          var e = a[c]
          e.isIgnored || b.push(e)
        }
        return b
      }),
      (g.prototype._layoutItems = function (a, b) {
        if ((this._emitCompleteOnItems("layout", a), a && a.length)) {
          for (var c = [], d = 0, e = a.length; e > d; d++) {
            var f = a[d],
              g = this._getItemLayoutPosition(f)
            ;(g.item = f), (g.isInstant = b || f.isLayoutInstant), c.push(g)
          }
          this._processLayoutQueue(c)
        }
      }),
      (g.prototype._getItemLayoutPosition = function () {
        return { x: 0, y: 0 }
      }),
      (g.prototype._processLayoutQueue = function (a) {
        for (var b = 0, c = a.length; c > b; b++) {
          var d = a[b]
          this._positionItem(d.item, d.x, d.y, d.isInstant)
        }
      }),
      (g.prototype._positionItem = function (a, b, c, d) {
        d ? a.goTo(b, c) : a.moveTo(b, c)
      }),
      (g.prototype._postLayout = function () {
        this.resizeContainer()
      }),
      (g.prototype.resizeContainer = function () {
        if (this.options.isResizingContainer) {
          var a = this._getContainerSize()
          a &&
            (this._setContainerMeasure(a.width, !0),
            this._setContainerMeasure(a.height, !1))
        }
      }),
      (g.prototype._getContainerSize = j),
      (g.prototype._setContainerMeasure = function (a, b) {
        if (void 0 !== a) {
          var c = this.size
          c.isBorderBox &&
            (a += b
              ? c.paddingLeft +
                c.paddingRight +
                c.borderLeftWidth +
                c.borderRightWidth
              : c.paddingBottom +
                c.paddingTop +
                c.borderTopWidth +
                c.borderBottomWidth),
            (a = Math.max(a, 0)),
            (this.element.style[b ? "width" : "height"] = a + "px")
        }
      }),
      (g.prototype._emitCompleteOnItems = function (a, b) {
        function c() {
          e.dispatchEvent(a + "Complete", null, [b])
        }
        function d() {
          ++g === f && c()
        }
        var e = this,
          f = b.length
        if (!b || !f) return void c()
        for (var g = 0, h = 0, i = b.length; i > h; h++) {
          b[h].once(a, d)
        }
      }),
      (g.prototype.dispatchEvent = function (a, b, c) {
        var d = b ? [b].concat(c) : c
        if ((this.emitEvent(a, d), i))
          if (((this.$element = this.$element || i(this.element)), b)) {
            var e = i.Event(b)
            ;(e.type = a), this.$element.trigger(e, c)
          } else this.$element.trigger(a, c)
      }),
      (g.prototype.ignore = function (a) {
        var b = this.getItem(a)
        b && (b.isIgnored = !0)
      }),
      (g.prototype.unignore = function (a) {
        var b = this.getItem(a)
        b && delete b.isIgnored
      }),
      (g.prototype.stamp = function (a) {
        if ((a = this._find(a))) {
          this.stamps = this.stamps.concat(a)
          for (var b = 0, c = a.length; c > b; b++) {
            var d = a[b]
            this.ignore(d)
          }
        }
      }),
      (g.prototype.unstamp = function (a) {
        if ((a = this._find(a)))
          for (var b = 0, c = a.length; c > b; b++) {
            var d = a[b]
            e.removeFrom(this.stamps, d), this.unignore(d)
          }
      }),
      (g.prototype._find = function (a) {
        return a
          ? ("string" == typeof a && (a = this.element.querySelectorAll(a)),
            (a = e.makeArray(a)))
          : void 0
      }),
      (g.prototype._manageStamps = function () {
        if (this.stamps && this.stamps.length) {
          this._getBoundingRect()
          for (var a = 0, b = this.stamps.length; b > a; a++) {
            var c = this.stamps[a]
            this._manageStamp(c)
          }
        }
      }),
      (g.prototype._getBoundingRect = function () {
        var a = this.element.getBoundingClientRect(),
          b = this.size
        this._boundingRect = {
          left: a.left + b.paddingLeft + b.borderLeftWidth,
          top: a.top + b.paddingTop + b.borderTopWidth,
          right: a.right - (b.paddingRight + b.borderRightWidth),
          bottom: a.bottom - (b.paddingBottom + b.borderBottomWidth),
        }
      }),
      (g.prototype._manageStamp = j),
      (g.prototype._getElementOffset = function (a) {
        var b = a.getBoundingClientRect(),
          c = this._boundingRect,
          e = d(a)
        return {
          left: b.left - c.left - e.marginLeft,
          top: b.top - c.top - e.marginTop,
          right: c.right - b.right - e.marginRight,
          bottom: c.bottom - b.bottom - e.marginBottom,
        }
      }),
      (g.prototype.handleEvent = function (a) {
        var b = "on" + a.type
        this[b] && this[b](a)
      }),
      (g.prototype.bindResize = function () {
        this.isResizeBound ||
          (b.bind(a, "resize", this), (this.isResizeBound = !0))
      }),
      (g.prototype.unbindResize = function () {
        this.isResizeBound && b.unbind(a, "resize", this),
          (this.isResizeBound = !1)
      }),
      (g.prototype.onresize = function () {
        function a() {
          b.resize(), delete b.resizeTimeout
        }
        this.resizeTimeout && clearTimeout(this.resizeTimeout)
        var b = this
        this.resizeTimeout = setTimeout(a, 100)
      }),
      (g.prototype.resize = function () {
        this.isResizeBound && this.needsResizeLayout() && this.layout()
      }),
      (g.prototype.needsResizeLayout = function () {
        var a = d(this.element)
        return this.size && a && a.innerWidth !== this.size.innerWidth
      }),
      (g.prototype.addItems = function (a) {
        var b = this._itemize(a)
        return b.length && (this.items = this.items.concat(b)), b
      }),
      (g.prototype.appended = function (a) {
        var b = this.addItems(a)
        b.length && (this.layoutItems(b, !0), this.reveal(b))
      }),
      (g.prototype.prepended = function (a) {
        var b = this._itemize(a)
        if (b.length) {
          var c = this.items.slice(0)
          ;(this.items = b.concat(c)),
            this._resetLayout(),
            this._manageStamps(),
            this.layoutItems(b, !0),
            this.reveal(b),
            this.layoutItems(c)
        }
      }),
      (g.prototype.reveal = function (a) {
        this._emitCompleteOnItems("reveal", a)
        for (var b = a && a.length, c = 0; b && b > c; c++) {
          a[c].reveal()
        }
      }),
      (g.prototype.hide = function (a) {
        this._emitCompleteOnItems("hide", a)
        for (var b = a && a.length, c = 0; b && b > c; c++) {
          a[c].hide()
        }
      }),
      (g.prototype.revealItemElements = function (a) {
        var b = this.getItems(a)
        this.reveal(b)
      }),
      (g.prototype.hideItemElements = function (a) {
        var b = this.getItems(a)
        this.hide(b)
      }),
      (g.prototype.getItem = function (a) {
        for (var b = 0, c = this.items.length; c > b; b++) {
          var d = this.items[b]
          if (d.element === a) return d
        }
      }),
      (g.prototype.getItems = function (a) {
        a = e.makeArray(a)
        for (var b = [], c = 0, d = a.length; d > c; c++) {
          var f = a[c],
            g = this.getItem(f)
          g && b.push(g)
        }
        return b
      }),
      (g.prototype.remove = function (a) {
        var b = this.getItems(a)
        if ((this._emitCompleteOnItems("remove", b), b && b.length))
          for (var c = 0, d = b.length; d > c; c++) {
            var f = b[c]
            f.remove(), e.removeFrom(this.items, f)
          }
      }),
      (g.prototype.destroy = function () {
        var a = this.element.style
        ;(a.height = ""), (a.position = ""), (a.width = "")
        for (var b = 0, c = this.items.length; c > b; b++) {
          this.items[b].destroy()
        }
        this.unbindResize()
        var d = this.element.outlayerGUID
        delete l[d],
          delete this.element.outlayerGUID,
          i && i.removeData(this.element, this.constructor.namespace)
      }),
      (g.data = function (a) {
        a = e.getQueryElement(a)
        var b = a && a.outlayerGUID
        return b && l[b]
      }),
      (g.create = function (a, b) {
        function c() {
          g.apply(this, arguments)
        }
        return (
          Object.create
            ? (c.prototype = Object.create(g.prototype))
            : e.extend(c.prototype, g.prototype),
          (c.prototype.constructor = c),
          (c.defaults = e.extend({}, g.defaults)),
          e.extend(c.defaults, b),
          (c.prototype.settings = {}),
          (c.namespace = a),
          (c.data = g.data),
          (c.Item = function () {
            f.apply(this, arguments)
          }),
          (c.Item.prototype = new f()),
          e.htmlInit(c, a),
          i && i.bridget && i.bridget(a, c),
          c
        )
      }),
      (g.Item = f),
      g
    )
  }),
  (function (a, b) {
    "function" == typeof define && define.amd
      ? define([
          "outlayer/outlayer",
          "get-size/get-size",
          "fizzy-ui-utils/utils",
        ], b)
      : "object" == typeof exports
      ? (module.exports = b(
          require("outlayer"),
          require("get-size"),
          require("fizzy-ui-utils")
        ))
      : (a.Masonry = b(a.Outlayer, a.getSize, a.fizzyUIUtils))
  })(window, function (a, b, c) {
    var d = a.create("masonry")
    return (
      (d.prototype._resetLayout = function () {
        this.getSize(),
          this._getMeasurement("columnWidth", "outerWidth"),
          this._getMeasurement("gutter", "outerWidth"),
          this.measureColumns()
        var a = this.cols
        for (this.colYs = []; a--; ) this.colYs.push(0)
        this.maxY = 0
      }),
      (d.prototype.measureColumns = function () {
        if ((this.getContainerWidth(), !this.columnWidth)) {
          var a = this.items[0],
            c = a && a.element
          this.columnWidth = (c && b(c).outerWidth) || this.containerWidth
        }
        var d = (this.columnWidth += this.gutter),
          e = this.containerWidth + this.gutter,
          f = e / d,
          g = d - (e % d),
          h = g && 1 > g ? "round" : "floor"
        ;(f = Math[h](f)), (this.cols = Math.max(f, 1))
      }),
      (d.prototype.getContainerWidth = function () {
        var a = this.options.isFitWidth
            ? this.element.parentNode
            : this.element,
          c = b(a)
        this.containerWidth = c && c.innerWidth
      }),
      (d.prototype._getItemLayoutPosition = function (a) {
        a.getSize()
        var b = a.size.outerWidth % this.columnWidth,
          d = b && 1 > b ? "round" : "ceil",
          e = Math[d](a.size.outerWidth / this.columnWidth)
        e = Math.min(e, this.cols)
        for (
          var f = this._getColGroup(e),
            g = Math.min.apply(Math, f),
            h = c.indexOf(f, g),
            i = { x: this.columnWidth * h, y: g },
            j = g + a.size.outerHeight,
            k = this.cols + 1 - f.length,
            l = 0;
          k > l;
          l++
        )
          this.colYs[h + l] = j
        return i
      }),
      (d.prototype._getColGroup = function (a) {
        if (2 > a) return this.colYs
        for (var b = [], c = this.cols + 1 - a, d = 0; c > d; d++) {
          var e = this.colYs.slice(d, d + a)
          b[d] = Math.max.apply(Math, e)
        }
        return b
      }),
      (d.prototype._manageStamp = function (a) {
        var c = b(a),
          d = this._getElementOffset(a),
          e = this.options.isOriginLeft ? d.left : d.right,
          f = e + c.outerWidth,
          g = Math.floor(e / this.columnWidth)
        g = Math.max(0, g)
        var h = Math.floor(f / this.columnWidth)
        ;(h -= f % this.columnWidth ? 0 : 1), (h = Math.min(this.cols - 1, h))
        for (
          var i = (this.options.isOriginTop ? d.top : d.bottom) + c.outerHeight,
            j = g;
          h >= j;
          j++
        )
          this.colYs[j] = Math.max(i, this.colYs[j])
      }),
      (d.prototype._getContainerSize = function () {
        this.maxY = Math.max.apply(Math, this.colYs)
        var a = { height: this.maxY }
        return (
          this.options.isFitWidth && (a.width = this._getContainerFitWidth()), a
        )
      }),
      (d.prototype._getContainerFitWidth = function () {
        for (var a = 0, b = this.cols; --b && 0 === this.colYs[b]; ) a++
        return (this.cols - a) * this.columnWidth - this.gutter
      }),
      (d.prototype.needsResizeLayout = function () {
        var a = this.containerWidth
        return this.getContainerWidth(), a !== this.containerWidth
      }),
      d
    )
  }),
  (function () {
    "use strict"
    function a(d) {
      if (!d) throw new Error("No options passed to Waypoint constructor")
      if (!d.element)
        throw new Error("No element option passed to Waypoint constructor")
      if (!d.handler)
        throw new Error("No handler option passed to Waypoint constructor")
      ;(this.key = "waypoint-" + b),
        (this.options = a.Adapter.extend({}, a.defaults, d)),
        (this.element = this.options.element),
        (this.adapter = new a.Adapter(this.element)),
        (this.callback = d.handler),
        (this.axis = this.options.horizontal ? "horizontal" : "vertical"),
        (this.enabled = this.options.enabled),
        (this.triggerPoint = null),
        (this.group = a.Group.findOrCreate({
          name: this.options.group,
          axis: this.axis,
        })),
        (this.context = a.Context.findOrCreateByElement(this.options.context)),
        a.offsetAliases[this.options.offset] &&
          (this.options.offset = a.offsetAliases[this.options.offset]),
        this.group.add(this),
        this.context.add(this),
        (c[this.key] = this),
        (b += 1)
    }
    var b = 0,
      c = {}
    ;(a.prototype.queueTrigger = function (a) {
      this.group.queueTrigger(this, a)
    }),
      (a.prototype.trigger = function (a) {
        this.enabled && this.callback && this.callback.apply(this, a)
      }),
      (a.prototype.destroy = function () {
        this.context.remove(this), this.group.remove(this), delete c[this.key]
      }),
      (a.prototype.disable = function () {
        return (this.enabled = !1), this
      }),
      (a.prototype.enable = function () {
        return this.context.refresh(), (this.enabled = !0), this
      }),
      (a.prototype.next = function () {
        return this.group.next(this)
      }),
      (a.prototype.previous = function () {
        return this.group.previous(this)
      }),
      (a.invokeAll = function (a) {
        var b = []
        for (var d in c) b.push(c[d])
        for (var e = 0, f = b.length; f > e; e++) b[e][a]()
      }),
      (a.destroyAll = function () {
        a.invokeAll("destroy")
      }),
      (a.disableAll = function () {
        a.invokeAll("disable")
      }),
      (a.enableAll = function () {
        a.invokeAll("enable")
      }),
      (a.refreshAll = function () {
        a.Context.refreshAll()
      }),
      (a.viewportHeight = function () {
        return window.innerHeight || document.documentElement.clientHeight
      }),
      (a.viewportWidth = function () {
        return document.documentElement.clientWidth
      }),
      (a.adapters = []),
      (a.defaults = {
        context: window,
        continuous: !0,
        enabled: !0,
        group: "default",
        horizontal: !1,
        offset: 0,
      }),
      (a.offsetAliases = {
        "bottom-in-view": function () {
          return this.context.innerHeight() - this.adapter.outerHeight()
        },
        "right-in-view": function () {
          return this.context.innerWidth() - this.adapter.outerWidth()
        },
      }),
      (window.Waypoint = a)
  })(),
  (function () {
    "use strict"
    function a(a) {
      window.setTimeout(a, 1e3 / 60)
    }
    function b(a) {
      ;(this.element = a),
        (this.Adapter = e.Adapter),
        (this.adapter = new this.Adapter(a)),
        (this.key = "waypoint-context-" + c),
        (this.didScroll = !1),
        (this.didResize = !1),
        (this.oldScroll = {
          x: this.adapter.scrollLeft(),
          y: this.adapter.scrollTop(),
        }),
        (this.waypoints = { vertical: {}, horizontal: {} }),
        (a.waypointContextKey = this.key),
        (d[a.waypointContextKey] = this),
        (c += 1),
        this.createThrottledScrollHandler(),
        this.createThrottledResizeHandler()
    }
    var c = 0,
      d = {},
      e = window.Waypoint,
      f = window.onload
    ;(b.prototype.add = function (a) {
      var b = a.options.horizontal ? "horizontal" : "vertical"
      ;(this.waypoints[b][a.key] = a), this.refresh()
    }),
      (b.prototype.checkEmpty = function () {
        var a = this.Adapter.isEmptyObject(this.waypoints.horizontal),
          b = this.Adapter.isEmptyObject(this.waypoints.vertical)
        a && b && (this.adapter.off(".waypoints"), delete d[this.key])
      }),
      (b.prototype.createThrottledResizeHandler = function () {
        function a() {
          b.handleResize(), (b.didResize = !1)
        }
        var b = this
        this.adapter.on("resize.waypoints", function () {
          b.didResize || ((b.didResize = !0), e.requestAnimationFrame(a))
        })
      }),
      (b.prototype.createThrottledScrollHandler = function () {
        function a() {
          b.handleScroll(), (b.didScroll = !1)
        }
        var b = this
        this.adapter.on("scroll.waypoints", function () {
          ;(!b.didScroll || e.isTouch) &&
            ((b.didScroll = !0), e.requestAnimationFrame(a))
        })
      }),
      (b.prototype.handleResize = function () {
        e.Context.refreshAll()
      }),
      (b.prototype.handleScroll = function () {
        var a = {},
          b = {
            horizontal: {
              newScroll: this.adapter.scrollLeft(),
              oldScroll: this.oldScroll.x,
              forward: "right",
              backward: "left",
            },
            vertical: {
              newScroll: this.adapter.scrollTop(),
              oldScroll: this.oldScroll.y,
              forward: "down",
              backward: "up",
            },
          }
        for (var c in b) {
          var d = b[c],
            e = d.newScroll > d.oldScroll,
            f = e ? d.forward : d.backward
          for (var g in this.waypoints[c]) {
            var h = this.waypoints[c][g],
              i = d.oldScroll < h.triggerPoint,
              j = d.newScroll >= h.triggerPoint,
              k = i && j,
              l = !i && !j
            ;(k || l) && (h.queueTrigger(f), (a[h.group.id] = h.group))
          }
        }
        for (var m in a) a[m].flushTriggers()
        this.oldScroll = { x: b.horizontal.newScroll, y: b.vertical.newScroll }
      }),
      (b.prototype.innerHeight = function () {
        return this.element == this.element.window
          ? e.viewportHeight()
          : this.adapter.innerHeight()
      }),
      (b.prototype.remove = function (a) {
        delete this.waypoints[a.axis][a.key], this.checkEmpty()
      }),
      (b.prototype.innerWidth = function () {
        return this.element == this.element.window
          ? e.viewportWidth()
          : this.adapter.innerWidth()
      }),
      (b.prototype.destroy = function () {
        var a = []
        for (var b in this.waypoints)
          for (var c in this.waypoints[b]) a.push(this.waypoints[b][c])
        for (var d = 0, e = a.length; e > d; d++) a[d].destroy()
      }),
      (b.prototype.refresh = function () {
        var a,
          b = this.element == this.element.window,
          c = this.adapter.offset(),
          d = {}
        this.handleScroll(),
          (a = {
            horizontal: {
              contextOffset: b ? 0 : c.left,
              contextScroll: b ? 0 : this.oldScroll.x,
              contextDimension: this.innerWidth(),
              oldScroll: this.oldScroll.x,
              forward: "right",
              backward: "left",
              offsetProp: "left",
            },
            vertical: {
              contextOffset: b ? 0 : c.top,
              contextScroll: b ? 0 : this.oldScroll.y,
              contextDimension: this.innerHeight(),
              oldScroll: this.oldScroll.y,
              forward: "down",
              backward: "up",
              offsetProp: "top",
            },
          })
        for (var e in a) {
          var f = a[e]
          for (var g in this.waypoints[e]) {
            var h,
              i,
              j,
              k,
              l,
              m = this.waypoints[e][g],
              n = m.options.offset,
              o = m.triggerPoint,
              p = 0,
              q = null == o
            m.element !== m.element.window &&
              (p = m.adapter.offset()[f.offsetProp]),
              "function" == typeof n
                ? (n = n.apply(m))
                : "string" == typeof n &&
                  ((n = parseFloat(n)),
                  m.options.offset.indexOf("%") > -1 &&
                    (n = Math.ceil((f.contextDimension * n) / 100))),
              (h = f.contextScroll - f.contextOffset),
              (m.triggerPoint = p + h - n),
              (i = o < f.oldScroll),
              (j = m.triggerPoint >= f.oldScroll),
              (k = i && j),
              (l = !i && !j),
              !q && k
                ? (m.queueTrigger(f.backward), (d[m.group.id] = m.group))
                : !q && l
                ? (m.queueTrigger(f.forward), (d[m.group.id] = m.group))
                : q &&
                  f.oldScroll >= m.triggerPoint &&
                  (m.queueTrigger(f.forward), (d[m.group.id] = m.group))
          }
        }
        for (var r in d) d[r].flushTriggers()
        return this
      }),
      (b.findOrCreateByElement = function (a) {
        return b.findByElement(a) || new b(a)
      }),
      (b.refreshAll = function () {
        for (var a in d) d[a].refresh()
      }),
      (b.findByElement = function (a) {
        return d[a.waypointContextKey]
      }),
      (window.onload = function () {
        f && f(), b.refreshAll()
      }),
      (e.requestAnimationFrame = function (b) {
        ;(
          window.requestAnimationFrame ||
          window.mozRequestAnimationFrame ||
          window.webkitRequestAnimationFrame ||
          a
        ).call(window, b)
      }),
      (e.Context = b)
  })(),
  (function () {
    "use strict"
    function a(a, b) {
      return a.triggerPoint - b.triggerPoint
    }
    function b(a, b) {
      return b.triggerPoint - a.triggerPoint
    }
    function c(a) {
      ;(this.name = a.name),
        (this.axis = a.axis),
        (this.id = this.name + "-" + this.axis),
        (this.waypoints = []),
        this.clearTriggerQueues(),
        (d[this.axis][this.name] = this)
    }
    var d = { vertical: {}, horizontal: {} },
      e = window.Waypoint
    ;(c.prototype.add = function (a) {
      this.waypoints.push(a)
    }),
      (c.prototype.clearTriggerQueues = function () {
        this.triggerQueues = { up: [], down: [], left: [], right: [] }
      }),
      (c.prototype.flushTriggers = function () {
        for (var c in this.triggerQueues) {
          var d = this.triggerQueues[c],
            e = "up" === c || "left" === c
          d.sort(e ? b : a)
          for (var f = 0, g = d.length; g > f; f += 1) {
            var h = d[f]
            ;(h.options.continuous || f === d.length - 1) && h.trigger([c])
          }
        }
        this.clearTriggerQueues()
      }),
      (c.prototype.next = function (b) {
        this.waypoints.sort(a)
        var c = e.Adapter.inArray(b, this.waypoints)
        return c === this.waypoints.length - 1 ? null : this.waypoints[c + 1]
      }),
      (c.prototype.previous = function (b) {
        this.waypoints.sort(a)
        var c = e.Adapter.inArray(b, this.waypoints)
        return c ? this.waypoints[c - 1] : null
      }),
      (c.prototype.queueTrigger = function (a, b) {
        this.triggerQueues[b].push(a)
      }),
      (c.prototype.remove = function (a) {
        var b = e.Adapter.inArray(a, this.waypoints)
        b > -1 && this.waypoints.splice(b, 1)
      }),
      (c.prototype.first = function () {
        return this.waypoints[0]
      }),
      (c.prototype.last = function () {
        return this.waypoints[this.waypoints.length - 1]
      }),
      (c.findOrCreate = function (a) {
        return d[a.axis][a.name] || new c(a)
      }),
      (e.Group = c)
  })(),
  (function () {
    "use strict"
    function a(a) {
      this.$element = b(a)
    }
    var b = window.jQuery,
      c = window.Waypoint
    b.each(
      [
        "innerHeight",
        "innerWidth",
        "off",
        "offset",
        "on",
        "outerHeight",
        "outerWidth",
        "scrollLeft",
        "scrollTop",
      ],
      function (b, c) {
        a.prototype[c] = function () {
          var a = Array.prototype.slice.call(arguments)
          return this.$element[c].apply(this.$element, a)
        }
      }
    ),
      b.each(["extend", "inArray", "isEmptyObject"], function (c, d) {
        a[d] = b[d]
      }),
      c.adapters.push({ name: "jquery", Adapter: a }),
      (c.Adapter = a)
  })(),
  (function () {
    "use strict"
    function a(a) {
      return function () {
        var c = [],
          d = arguments[0]
        return (
          a.isFunction(arguments[0]) &&
            ((d = a.extend({}, arguments[1])), (d.handler = arguments[0])),
          this.each(function () {
            var e = a.extend({}, d, { element: this })
            "string" == typeof e.context &&
              (e.context = a(this).closest(e.context)[0]),
              c.push(new b(e))
          }),
          c
        )
      }
    }
    var b = window.Waypoint
    window.jQuery && (window.jQuery.fn.waypoint = a(window.jQuery)),
      window.Zepto && (window.Zepto.fn.waypoint = a(window.Zepto))
  })(),
  (function (a) {
    "function" == typeof define && define.amd
      ? define(["jquery"], a)
      : a(jQuery)
  })(function (a) {
    a.extend(a.fn, {
      validate: function (b) {
        if (!this.length)
          return void (
            b &&
            b.debug &&
            window.console &&
            console.warn("Nothing selected, can't validate, returning nothing.")
          )
        var c = a.data(this[0], "validator")
        return (
          c ||
          (this.attr("novalidate", "novalidate"),
          (c = new a.validator(b, this[0])),
          a.data(this[0], "validator", c),
          c.settings.onsubmit &&
            (this.on("click.validate", ":submit", function (b) {
              c.settings.submitHandler && (c.submitButton = b.target),
                a(this).hasClass("cancel") && (c.cancelSubmit = !0),
                void 0 !== a(this).attr("formnovalidate") &&
                  (c.cancelSubmit = !0)
            }),
            this.on("submit.validate", function (b) {
              function d() {
                var d, e
                return (
                  !c.settings.submitHandler ||
                  (c.submitButton &&
                    (d = a("<input type='hidden'/>")
                      .attr("name", c.submitButton.name)
                      .val(a(c.submitButton).val())
                      .appendTo(c.currentForm)),
                  (e = c.settings.submitHandler.call(c, c.currentForm, b)),
                  c.submitButton && d.remove(),
                  void 0 !== e && e)
                )
              }
              return (
                c.settings.debug && b.preventDefault(),
                c.cancelSubmit
                  ? ((c.cancelSubmit = !1), d())
                  : c.form()
                  ? c.pendingRequest
                    ? ((c.formSubmitted = !0), !1)
                    : d()
                  : (c.focusInvalid(), !1)
              )
            })),
          c)
        )
      },
      valid: function () {
        var b, c, d
        return (
          a(this[0]).is("form")
            ? (b = this.validate().form())
            : ((d = []),
              (b = !0),
              (c = a(this[0].form).validate()),
              this.each(function () {
                ;(b = c.element(this) && b), (d = d.concat(c.errorList))
              }),
              (c.errorList = d)),
          b
        )
      },
      rules: function (b, c) {
        var d,
          e,
          f,
          g,
          h,
          i,
          j = this[0]
        if (b)
          switch (
            ((d = a.data(j.form, "validator").settings),
            (e = d.rules),
            (f = a.validator.staticRules(j)),
            b)
          ) {
            case "add":
              a.extend(f, a.validator.normalizeRule(c)),
                delete f.messages,
                (e[j.name] = f),
                c.messages &&
                  (d.messages[j.name] = a.extend(
                    d.messages[j.name],
                    c.messages
                  ))
              break
            case "remove":
              return c
                ? ((i = {}),
                  a.each(c.split(/\s/), function (b, c) {
                    ;(i[c] = f[c]),
                      delete f[c],
                      "required" === c && a(j).removeAttr("aria-required")
                  }),
                  i)
                : (delete e[j.name], f)
          }
        return (
          (g = a.validator.normalizeRules(
            a.extend(
              {},
              a.validator.classRules(j),
              a.validator.attributeRules(j),
              a.validator.dataRules(j),
              a.validator.staticRules(j)
            ),
            j
          )),
          g.required &&
            ((h = g.required),
            delete g.required,
            (g = a.extend({ required: h }, g)),
            a(j).attr("aria-required", "true")),
          g.remote &&
            ((h = g.remote), delete g.remote, (g = a.extend(g, { remote: h }))),
          g
        )
      },
    }),
      a.extend(a.expr[":"], {
        blank: function (b) {
          return !a.trim("" + a(b).val())
        },
        filled: function (b) {
          return !!a.trim("" + a(b).val())
        },
        unchecked: function (b) {
          return !a(b).prop("checked")
        },
      }),
      (a.validator = function (b, c) {
        ;(this.settings = a.extend(!0, {}, a.validator.defaults, b)),
          (this.currentForm = c),
          this.init()
      }),
      (a.validator.format = function (b, c) {
        return 1 === arguments.length
          ? function () {
              var c = a.makeArray(arguments)
              return c.unshift(b), a.validator.format.apply(this, c)
            }
          : (arguments.length > 2 &&
              c.constructor !== Array &&
              (c = a.makeArray(arguments).slice(1)),
            c.constructor !== Array && (c = [c]),
            a.each(c, function (a, c) {
              b = b.replace(new RegExp("\\{" + a + "\\}", "g"), function () {
                return c
              })
            }),
            b)
      }),
      a.extend(a.validator, {
        defaults: {
          messages: {},
          groups: {},
          rules: {},
          errorClass: "error",
          validClass: "valid",
          errorElement: "label",
          focusCleanup: !1,
          focusInvalid: !0,
          errorContainer: a([]),
          errorLabelContainer: a([]),
          onsubmit: !0,
          ignore: ":hidden",
          ignoreTitle: !1,
          onfocusin: function (a) {
            ;(this.lastActive = a),
              this.settings.focusCleanup &&
                (this.settings.unhighlight &&
                  this.settings.unhighlight.call(
                    this,
                    a,
                    this.settings.errorClass,
                    this.settings.validClass
                  ),
                this.hideThese(this.errorsFor(a)))
          },
          onfocusout: function (a) {
            this.checkable(a) ||
              (!(a.name in this.submitted) && this.optional(a)) ||
              this.element(a)
          },
          onkeyup: function (b, c) {
            var d = [16, 17, 18, 20, 35, 36, 37, 38, 39, 40, 45, 144, 225]
            ;(9 === c.which && "" === this.elementValue(b)) ||
              -1 !== a.inArray(c.keyCode, d) ||
              ((b.name in this.submitted || b === this.lastElement) &&
                this.element(b))
          },
          onclick: function (a) {
            a.name in this.submitted
              ? this.element(a)
              : a.parentNode.name in this.submitted &&
                this.element(a.parentNode)
          },
          highlight: function (b, c, d) {
            "radio" === b.type
              ? this.findByName(b.name).addClass(c).removeClass(d)
              : a(b).addClass(c).removeClass(d)
          },
          unhighlight: function (b, c, d) {
            "radio" === b.type
              ? this.findByName(b.name).removeClass(c).addClass(d)
              : a(b).removeClass(c).addClass(d)
          },
        },
        setDefaults: function (b) {
          a.extend(a.validator.defaults, b)
        },
        messages: {
          required: "This field is required.",
          remote: "Please fix this field.",
          email: "Please enter a valid email address.",
          url: "Please enter a valid URL.",
          date: "Please enter a valid date.",
          dateISO: "Please enter a valid date ( ISO ).",
          number: "Please enter a valid number.",
          digits: "Please enter only digits.",
          creditcard: "Please enter a valid credit card number.",
          equalTo: "Please enter the same value again.",
          maxlength: a.validator.format(
            "Please enter no more than {0} characters."
          ),
          minlength: a.validator.format(
            "Please enter at least {0} characters."
          ),
          rangelength: a.validator.format(
            "Please enter a value between {0} and {1} characters long."
          ),
          range: a.validator.format(
            "Please enter a value between {0} and {1}."
          ),
          max: a.validator.format(
            "Please enter a value less than or equal to {0}."
          ),
          min: a.validator.format(
            "Please enter a value greater than or equal to {0}."
          ),
        },
        autoCreateRanges: !1,
        prototype: {
          init: function () {
            function b(b) {
              var c = a.data(this.form, "validator"),
                d = "on" + b.type.replace(/^validate/, ""),
                e = c.settings
              e[d] && !a(this).is(e.ignore) && e[d].call(c, this, b)
            }
            ;(this.labelContainer = a(this.settings.errorLabelContainer)),
              (this.errorContext =
                (this.labelContainer.length && this.labelContainer) ||
                a(this.currentForm)),
              (this.containers = a(this.settings.errorContainer).add(
                this.settings.errorLabelContainer
              )),
              (this.submitted = {}),
              (this.valueCache = {}),
              (this.pendingRequest = 0),
              (this.pending = {}),
              (this.invalid = {}),
              this.reset()
            var c,
              d = (this.groups = {})
            a.each(this.settings.groups, function (b, c) {
              "string" == typeof c && (c = c.split(/\s/)),
                a.each(c, function (a, c) {
                  d[c] = b
                })
            }),
              (c = this.settings.rules),
              a.each(c, function (b, d) {
                c[b] = a.validator.normalizeRule(d)
              }),
              a(this.currentForm)
                .on(
                  "focusin.validate focusout.validate keyup.validate",
                  ":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], [type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox']",
                  b
                )
                .on(
                  "click.validate",
                  "select, option, [type='radio'], [type='checkbox']",
                  b
                ),
              this.settings.invalidHandler &&
                a(this.currentForm).on(
                  "invalid-form.validate",
                  this.settings.invalidHandler
                ),
              a(this.currentForm)
                .find("[required], [data-rule-required], .required")
                .attr("aria-required", "true")
          },
          form: function () {
            return (
              this.checkForm(),
              a.extend(this.submitted, this.errorMap),
              (this.invalid = a.extend({}, this.errorMap)),
              this.valid() ||
                a(this.currentForm).triggerHandler("invalid-form", [this]),
              this.showErrors(),
              this.valid()
            )
          },
          checkForm: function () {
            this.prepareForm()
            for (
              var a = 0, b = (this.currentElements = this.elements());
              b[a];
              a++
            )
              this.check(b[a])
            return this.valid()
          },
          element: function (b) {
            var c = this.clean(b),
              d = this.validationTargetFor(c),
              e = !0
            return (
              (this.lastElement = d),
              void 0 === d
                ? delete this.invalid[c.name]
                : (this.prepareElement(d),
                  (this.currentElements = a(d)),
                  (e = !1 !== this.check(d)),
                  e
                    ? delete this.invalid[d.name]
                    : (this.invalid[d.name] = !0)),
              a(b).attr("aria-invalid", !e),
              this.numberOfInvalids() ||
                (this.toHide = this.toHide.add(this.containers)),
              this.showErrors(),
              e
            )
          },
          showErrors: function (b) {
            if (b) {
              a.extend(this.errorMap, b), (this.errorList = [])
              for (var c in b)
                this.errorList.push({
                  message: b[c],
                  element: this.findByName(c)[0],
                })
              this.successList = a.grep(this.successList, function (a) {
                return !(a.name in b)
              })
            }
            this.settings.showErrors
              ? this.settings.showErrors.call(
                  this,
                  this.errorMap,
                  this.errorList
                )
              : this.defaultShowErrors()
          },
          resetForm: function () {
            a.fn.resetForm && a(this.currentForm).resetForm(),
              (this.submitted = {}),
              (this.lastElement = null),
              this.prepareForm(),
              this.hideErrors()
            var b,
              c = this.elements()
                .removeData("previousValue")
                .removeAttr("aria-invalid")
            if (this.settings.unhighlight)
              for (b = 0; c[b]; b++)
                this.settings.unhighlight.call(
                  this,
                  c[b],
                  this.settings.errorClass,
                  ""
                )
            else c.removeClass(this.settings.errorClass)
          },
          numberOfInvalids: function () {
            return this.objectLength(this.invalid)
          },
          objectLength: function (a) {
            var b,
              c = 0
            for (b in a) c++
            return c
          },
          hideErrors: function () {
            this.hideThese(this.toHide)
          },
          hideThese: function (a) {
            a.not(this.containers).text(""), this.addWrapper(a).hide()
          },
          valid: function () {
            return 0 === this.size()
          },
          size: function () {
            return this.errorList.length
          },
          focusInvalid: function () {
            if (this.settings.focusInvalid)
              try {
                a(
                  this.findLastActive() ||
                    (this.errorList.length && this.errorList[0].element) ||
                    []
                )
                  .filter(":visible")
                  .focus()
                  .trigger("focusin")
              } catch (a) {}
          },
          findLastActive: function () {
            var b = this.lastActive
            return (
              b &&
              1 ===
                a.grep(this.errorList, function (a) {
                  return a.element.name === b.name
                }).length &&
              b
            )
          },
          elements: function () {
            var b = this,
              c = {}
            return a(this.currentForm)
              .find("input, select, textarea")
              .not(":submit, :reset, :image, :disabled")
              .not(this.settings.ignore)
              .filter(function () {
                return (
                  !this.name &&
                    b.settings.debug &&
                    window.console &&
                    console.error("%o has no name assigned", this),
                  !(
                    this.name in c ||
                    !b.objectLength(a(this).rules()) ||
                    ((c[this.name] = !0), 0)
                  )
                )
              })
          },
          clean: function (b) {
            return a(b)[0]
          },
          errors: function () {
            var b = this.settings.errorClass.split(" ").join(".")
            return a(this.settings.errorElement + "." + b, this.errorContext)
          },
          reset: function () {
            ;(this.successList = []),
              (this.errorList = []),
              (this.errorMap = {}),
              (this.toShow = a([])),
              (this.toHide = a([])),
              (this.currentElements = a([]))
          },
          prepareForm: function () {
            this.reset(), (this.toHide = this.errors().add(this.containers))
          },
          prepareElement: function (a) {
            this.reset(), (this.toHide = this.errorsFor(a))
          },
          elementValue: function (b) {
            var c,
              d = a(b),
              e = b.type
            return "radio" === e || "checkbox" === e
              ? this.findByName(b.name).filter(":checked").val()
              : "number" === e && void 0 !== b.validity
              ? !b.validity.badInput && d.val()
              : ((c = d.val()), "string" == typeof c ? c.replace(/\r/g, "") : c)
          },
          check: function (b) {
            b = this.validationTargetFor(this.clean(b))
            var c,
              d,
              e,
              f = a(b).rules(),
              g = a.map(f, function (a, b) {
                return b
              }).length,
              h = !1,
              i = this.elementValue(b)
            for (d in f) {
              e = { method: d, parameters: f[d] }
              try {
                if (
                  "dependency-mismatch" ===
                    (c = a.validator.methods[d].call(
                      this,
                      i,
                      b,
                      e.parameters
                    )) &&
                  1 === g
                ) {
                  h = !0
                  continue
                }
                if (((h = !1), "pending" === c))
                  return void (this.toHide = this.toHide.not(this.errorsFor(b)))
                if (!c) return this.formatAndAdd(b, e), !1
              } catch (a) {
                throw (
                  (this.settings.debug &&
                    window.console &&
                    console.log(
                      "Exception occurred when checking element " +
                        b.id +
                        ", check the '" +
                        e.method +
                        "' method.",
                      a
                    ),
                  a instanceof TypeError &&
                    (a.message +=
                      ".  Exception occurred when checking element " +
                      b.id +
                      ", check the '" +
                      e.method +
                      "' method."),
                  a)
                )
              }
            }
            if (!h) return this.objectLength(f) && this.successList.push(b), !0
          },
          customDataMessage: function (b, c) {
            return (
              a(b).data(
                "msg" + c.charAt(0).toUpperCase() + c.substring(1).toLowerCase()
              ) || a(b).data("msg")
            )
          },
          customMessage: function (a, b) {
            var c = this.settings.messages[a]
            return c && (c.constructor === String ? c : c[b])
          },
          findDefined: function () {
            for (var a = 0; a < arguments.length; a++)
              if (void 0 !== arguments[a]) return arguments[a]
          },
          defaultMessage: function (b, c) {
            return this.findDefined(
              this.customMessage(b.name, c),
              this.customDataMessage(b, c),
              (!this.settings.ignoreTitle && b.title) || void 0,
              a.validator.messages[c],
              "<strong>Warning: No message defined for " + b.name + "</strong>"
            )
          },
          formatAndAdd: function (b, c) {
            var d = this.defaultMessage(b, c.method),
              e = /\$?\{(\d+)\}/g
            "function" == typeof d
              ? (d = d.call(this, c.parameters, b))
              : e.test(d) &&
                (d = a.validator.format(d.replace(e, "{$1}"), c.parameters)),
              this.errorList.push({ message: d, element: b, method: c.method }),
              (this.errorMap[b.name] = d),
              (this.submitted[b.name] = d)
          },
          addWrapper: function (a) {
            return (
              this.settings.wrapper &&
                (a = a.add(a.parent(this.settings.wrapper))),
              a
            )
          },
          defaultShowErrors: function () {
            var a, b, c
            for (a = 0; this.errorList[a]; a++)
              (c = this.errorList[a]),
                this.settings.highlight &&
                  this.settings.highlight.call(
                    this,
                    c.element,
                    this.settings.errorClass,
                    this.settings.validClass
                  ),
                this.showLabel(c.element, c.message)
            if (
              (this.errorList.length &&
                (this.toShow = this.toShow.add(this.containers)),
              this.settings.success)
            )
              for (a = 0; this.successList[a]; a++)
                this.showLabel(this.successList[a])
            if (this.settings.unhighlight)
              for (a = 0, b = this.validElements(); b[a]; a++)
                this.settings.unhighlight.call(
                  this,
                  b[a],
                  this.settings.errorClass,
                  this.settings.validClass
                )
            ;(this.toHide = this.toHide.not(this.toShow)),
              this.hideErrors(),
              this.addWrapper(this.toShow).show()
          },
          validElements: function () {
            return this.currentElements.not(this.invalidElements())
          },
          invalidElements: function () {
            return a(this.errorList).map(function () {
              return this.element
            })
          },
          showLabel: function (b, c) {
            var d,
              e,
              f,
              g = this.errorsFor(b),
              h = this.idOrName(b),
              i = a(b).attr("aria-describedby")
            g.length
              ? (g
                  .removeClass(this.settings.validClass)
                  .addClass(this.settings.errorClass),
                g.html(c))
              : ((g = a("<" + this.settings.errorElement + ">")
                  .attr("id", h + "-error")
                  .addClass(this.settings.errorClass)
                  .html(c || "")),
                (d = g),
                this.settings.wrapper &&
                  (d = g
                    .hide()
                    .show()
                    .wrap("<" + this.settings.wrapper + "/>")
                    .parent()),
                this.labelContainer.length
                  ? this.labelContainer.append(d)
                  : this.settings.errorPlacement
                  ? this.settings.errorPlacement(d, a(b))
                  : d.insertAfter(b),
                g.is("label")
                  ? g.attr("for", h)
                  : 0 === g.parents("label[for='" + h + "']").length &&
                    ((f = g.attr("id").replace(/(:|\.|\[|\]|\$)/g, "\\$1")),
                    i
                      ? i.match(new RegExp("\\b" + f + "\\b")) || (i += " " + f)
                      : (i = f),
                    a(b).attr("aria-describedby", i),
                    (e = this.groups[b.name]) &&
                      a.each(this.groups, function (b, c) {
                        c === e &&
                          a("[name='" + b + "']", this.currentForm).attr(
                            "aria-describedby",
                            g.attr("id")
                          )
                      }))),
              !c &&
                this.settings.success &&
                (g.text(""),
                "string" == typeof this.settings.success
                  ? g.addClass(this.settings.success)
                  : this.settings.success(g, b)),
              (this.toShow = this.toShow.add(g))
          },
          errorsFor: function (b) {
            var c = this.idOrName(b),
              d = a(b).attr("aria-describedby"),
              e = "label[for='" + c + "'], label[for='" + c + "'] *"
            return (
              d && (e = e + ", #" + d.replace(/\s+/g, ", #")),
              this.errors().filter(e)
            )
          },
          idOrName: function (a) {
            return (
              this.groups[a.name] ||
              (this.checkable(a) ? a.name : a.id || a.name)
            )
          },
          validationTargetFor: function (b) {
            return (
              this.checkable(b) && (b = this.findByName(b.name)),
              a(b).not(this.settings.ignore)[0]
            )
          },
          checkable: function (a) {
            return /radio|checkbox/i.test(a.type)
          },
          findByName: function (b) {
            return a(this.currentForm).find("[name='" + b + "']")
          },
          getLength: function (b, c) {
            switch (c.nodeName.toLowerCase()) {
              case "select":
                return a("option:selected", c).length
              case "input":
                if (this.checkable(c))
                  return this.findByName(c.name).filter(":checked").length
            }
            return b.length
          },
          depend: function (a, b) {
            return (
              !this.dependTypes[typeof a] || this.dependTypes[typeof a](a, b)
            )
          },
          dependTypes: {
            boolean: function (a) {
              return a
            },
            string: function (b, c) {
              return !!a(b, c.form).length
            },
            function: function (a, b) {
              return a(b)
            },
          },
          optional: function (b) {
            var c = this.elementValue(b)
            return (
              !a.validator.methods.required.call(this, c, b) &&
              "dependency-mismatch"
            )
          },
          startRequest: function (a) {
            this.pending[a.name] ||
              (this.pendingRequest++, (this.pending[a.name] = !0))
          },
          stopRequest: function (b, c) {
            this.pendingRequest--,
              this.pendingRequest < 0 && (this.pendingRequest = 0),
              delete this.pending[b.name],
              c &&
              0 === this.pendingRequest &&
              this.formSubmitted &&
              this.form()
                ? (a(this.currentForm).submit(), (this.formSubmitted = !1))
                : !c &&
                  0 === this.pendingRequest &&
                  this.formSubmitted &&
                  (a(this.currentForm).triggerHandler("invalid-form", [this]),
                  (this.formSubmitted = !1))
          },
          previousValue: function (b) {
            return (
              a.data(b, "previousValue") ||
              a.data(b, "previousValue", {
                old: null,
                valid: !0,
                message: this.defaultMessage(b, "remote"),
              })
            )
          },
          destroy: function () {
            this.resetForm(),
              a(this.currentForm).off(".validate").removeData("validator")
          },
        },
        classRuleSettings: {
          required: { required: !0 },
          email: { email: !0 },
          url: { url: !0 },
          date: { date: !0 },
          dateISO: { dateISO: !0 },
          number: { number: !0 },
          digits: { digits: !0 },
          creditcard: { creditcard: !0 },
        },
        addClassRules: function (b, c) {
          b.constructor === String
            ? (this.classRuleSettings[b] = c)
            : a.extend(this.classRuleSettings, b)
        },
        classRules: function (b) {
          var c = {},
            d = a(b).attr("class")
          return (
            d &&
              a.each(d.split(" "), function () {
                this in a.validator.classRuleSettings &&
                  a.extend(c, a.validator.classRuleSettings[this])
              }),
            c
          )
        },
        normalizeAttributeRule: function (a, b, c, d) {
          ;/min|max/.test(c) &&
            (null === b || /number|range|text/.test(b)) &&
            ((d = Number(d)), isNaN(d) && (d = void 0)),
            d || 0 === d ? (a[c] = d) : b === c && "range" !== b && (a[c] = !0)
        },
        attributeRules: function (b) {
          var c,
            d,
            e = {},
            f = a(b),
            g = b.getAttribute("type")
          for (c in a.validator.methods)
            "required" === c
              ? ((d = b.getAttribute(c)), "" === d && (d = !0), (d = !!d))
              : (d = f.attr(c)),
              this.normalizeAttributeRule(e, g, c, d)
          return (
            e.maxlength &&
              /-1|2147483647|524288/.test(e.maxlength) &&
              delete e.maxlength,
            e
          )
        },
        dataRules: function (b) {
          var c,
            d,
            e = {},
            f = a(b),
            g = b.getAttribute("type")
          for (c in a.validator.methods)
            (d = f.data(
              "rule" + c.charAt(0).toUpperCase() + c.substring(1).toLowerCase()
            )),
              this.normalizeAttributeRule(e, g, c, d)
          return e
        },
        staticRules: function (b) {
          var c = {},
            d = a.data(b.form, "validator")
          return (
            d.settings.rules &&
              (c = a.validator.normalizeRule(d.settings.rules[b.name]) || {}),
            c
          )
        },
        normalizeRules: function (b, c) {
          return (
            a.each(b, function (d, e) {
              if (!1 === e) return void delete b[d]
              if (e.param || e.depends) {
                var f = !0
                switch (typeof e.depends) {
                  case "string":
                    f = !!a(e.depends, c.form).length
                    break
                  case "function":
                    f = e.depends.call(c, c)
                }
                f ? (b[d] = void 0 === e.param || e.param) : delete b[d]
              }
            }),
            a.each(b, function (d, e) {
              b[d] = a.isFunction(e) ? e(c) : e
            }),
            a.each(["minlength", "maxlength"], function () {
              b[this] && (b[this] = Number(b[this]))
            }),
            a.each(["rangelength", "range"], function () {
              var c
              b[this] &&
                (a.isArray(b[this])
                  ? (b[this] = [Number(b[this][0]), Number(b[this][1])])
                  : "string" == typeof b[this] &&
                    ((c = b[this].replace(/[\[\]]/g, "").split(/[\s,]+/)),
                    (b[this] = [Number(c[0]), Number(c[1])])))
            }),
            a.validator.autoCreateRanges &&
              (null != b.min &&
                null != b.max &&
                ((b.range = [b.min, b.max]), delete b.min, delete b.max),
              null != b.minlength &&
                null != b.maxlength &&
                ((b.rangelength = [b.minlength, b.maxlength]),
                delete b.minlength,
                delete b.maxlength)),
            b
          )
        },
        normalizeRule: function (b) {
          if ("string" == typeof b) {
            var c = {}
            a.each(b.split(/\s/), function () {
              c[this] = !0
            }),
              (b = c)
          }
          return b
        },
        addMethod: function (b, c, d) {
          ;(a.validator.methods[b] = c),
            (a.validator.messages[b] =
              void 0 !== d ? d : a.validator.messages[b]),
            c.length < 3 &&
              a.validator.addClassRules(b, a.validator.normalizeRule(b))
        },
        methods: {
          required: function (b, c, d) {
            if (!this.depend(d, c)) return "dependency-mismatch"
            if ("select" === c.nodeName.toLowerCase()) {
              var e = a(c).val()
              return e && e.length > 0
            }
            return this.checkable(c) ? this.getLength(b, c) > 0 : b.length > 0
          },
          email: function (a, b) {
            return (
              this.optional(b) ||
              /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(
                a
              )
            )
          },
          url: function (a, b) {
            return (
              this.optional(b) ||
              /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[\/?#]\S*)?$/i.test(
                a
              )
            )
          },
          date: function (a, b) {
            return (
              this.optional(b) || !/Invalid|NaN/.test(new Date(a).toString())
            )
          },
          dateISO: function (a, b) {
            return (
              this.optional(b) ||
              /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(
                a
              )
            )
          },
          number: function (a, b) {
            return (
              this.optional(b) ||
              /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(a)
            )
          },
          digits: function (a, b) {
            return this.optional(b) || /^\d+$/.test(a)
          },
          creditcard: function (a, b) {
            if (this.optional(b)) return "dependency-mismatch"
            if (/[^0-9 \-]+/.test(a)) return !1
            var c,
              d,
              e = 0,
              f = 0,
              g = !1
            if (((a = a.replace(/\D/g, "")), a.length < 13 || a.length > 19))
              return !1
            for (c = a.length - 1; c >= 0; c--)
              (d = a.charAt(c)),
                (f = parseInt(d, 10)),
                g && (f *= 2) > 9 && (f -= 9),
                (e += f),
                (g = !g)
            return e % 10 == 0
          },
          minlength: function (b, c, d) {
            var e = a.isArray(b) ? b.length : this.getLength(b, c)
            return this.optional(c) || e >= d
          },
          maxlength: function (b, c, d) {
            var e = a.isArray(b) ? b.length : this.getLength(b, c)
            return this.optional(c) || e <= d
          },
          rangelength: function (b, c, d) {
            var e = a.isArray(b) ? b.length : this.getLength(b, c)
            return this.optional(c) || (e >= d[0] && e <= d[1])
          },
          min: function (a, b, c) {
            return this.optional(b) || a >= c
          },
          max: function (a, b, c) {
            return this.optional(b) || a <= c
          },
          range: function (a, b, c) {
            return this.optional(b) || (a >= c[0] && a <= c[1])
          },
          equalTo: function (b, c, d) {
            var e = a(d)
            return (
              this.settings.onfocusout &&
                e
                  .off(".validate-equalTo")
                  .on("blur.validate-equalTo", function () {
                    a(c).valid()
                  }),
              b === e.val()
            )
          },
          remote: function (b, c, d) {
            if (this.optional(c)) return "dependency-mismatch"
            var e,
              f,
              g = this.previousValue(c)
            return (
              this.settings.messages[c.name] ||
                (this.settings.messages[c.name] = {}),
              (g.originalMessage = this.settings.messages[c.name].remote),
              (this.settings.messages[c.name].remote = g.message),
              (d = ("string" == typeof d && { url: d }) || d),
              g.old === b
                ? g.valid
                : ((g.old = b),
                  (e = this),
                  this.startRequest(c),
                  (f = {}),
                  (f[c.name] = b),
                  a.ajax(
                    a.extend(
                      !0,
                      {
                        mode: "abort",
                        port: "validate" + c.name,
                        dataType: "json",
                        data: f,
                        context: e.currentForm,
                        success: function (d) {
                          var f,
                            h,
                            i,
                            j = !0 === d || "true" === d
                          ;(e.settings.messages[c.name].remote =
                            g.originalMessage),
                            j
                              ? ((i = e.formSubmitted),
                                e.prepareElement(c),
                                (e.formSubmitted = i),
                                e.successList.push(c),
                                delete e.invalid[c.name],
                                e.showErrors())
                              : ((f = {}),
                                (h = d || e.defaultMessage(c, "remote")),
                                (f[c.name] = g.message = a.isFunction(h)
                                  ? h(b)
                                  : h),
                                (e.invalid[c.name] = !0),
                                e.showErrors(f)),
                            (g.valid = j),
                            e.stopRequest(c, j)
                        },
                      },
                      d
                    )
                  ),
                  "pending")
            )
          },
        },
      })
    var b,
      c = {}
    a.ajaxPrefilter
      ? a.ajaxPrefilter(function (a, b, d) {
          var e = a.port
          "abort" === a.mode && (c[e] && c[e].abort(), (c[e] = d))
        })
      : ((b = a.ajax),
        (a.ajax = function (d) {
          var e = ("mode" in d ? d : a.ajaxSettings).mode,
            f = ("port" in d ? d : a.ajaxSettings).port
          return "abort" === e
            ? (c[f] && c[f].abort(), (c[f] = b.apply(this, arguments)), c[f])
            : b.apply(this, arguments)
        }))
  }),
  (function (a) {
    "use strict"
    function b(a) {
      return new RegExp("(^|\\s+)" + a + "(\\s+|$)")
    }
    function c(a, b) {
      ;(d(a, b) ? f : e)(a, b)
    }
    var d, e, f
    "classList" in document.documentElement
      ? ((d = function (a, b) {
          return a.classList.contains(b)
        }),
        (e = function (a, b) {
          a.classList.add(b)
        }),
        (f = function (a, b) {
          a.classList.remove(b)
        }))
      : ((d = function (a, c) {
          return b(c).test(a.className)
        }),
        (e = function (a, b) {
          d(a, b) || (a.className = a.className + " " + b)
        }),
        (f = function (a, c) {
          a.className = a.className.replace(b(c), " ")
        }))
    var g = {
      hasClass: d,
      addClass: e,
      removeClass: f,
      toggleClass: c,
      has: d,
      add: e,
      remove: f,
      toggle: c,
    }
    "function" == typeof define && define.amd
      ? define(g)
      : "object" == typeof exports
      ? (module.exports = g)
      : (a.classie = g)
  })(window),
  (function (a) {
    "use strict"
    "function" == typeof define && define.amd
      ? define(["jquery"], a)
      : "undefined" != typeof exports
      ? (module.exports = a(require("jquery")))
      : a(jQuery)
  })(function (a) {
    "use strict"
    var b = window.Slick || {}
    ;(b = (function () {
      function b(b, d) {
        var e,
          f = this
        ;(f.defaults = {
          accessibility: !0,
          adaptiveHeight: !1,
          appendArrows: a(b),
          appendDots: a(b),
          arrows: !0,
          asNavFor: null,
          prevArrow:
            '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',
          nextArrow:
            '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',
          autoplay: !1,
          autoplaySpeed: 3e3,
          centerMode: !1,
          centerPadding: "50px",
          cssEase: "ease",
          customPaging: function (b, c) {
            return a(
              '<button type="button" data-role="none" role="button" tabindex="0" />'
            ).text(c + 1)
          },
          dots: !1,
          dotsClass: "slick-dots",
          draggable: !0,
          easing: "linear",
          edgeFriction: 0.35,
          fade: !1,
          focusOnSelect: !1,
          infinite: !0,
          initialSlide: 0,
          lazyLoad: "ondemand",
          mobileFirst: !1,
          pauseOnHover: !0,
          pauseOnFocus: !0,
          pauseOnDotsHover: !1,
          respondTo: "window",
          responsive: null,
          rows: 1,
          rtl: !1,
          slide: "",
          slidesPerRow: 1,
          slidesToShow: 1,
          slidesToScroll: 1,
          speed: 500,
          swipe: !0,
          swipeToSlide: !1,
          touchMove: !0,
          touchThreshold: 5,
          useCSS: !0,
          useTransform: !0,
          variableWidth: !1,
          vertical: !1,
          verticalSwiping: !1,
          waitForAnimate: !0,
          zIndex: 1e3,
        }),
          (f.initials = {
            animating: !1,
            dragging: !1,
            autoPlayTimer: null,
            currentDirection: 0,
            currentLeft: null,
            currentSlide: 0,
            direction: 1,
            $dots: null,
            listWidth: null,
            listHeight: null,
            loadIndex: 0,
            $nextArrow: null,
            $prevArrow: null,
            slideCount: null,
            slideWidth: null,
            $slideTrack: null,
            $slides: null,
            sliding: !1,
            slideOffset: 0,
            swipeLeft: null,
            $list: null,
            touchObject: {},
            transformsEnabled: !1,
            unslicked: !1,
          }),
          a.extend(f, f.initials),
          (f.activeBreakpoint = null),
          (f.animType = null),
          (f.animProp = null),
          (f.breakpoints = []),
          (f.breakpointSettings = []),
          (f.cssTransitions = !1),
          (f.focussed = !1),
          (f.interrupted = !1),
          (f.hidden = "hidden"),
          (f.paused = !0),
          (f.positionProp = null),
          (f.respondTo = null),
          (f.rowCount = 1),
          (f.shouldClick = !0),
          (f.$slider = a(b)),
          (f.$slidesCache = null),
          (f.transformType = null),
          (f.transitionType = null),
          (f.visibilityChange = "visibilitychange"),
          (f.windowWidth = 0),
          (f.windowTimer = null),
          (e = a(b).data("slick") || {}),
          (f.options = a.extend({}, f.defaults, d, e)),
          (f.currentSlide = f.options.initialSlide),
          (f.originalSettings = f.options),
          void 0 !== document.mozHidden
            ? ((f.hidden = "mozHidden"),
              (f.visibilityChange = "mozvisibilitychange"))
            : void 0 !== document.webkitHidden &&
              ((f.hidden = "webkitHidden"),
              (f.visibilityChange = "webkitvisibilitychange")),
          (f.autoPlay = a.proxy(f.autoPlay, f)),
          (f.autoPlayClear = a.proxy(f.autoPlayClear, f)),
          (f.autoPlayIterator = a.proxy(f.autoPlayIterator, f)),
          (f.changeSlide = a.proxy(f.changeSlide, f)),
          (f.clickHandler = a.proxy(f.clickHandler, f)),
          (f.selectHandler = a.proxy(f.selectHandler, f)),
          (f.setPosition = a.proxy(f.setPosition, f)),
          (f.swipeHandler = a.proxy(f.swipeHandler, f)),
          (f.dragHandler = a.proxy(f.dragHandler, f)),
          (f.keyHandler = a.proxy(f.keyHandler, f)),
          (f.instanceUid = c++),
          (f.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/),
          f.registerBreakpoints(),
          f.init(!0)
      }
      var c = 0
      return b
    })()),
      (b.prototype.activateADA = function () {
        this.$slideTrack
          .find(".slick-active")
          .attr({ "aria-hidden": "false" })
          .find("a, input, button, select")
          .attr({ tabindex: "0" })
      }),
      (b.prototype.addSlide = b.prototype.slickAdd = function (b, c, d) {
        var e = this
        if ("boolean" == typeof c) (d = c), (c = null)
        else if (c < 0 || c >= e.slideCount) return !1
        e.unload(),
          "number" == typeof c
            ? 0 === c && 0 === e.$slides.length
              ? a(b).appendTo(e.$slideTrack)
              : d
              ? a(b).insertBefore(e.$slides.eq(c))
              : a(b).insertAfter(e.$slides.eq(c))
            : !0 === d
            ? a(b).prependTo(e.$slideTrack)
            : a(b).appendTo(e.$slideTrack),
          (e.$slides = e.$slideTrack.children(this.options.slide)),
          e.$slideTrack.children(this.options.slide).detach(),
          e.$slideTrack.append(e.$slides),
          e.$slides.each(function (b, c) {
            a(c).attr("data-slick-index", b)
          }),
          (e.$slidesCache = e.$slides),
          e.reinit()
      }),
      (b.prototype.animateHeight = function () {
        var a = this
        if (
          1 === a.options.slidesToShow &&
          !0 === a.options.adaptiveHeight &&
          !1 === a.options.vertical
        ) {
          var b = a.$slides.eq(a.currentSlide).outerHeight(!0)
          a.$list.animate({ height: b }, a.options.speed)
        }
      }),
      (b.prototype.animateSlide = function (b, c) {
        var d = {},
          e = this
        e.animateHeight(),
          !0 === e.options.rtl && !1 === e.options.vertical && (b = -b),
          !1 === e.transformsEnabled
            ? !1 === e.options.vertical
              ? e.$slideTrack.animate(
                  { left: b },
                  e.options.speed,
                  e.options.easing,
                  c
                )
              : e.$slideTrack.animate(
                  { top: b },
                  e.options.speed,
                  e.options.easing,
                  c
                )
            : !1 === e.cssTransitions
            ? (!0 === e.options.rtl && (e.currentLeft = -e.currentLeft),
              a({ animStart: e.currentLeft }).animate(
                { animStart: b },
                {
                  duration: e.options.speed,
                  easing: e.options.easing,
                  step: function (a) {
                    ;(a = Math.ceil(a)),
                      !1 === e.options.vertical
                        ? ((d[e.animType] = "translate(" + a + "px, 0px)"),
                          e.$slideTrack.css(d))
                        : ((d[e.animType] = "translate(0px," + a + "px)"),
                          e.$slideTrack.css(d))
                  },
                  complete: function () {
                    c && c.call()
                  },
                }
              ))
            : (e.applyTransition(),
              (b = Math.ceil(b)),
              !1 === e.options.vertical
                ? (d[e.animType] = "translate3d(" + b + "px, 0px, 0px)")
                : (d[e.animType] = "translate3d(0px," + b + "px, 0px)"),
              e.$slideTrack.css(d),
              c &&
                setTimeout(function () {
                  e.disableTransition(), c.call()
                }, e.options.speed))
      }),
      (b.prototype.getNavTarget = function () {
        var b = this,
          c = b.options.asNavFor
        return c && null !== c && (c = a(c).not(b.$slider)), c
      }),
      (b.prototype.asNavFor = function (b) {
        var c = this,
          d = c.getNavTarget()
        null !== d &&
          "object" == typeof d &&
          d.each(function () {
            var c = a(this).slick("getSlick")
            c.unslicked || c.slideHandler(b, !0)
          })
      }),
      (b.prototype.applyTransition = function (a) {
        var b = this,
          c = {}
        !1 === b.options.fade
          ? (c[b.transitionType] =
              b.transformType +
              " " +
              b.options.speed +
              "ms " +
              b.options.cssEase)
          : (c[b.transitionType] =
              "opacity " + b.options.speed + "ms " + b.options.cssEase),
          !1 === b.options.fade ? b.$slideTrack.css(c) : b.$slides.eq(a).css(c)
      }),
      (b.prototype.autoPlay = function () {
        var a = this
        a.autoPlayClear(),
          a.slideCount > a.options.slidesToShow &&
            (a.autoPlayTimer = setInterval(
              a.autoPlayIterator,
              a.options.autoplaySpeed
            ))
      }),
      (b.prototype.autoPlayClear = function () {
        var a = this
        a.autoPlayTimer && clearInterval(a.autoPlayTimer)
      }),
      (b.prototype.autoPlayIterator = function () {
        var a = this,
          b = a.currentSlide + a.options.slidesToScroll
        a.paused ||
          a.interrupted ||
          a.focussed ||
          (!1 === a.options.infinite &&
            (1 === a.direction && a.currentSlide + 1 === a.slideCount - 1
              ? (a.direction = 0)
              : 0 === a.direction &&
                ((b = a.currentSlide - a.options.slidesToScroll),
                a.currentSlide - 1 == 0 && (a.direction = 1))),
          a.slideHandler(b))
      }),
      (b.prototype.buildArrows = function () {
        var b = this
        !0 === b.options.arrows &&
          ((b.$prevArrow = a(b.options.prevArrow).addClass("slick-arrow")),
          (b.$nextArrow = a(b.options.nextArrow).addClass("slick-arrow")),
          b.slideCount > b.options.slidesToShow
            ? (b.$prevArrow
                .removeClass("slick-hidden")
                .removeAttr("aria-hidden tabindex"),
              b.$nextArrow
                .removeClass("slick-hidden")
                .removeAttr("aria-hidden tabindex"),
              b.htmlExpr.test(b.options.prevArrow) &&
                b.$prevArrow.prependTo(b.options.appendArrows),
              b.htmlExpr.test(b.options.nextArrow) &&
                b.$nextArrow.appendTo(b.options.appendArrows),
              !0 !== b.options.infinite &&
                b.$prevArrow
                  .addClass("slick-disabled")
                  .attr("aria-disabled", "true"))
            : b.$prevArrow
                .add(b.$nextArrow)
                .addClass("slick-hidden")
                .attr({ "aria-disabled": "true", tabindex: "-1" }))
      }),
      (b.prototype.buildDots = function () {
        var b,
          c,
          d = this
        if (!0 === d.options.dots && d.slideCount > d.options.slidesToShow) {
          for (
            d.$slider.addClass("slick-dotted"),
              c = a("<ul />").addClass(d.options.dotsClass),
              b = 0;
            b <= d.getDotCount();
            b += 1
          )
            c.append(
              a("<li />").append(d.options.customPaging.call(this, d, b))
            )
          ;(d.$dots = c.appendTo(d.options.appendDots)),
            d.$dots
              .find("li")
              .first()
              .addClass("slick-active")
              .attr("aria-hidden", "false")
        }
      }),
      (b.prototype.buildOut = function () {
        var b = this
        ;(b.$slides = b.$slider
          .children(b.options.slide + ":not(.slick-cloned)")
          .addClass("slick-slide")),
          (b.slideCount = b.$slides.length),
          b.$slides.each(function (b, c) {
            a(c)
              .attr("data-slick-index", b)
              .data("originalStyling", a(c).attr("style") || "")
          }),
          b.$slider.addClass("slick-slider"),
          (b.$slideTrack =
            0 === b.slideCount
              ? a('<div class="slick-track"/>').appendTo(b.$slider)
              : b.$slides.wrapAll('<div class="slick-track"/>').parent()),
          (b.$list = b.$slideTrack
            .wrap('<div aria-live="polite" class="slick-list"/>')
            .parent()),
          b.$slideTrack.css("opacity", 0),
          (!0 !== b.options.centerMode && !0 !== b.options.swipeToSlide) ||
            (b.options.slidesToScroll = 1),
          a("img[data-lazy]", b.$slider).not("[src]").addClass("slick-loading"),
          b.setupInfinite(),
          b.buildArrows(),
          b.buildDots(),
          b.updateDots(),
          b.setSlideClasses(
            "number" == typeof b.currentSlide ? b.currentSlide : 0
          ),
          !0 === b.options.draggable && b.$list.addClass("draggable")
      }),
      (b.prototype.buildRows = function () {
        var a,
          b,
          c,
          d,
          e,
          f,
          g,
          h = this
        if (
          ((d = document.createDocumentFragment()),
          (f = h.$slider.children()),
          h.options.rows > 1)
        ) {
          for (
            g = h.options.slidesPerRow * h.options.rows,
              e = Math.ceil(f.length / g),
              a = 0;
            a < e;
            a++
          ) {
            var i = document.createElement("div")
            for (b = 0; b < h.options.rows; b++) {
              var j = document.createElement("div")
              for (c = 0; c < h.options.slidesPerRow; c++) {
                var k = a * g + (b * h.options.slidesPerRow + c)
                f.get(k) && j.appendChild(f.get(k))
              }
              i.appendChild(j)
            }
            d.appendChild(i)
          }
          h.$slider.empty().append(d),
            h.$slider
              .children()
              .children()
              .children()
              .css({
                width: 100 / h.options.slidesPerRow + "%",
                display: "inline-block",
              })
        }
      }),
      (b.prototype.checkResponsive = function (b, c) {
        var d,
          e,
          f,
          g = this,
          h = !1,
          i = g.$slider.width(),
          j = window.innerWidth || a(window).width()
        if (
          ("window" === g.respondTo
            ? (f = j)
            : "slider" === g.respondTo
            ? (f = i)
            : "min" === g.respondTo && (f = Math.min(j, i)),
          g.options.responsive &&
            g.options.responsive.length &&
            null !== g.options.responsive)
        ) {
          e = null
          for (d in g.breakpoints)
            g.breakpoints.hasOwnProperty(d) &&
              (!1 === g.originalSettings.mobileFirst
                ? f < g.breakpoints[d] && (e = g.breakpoints[d])
                : f > g.breakpoints[d] && (e = g.breakpoints[d]))
          null !== e
            ? null !== g.activeBreakpoint
              ? (e !== g.activeBreakpoint || c) &&
                ((g.activeBreakpoint = e),
                "unslick" === g.breakpointSettings[e]
                  ? g.unslick(e)
                  : ((g.options = a.extend(
                      {},
                      g.originalSettings,
                      g.breakpointSettings[e]
                    )),
                    !0 === b && (g.currentSlide = g.options.initialSlide),
                    g.refresh(b)),
                (h = e))
              : ((g.activeBreakpoint = e),
                "unslick" === g.breakpointSettings[e]
                  ? g.unslick(e)
                  : ((g.options = a.extend(
                      {},
                      g.originalSettings,
                      g.breakpointSettings[e]
                    )),
                    !0 === b && (g.currentSlide = g.options.initialSlide),
                    g.refresh(b)),
                (h = e))
            : null !== g.activeBreakpoint &&
              ((g.activeBreakpoint = null),
              (g.options = g.originalSettings),
              !0 === b && (g.currentSlide = g.options.initialSlide),
              g.refresh(b),
              (h = e)),
            b || !1 === h || g.$slider.trigger("breakpoint", [g, h])
        }
      }),
      (b.prototype.changeSlide = function (b, c) {
        var d,
          e,
          f,
          g = this,
          h = a(b.currentTarget)
        switch (
          (h.is("a") && b.preventDefault(),
          h.is("li") || (h = h.closest("li")),
          (f = g.slideCount % g.options.slidesToScroll != 0),
          (d = f
            ? 0
            : (g.slideCount - g.currentSlide) % g.options.slidesToScroll),
          b.data.message)
        ) {
          case "previous":
            ;(e =
              0 === d ? g.options.slidesToScroll : g.options.slidesToShow - d),
              g.slideCount > g.options.slidesToShow &&
                g.slideHandler(g.currentSlide - e, !1, c)
            break
          case "next":
            ;(e = 0 === d ? g.options.slidesToScroll : d),
              g.slideCount > g.options.slidesToShow &&
                g.slideHandler(g.currentSlide + e, !1, c)
            break
          case "index":
            var i =
              0 === b.data.index
                ? 0
                : b.data.index || h.index() * g.options.slidesToScroll
            g.slideHandler(g.checkNavigable(i), !1, c),
              h.children().trigger("focus")
            break
          default:
            return
        }
      }),
      (b.prototype.checkNavigable = function (a) {
        var b, c
        if (((b = this.getNavigableIndexes()), (c = 0), a > b[b.length - 1]))
          a = b[b.length - 1]
        else
          for (var d in b) {
            if (a < b[d]) {
              a = c
              break
            }
            c = b[d]
          }
        return a
      }),
      (b.prototype.cleanUpEvents = function () {
        var b = this
        b.options.dots &&
          null !== b.$dots &&
          a("li", b.$dots)
            .off("click.slick", b.changeSlide)
            .off("mouseenter.slick", a.proxy(b.interrupt, b, !0))
            .off("mouseleave.slick", a.proxy(b.interrupt, b, !1)),
          b.$slider.off("focus.slick blur.slick"),
          !0 === b.options.arrows &&
            b.slideCount > b.options.slidesToShow &&
            (b.$prevArrow && b.$prevArrow.off("click.slick", b.changeSlide),
            b.$nextArrow && b.$nextArrow.off("click.slick", b.changeSlide)),
          b.$list.off("touchstart.slick mousedown.slick", b.swipeHandler),
          b.$list.off("touchmove.slick mousemove.slick", b.swipeHandler),
          b.$list.off("touchend.slick mouseup.slick", b.swipeHandler),
          b.$list.off("touchcancel.slick mouseleave.slick", b.swipeHandler),
          b.$list.off("click.slick", b.clickHandler),
          a(document).off(b.visibilityChange, b.visibility),
          b.cleanUpSlideEvents(),
          !0 === b.options.accessibility &&
            b.$list.off("keydown.slick", b.keyHandler),
          !0 === b.options.focusOnSelect &&
            a(b.$slideTrack).children().off("click.slick", b.selectHandler),
          a(window).off(
            "orientationchange.slick.slick-" + b.instanceUid,
            b.orientationChange
          ),
          a(window).off("resize.slick.slick-" + b.instanceUid, b.resize),
          a("[draggable!=true]", b.$slideTrack).off(
            "dragstart",
            b.preventDefault
          ),
          a(window).off("load.slick.slick-" + b.instanceUid, b.setPosition),
          a(document).off("ready.slick.slick-" + b.instanceUid, b.setPosition)
      }),
      (b.prototype.cleanUpSlideEvents = function () {
        var b = this
        b.$list.off("mouseenter.slick", a.proxy(b.interrupt, b, !0)),
          b.$list.off("mouseleave.slick", a.proxy(b.interrupt, b, !1))
      }),
      (b.prototype.cleanUpRows = function () {
        var a,
          b = this
        b.options.rows > 1 &&
          ((a = b.$slides.children().children()),
          a.removeAttr("style"),
          b.$slider.empty().append(a))
      }),
      (b.prototype.clickHandler = function (a) {
        !1 === this.shouldClick &&
          (a.stopImmediatePropagation(),
          a.stopPropagation(),
          a.preventDefault())
      }),
      (b.prototype.destroy = function (b) {
        var c = this
        c.autoPlayClear(),
          (c.touchObject = {}),
          c.cleanUpEvents(),
          a(".slick-cloned", c.$slider).detach(),
          c.$dots && c.$dots.remove(),
          c.$prevArrow &&
            c.$prevArrow.length &&
            (c.$prevArrow
              .removeClass("slick-disabled slick-arrow slick-hidden")
              .removeAttr("aria-hidden aria-disabled tabindex")
              .css("display", ""),
            c.htmlExpr.test(c.options.prevArrow) && c.$prevArrow.remove()),
          c.$nextArrow &&
            c.$nextArrow.length &&
            (c.$nextArrow
              .removeClass("slick-disabled slick-arrow slick-hidden")
              .removeAttr("aria-hidden aria-disabled tabindex")
              .css("display", ""),
            c.htmlExpr.test(c.options.nextArrow) && c.$nextArrow.remove()),
          c.$slides &&
            (c.$slides
              .removeClass(
                "slick-slide slick-active slick-center slick-visible slick-current"
              )
              .removeAttr("aria-hidden")
              .removeAttr("data-slick-index")
              .each(function () {
                a(this).attr("style", a(this).data("originalStyling"))
              }),
            c.$slideTrack.children(this.options.slide).detach(),
            c.$slideTrack.detach(),
            c.$list.detach(),
            c.$slider.append(c.$slides)),
          c.cleanUpRows(),
          c.$slider.removeClass("slick-slider"),
          c.$slider.removeClass("slick-initialized"),
          c.$slider.removeClass("slick-dotted"),
          (c.unslicked = !0),
          b || c.$slider.trigger("destroy", [c])
      }),
      (b.prototype.disableTransition = function (a) {
        var b = this,
          c = {}
        ;(c[b.transitionType] = ""),
          !1 === b.options.fade ? b.$slideTrack.css(c) : b.$slides.eq(a).css(c)
      }),
      (b.prototype.fadeSlide = function (a, b) {
        var c = this
        !1 === c.cssTransitions
          ? (c.$slides.eq(a).css({ zIndex: c.options.zIndex }),
            c.$slides
              .eq(a)
              .animate({ opacity: 1 }, c.options.speed, c.options.easing, b))
          : (c.applyTransition(a),
            c.$slides.eq(a).css({ opacity: 1, zIndex: c.options.zIndex }),
            b &&
              setTimeout(function () {
                c.disableTransition(a), b.call()
              }, c.options.speed))
      }),
      (b.prototype.fadeSlideOut = function (a) {
        var b = this
        !1 === b.cssTransitions
          ? b.$slides
              .eq(a)
              .animate(
                { opacity: 0, zIndex: b.options.zIndex - 2 },
                b.options.speed,
                b.options.easing
              )
          : (b.applyTransition(a),
            b.$slides.eq(a).css({ opacity: 0, zIndex: b.options.zIndex - 2 }))
      }),
      (b.prototype.filterSlides = b.prototype.slickFilter = function (a) {
        var b = this
        null !== a &&
          ((b.$slidesCache = b.$slides),
          b.unload(),
          b.$slideTrack.children(this.options.slide).detach(),
          b.$slidesCache.filter(a).appendTo(b.$slideTrack),
          b.reinit())
      }),
      (b.prototype.focusHandler = function () {
        var b = this
        b.$slider
          .off("focus.slick blur.slick")
          .on("focus.slick blur.slick", "*:not(.slick-arrow)", function (c) {
            c.stopImmediatePropagation()
            var d = a(this)
            setTimeout(function () {
              b.options.pauseOnFocus &&
                ((b.focussed = d.is(":focus")), b.autoPlay())
            }, 0)
          })
      }),
      (b.prototype.getCurrent = b.prototype.slickCurrentSlide = function () {
        return this.currentSlide
      }),
      (b.prototype.getDotCount = function () {
        var a = this,
          b = 0,
          c = 0,
          d = 0
        if (!0 === a.options.infinite)
          for (; b < a.slideCount; )
            ++d,
              (b = c + a.options.slidesToScroll),
              (c +=
                a.options.slidesToScroll <= a.options.slidesToShow
                  ? a.options.slidesToScroll
                  : a.options.slidesToShow)
        else if (!0 === a.options.centerMode) d = a.slideCount
        else if (a.options.asNavFor)
          for (; b < a.slideCount; )
            ++d,
              (b = c + a.options.slidesToScroll),
              (c +=
                a.options.slidesToScroll <= a.options.slidesToShow
                  ? a.options.slidesToScroll
                  : a.options.slidesToShow)
        else
          d =
            1 +
            Math.ceil(
              (a.slideCount - a.options.slidesToShow) / a.options.slidesToScroll
            )
        return d - 1
      }),
      (b.prototype.getLeft = function (a) {
        var b,
          c,
          d,
          e = this,
          f = 0
        return (
          (e.slideOffset = 0),
          (c = e.$slides.first().outerHeight(!0)),
          !0 === e.options.infinite
            ? (e.slideCount > e.options.slidesToShow &&
                ((e.slideOffset = e.slideWidth * e.options.slidesToShow * -1),
                (f = c * e.options.slidesToShow * -1)),
              e.slideCount % e.options.slidesToScroll != 0 &&
                a + e.options.slidesToScroll > e.slideCount &&
                e.slideCount > e.options.slidesToShow &&
                (a > e.slideCount
                  ? ((e.slideOffset =
                      (e.options.slidesToShow - (a - e.slideCount)) *
                      e.slideWidth *
                      -1),
                    (f =
                      (e.options.slidesToShow - (a - e.slideCount)) * c * -1))
                  : ((e.slideOffset =
                      (e.slideCount % e.options.slidesToScroll) *
                      e.slideWidth *
                      -1),
                    (f = (e.slideCount % e.options.slidesToScroll) * c * -1))))
            : a + e.options.slidesToShow > e.slideCount &&
              ((e.slideOffset =
                (a + e.options.slidesToShow - e.slideCount) * e.slideWidth),
              (f = (a + e.options.slidesToShow - e.slideCount) * c)),
          e.slideCount <= e.options.slidesToShow &&
            ((e.slideOffset = 0), (f = 0)),
          !0 === e.options.centerMode && !0 === e.options.infinite
            ? (e.slideOffset +=
                e.slideWidth * Math.floor(e.options.slidesToShow / 2) -
                e.slideWidth)
            : !0 === e.options.centerMode &&
              ((e.slideOffset = 0),
              (e.slideOffset +=
                e.slideWidth * Math.floor(e.options.slidesToShow / 2))),
          (b =
            !1 === e.options.vertical
              ? a * e.slideWidth * -1 + e.slideOffset
              : a * c * -1 + f),
          !0 === e.options.variableWidth &&
            ((d =
              e.slideCount <= e.options.slidesToShow ||
              !1 === e.options.infinite
                ? e.$slideTrack.children(".slick-slide").eq(a)
                : e.$slideTrack
                    .children(".slick-slide")
                    .eq(a + e.options.slidesToShow)),
            (b =
              !0 === e.options.rtl
                ? d[0]
                  ? -1 * (e.$slideTrack.width() - d[0].offsetLeft - d.width())
                  : 0
                : d[0]
                ? -1 * d[0].offsetLeft
                : 0),
            !0 === e.options.centerMode &&
              ((d =
                e.slideCount <= e.options.slidesToShow ||
                !1 === e.options.infinite
                  ? e.$slideTrack.children(".slick-slide").eq(a)
                  : e.$slideTrack
                      .children(".slick-slide")
                      .eq(a + e.options.slidesToShow + 1)),
              (b =
                !0 === e.options.rtl
                  ? d[0]
                    ? -1 * (e.$slideTrack.width() - d[0].offsetLeft - d.width())
                    : 0
                  : d[0]
                  ? -1 * d[0].offsetLeft
                  : 0),
              (b += (e.$list.width() - d.outerWidth()) / 2))),
          b
        )
      }),
      (b.prototype.getOption = b.prototype.slickGetOption = function (a) {
        return this.options[a]
      }),
      (b.prototype.getNavigableIndexes = function () {
        var a,
          b = this,
          c = 0,
          d = 0,
          e = []
        for (
          !1 === b.options.infinite
            ? (a = b.slideCount)
            : ((c = -1 * b.options.slidesToScroll),
              (d = -1 * b.options.slidesToScroll),
              (a = 2 * b.slideCount));
          c < a;

        )
          e.push(c),
            (c = d + b.options.slidesToScroll),
            (d +=
              b.options.slidesToScroll <= b.options.slidesToShow
                ? b.options.slidesToScroll
                : b.options.slidesToShow)
        return e
      }),
      (b.prototype.getSlick = function () {
        return this
      }),
      (b.prototype.getSlideCount = function () {
        var b,
          c,
          d = this
        return (
          (c =
            !0 === d.options.centerMode
              ? d.slideWidth * Math.floor(d.options.slidesToShow / 2)
              : 0),
          !0 === d.options.swipeToSlide
            ? (d.$slideTrack.find(".slick-slide").each(function (e, f) {
                if (f.offsetLeft - c + a(f).outerWidth() / 2 > -1 * d.swipeLeft)
                  return (b = f), !1
              }),
              Math.abs(a(b).attr("data-slick-index") - d.currentSlide) || 1)
            : d.options.slidesToScroll
        )
      }),
      (b.prototype.goTo = b.prototype.slickGoTo = function (a, b) {
        this.changeSlide({ data: { message: "index", index: parseInt(a) } }, b)
      }),
      (b.prototype.init = function (b) {
        var c = this
        a(c.$slider).hasClass("slick-initialized") ||
          (a(c.$slider).addClass("slick-initialized"),
          c.buildRows(),
          c.buildOut(),
          c.setProps(),
          c.startLoad(),
          c.loadSlider(),
          c.initializeEvents(),
          c.updateArrows(),
          c.updateDots(),
          c.checkResponsive(!0),
          c.focusHandler()),
          b && c.$slider.trigger("init", [c]),
          !0 === c.options.accessibility && c.initADA(),
          c.options.autoplay && ((c.paused = !1), c.autoPlay())
      }),
      (b.prototype.initADA = function () {
        var b = this
        b.$slides
          .add(b.$slideTrack.find(".slick-cloned"))
          .attr({ "aria-hidden": "true", tabindex: "-1" })
          .find("a, input, button, select")
          .attr({ tabindex: "-1" }),
          b.$slideTrack.attr("role", "listbox"),
          b.$slides.not(b.$slideTrack.find(".slick-cloned")).each(function (c) {
            a(this).attr({
              role: "option",
              "aria-describedby": "slick-slide" + b.instanceUid + c,
            })
          }),
          null !== b.$dots &&
            b.$dots
              .attr("role", "tablist")
              .find("li")
              .each(function (c) {
                a(this).attr({
                  role: "presentation",
                  "aria-selected": "false",
                  "aria-controls": "navigation" + b.instanceUid + c,
                  id: "slick-slide" + b.instanceUid + c,
                })
              })
              .first()
              .attr("aria-selected", "true")
              .end()
              .find("button")
              .attr("role", "button")
              .end()
              .closest("div")
              .attr("role", "toolbar"),
          b.activateADA()
      }),
      (b.prototype.initArrowEvents = function () {
        var a = this
        !0 === a.options.arrows &&
          a.slideCount > a.options.slidesToShow &&
          (a.$prevArrow
            .off("click.slick")
            .on("click.slick", { message: "previous" }, a.changeSlide),
          a.$nextArrow
            .off("click.slick")
            .on("click.slick", { message: "next" }, a.changeSlide))
      }),
      (b.prototype.initDotEvents = function () {
        var b = this
        !0 === b.options.dots &&
          b.slideCount > b.options.slidesToShow &&
          a("li", b.$dots).on(
            "click.slick",
            { message: "index" },
            b.changeSlide
          ),
          !0 === b.options.dots &&
            !0 === b.options.pauseOnDotsHover &&
            a("li", b.$dots)
              .on("mouseenter.slick", a.proxy(b.interrupt, b, !0))
              .on("mouseleave.slick", a.proxy(b.interrupt, b, !1))
      }),
      (b.prototype.initSlideEvents = function () {
        var b = this
        b.options.pauseOnHover &&
          (b.$list.on("mouseenter.slick", a.proxy(b.interrupt, b, !0)),
          b.$list.on("mouseleave.slick", a.proxy(b.interrupt, b, !1)))
      }),
      (b.prototype.initializeEvents = function () {
        var b = this
        b.initArrowEvents(),
          b.initDotEvents(),
          b.initSlideEvents(),
          b.$list.on(
            "touchstart.slick mousedown.slick",
            { action: "start" },
            b.swipeHandler
          ),
          b.$list.on(
            "touchmove.slick mousemove.slick",
            { action: "move" },
            b.swipeHandler
          ),
          b.$list.on(
            "touchend.slick mouseup.slick",
            { action: "end" },
            b.swipeHandler
          ),
          b.$list.on(
            "touchcancel.slick mouseleave.slick",
            { action: "end" },
            b.swipeHandler
          ),
          b.$list.on("click.slick", b.clickHandler),
          a(document).on(b.visibilityChange, a.proxy(b.visibility, b)),
          !0 === b.options.accessibility &&
            b.$list.on("keydown.slick", b.keyHandler),
          !0 === b.options.focusOnSelect &&
            a(b.$slideTrack).children().on("click.slick", b.selectHandler),
          a(window).on(
            "orientationchange.slick.slick-" + b.instanceUid,
            a.proxy(b.orientationChange, b)
          ),
          a(window).on(
            "resize.slick.slick-" + b.instanceUid,
            a.proxy(b.resize, b)
          ),
          a("[draggable!=true]", b.$slideTrack).on(
            "dragstart",
            b.preventDefault
          ),
          a(window).on("load.slick.slick-" + b.instanceUid, b.setPosition),
          a(document).on("ready.slick.slick-" + b.instanceUid, b.setPosition)
      }),
      (b.prototype.initUI = function () {
        var a = this
        !0 === a.options.arrows &&
          a.slideCount > a.options.slidesToShow &&
          (a.$prevArrow.show(), a.$nextArrow.show()),
          !0 === a.options.dots &&
            a.slideCount > a.options.slidesToShow &&
            a.$dots.show()
      }),
      (b.prototype.keyHandler = function (a) {
        var b = this
        a.target.tagName.match("TEXTAREA|INPUT|SELECT") ||
          (37 === a.keyCode && !0 === b.options.accessibility
            ? b.changeSlide({
                data: { message: !0 === b.options.rtl ? "next" : "previous" },
              })
            : 39 === a.keyCode &&
              !0 === b.options.accessibility &&
              b.changeSlide({
                data: { message: !0 === b.options.rtl ? "previous" : "next" },
              }))
      }),
      (b.prototype.lazyLoad = function () {
        function b(b) {
          a("img[data-lazy]", b).each(function () {
            var b = a(this),
              c = a(this).attr("data-lazy"),
              d = document.createElement("img")
            ;(d.onload = function () {
              b.animate({ opacity: 0 }, 100, function () {
                b.attr("src", c).animate({ opacity: 1 }, 200, function () {
                  b.removeAttr("data-lazy").removeClass("slick-loading")
                }),
                  g.$slider.trigger("lazyLoaded", [g, b, c])
              })
            }),
              (d.onerror = function () {
                b
                  .removeAttr("data-lazy")
                  .removeClass("slick-loading")
                  .addClass("slick-lazyload-error"),
                  g.$slider.trigger("lazyLoadError", [g, b, c])
              }),
              (d.src = c)
          })
        }
        var c,
          d,
          e,
          f,
          g = this
        !0 === g.options.centerMode
          ? !0 === g.options.infinite
            ? ((e = g.currentSlide + (g.options.slidesToShow / 2 + 1)),
              (f = e + g.options.slidesToShow + 2))
            : ((e = Math.max(
                0,
                g.currentSlide - (g.options.slidesToShow / 2 + 1)
              )),
              (f = g.options.slidesToShow / 2 + 1 + 2 + g.currentSlide))
          : ((e = g.options.infinite
              ? g.options.slidesToShow + g.currentSlide
              : g.currentSlide),
            (f = Math.ceil(e + g.options.slidesToShow)),
            !0 === g.options.fade && (e > 0 && e--, f <= g.slideCount && f++)),
          (c = g.$slider.find(".slick-slide").slice(e, f)),
          b(c),
          g.slideCount <= g.options.slidesToShow
            ? ((d = g.$slider.find(".slick-slide")), b(d))
            : g.currentSlide >= g.slideCount - g.options.slidesToShow
            ? ((d = g.$slider
                .find(".slick-cloned")
                .slice(0, g.options.slidesToShow)),
              b(d))
            : 0 === g.currentSlide &&
              ((d = g.$slider
                .find(".slick-cloned")
                .slice(-1 * g.options.slidesToShow)),
              b(d))
      }),
      (b.prototype.loadSlider = function () {
        var a = this
        a.setPosition(),
          a.$slideTrack.css({ opacity: 1 }),
          a.$slider.removeClass("slick-loading"),
          a.initUI(),
          "progressive" === a.options.lazyLoad && a.progressiveLazyLoad()
      }),
      (b.prototype.next = b.prototype.slickNext = function () {
        this.changeSlide({ data: { message: "next" } })
      }),
      (b.prototype.orientationChange = function () {
        var a = this
        a.checkResponsive(), a.setPosition()
      }),
      (b.prototype.pause = b.prototype.slickPause = function () {
        var a = this
        a.autoPlayClear(), (a.paused = !0)
      }),
      (b.prototype.play = b.prototype.slickPlay = function () {
        var a = this
        a.autoPlay(),
          (a.options.autoplay = !0),
          (a.paused = !1),
          (a.focussed = !1),
          (a.interrupted = !1)
      }),
      (b.prototype.postSlide = function (a) {
        var b = this
        b.unslicked ||
          (b.$slider.trigger("afterChange", [b, a]),
          (b.animating = !1),
          b.setPosition(),
          (b.swipeLeft = null),
          b.options.autoplay && b.autoPlay(),
          !0 === b.options.accessibility && b.initADA())
      }),
      (b.prototype.prev = b.prototype.slickPrev = function () {
        this.changeSlide({ data: { message: "previous" } })
      }),
      (b.prototype.preventDefault = function (a) {
        a.preventDefault()
      }),
      (b.prototype.progressiveLazyLoad = function (b) {
        b = b || 1
        var c,
          d,
          e,
          f = this,
          g = a("img[data-lazy]", f.$slider)
        g.length
          ? ((c = g.first()),
            (d = c.attr("data-lazy")),
            (e = document.createElement("img")),
            (e.onload = function () {
              c
                .attr("src", d)
                .removeAttr("data-lazy")
                .removeClass("slick-loading"),
                !0 === f.options.adaptiveHeight && f.setPosition(),
                f.$slider.trigger("lazyLoaded", [f, c, d]),
                f.progressiveLazyLoad()
            }),
            (e.onerror = function () {
              b < 3
                ? setTimeout(function () {
                    f.progressiveLazyLoad(b + 1)
                  }, 500)
                : (c
                    .removeAttr("data-lazy")
                    .removeClass("slick-loading")
                    .addClass("slick-lazyload-error"),
                  f.$slider.trigger("lazyLoadError", [f, c, d]),
                  f.progressiveLazyLoad())
            }),
            (e.src = d))
          : f.$slider.trigger("allImagesLoaded", [f])
      }),
      (b.prototype.refresh = function (b) {
        var c,
          d,
          e = this
        ;(d = e.slideCount - e.options.slidesToShow),
          !e.options.infinite && e.currentSlide > d && (e.currentSlide = d),
          e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0),
          (c = e.currentSlide),
          e.destroy(!0),
          a.extend(e, e.initials, { currentSlide: c }),
          e.init(),
          b || e.changeSlide({ data: { message: "index", index: c } }, !1)
      }),
      (b.prototype.registerBreakpoints = function () {
        var b,
          c,
          d,
          e = this,
          f = e.options.responsive || null
        if ("array" === a.type(f) && f.length) {
          e.respondTo = e.options.respondTo || "window"
          for (b in f)
            if (
              ((d = e.breakpoints.length - 1),
              (c = f[b].breakpoint),
              f.hasOwnProperty(b))
            ) {
              for (; d >= 0; )
                e.breakpoints[d] &&
                  e.breakpoints[d] === c &&
                  e.breakpoints.splice(d, 1),
                  d--
              e.breakpoints.push(c), (e.breakpointSettings[c] = f[b].settings)
            }
          e.breakpoints.sort(function (a, b) {
            return e.options.mobileFirst ? a - b : b - a
          })
        }
      }),
      (b.prototype.reinit = function () {
        var b = this
        ;(b.$slides = b.$slideTrack
          .children(b.options.slide)
          .addClass("slick-slide")),
          (b.slideCount = b.$slides.length),
          b.currentSlide >= b.slideCount &&
            0 !== b.currentSlide &&
            (b.currentSlide = b.currentSlide - b.options.slidesToScroll),
          b.slideCount <= b.options.slidesToShow && (b.currentSlide = 0),
          b.registerBreakpoints(),
          b.setProps(),
          b.setupInfinite(),
          b.buildArrows(),
          b.updateArrows(),
          b.initArrowEvents(),
          b.buildDots(),
          b.updateDots(),
          b.initDotEvents(),
          b.cleanUpSlideEvents(),
          b.initSlideEvents(),
          b.checkResponsive(!1, !0),
          !0 === b.options.focusOnSelect &&
            a(b.$slideTrack).children().on("click.slick", b.selectHandler),
          b.setSlideClasses(
            "number" == typeof b.currentSlide ? b.currentSlide : 0
          ),
          b.setPosition(),
          b.focusHandler(),
          (b.paused = !b.options.autoplay),
          b.autoPlay(),
          b.$slider.trigger("reInit", [b])
      }),
      (b.prototype.resize = function () {
        var b = this
        a(window).width() !== b.windowWidth &&
          (clearTimeout(b.windowDelay),
          (b.windowDelay = window.setTimeout(function () {
            ;(b.windowWidth = a(window).width()),
              b.checkResponsive(),
              b.unslicked || b.setPosition()
          }, 50)))
      }),
      (b.prototype.removeSlide = b.prototype.slickRemove = function (a, b, c) {
        var d = this
        return (
          "boolean" == typeof a
            ? ((b = a), (a = !0 === b ? 0 : d.slideCount - 1))
            : (a = !0 === b ? --a : a),
          !(d.slideCount < 1 || a < 0 || a > d.slideCount - 1) &&
            (d.unload(),
            !0 === c
              ? d.$slideTrack.children().remove()
              : d.$slideTrack.children(this.options.slide).eq(a).remove(),
            (d.$slides = d.$slideTrack.children(this.options.slide)),
            d.$slideTrack.children(this.options.slide).detach(),
            d.$slideTrack.append(d.$slides),
            (d.$slidesCache = d.$slides),
            void d.reinit())
        )
      }),
      (b.prototype.setCSS = function (a) {
        var b,
          c,
          d = this,
          e = {}
        !0 === d.options.rtl && (a = -a),
          (b = "left" == d.positionProp ? Math.ceil(a) + "px" : "0px"),
          (c = "top" == d.positionProp ? Math.ceil(a) + "px" : "0px"),
          (e[d.positionProp] = a),
          !1 === d.transformsEnabled
            ? d.$slideTrack.css(e)
            : ((e = {}),
              !1 === d.cssTransitions
                ? ((e[d.animType] = "translate(" + b + ", " + c + ")"),
                  d.$slideTrack.css(e))
                : ((e[d.animType] = "translate3d(" + b + ", " + c + ", 0px)"),
                  d.$slideTrack.css(e)))
      }),
      (b.prototype.setDimensions = function () {
        var a = this
        !1 === a.options.vertical
          ? !0 === a.options.centerMode &&
            a.$list.css({ padding: "0px " + a.options.centerPadding })
          : (a.$list.height(
              a.$slides.first().outerHeight(!0) * a.options.slidesToShow
            ),
            !0 === a.options.centerMode &&
              a.$list.css({ padding: a.options.centerPadding + " 0px" })),
          (a.listWidth = a.$list.width()),
          (a.listHeight = a.$list.height()),
          !1 === a.options.vertical && !1 === a.options.variableWidth
            ? ((a.slideWidth = Math.ceil(a.listWidth / a.options.slidesToShow)),
              a.$slideTrack.width(
                Math.ceil(
                  a.slideWidth * a.$slideTrack.children(".slick-slide").length
                )
              ))
            : !0 === a.options.variableWidth
            ? a.$slideTrack.width(5e3 * a.slideCount)
            : ((a.slideWidth = Math.ceil(a.listWidth)),
              a.$slideTrack.height(
                Math.ceil(
                  a.$slides.first().outerHeight(!0) *
                    a.$slideTrack.children(".slick-slide").length
                )
              ))
        var b = a.$slides.first().outerWidth(!0) - a.$slides.first().width()
        !1 === a.options.variableWidth &&
          a.$slideTrack.children(".slick-slide").width(a.slideWidth - b)
      }),
      (b.prototype.setFade = function () {
        var b,
          c = this
        c.$slides.each(function (d, e) {
          ;(b = c.slideWidth * d * -1),
            !0 === c.options.rtl
              ? a(e).css({
                  position: "relative",
                  right: b,
                  top: 0,
                  zIndex: c.options.zIndex - 2,
                  opacity: 0,
                })
              : a(e).css({
                  position: "relative",
                  left: b,
                  top: 0,
                  zIndex: c.options.zIndex - 2,
                  opacity: 0,
                })
        }),
          c.$slides
            .eq(c.currentSlide)
            .css({ zIndex: c.options.zIndex - 1, opacity: 1 })
      }),
      (b.prototype.setHeight = function () {
        var a = this
        if (
          1 === a.options.slidesToShow &&
          !0 === a.options.adaptiveHeight &&
          !1 === a.options.vertical
        ) {
          var b = a.$slides.eq(a.currentSlide).outerHeight(!0)
          a.$list.css("height", b)
        }
      }),
      (b.prototype.setOption = b.prototype.slickSetOption = function () {
        var b,
          c,
          d,
          e,
          f,
          g = this,
          h = !1
        if (
          ("object" === a.type(arguments[0])
            ? ((d = arguments[0]), (h = arguments[1]), (f = "multiple"))
            : "string" === a.type(arguments[0]) &&
              ((d = arguments[0]),
              (e = arguments[1]),
              (h = arguments[2]),
              "responsive" === arguments[0] && "array" === a.type(arguments[1])
                ? (f = "responsive")
                : void 0 !== arguments[1] && (f = "single")),
          "single" === f)
        )
          g.options[d] = e
        else if ("multiple" === f)
          a.each(d, function (a, b) {
            g.options[a] = b
          })
        else if ("responsive" === f)
          for (c in e)
            if ("array" !== a.type(g.options.responsive))
              g.options.responsive = [e[c]]
            else {
              for (b = g.options.responsive.length - 1; b >= 0; )
                g.options.responsive[b].breakpoint === e[c].breakpoint &&
                  g.options.responsive.splice(b, 1),
                  b--
              g.options.responsive.push(e[c])
            }
        h && (g.unload(), g.reinit())
      }),
      (b.prototype.setPosition = function () {
        var a = this
        a.setDimensions(),
          a.setHeight(),
          !1 === a.options.fade
            ? a.setCSS(a.getLeft(a.currentSlide))
            : a.setFade(),
          a.$slider.trigger("setPosition", [a])
      }),
      (b.prototype.setProps = function () {
        var a = this,
          b = document.body.style
        ;(a.positionProp = !0 === a.options.vertical ? "top" : "left"),
          "top" === a.positionProp
            ? a.$slider.addClass("slick-vertical")
            : a.$slider.removeClass("slick-vertical"),
          (void 0 === b.WebkitTransition &&
            void 0 === b.MozTransition &&
            void 0 === b.msTransition) ||
            (!0 === a.options.useCSS && (a.cssTransitions = !0)),
          a.options.fade &&
            ("number" == typeof a.options.zIndex
              ? a.options.zIndex < 3 && (a.options.zIndex = 3)
              : (a.options.zIndex = a.defaults.zIndex)),
          void 0 !== b.OTransform &&
            ((a.animType = "OTransform"),
            (a.transformType = "-o-transform"),
            (a.transitionType = "OTransition"),
            void 0 === b.perspectiveProperty &&
              void 0 === b.webkitPerspective &&
              (a.animType = !1)),
          void 0 !== b.MozTransform &&
            ((a.animType = "MozTransform"),
            (a.transformType = "-moz-transform"),
            (a.transitionType = "MozTransition"),
            void 0 === b.perspectiveProperty &&
              void 0 === b.MozPerspective &&
              (a.animType = !1)),
          void 0 !== b.webkitTransform &&
            ((a.animType = "webkitTransform"),
            (a.transformType = "-webkit-transform"),
            (a.transitionType = "webkitTransition"),
            void 0 === b.perspectiveProperty &&
              void 0 === b.webkitPerspective &&
              (a.animType = !1)),
          void 0 !== b.msTransform &&
            ((a.animType = "msTransform"),
            (a.transformType = "-ms-transform"),
            (a.transitionType = "msTransition"),
            void 0 === b.msTransform && (a.animType = !1)),
          void 0 !== b.transform &&
            !1 !== a.animType &&
            ((a.animType = "transform"),
            (a.transformType = "transform"),
            (a.transitionType = "transition")),
          (a.transformsEnabled =
            a.options.useTransform && null !== a.animType && !1 !== a.animType)
      }),
      (b.prototype.setSlideClasses = function (a) {
        var b,
          c,
          d,
          e,
          f = this
        ;(c = f.$slider
          .find(".slick-slide")
          .removeClass("slick-active slick-center slick-current")
          .attr("aria-hidden", "true")),
          f.$slides.eq(a).addClass("slick-current"),
          !0 === f.options.centerMode
            ? ((b = Math.floor(f.options.slidesToShow / 2)),
              !0 === f.options.infinite &&
                (a >= b && a <= f.slideCount - 1 - b
                  ? f.$slides
                      .slice(a - b, a + b + 1)
                      .addClass("slick-active")
                      .attr("aria-hidden", "false")
                  : ((d = f.options.slidesToShow + a),
                    c
                      .slice(d - b + 1, d + b + 2)
                      .addClass("slick-active")
                      .attr("aria-hidden", "false")),
                0 === a
                  ? c
                      .eq(c.length - 1 - f.options.slidesToShow)
                      .addClass("slick-center")
                  : a === f.slideCount - 1 &&
                    c.eq(f.options.slidesToShow).addClass("slick-center")),
              f.$slides.eq(a).addClass("slick-center"))
            : a >= 0 && a <= f.slideCount - f.options.slidesToShow
            ? f.$slides
                .slice(a, a + f.options.slidesToShow)
                .addClass("slick-active")
                .attr("aria-hidden", "false")
            : c.length <= f.options.slidesToShow
            ? c.addClass("slick-active").attr("aria-hidden", "false")
            : ((e = f.slideCount % f.options.slidesToShow),
              (d = !0 === f.options.infinite ? f.options.slidesToShow + a : a),
              f.options.slidesToShow == f.options.slidesToScroll &&
              f.slideCount - a < f.options.slidesToShow
                ? c
                    .slice(d - (f.options.slidesToShow - e), d + e)
                    .addClass("slick-active")
                    .attr("aria-hidden", "false")
                : c
                    .slice(d, d + f.options.slidesToShow)
                    .addClass("slick-active")
                    .attr("aria-hidden", "false")),
          "ondemand" === f.options.lazyLoad && f.lazyLoad()
      }),
      (b.prototype.setupInfinite = function () {
        var b,
          c,
          d,
          e = this
        if (
          (!0 === e.options.fade && (e.options.centerMode = !1),
          !0 === e.options.infinite &&
            !1 === e.options.fade &&
            ((c = null), e.slideCount > e.options.slidesToShow))
        ) {
          for (
            d =
              !0 === e.options.centerMode
                ? e.options.slidesToShow + 1
                : e.options.slidesToShow,
              b = e.slideCount;
            b > e.slideCount - d;
            b -= 1
          )
            (c = b - 1),
              a(e.$slides[c])
                .clone(!0)
                .attr("id", "")
                .attr("data-slick-index", c - e.slideCount)
                .prependTo(e.$slideTrack)
                .addClass("slick-cloned")
          for (b = 0; b < d; b += 1)
            (c = b),
              a(e.$slides[c])
                .clone(!0)
                .attr("id", "")
                .attr("data-slick-index", c + e.slideCount)
                .appendTo(e.$slideTrack)
                .addClass("slick-cloned")
          e.$slideTrack
            .find(".slick-cloned")
            .find("[id]")
            .each(function () {
              a(this).attr("id", "")
            })
        }
      }),
      (b.prototype.interrupt = function (a) {
        var b = this
        a || b.autoPlay(), (b.interrupted = a)
      }),
      (b.prototype.selectHandler = function (b) {
        var c = this,
          d = a(b.target).is(".slick-slide")
            ? a(b.target)
            : a(b.target).parents(".slick-slide"),
          e = parseInt(d.attr("data-slick-index"))
        return (
          e || (e = 0),
          c.slideCount <= c.options.slidesToShow
            ? (c.setSlideClasses(e), void c.asNavFor(e))
            : void c.slideHandler(e)
        )
      }),
      (b.prototype.slideHandler = function (a, b, c) {
        var d,
          e,
          f,
          g,
          h,
          i = null,
          j = this
        if (
          ((b = b || !1),
          (!0 !== j.animating || !0 !== j.options.waitForAnimate) &&
            !(
              (!0 === j.options.fade && j.currentSlide === a) ||
              j.slideCount <= j.options.slidesToShow
            ))
        )
          return (
            !1 === b && j.asNavFor(a),
            (d = a),
            (i = j.getLeft(d)),
            (g = j.getLeft(j.currentSlide)),
            (j.currentLeft = null === j.swipeLeft ? g : j.swipeLeft),
            !1 === j.options.infinite &&
            !1 === j.options.centerMode &&
            (a < 0 || a > j.getDotCount() * j.options.slidesToScroll)
              ? void (
                  !1 === j.options.fade &&
                  ((d = j.currentSlide),
                  !0 !== c
                    ? j.animateSlide(g, function () {
                        j.postSlide(d)
                      })
                    : j.postSlide(d))
                )
              : !1 === j.options.infinite &&
                !0 === j.options.centerMode &&
                (a < 0 || a > j.slideCount - j.options.slidesToScroll)
              ? void (
                  !1 === j.options.fade &&
                  ((d = j.currentSlide),
                  !0 !== c
                    ? j.animateSlide(g, function () {
                        j.postSlide(d)
                      })
                    : j.postSlide(d))
                )
              : (j.options.autoplay && clearInterval(j.autoPlayTimer),
                (e =
                  d < 0
                    ? j.slideCount % j.options.slidesToScroll != 0
                      ? j.slideCount - (j.slideCount % j.options.slidesToScroll)
                      : j.slideCount + d
                    : d >= j.slideCount
                    ? j.slideCount % j.options.slidesToScroll != 0
                      ? 0
                      : d - j.slideCount
                    : d),
                (j.animating = !0),
                j.$slider.trigger("beforeChange", [j, j.currentSlide, e]),
                (f = j.currentSlide),
                (j.currentSlide = e),
                j.setSlideClasses(j.currentSlide),
                j.options.asNavFor &&
                  ((h = j.getNavTarget()),
                  (h = h.slick("getSlick")),
                  h.slideCount <= h.options.slidesToShow &&
                    h.setSlideClasses(j.currentSlide)),
                j.updateDots(),
                j.updateArrows(),
                !0 === j.options.fade
                  ? (!0 !== c
                      ? (j.fadeSlideOut(f),
                        j.fadeSlide(e, function () {
                          j.postSlide(e)
                        }))
                      : j.postSlide(e),
                    void j.animateHeight())
                  : void (!0 !== c
                      ? j.animateSlide(i, function () {
                          j.postSlide(e)
                        })
                      : j.postSlide(e)))
          )
      }),
      (b.prototype.startLoad = function () {
        var a = this
        !0 === a.options.arrows &&
          a.slideCount > a.options.slidesToShow &&
          (a.$prevArrow.hide(), a.$nextArrow.hide()),
          !0 === a.options.dots &&
            a.slideCount > a.options.slidesToShow &&
            a.$dots.hide(),
          a.$slider.addClass("slick-loading")
      }),
      (b.prototype.swipeDirection = function () {
        var a,
          b,
          c,
          d,
          e = this
        return (
          (a = e.touchObject.startX - e.touchObject.curX),
          (b = e.touchObject.startY - e.touchObject.curY),
          (c = Math.atan2(b, a)),
          (d = Math.round((180 * c) / Math.PI)),
          d < 0 && (d = 360 - Math.abs(d)),
          d <= 45 && d >= 0
            ? !1 === e.options.rtl
              ? "left"
              : "right"
            : d <= 360 && d >= 315
            ? !1 === e.options.rtl
              ? "left"
              : "right"
            : d >= 135 && d <= 225
            ? !1 === e.options.rtl
              ? "right"
              : "left"
            : !0 === e.options.verticalSwiping
            ? d >= 35 && d <= 135
              ? "down"
              : "up"
            : "vertical"
        )
      }),
      (b.prototype.swipeEnd = function (a) {
        var b,
          c,
          d = this
        if (
          ((d.dragging = !1),
          (d.interrupted = !1),
          (d.shouldClick = !(d.touchObject.swipeLength > 10)),
          void 0 === d.touchObject.curX)
        )
          return !1
        if (
          (!0 === d.touchObject.edgeHit &&
            d.$slider.trigger("edge", [d, d.swipeDirection()]),
          d.touchObject.swipeLength >= d.touchObject.minSwipe)
        ) {
          switch ((c = d.swipeDirection())) {
            case "left":
            case "down":
              ;(b = d.options.swipeToSlide
                ? d.checkNavigable(d.currentSlide + d.getSlideCount())
                : d.currentSlide + d.getSlideCount()),
                (d.currentDirection = 0)
              break
            case "right":
            case "up":
              ;(b = d.options.swipeToSlide
                ? d.checkNavigable(d.currentSlide - d.getSlideCount())
                : d.currentSlide - d.getSlideCount()),
                (d.currentDirection = 1)
          }
          "vertical" != c &&
            (d.slideHandler(b),
            (d.touchObject = {}),
            d.$slider.trigger("swipe", [d, c]))
        } else
          d.touchObject.startX !== d.touchObject.curX &&
            (d.slideHandler(d.currentSlide), (d.touchObject = {}))
      }),
      (b.prototype.swipeHandler = function (a) {
        var b = this
        if (
          !(
            !1 === b.options.swipe ||
            ("ontouchend" in document && !1 === b.options.swipe) ||
            (!1 === b.options.draggable && -1 !== a.type.indexOf("mouse"))
          )
        )
          switch (
            ((b.touchObject.fingerCount =
              a.originalEvent && void 0 !== a.originalEvent.touches
                ? a.originalEvent.touches.length
                : 1),
            (b.touchObject.minSwipe = b.listWidth / b.options.touchThreshold),
            !0 === b.options.verticalSwiping &&
              (b.touchObject.minSwipe =
                b.listHeight / b.options.touchThreshold),
            a.data.action)
          ) {
            case "start":
              b.swipeStart(a)
              break
            case "move":
              b.swipeMove(a)
              break
            case "end":
              b.swipeEnd(a)
          }
      }),
      (b.prototype.swipeMove = function (a) {
        var b,
          c,
          d,
          e,
          f,
          g = this
        return (
          (f = void 0 !== a.originalEvent ? a.originalEvent.touches : null),
          !(!g.dragging || (f && 1 !== f.length)) &&
            ((b = g.getLeft(g.currentSlide)),
            (g.touchObject.curX = void 0 !== f ? f[0].pageX : a.clientX),
            (g.touchObject.curY = void 0 !== f ? f[0].pageY : a.clientY),
            (g.touchObject.swipeLength = Math.round(
              Math.sqrt(Math.pow(g.touchObject.curX - g.touchObject.startX, 2))
            )),
            !0 === g.options.verticalSwiping &&
              (g.touchObject.swipeLength = Math.round(
                Math.sqrt(
                  Math.pow(g.touchObject.curY - g.touchObject.startY, 2)
                )
              )),
            (c = g.swipeDirection()),
            "vertical" !== c
              ? (void 0 !== a.originalEvent &&
                  g.touchObject.swipeLength > 4 &&
                  a.preventDefault(),
                (e =
                  (!1 === g.options.rtl ? 1 : -1) *
                  (g.touchObject.curX > g.touchObject.startX ? 1 : -1)),
                !0 === g.options.verticalSwiping &&
                  (e = g.touchObject.curY > g.touchObject.startY ? 1 : -1),
                (d = g.touchObject.swipeLength),
                (g.touchObject.edgeHit = !1),
                !1 === g.options.infinite &&
                  ((0 === g.currentSlide && "right" === c) ||
                    (g.currentSlide >= g.getDotCount() && "left" === c)) &&
                  ((d = g.touchObject.swipeLength * g.options.edgeFriction),
                  (g.touchObject.edgeHit = !0)),
                !1 === g.options.vertical
                  ? (g.swipeLeft = b + d * e)
                  : (g.swipeLeft =
                      b + d * (g.$list.height() / g.listWidth) * e),
                !0 === g.options.verticalSwiping && (g.swipeLeft = b + d * e),
                !0 !== g.options.fade &&
                  !1 !== g.options.touchMove &&
                  (!0 === g.animating
                    ? ((g.swipeLeft = null), !1)
                    : void g.setCSS(g.swipeLeft)))
              : void 0)
        )
      }),
      (b.prototype.swipeStart = function (a) {
        var b,
          c = this
        return (
          (c.interrupted = !0),
          1 !== c.touchObject.fingerCount ||
          c.slideCount <= c.options.slidesToShow
            ? ((c.touchObject = {}), !1)
            : (void 0 !== a.originalEvent &&
                void 0 !== a.originalEvent.touches &&
                (b = a.originalEvent.touches[0]),
              (c.touchObject.startX = c.touchObject.curX =
                void 0 !== b ? b.pageX : a.clientX),
              (c.touchObject.startY = c.touchObject.curY =
                void 0 !== b ? b.pageY : a.clientY),
              void (c.dragging = !0))
        )
      }),
      (b.prototype.unfilterSlides = b.prototype.slickUnfilter = function () {
        var a = this
        null !== a.$slidesCache &&
          (a.unload(),
          a.$slideTrack.children(this.options.slide).detach(),
          a.$slidesCache.appendTo(a.$slideTrack),
          a.reinit())
      }),
      (b.prototype.unload = function () {
        var b = this
        a(".slick-cloned", b.$slider).remove(),
          b.$dots && b.$dots.remove(),
          b.$prevArrow &&
            b.htmlExpr.test(b.options.prevArrow) &&
            b.$prevArrow.remove(),
          b.$nextArrow &&
            b.htmlExpr.test(b.options.nextArrow) &&
            b.$nextArrow.remove(),
          b.$slides
            .removeClass("slick-slide slick-active slick-visible slick-current")
            .attr("aria-hidden", "true")
            .css("width", "")
      }),
      (b.prototype.unslick = function (a) {
        var b = this
        b.$slider.trigger("unslick", [b, a]), b.destroy()
      }),
      (b.prototype.updateArrows = function () {
        var a = this
        Math.floor(a.options.slidesToShow / 2),
          !0 === a.options.arrows &&
            a.slideCount > a.options.slidesToShow &&
            !a.options.infinite &&
            (a.$prevArrow
              .removeClass("slick-disabled")
              .attr("aria-disabled", "false"),
            a.$nextArrow
              .removeClass("slick-disabled")
              .attr("aria-disabled", "false"),
            0 === a.currentSlide
              ? (a.$prevArrow
                  .addClass("slick-disabled")
                  .attr("aria-disabled", "true"),
                a.$nextArrow
                  .removeClass("slick-disabled")
                  .attr("aria-disabled", "false"))
              : a.currentSlide >= a.slideCount - a.options.slidesToShow &&
                !1 === a.options.centerMode
              ? (a.$nextArrow
                  .addClass("slick-disabled")
                  .attr("aria-disabled", "true"),
                a.$prevArrow
                  .removeClass("slick-disabled")
                  .attr("aria-disabled", "false"))
              : a.currentSlide >= a.slideCount - 1 &&
                !0 === a.options.centerMode &&
                (a.$nextArrow
                  .addClass("slick-disabled")
                  .attr("aria-disabled", "true"),
                a.$prevArrow
                  .removeClass("slick-disabled")
                  .attr("aria-disabled", "false")))
      }),
      (b.prototype.updateDots = function () {
        var a = this
        null !== a.$dots &&
          (a.$dots
            .find("li")
            .removeClass("slick-active")
            .attr("aria-hidden", "true"),
          a.$dots
            .find("li")
            .eq(Math.floor(a.currentSlide / a.options.slidesToScroll))
            .addClass("slick-active")
            .attr("aria-hidden", "false"))
      }),
      (b.prototype.visibility = function () {
        var a = this
        a.options.autoplay &&
          (document[a.hidden] ? (a.interrupted = !0) : (a.interrupted = !1))
      }),
      (a.fn.slick = function () {
        var a,
          c,
          d = this,
          e = arguments[0],
          f = Array.prototype.slice.call(arguments, 1),
          g = d.length
        for (a = 0; a < g; a++)
          if (
            ("object" == typeof e || void 0 === e
              ? (d[a].slick = new b(d[a], e))
              : (c = d[a].slick[e].apply(d[a].slick, f)),
            void 0 !== c)
          )
            return c
        return d
      })
  }),
  "undefined" == typeof jQuery)
)
  throw new Error("Bootstrap's JavaScript requires jQuery")
;+(function (a) {
  "use strict"
  var b = a.fn.jquery.split(" ")[0].split(".")
  if (
    (b[0] < 2 && b[1] < 9) ||
    (1 == b[0] && 9 == b[1] && b[2] < 1) ||
    b[0] > 3
  )
    throw new Error(
      "Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4"
    )
})(jQuery),
  (function (a) {
    "use strict"
    function b() {
      var a = document.createElement("bootstrap"),
        b = {
          WebkitTransition: "webkitTransitionEnd",
          MozTransition: "transitionend",
          OTransition: "oTransitionEnd otransitionend",
          transition: "transitionend",
        }
      for (var c in b) if (void 0 !== a.style[c]) return { end: b[c] }
      return !1
    }
    ;(a.fn.emulateTransitionEnd = function (b) {
      var c = !1,
        d = this
      a(this).one("bsTransitionEnd", function () {
        c = !0
      })
      var e = function () {
        c || a(d).trigger(a.support.transition.end)
      }
      return setTimeout(e, b), this
    }),
      a(function () {
        ;(a.support.transition = b()),
          a.support.transition &&
            (a.event.special.bsTransitionEnd = {
              bindType: a.support.transition.end,
              delegateType: a.support.transition.end,
              handle: function (b) {
                if (a(b.target).is(this))
                  return b.handleObj.handler.apply(this, arguments)
              },
            })
      })
  })(jQuery),
  (function (a) {
    "use strict"
    function b(b) {
      return this.each(function () {
        var c = a(this),
          e = c.data("bs.alert")
        e || c.data("bs.alert", (e = new d(this))),
          "string" == typeof b && e[b].call(c)
      })
    }
    var c = '[data-dismiss="alert"]',
      d = function (b) {
        a(b).on("click", c, this.close)
      }
    ;(d.VERSION = "3.3.7"),
      (d.TRANSITION_DURATION = 150),
      (d.prototype.close = function (b) {
        function c() {
          g.detach().trigger("closed.bs.alert").remove()
        }
        var e = a(this),
          f = e.attr("data-target")
        f || ((f = e.attr("href")), (f = f && f.replace(/.*(?=#[^\s]*$)/, "")))
        var g = a("#" === f ? [] : f)
        b && b.preventDefault(),
          g.length || (g = e.closest(".alert")),
          g.trigger((b = a.Event("close.bs.alert"))),
          b.isDefaultPrevented() ||
            (g.removeClass("in"),
            a.support.transition && g.hasClass("fade")
              ? g
                  .one("bsTransitionEnd", c)
                  .emulateTransitionEnd(d.TRANSITION_DURATION)
              : c())
      })
    var e = a.fn.alert
    ;(a.fn.alert = b),
      (a.fn.alert.Constructor = d),
      (a.fn.alert.noConflict = function () {
        return (a.fn.alert = e), this
      }),
      a(document).on("click.bs.alert.data-api", c, d.prototype.close)
  })(jQuery),
  (function (a) {
    "use strict"
    function b(b) {
      return this.each(function () {
        var d = a(this),
          e = d.data("bs.button"),
          f = "object" == typeof b && b
        e || d.data("bs.button", (e = new c(this, f))),
          "toggle" == b ? e.toggle() : b && e.setState(b)
      })
    }
    var c = function (b, d) {
      ;(this.$element = a(b)),
        (this.options = a.extend({}, c.DEFAULTS, d)),
        (this.isLoading = !1)
    }
    ;(c.VERSION = "3.3.7"),
      (c.DEFAULTS = { loadingText: "loading..." }),
      (c.prototype.setState = function (b) {
        var c = "disabled",
          d = this.$element,
          e = d.is("input") ? "val" : "html",
          f = d.data()
        ;(b += "Text"),
          null == f.resetText && d.data("resetText", d[e]()),
          setTimeout(
            a.proxy(function () {
              d[e](null == f[b] ? this.options[b] : f[b]),
                "loadingText" == b
                  ? ((this.isLoading = !0),
                    d.addClass(c).attr(c, c).prop(c, !0))
                  : this.isLoading &&
                    ((this.isLoading = !1),
                    d.removeClass(c).removeAttr(c).prop(c, !1))
            }, this),
            0
          )
      }),
      (c.prototype.toggle = function () {
        var a = !0,
          b = this.$element.closest('[data-toggle="buttons"]')
        if (b.length) {
          var c = this.$element.find("input")
          "radio" == c.prop("type")
            ? (c.prop("checked") && (a = !1),
              b.find(".active").removeClass("active"),
              this.$element.addClass("active"))
            : "checkbox" == c.prop("type") &&
              (c.prop("checked") !== this.$element.hasClass("active") &&
                (a = !1),
              this.$element.toggleClass("active")),
            c.prop("checked", this.$element.hasClass("active")),
            a && c.trigger("change")
        } else
          this.$element.attr("aria-pressed", !this.$element.hasClass("active")),
            this.$element.toggleClass("active")
      })
    var d = a.fn.button
    ;(a.fn.button = b),
      (a.fn.button.Constructor = c),
      (a.fn.button.noConflict = function () {
        return (a.fn.button = d), this
      }),
      a(document)
        .on("click.bs.button.data-api", '[data-toggle^="button"]', function (
          c
        ) {
          var d = a(c.target).closest(".btn")
          b.call(d, "toggle"),
            a(c.target).is('input[type="radio"], input[type="checkbox"]') ||
              (c.preventDefault(),
              d.is("input,button")
                ? d.trigger("focus")
                : d
                    .find("input:visible,button:visible")
                    .first()
                    .trigger("focus"))
        })
        .on(
          "focus.bs.button.data-api blur.bs.button.data-api",
          '[data-toggle^="button"]',
          function (b) {
            a(b.target)
              .closest(".btn")
              .toggleClass("focus", /^focus(in)?$/.test(b.type))
          }
        )
  })(jQuery),
  (function (a) {
    "use strict"
    function b(b) {
      return this.each(function () {
        var d = a(this),
          e = d.data("bs.carousel"),
          f = a.extend({}, c.DEFAULTS, d.data(), "object" == typeof b && b),
          g = "string" == typeof b ? b : f.slide
        e || d.data("bs.carousel", (e = new c(this, f))),
          "number" == typeof b
            ? e.to(b)
            : g
            ? e[g]()
            : f.interval && e.pause().cycle()
      })
    }
    var c = function (b, c) {
      ;(this.$element = a(b)),
        (this.$indicators = this.$element.find(".carousel-indicators")),
        (this.options = c),
        (this.paused = null),
        (this.sliding = null),
        (this.interval = null),
        (this.$active = null),
        (this.$items = null),
        this.options.keyboard &&
          this.$element.on("keydown.bs.carousel", a.proxy(this.keydown, this)),
        "hover" == this.options.pause &&
          !("ontouchstart" in document.documentElement) &&
          this.$element
            .on("mouseenter.bs.carousel", a.proxy(this.pause, this))
            .on("mouseleave.bs.carousel", a.proxy(this.cycle, this))
    }
    ;(c.VERSION = "3.3.7"),
      (c.TRANSITION_DURATION = 600),
      (c.DEFAULTS = { interval: 5e3, pause: "hover", wrap: !0, keyboard: !0 }),
      (c.prototype.keydown = function (a) {
        if (!/input|textarea/i.test(a.target.tagName)) {
          switch (a.which) {
            case 37:
              this.prev()
              break
            case 39:
              this.next()
              break
            default:
              return
          }
          a.preventDefault()
        }
      }),
      (c.prototype.cycle = function (b) {
        return (
          b || (this.paused = !1),
          this.interval && clearInterval(this.interval),
          this.options.interval &&
            !this.paused &&
            (this.interval = setInterval(
              a.proxy(this.next, this),
              this.options.interval
            )),
          this
        )
      }),
      (c.prototype.getItemIndex = function (a) {
        return (
          (this.$items = a.parent().children(".item")),
          this.$items.index(a || this.$active)
        )
      }),
      (c.prototype.getItemForDirection = function (a, b) {
        var c = this.getItemIndex(b)
        if (
          (("prev" == a && 0 === c) ||
            ("next" == a && c == this.$items.length - 1)) &&
          !this.options.wrap
        )
          return b
        var d = "prev" == a ? -1 : 1,
          e = (c + d) % this.$items.length
        return this.$items.eq(e)
      }),
      (c.prototype.to = function (a) {
        var b = this,
          c = this.getItemIndex(
            (this.$active = this.$element.find(".item.active"))
          )
        if (!(a > this.$items.length - 1 || a < 0))
          return this.sliding
            ? this.$element.one("slid.bs.carousel", function () {
                b.to(a)
              })
            : c == a
            ? this.pause().cycle()
            : this.slide(a > c ? "next" : "prev", this.$items.eq(a))
      }),
      (c.prototype.pause = function (b) {
        return (
          b || (this.paused = !0),
          this.$element.find(".next, .prev").length &&
            a.support.transition &&
            (this.$element.trigger(a.support.transition.end), this.cycle(!0)),
          (this.interval = clearInterval(this.interval)),
          this
        )
      }),
      (c.prototype.next = function () {
        if (!this.sliding) return this.slide("next")
      }),
      (c.prototype.prev = function () {
        if (!this.sliding) return this.slide("prev")
      }),
      (c.prototype.slide = function (b, d) {
        var e = this.$element.find(".item.active"),
          f = d || this.getItemForDirection(b, e),
          g = this.interval,
          h = "next" == b ? "left" : "right",
          i = this
        if (f.hasClass("active")) return (this.sliding = !1)
        var j = f[0],
          k = a.Event("slide.bs.carousel", { relatedTarget: j, direction: h })
        if ((this.$element.trigger(k), !k.isDefaultPrevented())) {
          if (
            ((this.sliding = !0), g && this.pause(), this.$indicators.length)
          ) {
            this.$indicators.find(".active").removeClass("active")
            var l = a(this.$indicators.children()[this.getItemIndex(f)])
            l && l.addClass("active")
          }
          var m = a.Event("slid.bs.carousel", {
            relatedTarget: j,
            direction: h,
          })
          return (
            a.support.transition && this.$element.hasClass("slide")
              ? (f.addClass(b),
                f[0].offsetWidth,
                e.addClass(h),
                f.addClass(h),
                e
                  .one("bsTransitionEnd", function () {
                    f.removeClass([b, h].join(" ")).addClass("active"),
                      e.removeClass(["active", h].join(" ")),
                      (i.sliding = !1),
                      setTimeout(function () {
                        i.$element.trigger(m)
                      }, 0)
                  })
                  .emulateTransitionEnd(c.TRANSITION_DURATION))
              : (e.removeClass("active"),
                f.addClass("active"),
                (this.sliding = !1),
                this.$element.trigger(m)),
            g && this.cycle(),
            this
          )
        }
      })
    var d = a.fn.carousel
    ;(a.fn.carousel = b),
      (a.fn.carousel.Constructor = c),
      (a.fn.carousel.noConflict = function () {
        return (a.fn.carousel = d), this
      })
    var e = function (c) {
      var d,
        e = a(this),
        f = a(
          e.attr("data-target") ||
            ((d = e.attr("href")) && d.replace(/.*(?=#[^\s]+$)/, ""))
        )
      if (f.hasClass("carousel")) {
        var g = a.extend({}, f.data(), e.data()),
          h = e.attr("data-slide-to")
        h && (g.interval = !1),
          b.call(f, g),
          h && f.data("bs.carousel").to(h),
          c.preventDefault()
      }
    }
    a(document)
      .on("click.bs.carousel.data-api", "[data-slide]", e)
      .on("click.bs.carousel.data-api", "[data-slide-to]", e),
      a(window).on("load", function () {
        a('[data-ride="carousel"]').each(function () {
          var c = a(this)
          b.call(c, c.data())
        })
      })
  })(jQuery),
  (function (a) {
    "use strict"
    function b(b) {
      var c,
        d =
          b.attr("data-target") ||
          ((c = b.attr("href")) && c.replace(/.*(?=#[^\s]+$)/, ""))
      return a(d)
    }
    function c(b) {
      return this.each(function () {
        var c = a(this),
          e = c.data("bs.collapse"),
          f = a.extend({}, d.DEFAULTS, c.data(), "object" == typeof b && b)
        !e && f.toggle && /show|hide/.test(b) && (f.toggle = !1),
          e || c.data("bs.collapse", (e = new d(this, f))),
          "string" == typeof b && e[b]()
      })
    }
    var d = function (b, c) {
      ;(this.$element = a(b)),
        (this.options = a.extend({}, d.DEFAULTS, c)),
        (this.$trigger = a(
          '[data-toggle="collapse"][href="#' +
            b.id +
            '"],[data-toggle="collapse"][data-target="#' +
            b.id +
            '"]'
        )),
        (this.transitioning = null),
        this.options.parent
          ? (this.$parent = this.getParent())
          : this.addAriaAndCollapsedClass(this.$element, this.$trigger),
        this.options.toggle && this.toggle()
    }
    ;(d.VERSION = "3.3.7"),
      (d.TRANSITION_DURATION = 350),
      (d.DEFAULTS = { toggle: !0 }),
      (d.prototype.dimension = function () {
        return this.$element.hasClass("width") ? "width" : "height"
      }),
      (d.prototype.show = function () {
        if (!this.transitioning && !this.$element.hasClass("in")) {
          var b,
            e =
              this.$parent &&
              this.$parent.children(".panel").children(".in, .collapsing")
          if (
            !(e && e.length && (b = e.data("bs.collapse")) && b.transitioning)
          ) {
            var f = a.Event("show.bs.collapse")
            if ((this.$element.trigger(f), !f.isDefaultPrevented())) {
              e &&
                e.length &&
                (c.call(e, "hide"), b || e.data("bs.collapse", null))
              var g = this.dimension()
              this.$element
                .removeClass("collapse")
                .addClass("collapsing")
                [g](0)
                .attr("aria-expanded", !0),
                this.$trigger
                  .removeClass("collapsed")
                  .attr("aria-expanded", !0),
                (this.transitioning = 1)
              var h = function () {
                this.$element
                  .removeClass("collapsing")
                  .addClass("collapse in")
                  [g](""),
                  (this.transitioning = 0),
                  this.$element.trigger("shown.bs.collapse")
              }
              if (!a.support.transition) return h.call(this)
              var i = a.camelCase(["scroll", g].join("-"))
              this.$element
                .one("bsTransitionEnd", a.proxy(h, this))
                .emulateTransitionEnd(d.TRANSITION_DURATION)
                [g](this.$element[0][i])
            }
          }
        }
      }),
      (d.prototype.hide = function () {
        if (!this.transitioning && this.$element.hasClass("in")) {
          var b = a.Event("hide.bs.collapse")
          if ((this.$element.trigger(b), !b.isDefaultPrevented())) {
            var c = this.dimension()
            this.$element[c](this.$element[c]())[0].offsetHeight,
              this.$element
                .addClass("collapsing")
                .removeClass("collapse in")
                .attr("aria-expanded", !1),
              this.$trigger.addClass("collapsed").attr("aria-expanded", !1),
              (this.transitioning = 1)
            var e = function () {
              ;(this.transitioning = 0),
                this.$element
                  .removeClass("collapsing")
                  .addClass("collapse")
                  .trigger("hidden.bs.collapse")
            }
            return a.support.transition
              ? void this.$element[c](0)
                  .one("bsTransitionEnd", a.proxy(e, this))
                  .emulateTransitionEnd(d.TRANSITION_DURATION)
              : e.call(this)
          }
        }
      }),
      (d.prototype.toggle = function () {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
      }),
      (d.prototype.getParent = function () {
        return a(this.options.parent)
          .find(
            '[data-toggle="collapse"][data-parent="' +
              this.options.parent +
              '"]'
          )
          .each(
            a.proxy(function (c, d) {
              var e = a(d)
              this.addAriaAndCollapsedClass(b(e), e)
            }, this)
          )
          .end()
      }),
      (d.prototype.addAriaAndCollapsedClass = function (a, b) {
        var c = a.hasClass("in")
        a.attr("aria-expanded", c),
          b.toggleClass("collapsed", !c).attr("aria-expanded", c)
      })
    var e = a.fn.collapse
    ;(a.fn.collapse = c),
      (a.fn.collapse.Constructor = d),
      (a.fn.collapse.noConflict = function () {
        return (a.fn.collapse = e), this
      }),
      a(document).on(
        "click.bs.collapse.data-api",
        '[data-toggle="collapse"]',
        function (d) {
          var e = a(this)
          e.attr("data-target") || d.preventDefault()
          var f = b(e),
            g = f.data("bs.collapse"),
            h = g ? "toggle" : e.data()
          c.call(f, h)
        }
      )
  })(jQuery),
  (function (a) {
    "use strict"
    function b(b) {
      var c = b.attr("data-target")
      c ||
        ((c = b.attr("href")),
        (c = c && /#[A-Za-z]/.test(c) && c.replace(/.*(?=#[^\s]*$)/, "")))
      var d = c && a(c)
      return d && d.length ? d : b.parent()
    }
    function c(c) {
      ;(c && 3 === c.which) ||
        (a(e).remove(),
        a(f).each(function () {
          var d = a(this),
            e = b(d),
            f = { relatedTarget: this }
          e.hasClass("open") &&
            ((c &&
              "click" == c.type &&
              /input|textarea/i.test(c.target.tagName) &&
              a.contains(e[0], c.target)) ||
              (e.trigger((c = a.Event("hide.bs.dropdown", f))),
              c.isDefaultPrevented() ||
                (d.attr("aria-expanded", "false"),
                e
                  .removeClass("open")
                  .trigger(a.Event("hidden.bs.dropdown", f)))))
        }))
    }
    function d(b) {
      return this.each(function () {
        var c = a(this),
          d = c.data("bs.dropdown")
        d || c.data("bs.dropdown", (d = new g(this))),
          "string" == typeof b && d[b].call(c)
      })
    }
    var e = ".dropdown-backdrop",
      f = '[data-toggle="dropdown"]',
      g = function (b) {
        a(b).on("click.bs.dropdown", this.toggle)
      }
    ;(g.VERSION = "3.3.7"),
      (g.prototype.toggle = function (d) {
        var e = a(this)
        if (!e.is(".disabled, :disabled")) {
          var f = b(e),
            g = f.hasClass("open")
          if ((c(), !g)) {
            "ontouchstart" in document.documentElement &&
              !f.closest(".navbar-nav").length &&
              a(document.createElement("div"))
                .addClass("dropdown-backdrop")
                .insertAfter(a(this))
                .on("click", c)
            var h = { relatedTarget: this }
            if (
              (f.trigger((d = a.Event("show.bs.dropdown", h))),
              d.isDefaultPrevented())
            )
              return
            e.trigger("focus").attr("aria-expanded", "true"),
              f.toggleClass("open").trigger(a.Event("shown.bs.dropdown", h))
          }
          return !1
        }
      }),
      (g.prototype.keydown = function (c) {
        if (
          /(38|40|27|32)/.test(c.which) &&
          !/input|textarea/i.test(c.target.tagName)
        ) {
          var d = a(this)
          if (
            (c.preventDefault(),
            c.stopPropagation(),
            !d.is(".disabled, :disabled"))
          ) {
            var e = b(d),
              g = e.hasClass("open")
            if ((!g && 27 != c.which) || (g && 27 == c.which))
              return (
                27 == c.which && e.find(f).trigger("focus"), d.trigger("click")
              )
            var h = e.find(".dropdown-menu li:not(.disabled):visible a")
            if (h.length) {
              var i = h.index(c.target)
              38 == c.which && i > 0 && i--,
                40 == c.which && i < h.length - 1 && i++,
                ~i || (i = 0),
                h.eq(i).trigger("focus")
            }
          }
        }
      })
    var h = a.fn.dropdown
    ;(a.fn.dropdown = d),
      (a.fn.dropdown.Constructor = g),
      (a.fn.dropdown.noConflict = function () {
        return (a.fn.dropdown = h), this
      }),
      a(document)
        .on("click.bs.dropdown.data-api", c)
        .on("click.bs.dropdown.data-api", ".dropdown form", function (a) {
          a.stopPropagation()
        })
        .on("click.bs.dropdown.data-api", f, g.prototype.toggle)
        .on("keydown.bs.dropdown.data-api", f, g.prototype.keydown)
        .on(
          "keydown.bs.dropdown.data-api",
          ".dropdown-menu",
          g.prototype.keydown
        )
  })(jQuery),
  (function (a) {
    "use strict"
    function b(b, d) {
      return this.each(function () {
        var e = a(this),
          f = e.data("bs.modal"),
          g = a.extend({}, c.DEFAULTS, e.data(), "object" == typeof b && b)
        f || e.data("bs.modal", (f = new c(this, g))),
          "string" == typeof b ? f[b](d) : g.show && f.show(d)
      })
    }
    var c = function (b, c) {
      ;(this.options = c),
        (this.$body = a(document.body)),
        (this.$element = a(b)),
        (this.$dialog = this.$element.find(".modal-dialog")),
        (this.$backdrop = null),
        (this.isShown = null),
        (this.originalBodyPad = null),
        (this.scrollbarWidth = 0),
        (this.ignoreBackdropClick = !1),
        this.options.remote &&
          this.$element.find(".modal-content").load(
            this.options.remote,
            a.proxy(function () {
              this.$element.trigger("loaded.bs.modal")
            }, this)
          )
    }
    ;(c.VERSION = "3.3.7"),
      (c.TRANSITION_DURATION = 300),
      (c.BACKDROP_TRANSITION_DURATION = 150),
      (c.DEFAULTS = { backdrop: !0, keyboard: !0, show: !0 }),
      (c.prototype.toggle = function (a) {
        return this.isShown ? this.hide() : this.show(a)
      }),
      (c.prototype.show = function (b) {
        var d = this,
          e = a.Event("show.bs.modal", { relatedTarget: b })
        this.$element.trigger(e),
          this.isShown ||
            e.isDefaultPrevented() ||
            ((this.isShown = !0),
            this.checkScrollbar(),
            this.setScrollbar(),
            this.$body.addClass("modal-open"),
            this.escape(),
            this.resize(),
            this.$element.on(
              "click.dismiss.bs.modal",
              '[data-dismiss="modal"]',
              a.proxy(this.hide, this)
            ),
            this.$dialog.on("mousedown.dismiss.bs.modal", function () {
              d.$element.one("mouseup.dismiss.bs.modal", function (b) {
                a(b.target).is(d.$element) && (d.ignoreBackdropClick = !0)
              })
            }),
            this.backdrop(function () {
              var e = a.support.transition && d.$element.hasClass("fade")
              d.$element.parent().length || d.$element.appendTo(d.$body),
                d.$element.show().scrollTop(0),
                d.adjustDialog(),
                e && d.$element[0].offsetWidth,
                d.$element.addClass("in"),
                d.enforceFocus()
              var f = a.Event("shown.bs.modal", { relatedTarget: b })
              e
                ? d.$dialog
                    .one("bsTransitionEnd", function () {
                      d.$element.trigger("focus").trigger(f)
                    })
                    .emulateTransitionEnd(c.TRANSITION_DURATION)
                : d.$element.trigger("focus").trigger(f)
            }))
      }),
      (c.prototype.hide = function (b) {
        b && b.preventDefault(),
          (b = a.Event("hide.bs.modal")),
          this.$element.trigger(b),
          this.isShown &&
            !b.isDefaultPrevented() &&
            ((this.isShown = !1),
            this.escape(),
            this.resize(),
            a(document).off("focusin.bs.modal"),
            this.$element
              .removeClass("in")
              .off("click.dismiss.bs.modal")
              .off("mouseup.dismiss.bs.modal"),
            this.$dialog.off("mousedown.dismiss.bs.modal"),
            a.support.transition && this.$element.hasClass("fade")
              ? this.$element
                  .one("bsTransitionEnd", a.proxy(this.hideModal, this))
                  .emulateTransitionEnd(c.TRANSITION_DURATION)
              : this.hideModal())
      }),
      (c.prototype.enforceFocus = function () {
        a(document)
          .off("focusin.bs.modal")
          .on(
            "focusin.bs.modal",
            a.proxy(function (a) {
              document === a.target ||
                this.$element[0] === a.target ||
                this.$element.has(a.target).length ||
                this.$element.trigger("focus")
            }, this)
          )
      }),
      (c.prototype.escape = function () {
        this.isShown && this.options.keyboard
          ? this.$element.on(
              "keydown.dismiss.bs.modal",
              a.proxy(function (a) {
                27 == a.which && this.hide()
              }, this)
            )
          : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
      }),
      (c.prototype.resize = function () {
        this.isShown
          ? a(window).on("resize.bs.modal", a.proxy(this.handleUpdate, this))
          : a(window).off("resize.bs.modal")
      }),
      (c.prototype.hideModal = function () {
        var a = this
        this.$element.hide(),
          this.backdrop(function () {
            a.$body.removeClass("modal-open"),
              a.resetAdjustments(),
              a.resetScrollbar(),
              a.$element.trigger("hidden.bs.modal")
          })
      }),
      (c.prototype.removeBackdrop = function () {
        this.$backdrop && this.$backdrop.remove(), (this.$backdrop = null)
      }),
      (c.prototype.backdrop = function (b) {
        var d = this,
          e = this.$element.hasClass("fade") ? "fade" : ""
        if (this.isShown && this.options.backdrop) {
          var f = a.support.transition && e
          if (
            ((this.$backdrop = a(document.createElement("div"))
              .addClass("modal-backdrop " + e)
              .appendTo(this.$body)),
            this.$element.on(
              "click.dismiss.bs.modal",
              a.proxy(function (a) {
                return this.ignoreBackdropClick
                  ? void (this.ignoreBackdropClick = !1)
                  : void (
                      a.target === a.currentTarget &&
                      ("static" == this.options.backdrop
                        ? this.$element[0].focus()
                        : this.hide())
                    )
              }, this)
            ),
            f && this.$backdrop[0].offsetWidth,
            this.$backdrop.addClass("in"),
            !b)
          )
            return
          f
            ? this.$backdrop
                .one("bsTransitionEnd", b)
                .emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION)
            : b()
        } else if (!this.isShown && this.$backdrop) {
          this.$backdrop.removeClass("in")
          var g = function () {
            d.removeBackdrop(), b && b()
          }
          a.support.transition && this.$element.hasClass("fade")
            ? this.$backdrop
                .one("bsTransitionEnd", g)
                .emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION)
            : g()
        } else b && b()
      }),
      (c.prototype.handleUpdate = function () {
        this.adjustDialog()
      }),
      (c.prototype.adjustDialog = function () {
        var a =
          this.$element[0].scrollHeight > document.documentElement.clientHeight
        this.$element.css({
          paddingLeft: !this.bodyIsOverflowing && a ? this.scrollbarWidth : "",
          paddingRight: this.bodyIsOverflowing && !a ? this.scrollbarWidth : "",
        })
      }),
      (c.prototype.resetAdjustments = function () {
        this.$element.css({ paddingLeft: "", paddingRight: "" })
      }),
      (c.prototype.checkScrollbar = function () {
        var a = window.innerWidth
        if (!a) {
          var b = document.documentElement.getBoundingClientRect()
          a = b.right - Math.abs(b.left)
        }
        ;(this.bodyIsOverflowing = document.body.clientWidth < a),
          (this.scrollbarWidth = this.measureScrollbar())
      }),
      (c.prototype.setScrollbar = function () {
        var a = parseInt(this.$body.css("padding-right") || 0, 10)
        ;(this.originalBodyPad = document.body.style.paddingRight || ""),
          this.bodyIsOverflowing &&
            this.$body.css("padding-right", a + this.scrollbarWidth)
      }),
      (c.prototype.resetScrollbar = function () {
        this.$body.css("padding-right", this.originalBodyPad)
      }),
      (c.prototype.measureScrollbar = function () {
        var a = document.createElement("div")
        ;(a.className = "modal-scrollbar-measure"), this.$body.append(a)
        var b = a.offsetWidth - a.clientWidth
        return this.$body[0].removeChild(a), b
      })
    var d = a.fn.modal
    ;(a.fn.modal = b),
      (a.fn.modal.Constructor = c),
      (a.fn.modal.noConflict = function () {
        return (a.fn.modal = d), this
      }),
      a(document).on(
        "click.bs.modal.data-api",
        '[data-toggle="modal"]',
        function (c) {
          var d = a(this),
            e = d.attr("href"),
            f = a(
              d.attr("data-target") || (e && e.replace(/.*(?=#[^\s]+$)/, ""))
            ),
            g = f.data("bs.modal")
              ? "toggle"
              : a.extend({ remote: !/#/.test(e) && e }, f.data(), d.data())
          d.is("a") && c.preventDefault(),
            f.one("show.bs.modal", function (a) {
              a.isDefaultPrevented() ||
                f.one("hidden.bs.modal", function () {
                  d.is(":visible") && d.trigger("focus")
                })
            }),
            b.call(f, g, this)
        }
      )
  })(jQuery),
  (function (a) {
    "use strict"
    function b(b) {
      return this.each(function () {
        var d = a(this),
          e = d.data("bs.tooltip"),
          f = "object" == typeof b && b
        ;(!e && /destroy|hide/.test(b)) ||
          (e || d.data("bs.tooltip", (e = new c(this, f))),
          "string" == typeof b && e[b]())
      })
    }
    var c = function (a, b) {
      ;(this.type = null),
        (this.options = null),
        (this.enabled = null),
        (this.timeout = null),
        (this.hoverState = null),
        (this.$element = null),
        (this.inState = null),
        this.init("tooltip", a, b)
    }
    ;(c.VERSION = "3.3.7"),
      (c.TRANSITION_DURATION = 150),
      (c.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template:
          '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: { selector: "body", padding: 0 },
      }),
      (c.prototype.init = function (b, c, d) {
        if (
          ((this.enabled = !0),
          (this.type = b),
          (this.$element = a(c)),
          (this.options = this.getOptions(d)),
          (this.$viewport =
            this.options.viewport &&
            a(
              a.isFunction(this.options.viewport)
                ? this.options.viewport.call(this, this.$element)
                : this.options.viewport.selector || this.options.viewport
            )),
          (this.inState = { click: !1, hover: !1, focus: !1 }),
          this.$element[0] instanceof document.constructor &&
            !this.options.selector)
        )
          throw new Error(
            "`selector` option must be specified when initializing " +
              this.type +
              " on the window.document object!"
          )
        for (var e = this.options.trigger.split(" "), f = e.length; f--; ) {
          var g = e[f]
          if ("click" == g)
            this.$element.on(
              "click." + this.type,
              this.options.selector,
              a.proxy(this.toggle, this)
            )
          else if ("manual" != g) {
            var h = "hover" == g ? "mouseenter" : "focusin",
              i = "hover" == g ? "mouseleave" : "focusout"
            this.$element.on(
              h + "." + this.type,
              this.options.selector,
              a.proxy(this.enter, this)
            ),
              this.$element.on(
                i + "." + this.type,
                this.options.selector,
                a.proxy(this.leave, this)
              )
          }
        }
        this.options.selector
          ? (this._options = a.extend({}, this.options, {
              trigger: "manual",
              selector: "",
            }))
          : this.fixTitle()
      }),
      (c.prototype.getDefaults = function () {
        return c.DEFAULTS
      }),
      (c.prototype.getOptions = function (b) {
        return (
          (b = a.extend({}, this.getDefaults(), this.$element.data(), b)),
          b.delay &&
            "number" == typeof b.delay &&
            (b.delay = { show: b.delay, hide: b.delay }),
          b
        )
      }),
      (c.prototype.getDelegateOptions = function () {
        var b = {},
          c = this.getDefaults()
        return (
          this._options &&
            a.each(this._options, function (a, d) {
              c[a] != d && (b[a] = d)
            }),
          b
        )
      }),
      (c.prototype.enter = function (b) {
        var c =
          b instanceof this.constructor
            ? b
            : a(b.currentTarget).data("bs." + this.type)
        return (
          c ||
            ((c = new this.constructor(
              b.currentTarget,
              this.getDelegateOptions()
            )),
            a(b.currentTarget).data("bs." + this.type, c)),
          b instanceof a.Event &&
            (c.inState["focusin" == b.type ? "focus" : "hover"] = !0),
          c.tip().hasClass("in") || "in" == c.hoverState
            ? void (c.hoverState = "in")
            : (clearTimeout(c.timeout),
              (c.hoverState = "in"),
              c.options.delay && c.options.delay.show
                ? void (c.timeout = setTimeout(function () {
                    "in" == c.hoverState && c.show()
                  }, c.options.delay.show))
                : c.show())
        )
      }),
      (c.prototype.isInStateTrue = function () {
        for (var a in this.inState) if (this.inState[a]) return !0
        return !1
      }),
      (c.prototype.leave = function (b) {
        var c =
          b instanceof this.constructor
            ? b
            : a(b.currentTarget).data("bs." + this.type)
        if (
          (c ||
            ((c = new this.constructor(
              b.currentTarget,
              this.getDelegateOptions()
            )),
            a(b.currentTarget).data("bs." + this.type, c)),
          b instanceof a.Event &&
            (c.inState["focusout" == b.type ? "focus" : "hover"] = !1),
          !c.isInStateTrue())
        )
          return (
            clearTimeout(c.timeout),
            (c.hoverState = "out"),
            c.options.delay && c.options.delay.hide
              ? void (c.timeout = setTimeout(function () {
                  "out" == c.hoverState && c.hide()
                }, c.options.delay.hide))
              : c.hide()
          )
      }),
      (c.prototype.show = function () {
        var b = a.Event("show.bs." + this.type)
        if (this.hasContent() && this.enabled) {
          this.$element.trigger(b)
          var d = a.contains(
            this.$element[0].ownerDocument.documentElement,
            this.$element[0]
          )
          if (b.isDefaultPrevented() || !d) return
          var e = this,
            f = this.tip(),
            g = this.getUID(this.type)
          this.setContent(),
            f.attr("id", g),
            this.$element.attr("aria-describedby", g),
            this.options.animation && f.addClass("fade")
          var h =
              "function" == typeof this.options.placement
                ? this.options.placement.call(this, f[0], this.$element[0])
                : this.options.placement,
            i = /\s?auto?\s?/i,
            j = i.test(h)
          j && (h = h.replace(i, "") || "top"),
            f
              .detach()
              .css({ top: 0, left: 0, display: "block" })
              .addClass(h)
              .data("bs." + this.type, this),
            this.options.container
              ? f.appendTo(this.options.container)
              : f.insertAfter(this.$element),
            this.$element.trigger("inserted.bs." + this.type)
          var k = this.getPosition(),
            l = f[0].offsetWidth,
            m = f[0].offsetHeight
          if (j) {
            var n = h,
              o = this.getPosition(this.$viewport)
            ;(h =
              "bottom" == h && k.bottom + m > o.bottom
                ? "top"
                : "top" == h && k.top - m < o.top
                ? "bottom"
                : "right" == h && k.right + l > o.width
                ? "left"
                : "left" == h && k.left - l < o.left
                ? "right"
                : h),
              f.removeClass(n).addClass(h)
          }
          var p = this.getCalculatedOffset(h, k, l, m)
          this.applyPlacement(p, h)
          var q = function () {
            var a = e.hoverState
            e.$element.trigger("shown.bs." + e.type),
              (e.hoverState = null),
              "out" == a && e.leave(e)
          }
          a.support.transition && this.$tip.hasClass("fade")
            ? f
                .one("bsTransitionEnd", q)
                .emulateTransitionEnd(c.TRANSITION_DURATION)
            : q()
        }
      }),
      (c.prototype.applyPlacement = function (b, c) {
        var d = this.tip(),
          e = d[0].offsetWidth,
          f = d[0].offsetHeight,
          g = parseInt(d.css("margin-top"), 10),
          h = parseInt(d.css("margin-left"), 10)
        isNaN(g) && (g = 0),
          isNaN(h) && (h = 0),
          (b.top += g),
          (b.left += h),
          a.offset.setOffset(
            d[0],
            a.extend(
              {
                using: function (a) {
                  d.css({ top: Math.round(a.top), left: Math.round(a.left) })
                },
              },
              b
            ),
            0
          ),
          d.addClass("in")
        var i = d[0].offsetWidth,
          j = d[0].offsetHeight
        "top" == c && j != f && (b.top = b.top + f - j)
        var k = this.getViewportAdjustedDelta(c, b, i, j)
        k.left ? (b.left += k.left) : (b.top += k.top)
        var l = /top|bottom/.test(c),
          m = l ? 2 * k.left - e + i : 2 * k.top - f + j,
          n = l ? "offsetWidth" : "offsetHeight"
        d.offset(b), this.replaceArrow(m, d[0][n], l)
      }),
      (c.prototype.replaceArrow = function (a, b, c) {
        this.arrow()
          .css(c ? "left" : "top", 50 * (1 - a / b) + "%")
          .css(c ? "top" : "left", "")
      }),
      (c.prototype.setContent = function () {
        var a = this.tip(),
          b = this.getTitle()
        a.find(".tooltip-inner")[this.options.html ? "html" : "text"](b),
          a.removeClass("fade in top bottom left right")
      }),
      (c.prototype.hide = function (b) {
        function d() {
          "in" != e.hoverState && f.detach(),
            e.$element &&
              e.$element
                .removeAttr("aria-describedby")
                .trigger("hidden.bs." + e.type),
            b && b()
        }
        var e = this,
          f = a(this.$tip),
          g = a.Event("hide.bs." + this.type)
        if ((this.$element.trigger(g), !g.isDefaultPrevented()))
          return (
            f.removeClass("in"),
            a.support.transition && f.hasClass("fade")
              ? f
                  .one("bsTransitionEnd", d)
                  .emulateTransitionEnd(c.TRANSITION_DURATION)
              : d(),
            (this.hoverState = null),
            this
          )
      }),
      (c.prototype.fixTitle = function () {
        var a = this.$element
        ;(a.attr("title") ||
          "string" != typeof a.attr("data-original-title")) &&
          a.attr("data-original-title", a.attr("title") || "").attr("title", "")
      }),
      (c.prototype.hasContent = function () {
        return this.getTitle()
      }),
      (c.prototype.getPosition = function (b) {
        b = b || this.$element
        var c = b[0],
          d = "BODY" == c.tagName,
          e = c.getBoundingClientRect()
        null == e.width &&
          (e = a.extend({}, e, {
            width: e.right - e.left,
            height: e.bottom - e.top,
          }))
        var f = window.SVGElement && c instanceof window.SVGElement,
          g = d ? { top: 0, left: 0 } : f ? null : b.offset(),
          h = {
            scroll: d
              ? document.documentElement.scrollTop || document.body.scrollTop
              : b.scrollTop(),
          },
          i = d
            ? { width: a(window).width(), height: a(window).height() }
            : null
        return a.extend({}, e, h, i, g)
      }),
      (c.prototype.getCalculatedOffset = function (a, b, c, d) {
        return "bottom" == a
          ? { top: b.top + b.height, left: b.left + b.width / 2 - c / 2 }
          : "top" == a
          ? { top: b.top - d, left: b.left + b.width / 2 - c / 2 }
          : "left" == a
          ? { top: b.top + b.height / 2 - d / 2, left: b.left - c }
          : { top: b.top + b.height / 2 - d / 2, left: b.left + b.width }
      }),
      (c.prototype.getViewportAdjustedDelta = function (a, b, c, d) {
        var e = { top: 0, left: 0 }
        if (!this.$viewport) return e
        var f = (this.options.viewport && this.options.viewport.padding) || 0,
          g = this.getPosition(this.$viewport)
        if (/right|left/.test(a)) {
          var h = b.top - f - g.scroll,
            i = b.top + f - g.scroll + d
          h < g.top
            ? (e.top = g.top - h)
            : i > g.top + g.height && (e.top = g.top + g.height - i)
        } else {
          var j = b.left - f,
            k = b.left + f + c
          j < g.left
            ? (e.left = g.left - j)
            : k > g.right && (e.left = g.left + g.width - k)
        }
        return e
      }),
      (c.prototype.getTitle = function () {
        var a = this.$element,
          b = this.options
        return (
          a.attr("data-original-title") ||
          ("function" == typeof b.title ? b.title.call(a[0]) : b.title)
        )
      }),
      (c.prototype.getUID = function (a) {
        do {
          a += ~~(1e6 * Math.random())
        } while (document.getElementById(a))
        return a
      }),
      (c.prototype.tip = function () {
        if (
          !this.$tip &&
          ((this.$tip = a(this.options.template)), 1 != this.$tip.length)
        )
          throw new Error(
            this.type +
              " `template` option must consist of exactly 1 top-level element!"
          )
        return this.$tip
      }),
      (c.prototype.arrow = function () {
        return (this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow"))
      }),
      (c.prototype.enable = function () {
        this.enabled = !0
      }),
      (c.prototype.disable = function () {
        this.enabled = !1
      }),
      (c.prototype.toggleEnabled = function () {
        this.enabled = !this.enabled
      }),
      (c.prototype.toggle = function (b) {
        var c = this
        b &&
          ((c = a(b.currentTarget).data("bs." + this.type)) ||
            ((c = new this.constructor(
              b.currentTarget,
              this.getDelegateOptions()
            )),
            a(b.currentTarget).data("bs." + this.type, c))),
          b
            ? ((c.inState.click = !c.inState.click),
              c.isInStateTrue() ? c.enter(c) : c.leave(c))
            : c.tip().hasClass("in")
            ? c.leave(c)
            : c.enter(c)
      }),
      (c.prototype.destroy = function () {
        var a = this
        clearTimeout(this.timeout),
          this.hide(function () {
            a.$element.off("." + a.type).removeData("bs." + a.type),
              a.$tip && a.$tip.detach(),
              (a.$tip = null),
              (a.$arrow = null),
              (a.$viewport = null),
              (a.$element = null)
          })
      })
    var d = a.fn.tooltip
    ;(a.fn.tooltip = b),
      (a.fn.tooltip.Constructor = c),
      (a.fn.tooltip.noConflict = function () {
        return (a.fn.tooltip = d), this
      })
  })(jQuery),
  (function (a) {
    "use strict"
    function b(b) {
      return this.each(function () {
        var d = a(this),
          e = d.data("bs.popover"),
          f = "object" == typeof b && b
        ;(!e && /destroy|hide/.test(b)) ||
          (e || d.data("bs.popover", (e = new c(this, f))),
          "string" == typeof b && e[b]())
      })
    }
    var c = function (a, b) {
      this.init("popover", a, b)
    }
    if (!a.fn.tooltip) throw new Error("Popover requires tooltip.js")
    ;(c.VERSION = "3.3.7"),
      (c.DEFAULTS = a.extend({}, a.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template:
          '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>',
      })),
      (c.prototype = a.extend({}, a.fn.tooltip.Constructor.prototype)),
      (c.prototype.constructor = c),
      (c.prototype.getDefaults = function () {
        return c.DEFAULTS
      }),
      (c.prototype.setContent = function () {
        var a = this.tip(),
          b = this.getTitle(),
          c = this.getContent()
        a.find(".popover-title")[this.options.html ? "html" : "text"](b),
          a
            .find(".popover-content")
            .children()
            .detach()
            .end()
            [
              this.options.html
                ? "string" == typeof c
                  ? "html"
                  : "append"
                : "text"
            ](c),
          a.removeClass("fade top bottom left right in"),
          a.find(".popover-title").html() || a.find(".popover-title").hide()
      }),
      (c.prototype.hasContent = function () {
        return this.getTitle() || this.getContent()
      }),
      (c.prototype.getContent = function () {
        var a = this.$element,
          b = this.options
        return (
          a.attr("data-content") ||
          ("function" == typeof b.content ? b.content.call(a[0]) : b.content)
        )
      }),
      (c.prototype.arrow = function () {
        return (this.$arrow = this.$arrow || this.tip().find(".arrow"))
      })
    var d = a.fn.popover
    ;(a.fn.popover = b),
      (a.fn.popover.Constructor = c),
      (a.fn.popover.noConflict = function () {
        return (a.fn.popover = d), this
      })
  })(jQuery),
  (function (a) {
    "use strict"
    function b(c, d) {
      ;(this.$body = a(document.body)),
        (this.$scrollElement = a(a(c).is(document.body) ? window : c)),
        (this.options = a.extend({}, b.DEFAULTS, d)),
        (this.selector = (this.options.target || "") + " .nav li > a"),
        (this.offsets = []),
        (this.targets = []),
        (this.activeTarget = null),
        (this.scrollHeight = 0),
        this.$scrollElement.on(
          "scroll.bs.scrollspy",
          a.proxy(this.process, this)
        ),
        this.refresh(),
        this.process()
    }
    function c(c) {
      return this.each(function () {
        var d = a(this),
          e = d.data("bs.scrollspy"),
          f = "object" == typeof c && c
        e || d.data("bs.scrollspy", (e = new b(this, f))),
          "string" == typeof c && e[c]()
      })
    }
    ;(b.VERSION = "3.3.7"),
      (b.DEFAULTS = { offset: 10 }),
      (b.prototype.getScrollHeight = function () {
        return (
          this.$scrollElement[0].scrollHeight ||
          Math.max(
            this.$body[0].scrollHeight,
            document.documentElement.scrollHeight
          )
        )
      }),
      (b.prototype.refresh = function () {
        var b = this,
          c = "offset",
          d = 0
        ;(this.offsets = []),
          (this.targets = []),
          (this.scrollHeight = this.getScrollHeight()),
          a.isWindow(this.$scrollElement[0]) ||
            ((c = "position"), (d = this.$scrollElement.scrollTop())),
          this.$body
            .find(this.selector)
            .map(function () {
              var b = a(this),
                e = b.data("target") || b.attr("href"),
                f = /^#./.test(e) && a(e)
              return (
                (f && f.length && f.is(":visible") && [[f[c]().top + d, e]]) ||
                null
              )
            })
            .sort(function (a, b) {
              return a[0] - b[0]
            })
            .each(function () {
              b.offsets.push(this[0]), b.targets.push(this[1])
            })
      }),
      (b.prototype.process = function () {
        var a,
          b = this.$scrollElement.scrollTop() + this.options.offset,
          c = this.getScrollHeight(),
          d = this.options.offset + c - this.$scrollElement.height(),
          e = this.offsets,
          f = this.targets,
          g = this.activeTarget
        if ((this.scrollHeight != c && this.refresh(), b >= d))
          return g != (a = f[f.length - 1]) && this.activate(a)
        if (g && b < e[0]) return (this.activeTarget = null), this.clear()
        for (a = e.length; a--; )
          g != f[a] &&
            b >= e[a] &&
            (void 0 === e[a + 1] || b < e[a + 1]) &&
            this.activate(f[a])
      }),
      (b.prototype.activate = function (b) {
        ;(this.activeTarget = b), this.clear()
        var c =
            this.selector +
            '[data-target="' +
            b +
            '"],' +
            this.selector +
            '[href="' +
            b +
            '"]',
          d = a(c).parents("li").addClass("active")
        d.parent(".dropdown-menu").length &&
          (d = d.closest("li.dropdown").addClass("active")),
          d.trigger("activate.bs.scrollspy")
      }),
      (b.prototype.clear = function () {
        a(this.selector)
          .parentsUntil(this.options.target, ".active")
          .removeClass("active")
      })
    var d = a.fn.scrollspy
    ;(a.fn.scrollspy = c),
      (a.fn.scrollspy.Constructor = b),
      (a.fn.scrollspy.noConflict = function () {
        return (a.fn.scrollspy = d), this
      }),
      a(window).on("load.bs.scrollspy.data-api", function () {
        a('[data-spy="scroll"]').each(function () {
          var b = a(this)
          c.call(b, b.data())
        })
      })
  })(jQuery),
  (function (a) {
    "use strict"
    function b(b) {
      return this.each(function () {
        var d = a(this),
          e = d.data("bs.tab")
        e || d.data("bs.tab", (e = new c(this))), "string" == typeof b && e[b]()
      })
    }
    var c = function (b) {
      this.element = a(b)
    }
    ;(c.VERSION = "3.3.7"),
      (c.TRANSITION_DURATION = 150),
      (c.prototype.show = function () {
        var b = this.element,
          c = b.closest("ul:not(.dropdown-menu)"),
          d = b.data("target")
        if (
          (d ||
            ((d = b.attr("href")), (d = d && d.replace(/.*(?=#[^\s]*$)/, ""))),
          !b.parent("li").hasClass("active"))
        ) {
          var e = c.find(".active:last a"),
            f = a.Event("hide.bs.tab", { relatedTarget: b[0] }),
            g = a.Event("show.bs.tab", { relatedTarget: e[0] })
          if (
            (e.trigger(f),
            b.trigger(g),
            !g.isDefaultPrevented() && !f.isDefaultPrevented())
          ) {
            var h = a(d)
            this.activate(b.closest("li"), c),
              this.activate(h, h.parent(), function () {
                e.trigger({ type: "hidden.bs.tab", relatedTarget: b[0] }),
                  b.trigger({ type: "shown.bs.tab", relatedTarget: e[0] })
              })
          }
        }
      }),
      (c.prototype.activate = function (b, d, e) {
        function f() {
          g
            .removeClass("active")
            .find("> .dropdown-menu > .active")
            .removeClass("active")
            .end()
            .find('[data-toggle="tab"]')
            .attr("aria-expanded", !1),
            b
              .addClass("active")
              .find('[data-toggle="tab"]')
              .attr("aria-expanded", !0),
            h ? (b[0].offsetWidth, b.addClass("in")) : b.removeClass("fade"),
            b.parent(".dropdown-menu").length &&
              b
                .closest("li.dropdown")
                .addClass("active")
                .end()
                .find('[data-toggle="tab"]')
                .attr("aria-expanded", !0),
            e && e()
        }
        var g = d.find("> .active"),
          h =
            e &&
            a.support.transition &&
            ((g.length && g.hasClass("fade")) || !!d.find("> .fade").length)
        g.length && h
          ? g
              .one("bsTransitionEnd", f)
              .emulateTransitionEnd(c.TRANSITION_DURATION)
          : f(),
          g.removeClass("in")
      })
    var d = a.fn.tab
    ;(a.fn.tab = b),
      (a.fn.tab.Constructor = c),
      (a.fn.tab.noConflict = function () {
        return (a.fn.tab = d), this
      })
    var e = function (c) {
      c.preventDefault(), b.call(a(this), "show")
    }
    a(document)
      .on("click.bs.tab.data-api", '[data-toggle="tab"]', e)
      .on("click.bs.tab.data-api", '[data-toggle="pill"]', e)
  })(jQuery),
  (function (a) {
    "use strict"
    function b(b) {
      return this.each(function () {
        var d = a(this),
          e = d.data("bs.affix"),
          f = "object" == typeof b && b
        e || d.data("bs.affix", (e = new c(this, f))),
          "string" == typeof b && e[b]()
      })
    }
    var c = function (b, d) {
      ;(this.options = a.extend({}, c.DEFAULTS, d)),
        (this.$target = a(this.options.target)
          .on("scroll.bs.affix.data-api", a.proxy(this.checkPosition, this))
          .on(
            "click.bs.affix.data-api",
            a.proxy(this.checkPositionWithEventLoop, this)
          )),
        (this.$element = a(b)),
        (this.affixed = null),
        (this.unpin = null),
        (this.pinnedOffset = null),
        this.checkPosition()
    }
    ;(c.VERSION = "3.3.7"),
      (c.RESET = "affix affix-top affix-bottom"),
      (c.DEFAULTS = { offset: 0, target: window }),
      (c.prototype.getState = function (a, b, c, d) {
        var e = this.$target.scrollTop(),
          f = this.$element.offset(),
          g = this.$target.height()
        if (null != c && "top" == this.affixed) return e < c && "top"
        if ("bottom" == this.affixed)
          return null != c
            ? !(e + this.unpin <= f.top) && "bottom"
            : !(e + g <= a - d) && "bottom"
        var h = null == this.affixed,
          i = h ? e : f.top,
          j = h ? g : b
        return null != c && e <= c
          ? "top"
          : null != d && i + j >= a - d && "bottom"
      }),
      (c.prototype.getPinnedOffset = function () {
        if (this.pinnedOffset) return this.pinnedOffset
        this.$element.removeClass(c.RESET).addClass("affix")
        var a = this.$target.scrollTop(),
          b = this.$element.offset()
        return (this.pinnedOffset = b.top - a)
      }),
      (c.prototype.checkPositionWithEventLoop = function () {
        setTimeout(a.proxy(this.checkPosition, this), 1)
      }),
      (c.prototype.checkPosition = function () {
        if (this.$element.is(":visible")) {
          var b = this.$element.height(),
            d = this.options.offset,
            e = d.top,
            f = d.bottom,
            g = Math.max(a(document).height(), a(document.body).height())
          "object" != typeof d && (f = e = d),
            "function" == typeof e && (e = d.top(this.$element)),
            "function" == typeof f && (f = d.bottom(this.$element))
          var h = this.getState(g, b, e, f)
          if (this.affixed != h) {
            null != this.unpin && this.$element.css("top", "")
            var i = "affix" + (h ? "-" + h : ""),
              j = a.Event(i + ".bs.affix")
            if ((this.$element.trigger(j), j.isDefaultPrevented())) return
            ;(this.affixed = h),
              (this.unpin = "bottom" == h ? this.getPinnedOffset() : null),
              this.$element
                .removeClass(c.RESET)
                .addClass(i)
                .trigger(i.replace("affix", "affixed") + ".bs.affix")
          }
          "bottom" == h && this.$element.offset({ top: g - b - f })
        }
      })
    var d = a.fn.affix
    ;(a.fn.affix = b),
      (a.fn.affix.Constructor = c),
      (a.fn.affix.noConflict = function () {
        return (a.fn.affix = d), this
      }),
      a(window).on("load", function () {
        a('[data-spy="affix"]').each(function () {
          var c = a(this),
            d = c.data()
          ;(d.offset = d.offset || {}),
            null != d.offsetBottom && (d.offset.bottom = d.offsetBottom),
            null != d.offsetTop && (d.offset.top = d.offsetTop),
            b.call(c, d)
        })
      })
  })(jQuery),
  $(document).ready(function () {
    "use strict"
    function a() {
      n || window.requestAnimationFrame(a)
      var b = $(".blog-figc").outerHeight()
      $(".blog-containers").css("height", b)
      var c = $(".blgpg .blog-figc").outerHeight()
      $(".blgpg .blog-containers").css("height", c)
    }
    function b() {
      k >= 768
        ? $(".nav-menu").removeClass("nav-menu-open")
        : $(".nav-menu").css("right", "-110%"),
        $(".nav .submenu").removeClass(".addSubMenu"),
        $("body").css("overflow", "visible")
    }
    function c() {
      $(".nav-menu").removeClass("open-mobile-menu"),
        $(".overlay").removeClass("overlay-open"),
        $("body").css("overflow", "visible"),
        $(".wrapper-body, .nav-menu").css("max-height", "auto"),
        $(".wrapper-body").css("overflow", "visible")
    }
    function d() {
      ;(w = v.length), $(".cartitems").html(w)
    }
    function e() {
      d(),
        sessionStorage.setItem("cartQuantity", w),
        sessionStorage.setItem("cartItems", JSON.stringify(v))
    }
    function f() {
      if ($("#carttotal").length) {
        x = 0
        var a
        for (a = 0; a < w; a++) x += v[a].price * v[a].quantity
        $("#carttotal").html("$ " + x)
      }
    }
    function g(a, b, c, d, e, f) {
      var g,
        h = ""
      for (g = 1; g < 5; g++)
        h +=
          '<option value="' +
          g +
          '"' +
          (d === g ? "selected" : "") +
          ">" +
          g +
          " product</option>"
      return (
        '<li class="clearfix"><div class="item-content"><div class="item-image"><img src="' +
        a +
        '" alt="image"></div><div class="item-details"><h6>' +
        b +
        '</h6><div><i class="fa fa-heart"></i><span>1263</span></div></div></div><div class="item-price"><span>$ ' +
        c +
        '</span></div><a href="#" class="removeProduct" data-id="' +
        e +
        '"><i class="fa fa-times"></i></a></li>'
      )
    }
    function h() {
      if ($("#cartItemsType2").length) {
        var a,
          b = ""
        for (a = 0; a < w; a++)
          b += g(v[a].image, v[a].name, v[a].price, v[a].quantity, v[a].id)
        "" === b &&
          (b =
            '<div class="clearfix"><div class="big-content"><div class="product-cart-wrap"><h5>Sorry, you do not have any product in cart.</h5></div></div></div>'),
          $("#cartItemsType2").html(b)
      }
    }
    function i(a) {
      if (a) {
        var b,
          c = !0
        for (b = 0; b < w; b++)
          if (a.id === v[b].id) {
            ;(c = !1), (v[b].quantity = v[b].quantity + 1)
            break
          }
        c && (v.push(a), d(), $(".cartitems").html(w)), e()
      }
    }
    function j(a, b) {
      var c
      for (c = 0; c < w; c++)
        if (a === v[c].id) {
          v.splice(c, 1)
          break
        }
      b.parents("li").slideToggle().remove(), d(), f(), e(), 0 === w && h()
    }
    var k = $(window).width(),
      l = navigator.userAgent.indexOf("Chrome") > -1,
      m = navigator.userAgent.indexOf("Safari") > -1,
      n = navigator.userAgent.indexOf("MSIE") > -1
    if (
      (l && m && (m = !1),
      $(".gallery-slider-three").slick({
        infinite: !0,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: !1,
      }),
      a(),
      $(".button-nav").on("click", function (a) {
        k >= 768
          ? $(".nav-menu").addClass("nav-menu-open")
          : $(".nav-menu").css("right", "0%"),
          $.fn.fullpage.setMouseWheelScrolling(!1),
          $("body").css("overflow-y", "hidden"),
          a.stopPropagation()
      }),
      $("body .homep").on("click", function () {
        b(), $.fn.fullpage.setMouseWheelScrolling(!0)
      }),
      $(".nav li .has-subMenu, .navbar-wrapper li .has-subMenu").on(
        "click",
        function () {
          $(this).siblings(".submenu").toggleClass("addSubMenu")
        }
      ),
      $(".header").on("click", ".nav-menu.nav-menu-open", function () {
        event.preventDefault(), event.stopPropagation()
      }),
      $(".homep .close-btn, .homep .navbar-wrapper a:not(.has-subMenu)").on(
        "click",
        function () {
          b(), $.fn.fullpage.setMouseWheelScrolling(!0)
        }
      ),
      $("body .navbar-wrapper li a:not(.has-subMenu), .close-btn").on(
        "click",
        function () {
          b()
        }
      ),
      $(".navbar-header").on("click", function () {
        var a = $(window).height()
        $(".wrapper-body, .nav-menu").css("max-height", a),
          $(".wrapper-body").css("overflow", "hidden"),
          $(".nav-menu").addClass("open-mobile-menu"),
          $(".overlay").addClass("overlay-open"),
          $("body").css("overflow", "hidden")
      }),
      $(".close-menu").on("click", function () {
        c()
      }),
      $(".servicepage .nav li a:not(.has-subMenu)").on("click", function () {
        c()
      }),
      $(".homep.close-menu").on("click", function () {
        c(), $.fn.fullpage.setMouseWheelScrolling(!0)
      }),
      $(".homep .servicepage .nav li a:not(.has-subMenu)").on(
        "click",
        function () {
          c(), $.fn.fullpage.setMouseWheelScrolling(!0)
        }
      ),
      $(".one-home-page").length &&
        ($("#home-menu").fullpage({
          responsiveWidth: 1200,
          anchors: [
            "mainPage",
            "servicepage",
            "teampage",
            "productonepage",
            "contactpage",
          ],
          recordHistory: !0,
          menu: "#menu",
          touchstart: !1,
          fitToSection: !0,
          scrollbar: !0,
          resize: !0,
          offset: 500,
          easing: "easeInOutCubic",
          css3: !0,
          fixedElements: ".header, .footer",
          normalScrollElements:
            "#work-menu, #team-menu, #blog-menu, #service-menu",
          normalScrollElementTouchThreshold: 0,
          touchSensitivity: 100,
          afterLoad: function (a) {
            $(window).width() >= 992 &&
              "servicepage" === a &&
              ($(".service-inner.fig1").css({ left: "0px", top: "-69px" }),
              $(".service-inner.fig2").css("left", "10px"),
              $(".service-inner.fig3").css({ left: "50px", bottom: "-115px" }),
              $(".service-inner.fig4").css("bottom", "-115px"),
              $(".service-inner.fig5").css("right", "48px"))
          },
        }),
        $.fn.fullpage.reBuild(),
        $("#go").on("click", function () {
          $.fn.fullpage.moveSectionDown()
        }),
        $(window).on("resize", function () {
          a()
        })),
      $("#workimg").addClass("scaleImg"),
      $(window).on("click", function () {
        $(".work-fig .grid").isotope({
          itemSelector: ".grid-item",
          masonry: { columnWidth: 0, gutter: 15 },
        })
      }),
      !m && k >= 1200)
    ) {
      var o = $("#about-mouse"),
        p = o.find(".parallax"),
        q = 8e-4
      $("#about_page").on("mousemove", function (a) {
        var b = a.pageX - 0.9 * o.width(),
          c = a.pageY - 0.9 * o.height()
        p.each(function () {
          function a() {
            TweenMax.set($(".main-img"), {
              webkitFilter: "blur(" + f.a + "px)",
            })
          }
          var d = $(this),
            e = d.data("speed")
          TweenLite.to(d, 0.5, {
            x: (d.position().left + b * e) * q,
            y: (d.position().top + c * e) * q,
          })
          var f = { a: 0 }
          TweenMax.to(f, 2, { a: 10, onUpdate: a })
        })
      })
      var r = $("#home-mouse"),
        s = r.find(".parallaxHome")
      $("#sectionHome").on("mousemove", function (a) {
        var b = a.pageX - 0.9 * r.width(),
          c = a.pageY - 0.9 * r.height()
        s.each(function () {
          var a = $(this),
            d = a.data("speed")
          TweenLite.to(a, 0.5, {
            x: (a.position().left + b * d) * q,
            y: (a.position().top + c * d) * q,
          })
        })
      })
    }
    var t = $("header").outerHeight(!0),
      u = $("footer").outerHeight(!0)
    $(".compare-basket").affix({ offset: { top: t } }),
      $(".cartBarAffix").affix({ offset: { bottom: u } })
    var v = JSON.parse(sessionStorage.getItem("cartItems")) || [],
      w = v.length,
      x = 0
    d(),
      h(),
      f(),
      $(".addToCart, .action--buy").on("click", function (a) {
        a.preventDefault()
        var b = $(this),
          c = {
            id: b.data("productid"),
            name: b.data("productname"),
            price: b.data("productprice"),
            image: b.data("productimage"),
            quantity: 1,
          }
        void 0 !== c.id &&
          void 0 !== c.name &&
          void 0 !== c.price &&
          void 0 !== c.image &&
          i(c)
      }),
      $(".productQuantity select").on("change", function () {
        for (var a = $(this).val(), b = $(this).data("id"), c = 0; c < w; c++)
          if (b === v[c].id) {
            v[c].quantity = a
            break
          }
        e(), f()
      }),
      $(".removeProduct").on("click", function (a) {
        a.preventDefault(), j($(this).data("id"), $(this))
      })
  }),
  $(".productmainpage").length &&
    ((function (a) {
      function b(a, b) {
        var c = !0
        return function (d) {
          c &&
            ((c = !1),
            setTimeout(function () {
              c = !0
            }, b),
            a(d))
        }
      }
      function c() {
        m.forEach(function (a) {
          var b = new Flickity(a, {
            prevNextButtons: !1,
            wrapAround: !0,
            cellAlign: "left",
            contain: !0,
            resize: !1,
          })
          n.push(b)
        })
      }
      function d() {
        h = new Isotope(o, {
          isResizeBound: !1,
          itemSelector: ".grid__item",
          percentPosition: !0,
          masonry: { columnWidth: ".grid__sizer" },
          transitionDuration: "0.6s",
        })
      }
      function e() {
        p.forEach(function (a) {
          a.addEventListener("click", function (b) {
            b.preventDefault(),
              classie.remove(
                a.parentNode.querySelector(".filter__item--selected"),
                "filter__item--selected"
              ),
              classie.add(a, "filter__item--selected"),
              h.arrange({ filter: a.getAttribute("data-filter") }),
              g(),
              h.layout()
          })
        }),
          a.addEventListener(
            "resize",
            b(function () {
              g(), h.layout()
            }, 50)
          ),
          [].slice
            .call(o.querySelectorAll(".grid__item"))
            .forEach(function (a) {
              a.querySelector(".action--buy").addEventListener("click", f)
            })
      }
      function f() {
        classie.add(q, "cart--animate"),
          l(r, function () {
            classie.remove(q, "cart--animate")
          })
      }
      function g() {
        for (var a = 0, b = n.length; a < b; ++a) n[a].resize()
      }
      var h,
        i = { animations: Modernizr.cssanimations },
        j = {
          WebkitAnimation: "webkitAnimationEnd",
          OAnimation: "oAnimationEnd",
          msAnimation: "MSAnimationEnd",
          animation: "animationend",
        },
        k = j[Modernizr.prefixed("animation")],
        l = function (a, b) {
          var c = function (a) {
            if (i.animations) {
              if (a.target !== this) return
              this.removeEventListener(k, c)
            }
            b && "function" == typeof b && b.call()
          }
          i.animations ? a.addEventListener(k, c) : c()
        },
        m = [].slice.call(document.querySelectorAll(".slider")),
        n = [],
        o = document.querySelector(".grid"),
        p = [].slice.call(document.querySelectorAll(".filter > button")),
        q = document.querySelector(".cart"),
        r = q.querySelector(".cart__count")
      !(function () {
        imagesLoaded(o, function () {
          c(), d(), e(), classie.remove(o, "grid--loading")
        })
      })()
    })(window),
    (function () {
      function a() {
        ;(this.el = document.querySelector(".compare-basket")),
          (this.compareCtrl = this.el.querySelector(".action--compare")),
          (this.compareWrapper = document.querySelector(".compare")),
          (this.closeCompareCtrl = this.compareWrapper.querySelector(
            ".action--close"
          )),
          (this.itemsAllowed = 3),
          (this.totalItems = 0),
          (this.items = []),
          this.compareCtrl.addEventListener(
            "click",
            this._compareItems.bind(this)
          )
        var a = this
        this.closeCompareCtrl.addEventListener("click", function () {
          classie.add(a.el, "compare-basket--active"),
            classie.remove(d, "view--compare")
        })
      }
      function b() {
        f.forEach(function (a) {
          var b = a.querySelector(
            '.action--compare-add > input[type = "checkbox"]'
          )
          ;(b.checked = !1),
            b.addEventListener("click", function (b) {
              if (b.target.checked) {
                if (c.isFull()) return b.preventDefault(), !1
                c.add(a)
              } else c.remove(a)
            })
        })
      }
      var c,
        d = document.querySelector(".view"),
        e = d.querySelector(".grid"),
        f = [].slice.call(e.querySelectorAll(".product"))
      ;(a.prototype.add = function (a) {
        if (this.isFull()) return !1
        classie.add(a, "product--selected")
        var b = this._createItemPreview(a)
        this.el.insertBefore(b, this.el.childNodes[0]),
          this.items.push(b),
          this.totalItems++,
          this.isFull() && classie.add(this.el, "compare-basket--full"),
          classie.add(this.el, "compare-basket--active")
      }),
        (a.prototype._createItemPreview = function (a) {
          var b = this,
            c = document.createElement("div")
          ;(c.className = "product-icon"),
            c.setAttribute("data-idx", f.indexOf(a))
          var d = document.createElement("button")
          ;(d.className = "action action--remove"),
            (d.innerHTML =
              '<i class="fa fa-remove"></i><span class="action__text action__text--invisible">Remove product</span>'),
            d.addEventListener("click", function () {
              b.remove(a)
            })
          var e = a.querySelector("img.product__image").cloneNode(!1)
          c.appendChild(e), c.appendChild(d)
          var g = a.querySelector(".product__info").innerHTML
          return c.setAttribute("data-info", g), c
        }),
        (a.prototype.remove = function (a) {
          classie.remove(this.el, "compare-basket--full"),
            classie.remove(a, "product--selected")
          var b = this.el.querySelector('[data-idx = "' + f.indexOf(a) + '"]')
          this.el.removeChild(b), this.totalItems--
          var c = this.items.indexOf(b)
          this.items.splice(c, 1),
            0 === this.totalItems &&
              classie.remove(this.el, "compare-basket--active")
          var d = a.querySelector(
            '.action--compare-add > input[type = "checkbox"]'
          )
          d.checked && (d.checked = !1)
        }),
        (a.prototype._compareItems = function () {
          var a = this
          ;[].slice
            .call(this.compareWrapper.querySelectorAll("div.compare__item"))
            .forEach(function (b) {
              a.compareWrapper.removeChild(b)
            })
          for (var b = 0; b < this.totalItems; ++b) {
            var c = document.createElement("div")
            c.className = "compare__item"
            var e = document.createElement("div")
            ;(e.className = "compare__effect"),
              (e.innerHTML = this.items[b].getAttribute("data-info")),
              c.appendChild(e),
              this.compareWrapper.insertBefore(
                c,
                this.compareWrapper.childNodes[0]
              )
          }
          setTimeout(function () {
            classie.remove(a.el, "compare-basket--active"),
              classie.add(d, "view--compare")
          }, 25)
        }),
        (a.prototype.isFull = function () {
          return this.totalItems === this.itemsAllowed
        }),
        (function () {
          ;(c = new a()), b()
        })()
    })()),
  (function (a, b, c) {
    ;($.SplashScreen = function (c) {
      function d(a) {
        return b.getElementById(a)
      }
      function e(a) {
        for (
          var b, c = [], d = a.slice(a.indexOf("?") + 1).split("&"), e = 0;
          e < d.length;
          e++
        )
          (b = d[e].split("=")), c.push(b[0]), (c[b[0]] = b[1])
        return c
      }
      function f(a, c) {
        var d = new Date().getTime(),
          e = d - a,
          g = b.getElementById(c)
        if (g.FadeTimeLeft <= e)
          return (
            (g.style.opacity = 1 == g.FadeState ? "1" : "0"),
            (g.style.filter =
              "alpha(opacity = " + (1 == g.FadeState ? "100" : "0") + ")"),
            void (g.FadeState = 1 == g.FadeState ? 2 : -2)
          )
        g.FadeTimeLeft -= e
        var i = g.FadeTimeLeft / h.timeToFade
        1 == g.FadeState && (i = 1 - i),
          (g.style.opacity = i),
          (g.style.filter = "alpha(opacity = " + 100 * i + ")"),
          setTimeout(function () {
            f(d, c)
          }, 33)
      }
      function g(a) {
        var c = b.getElementById(a)
        null == c.FadeState &&
          (null == c.style.opacity ||
          "" == c.style.opacity ||
          "1" == c.style.opacity
            ? (c.FadeState = 2)
            : (c.FadeState = -2)),
          1 == c.FadeState || -1 == c.FadeState
            ? ((c.FadeState = 1 == c.FadeState ? -1 : 1),
              (c.FadeTimeLeft = h.timeToFade - c.FadeTimeLeft))
            : ((c.FadeState = 2 == c.FadeState ? -1 : 1),
              (c.FadeTimeLeft = h.timeToFade),
              setTimeout(f(new Date().getTime(), a), 33))
      }
      var h = $.extend(
        {
          id: "splashscreen",
          desktop: !0,
          mobile: !0,
          forceLoader: !1,
          queryParameter: "loader",
          progressCount: !1,
          progressCountId: "status",
          progressBar: !1,
          progressBarId: "progress",
          fadeEffect: !0,
          timeToFade: 1e3,
          timeOut: 2e3,
        },
        c
      )
      try {
        b.addEventListener(
          "DOMContentLoaded",
          (function () {
            function c() {
              if (((n += 1), h.progressBar)) {
                var a = (((100 / totalImages) * n) << 0) + "%"
                m.style.width = a
              }
              if (
                (h.progressCount && (l.innerHTML = "Loading " + a),
                n === totalImages)
              ) {
                b.getElementById(h.id).IntervalPageCompleted = setTimeout(
                  function () {
                    return f()
                  },
                  h.timeOut
                )
              }
            }
            function f() {
              h.fadeEffect
                ? g(h.id)
                : ((j.style.opacity = 0), (j.style.display = "none"))
            }
            var i = e(a.location.href)
            if (
              (h.forceLoader &&
                (h.forceLoader =
                  null != i[h.queryParameter] &&
                  "" != i[h.queryParameter] &&
                  ("true" == i[h.queryParameter] ||
                    "t" == i[h.queryParameter] ||
                    "1" == i[h.queryParameter])),
              h.mobile &&
                (h.mobile = null != $.DetectMobile() && $.DetectMobile()),
              h.mobile || h.desktop || h.forceLoader)
            ) {
              var j = d(h.id),
                k = b.images,
                l = d(h.progressCountId),
                m = d(h.progressBarId),
                n = 0
              totalImages = k.length
              for (var o = 0; o < totalImages; o++) {
                var p = new Image()
                ;(p.onload = c), (p.onerror = c), (p.src = k[o].src)
              }
            } else d(h.id).style.display = "none"
          })(),
          !1
        )
      } catch (a) {
        console.log(a.message)
      }
    }),
      ($.DetectMobile = function () {
        var a = {
          Android: function () {
            return navigator.userAgent.match(/Android/i)
          },
          BlackBerry: function () {
            return navigator.userAgent.match(/BlackBerry/i)
          },
          iOS: function () {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i)
          },
          Opera: function () {
            return navigator.userAgent.match(/Opera Mini/i)
          },
          Windows: function () {
            return navigator.userAgent.match(/IEMobile/i)
          },
          any: function () {
            return (
              a.Android() ||
              a.BlackBerry() ||
              a.iOS() ||
              a.Opera() ||
              a.Windows()
            )
          },
        }
        return a.any()
      })
  })(window, document),
  (function (a) {
    "use strict"
    var b = function (b, c) {
      ;(this.el = a(b)),
        (this.options = a.extend({}, a.fn.typed.defaults, c)),
        (this.isInput = this.el.is("input")),
        (this.attr = this.options.attr),
        (this.showCursor = !this.isInput && this.options.showCursor),
        (this.elContent = this.attr ? this.el.attr(this.attr) : this.el.text()),
        (this.contentType = this.options.contentType),
        (this.typeSpeed = this.options.typeSpeed),
        (this.startDelay = this.options.startDelay),
        (this.backSpeed = this.options.backSpeed),
        (this.backDelay = this.options.backDelay),
        (this.stringsElement = this.options.stringsElement),
        (this.strings = this.options.strings),
        (this.strPos = 0),
        (this.arrayPos = 0),
        (this.stopNum = 0),
        (this.loop = this.options.loop),
        (this.loopCount = this.options.loopCount),
        (this.curLoop = 0),
        (this.stop = !1),
        (this.cursorChar = this.options.cursorChar),
        (this.shuffle = this.options.shuffle),
        (this.sequence = []),
        this.build()
    }
    ;(b.prototype = {
      constructor: b,
      init: function () {
        var a = this
        a.timeout = setTimeout(function () {
          for (var b = 0; b < a.strings.length; ++b) a.sequence[b] = b
          a.shuffle && (a.sequence = a.shuffleArray(a.sequence)),
            a.typewrite(a.strings[a.sequence[a.arrayPos]], a.strPos)
        }, a.startDelay)
      },
      build: function () {
        var b = this
        if (
          (!0 === this.showCursor &&
            ((this.cursor = a(
              '<span class="typed-cursor">' + this.cursorChar + "</span>"
            )),
            this.el.after(this.cursor)),
          this.stringsElement)
        ) {
          ;(b.strings = []), this.stringsElement.hide()
          var c = this.stringsElement.find("p")
          a.each(c, function (c, d) {
            b.strings.push(a(d).html())
          })
        }
        this.init()
      },
      typewrite: function (a, b) {
        if (!0 !== this.stop) {
          var c = Math.round(70 * Math.random()) + this.typeSpeed,
            d = this
          d.timeout = setTimeout(function () {
            var c = 0,
              e = a.substr(b)
            if ("^" === e.charAt(0)) {
              var f = 1
              ;/^\^\d+/.test(e) &&
                ((e = /\d+/.exec(e)[0]), (f += e.length), (c = parseInt(e))),
                (a = a.substring(0, b) + a.substring(b + f))
            }
            if ("html" === d.contentType) {
              var g = a.substr(b).charAt(0)
              if ("<" === g || "&" === g) {
                var h = "",
                  i = ""
                for (i = "<" === g ? ">" : ";"; a.substr(b).charAt(0) !== i; )
                  (h += a.substr(b).charAt(0)), b++
                b++, (h += i)
              }
            }
            d.timeout = setTimeout(function () {
              if (b === a.length) {
                if (
                  (d.options.onStringTyped(d.arrayPos),
                  d.arrayPos === d.strings.length - 1 &&
                    (d.options.callback(),
                    d.curLoop++,
                    !1 === d.loop || d.curLoop === d.loopCount))
                )
                  return
                d.timeout = setTimeout(function () {
                  d.backspace(a, b)
                }, d.backDelay)
              } else {
                0 === b && d.options.preStringTyped(d.arrayPos)
                var c = a.substr(0, b + 1)
                d.attr
                  ? d.el.attr(d.attr, c)
                  : d.isInput
                  ? d.el.val(c)
                  : "html" === d.contentType
                  ? d.el.html(c)
                  : d.el.text(c),
                  b++,
                  d.typewrite(a, b)
              }
            }, c)
          }, c)
        }
      },
      backspace: function (a, b) {
        if (!0 !== this.stop) {
          var c = Math.round(70 * Math.random()) + this.backSpeed,
            d = this
          d.timeout = setTimeout(function () {
            if ("html" === d.contentType && ">" === a.substr(b).charAt(0)) {
              for (var c = ""; "<" !== a.substr(b).charAt(0); )
                (c -= a.substr(b).charAt(0)), b--
              b--, (c += "<")
            }
            var e = a.substr(0, b)
            d.attr
              ? d.el.attr(d.attr, e)
              : d.isInput
              ? d.el.val(e)
              : "html" === d.contentType
              ? d.el.html(e)
              : d.el.text(e),
              b > d.stopNum
                ? (b--, d.backspace(a, b))
                : b <= d.stopNum &&
                  (d.arrayPos++,
                  d.arrayPos === d.strings.length
                    ? ((d.arrayPos = 0),
                      d.shuffle && (d.sequence = d.shuffleArray(d.sequence)),
                      d.init())
                    : d.typewrite(d.strings[d.sequence[d.arrayPos]], b))
          }, c)
        }
      },
      shuffleArray: function (a) {
        var b,
          c,
          d = a.length
        if (d)
          for (; --d; )
            (c = Math.floor(Math.random() * (d + 1))),
              (b = a[c]),
              (a[c] = a[d]),
              (a[d] = b)
        return a
      },
      reset: function () {
        var a = this
        clearInterval(a.timeout)
        var b = this.el.attr("id")
        this.el.after('<span id="' + b + '"/>'),
          this.el.remove(),
          void 0 !== this.cursor && this.cursor.remove(),
          a.options.resetCallback()
      },
    }),
      (a.fn.typed = function (c) {
        return this.each(function () {
          var d = a(this),
            e = d.data("typed"),
            f = "object" == typeof c && c
          e || d.data("typed", (e = new b(this, f))),
            "string" == typeof c && e[c]()
        })
      }),
      (a.fn.typed.defaults = {
        strings: [
          "These are the default values...",
          "You know what you should do?",
          "Use your own!",
          "Have a great day!",
        ],
        stringsElement: null,
        typeSpeed: 0,
        startDelay: 1e3,
        backSpeed: 0,
        shuffle: !1,
        backDelay: 500,
        loop: !1,
        loopCount: !1,
        showCursor: !0,
        cursorChar: "|",
        attr: null,
        contentType: "html",
        callback: function () {},
        preStringTyped: function () {},
        onStringTyped: function () {},
        resetCallback: function () {},
      })
  })(window.jQuery),
  (function (a, b) {
    function c(c) {
      if (void 0 === c)
        throw new Error(
          'Pathformer [constructor]: "element" parameter is required'
        )
      if (c.constructor === String && !(c = b.getElementById(c)))
        throw new Error(
          'Pathformer [constructor]: "element" parameter is not related to an existing ID'
        )
      if (!(c.constructor instanceof a.SVGElement || /^svg$/i.test(c.nodeName)))
        throw new Error(
          'Pathformer [constructor]: "element" parameter must be a string or a SVGelement'
        )
      ;(this.el = c), this.scan(c)
    }
    function d(a, b, c) {
      ;(this.isReady = !1),
        this.setElement(a, b),
        this.setOptions(b),
        this.setCallback(c),
        this.isReady && this.init()
    }
    ;(c.prototype.TYPES = [
      "line",
      "ellipse",
      "circle",
      "polygon",
      "polyline",
      "rect",
    ]),
      (c.prototype.ATTR_WATCH = [
        "cx",
        "cy",
        "points",
        "r",
        "rx",
        "ry",
        "x",
        "x1",
        "x2",
        "y",
        "y1",
        "y2",
      ]),
      (c.prototype.scan = function (a) {
        for (
          var b, c, d, e, f = a.querySelectorAll(this.TYPES.join(",")), g = 0;
          g < f.length;
          g++
        )
          (c = f[g]),
            (b = this[c.tagName.toLowerCase() + "ToPath"]),
            (d = b(this.parseAttr(c.attributes))),
            (e = this.pathMaker(c, d)),
            c.parentNode.replaceChild(e, c)
      }),
      (c.prototype.lineToPath = function (a) {
        var b = {},
          c = a.x1 || 0,
          d = a.y1 || 0,
          e = a.x2 || 0,
          f = a.y2 || 0
        return (b.d = "M" + c + "," + d + "L" + e + "," + f), b
      }),
      (c.prototype.rectToPath = function (a) {
        var b = {},
          c = parseFloat(a.x) || 0,
          d = parseFloat(a.y) || 0,
          e = parseFloat(a.width) || 0,
          f = parseFloat(a.height) || 0
        return (
          (b.d = "M" + c + " " + d + " "),
          (b.d += "L" + (c + e) + " " + d + " "),
          (b.d += "L" + (c + e) + " " + (d + f) + " "),
          (b.d += "L" + c + " " + (d + f) + " Z"),
          b
        )
      }),
      (c.prototype.polylineToPath = function (a) {
        var b,
          c,
          d = {},
          e = a.points.trim().split(" ")
        if (-1 === a.points.indexOf(",")) {
          var f = []
          for (b = 0; b < e.length; b += 2) f.push(e[b] + "," + e[b + 1])
          e = f
        }
        for (c = "M" + e[0], b = 1; b < e.length; b++)
          -1 !== e[b].indexOf(",") && (c += "L" + e[b])
        return (d.d = c), d
      }),
      (c.prototype.polygonToPath = function (a) {
        var b = c.prototype.polylineToPath(a)
        return (b.d += "Z"), b
      }),
      (c.prototype.ellipseToPath = function (a) {
        var b = {},
          c = parseFloat(a.rx) || 0,
          d = parseFloat(a.ry) || 0,
          e = parseFloat(a.cx) || 0,
          f = parseFloat(a.cy) || 0,
          g = e - c,
          h = f,
          i = parseFloat(e) + parseFloat(c),
          j = f
        return (
          (b.d =
            "M" +
            g +
            "," +
            h +
            "A" +
            c +
            "," +
            d +
            " 0,1,1 " +
            i +
            "," +
            j +
            "A" +
            c +
            "," +
            d +
            " 0,1,1 " +
            g +
            "," +
            j),
          b
        )
      }),
      (c.prototype.circleToPath = function (a) {
        var b = {},
          c = parseFloat(a.r) || 0,
          d = parseFloat(a.cx) || 0,
          e = parseFloat(a.cy) || 0,
          f = d - c,
          g = e,
          h = parseFloat(d) + parseFloat(c),
          i = e
        return (
          (b.d =
            "M" +
            f +
            "," +
            g +
            "A" +
            c +
            "," +
            c +
            " 0,1,1 " +
            h +
            "," +
            i +
            "A" +
            c +
            "," +
            c +
            " 0,1,1 " +
            f +
            "," +
            i),
          b
        )
      }),
      (c.prototype.pathMaker = function (a, c) {
        var d,
          e,
          f = b.createElementNS("http://www.w3.org/2000/svg", "path")
        for (d = 0; d < a.attributes.length; d++)
          (e = a.attributes[d]),
            -1 === this.ATTR_WATCH.indexOf(e.name) &&
              f.setAttribute(e.name, e.value)
        for (d in c) f.setAttribute(d, c[d])
        return f
      }),
      (c.prototype.parseAttr = function (a) {
        for (var b, c = {}, d = 0; d < a.length; d++) {
          if (
            ((b = a[d]),
            -1 !== this.ATTR_WATCH.indexOf(b.name) &&
              -1 !== b.value.indexOf("%"))
          )
            throw new Error(
              "Pathformer [parseAttr]: a SVG shape got values in percentage. This cannot be transformed into 'path' tags. Please use 'viewBox'."
            )
          c[b.name] = b.value
        }
        return c
      })
    var e, f, g
    ;(d.LINEAR = function (a) {
      return a
    }),
      (d.EASE = function (a) {
        return -Math.cos(a * Math.PI) / 2 + 0.5
      }),
      (d.EASE_OUT = function (a) {
        return 1 - Math.pow(1 - a, 3)
      }),
      (d.EASE_IN = function (a) {
        return Math.pow(a, 3)
      }),
      (d.EASE_OUT_BOUNCE = function (a) {
        var b = 1 - Math.cos(0.5 * a * Math.PI),
          c = Math.pow(b, 1.5),
          d = Math.pow(1 - a, 2)
        return 1 - d + (1 - Math.abs(Math.cos(2.5 * c * Math.PI))) * d
      }),
      (d.prototype.setElement = function (c, d) {
        if (void 0 === c)
          throw new Error(
            'Vivus [constructor]: "element" parameter is required'
          )
        if (c.constructor === String && !(c = b.getElementById(c)))
          throw new Error(
            'Vivus [constructor]: "element" parameter is not related to an existing ID'
          )
        if (((this.parentEl = c), d && d.file)) {
          var e = b.createElement("object")
          e.setAttribute("type", "image/svg+xml"),
            e.setAttribute("data", d.file),
            e.setAttribute("built-by-vivus", "true"),
            c.appendChild(e),
            (c = e)
        }
        switch (c.constructor) {
          case a.SVGSVGElement:
          case a.SVGElement:
            ;(this.el = c), (this.isReady = !0)
            break
          case a.HTMLObjectElement:
            var f, g
            ;(g = this),
              (f = function (a) {
                if (!g.isReady) {
                  if (
                    ((g.el =
                      c.contentDocument &&
                      c.contentDocument.querySelector("svg")),
                    !g.el && a)
                  )
                    throw new Error(
                      "Vivus [constructor]: object loaded does not contain any SVG"
                    )
                  return g.el
                    ? (c.getAttribute("built-by-vivus") &&
                        (g.parentEl.insertBefore(g.el, c),
                        g.parentEl.removeChild(c),
                        g.el.setAttribute("width", "100%"),
                        g.el.setAttribute("height", "100%")),
                      (g.isReady = !0),
                      g.init(),
                      !0)
                    : void 0
                }
              })() || c.addEventListener("load", f)
            break
          default:
            throw new Error(
              'Vivus [constructor]: "element" parameter is not valid (or miss the "file" attribute)'
            )
        }
      }),
      (d.prototype.setOptions = function (b) {
        var c = [
            "delayed",
            "sync",
            "async",
            "nsync",
            "oneByOne",
            "scenario",
            "scenario-sync",
          ],
          e = ["inViewport", "manual", "autostart"]
        if (void 0 !== b && b.constructor !== Object)
          throw new Error(
            'Vivus [constructor]: "options" parameter must be an object'
          )
        if (((b = b || {}), b.type && -1 === c.indexOf(b.type)))
          throw new Error(
            "Vivus [constructor]: " +
              b.type +
              " is not an existing animation `type`"
          )
        if (
          ((this.type = b.type || c[0]), b.start && -1 === e.indexOf(b.start))
        )
          throw new Error(
            "Vivus [constructor]: " +
              b.start +
              " is not an existing `start` option"
          )
        if (
          ((this.start = b.start || e[0]),
          (this.isIE =
            -1 !== a.navigator.userAgent.indexOf("MSIE") ||
            -1 !== a.navigator.userAgent.indexOf("Trident/") ||
            -1 !== a.navigator.userAgent.indexOf("Edge/")),
          (this.duration = g(b.duration, 120)),
          (this.delay = g(b.delay, null)),
          (this.dashGap = g(b.dashGap, 1)),
          (this.forceRender = b.hasOwnProperty("forceRender")
            ? !!b.forceRender
            : this.isIE),
          (this.reverseStack = !!b.reverseStack),
          (this.selfDestroy = !!b.selfDestroy),
          (this.onReady = b.onReady),
          (this.map = []),
          (this.frameLength = this.currentFrame = this.delayUnit = this.speed = this.handle = null),
          (this.ignoreInvisible =
            !!b.hasOwnProperty("ignoreInvisible") && !!b.ignoreInvisible),
          (this.animTimingFunction = b.animTimingFunction || d.LINEAR),
          (this.pathTimingFunction = b.pathTimingFunction || d.LINEAR),
          this.delay >= this.duration)
        )
          throw new Error(
            "Vivus [constructor]: delay must be shorter than duration"
          )
      }),
      (d.prototype.setCallback = function (a) {
        if (a && a.constructor !== Function)
          throw new Error(
            'Vivus [constructor]: "callback" parameter must be a function'
          )
        this.callback = a || function () {}
      }),
      (d.prototype.mapping = function () {
        var b, c, d, e, f, h, i, j
        for (
          j = h = i = 0, c = this.el.querySelectorAll("path"), b = 0;
          b < c.length;
          b++
        )
          (d = c[b]),
            this.isInvisible(d) ||
              ((f = { el: d, length: Math.ceil(d.getTotalLength()) }),
              isNaN(f.length)
                ? a.console &&
                  console.warn &&
                  console.warn(
                    "Vivus [mapping]: cannot retrieve a path element length",
                    d
                  )
                : (this.map.push(f),
                  (d.style.strokeDasharray =
                    f.length + " " + (f.length + 2 * this.dashGap)),
                  (d.style.strokeDashoffset = f.length + this.dashGap),
                  (f.length += this.dashGap),
                  (h += f.length),
                  this.renderPath(b)))
        for (
          h = 0 === h ? 1 : h,
            this.delay = null === this.delay ? this.duration / 3 : this.delay,
            this.delayUnit = this.delay / (c.length > 1 ? c.length - 1 : 1),
            this.reverseStack && this.map.reverse(),
            b = 0;
          b < this.map.length;
          b++
        ) {
          switch (((f = this.map[b]), this.type)) {
            case "delayed":
              ;(f.startAt = this.delayUnit * b),
                (f.duration = this.duration - this.delay)
              break
            case "oneByOne":
              ;(f.startAt = (i / h) * this.duration),
                (f.duration = (f.length / h) * this.duration)
              break
            case "sync":
            case "async":
            case "nsync":
              ;(f.startAt = 0), (f.duration = this.duration)
              break
            case "scenario-sync":
              ;(d = f.el),
                (e = this.parseAttr(d)),
                (f.startAt = j + (g(e["data-delay"], this.delayUnit) || 0)),
                (f.duration = g(e["data-duration"], this.duration)),
                (j =
                  void 0 !== e["data-async"]
                    ? f.startAt
                    : f.startAt + f.duration),
                (this.frameLength = Math.max(
                  this.frameLength,
                  f.startAt + f.duration
                ))
              break
            case "scenario":
              ;(d = f.el),
                (e = this.parseAttr(d)),
                (f.startAt = g(e["data-start"], this.delayUnit) || 0),
                (f.duration = g(e["data-duration"], this.duration)),
                (this.frameLength = Math.max(
                  this.frameLength,
                  f.startAt + f.duration
                ))
          }
          ;(i += f.length),
            (this.frameLength = this.frameLength || this.duration)
        }
      }),
      (d.prototype.drawer = function () {
        var a = this
        if (((this.currentFrame += this.speed), this.currentFrame <= 0))
          this.stop(), this.reset()
        else {
          if (!(this.currentFrame >= this.frameLength))
            return (
              this.trace(),
              void (this.handle = e(function () {
                a.drawer()
              }))
            )
          this.stop(),
            (this.currentFrame = this.frameLength),
            this.trace(),
            this.selfDestroy && this.destroy()
        }
        this.callback(this),
          this.instanceCallback &&
            (this.instanceCallback(this), (this.instanceCallback = null))
      }),
      (d.prototype.trace = function () {
        var a, b, c, d
        for (
          d =
            this.animTimingFunction(this.currentFrame / this.frameLength) *
            this.frameLength,
            a = 0;
          a < this.map.length;
          a++
        )
          (c = this.map[a]),
            (b = (d - c.startAt) / c.duration),
            (b = this.pathTimingFunction(Math.max(0, Math.min(1, b)))),
            c.progress !== b &&
              ((c.progress = b),
              (c.el.style.strokeDashoffset = Math.floor(c.length * (1 - b))),
              this.renderPath(a))
      }),
      (d.prototype.renderPath = function (a) {
        if (this.forceRender && this.map && this.map[a]) {
          var b = this.map[a],
            c = b.el.cloneNode(!0)
          b.el.parentNode.replaceChild(c, b.el), (b.el = c)
        }
      }),
      (d.prototype.init = function () {
        ;(this.frameLength = 0),
          (this.currentFrame = 0),
          (this.map = []),
          new c(this.el),
          this.mapping(),
          this.starter(),
          this.onReady && this.onReady(this)
      }),
      (d.prototype.starter = function () {
        switch (this.start) {
          case "manual":
            return
          case "autostart":
            this.play()
            break
          case "inViewport":
            var b = this,
              c = function () {
                b.isInViewport(b.parentEl, 1) &&
                  (b.play(), a.removeEventListener("scroll", c))
              }
            a.addEventListener("scroll", c), c()
        }
      }),
      (d.prototype.getStatus = function () {
        return 0 === this.currentFrame
          ? "start"
          : this.currentFrame === this.frameLength
          ? "end"
          : "progress"
      }),
      (d.prototype.reset = function () {
        return this.setFrameProgress(0)
      }),
      (d.prototype.finish = function () {
        return this.setFrameProgress(1)
      }),
      (d.prototype.setFrameProgress = function (a) {
        return (
          (a = Math.min(1, Math.max(0, a))),
          (this.currentFrame = Math.round(this.frameLength * a)),
          this.trace(),
          this
        )
      }),
      (d.prototype.play = function (a, b) {
        if (((this.instanceCallback = null), a && "function" == typeof a))
          (this.instanceCallback = a), (a = null)
        else if (a && "number" != typeof a)
          throw new Error("Vivus [play]: invalid speed")
        return (
          b &&
            "function" == typeof b &&
            !this.instanceCallback &&
            (this.instanceCallback = b),
          (this.speed = a || 1),
          this.handle || this.drawer(),
          this
        )
      }),
      (d.prototype.stop = function () {
        return this.handle && (f(this.handle), (this.handle = null)), this
      }),
      (d.prototype.destroy = function () {
        this.stop()
        var a, b
        for (a = 0; a < this.map.length; a++)
          (b = this.map[a]),
            (b.el.style.strokeDashoffset = null),
            (b.el.style.strokeDasharray = null),
            this.renderPath(a)
      }),
      (d.prototype.isInvisible = function (a) {
        var b,
          c = a.getAttribute("data-ignore")
        return null !== c
          ? "false" !== c
          : !!this.ignoreInvisible &&
              ((b = a.getBoundingClientRect()), !b.width && !b.height)
      }),
      (d.prototype.parseAttr = function (a) {
        var b,
          c = {}
        if (a && a.attributes)
          for (var d = 0; d < a.attributes.length; d++)
            (b = a.attributes[d]), (c[b.name] = b.value)
        return c
      }),
      (d.prototype.isInViewport = function (a, b) {
        var c = this.scrollY(),
          d = c + this.getViewportH(),
          e = a.getBoundingClientRect(),
          f = e.height,
          g = c + e.top,
          h = g + f
        return (b = b || 0), d >= g + f * b && h >= c
      }),
      (d.prototype.docElem = a.document.documentElement),
      (d.prototype.getViewportH = function () {
        var b = this.docElem.clientHeight,
          c = a.innerHeight
        return c > b ? c : b
      }),
      (d.prototype.scrollY = function () {
        return a.pageYOffset || this.docElem.scrollTop
      }),
      (e = (function () {
        return (
          a.requestAnimationFrame ||
          a.webkitRequestAnimationFrame ||
          a.mozRequestAnimationFrame ||
          a.oRequestAnimationFrame ||
          a.msRequestAnimationFrame ||
          function (b) {
            return a.setTimeout(b, 1e3 / 60)
          }
        )
      })()),
      (f = (function () {
        return (
          a.cancelAnimationFrame ||
          a.webkitCancelAnimationFrame ||
          a.mozCancelAnimationFrame ||
          a.oCancelAnimationFrame ||
          a.msCancelAnimationFrame ||
          function (b) {
            return a.clearTimeout(b)
          }
        )
      })()),
      (g = function (a, b) {
        var c = parseInt(a, 10)
        return c >= 0 ? c : b
      }),
      "function" == typeof define && define.amd
        ? define([], function () {
            return d
          })
        : "object" == typeof exports
        ? (module.exports = d)
        : (a.Vivus = d)
  })(window, document),
  jQuery(document).ready(function (a) {
    a("#contact").validate({
      rules: {
        name: { required: !0 },
        eml: { required: !0, email: !0 },
        comment: { required: !0 },
      },
      submitHandler: function (b) {
        var c = a("#name").val(),
          d = a("#eml").val(),
          e = a("#comment").val()
        a("#contact .form-message").show()
        var f = { formid: "contact", cust_name: c, comments: e, cust_email: d }
        return (
          a.post("mail.php", f, function (b) {
            a(".contact-page-form").html(b),
              a(".contact-page-form").show(),
              a("#contact").each(function () {
                this.reset()
              })
          }),
          !1
        )
      },
    })
  })
var processed = !1
$("#name").on("blur", function (a) {
  var b = a.currentTarget.value
  b
    ? 0 != b.indexOf(" ") && ((b = b.split(" ")[0]), (b = "hey " + b))
    : (b = "hey there"),
    processed &&
      ($(".commenter-name").typed("reset"),
      $(".comment-greeting").append("<span class='commenter-name'></span>")),
    $(".commenter-name").typed({ strings: [b], typeSpeed: 80 }),
    (processed = !0)
})
const serviceMessage = {
  Payroll:
    "Union and Non-union Payroll Processing | Staff Payroll | Residual Payments | Workers’ Compensation | Unemployment Insurance Coverage | Record Keeping | Employer of Record (EOR)",
  Accounting:
    "Production Accounting services for small and large productions on an as-needed basis by trained and experienced industry accountants",
  Software:
    "releasing soon; our proprietary, web-based hours-to-gross and production accounting software for television, features, commercials and residuals.",
  Production:
    "Scheduling | Budgeting | Script Coverage | Crewing | Packaging | Gap Financing | Distribution | Event Planning",
  Tax:
    "Start-to-finish support with filing and obtaining your production tax incentives for all 50 states",
  Support:
    "Full service support including; Labor Compliance | The Affordable Care Act | Sick Leave Ordinance | Human Resources | Payroll",
  Default:
    'We are not just an entertainment payroll company. That wouldn’t be enough. At <b class="boldText">Revolution</b>, our entire business model is based on providing you an end-to-end solution for your productions.',
}
$(document).ready(function () {
  function a() {
    ;(f -= 60),
      e.css({
        "-webkit-transform": "rotateY(" + f + "deg)",
        "-moz-transform": "rotateY(" + f + "deg)",
        "-o-transform": "rotateY(" + f + "deg)",
        transform: "rotateY(" + f + "deg)",
      })
  }
  function b() {
    clearInterval(g)
  }
  function c() {
    g = setInterval(function () {
      a()
    }, 3e3)
  }
  var d = document.getElementById("bgvid")
  $("#aboutVid").click(function () {
    document.getElementById("aboutVid").play()
  }),
    $.SplashScreen({ timeToFade: 2500 }),
    setTimeout(function () {
      $("#splashscreen.start").removeClass("start").addClass("end")
    }, 2e3),
    setTimeout(function () {
      $("#splashscreen").remove()
    }, 6e3),
    setTimeout(function () {
      var a = $(window).height(),
        b = $(window).width(),
        c = $("#bgvid").height()
      a < c
        ? $("#bgvid").css("top", a - c + "px")
        : (console.log("::", a, c),
          $("#bgvid").css("width", (a / c) * b + "px")),
        $("body").attr("class").indexOf("fp-viewing-mainPage") > -1 && d.play()
    }, 5e3),
    serviceText("Default"),
    $("body").on("pageChanged", function () {
      $("body").attr("class").indexOf("fp-viewing-contactpage") > -1 &&
        setTimeout($("#name").trigger("blur"), 3e3),
        $("body").attr("class").indexOf("fp-viewing-mainPage") > -1
          ? d.play()
          : d.pause(),
        $("body").attr("class").indexOf("fp-viewing-productonepage") > -1 &&
          (g && clearInterval(g),
          (g = setInterval(function () {
            a()
          }, 3e3)))
    })
  var e = $(".carousel"),
    f = 0,
    g = setInterval(function () {
      a()
    }, 3e3)
  ;(window.onfocus = c), (window.onblur = b)
}),
  new Vivus(
    "mySVG",
    {
      type: "async",
      duration: 50,
      start: "autostart",
      animTimingFunction: Vivus.LINEAR,
    },
    function (a) {
      a.el.classList.add("finished")
    }
  ),
  (window.Modernizr = (function (a, b, c) {
    function d(a) {
      q.cssText = a
    }
    function e(a, b) {
      return d(u.join(a + ";") + (b || ""))
    }
    function f(a, b) {
      return typeof a === b
    }
    function g(a, b) {
      return !!~("" + a).indexOf(b)
    }
    function h(a, b) {
      for (var d in a) {
        var e = a[d]
        if (!g(e, "-") && q[e] !== c) return "pfx" != b || e
      }
      return !1
    }
    function i(a, b, d) {
      for (var e in a) {
        var g = b[a[e]]
        if (g !== c)
          return !1 === d ? a[e] : f(g, "function") ? g.bind(d || b) : g
      }
      return !1
    }
    function j(a, b, c) {
      var d = a.charAt(0).toUpperCase() + a.slice(1),
        e = (a + " " + w.join(d + " ") + d).split(" ")
      return f(b, "string") || f(b, "undefined")
        ? h(e, b)
        : ((e = (a + " " + x.join(d + " ") + d).split(" ")), i(e, b, c))
    }
    var k,
      l,
      m = {},
      n = b.documentElement,
      o = "modernizr",
      p = b.createElement(o),
      q = p.style,
      r = b.createElement("input"),
      s = ":)",
      t = {}.toString,
      u = " -webkit- -moz- -o- -ms- ".split(" "),
      v = "Webkit Moz O ms",
      w = v.split(" "),
      x = v.toLowerCase().split(" "),
      y = { svg: "http://www.w3.org/2000/svg" },
      z = {},
      A = {},
      B = {},
      C = [],
      D = C.slice,
      E = function (a, c, d, e) {
        var f,
          g,
          h,
          i,
          j = b.createElement("div"),
          k = b.body,
          l = k || b.createElement("body")
        if (parseInt(d, 10))
          for (; d--; )
            (h = b.createElement("div")),
              (h.id = e ? e[d] : o + (d + 1)),
              j.appendChild(h)
        return (
          (f = ["&#173;", '<style id="s', o, '">', a, "</style>"].join("")),
          (j.id = o),
          ((k ? j : l).innerHTML += f),
          l.appendChild(j),
          k ||
            ((l.style.background = ""),
            (l.style.overflow = "hidden"),
            (i = n.style.overflow),
            (n.style.overflow = "hidden"),
            n.appendChild(l)),
          (g = c(j, a)),
          k
            ? j.parentNode.removeChild(j)
            : (l.parentNode.removeChild(l), (n.style.overflow = i)),
          !!g
        )
      },
      F = function (b) {
        var c = a.matchMedia || a.msMatchMedia
        if (c) return (c(b) && c(b).matches) || !1
        var d
        return (
          E(
            "@media " + b + " { #" + o + " { position: absolute; } }",
            function (b) {
              d =
                "absolute" ==
                (a.getComputedStyle
                  ? getComputedStyle(b, null)
                  : b.currentStyle
                ).position
            }
          ),
          d
        )
      },
      G = (function () {
        function a(a, e) {
          ;(e = e || b.createElement(d[a] || "div")), (a = "on" + a)
          var g = a in e
          return (
            g ||
              (e.setAttribute || (e = b.createElement("div")),
              e.setAttribute &&
                e.removeAttribute &&
                (e.setAttribute(a, ""),
                (g = f(e[a], "function")),
                f(e[a], "undefined") || (e[a] = c),
                e.removeAttribute(a))),
            (e = null),
            g
          )
        }
        var d = {
          select: "input",
          change: "input",
          submit: "form",
          reset: "form",
          error: "img",
          load: "img",
          abort: "img",
        }
        return a
      })(),
      H = {}.hasOwnProperty
    ;(l =
      f(H, "undefined") || f(H.call, "undefined")
        ? function (a, b) {
            return b in a && f(a.constructor.prototype[b], "undefined")
          }
        : function (a, b) {
            return H.call(a, b)
          }),
      Function.prototype.bind ||
        (Function.prototype.bind = function (a) {
          var b = this
          if ("function" != typeof b) throw new TypeError()
          var c = D.call(arguments, 1),
            d = function () {
              if (this instanceof d) {
                var e = function () {}
                e.prototype = b.prototype
                var f = new e(),
                  g = b.apply(f, c.concat(D.call(arguments)))
                return Object(g) === g ? g : f
              }
              return b.apply(a, c.concat(D.call(arguments)))
            }
          return d
        }),
      (z.flexbox = function () {
        return j("flexWrap")
      }),
      (z.flexboxlegacy = function () {
        return j("boxDirection")
      }),
      (z.canvas = function () {
        var a = b.createElement("canvas")
        return !(!a.getContext || !a.getContext("2d"))
      }),
      (z.canvastext = function () {
        return !(
          !m.canvas ||
          !f(b.createElement("canvas").getContext("2d").fillText, "function")
        )
      }),
      (z.webgl = function () {
        return !!a.WebGLRenderingContext
      }),
      (z.touch = function () {
        var c
        return (
          "ontouchstart" in a || (a.DocumentTouch && b instanceof DocumentTouch)
            ? (c = !0)
            : E(
                [
                  "@media (",
                  u.join("touch-enabled),("),
                  o,
                  ")",
                  "{#modernizr{top:9px;position:absolute}}",
                ].join(""),
                function (a) {
                  c = 9 === a.offsetTop
                }
              ),
          c
        )
      }),
      (z.geolocation = function () {
        return "geolocation" in navigator
      }),
      (z.postmessage = function () {
        return !!a.postMessage
      }),
      (z.websqldatabase = function () {
        return !!a.openDatabase
      }),
      (z.indexedDB = function () {
        return !!j("indexedDB", a)
      }),
      (z.hashchange = function () {
        return (
          G("hashchange", a) && (b.documentMode === c || b.documentMode > 7)
        )
      }),
      (z.history = function () {
        return !(!a.history || !history.pushState)
      }),
      (z.draganddrop = function () {
        var a = b.createElement("div")
        return "draggable" in a || ("ondragstart" in a && "ondrop" in a)
      }),
      (z.websockets = function () {
        return "WebSocket" in a || "MozWebSocket" in a
      }),
      (z.rgba = function () {
        return (
          d("background-color:rgba(150,255,150,.5)"),
          g(q.backgroundColor, "rgba")
        )
      }),
      (z.hsla = function () {
        return (
          d("background-color:hsla(120,40%,100%,.5)"),
          g(q.backgroundColor, "rgba") || g(q.backgroundColor, "hsla")
        )
      }),
      (z.multiplebgs = function () {
        return (
          d("background:url(https://),url(https://),red url(https://)"),
          /(url\s*\(.*?){3}/.test(q.background)
        )
      }),
      (z.backgroundsize = function () {
        return j("backgroundSize")
      }),
      (z.borderimage = function () {
        return j("borderImage")
      }),
      (z.borderradius = function () {
        return j("borderRadius")
      }),
      (z.boxshadow = function () {
        return j("boxShadow")
      }),
      (z.textshadow = function () {
        return "" === b.createElement("div").style.textShadow
      }),
      (z.opacity = function () {
        return e("opacity:.55"), /^0.55$/.test(q.opacity)
      }),
      (z.cssanimations = function () {
        return j("animationName")
      }),
      (z.csscolumns = function () {
        return j("columnCount")
      }),
      (z.cssgradients = function () {
        var a = "background-image:"
        return (
          d(
            (
              a +
              "-webkit- "
                .split(" ")
                .join(
                  "gradient(linear,left top,right bottom,from(#9f9),to(white));" +
                    a
                ) +
              u.join("linear-gradient(left top,#9f9, white);" + a)
            ).slice(0, -a.length)
          ),
          g(q.backgroundImage, "gradient")
        )
      }),
      (z.cssreflections = function () {
        return j("boxReflect")
      }),
      (z.csstransforms = function () {
        return !!j("transform")
      }),
      (z.csstransforms3d = function () {
        var a = !!j("perspective")
        return (
          a &&
            "webkitPerspective" in n.style &&
            E(
              "@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",
              function (b, c) {
                a = 9 === b.offsetLeft && 3 === b.offsetHeight
              }
            ),
          a
        )
      }),
      (z.csstransitions = function () {
        return j("transition")
      }),
      (z.fontface = function () {
        var a
        return (
          E('@font-face {font-family:"font";src:url("https://")}', function (
            c,
            d
          ) {
            var e = b.getElementById("smodernizr"),
              f = e.sheet || e.styleSheet,
              g = f
                ? f.cssRules && f.cssRules[0]
                  ? f.cssRules[0].cssText
                  : f.cssText || ""
                : ""
            a = /src/i.test(g) && 0 === g.indexOf(d.split(" ")[0])
          }),
          a
        )
      }),
      (z.generatedcontent = function () {
        var a
        return (
          E(
            [
              "#",
              o,
              "{font:0/0 a}#",
              o,
              ':after{content:"',
              s,
              '";visibility:hidden;font:3px/1 a}',
            ].join(""),
            function (b) {
              a = b.offsetHeight >= 3
            }
          ),
          a
        )
      }),
      (z.video = function () {
        var a = b.createElement("video"),
          c = !1
        try {
          ;(c = !!a.canPlayType) &&
            ((c = new Boolean(c)),
            (c.ogg = a
              .canPlayType('video/ogg; codecs="theora"')
              .replace(/^no$/, "")),
            (c.h264 = a
              .canPlayType('video/mp4; codecs="avc1.42E01E"')
              .replace(/^no$/, "")),
            (c.webm = a
              .canPlayType('video/webm; codecs="vp8, vorbis"')
              .replace(/^no$/, "")))
        } catch (a) {}
        return c
      }),
      (z.audio = function () {
        var a = b.createElement("audio"),
          c = !1
        try {
          ;(c = !!a.canPlayType) &&
            ((c = new Boolean(c)),
            (c.ogg = a
              .canPlayType('audio/ogg; codecs="vorbis"')
              .replace(/^no$/, "")),
            (c.mp3 = a.canPlayType("audio/mpeg;").replace(/^no$/, "")),
            (c.wav = a
              .canPlayType('audio/wav; codecs="1"')
              .replace(/^no$/, "")),
            (c.m4a = (
              a.canPlayType("audio/x-m4a;") || a.canPlayType("audio/aac;")
            ).replace(/^no$/, "")))
        } catch (a) {}
        return c
      }),
      (z.localstorage = function () {
        try {
          return localStorage.setItem(o, o), localStorage.removeItem(o), !0
        } catch (a) {
          return !1
        }
      }),
      (z.sessionstorage = function () {
        try {
          return sessionStorage.setItem(o, o), sessionStorage.removeItem(o), !0
        } catch (a) {
          return !1
        }
      }),
      (z.webworkers = function () {
        return !!a.Worker
      }),
      (z.applicationcache = function () {
        return !!a.applicationCache
      }),
      (z.svg = function () {
        return (
          !!b.createElementNS && !!b.createElementNS(y.svg, "svg").createSVGRect
        )
      }),
      (z.inlinesvg = function () {
        var a = b.createElement("div")
        return (
          (a.innerHTML = "<svg/>"),
          (a.firstChild && a.firstChild.namespaceURI) == y.svg
        )
      }),
      (z.smil = function () {
        return (
          !!b.createElementNS &&
          /SVGAnimate/.test(t.call(b.createElementNS(y.svg, "animate")))
        )
      }),
      (z.svgclippaths = function () {
        return (
          !!b.createElementNS &&
          /SVGClipPath/.test(t.call(b.createElementNS(y.svg, "clipPath")))
        )
      })
    for (var I in z)
      l(z, I) &&
        ((k = I.toLowerCase()),
        (m[k] = z[I]()),
        C.push((m[k] ? "" : "no-") + k))
    return (
      m.input ||
        (function () {
          ;(m.input = (function (c) {
            for (var d = 0, e = c.length; d < e; d++) B[c[d]] = !!(c[d] in r)
            return (
              B.list &&
                (B.list = !(
                  !b.createElement("datalist") || !a.HTMLDataListElement
                )),
              B
            )
          })(
            "autocomplete autofocus list placeholder max min multiple pattern required step".split(
              " "
            )
          )),
            (m.inputtypes = (function (a) {
              for (var d, e, f, g = 0, h = a.length; g < h; g++)
                r.setAttribute("type", (e = a[g])),
                  (d = "text" !== r.type),
                  d &&
                    ((r.value = s),
                    (r.style.cssText = "position:absolute;visibility:hidden;"),
                    /^range$/.test(e) && r.style.WebkitAppearance !== c
                      ? (n.appendChild(r),
                        (f = b.defaultView),
                        (d =
                          f.getComputedStyle &&
                          "textfield" !==
                            f.getComputedStyle(r, null).WebkitAppearance &&
                          0 !== r.offsetHeight),
                        n.removeChild(r))
                      : /^(search|tel)$/.test(e) ||
                        (d = /^(url|email)$/.test(e)
                          ? r.checkValidity && !1 === r.checkValidity()
                          : r.value != s)),
                  (A[a[g]] = !!d)
              return A
            })(
              "search tel url email datetime date month week time datetime-local number range color".split(
                " "
              )
            ))
        })(),
      (m.addTest = function (a, b) {
        if ("object" == typeof a) for (var d in a) l(a, d) && m.addTest(d, a[d])
        else {
          if (((a = a.toLowerCase()), m[a] !== c)) return m
          ;(b = "function" == typeof b ? b() : b),
            (n.className += " " + (b ? "" : "no-") + a),
            (m[a] = b)
        }
        return m
      }),
      d(""),
      (p = r = null),
      (function (a, b) {
        function c(a, b) {
          var c = a.createElement("p"),
            d = a.getElementsByTagName("head")[0] || a.documentElement
          return (
            (c.innerHTML = "x<style>" + b + "</style>"),
            d.insertBefore(c.lastChild, d.firstChild)
          )
        }
        function d() {
          var a = r.elements
          return "string" == typeof a ? a.split(" ") : a
        }
        function e(a) {
          var b = q[a[o]]
          return b || ((b = {}), p++, (a[o] = p), (q[p] = b)), b
        }
        function f(a, c, d) {
          if ((c || (c = b), k)) return c.createElement(a)
          d || (d = e(c))
          var f
          return (
            (f = d.cache[a]
              ? d.cache[a].cloneNode()
              : n.test(a)
              ? (d.cache[a] = d.createElem(a)).cloneNode()
              : d.createElem(a)),
            !f.canHaveChildren || m.test(a) || f.tagUrn
              ? f
              : d.frag.appendChild(f)
          )
        }
        function g(a, c) {
          if ((a || (a = b), k)) return a.createDocumentFragment()
          c = c || e(a)
          for (
            var f = c.frag.cloneNode(), g = 0, h = d(), i = h.length;
            g < i;
            g++
          )
            f.createElement(h[g])
          return f
        }
        function h(a, b) {
          b.cache ||
            ((b.cache = {}),
            (b.createElem = a.createElement),
            (b.createFrag = a.createDocumentFragment),
            (b.frag = b.createFrag())),
            (a.createElement = function (c) {
              return r.shivMethods ? f(c, a, b) : b.createElem(c)
            }),
            (a.createDocumentFragment = Function(
              "h,f",
              "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" +
                d()
                  .join()
                  .replace(/[\w\-]+/g, function (a) {
                    return (
                      b.createElem(a), b.frag.createElement(a), 'c("' + a + '")'
                    )
                  }) +
                ");return n}"
            )(r, b.frag))
        }
        function i(a) {
          a || (a = b)
          var d = e(a)
          return (
            !r.shivCSS ||
              j ||
              d.hasCSS ||
              (d.hasCSS = !!c(
                a,
                "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}"
              )),
            k || h(a, d),
            a
          )
        }
        var j,
          k,
          l = a.html5 || {},
          m = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
          n = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
          o = "_html5shiv",
          p = 0,
          q = {}
        !(function () {
          try {
            var a = b.createElement("a")
            ;(a.innerHTML = "<xyz></xyz>"),
              (j = "hidden" in a),
              (k =
                1 == a.childNodes.length ||
                (function () {
                  b.createElement("a")
                  var a = b.createDocumentFragment()
                  return (
                    void 0 === a.cloneNode ||
                    void 0 === a.createDocumentFragment ||
                    void 0 === a.createElement
                  )
                })())
          } catch (a) {
            ;(j = !0), (k = !0)
          }
        })()
        var r = {
          elements:
            l.elements ||
            "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",
          version: "3.7.0",
          shivCSS: !1 !== l.shivCSS,
          supportsUnknownElements: k,
          shivMethods: !1 !== l.shivMethods,
          type: "default",
          shivDocument: i,
          createElement: f,
          createDocumentFragment: g,
        }
        ;(a.html5 = r), i(b)
      })(this, b),
      (m._version = "2.8.3"),
      (m._prefixes = u),
      (m._domPrefixes = x),
      (m._cssomPrefixes = w),
      (m.mq = F),
      (m.hasEvent = G),
      (m.testProp = function (a) {
        return h([a])
      }),
      (m.testAllProps = j),
      (m.testStyles = E),
      (m.prefixed = function (a, b, c) {
        return b ? j(a, b, c) : j(a, "pfx")
      }),
      (n.className =
        n.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") +
        " js " +
        C.join(" ")),
      m
    )
  })(this, this.document))
