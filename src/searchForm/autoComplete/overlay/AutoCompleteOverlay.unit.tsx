import React from 'react'
import { shallow } from 'enzyme'

import { AutoComplete } from '../../../autoComplete'
import { Bullet } from '../../../bullet'
import { AutoCompleteOverlay } from './AutoCompleteOverlay'

describe('AutoCompleteOverlay', () => {
  it('should contains an AutoComplete component', () => {
    const wrapper = shallow(
      <AutoCompleteOverlay
        name="from"
        renderAutocompleteComponent={props => <AutoComplete {...props} />}
      />,
    )

    expect(wrapper.find(AutoComplete).prop('embeddedInSearchForm')).toBe(true)
    expect(wrapper.find(AutoComplete).prop('autoFocus')).toBe(true)

    const inputAddonWrapper = shallow(wrapper.find(AutoComplete).prop('inputAddon'))
    expect(inputAddonWrapper.find(Bullet).length).toEqual(1)
  })
})
