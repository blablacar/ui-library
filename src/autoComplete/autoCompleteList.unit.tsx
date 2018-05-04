import React from 'react'
import AutoCompleteList from './autoCompleteList'

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

  it('Renders items with a custom renderer', () => {
    const CustomItem = jest.fn(({ item }) => <h1>{item.title}</h1>)
    const wrapper = mount(<AutoCompleteList {...defaultProps} renderItem={CustomItem} />)
    expect(wrapper.find('h1')).toHaveLength(2)
    expect(CustomItem).toHaveBeenCalledTimes(2)
  })

  it('Renders items with a custom className', () => {
    const customClassName = 'custom-class'
    const wrapper = mount(<AutoCompleteList {...defaultProps} itemClassName={customClassName} />)
    expect(wrapper.find('li').every(`.${customClassName}`)).toBe(true)
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

  describe('#loadingItemIndex', () => {
    it('Can display an AutoCompleteListItem in loading state', () => {
      const wrapper = shallow(<AutoCompleteList {...defaultProps} loadingItemIndex={0} />)
      expect(wrapper.find('AutoCompleteListItem').first().prop('loading')).toBe(true)
      expect(wrapper.find('AutoCompleteListItem').last().prop('loading')).toBe(false)
    })

    it('Can display an AutoCompleteListItem in valid state', () => {
      const wrapper = shallow(<AutoCompleteList {...defaultProps} loadingItemIndex={0} valid />)
      expect(wrapper.find('AutoCompleteListItem').first().prop('valid')).toBe(true)
      expect(wrapper.find('AutoCompleteListItem').last().prop('valid')).toBe(false)
    })

    it('Can trigger validated callback', () => {
      const event = jest.fn()
      const wrapper = mount(<AutoCompleteList
        {...defaultProps}
        loadingItemIndex={0}
        validated={event}
      />)

      wrapper.setProps({ valid: true })
      expect(event).not.toBeCalled()
      jest.advanceTimersByTime(1500)
      expect(event).toBeCalled()
    })
  })
})
