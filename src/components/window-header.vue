<template>
  <div :class="[$style.header]">
    <span>{{ title }}</span>
    <div :class="[$style.close]"><span>&times;</span></div>
  </div>
</template>

<script>
export default {
  name: 'PopWindowHeader',

  props: {
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
    background-color: #e87311;
    border-radius: 9999px;
    display: flex;
    flex-direction: column;
    font-size: 1.25rem;
    height: 1rem;
    justify-content: center;
    margin-right: 0.15ch;
    padding: 0.2ch;
    width: 1rem;
  }
</style>
