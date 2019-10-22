import React, { Fragment } from 'react'

import { storiesOf } from '@storybook/react'
import { withKnobs, text, boolean } from '@storybook/addon-knobs'

import Button from 'button'
import Text from 'text'
import BlankSeparator, { BlankSeparatorSize } from 'blankSeparator'
import MarketingMessage from 'marketingMessage'
import SubHeader from 'subHeader'

const stories = storiesOf('MarketingMessage', module)
stories.addDecorator(withKnobs)

const longContent = 'Long content.'.repeat(50)
stories.add('Basic message', () => (
  <MarketingMessage>
    <Fragment>
      <SubHeader>Marketing message title</SubHeader>
      <Text>
        This is a simple multiline marketing message.
        {longContent}
      </Text>
      <BlankSeparator size={BlankSeparatorSize.LARGE} />
      <div style={{textAlign: 'center'}}>
        <Button>Marketing button</Button>
      </div>
    </Fragment>
  </MarketingMessage>
))

