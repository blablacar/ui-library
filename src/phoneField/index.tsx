import React, { PureComponent } from 'react'
import cc from 'classcat'
import prefix from '_utils'
import isEmpty from 'lodash.isempty'
import isEqual from 'lodash.isequal'
import SelectField from 'selectField'
import TextField from 'textField'
import { allCountries, allCountryCodes } from 'country-telephone-data'
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
    phoneRegionList: string[]
    completePhoneNumber: string
  }
}
interface PhoneFieldProps {
  readonly name: string
  readonly onChange: (obj: PhoneFieldOnChangeParameters) => void
  readonly id?: string
  readonly className?: string
  readonly ariaLabelledBy?: string
  readonly selectFieldLabel?: string
  readonly textFieldTitle?: string
  readonly textFieldPlaceholder?: string
  readonly defaultRegionValue?: string
  readonly defaultPhoneValue?: string
  readonly countryWhitelist?: string[]
  readonly customCountryNames?: customCountryNames
  readonly isInline?: boolean
}
interface PhoneFieldState {
  countryData: mappedCountryPhoneData[]
  countryWhitelist: string[]
  phoneRegionList: string[]
  completePhoneNumber: string
  // Make the type of [key: string]: string etc... assignable for setState()
  [key: string]: any
}

const allCountryPhoneData: allCountryPhoneData[] = allCountries

/* Format and keep only used data */
const formattedCountryPhoneData: formattedCountryPhoneData[] = allCountryPhoneData.map(
  countryData => ({
    name: countryData.name,
    iso2: countryData.iso2.toUpperCase(),
    dialCode: `+${countryData.dialCode}`,
  }),
)
/**
 * Filter countries data according to whitelist
 * @param {Array} countryList in ISO2 format ex: ['FR', 'ES']
 * @return {formattedCountriesPhoneData}
 */
const filterIso2 = (countryList: string[]) =>
  formattedCountryPhoneData.filter(country => countryList.includes(country.iso2))

/**
 * Return country data according to ISO2 defaultValue
 * @param {string} countryDefault ISO2 format ex: 'FR'
 * @return {formattedCountriesPhoneData}
 */
const findIso2 = (countryDefault: string): formattedCountryPhoneData =>
  formattedCountryPhoneData.find(country => country.iso2 === countryDefault)

const mapCountriesPhoneData = (
  countryData: formattedCountryPhoneData[],
  countryNames: customCountryNames,
): mappedCountryPhoneData[] => {
  return countryData.map(data => ({
    value: data.dialCode,
    label: `${!isEmpty(countryNames[data.iso2]) ? countryNames[data.iso2] : data.name} ${
      data.dialCode
    }`,
  }))
}

/* Alphabetically sorted */
const sortCountriesPhoneData = (
  mappedCountryPhoneData: mappedCountryPhoneData[],
): mappedCountryPhoneData[] =>
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
    return countryPhoneData.dialCode
  }
  return ''
}

export default class PhoneField extends PureComponent<PhoneFieldProps, PhoneFieldState> {
  static defaultProps: Partial<PhoneFieldProps> = {
    defaultRegionValue: '',
    defaultPhoneValue: '',
    countryWhitelist: [],
    customCountryNames: {},
    isInline: true,
  }

  state = {
    countryData: PhoneField.countryData(this.props.countryWhitelist, this.props.customCountryNames),
    countryWhitelist: this.props.countryWhitelist,
    [FIELDS.PHONENUMBER]: this.props.defaultPhoneValue,
    [FIELDS.PHONEPREFIX]: iso2toDialCode(this.props.defaultRegionValue),
    phoneRegionList: !isEmpty(this.props.defaultRegionValue) ? [this.props.defaultRegionValue] : [],
    completePhoneNumber:
      iso2toDialCode(this.props.defaultRegionValue) + this.props.defaultPhoneValue,
    hasFocus: false,
  }

  onChange = ({ name, value }: OnChangeParameters) => {
    this.setState({ [name]: value }, () => {
      const iso2Codes = allCountryCodes[Number(this.state[FIELDS.PHONEPREFIX])]
      this.props.onChange({
        name: this.props.name,
        value: {
          [FIELDS.PHONENUMBER]: this.state[FIELDS.PHONENUMBER],
          [FIELDS.PHONEPREFIX]: this.state[FIELDS.PHONEPREFIX],
          phoneRegionList: !isEmpty(iso2Codes) ? iso2Codes : [],
          completePhoneNumber: this.state[FIELDS.PHONEPREFIX] + this.state[FIELDS.PHONENUMBER],
        },
      })
    })
  }

  static countryData(whitelist: string[], countryNames: customCountryNames) {
    if (!isEmpty(whitelist)) {
      const whiteListCountriesPhoneData = filterIso2(whitelist)
      const whitelistMapped = mapCountriesPhoneData(whiteListCountriesPhoneData, countryNames)

      return sortCountriesPhoneData(whitelistMapped)
    }
    const countriesDatasMapped = mapCountriesPhoneData(formattedCountryPhoneData, countryNames)
    return sortCountriesPhoneData(countriesDatasMapped)
  }

  static getDerivedStateFromProps(props: PhoneFieldProps, state: PhoneFieldState) {
    if (!isEqual(props.countryWhitelist, state.countryWhitelist)) {
      return {
        countryData: PhoneField.countryData(props.countryWhitelist, props.customCountryNames),
        countryWhitelist: props.countryWhitelist,
      }
    }

    return null
  }

  onFocus = () => {
    this.setState({ hasFocus: true })
  }

  onBlur = () => {
    this.setState({ hasFocus: false })
  }

  render() {
    const {
      id,
      selectFieldLabel,
      textFieldTitle,
      ariaLabelledBy,
      textFieldPlaceholder,
      defaultPhoneValue,
      isInline,
    } = this.props

    const baseClassName = cc([prefix({ phoneField: true })])

    const classNames = cc([
      isInline ? `${baseClassName}--inline` : baseClassName,
      this.props.className,
      this.state.hasFocus && `${baseClassName}--hasFocus`,
    ])

    return (
      <div id={id} className={classNames} aria-labelledby={ariaLabelledBy}>
        <SelectField
          name={FIELDS.PHONEPREFIX}
          options={this.state.countryData}
          ariaLabel={selectFieldLabel}
          defaultValue={this.state[FIELDS.PHONEPREFIX]}
          onChange={this.onChange}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          focusBorder={!isInline}
        />
        <TextField
          type="tel"
          name={FIELDS.PHONENUMBER}
          placeholder={textFieldPlaceholder}
          defaultValue={defaultPhoneValue}
          onChange={this.onChange}
          title={textFieldTitle}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          focusBorder={!isInline}
        />
        <style jsx global>
          {style}
        </style>
      </div>
    )
  }
}
