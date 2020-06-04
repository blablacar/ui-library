import React from 'react'
import { boolean, text, withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'

import { Button } from '../button'
import { EmptyState } from '../emptyState'
import { BaseSection as Section } from '../layout/section/baseSection'
import spec from './specifications/emptystate.md'

const stories = storiesOf('Widgets|EmptyState', module)
stories.addDecorator(withKnobs)

const button = <Button>Do something</Button>

stories.add(
  'default',
  () => (
    <Section>
      <EmptyState
        // tslint:disable-next-line:max-line-length
        image={text(
          'Image URL',
          'https://cdn.blablacar.com/kairos/assets/' +
            'build/images/astronaut-79c2cfcb1a66f7c9afc1bbc50f0037fd.svg',
        )}
        text={text('Text', 'Nothing here!')}
        button={boolean('With button', true) && button}
      />
    </Section>
  ),
  { readme: { content: spec } },
)
