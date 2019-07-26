import { withKnobs, boolean, text } from '@storybook/addon-knobs/vue'
import { storiesOf } from '@storybook/vue'

import PopWindowContainer from './window-container.vue'
import PopWindowHeader from './window-header.vue'

storiesOf('Basics|Window', module)
  .addDecorator(withKnobs)
  .add('Window Container', () => ({
    components: { PopWindowContainer },
    template: `
      <div style="height:30vh;width:80vw;">
        <pop-window-container>
          window content here
        </pop-terminal>
      </div>
    `
  }))
  .add('Window Header', () => ({
    components: { PopWindowHeader },
    props: {
      closeButton: { default: boolean('closeButton', true) },
      title: { default: text('title', 'window header') }
    },
    template: `
      <div style="height:30vh;width:80vw;">
        <pop-window-header
          :close-button="closeButton"
          :title="title"
        />
      </div>
    `
  }))
