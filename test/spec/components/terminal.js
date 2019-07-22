/**
 * pop-vue/test/spec/components/terminal.js
 * Tests the Pop!_OS terminal Vue component
 */

import { mount } from '@vue/test-utils'
import test from 'ava'

import PopTerminal from '../../../src/components/terminal.vue'

test('giving slot text renders text', (t) => {
  const wrapper = mount(PopTerminal, {
    slots: {
      default: 'Hello World!'
    }
  })

  const html = wrapper.html()

  t.log(html)
  t.true(html.includes('Hello World!'))
})

test('giving a custom user changes the terminal title', (t) => {
  const wrapper = mount(PopTerminal, {
    propsData: {
      user: 'test-user'
    }
  })

  const html = wrapper.html()

  t.log(html)
  t.true(html.includes('test-user@pop-os'))
})

test('giving a custom hostname changes the terminal title', (t) => {
  const wrapper = mount(PopTerminal, {
    propsData: {
      hostname: 'test-computer'
    }
  })

  const html = wrapper.html()

  t.log(html)
  t.true(html.includes('pop-os@test-computer'))
})
