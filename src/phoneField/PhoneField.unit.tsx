import React from 'react'
import renderer from 'react-test-renderer'
import { mount, shallow } from 'enzyme'

import { PhoneField as StyledPhoneField } from './index'
import { PhoneField } from './PhoneField'

const countryWhitelist = ['FR', 'ES']
const countryWhitelistUpdated = ['DE']

const customCountryNames = {
  FR: 'Custom fr label',
  ES: 'Custom es label',
}

const whitelistMapped = [
  { label: 'France +33', value: 'FR' },
  { label: 'Spain (España) +34', value: 'ES' },
]
const whitelistMappedChange = [{ label: 'Germany (Deutschland) +49', value: 'DE' }]

const defaultProps = {
  name: 'phoneField',
  onChange() {},
  countryWhitelist,
}

const customProps = {
  ...defaultProps,
  id: 'selectFieldName',
  className: 'customClass',
  'aria-labelledby': 'labelId',
  selectFieldLabel: 'Phone Country code',
  textFieldTitle: 'Phone Number',
  textFieldPlaceholder: 'Phone number',
  defaultRegionValue: 'ES',
  defaultPhoneValue: '0765455667',
  customCountryNames,
  isInline: false,
  selectAutoFocus: true,
}

describe('PhoneField', () => {
  const defaultWrapper = shallow(<PhoneField {...defaultProps} />)

  it('should have the expected markup in the DOM with default settings', () => {
    const phoneField = renderer.create(<StyledPhoneField {...defaultProps} />).toJSON()
    expect(phoneField).toMatchSnapshot()
  })

  it('should have the expected markup in the DOM with custom settings', () => {
    const phoneField = renderer.create(<StyledPhoneField {...customProps} />).toJSON()
    expect(phoneField).toMatchSnapshot()
  })

  it('Should have proper default state value', () => {
    expect(defaultWrapper.state()).toEqual({
      countryData: whitelistMapped,
      countryWhitelist,
      phoneNumber: '',
      phonePrefix: '',
      phoneRegion: '',
      completePhoneNumber: '',
      hasFocus: false,
    })
  })

  it('Should update data when countryWhitelist changed', () => {
    defaultWrapper.setProps({ countryWhitelist: countryWhitelistUpdated })
    expect(defaultWrapper.state('countryWhitelist')).toEqual(countryWhitelistUpdated)
    expect(defaultWrapper.state('countryData')).toEqual(whitelistMappedChange)
  })

  it('should receive updated value on phone number and country code change', () => {
    const handleOnChange = jest.fn()
    const wrapper = mount(<PhoneField {...defaultProps} onChange={handleOnChange} />)
    const select = wrapper.find('select')
    const selectDOMNode = select.getDOMNode() as HTMLSelectElement
    selectDOMNode.value = 'ES'
    select.simulate('change', { target: selectDOMNode })
    expect(handleOnChange).toHaveBeenCalledWith({
      name: 'phoneField',
      value: {
        completePhoneNumber: '+34',
        phonePrefix: '+34',
        phoneRegion: 'ES',
        phoneNumber: '',
      },
    })

    const input = wrapper.find('input')
    input.simulate('change', { target: { value: '0765455667' } })
    expect(handleOnChange).toHaveBeenCalledWith({
      name: 'phoneField',
      value: {
        completePhoneNumber: '+340765455667',
        phonePrefix: '+34',
        phoneRegion: 'ES',
        phoneNumber: '0765455667',
      },
    })
    expect(handleOnChange).toHaveBeenCalledTimes(2)
  })

  describe('Focus event', () => {
    it('Should have the appropriate display a focus event.', () => {
      const wrapper = mount(<PhoneField name="testFocus" />)
      expect(wrapper.find('.kirk-phoneField-wrapper--hasFocus').exists()).toBe(false)
      wrapper.find('select').simulate('focus')
      expect(wrapper.find('.kirk-phoneField-wrapper--hasFocus').exists()).toBe(true)
      expect(wrapper.state('hasFocus')).toBe(true)
    })

    /* TODO: Test focus on mounting by using focus prop
     * Enzyme doesn't support React 16 createRef
     * https://github.com/airbnb/enzyme/issues/1704
     */
  })

  describe('#error', () => {
    it('Should have an error state when passing an error string', () => {
      const errorText = 'this is an error'
      const wrapper = shallow(<PhoneField {...defaultProps} error={errorText} />)
      expect(wrapper.hasClass('kirk-error')).toBe(true)
      expect(wrapper.find('.kirk-error-message')).toHaveLength(1)
      expect(wrapper.find('span').text()).toBe(errorText)
    })

    it('Should have an error state when passing a JSX element', () => {
      const errorText = 'this is an error'
      const error = <span>{errorText}</span>
      const wrapper = shallow(<PhoneField {...defaultProps} error={error} />)
      expect(wrapper.hasClass('kirk-error')).toBe(true)
      expect(wrapper.find('.kirk-error-message')).toHaveLength(1)
      expect(wrapper.find('span').text()).toBe(errorText)
    })

    it('Should not have an error state when passing a `null` value', () => {
      const wrapper = shallow(<PhoneField {...defaultProps} error={null} />)
      expect(wrapper.hasClass('kirk-error')).toBe(false)
      expect(wrapper.find('.kirk-error-message')).toHaveLength(0)
    })
  })
})
