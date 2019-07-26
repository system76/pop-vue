<style module>
  .directory {
    color: #48b9c7;
    font-weight: 600;
  }

  .host {
    color: #73c48f;
    font-weight: 600;
  }

  .cursor {
    animation: blink linear 1.4s infinite;
    background-color: #fff;
    display: inline-block;
    height: 1em;
    vertical-align: middle;
    width: 1ch;
  }

  @keyframes blink {
    0% { opacity: 0; }
    49% { opacity: 0; }
    50% { opacity: 1; }
    100% { opacity: 1; }
  }
</style>

<script>
function templateLine (h, text, { $style, props }) {
  const formattedText = [text]

  if (text.startsWith('$')) {
    const newText = formattedText[0].substring(1)

    formattedText.shift()

    formattedText.unshift(newText)

    formattedText.unshift('$ ')
    formattedText.unshift(h('span', { class: $style.directory }, `${props.directory}`))
    formattedText.unshift(':')
    formattedText.unshift(h('span', { class: $style.host }, `${props.user}@${props.hostname}`))
  }

  if (text.endsWith('$')) {
    const lastFormattedText = formattedText[formattedText.length - 1]

    if (typeof lastFormattedText === 'string' && lastFormattedText.endsWith('$')) {
      const newLastText = lastFormattedText.substring(0, lastFormattedText.length - 1)

      formattedText.pop()

      formattedText.push(newLastText)
    }

    formattedText.push(h('span', { class: $style.cursor }, ''))
  }

  return h('div', formattedText)
}

function templateContent (h, vnode, ctx) {
  const rawTextRows = vnode.text
    .split('\n')
    .filter((t) => /\S/.test(t))

  const firstWhitespaceLength = (rawTextRows[0].match(/^\s*/)[0] || '').length

  return rawTextRows
    .map((r) => r.substring(firstWhitespaceLength))
    .map((r) => templateLine(h, r, ctx))
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
      .map((vnode) => templateContent(h, vnode, ctx))
      .reduce((a, nodes = []) => [...a, ...nodes], [])

    return h('div', null, children)
  }
}
</script>
