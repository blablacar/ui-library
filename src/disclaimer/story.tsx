import React from 'react'

import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'
import spec from 'disclaimer/specifications/disclaimer.md'
import Disclaimer from 'disclaimer'
import Button, { ButtonStatus } from 'button'
import Section from 'layout/section/baseSection'

const stories = storiesOf('Widgets|Disclaimer', module)
stories.addDecorator(withKnobs)

stories.add('Specifications', () => <Disclaimer useInfoIcon>My disclaimer text here</Disclaimer>, {
  readme: spec,
})

stories.add('With info icon', () => (
  <Section>
    <Disclaimer useInfoIcon>
      <span>
        Some short disclaimer and&nbsp;
        <Button status={ButtonStatus.UNSTYLED} href="#">
          link
        </Button>
      </span>
    </Disclaimer>

    <Disclaimer useInfoIcon>Some short text disclaimer</Disclaimer>

    <Disclaimer isCaption={false} useInfoIcon>
      Some short text disclaimer, not styled as a caption
    </Disclaimer>
  </Section>
))

const longDisclaimer = 'Some long disclaimer text'.repeat(10)
stories.add('Without info icon', () => (
  <Section>
    <Disclaimer useInfoIcon={false}>Some short text disclaimer</Disclaimer>
    <Disclaimer useInfoIcon={false}>{longDisclaimer}</Disclaimer>
  </Section>
))

stories.add('With deprecated help url', () => (
  <Section>
    <Disclaimer useInfoIcon={false} deprecatedHelpUrl="http://google.fr">
      Some disclaimer with help button icon.
    </Disclaimer>
  </Section>
))
