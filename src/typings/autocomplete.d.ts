declare interface AutocompleteItem {
  readonly id: string
  readonly label: string
  readonly labelInfo?: string
  readonly leftAddon?: JSX.Element
}

declare interface AutocompleteOnChange {
  readonly name: string
  readonly value: string | number | boolean
  readonly item: AutocompleteItem
}

declare interface AutocompleteItemToRender {
  readonly item: AutocompleteItem
  readonly index: number
}
