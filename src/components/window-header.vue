<template>
  <div :class="[$style.header]">
    <span>{{ title }}</span>

    <div
      v-if="closeButton"
      :class="[$style.close]"
      @click="$emit('close')"
    >
      <svg
        height="16"
        width="16"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5 4.003a1 1 0 0 0-1 1 1 1 0 0 0 .293.707l2.293 2.293-2.293 2.293a1 1 0 0 0-.293.707 1 1 0 0 0 1 1 1 1 0 0 0 .707-.293L8 9.417l2.283 2.283a1 1 0 0 0 .717.303 1 1 0 0 0 1-1 1 1 0 0 0-.293-.707L9.414 8.003l2.283-2.283A1 1 0 0 0 12 5.003a1 1 0 0 0-1-1 1 1 0 0 0-.707.293L8 6.589 5.717 4.306a1 1 0 0 0-.01-.01A1 1 0 0 0 5 4.003z"
        />
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PopWindowHeader',

  inheritAttrs: false,

  props: {
    closeButton: {
      type: Boolean,
      default: true
    },

    title: {
      type: String,
      default: ''
    }
  }
}
</script>

<style module>
  .header {
    align-content: center;
    align-items: center;
    background-color: var(--pop-warm-grey-500);
    border-radius: var(--pop-corner-radius) var(--pop-corner-radius) 0 0;
    box-sizing: border-box;
    color: var(--pop-white);
    display: flex;
    font-family: "Fira Sans", "system-ui", "-apple-system", "Segoe UI", "Roboto", "Ubuntu", "Cantarell", "Nato Sans", "sans-serif", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    font-size: 0.9rem;
    font-weight: bold;
    height: 22px;
    justify-content: space-between;
    min-height: 2.4em;
    padding: 0.3em;
    text-align: center;
    user-select: none;
    width: 100%;
  }

  .header > span {
    flex: 1 1 auto;
    grid-area: center;
    text-align: center;
  }

  .close {
    align-content: center;
    align-items: center;
    border-radius: 9999px;
    display: flex;
    height: 1.5rem;
    justify-content: center;
    margin-right: 0.15ch;
    width: 1.5rem;
  }

  .close svg {
    fill: var(--pop-mid-grey);
  }

  .close:hover,
  .close:active {
    background-color: var(--pop-orange-700);
  }

  .close:hover svg,
  .close:active svg {
    fill: var(--pop-white);
  }
</style>
