import React, { PureComponent, RefObject } from 'react'
import cc from 'classcat'
import prefix from '_utils'
import isEmpty from 'lodash.isempty'
import isEqual from 'lodash.isequal'
import SelectField from 'selectField'
import TextField, { inputTypes } from 'textField'
import { allCountries } from 'country-telephone-data'

export type selectfield = HTMLSelectElement

export enum FIELDS {
  PHONENUMBER = 'phoneNumber',
  PHONEREGION = 'phoneRegion',
}
export interface PhoneFieldOnChangeParameters {
  name: string
  value: {
    [FIELDS.PHONENUMBER]: string
    [FIELDS.PHONEREGION]: string
    phonePrefix: string
    completePhoneNumber: string
  }
}

type errorField = string | JSX.Element
export interface PhoneFieldProps {
  readonly name: string
  readonly onChange: (obj: PhoneFieldOnChangeParameters) => void
  readonly id?: string
  readonly className?: Classcat.Class
  readonly innerWrapperClassName?: Classcat.Class
  readonly ariaLabelledBy?: string
  readonly selectFieldLabel?: string
  readonly textFieldTitle?: string
  readonly textFieldPlaceholder?: string
  readonly defaultRegionValue?: string
  readonly defaultPhoneValue?: string
  readonly countryWhitelist?: string[]
  readonly customCountryNames?: customCountryNames
  readonly isInline?: boolean
  readonly focus?: boolean
  readonly selectAutoFocus?: boolean
  error?: errorField
}
interface PhoneFieldState {
  countryData: mappedCountryPhoneData[]
  countryWhitelist: string[]
  phonePrefix: string
  completePhoneNumber: string
  // Make the type of [key: string]: string etc. assignable for setState()
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
): mappedCountryPhoneData[] =>
  countryData.map(data => ({
    value: data.iso2,
    label: `${!isEmpty(countryNames[data.iso2]) ? countryNames[data.iso2] : data.name} ${
      data.dialCode
    }`,
  }))

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

const DisplayError = (error: errorField) => {
  const className = 'kirk-error-message'

  return React.isValidElement(error) ? (
    React.cloneElement(error, { className } as Object)
  ) : (
    <span role="alert" className={className}>
      {error}
    </span>
  )
}

const countryData = (whitelist: string[], countryNames: customCountryNames) => {
  if (!isEmpty(whitelist)) {
    const whiteListCountriesPhoneData = filterIso2(whitelist)
    const whitelistMapped = mapCountriesPhoneData(whiteListCountriesPhoneData, countryNames)

    return sortCountriesPhoneData(whitelistMapped)
  }
  const countriesDatasMapped = mapCountriesPhoneData(formattedCountryPhoneData, countryNames)
  return sortCountriesPhoneData(countriesDatasMapped)
}

/**
 * TODO: BBCSPA-3355 Fix A11y issues on label and error state
 */
export default class PhoneField extends PureComponent<PhoneFieldProps, PhoneFieldState> {
  private ref: RefObject<HTMLSelectElement>
  constructor(props: PhoneFieldProps) {
    super(props)
    this.ref = React.createRef()
  }
  static defaultProps: Partial<PhoneFieldProps> = {
    defaultRegionValue: '',
    defaultPhoneValue: '',
    countryWhitelist: [],
    customCountryNames: {},
    isInline: true,
  }

  state = {
    countryData: countryData(this.props.countryWhitelist, this.props.customCountryNames),
    countryWhitelist: this.props.countryWhitelist,
    [FIELDS.PHONENUMBER]: this.props.defaultPhoneValue,
    [FIELDS.PHONEREGION]: !isEmpty(this.props.defaultRegionValue)
      ? this.props.defaultRegionValue
      : '',
    phonePrefix: iso2toDialCode(this.props.defaultRegionValue),
    completePhoneNumber:
      iso2toDialCode(this.props.defaultRegionValue) + this.props.defaultPhoneValue,
    hasFocus: false,
  }

  handleChange = ({ name, value }: OnChangeParameters) => {
    this.setState({ [name]: value }, () => {
      this.props.onChange({
        name: this.props.name,
        value: {
          [FIELDS.PHONENUMBER]: this.state[FIELDS.PHONENUMBER],
          [FIELDS.PHONEREGION]: this.state[FIELDS.PHONEREGION],
          phonePrefix: iso2toDialCode(this.state[FIELDS.PHONEREGION]),
          completePhoneNumber:
            iso2toDialCode(this.state[FIELDS.PHONEREGION]) + this.state[FIELDS.PHONENUMBER],
        },
      })
    })
  }

  static getDerivedStateFromProps(props: PhoneFieldProps, state: PhoneFieldState) {
    if (!isEqual(props.countryWhitelist, state.countryWhitelist)) {
      return {
        countryData: countryData(props.countryWhitelist, props.customCountryNames),
        countryWhitelist: props.countryWhitelist,
      }
    }

    return null
  }

  componentDidMount() {
    if (this.ref && this.props.focus) {
      this.ref.current.focus()
    }
  }

  componentDidUpdate(prevProps: PhoneFieldProps) {
    if (this.ref && this.props.focus && prevProps.focus !== this.props.focus) {
      this.ref.current.focus()
    }
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
      selectAutoFocus,
      error,
    } = this.props

    const baseClassName = cc([prefix({ phoneField: true })])
    const wrapperClassName = `${baseClassName}-wrapper`

    const classNames = cc([
      isInline ? `${wrapperClassName}--inline` : wrapperClassName,
      this.props.innerWrapperClassName,
      this.state.hasFocus && `${wrapperClassName}--hasFocus`,
    ])

    return (
      <div className={cc([baseClassName, prefix({ error: !!error }), this.props.className])}>
        <div id={id} className={classNames} aria-labelledby={ariaLabelledBy}>
          <SelectField
            name={FIELDS.PHONEREGION}
            options={this.state.countryData}
            ariaLabel={selectFieldLabel}
            defaultValue={this.props.defaultRegionValue}
            onChange={this.handleChange}
            onFocus={this.onFocus}
            onBlur={this.onBlur}
            focusBorder={!isInline}
            autoFocus={selectAutoFocus}
            autoComplete="tel-country-code"
            ref={this.ref}
          />
          <TextField
            type={inputTypes.TEL}
            name={FIELDS.PHONENUMBER}
            placeholder={textFieldPlaceholder}
            defaultValue={defaultPhoneValue}
            onChange={this.handleChange}
            title={textFieldTitle}
            onFocus={this.onFocus}
            onBlur={this.onBlur}
            focusBorder={!isInline}
            autoComplete="tel-national"
          />
        </div>
        {!!error && DisplayError(error)}
      </div>
    )
  }
}
