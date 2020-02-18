import React, { Fragment } from 'react'

import { storiesOf } from '@storybook/react'
import { boolean } from '@storybook/addon-knobs'
import Section from 'layout/section/baseSection'
import SubHeader from 'subHeader'
import Text from 'text'
import BlankSeparator, { BlankSeparatorSize } from 'blankSeparator'
import Button from 'button'
import ItemInfo from 'itemInfo'
import Avatar from 'avatar'
import MarketingMessage from 'marketingMessage'
import LayoutNormalizer from 'layout/layoutNormalizer'

const stories = storiesOf('Pages|Messaging/Braze marketing', module)

const avatarUrl = 'https://pbs.twimg.com/profile_images/749446875162505218/6r6-9wDn.jpg'
const longContent = 'Long content.'.repeat(50)

stories.add('Default', () => (
  <Fragment>
    <LayoutNormalizer useLegacyNormalization={boolean('Use legacy normalization', false)} />
    <Section>
      <ItemInfo mainInfo="" mainTitle="BlaBlaCar" icon={<Avatar image={avatarUrl} />} />
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
  </Fragment>
))
