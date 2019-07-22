/**
 * pop-vue/test/_browser.js
 * Sets up Ava as a browser environment
 */

require('browser-env')()

// BUG: https://github.com/nuxt/create-nuxt-app/issues/180
window.Date = global.Date = Date
