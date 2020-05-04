import React from 'react'
import { boolean, select, text, withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'

import ItemChoice from 'itemChoice'
import ItemsList from 'itemsList'
import BaseSection from 'layout/section/baseSection'

import { HintBubblePosition } from './HintBubble'
import Hint from './index'
import readme from './specifications/hint.md'

const stories = storiesOf('Widgets|Hint', module).addDecorator(withKnobs)

stories.add(
  'default',
  () => (
    <BaseSection>
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
          hidden={boolean('hidden', false)}
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
  ),
  {
    readme: { content: readme },
  },
)
