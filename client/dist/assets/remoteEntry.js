const g = {},
  b = new Set(['Module', '__esModule', 'default', '_export_sfc'])
let p = {
  './Manifest': () => (
    E([], !1, './Manifest'),
    w(
      'https://lifeforge-api-proxy-fvwb.onrender.com/modules/yee--zju-life/assets/__federation_expose_Manifest-jfCQAVtY.js'
    ).then(e =>
      Object.keys(e).every(i => b.has(i)) ? () => e.default : () => e
    )
  )
}
const m = {},
  E = (e, i, a) => {
    const o = import.meta.url
    if (typeof o > 'u') {
      console.warn(
        'The remote style takes effect only when the build.target option in the vite.config.ts file is higher than that of "es2020".'
      )
      return
    }
    const r = o.substring(0, o.lastIndexOf('remoteEntry.js')),
      l = 'http://localhost:3636/modules/yee--zju-life/'
    ;('assets',
      e.forEach(_ => {
        let n = ''
        const c = l || r
        if (c) {
          const s = {
              trailing: t => (t.endsWith('/') ? t.slice(0, -1) : t),
              leading: t => (t.startsWith('/') ? t.slice(1) : t)
            },
            y = t => t.startsWith('http') || t.startsWith('//'),
            d = s.trailing(c),
            h = s.leading(_),
            u = s.trailing(r)
          y(c)
            ? (n = [d, h].filter(Boolean).join('/'))
            : u.includes(d)
              ? (n = [u, h].filter(Boolean).join('/'))
              : (n = [u + d, h].filter(Boolean).join('/'))
        } else n = _
        if (i) {
          const s = 'css__yee--zju-life__' + a
          ;((window[s] = window[s] || []), window[s].push(n))
          return
        }
        if (n in m) return
        m[n] = !0
        const f = document.createElement('link')
        ;((f.rel = 'stylesheet'), (f.href = n), document.head.appendChild(f))
      }))
  }
async function w(e) {
  return ((g[e] ??= import(e)), g[e])
}
const j = e => {
    if (!p[e]) throw new Error('Can not find remote module ' + e)
    return p[e]()
  },
  T = e => {
    ;((globalThis.__federation_shared__ =
      globalThis.__federation_shared__ || {}),
      Object.entries(e).forEach(([i, a]) => {
        for (const [o, r] of Object.entries(a)) {
          const l = r.scope || 'default'
          globalThis.__federation_shared__[l] =
            globalThis.__federation_shared__[l] || {}
          const _ = globalThis.__federation_shared__[l]
          ;(_[i] = _[i] || {})[o] = r
        }
      }))
  }
export { E as dynamicLoadingCss, j as get, T as init }
