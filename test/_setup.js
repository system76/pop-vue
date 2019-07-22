/**
 * pop-vue/test/_setup.js
 * Sets up Ava with the ability to import Vue files
 */

import hooks from 'require-extension-hooks'
import Vue from 'vue'

// Setup Vue.js to remove production tip
Vue.config.productionTip = false

// Setup vue files to be processed by `require-extension-hooks-vue`
hooks('vue')
  .plugin('vue')
  .push()

// Setup vue and js files to be processed by `require-extension-hooks-babel`
hooks(['vue', 'js'])
  .exclude(({ filename }) => filename.match(/\/node_modules\//))
  .plugin('babel')
  .push()
