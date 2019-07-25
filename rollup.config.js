import postcssImport from 'postcss-import'
import postcssPresetEnv from 'postcss-preset-env'
import postcssUrl from 'postcss-url'
import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import copy from 'rollup-plugin-copy'
import css from 'rollup-plugin-css-only'
import postcss from 'rollup-plugin-postcss'
import replace from 'rollup-plugin-replace'
import { terser } from 'rollup-plugin-terser'
import vue from 'rollup-plugin-vue'

const DEFAULT_CONFIG = {
  input: 'src/entry.js',
  external: ['vue'],
  plugins: {
    preVue: [
      replace({
        ENVIRONMENT: JSON.stringify('production')
      }),
      commonjs({
        include: 'node_modules/**'
      }),
      postcss({
        extensions: ['.css'],
        extract: true,
        minimize: true,
        plugins: [
          postcssImport(),
          postcssUrl({
            filter: '**/fonts/**',
            url: (asset) => asset.url.replace('../fonts/', 'fonts/')
          }),
          postcssPresetEnv()
        ]
      }),
      css()
    ],
    vue: {
      compileTemplate: true,
      style: {
        postcssModulesOptions: {
          generateScopedName: 'pop-[local]-[hash:base64:4]'
        }
      },
      template: {
        isProduction: true,
        compilerOptions: { preserveWhitespace: false }
      }
    },
    postVue: [
      babel({ exclude: 'node_modules/**' })
    ]
  }
}

export default [{
  ...DEFAULT_CONFIG,
  output: {
    file: 'dist/index.esm.js',
    format: 'esm',
    sourcemap: true
  },
  plugins: [
    ...DEFAULT_CONFIG.plugins.preVue,
    vue(DEFAULT_CONFIG.plugins.vue),
    ...DEFAULT_CONFIG.plugins.postVue,
    terser({
      output: {
        ecma: 6
      }
    })
  ]
}, {
  ...DEFAULT_CONFIG,
  output: {
    compact: true,
    exports: 'named',
    file: 'dist/index.common.js',
    format: 'cjs',
    name: 'Pop',
    sourcemap: true
  },
  plugins: [
    ...DEFAULT_CONFIG.plugins.preVue,
    copy({
      targets: [{
        src: 'src/assets/fonts',
        dest: 'dist'
      }]
    }),
    vue({
      ...DEFAULT_CONFIG.plugins.vue,
      template: {
        ...DEFAULT_CONFIG.plugins.vue.template,
        optimizeSSR: true
      }
    }),
    ...DEFAULT_CONFIG.plugins.postVue,
    terser({
      output: {
        ecma: 5
      }
    })
  ]
}, {
  ...DEFAULT_CONFIG,
  input: 'src/entry.js',
  output: {
    compact: true,
    file: 'dist/index.umd.js',
    format: 'umd',
    globals: {
      vue: 'Vue'
    },
    name: 'Pop',
    sourcemap: true
  },
  plugins: [
    ...DEFAULT_CONFIG.plugins.preVue,
    vue(DEFAULT_CONFIG.plugins.vue),
    ...DEFAULT_CONFIG.plugins.postVue,
    terser({
      output: {
        ecma: 5
      }
    })
  ]
}]
