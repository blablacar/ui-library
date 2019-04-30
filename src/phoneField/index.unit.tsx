import React from 'react'
import renderer from 'react-test-renderer'
import { shallow, mount } from 'enzyme'
import PhoneField from 'phoneField'

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
  ariaLabelledBy: 'labelId',
  selectFieldLabel: 'Phone Country code',
  textFieldTitle: 'Phone Number',
  textFieldPlaceholder: 'Phone number',
  defaultRegionValue: 'ES',
  defaultPhoneValue: '0765455667',
  customCountryNames,
  isInline: false,
}

describe('PhoneField', () => {
  const defaultWrapper = shallow(<PhoneField {...defaultProps} />)

  it('should have the expected markup in the DOM with default settings', () => {
    const phoneField = renderer.create(<PhoneField {...defaultProps} />).toJSON()
    expect(phoneField).toMatchSnapshot()
  })

  it('should have the expected markup in the DOM with custom settings', () => {
    const phoneField = renderer.create(<PhoneField {...customProps} />).toJSON()
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
})
