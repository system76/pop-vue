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

  .line {
    word-wrap: break-word;
  }

  @keyframes blink {
    0% { opacity: 0; }
    49% { opacity: 0; }
    50% { opacity: 1; }
    100% { opacity: 1; }
  }
</style>

<script>
export default {
  name: 'PopTerminalLine',

  props: {
    animate: {
      type: Boolean,
      default: false
    },

    cursor: {
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

    prompt: {
      type: Boolean,
      default: false
    },

    text: {
      type: String,
      default: ''
    },

    speed: {
      type: Number,
      default: 0
    },

    user: {
      type: String,
      default: 'pop-os'
    }
  },

  data () {
    return {
      currentText: (!this.animate || this.speed === 0 ? this.text : ''),
      finished: (this.speed === 0),
      renderTimeout: null
    }
  },

  mounted () {
    if (this.animate && this.speed !== 0) {
      this.draw()
    } else {
      this.$emit('complete')
    }
  },

  beforeDestroy () {
    clearTimeout(this.renderTimeout)
  },

  methods: {
    draw () {
      if (!this.finished) {
        const nextCharacter = this.text.charAt(this.currentText.length)

        if (nextCharacter !== '') {
          this.currentText += nextCharacter
        } else {
          this.finished = true
        }
      }

      if (!this.finished) {
        this.renderTimeout = setTimeout(this.draw.bind(this), this.timeoutDelay())
      } else {
        this.$emit('complete')
      }
    },

    timeoutDelay () {
      return Math.round((Math.random() * this.speed) / 2) + this.speed
    }
  },

  render (h) {
    const formattedText = [this.currentText]

    if (this.prompt) {
      formattedText.unshift('$ ')
      formattedText.unshift(h('span', { class: this.$style.directory }, `${this.directory}`))
      formattedText.unshift(':')
      formattedText.unshift(h('span', { class: this.$style.host }, `${this.user}@${this.hostname}`))
    }

    if (this.cursor) {
      formattedText.push(h('span', { class: this.$style.cursor }, ''))
    }

    return h('div', { class: this.$style.line }, formattedText)
  }
}; // eslint-disable-line semi
// Needed to make Vue test utils and require-extension-hooks work correctly
</script>
