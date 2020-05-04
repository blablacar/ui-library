import React from 'react'
import { withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'

import BlankSeparator, { BlankSeparatorSize } from 'blankSeparator'
import Button from 'button'
import Section from 'layout/section/baseSection'
import MarketingMessage from 'marketingMessage'
import SubHeader from 'subHeader'
import Text from 'text'

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
