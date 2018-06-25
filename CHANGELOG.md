# Unreleased
- Update external dependencies
- Fix linter on dev & C.I.

# v0.4.0 (21/06/2018)
- [Itinerary] Component now using an array to display places (no `departure` and `arrival` props anymore)

# v0.3.1 (20/06/2018)
- [TimePicker] Fix display on small devices
- [ItemChoice] Fix right content display
- [Checkbox] Reverse label and input and made it configurable
- Remove deprecated updateColor() method

# v0.3.0 (08/06/2018)
Breaking changes:
- [Autocomplete] Render empty search with an autocomplete list
- [Autocomplete] Replace the props `loadingItemIndex` and `valid` by a new selectedItemStatus props

# v0.2.2 (07/06/2018)
- [Autocomplete] Pass down the `bodyClassName` to the AutoCompleteList
- [PushInfo] New onAnimationEnd prop
- [TextField] Caret color is now blue

# v0.2.1 (05/06/2018)
- [Icon] Fix DoubleArrowIcon fillRule attribute
- [Autocomplete] Add `autoCorrect`, `disabled`, `readOnly`, `required`, `error` props
- [TextField] Style for disabled state

# v0.2.0
- [Loader] Now handles the "green check" animation and callback
- [Button & ItemChoice] API breaking changes, now use a unique `status` instead of multiple props to avoid overlaps of properties and styles
- [Radio & AutoComplete] Repercussions from ItemChoice API changes

# v0.1.1
- NEW UneditableTextField component
- NEW ICONS: DoubleArrow, Youtube, Instagram, Twitter, Trash
- [Modal] Fix render component on server side

# v0.1.0
- [Transitions] Add Transitions component
- [Modal] Apply Transitions component and add unit tests

# v0.0.2
- [Button] Shadowed prop on secondary button

# v0.0.1
- Open sourcing
