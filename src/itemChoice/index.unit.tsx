import React from 'react'
import ItemChoice, { ItemChoiceStatus } from 'itemChoice'
import Item from '_utils/item'
import Loader from 'loader'
import CrossIcon from 'icon/crossIcon'
import ChevronIcon from 'icon/chevronIcon'

jest.useFakeTimers()

describe('ItemChoice', () => {
  it('Should accept a custom `className`', () => {
    const wrapper = shallow(<ItemChoice className="custom" />)
    expect(wrapper.find(Item).hasClass('custom')).toBe(true)
  })

  describe('#href', () => {
    it('Should render as a link if given a simple url', () => {
      const wrapper = shallow(<ItemChoice href="#anchor" />)
      expect(wrapper.find(Item).prop('tag')).toEqual(<a href="#anchor" />)
    })

    it('Should render as any given tag', () => {
      const wrapper = shallow(<ItemChoice href={<button />} />)
      expect(wrapper.find(Item).prop('tag').type).toEqual('button')
    })
  })

  describe('#disabled', () => {
    it('Should render a div when disabled', () => {
      const wrapper = shallow(<ItemChoice href="#anchor" disabled />)
      expect(wrapper.find(Item).prop('tag').type).toEqual('div')
      expect(wrapper.find(Item).prop('tag').props['aria-disabled']).toEqual('true')
    })
  })

  describe('#loading', () => {
    it('Should not have a loading state by default', () => {
      const wrapper = shallow(<ItemChoice />)
      expect(wrapper.find(Item).prop('chevron').type).toBe(ChevronIcon)
    })

    it('Should have a loading state', () => {
      const wrapper = shallow(<ItemChoice status={ItemChoiceStatus.LOADING} />)
      expect(wrapper.find(Item).prop('chevron').type).toBe(Loader)
    })
  })

  describe('#valid', () => {
    it('Should not have a valid state by default', () => {
      const wrapper = shallow(<ItemChoice />)
      expect(wrapper.find(Loader).exists()).toBe(false)
    })

    it('Should have a valid state', () => {
      const wrapper = mount(<ItemChoice status={ItemChoiceStatus.CHECKED} />)
      expect(wrapper.find(Loader).exists()).toBe(true)
      expect(wrapper.find(Loader).prop('done')).toBe(true)
    })

    it('fires the callback event when valid', () => {
      const event = jest.fn()
      const wrapper = mount(<ItemChoice onDoneAnimationEnd={event} />)
      wrapper.setProps({ status: ItemChoiceStatus.CHECKED })
      expect(event).not.toBeCalled()
      jest.advanceTimersByTime(1500)
      expect(event).toBeCalled()
    })
  })

  describe('#selected', () => {
    it('Should not have a selected state by default', () => {
      const wrapper = shallow(<ItemChoice />)
      expect(wrapper.find(Item).prop('aria-selected')).toBe(false)
    })

    it('Should have a selected state', () => {
      const wrapper = shallow(<ItemChoice selected />)
      expect(wrapper.find(Item).prop('aria-selected')).toBe(true)
    })
  })

  describe('#leftAddon', () => {
    it('Render a left addon given a string', () => {
      const wrapper = shallow(<ItemChoice leftAddon="Info" />)
      expect(wrapper.find(Item).prop('leftAddon')).toEqual('Info')
    })

    it('Render a left addon given a React element', () => {
      const wrapper = shallow(<ItemChoice leftAddon={<CrossIcon />} />)
      expect(wrapper.find(Item).prop('leftAddon')).toEqual(<CrossIcon />)
    })
  })

  describe('#rightAddon', () => {
    it('Render a right addon given a string', () => {
      const wrapper = shallow(<ItemChoice rightAddon="Info" />)
      expect(wrapper.find(Item).prop('rightAddon')).toEqual('Info')
    })

    it('Render a right addon given a React element', () => {
      const wrapper = shallow(<ItemChoice rightAddon={<CrossIcon />} />)
      expect(wrapper.find(Item).prop('rightAddon')).toEqual(<CrossIcon />)
    })
  })
})
