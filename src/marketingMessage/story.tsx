import React from 'react'

import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'

import Button from 'button'
import Text from 'text'
import BlankSeparator, { BlankSeparatorSize } from 'blankSeparator'
import MarketingMessage from 'marketingMessage'
import SubHeader from 'subHeader'
import Section from 'layout/section/baseSection'

const stories = storiesOf('Widgets|MarketingMessage', module)
stories.addDecorator(withKnobs)

const longContent = 'Long content.'.repeat(50)
stories.add('Basic message', () => (
  <Section>
    <MarketingMessage>
      <SubHeader>Marketing message title</SubHeader>
      <Text>
        This is a simple multiline marketing message.
        {longContent}
      </Text>
      <BlankSeparator size={BlankSeparatorSize.LARGE} />
      <div style={{ textAlign: 'center' }}>
        <Button>Marketing button</Button>
      </div>
    </MarketingMessage>
  </Section>
))
