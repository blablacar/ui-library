import React from 'react'
import { shallow, mount } from 'enzyme'
import AutoComplete from 'autoComplete'
import AutoCompleteSection from './AutoCompleteSection'
import ChevronIcon from 'icon/chevronIcon'
import Divider from 'divider'

const initialFakeItems = [
  { id: '1', label: 'title1', labelInfo: 'description1' },
  { id: '2', label: 'title2', labelInfo: 'description2' },
]

const fakeSearchForItems = () => initialFakeItems.slice()

describe('AutoCompleteSection', () => {
  it('should contains an AutoComplete component', () => {
    const wrapper = shallow(<AutoCompleteSection />)
    expect(wrapper.find(AutoComplete).prop('inputAddon')).toBeDefined()

    const inputAddonWrapper = shallow(wrapper.find(AutoComplete).prop('inputAddon'))
    expect(inputAddonWrapper.find(ChevronIcon).length).toEqual(1)
  })

  it('should display AutoCompleteList and Divider', () => {
    const wrapper = mount(<AutoCompleteSection defaultValue="Paris" />)
    wrapper.setProps({ isSearching: true })
    wrapper.setProps({ items: fakeSearchForItems(), isSearching: false })

    expect(wrapper.find('AutoCompleteList').prop('visible')).toBe(true)
    expect(wrapper.find(Divider)).toHaveLength(1)
  })
})
