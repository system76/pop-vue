<div align="center">
  <h1>@system76/pop-vue</h1>
  <h3>Vue components designed to look like Pop!_OS</h3>
  <br>
  <br>
</div>

<p align="center">
  <a href="https://www.npmjs.com/package/@system76/pop-vue/">
    <img src="https://img.shields.io/npm/v/@system76/pop-vue.svg" alt="npm">
  </a>

  <a href="https://travis-ci.org/system76/pop-vue">
    <img src="https://travis-ci.org/system76/pop-vue.svg" alt="travis-ci">
  </a>

  <a href="https://renovatebot.com/">
    <img src="https://img.shields.io/badge/renovate-enabled-brightgreen.svg" alt="renovate">
  </a>

  <a href="https://standardjs.com">
    <img src="https://img.shields.io/badge/code_style-standard-brightgreen.svg" alt="standard">
  </a>

  <a href="https://pop-vue.origin76.com/">
    <img src="https://cdn.jsdelivr.net/gh/storybooks/brand@master/badge/badge-storybook.svg" alt="Storybook">
  </a>
</p>

---

This repository contains Vue components and styles designed to mimic the look
of common Pop!_OS applications.

## Using

```
npm install --save-dev @system76/pop-vue
```

```vue
<template>
  <PopTerminal>
    ./runacommand.sh
  </PopTerminal>
</template>

<style>
@import "@system76/pop-vue";
</style>

<script>
import { PopTerminal } from '@system76/pop-vue'

export default {
  components: {
    PopTerminal
  }
}
</script>
```

View [the docs](https://pop-vue.origin76.com) to see more examples.

### Tips

1) You will need to ensure that babel `sourceType` is set to `unambiguous`. In
nuxt, this means adding the following to your configuration:

```
build: {
  babel: {
    sourceType: 'unambiguous'
  }
}
```

## Development

1) Download the repository

2) Run `npm ci`

3) Run `npm start`

4) Start hacking

## Deployment

Simply push to master and travis will do all the work for you!

## Releases

To release a new version of `pop-vue`, push a commit to the `master` branch with the correct [commit message format](https://github.com/semantic-release/semantic-release#commit-message-format) from the [Angular Commit Message Conventions](https://github.com/angular/angular.js/blob/master/DEVELOPERS.md#-git-commit-guidelines).
