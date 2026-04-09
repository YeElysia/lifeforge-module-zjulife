import { lazy } from 'react'
import type { ModuleConfig } from 'shared'

export default {
  // Route definitions (REQUIRED)
  routes: {
    '/': lazy(() => import('@')),
    '/:type': lazy(() => import('@/pages/xzzd'))
  },

  // Sidebar navigation items
  subsection: [{ label: 'Dashboard', icon: 'tabler:dashboard', path: 'xzzd' }]
} satisfies ModuleConfig
