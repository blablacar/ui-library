declare interface AutocompleteItem {
  readonly id: string
  readonly title: string
  readonly description?: string
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
