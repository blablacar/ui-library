import React from 'react'
import { storiesOf } from '@storybook/react'

import { BaseSection as Section } from '../layout/section/baseSection'
import { SubHeader } from '../subHeader'
import spec from './specifications/subHeader.md'

const stories = storiesOf('Widgets|SubHeader', module)

const specTemplateFn = () => <SubHeader>SubHeader content</SubHeader>
stories.add('Specifications', specTemplateFn, { readme: spec })

stories.add('default', () => (
  <Section>
    <SubHeader>This is a SubHeader</SubHeader>
    Some content lead by a &lt;SubHeader&gt; widget.
  </Section>
))
