/**
 * pop-vue/test/spec/components/terminal-content.js
 * Tests the terminal content parser
 */

import test from 'ava'

import { mapLineToObject } from '../../../src/components/terminal-content.vue'

test('a line with only "$" is a cursor line', (t) => {
  const res = mapLineToObject('$')

  t.false(res.prompt)
  t.true(res.cursor)
  t.is(res.text, '')
})

test('identifies a prompt line correctly', (t) => {
  const res = mapLineToObject('$ sudo apt update')

  t.true(res.prompt)
  t.is(res.text, 'sudo apt update')
})

test('identifies a prompt line with cursor correctly', (t) => {
  const res = mapLineToObject('$ sudo apt update $')

  t.true(res.prompt)
  t.true(res.cursor)
  t.is(res.text, 'sudo apt update')
})

test('identifies delay on a prompt line', (t) => {
  const res = mapLineToObject('$20$ sudo apt update')

  t.true(res.prompt)
  t.is(res.delay, 20)
})

test('identifies speed on a prompt line', (t) => {
  const res = mapLineToObject('$|312$ console output line here')

  t.is(res.text, 'console output line here')
  t.is(res.speed, 312)
})

test('identifies speed and delay on a prompt line', (t) => {
  const res = mapLineToObject('$400|312$ console output line here')

  t.is(res.text, 'console output line here')
  t.is(res.delay, 400)
  t.is(res.speed, 312)
})

test('regular text has no prompt or cursor', (t) => {
  const res = mapLineToObject('output here')

  t.false(res.prompt)
  t.false(res.cursor)
  t.is(res.text, 'output here')
})
