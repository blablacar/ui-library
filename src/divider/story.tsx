import React from 'react'

import { storiesOf } from '@storybook/react'
import { withKnobs, text, boolean } from '@storybook/addon-knobs'
import spec from 'divider/specifications/divider.md'
import Divider from 'divider'

const stories = storiesOf('Divider', module)
stories.addDecorator(withKnobs)
stories.add('Specifications',
    () => (<Divider />), {readme: spec})

stories.add('default', () => (
    <div>
        Some content to divide...
        <Divider />
        ...Rest of the divided content.
    </div>
))
