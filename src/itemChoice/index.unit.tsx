import React from 'react'
import ItemChoice from 'itemChoice'
import Loader from 'loader'
import CrossIcon from 'icon/crossIcon'

jest.useFakeTimers()

describe('ItemChoice', () => {
  it('Should render a React element passed as children', () => {
    const wrapper = shallow(<ItemChoice><CrossIcon /></ItemChoice>)
    expect(wrapper.find(CrossIcon).exists()).toBe(true)
  })

  it('Should accept a custom `className`', () => {
    const customClassName = 'custom'
    const wrapper = shallow(<ItemChoice className={customClassName}>...</ItemChoice>)
    expect(wrapper.hasClass(customClassName)).toBe(true)
  })

  describe('#href', () => {
    it('Should render a <li> by default', () => {
      const wrapper = shallow(<ItemChoice>...</ItemChoice>)
      expect(wrapper.type()).toBe('li')
    })

    it('Should render as a link if given a simple url', () => {
      const href = '#anchor'
      const wrapper = shallow(<ItemChoice href={href}>...</ItemChoice>)
      expect(wrapper.type()).toBe('a')
      expect(wrapper.props().href).toBe('#anchor')
    })

    it('Should render as any given tag, and merge props and class names', () => {
      const href = <a className="customClassName" href="#anchor" />
      const wrapper = shallow(<ItemChoice href={href}>...</ItemChoice>)
      expect(wrapper.type()).toBe('a')
      expect(wrapper.props().className).toContain('customClassName')
      expect(wrapper.props().href).toBe('#anchor')
    })
  })

  describe('#loading', () => {
    it('Should not have a loading state by default', () => {
      const wrapper = shallow(<ItemChoice>...</ItemChoice>)
      expect(wrapper.find(Loader).exists()).toBe(false)
    })

    it('Should have a loading state', () => {
      const wrapper = shallow(<ItemChoice loading>...</ItemChoice>)
      expect(wrapper.find(Loader).exists()).toBe(true)
    })
  })

  describe('#valid', () => {
    it('Should not have a valid state by default', () => {
      const wrapper = shallow(<ItemChoice>...</ItemChoice>)
      expect(wrapper.find('.kirk-itemChoice-checkmark').exists()).toBe(false)
    })

    it('Should have a valid state', () => {
      const wrapper = shallow(<ItemChoice valid>...</ItemChoice>)
      expect(wrapper.find('.kirk-itemChoice-checkmark').exists()).toBe(true)
    })

    it('fires the callback event when valid', () => {
      const event = jest.fn()
      const wrapper = mount(<ItemChoice validated={event}>blabla</ItemChoice>)
      wrapper.setProps({ valid: true })
      expect(event).not.toBeCalled()
      jest.advanceTimersByTime(1500)
      expect(event).toBeCalled()
    })
  })

  describe('#highlighted', () => {
    it('Should not have a highlighted state by default', () => {
      const wrapper = shallow(<ItemChoice>...</ItemChoice>)
      expect(wrapper.hasClass('kirk-itemChoice--highlighted')).toBe(false)
    })

    it('Should have a highlighted state', () => {
      const wrapper = shallow(<ItemChoice highlighted>...</ItemChoice>)
      expect(wrapper.hasClass('kirk-itemChoice--highlighted')).toBe(true)
    })
  })

  describe('#selected', () => {
    it('Should not have a selected state by default', () => {
      const wrapper = shallow(<ItemChoice>...</ItemChoice>)
      expect(wrapper.prop('aria-selected')).toBe(false)
    })

    it('Should have a selected state', () => {
      const wrapper = shallow(<ItemChoice selected>...</ItemChoice>)
      expect(wrapper.prop('aria-selected')).toBe(true)
    })
  })

  describe('#leftAddon', () => {
    it('Render a left addon given a string', () => {
      const wrapper = shallow(<ItemChoice leftAddon="Info">...</ItemChoice>)
      expect(wrapper.find('.kirk-itemChoice-leftAddon').text()).toContain('Info')
    })

    it('Render a left addon given a React element', () => {
      const wrapper = shallow(<ItemChoice leftAddon={<CrossIcon />}>...</ItemChoice>)
      expect(wrapper.find(CrossIcon).exists()).toBe(true)
    })
  })

  describe('#rightAddon', () => {
    it('Render a right addon given a string', () => {
      const wrapper = shallow(<ItemChoice rightAddon="Info">...</ItemChoice>)
      expect(wrapper.find('.kirk-itemChoice-rightAddon').text()).toContain('Info')
    })

    it('Render a right addon given a React element', () => {
      const wrapper = shallow(<ItemChoice rightAddon={<CrossIcon />}>...</ItemChoice>)
      expect(wrapper.find(CrossIcon).exists()).toBe(true)
    })
  })
})
