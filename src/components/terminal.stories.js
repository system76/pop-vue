import { withKnobs, text } from '@storybook/addon-knobs/vue'
import { storiesOf } from '@storybook/vue'

import PopTerminalContent from './terminal-content.vue'
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
          <span style="color:red;">This is just a colored span tag</span>
        </pop-terminal>
      </div>
    `
  }))
  .add('with prompt text', () => ({
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
            $ sudo apt install tensorflow$
          </pop-terminal-content>
        </pop-terminal>
      </div>
    `
  }))
  .add('with prompt text and cursor', () => ({
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
            $
          </pop-terminal-content>
        </pop-terminal>
      </div>
    `
  }))
  .add('with a long line of text', () => ({
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
            $ sudo cat /dev/urandom | base64
            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
          </pop-terminal-content>
        </pop-terminal>
      </div>
    `
  }))
