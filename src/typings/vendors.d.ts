declare module '*.md'

declare module 'react-dates' {
  const DayPickerSingleDateController: any
  const isInclusivelyAfterDay: any
}

declare module 'react-dates/constants' {
  const HORIZONTAL_ORIENTATION: string
  const VERTICAL_ORIENTATION: string
  const VERTICAL_SCROLLABLE: string
}

declare module 'country-telephone-data' {
  const countryTelData: countryTelData
  const allCountries: allCountriesPhoneData[]
  const allCountryCodes: allCountryCodes
  const iso2Lookup: iso2Lookup
}
