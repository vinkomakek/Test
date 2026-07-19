import { defineConfig } from 'vite'
import { viteSingleFile } from 'vite-plugin-singlefile'

// singlefile: sav JS/CSS inline u dist/index.html — jedan file za slanje i testiranje na mobitelu
export default defineConfig({
  plugins: [viteSingleFile()],
  build: { target: 'es2018' },
})
