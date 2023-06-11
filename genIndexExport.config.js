import { defineConfig } from "@cc-heart/gen-index-export"
export default defineConfig({
  dirs: [
    { path: 'src/configs', 'output': "src/configs/index.ts" },
    { path: 'src/hooks', 'output': "src/hooks/index.ts" },
  ],
})