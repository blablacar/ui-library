import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { action } from '@storybook/addon-actions'
import { withKnobs, boolean } from '@storybook/addon-knobs'

import ItemChoice from 'itemChoice'
import StarIcon from 'icon/starIcon'

const stories = storiesOf('ItemChoice', module)
stories.addDecorator(withKnobs)

stories.add(
  'Default',
  withInfo('')(() => (
    <div>
      <ItemChoice
        label="Choice 1"
        highlighted={boolean('highlighted', false)}
        selected={boolean('selected', false)}
        disabled={boolean('disabled', false)}
        onClick={action('onClick')}
        className="toto"
      />
      <ItemChoice label="Choice 2 – A title that is so long it takes 2 lines of text" />
    </div>
  )),
)

stories.add(
  'With loading state',
  withInfo('')(() => (
    <div>
      <ItemChoice label="Choice 1" status={ItemChoice.STATUS.LOADING} />
      <ItemChoice
        label="Choice 2"
        status={ItemChoice.STATUS.CHECKED}
        onDoneAnimationEnd={() => action('animation done')}
      />
    </div>
  )),
)

stories.add(
  'With secondary info',
  withInfo('')(() => (
    <div>
      <ItemChoice label="Choice 1" subLabel="Secondary info" />
      <ItemChoice label="Choice 2" subLabel="Secondary info" />
      <ItemChoice
        label="Choice 3"
        subLabel="Secondary info – A secondary info that is so long it takes 2 lines of text"
      />
    </div>
  )),
)

stories.add(
  'With recommended choice',
  withInfo('')(() => (
    <div>
      <ItemChoice label="Choice 1" subLabel="Secondary info" />
      <ItemChoice label="Choice 2" subLabel="Secondary info" highlighted />
      <ItemChoice label="Choice 3" subLabel="Secondary info" />
    </div>
  )),
)

stories.add(
  'With left addon',
  withInfo('')(() => (
    <div>
      <ItemChoice label="Choice 1" subLabel="Secondary info" leftAddon={<StarIcon />} />
      <ItemChoice label="Choice 1" subLabel="Secondary info" leftAddon={<StarIcon />} />
    </div>
  )),
)

stories.add(
  'With right addon',
  withInfo('')(() => (
    <div>
      <ItemChoice label="Choice 1" subLabel="Secondary info" rightAddon={<StarIcon />} />
      <ItemChoice label="Choice 1" subLabel="Secondary info" rightAddon="Info" />
    </div>
  )),
)

stories.add(
  'With basic link',
  withInfo('')(() => (
    <div>
      <ItemChoice label="Choice 1" href="#anchor" />
      <ItemChoice label="Choice 2" href="#anchor" />
    </div>
  )),
)

stories.add(
  'With custom tag component',
  withInfo('')(() => (
    <div>
      <ItemChoice label="Button tag" href={<button type="button" />} />
      <ItemChoice label="Link tag" href={<a href="#anchor4" />} />
    </div>
  )),
)
