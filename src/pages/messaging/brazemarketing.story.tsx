import React, { Fragment } from 'react'
import { boolean } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'

import { Avatar } from '../../avatar'
import { Button } from '../../button'
import { SpacingDivider, SpacingDividerSize } from '../../divider/spacingDivider'
import { ItemInfo } from '../../itemInfo'
import { LayoutNormalizer } from '../../layout/layoutNormalizer'
import { BaseSection as Section } from '../../layout/section/baseSection'
import { MarketingMessage } from '../../marketingMessage'
import { SubHeader } from '../../subHeader'
import { Text } from '../../text'

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
        <SpacingDivider size={SpacingDividerSize.LARGE} />
        <div style={{ textAlign: 'center' }}>
          <Button>Marketing button</Button>
        </div>
      </MarketingMessage>
    </Section>
  </Fragment>
))
