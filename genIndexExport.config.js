import { defineConfig } from "@cc-heart/gen-index-export"
export default defineConfig({
  dirs: [
    { path: 'src/components', output: 'src/components/index.ts' },
  ],
})