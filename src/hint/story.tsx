import React from 'react'

import { storiesOf } from '@storybook/react'
import { withKnobs, text, select } from '@storybook/addon-knobs'

import Hint from './index'
import { HintBubblePosition } from './HintBubble'
import BaseSection from 'layout/section/baseSection'
import TheVoice from 'theVoice'
import ItemChoice from 'itemChoice'
import ItemsList from 'itemsList'

const stories = storiesOf('Widgets|Hint', module).addDecorator(withKnobs)

stories.add('default', () => (
  <BaseSection>
    <TheVoice>Your publication</TheVoice>
    <ItemsList>
      <ItemChoice label="Itinerary, date and time" href="#" />
      <ItemChoice label="Seats and options" href="#" />
      <Hint
        title={text('title', 'New settings')}
        description={text('description', 'Take more control of your ride!')}
        position={select(
          'position',
          {
            [HintBubblePosition.ABOVE]: HintBubblePosition.ABOVE,
            [HintBubblePosition.BELOW]: HintBubblePosition.BELOW,
          },
          HintBubblePosition.ABOVE,
        )}
        closeButtonTitle="Close"
      >
        {a11yAttrs => (
          <ItemChoice
            label="Extra passengers"
            labelInfo="Manage booking requests from extra passengers along your way."
            href="#"
            {...a11yAttrs}
          />
        )}
      </Hint>
      <ItemChoice
        label="Price"
        labelInfo="We'll transfer passenger contributions to you after the ride."
        href="#"
      />
    </ItemsList>
  </BaseSection>
))
