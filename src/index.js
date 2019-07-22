/**
 * pop-vue/entry.js
 * Exports everything related to Pop!_OS Vue components
 */

import './assets/styles/main.css'

import * as components from './components'

export function install (Vue) {
  Object.keys(components).forEach((componentName) => {
    Vue.component(componentName, components[componentName])
  })
}

export * from './components'
