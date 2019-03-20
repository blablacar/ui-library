import React, { PureComponent } from 'react'
import cc from 'classcat'
import prefix from '_utils'
import isEmpty from 'lodash.isempty'
import isEqual from 'lodash.isequal'
import SelectField from 'selectField'
import TextField from 'textField'
import countryTelData from 'country-telephone-data'
import style from 'phoneField/style'

enum FIELDS {
  PHONENUMBER = 'phoneNumber',
  PHONEPREFIX = 'phonePrefix',
}
interface PhoneFieldOnChangeParameters {
  name: string
  value: {
    [FIELDS.PHONENUMBER]: string
    [FIELDS.PHONEPREFIX]: string
    completePhoneNumber: string
  }
}
interface PhoneFieldProps {
  readonly name: string
  readonly id?: string
  readonly className?: string
  readonly defaultPrefix?: string
  readonly prefixLabel?: string
  readonly title?: string
  readonly ariaLabelledBy?: string
  readonly placeholder?: string
  readonly defaultValue?: string
  readonly countriesWhiteList?: string[]
  readonly customCountriesName?: customCountriesName
  readonly isInline?: boolean
  readonly onChange?: (obj: PhoneFieldOnChangeParameters) => void
}
interface PhoneFieldState {
  countriesData: mappedCountriesPhoneData[]
  countriesWhiteList: string[]
  completePhoneNumber: string
  // Make the type of [key: string]: string etc... assignable for setState()
  [key: string]: any
}

const allCountriesPhoneData: allCountriesPhoneData[] = countryTelData.allCountries

/* Format and keep only used data */
const formattedCountriesPhoneData: formattedCountriesPhoneData[] = allCountriesPhoneData.map(
  countryData => ({
    name: countryData.name,
    iso2: countryData.iso2.toUpperCase(),
    dialCode: countryData.dialCode,
  }),
)

/**
 * Filter countries data according to whitelist
 * @param {Array} countriesList in ISO2 format ex: ['FR', 'ES']
 * @return {formattedCountriesPhoneData}
 */
const filterIso2 = (countriesList: string[]) =>
  formattedCountriesPhoneData.filter(country => countriesList.includes(country.iso2))

/**
 * Return country data according to ISO2 defaultValue
 * @param {string} countryDefault ISO2 format ex: 'FR'
 * @return {formattedCountriesPhoneData}
 */
const findIso2 = (countryDefault: string): formattedCountriesPhoneData =>
  formattedCountriesPhoneData.find(country => country.iso2 === countryDefault)

const mapCountriesPhoneData = (
  countriesData: formattedCountriesPhoneData[],
  countriesName: customCountriesName,
): mappedCountriesPhoneData[] => {
  return countriesData.map(countryData => ({
    value: `+${countryData.dialCode}`,
    label: `${
      !isEmpty(countriesName[countryData.iso2]) ? countriesName[countryData.iso2] : countryData.name
    } +${countryData.dialCode}`,
  }))
}

/* Alphabetically sorted */
const sortCountriesPhoneData = (
  mappedCountryPhoneData: mappedCountriesPhoneData[],
): mappedCountriesPhoneData[] =>
  mappedCountryPhoneData.sort((a, b) => {
    if (a.label < b.label) return -1
    if (a.label > b.label) return 1
    return 0
  })

const iso2toDialCode = (iso2Value: string) => {
  if (isEmpty(iso2Value)) {
    return ''
  }
  const countryPhoneData = findIso2(iso2Value)
  if (countryPhoneData) {
    return `+${countryPhoneData.dialCode}`
  }
  return ''
}

export default class PhoneField extends PureComponent<PhoneFieldProps, PhoneFieldState> {
  static defaultProps: Partial<PhoneFieldProps> = {
    defaultPrefix: '',
    defaultValue: '',
    countriesWhiteList: [],
    customCountriesName: {},
    isInline: true,
  }

  state = {
    countriesData: PhoneField.countriesData(
      this.props.countriesWhiteList,
      this.props.customCountriesName,
    ),
    countriesWhiteList: this.props.countriesWhiteList,
    [FIELDS.PHONENUMBER]: this.props.defaultValue,
    [FIELDS.PHONEPREFIX]: iso2toDialCode(this.props.defaultPrefix),
    completePhoneNumber: iso2toDialCode(this.props.defaultPrefix) + this.props.defaultValue,
  }

  onChange = ({ name, value }: OnChangeParameters) => {
    this.setState({ [name]: value }, () => {
      this.props.onChange({
        name: this.props.name,
        value: {
          [FIELDS.PHONENUMBER]: this.state[FIELDS.PHONENUMBER],
          [FIELDS.PHONEPREFIX]: this.state[FIELDS.PHONEPREFIX],
          completePhoneNumber: this.state[FIELDS.PHONEPREFIX] + this.state[FIELDS.PHONENUMBER],
        },
      })
    })
  }

  static countriesData(whitelist: string[], countriesName: customCountriesName) {
    if (!isEmpty(whitelist)) {
      const whiteListCountriesPhoneData = filterIso2(whitelist)
      const whitelistMapped = mapCountriesPhoneData(whiteListCountriesPhoneData, countriesName)

      return sortCountriesPhoneData(whitelistMapped)
    }
    const countriesDatasMapped = mapCountriesPhoneData(formattedCountriesPhoneData, countriesName)
    return sortCountriesPhoneData(countriesDatasMapped)
  }

  static getDerivedStateFromProps(props: PhoneFieldProps, state: PhoneFieldState) {
    if (!isEqual(props.countriesWhiteList, state.countriesWhiteList)) {
      return {
        countriesData: PhoneField.countriesData(
          props.countriesWhiteList,
          props.customCountriesName,
        ),
        countriesWhiteList: props.countriesWhiteList,
      }
    }

    return null
  }

  render() {
    const { id, prefixLabel, title, ariaLabelledBy, placeholder, defaultValue } = this.props

    const baseClassName = cc([prefix({ phoneField: true })])

    const classNames = cc([
      this.props.isInline ? `${baseClassName}--inline` : baseClassName,
      this.props.className,
    ])

    return (
      <div id={id} className={classNames} aria-labelledby={ariaLabelledBy}>
        <SelectField
          name={FIELDS.PHONEPREFIX}
          options={this.state.countriesData}
          ariaLabel={prefixLabel}
          defaultValue={this.state[FIELDS.PHONEPREFIX]}
          onChange={this.onChange}
        />
        <TextField
          type="tel"
          name={FIELDS.PHONENUMBER}
          placeholder={placeholder}
          defaultValue={defaultValue}
          onChange={this.onChange}
          title={title}
        />
        <style jsx global>
          {style}
        </style>
      </div>
    )
  }
}
