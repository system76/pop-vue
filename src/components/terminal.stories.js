import { withKnobs, boolean, text } from '@storybook/addon-knobs/vue'
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
  .add('with animations', () => ({
    components: { PopTerminal, PopTerminalContent },
    props: {
      directory: { default: text('directory', '~') },
      hostname: { default: text('hostname', 'pop-os') },
      loop: { default: boolean('loop', true) },
      user: { default: text('user', 'pop-os') }
    },
    template: `
      <div
        style="height:30vh;width:80vw;"
      >
        <pop-terminal
          style="height:300px;"
          :directory="directory"
          :hostname="hostname"
          :user="user"
        >
          <pop-terminal-content
            :animate="true"
            :directory="directory"
            :hostname="hostname"
            :loop="loop"
            :user="user"
          >
            $1000|200$ sudo apt update
            #40# Hit:1 http://us.archive.ubuntu.com/ubuntu bionic InRelease
            #20# Ign:2 http://dl.google.com/linux/chrome/deb stable InRelease
            #20# Get:3 http://packages.elementary.io/appcenter bionic InRelease [5,894 B]
            #40# Get:4 http://us.archive.ubuntu.com/ubuntu bionic-updates InRelease [88.7 kB]
            #20# Get:5 http://security.ubuntu.com/ubuntu bionic-security InRelease [88.7 kB]
            #20# Get:6 http://us.archive.ubuntu.com/ubuntu bionic-backports InRelease [74.6 kB]
            #30# Hit:8 http://dl.google.com/linux/chrome/deb stable Release
            #20# Hit:9 http://ppa.launchpad.net/ansible/ansible/ubuntu bionic InRelease
            #20# Hit:7 https://packagecloud.io/github/git-lfs/ubuntu bionic InRelease
            #20# Get:10 http://packages.elementary.io/appcenter bionic/main amd64 DEP-11 Metadata [232 kB]
            #20# Hit:11 http://ppa.launchpad.net/elementary-os/stable/ubuntu bionic InRelease
            #20# Get:12 http://us.archive.ubuntu.com/ubuntu bionic-updates/main amd64 Packages [853 kB]
            #10# Get:14 http://ppa.launchpad.net/elementary-os/os-patches/ubuntu bionic InRelease [20.8 kB]
            #20# Get:15 http://us.archive.ubuntu.com/ubuntu bionic-updates/main i386 Packages [642 kB]
            #20# Get:16 http://security.ubuntu.com/ubuntu bionic-security/main i386 Packages [437 kB]
            #70# Get:17 http://us.archive.ubuntu.com/ubuntu bionic-updates/main Translation-en [298 kB]
            #20# Get:18 http://us.archive.ubuntu.com/ubuntu bionic-updates/main amd64 DEP-11 Metadata [295 kB]
            #20# Hit:19 http://ppa.launchpad.net/system76-dev/stable/ubuntu bionic InRelease
            #20# Get:20 http://us.archive.ubuntu.com/ubuntu bionic-updates/main DEP-11 48x48 Icons [73.8 kB]
            #20# Get:21 http://security.ubuntu.com/ubuntu bionic-security/main amd64 Packages [636 kB]
            #40# Get:22 http://us.archive.ubuntu.com/ubuntu bionic-updates/main DEP-11 64x64 Icons [140 kB]
            #20# Get:23 http://security.ubuntu.com/ubuntu bionic-security/main Translation-en [208 kB]
            #20# Get:24 http://us.archive.ubuntu.com/ubuntu bionic-updates/main DEP-11 128x128 Icons [348 kB]
            #20# Get:25 http://ppa.launchpad.net/elementary-os/os-patches/ubuntu bionic/main Sources [19.4 kB]
            #20# Get:26 http://security.ubuntu.com/ubuntu bionic-security/main amd64 DEP-11 Metadata [38.5 kB]
            #20# Get:27 http://us.archive.ubuntu.com/ubuntu bionic-updates/universe amd64 Packages [1,049 kB]
            #20# Get:28 http://security.ubuntu.com/ubuntu bionic-security/main DEP-11 48x48 Icons [17.6 kB]
            #20# Get:29 http://security.ubuntu.com/ubuntu bionic-security/main DEP-11 64x64 Icons [41.5 kB]
            #20# Get:30 http://us.archive.ubuntu.com/ubuntu bionic-updates/universe i386 Packages [1,008 kB]
            #20# Get:31 http://security.ubuntu.com/ubuntu bionic-security/main DEP-11 128x128 Icons [97.7 kB]
            #20# Get:32 http://ppa.launchpad.net/elementary-os/os-patches/ubuntu bionic/main amd64 Packages [36.0 kB]
            #20# Get:33 http://us.archive.ubuntu.com/ubuntu bionic-updates/universe Translation-en [324 kB]
            #20# Get:34 http://us.archive.ubuntu.com/ubuntu bionic-updates/universe amd64 DEP-11 Metadata [264 kB]
            #20# Get:35 http://security.ubuntu.com/ubuntu bionic-security/universe amd64 DEP-11 Metadata [42.1 kB]
            #20# Get:36 http://us.archive.ubuntu.com/ubuntu bionic-updates/universe DEP-11 48x48 Icons [199 kB]
            #20# Get:37 http://security.ubuntu.com/ubuntu bionic-security/universe DEP-11 48x48 Icons [16.4 kB]
            #20# Get:38 http://us.archive.ubuntu.com/ubuntu bionic-updates/universe DEP-11 64x64 Icons [440 kB]
            #20# Get:39 http://security.ubuntu.com/ubuntu bionic-security/universe DEP-11 64x64 Icons [111 kB]
            #20# Get:40 http://us.archive.ubuntu.com/ubuntu bionic-updates/universe DEP-11 128x128 Icons [977 kB]
            #20# Get:41 http://security.ubuntu.com/ubuntu bionic-security/universe DEP-11 128x128 Icons [181 kB]
            #20# Get:42 http://ppa.launchpad.net/elementary-os/os-patches/ubuntu bionic/main i386 Packages [35.8 kB]
            #20# Get:43 http://us.archive.ubuntu.com/ubuntu bionic-updates/multiverse amd64 DEP-11 Metadata [2,464 B]
            #20# Get:44 http://us.archive.ubuntu.com/ubuntu bionic-backports/universe amd64 DEP-11 Metadata [8,284 B]
            #600# Get:45 http://security.ubuntu.com/ubuntu bionic-security/multiverse amd64 DEP-11 Metadata [2,464 B]
            #200# Fetched 9,351 kB in 2s (4,110 kB/s)
            #1200# Reading package lists... Done
            #100# Building dependency tree
            #100# Reading state information... Done
            2 packages can be upgraded. Run 'apt list --upgradable' to see them.
            $800$ clear
          </pop-terminal-content>
        </pop-terminal>
      </div>
    `
  }))
