import { withKnobs, text } from '@storybook/addon-knobs/vue'
import { storiesOf } from '@storybook/vue'

import PopTerminal from './terminal.vue'
import PopTerminalContent from './terminal-content.vue'

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
          terminal text
        </pop-terminal>
      </div>
    `
  }))
  .add('manual content styling', () => ({
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
  .add('with prompt and text', () => ({
    components: { PopTerminal, PopTerminalContent },
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
          <pop-terminal-content
            :directory="directory"
            :hostname="hostname"
            :user="user"
          >
            $ sudo apt install tensorflow
            [sudo] password for {{ user }}:
            Reading package lists... Done
            Building dependency tree
            Reading state information... Done
            E: Unable to locate package tensorflow
          </pop-terminal-content>
        </pop-terminal>
      </div>
    `
  }))
  .add('with prompt cursor', () => ({
    components: { PopTerminal, PopTerminalContent },
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
          <pop-terminal-content
            :directory="directory"
            :hostname="hostname"
            :user="user"
          >
            $ sudo apt install tensorflow $
          </pop-terminal-content>
        </pop-terminal>
      </div>
    `
  }))
