import React from 'react'

import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { action } from '@storybook/addon-actions'
import { withKnobs, text, select } from '@storybook/addon-knobs'

import RadioGroup from 'radioGroup/index'
import Radio from 'radio/index'
import StarIcon from 'icon/starIcon'

const stories = storiesOf('Radio', module)
stories.addDecorator(withKnobs)

stories.add(
  'Default',
  withInfo('')(() => (
    <RadioGroup name="radioName" onChange={action('changed')}>
      <Radio value="radioValue1">{text('label', 'Choice 1')}</Radio>
      <Radio value="radioValue2">{text('label', 'Choice 2')}</Radio>
      <Radio value="radioValue3">{text('label', 'Choice 3')}</Radio>
    </RadioGroup>
  )),
)

stories.add(
  'With secondary info',
  withInfo('')(() => (
    <RadioGroup name="radioName" onChange={action('changed')}>
      <Radio value="radioValue1">{text('label', 'Choice 1')}</Radio>
      <Radio value="radioValue2" subLabel="Secondary info">
        {text('label', 'Choice 2')}
      </Radio>
      <Radio value="radioValue3" subLabel="Secondary info">
        {text('label', 'Choice 3')}
      </Radio>
    </RadioGroup>
  )),
)

stories.add(
  'With recommended choice',
  withInfo('')(() => (
    <RadioGroup name="radioName" highlightedValue="radioValue2" onChange={action('changed')}>
      <Radio value="radioValue1" subLabel="Secondary info">
        {text('label', 'Choice 1')}
      </Radio>
      <Radio value="radioValue2" subLabel="Secondary info">
        {text('label', 'Choice 2')}
      </Radio>
      <Radio value="radioValue3" subLabel="Secondary info">
        {text('label', 'Choice 3')}
      </Radio>
    </RadioGroup>
  )),
)

stories.add(
  'With icon',
  withInfo('')(() => (
    <RadioGroup name="radioName" onChange={action('changed')}>
      <Radio value="radioValue1" icon={<StarIcon />}>
        {text('label', 'Choice 1')}
      </Radio>
      <Radio value="radioValue2" icon={<StarIcon />}>
        {text('label', 'Choice 2')}
      </Radio>
      <Radio value="radioValue3" icon={<StarIcon />}>
        {text('label', 'Choice 3')}
      </Radio>
    </RadioGroup>
  )),
)

stories.add(
  'With loading state',
  withInfo('')(() => (
    <RadioGroup
      name="radioName"
      onChange={action('changed')}
      status={select('status', Radio.STATUS, Radio.STATUS.DEFAULT)}
    >
      <Radio value="radioValue1">{text('label', 'Choice 1')}</Radio>
      <Radio value="radioValue2">{text('label', 'Choice 2')}</Radio>
      <Radio value="radioValue3">{text('label', 'Choice 3')}</Radio>
    </RadioGroup>
  )),
)

stories.add(
  'With declared style',
  withInfo('')(() => (
    <RadioGroup
      name="radioName"
      onChange={action('changed')}
      status={select('status', Radio.STATUS, Radio.STATUS.DEFAULT)}
    >
      <Radio value="radioValue1" declared checked>
        {text('label', 'Choice 1')}
      </Radio>
      <Radio value="radioValue2" declared>
        {text('label', 'Choice 2')}
      </Radio>
      <Radio value="radioValue3" declared>
        {text('label', 'Choice 3')}
      </Radio>
    </RadioGroup>
  )),
)
