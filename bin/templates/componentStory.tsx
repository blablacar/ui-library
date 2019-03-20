import React from 'react'

import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'

import ${componentName} from '${name}'

const stories = storiesOf('${componentName}', module)
stories.addDecorator(withKnobs)

stories.add(
  'Test',
  () => <${componentName} />,
)
