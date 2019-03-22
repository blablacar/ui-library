declare type countryTelData = {
  allCountries: object[]
  allCountryCodes: object
  iso2Lookup: object
}

declare type allCountryPhoneData = {
  name: string
  iso2: string
  dialCode: string
  format: string
  priority: string
}

declare type allCountryCodes = {
  [key: number]: string[]
}

declare type iso2Lookup = {
  [key: string]: number
}

declare type formattedCountryPhoneData = {
  name: string
  iso2: string
  dialCode: string
}

declare type mappedCountryPhoneData = {
  value: string
  label: string
}

declare type customCountryNames = {
  [key: string]: string
}
