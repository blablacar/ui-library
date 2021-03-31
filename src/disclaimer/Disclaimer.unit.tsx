import React from 'react'
import { mount } from 'enzyme'

import { Button } from '../button'
import { InfoIcon } from '../icon/infoIcon'
import { QuestionIcon } from '../icon/questionIcon'
import { Disclaimer } from './Disclaimer'

const disclaimerContent = 'Disclaimer content'

describe('Disclaimer', () => {
  it('Should render the disclaimer with Info icon', () => {
    const wrapper = mount(<Disclaimer icon={<InfoIcon />}>{disclaimerContent}</Disclaimer>)
    expect(wrapper.text()).toBe('Disclaimer content')
    expect(wrapper.find(InfoIcon).exists()).toBe(true)
  })

  it('Should render the deprecated question mark icon link disclaimer', () => {
    const wrapper = mount(
      <Disclaimer deprecatedHelpUrl="http://google.fr">{disclaimerContent}</Disclaimer>,
    )
    expect(wrapper.text()).toBe('Disclaimer content')

    const button = wrapper.find(Button)
    expect(button.exists()).toBe(true)
    expect(button.find(QuestionIcon).exists()).toBe(true)
    expect(button.prop('href')).toBe('http://google.fr')
  })

  it('Should render the disclaimer without icon', () => {
    const wrapper = mount(<Disclaimer>{disclaimerContent}</Disclaimer>)
    expect(wrapper.text()).toBe('Disclaimer content')
    expect(wrapper.find(InfoIcon).exists()).toBe(false)
  })

  it('Should render a HTML disclaimer', () => {
    const htmlDisclaimer = (
      <span>
        Disclaimer content <Button>link</Button>
      </span>
    )
    const wrapper = mount(<Disclaimer>{htmlDisclaimer}</Disclaimer>)
    expect(wrapper.text()).toBe('Disclaimer content link')
    expect(wrapper.find(InfoIcon).exists()).toBe(false)
    expect(wrapper.find(Button).exists()).toBe(true)
  })
})
