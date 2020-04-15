import React from 'react'
import { shallow } from 'enzyme'
import AutoComplete from 'autoComplete'
import AutoCompleteSection from './AutoCompleteSection'
import ChevronIcon from 'icon/chevronIcon'

describe('AutoCompleteSection', () => {
  it('should contains an AutoComplete component', () => {
    const wrapper = shallow(
      <AutoCompleteSection
        name="from"
        renderAutocompleteComponent={props => <AutoComplete {...props} />}
      />,
    )
    expect(wrapper.find(AutoComplete).prop('embeddedInSearchForm')).toBe(true)
    expect(wrapper.find(AutoComplete).prop('autoFocus')).toBe(true)

    const inputAddonWrapper = shallow(wrapper.find(AutoComplete).prop('inputAddon'))
    expect(inputAddonWrapper.find(ChevronIcon).length).toEqual(1)
  })
})
