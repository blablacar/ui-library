import React from 'react'
import { text } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'

import { BaseSection as Section } from '../layout/section/baseSection'
import ItemBigData from './index'
import spec from './spec.md'

const stories = storiesOf('Widgets|ItemBigData', module)
stories.addParameters({
  readme: { content: spec },
})

stories.add('Basic', () => (
  <Section>
    <ItemBigData mainTitle={text('mainTitle', '23452,2500000000')} />
  </Section>
))

stories.add('withAdditionalInfo', () => (
  <Section>
    <ItemBigData
      mainTitle={text('mainTitle', '23452,2500000000')}
      mainInfo={text(
        'mainInfo',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam mollis elit ac tortor sollicitudin, nec sodales odio vestibulum. Proin dapibus nibh tortor, bibendum condimentum nunc aliquam et. Integer non turpis ac lacus congue ultrices vitae ut magna. Phasellus a quam a ante luctus cursus. Donec sit amet velit id ex consequat volutpat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce faucibus in ipsum eu blandit. Maecenas diam turpis, dictum nec turpis eget, lacinia hendrerit mauris. Sed vitae aliquet tellus. Pellentesque eget lacus sed leo tristique laoreet sed nec lorem. Quisque posuere tristique arcu ut feugiat. Phasellus dignissim dui justo, eu consequat lectus blandit at.',
      )}
      ariaLabel={text('ariaLabel', 'Additional info')}
    />
  </Section>
))
