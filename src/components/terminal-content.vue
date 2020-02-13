<style module>
  .container {
    max-height: calc(100% - 0.6em);
    overflow-y: auto;
    padding: 0.3em;
  }
</style>

<script>
import PopTerminalLine from './terminal-line.vue'

function regexLine (text) {
  const DEFAULT = {
    first: '$',
    delay: '',
    speed: '',
    text: '',
    last: '$'
  }

  if (text.trim() === '$') {
    return DEFAULT
  } else {
    const matches = text.match(/^((?<first>\$|#)(?<delay>\d*)\|?(?<speed>\d*)(\$|#)?)?(?<text>.*?)(?<last>\$?)$/)

    if (matches != null) {
      return Object.assign({}, DEFAULT, matches.groups)
    } else {
      return DEFAULT
    }
  }
}

function trimText (text, first, last) {
  return text
    .substring((first && text.charAt(0) === ' ') ? 1 : 0)
    .slice(0, last ? -1 : text.length)
}

export function mapLineToObject (rawText) {
  const rawParsed = regexLine(rawText)

  const prompt = (rawText !== '$' && rawParsed.first === '$')
  const cursor = (rawParsed.last === '$')
  const text = trimText(rawParsed.text, rawParsed.first, rawParsed.last)
  const delay = Number(rawParsed.delay || 0)
  const speed = (rawParsed.first === '$' && text !== '')
    ? Number(rawParsed.speed || 60)
    : 0

  return { prompt, cursor, text, delay, speed }
}

function lineProps (content, line) {
  return {
    animate: content.animate,
    cursor: line.cursor,
    directory: content.directory,
    hostname: content.hostname,
    prompt: line.prompt,
    text: line.text,
    speed: line.speed,
    user: content.user
  }
}

export default {
  name: 'PopTerminalContent',

  props: {
    animate: {
      type: Boolean,
      default: false
    },

    directory: {
      type: String,
      default: '~'
    },

    hostname: {
      type: String,
      default: 'pop-os'
    },

    loop: {
      type: Boolean,
      default: false
    },

    user: {
      type: String,
      default: 'pop-os'
    }
  },

  data () {
    return {
      currentLine: 0,
      finished: !this.animate
    }
  },

  computed: {
    firstLineDelay () {
      if (this.lineObjects[0] != null) {
        return this.lineObjects[0].delay
      } else {
        return 0
      }
    },

    nextLineDelay () {
      if (this.lineObjects[this.currentLine] != null) {
        return this.lineObjects[this.currentLine].delay
      } else {
        return 0
      }
    },

    hasAnimatedLines () {
      return this.lineObjects
        .some((l) => (l.delay !== 0 || l.speed !== 0))
    },

    lineObjects () {
      return this.linesOfText.map(mapLineToObject)
    },

    linesOfText () {
      if (this.$slots.default[0] != null) {
        const rawTextRows = this.$slots.default[0].text
          .split('\n')
          .filter((t) => /\S/.test(t))

        const firstWhitespaceLength = (rawTextRows[0].match(/^\s*/)[0] || '').length

        return rawTextRows
          .map((r) => r.substring(firstWhitespaceLength))
      } else {
        return 0
      }
    }
  },

  mounted () {
    if (this.animate) {
      this.reset()
    } else {
      this.currentLine = this.linesOfText.length
    }
  },

  updated () {
    this.$el.scroll({
      top: this.$el.scrollHeight,
      behavior: 'instant'
    })
  },

  methods: {
    draw () {
      if (this.currentLine < this.linesOfText.length && !this.finished) {
        this.renderTimeout = setTimeout(() => {
          this.currentLine += 1
        }, this.nextLineDelay)
      } else {
        if (this.loop) {
          this.renderTimeout = setTimeout(() => {
            this.reset()
          }, this.firstLineDelay)
        } else {
          this.$emit('complete')
        }
      }
    },

    reset () {
      this.currentLine = 0
      this.finished = false

      this.draw()
    }
  },

  render (h) {
    const children = this.lineObjects
      .slice(0, this.currentLine)
      .map((line) => h(PopTerminalLine, {
        on: { complete: this.draw },
        props: lineProps(this, line)
      }))

    return h('div', { class: this.$style.container }, children)
  }
}; // eslint-disable-line semi
// Needed to make Vue test utils and require-extension-hooks work correctly
</script>
