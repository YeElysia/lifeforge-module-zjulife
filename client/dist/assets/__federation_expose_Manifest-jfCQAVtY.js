import { importShared as b } from './__federation_fn_import-E6wRZccp.js'

const E = (function () {
    const s = typeof document < 'u' && document.createElement('link').relList
    return s && s.supports && s.supports('modulepreload')
      ? 'modulepreload'
      : 'preload'
  })(),
  v = function (i) {
    return (
      'https://lifeforge-api-proxy-fvwb.onrender.com/modules/yee--zju-life/' + i
    )
  },
  p = {},
  c = function (s, a, k) {
    let d = Promise.resolve()
    if (a && a.length > 0) {
      let f = function (e) {
        return Promise.all(
          e.map(n =>
            Promise.resolve(n).then(
              l => ({ status: 'fulfilled', value: l }),
              l => ({ status: 'rejected', reason: l })
            )
          )
        )
      }
      document.getElementsByTagName('link')
      const o = document.querySelector('meta[property=csp-nonce]'),
        t = o?.nonce || o?.getAttribute('nonce')
      d = f(
        a.map(e => {
          if (((e = v(e)), e in p)) return
          p[e] = !0
          const n = e.endsWith('.css'),
            l = n ? '[rel="stylesheet"]' : ''
          if (document.querySelector(`link[href="${e}"]${l}`)) return
          const r = document.createElement('link')
          if (
            ((r.rel = n ? 'stylesheet' : E),
            n || (r.as = 'script'),
            (r.crossOrigin = ''),
            (r.href = e),
            t && r.setAttribute('nonce', t),
            document.head.appendChild(r),
            n)
          )
            return new Promise((h, _) => {
              ;(r.addEventListener('load', h),
                r.addEventListener('error', () =>
                  _(new Error(`Unable to preload CSS for ${e}`))
                ))
            })
        })
      )
    }
    function m(o) {
      const t = new Event('vite:preloadError', { cancelable: !0 })
      if (((t.payload = o), window.dispatchEvent(t), !t.defaultPrevented))
        throw o
    }
    return d.then(o => {
      for (const t of o || []) t.status === 'rejected' && m(t.reason)
      return s().catch(m)
    })
  },
  { lazy: u } = await b('react'),
  P = {
    routes: {
      '/xzzd': u(() => c(() => import('./index-CX_LRea4.js'), [])),
      '/kb': u(() => c(() => import('./index-BVGL9zDV.js'), [])),
      '/kssj': u(() => c(() => import('./index-BZH8hKPS.js'), []))
    },
    subsection: [
      { label: 'xzzd', icon: 'tabler:dashboard', path: 'xzzd' },
      { label: 'kebiao', icon: 'tabler:book', path: 'kb' },
      { label: 'kaoshi', icon: 'tabler:calendar-event', path: 'kssj' }
    ]
  }
export { P as default }
