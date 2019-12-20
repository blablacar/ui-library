import React from 'react'

import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'
import spec from 'subHeader/specifications/subHeader.md'
import SubHeader from 'subHeader'

const stories = storiesOf('SubHeader', module)
stories.addDecorator(withKnobs)
const specTemplateFn = () => <SubHeader>SubHeader content</SubHeader>
stories.add('Specifications', specTemplateFn, { readme: spec })

stories.add('default', () => (
  <div>
    <SubHeader>This is a SubHeader</SubHeader>
    Some content lead by a &lt;SubHeader&gt; widget.
  </div>
))
