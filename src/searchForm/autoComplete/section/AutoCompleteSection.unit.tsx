import React from 'react'
import { shallow } from 'enzyme'

import { AutoComplete } from '../../../autoComplete'
import { ChevronIcon } from '../../../icon/chevronIcon'
import { AutoCompleteSection } from './AutoCompleteSection'

describe('AutoCompleteSection', () => {
  it('should contains an AutoComplete component', () => {
    const onClose = jest.fn()
    const wrapper = shallow(
      <AutoCompleteSection
        name="from"
        renderAutocompleteComponent={props => <AutoComplete {...props} />}
        onClose={onClose}
      />,
    )
    expect(wrapper.find(AutoComplete).prop('embeddedInSearchForm')).toBe(true)
    expect(wrapper.find(AutoComplete).prop('autoFocus')).toBe(true)

    const inputAddonWrapper = shallow(wrapper.find(AutoComplete).prop('inputAddon'))
    expect(inputAddonWrapper.find(ChevronIcon).length).toEqual(1)

    inputAddonWrapper.simulate('click')
    expect(onClose).toHaveBeenCalled()
  })
})
