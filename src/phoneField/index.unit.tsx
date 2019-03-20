import React from 'react'
import renderer from 'react-test-renderer'
import { shallow, mount } from 'enzyme'
import PhoneField from 'phoneField'

const countriesWhiteList = ['FR', 'ES']
const countriesWhiteListUpdated = ['DE']

const customCountriesName = {
  FR: 'Custom fr label',
  ES: 'Custom es label',
}

const whiteListMapped = [
  { label: 'France +33', value: '+33' },
  { label: 'Spain (España) +34', value: '+34' },
]
const whiteListMappedChange = [{ label: 'Germany (Deutschland) +49', value: '+49' }]

const defaultProps = {
  name: 'phoneField',
  onChange() {},
  countriesWhiteList,
}

const customProps = {
  ...defaultProps,
  id: 'selectFieldName',
  className: 'customClass',
  prefixLabel: 'Phone Country code',
  defaultPrefix: 'ES',
  title: 'Phone Number',
  ariaLabelledBy: 'labelId',
  placeholder: 'Phone number',
  defaultValue: '0765455667',
  customCountriesName,
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
      countriesData: whiteListMapped,
      countriesWhiteList,
      phoneNumber: '',
      phonePrefix: '',
      completePhoneNumber: '',
    })
  })

  it('Should update data when countriesWhiteList changed', () => {
    defaultWrapper.setProps({ countriesWhiteList: countriesWhiteListUpdated })
    expect(defaultWrapper.state('countriesWhiteList')).toEqual(countriesWhiteListUpdated)
    expect(defaultWrapper.state('countriesData')).toEqual(whiteListMappedChange)
  })

  it('should receive updated value on phone number and country code change', () => {
    const handleOnChange = jest.fn()
    const wrapper = mount(<PhoneField {...defaultProps} onChange={handleOnChange} />)
    const select = wrapper.find('select')
    const selectDOMNode = select.getDOMNode() as HTMLSelectElement
    selectDOMNode.value = '+34'
    select.simulate('change', { target: selectDOMNode })
    expect(handleOnChange).toHaveBeenCalledWith({
      name: 'phoneField',
      value: {
        completePhoneNumber: '+34',
        phonePrefix: '+34',
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
        phoneNumber: '0765455667',
      },
    })
    expect(handleOnChange).toHaveBeenCalledTimes(2)
  })
})
