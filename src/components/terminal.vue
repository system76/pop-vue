<template>
  <pop-window-container v-bind="$attrs">
    <pop-window-header
      v-bind="$attrs"
      :title="title"
    />

    <div :class="[$style.box]">
      <slot />
    </div>
  </pop-window-container>
</template>

<style module>
  .box {
    background-color: #333;
    box-sizing: border-box;
    color: #f2f2f2;
    display: block;
    flex: 1 1 auto;
    font-family: "Fira Mono", "Ubuntu Mono", "Ubuntu Monospace", "Menlo", "Consolas", "Roboto Mono", "Noto Mono", "Oxygen Mono", "Liberation Mono", monospace;
    font-size: 0.9rem;
    line-height: 1.2;
    padding: 0.3em;
    width: 100%;
  }
</style>

<script>
import PopWindowContainer from './window-container.vue'
import PopWindowHeader from './window-header.vue'

export default {
  name: 'PopTerminal',

  components: {
    PopWindowContainer,
    PopWindowHeader
  },

  inheritAttrs: false,

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

  computed: {
    title () {
      return `${this.user}@${this.hostname}: ${this.directory}`
    }
  }
}
</script>
