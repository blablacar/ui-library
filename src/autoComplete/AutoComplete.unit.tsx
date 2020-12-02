import React from 'react'
import { mount, shallow } from 'enzyme'

import { ItemStatus } from '../_internals/item'
import { ItemChoice } from '../itemChoice'
import { ItemInfo } from '../itemInfo'
import { AutoComplete } from './AutoComplete'

const initialFakeItems = [
  { id: '1', label: 'title1', labelInfo: 'description1' },
  { id: '2', label: 'title2', labelInfo: 'description2' },
]

// Returns an array with a new reference
const fakeSearchForItems = () => initialFakeItems.slice()

const defaultProps = {
  name: 'cities',
  items: initialFakeItems,
  searchOnMount: true,
  isSearching: false,
  searchForItems: fakeSearchForItems,
  searchForItemsMinChars: 1,
  debounceTimeout: 0,
}

jest.useFakeTimers()

describe('AutoComplete', () => {
  it('Renders no result items when mouting', () => {
    const wrapper = mount(<AutoComplete {...defaultProps} />)
    expect(wrapper.find('AutoCompleteList').prop('visible')).toBe(false)
  })

  it('Disable native browser autocomplete', () => {
    const wrapper = mount(<AutoComplete {...defaultProps} />)
    expect(wrapper.find('TextField').prop('autoComplete')).toBe('off')
  })

  it('Renders result items when items prop has changed', () => {
    const wrapper = mount(<AutoComplete {...defaultProps} searchForItemsMinChars={1} />)
    const autocomplete: AutoComplete = wrapper.instance()
    autocomplete.onInputChange({ value: 'Lyon' })
    wrapper.setProps({ isSearching: true })
    wrapper.setProps({ items: fakeSearchForItems(), isSearching: false })
    expect(wrapper.find('AutoCompleteList').prop('visible')).toBe(true)
    wrapper.setProps({ showList: false })
    expect(wrapper.find('AutoCompleteList').prop('visible')).toBe(false)
  })

  it('Renders with a custom className', () => {
    const customClassName = 'my-search'
    const wrapper = shallow(<AutoComplete {...defaultProps} className={customClassName} />)
    expect(wrapper.hasClass(customClassName)).toBe(true)
  })

  it('Renders a title on the close button', () => {
    const wrapper = mount(
      <AutoComplete {...defaultProps} defaultValue="default" buttonTitle="buttonTitle" />,
    )
    expect(wrapper.find('button').prop('title')).toBe('buttonTitle')
  })

  it('Can trigger onDoneAnimationEnd callback', () => {
    const event = jest.fn()
    const wrapper = mount(
      <AutoComplete
        {...defaultProps}
        onDoneAnimationEnd={event}
        selectedItemStatus={ItemStatus.CHECKED}
      />,
    )
    wrapper.instance().onInputChange({ value: 'title' })

    const items = fakeSearchForItems()
    wrapper.setProps({ isSearching: true })
    wrapper.setProps({ items, isSearching: false })
    wrapper
      .find(ItemChoice)
      .first()
      .simulate('click')

    expect(event).not.toBeCalled()
    jest.advanceTimersByTime(3000)
    expect(event).toBeCalled()
  })

  describe('#maxItems', () => {
    it('Renders only `maxItems` when specified', () => {
      const wrapper = mount(<AutoComplete {...defaultProps} maxItems={1} />)
      wrapper.instance().onInputChange({ value: 'title' })

      wrapper.setProps({ isSearching: true })
      wrapper.setProps({ items: fakeSearchForItems(), isSearching: false })
      expect(wrapper.find('li')).toHaveLength(1)
    })
  })

  describe('#searchForItemsMinChars', () => {
    it('Do search for items when typed at least `searchForItemsMinChars` chars', () => {
      const query = 'Lyon'
      const searchForItemsSpy = jest.fn()
      const wrapper = shallow(
        <AutoComplete
          {...defaultProps}
          searchForItems={searchForItemsSpy}
          searchForItemsMinChars={1}
        />,
      )

      const autocomplete: AutoComplete = wrapper.instance()
      autocomplete.onInputChange({ value: query })

      expect(searchForItemsSpy).toHaveBeenCalledWith(query)
    })

    it('Do not search for items when typed less than `searchForItemsMinChars` chars', () => {
      const query = 'a'
      const searchForItemsSpy = jest.fn()
      const wrapper = shallow(
        <AutoComplete
          {...defaultProps}
          searchForItems={searchForItemsSpy}
          searchForItemsMinChars={3}
        />,
      )

      const autocomplete: AutoComplete = wrapper.instance()
      autocomplete.onInputChange({ value: query })

      expect(searchForItemsSpy).not.toHaveBeenCalled()
    })
  })

  describe('#renderNoResults', () => {
    it('Renders an empty state when no results', () => {
      const renderNoResults = jest.fn(() => 'No results found')
      const wrapper = mount(<AutoComplete {...defaultProps} renderNoResults={renderNoResults} />)

      const query = 'Lyon'
      const autocomplete: AutoComplete = wrapper.instance()
      autocomplete.onInputChange({ value: query })
      wrapper.setProps({ isSearching: true })
      wrapper.setProps({ items: [], isSearching: false })

      expect(wrapper.find('AutoCompleteList').prop('visible')).toBe(false)
      expect(wrapper.find(ItemInfo)).toHaveLength(1)
      expect(wrapper.find(ItemInfo).prop('mainInfo')).toBe('No results found')
      expect(renderNoResults).toHaveBeenCalledWith({ query })
      wrapper.setProps({ showList: false })
      expect(wrapper.find(ItemInfo)).toHaveLength(0)
    })

    it('Renders no results with a custom className', () => {
      const bodyClassName = 'custom'
      const wrapper = shallow(<AutoComplete {...defaultProps} bodyClassName={bodyClassName} />)

      const query = 'Lyon'
      const autocomplete: AutoComplete = wrapper.instance()
      autocomplete.onInputChange({ value: query })
      wrapper.setProps({ isSearching: true })
      wrapper.setProps({ items: [], isSearching: false })

      expect(wrapper.find(`.${bodyClassName}`).exists()).toBe(true)
    })
  })

  describe('#renderBusy', () => {
    const busyTimeout = 1
    it('Renders a busy state after `busyTimeout` milliseconds', () => {
      const wrapper = mount(
        <AutoComplete
          {...defaultProps}
          busyTimeout={busyTimeout}
          renderBusy={() => <div className="busy" />}
        />,
      )

      expect(wrapper.state('busy')).toBe(false)
      wrapper.instance().onInputChange({ value: 'Lyon' })

      // Fast forward and exhaust only currently pending timers
      jest.runOnlyPendingTimers()

      wrapper.update()
      expect(wrapper.state('busy')).toBe(true)
      expect(wrapper.find('.busy')).toHaveLength(1)
      wrapper.setProps({ showList: false })
      expect(wrapper.find('.busy')).toHaveLength(0)
    })
  })

  describe('renderEmptySearch', () => {
    const emptySearch = [
      { id: '1', title: 'title1', description: 'description1' },
      { id: '2', title: 'title2', description: 'description2' },
      { id: '3', title: 'title3', description: 'description3' },
    ]
    it('renders empty search when query is lower than minChar', () => {
      const wrapper = mount(
        <AutoComplete
          {...defaultProps}
          renderEmptySearch={emptySearch}
          renderBusy={() => <div className="busy" />}
        />,
      )

      expect(wrapper.find('li')).toHaveLength(emptySearch.length)
    })

    it('renders the result list when query is greater than minChar', () => {
      const wrapper = mount(
        <AutoComplete
          {...defaultProps}
          renderEmptySearch={emptySearch}
          renderBusy={() => <div className="busy" />}
        />,
      )
      wrapper.instance().onInputChange({ value: 'Lyon' })
      wrapper.setProps({ isSearching: true })
      wrapper.setProps({ items: fakeSearchForItems(), isSearching: false })

      expect(wrapper.find('li')).toHaveLength(initialFakeItems.length)
    })

    it('empties the result list when setting a new defaultValue', () => {
      const initialDefaultValue = 'initialDefaultValue'
      const wrapper = mount(
        <AutoComplete
          {...defaultProps}
          defaultValue={initialDefaultValue}
          renderEmptySearch={emptySearch}
          renderBusy={() => <div className="busy" />}
        />,
      )
      wrapper.instance().onInputChange({ value: 'Lyon' })
      wrapper.setProps({ isSearching: true })
      wrapper.setProps({ items: fakeSearchForItems(), isSearching: false })

      expect(wrapper.find('li')).toHaveLength(initialFakeItems.length)

      wrapper.setProps({ defaultValue: 'pouet' })
      expect(wrapper.find('li')).toHaveLength(0)
    })
  })

  describe('#onInputChange', () => {
    it('Invokes `onInputChange` when typing text in TextField', () => {
      const onInputChange = jest.fn()
      const wrapper = mount(<AutoComplete {...defaultProps} onInputChange={onInputChange} />)
      const value = 'ab'
      wrapper.find('input').simulate('change', { target: { value } })
      expect(onInputChange).toHaveBeenCalledWith({ value })
    })
  })

  describe('#onSelect', () => {
    it('Invokes `onSelect` when selecting a result item', () => {
      const onSelectSpy = jest.fn()
      const wrapper = mount(<AutoComplete {...defaultProps} onSelect={onSelectSpy} />)
      wrapper.instance().onInputChange({ value: 'title' })

      const items = fakeSearchForItems()
      wrapper.setProps({ isSearching: true })
      wrapper.setProps({ items, isSearching: false })
      wrapper
        .find(ItemChoice)
        .first()
        .simulate('click')
      expect(onSelectSpy).toHaveBeenCalledWith({
        name: defaultProps.name,
        value: items[0].label,
        item: items[0],
      })
    })
  })

  describe('#onClear', () => {
    it("Invokes `onClear` when clearing the field's value", () => {
      const onClear = jest.fn()
      const wrapper = mount(
        <AutoComplete {...defaultProps} defaultValue="test" onClear={onClear} />,
      )
      wrapper.find('button').simulate('click')
      expect(onClear).toHaveBeenCalledTimes(1)
    })
  })

  describe('#getItemValue', () => {
    it('Can use a custom `getItemValue` when selecting a result item', () => {
      const onSelectSpy = jest.fn()
      const wrapper = mount(
        <AutoComplete {...defaultProps} onSelect={onSelectSpy} getItemValue={item => item.id} />,
      )
      wrapper.instance().onInputChange({ value: 'title' })

      const items = fakeSearchForItems()
      wrapper.setProps({ isSearching: true })
      wrapper.setProps({ items, isSearching: false })
      wrapper
        .find('ItemChoice')
        .first()
        .simulate('click')
      expect(onSelectSpy).toHaveBeenCalledWith({
        name: defaultProps.name,
        value: items[0].id,
        item: items[0],
      })
    })
  })

  describe('#renderQuery', () => {
    it('Can use a custom `renderQuery` when selecting a result item', () => {
      const wrapper = mount(<AutoComplete {...defaultProps} renderQuery={item => item.id} />)
      wrapper.instance().onInputChange({ value: 'title' })

      const items = fakeSearchForItems()
      // Simulate a "searchForItems" cycle by passing `isSearching` from `true` to `false`
      wrapper.setProps({ isSearching: true })
      wrapper.setProps({ items, isSearching: false })

      // Simulate the selection of the first list item
      wrapper
        .find('ItemChoice')
        .first()
        .simulate('click')
      expect(wrapper.find('TextField').prop('defaultValue')).toBe(items[0].id)
    })
  })

  describe('#focus', () => {
    it('Can add focus to TextField', () => {
      const wrapper = mount(<AutoComplete {...defaultProps} focus />)
      expect(wrapper.find('TextField').prop('focus')).toBe(true)
    })
    it('Should not add border focus on Textfield', () => {
      const wrapper = mount(<AutoComplete {...defaultProps} />)
      expect(wrapper.find('TextField').prop('focusBorder')).toBe(false)
    })
  })

  describe('#autoCorrect', () => {
    it('Can set autoCorrect attribute on TextField', () => {
      const wrapper = mount(<AutoComplete {...defaultProps} />)
      expect(wrapper.find('TextField').prop('autoCorrect')).toBe('off')
      wrapper.setProps({ autoCorrect: 'on' })
      expect(wrapper.find('TextField').prop('autoCorrect')).toBe('on')
    })
  })

  describe('#disabled', () => {
    it('Can set disabled attribute on TextField', () => {
      const wrapper = mount(<AutoComplete {...defaultProps} />)
      expect(wrapper.find('TextField').prop('disabled')).toBe(false)
      wrapper.setProps({ disabled: true })
      expect(wrapper.find('TextField').prop('disabled')).toBe(true)
    })
  })

  describe('#readOnly', () => {
    it('Can set readOnly attribute on TextField', () => {
      const wrapper = mount(<AutoComplete {...defaultProps} />)
      expect(wrapper.find('TextField').prop('readOnly')).toBe(false)
      wrapper.setProps({ readOnly: true })
      expect(wrapper.find('TextField').prop('readOnly')).toBe(true)
    })
  })

  describe('#required', () => {
    it('Can set required attribute on TextField', () => {
      const wrapper = mount(<AutoComplete {...defaultProps} />)
      expect(wrapper.find('TextField').prop('required')).toBe(false)
      wrapper.setProps({ required: true })
      expect(wrapper.find('TextField').prop('required')).toBe(true)
    })
  })

  describe('#defaultValue', () => {
    const initialDefaultValue = 'initialDefaultValue'
    it('Can have a default value in TextField when mouting', () => {
      const wrapper = mount(<AutoComplete {...defaultProps} defaultValue={initialDefaultValue} />)
      expect(wrapper.find('TextField').prop('defaultValue')).toBe(initialDefaultValue)
    })

    it('Can update the textfield value when getting a new default value', () => {
      const wrapper = mount(<AutoComplete {...defaultProps} defaultValue={initialDefaultValue} />)
      expect(wrapper.find('TextField').prop('defaultValue')).toBe(initialDefaultValue)

      // Simulate a user typing in the textfield
      wrapper.instance().onInputChange({ value: 'abc' })
      expect(wrapper.find('TextField').state('value')).toBe('abc')

      // Simulate a new defaultValue being passed to autoComplete
      const newDefaultValue = 'coincoin'
      wrapper.setProps({ defaultValue: newDefaultValue })
      expect(wrapper.find('TextField').state('value')).toBe(newDefaultValue)

      // Simulate a user typing in the textfield again
      wrapper.instance().onInputChange({ value: 'a' })
      expect(wrapper.find('TextField').state('value')).toBe('a')
    })

    it('uses the default value to search for items when mouting', () => {
      const searchForItems = jest.fn()
      shallow(
        <AutoComplete
          {...defaultProps}
          defaultValue={initialDefaultValue}
          searchForItems={searchForItems}
        />,
      )
      expect(searchForItems).toHaveBeenCalledWith(initialDefaultValue)
    })

    it('Does not trigger a search when mounting with a default value in TextField', () => {
      const searchForItems = jest.fn()
      shallow(
        <AutoComplete
          {...defaultProps}
          defaultValue={initialDefaultValue}
          searchForItems={searchForItems}
          searchOnMount={false}
        />,
      )
      expect(searchForItems).not.toHaveBeenCalled()
    })
  })

  describe('#debounceTimeout', () => {
    it('Do not limit the number of calls to `searchForItems` without `debounceTimeout`', () => {
      const searchForItemsSpy = jest.fn()
      const wrapper = shallow(
        <AutoComplete {...defaultProps} searchForItems={searchForItemsSpy} debounceTimeout={0} />,
      )

      const autocomplete: AutoComplete = wrapper.instance()
      autocomplete.onInputChange({ value: 'abc' })
      autocomplete.onInputChange({ value: 'abcd' })

      expect(searchForItemsSpy).toHaveBeenCalledTimes(2)
      expect(searchForItemsSpy).toHaveBeenCalledWith('abc')
      expect(searchForItemsSpy).toHaveBeenCalledWith('abcd')
    })

    it('Do limit the number of calls to `searchForItems` with `debounceTimeout`', () => {
      const searchForItemsSpy = jest.fn()
      const wrapper = shallow(
        <AutoComplete {...defaultProps} searchForItems={searchForItemsSpy} debounceTimeout={100} />,
      )

      const autocomplete: AutoComplete = wrapper.instance()
      autocomplete.onInputChange({ value: 'abc' })
      autocomplete.onInputChange({ value: 'abcd' })

      jest.runAllTimers()
      expect(searchForItemsSpy).toHaveBeenCalledTimes(1)
      expect(searchForItemsSpy).toHaveBeenCalledWith('abcd')
    })
  })
})
