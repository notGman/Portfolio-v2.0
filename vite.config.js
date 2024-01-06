import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import {resolve} from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      $ks: resolve('/ks.png'),
      $carpe: resolve('/Carpe.png'),
      $dcs: resolve('/dcs.png')
    }
  }
})
