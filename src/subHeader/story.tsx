import React from 'react'
import { withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'

import Section from 'layout/section/baseSection'
import SubHeader from 'subHeader'
import spec from 'subHeader/specifications/subHeader.md'

const stories = storiesOf('Widgets|SubHeader', module)
stories.addDecorator(withKnobs)
const specTemplateFn = () => <SubHeader>SubHeader content</SubHeader>
stories.add('Specifications', specTemplateFn, { readme: spec })

stories.add('default', () => (
  <Section>
    <SubHeader>This is a SubHeader</SubHeader>
    Some content lead by a &lt;SubHeader&gt; widget.
  </Section>
))
