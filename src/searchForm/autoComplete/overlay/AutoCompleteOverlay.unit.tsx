import React from 'react'
import { shallow, mount } from 'enzyme'
import AutoComplete from 'autoComplete'
import AutoCompleteOverlay from './AutoCompleteOverlay'
import Bullet from 'bullet'
import Divider from 'divider'
import Loader from 'loader'

const initialFakeItems = [
  { id: '1', label: 'title1', labelInfo: 'description1' },
  { id: '2', label: 'title2', labelInfo: 'description2' },
]

const fakeSearchForItems = () => initialFakeItems.slice()

describe('AutoCompleteOverlay', () => {
  it('should contains an AutoComplete component', () => {
    const wrapper = shallow(<AutoCompleteOverlay />)
    expect(wrapper.find(AutoComplete).prop('inputAddon')).toBeDefined()

    const inputAddonWrapper = shallow(wrapper.find(AutoComplete).prop('inputAddon'))
    expect(inputAddonWrapper.find(Bullet).length).toEqual(1)
  })

  it('should display AutoCompleteList and Divider', () => {
    const wrapper = mount(<AutoCompleteOverlay defaultValue="Paris" />)
    wrapper.setProps({ isSearching: true })
    wrapper.setProps({ items: fakeSearchForItems(), isSearching: false })

    expect(wrapper.find('AutoCompleteList').prop('visible')).toBe(true)
    expect(wrapper.find(Divider)).toHaveLength(1)
  })

  it('should display Loader and then hide it when list is loaded', () => {
    const wrapper = mount(<AutoCompleteOverlay defaultValue="Paris" />)
    wrapper.setProps({ isSearching: true })

    expect(wrapper.find(Loader)).toHaveLength(1)
    wrapper.setProps({ items: fakeSearchForItems(), isSearching: false })
    expect(wrapper.find(Loader)).toHaveLength(0)
    expect(wrapper.find('AutoCompleteList').prop('visible')).toBe(true)
  })
})
