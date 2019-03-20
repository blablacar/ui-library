declare type countryTelData = {
  allCountries: object[]
  allCountryCodes: object
  iso2Lookup: object
}

declare type allCountriesPhoneData = {
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

declare type formattedCountriesPhoneData = {
  name: string
  iso2: string
  dialCode: string
}

declare type mappedCountriesPhoneData = {
  value: string
  label: string
}

declare type customCountriesName = {
  [key: string]: string
}
