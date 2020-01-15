import React from 'react'
import { shallow } from 'enzyme'

import Bullet, { BulletTypes } from './Bullet'

it('Should render a Bullet with "default" type if not specified', () => {
  const wrapper = shallow(<Bullet />)
  expect(wrapper.find('div').hasClass('kirk-bullet--default')).toBe(true)
})

it('Should render a Bullet with "addon" type', () => {
  const wrapper = shallow(<Bullet type={BulletTypes.ADDON} />)
  expect(wrapper.find('div').hasClass('kirk-bullet--addon')).toBe(true)
})
