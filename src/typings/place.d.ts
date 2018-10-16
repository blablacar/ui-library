declare interface Place {
  mainLabel: string
  subLabel?: React.ReactNode
  isoDate?: string
  time?: string
  distanceFromPoint?: string
  href?: string | JSX.Element
}
