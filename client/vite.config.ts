// client/vite.config.ts
import federation from '@originjs/vite-plugin-federation'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv'
import path from 'node:path'
import { defineConfig } from 'vite'

import pkg from '../package.json'

dotenv.config({ path: '../../../env/.env.local' })

const moduleName = pkg.name.replace('@lifeforge/', '')

const apiHost =
  process.env.DOCKER_BUILD === 'true' ? '/api' : process.env.VITE_API_HOST

export default defineConfig({
  base: `${apiHost}/modules/${moduleName}/`,
  plugins: [
    react(),
    tailwindcss(),
    federation({
      name: moduleName,
      filename: 'remoteEntry.js',
      exposes: {
        './Manifest': './manifest.ts'
      },
      shared: {
        react: { generate: false },
        'react-dom': { generate: false },
        shared: { generate: false },
        'lifeforge-ui': { generate: false },
        'react-i18next': { generate: false },
        i18next: { generate: false },
        '@tanstack/react-query': { generate: false }
      }
    })
  ],
  resolve: {
    alias: [
      {
        find: '@server',
        replacement: path.resolve(__dirname, '../server')
      },
      { find: /^@\/(.*)$/, replacement: path.resolve(__dirname, './src/$1') },
      { find: /^@$/, replacement: path.resolve(__dirname, './src/index') }
    ]
  },
  build: {
    outDir: process.env.DOCKER_BUILD ? 'dist-docker' : 'dist',
    target: 'esnext',
    minify: true,
    modulePreload: false
  }
})
