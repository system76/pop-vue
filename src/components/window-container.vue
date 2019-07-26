<template>
  <div :class="[$style.root]">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'PopWindowContainer',

  inheritAttrs: false
}
</script>

<style module>
  .root {
    align-content: stretch;
    align-items: stretch;
    box-shadow: var(--pop-shadow-window);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }
</style>
