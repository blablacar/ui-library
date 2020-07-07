import React from 'react'
import { storiesOf } from '@storybook/react'

import { BaseSection as Section } from '../layout/section/baseSection'
import { SubHeader } from '../subHeader'

const stories = storiesOf('Text|', module)

stories.add('SubHeader', () => (
  <Section>
    <SubHeader>This is a SubHeader</SubHeader>
    Some content lead by a &lt;SubHeader&gt; widget.
  </Section>
))
