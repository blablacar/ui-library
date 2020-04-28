import React, { Component } from 'react'
import { FocusVisibleProvider } from '_utils/focusVisibleProvider'

import { storiesOf } from '@storybook/react'
import { withKnobs, text } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import Section from 'layout/section/baseSection'
import Why from 'why'

class LayoutExample extends Component {
  render() {
    return (
      <div>
        <FocusVisibleProvider>
          <Section>
            <Why
              onClick={action('clicked')}
              title={text('Title', 'Why this is a text that is so long ? (new window)')}
            >
              {text('Text', 'Why this is a text that is so long ?')}
            </Why>
          </Section>
        </FocusVisibleProvider>
      </div>
    )
  }
}

const stories = storiesOf('Widgets|Why', module)
stories.addDecorator(withKnobs)

stories.add('default', () => <LayoutExample />)
