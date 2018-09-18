import React from 'react'
import AutoCompleteList from './autoCompleteList'
import AutoCompleteListItem from './autoCompleteListItem'

const fakeItems = [
  { title: 'title1', description: 'description1' },
  { title: 'title2', description: 'description2' },
]

const defaultProps = {
  name: 'cities',
  items: fakeItems,
  renderItem: ({ item }) => <div>{item.title}</div>,
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
    expect(wrapper.find('li button').every(`.${customClassName}`)).toBe(true)
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
    it('displays an AutoCompleteListItem in loading state', () => {
      const onSelectSpy = jest.fn()
      const wrapper = shallow(
        <AutoCompleteList
          {...defaultProps}
          onSelect={onSelectSpy}
          selectedItemStatus={AutoCompleteListItem.STATUS.LOADING}
        />,
      )

      wrapper.instance().handleKeydown(fakeKeyboardEventArrowDown())
      wrapper.instance().handleKeydown(fakeKeyboardEventArrowEnter())

      expect(wrapper.state().selectedIndex).toBe(0)
    })
  })
})
