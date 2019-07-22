import { withKnobs, text } from '@storybook/addon-knobs/vue'
import { storiesOf } from '@storybook/vue'

import PopTerminal from './terminal.vue'

storiesOf('Apps|Terminal', module)
  .addDecorator(withKnobs)
  .add('basic', () => ({
    components: { PopTerminal },
    props: {
      directory: { default: text('directory', '~') },
      hostname: { default: text('hostname', 'pop-os') },
      user: { default: text('user', 'pop-os') }
    },
    template: `
      <div
        style="height:30vh;width:80vw;"
      >
        <pop-terminal
          :directory="directory"
          :hostname="hostname"
          :user="user"
        >
          <span style="font-weight:600;"><span style="color:#73c48f;">{{ user }}@{{ hostname }}</span>:<span style="color:#48b9c7;">{{ directory }}</span></span>$ sudo apt install tensorflow
        </pop-terminal>
      </div>
    `
  }))
  .add('zoomed', () => ({
    components: { PopTerminal },
    props: {
      directory: { default: text('directory', '~') },
      hostname: { default: text('hostname', 'pop-os') },
      user: { default: text('user', 'pop-os') }
    },
    template: `
      <div
        style="height:30vh;overflow:hidden;width:80vw;"
      >
        <pop-terminal
          :directory="directory"
          :hostname="hostname"
          :user="user"
          style="transform:scale(2);transform-origin:top left;"
        >
          <span style="font-weight:600;"><span style="color:#73c48f;">{{ user }}@{{ hostname }}</span>:<span style="color:#48b9c7;">{{ directory }}</span></span>$ sudo apt install tensorflow
        </pop-terminal>
      </div>
    `
  }))
