import { create } from '@storybook/theming'

import * as tokens from '@system76/design'

export const theme = create({
  base: 'light',

  colorPrimary: tokens.colorWarmGray,
  colorSecondary: tokens.colorOrange,

  appBg: tokens.colorLightGray,
  appContentBg: tokens.colorWhite,

  brandTitle: 'System76',
  brandUrl: 'https://pop-vue.origin76.com',
  brandImage: 'https://system76.com/assets/logo.png'
})
