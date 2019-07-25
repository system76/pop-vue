<script>
import trim from 'lodash/trim'

function templateLine (h, text, props) {
  let formattedText = [text]

  if (text.startsWith('$')) {
    const newText = formattedText[0].substring(1)

    formattedText.shift()

    formattedText.unshift(newText)

    formattedText.unshift('$ ')
    formattedText.unshift(h('span', `${props.directory}`))
    formattedText.unshift(':')
    formattedText.unshift(h('span', `${props.user}@${props.hostname}`))
  }

  if (text.endsWith('$')) {
    const newText = formattedText[formattedText.length - 1].substring(0, -1)

    formattedText.pop()

    formattedText.push(newText)

    formattedText.push(' █')
  }

  return h('div', formattedText)
}

function templateContent (h, vnode, props) {
  const rawTextRows = vnode.text
    .split('\n')
    .filter((t) => /\S/.test(t))

  const firstWhitespaceLength = (rawTextRows[0].match(/^\s*/)[0] || '').length

  return rawTextRows
    .map((r) => r.substring(firstWhitespaceLength))
    .map((r) => templateLine(h, r, props))
}

export default {
  name: 'PopTerminalContent',

  functional: true,

  props: {
    directory: {
      type: String,
      default: '~'
    },

    hostname: {
      type: String,
      default: 'pop-os'
    },

    user: {
      type: String,
      default: 'pop-os'
    }
  },

  render (h, ctx) {
    const children = ctx.children
      .map((vnode) => templateContent(h, vnode, ctx.props))
      .reduce((a, nodes = []) => [...a, ...nodes], [])

    return h('div', null, children)
  }
}
</script>
