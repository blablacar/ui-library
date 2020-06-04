import React from 'react'
import { shallow } from 'enzyme'

import { MarketingMessage } from './MarketingMessage'

it('should render a basic marketing conversation message', () => {
  const message = shallow(
    <MarketingMessage>
      <span>message marketing</span>
    </MarketingMessage>,
  )
  expect(message.text()).toContain('message marketing')
})
