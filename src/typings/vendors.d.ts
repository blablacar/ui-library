declare module '*.md'

declare module 'country-telephone-data' {
  export type AllCountryPhoneData = {
    name: string
    iso2: string
    dialCode: string
    format: string
    priority: string
  }

  export const allCountries: AllCountryPhoneData[]
}
