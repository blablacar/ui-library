import React from 'react'
import { mount, shallow } from 'enzyme'

import { ItemChoice, ItemChoiceStatus } from '../itemChoice'
import { AutoCompleteList } from './AutoCompleteList'

const fakeItems = [
  { label: 'title1', labelInfo: 'description1' },
  { label: 'title2', labelInfo: 'description2' },
]

const defaultProps = {
  name: 'cities',
  items: fakeItems,
  visible: true,
}

const fakeKeyboardEvent = (key, keyCode) => ({ key, keyCode, preventDefault: () => {} })
const fakeKeyboardEventArrowDown = () => fakeKeyboardEvent('ArrowDown', 40)
const fakeKeyboardEventArrowUp = () => fakeKeyboardEvent('ArrowUp', 38)
const fakeKeyboardEventArrowEnter = () => fakeKeyboardEvent('Enter', 13)

jest.useFakeTimers()

describe('AutoCompleteList', () => {
  it('Renders `null` if not visible', () => {
    const wrapper = shallow(<AutoCompleteList {...defaultProps} visible={false} />)
    expect(wrapper.html()).toBeNull()
  })

  it('Renders `null` if no items', () => {
    const wrapper = shallow(<AutoCompleteList {...defaultProps} items={[]} />)
    expect(wrapper.html()).toBeNull()
  })

  it('Renders all list items', () => {
    const wrapper = mount(<AutoCompleteList {...defaultProps} />)
    expect(wrapper.find('li')).toHaveLength(2)
  })

  it('Renders `maxItems` list items', () => {
    const wrapper = mount(<AutoCompleteList {...defaultProps} maxItems={1} />)
    expect(wrapper.find('li')).toHaveLength(1)
  })

  it('Renders items with a custom className', () => {
    const customClassName = 'custom-class'
    const wrapper = mount(<AutoCompleteList {...defaultProps} itemClassName={customClassName} />)
    expect(wrapper.find(ItemChoice).every(`.${customClassName}`)).toBe(true)
  })

  describe('Keyboard navigation', () => {
    it('Can navigate with `down` arrow key', () => {
      const wrapper = shallow(<AutoCompleteList {...defaultProps} />)

      wrapper.instance().handleKeydown(fakeKeyboardEventArrowDown())
      expect(wrapper.state('highlightedIndex')).toBe(0)
      wrapper.instance().handleKeydown(fakeKeyboardEventArrowDown())
      expect(wrapper.state('highlightedIndex')).toBe(1)
      wrapper.instance().handleKeydown(fakeKeyboardEventArrowDown())
      expect(wrapper.state('highlightedIndex')).toBe(0)
    })

    it('Can navigate with `up` arrow key', () => {
      const wrapper = shallow(<AutoCompleteList {...defaultProps} />)

      wrapper.instance().handleKeydown(fakeKeyboardEventArrowUp())
      expect(wrapper.state('highlightedIndex')).toBe(1)
      wrapper.instance().handleKeydown(fakeKeyboardEventArrowUp())
      expect(wrapper.state('highlightedIndex')).toBe(0)
      wrapper.instance().handleKeydown(fakeKeyboardEventArrowUp())
      expect(wrapper.state('highlightedIndex')).toBe(1)
    })

    it('Can select an item with `enter` key', () => {
      const onSelectSpy = jest.fn()
      const wrapper = shallow(<AutoCompleteList {...defaultProps} onSelect={onSelectSpy} />)

      wrapper.instance().handleKeydown(fakeKeyboardEventArrowEnter())
      expect(onSelectSpy).not.toHaveBeenCalled()
      wrapper.instance().handleKeydown(fakeKeyboardEventArrowDown())
      wrapper.instance().handleKeydown(fakeKeyboardEventArrowEnter())
      expect(onSelectSpy).toHaveBeenCalledWith(fakeItems[0])
    })
  })

  describe('#selectedItemStatus', () => {
    it('displays an ItemChoice in loading state', () => {
      const onSelectSpy = jest.fn()
      const wrapper = shallow(
        <AutoCompleteList
          {...defaultProps}
          onSelect={onSelectSpy}
          selectedItemStatus={ItemChoiceStatus.LOADING}
        />,
      )

      wrapper.instance().handleKeydown(fakeKeyboardEventArrowDown())
      wrapper.instance().handleKeydown(fakeKeyboardEventArrowEnter())

      expect(wrapper.state().selectedIndex).toBe(0)
    })
  })
})
