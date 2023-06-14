import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import UnoCSS from 'unocss/vite'
import VitePluginReactSvg from 'vite-plugin-react-svg'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), UnoCSS(),VitePluginReactSvg({
     // Default behavior when importing `.svg` files, possible options are: 'url' and `component`
  defaultExport: 'url',

  // Boolean flag to enable/disable SVGO
  svgo: true,

  // SVGO configuration object
  svgoConfig: {},

  // Props to be forwarded on SVG tag, ossible options: "start", "end" or false
  expandProps: 'end',

  // Setting this to true will forward ref to the root SVG tag
  ref: false,

  // Setting this to true will wrap the exported component in React.memo
  memo: false,

  // Replace an attribute value by an other.
  // The main usage of this option is to change an icon color to "currentColor" in order to inherit from text color.
  // replaceAttrValues: { old: 'new' },
  replaceAttrValues: null,

  // Add props to the root SVG tag
  // svgProps: { name: 'value' },
  svgProps: null,

  // Add title tag via title property
  // <SvgIcon title="Accessible icon name" /> => <svg><title>Accessible icon name</title><...></svg>
  // <SvgIcon title="Accessible icon name" titleId="iconName" /> => <svg aria-labelledby="iconName><title id="iconName">Accessible icon name</title><...></svg>
  titleProp: false,
  })],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
})
