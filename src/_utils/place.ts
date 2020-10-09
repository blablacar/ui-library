export interface Place {
  stepAriaLabel?: string
  actionAriaLabel?: string
  mainLabel: string
  subLabel?: React.ReactNode
  isoDate?: string
  time?: string
  distanceFromPoint?: string
  href?: string | JSX.Element
  key?: string
  connectionLabel?: string
}
