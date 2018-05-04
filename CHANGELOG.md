# Unreleased
- [...]
# v1.3.3 (2018-05-03)
- [Modal] Fix css dimmer

# v1.3.2 (2018-05-03)
- [Modal] Add dimmer display as prop

# v1.3.1 (2018-04-26)
- [Proximity] Add proximity component and adapt Itinerary
- [Button] Valid state stays the same color under all circumstances
- [Datepicker] Bump react-dates version to 16.6.1 (regression fix)

# v1.3.0 (2018-04-19)
- [TripCard] Add metaUrl prop for schema.org
- [TripCard] Rename topOfSearch into highlighted
- [TripCard] Add the titles prop to add titles to the Svgs
- [PushInfo] Add pushInfo component
- [Modal] Update component for motion transition
# v1.2.4 (2018-04-13)
- [Dependencies] Update kirk dependencies
- [Autocomplete] Add emptyResults function
- [Icons] Add Proximity icon

# v1.2.3 (2018-04-10)
- [Stepper] Fix the value passed to the onChange method

# v1.2.2 (2018-04-10)
- [ChevronIcon] Fix `left` property
- [Button] Disabled style and prop
- [Stepper] Fix alignement issue

# v1.2.1 (2018-04-09)
- [Modal] Change the cross icon color to blue
- [TripCard] Change the highlight text to font weight m
- [Checkbox] Fix the onChange check value on the callback
- [Icons] Add clock & crossHair
- [Stepper] Add onCHange prop + Update layout

# v1.2.0 (2018-04-06)
- [Radio] - Moved loading, valid & validated props from <Radio> to <RadioGroup>

# v1.1.0 (2018-04-05)
- [Autocomplete/Radio] Added validated() callback

# v1.0.2 (2018-04-03)
- [ItemChoice] Supports button tag

# v1.0.1 (2018-03-30)
- [RadioGroup] Fix regression on onChange callback
- [Button] Pressed state

# v1.0.0 (2018-03-29)
- [Button] Remove `radio` prop
- [ItemChoice] Remove `tagName` prop + add `href` prop (similar to the Button prop)
- [Dependencies] Replace `classnames` by `classcat`, `styled-jsx` migrated to v2.2.6
- Typescript Migration

# v0.18.6 (2018-03-27)
- Skipped a version due to a bug
- [Itinerary] Add headline and small display

# v0.18.4 (2018-03-23)
- [Modal] Fix container height

# v0.18.3
- [Checkbox] Hand cursor when hovering

# v0.18.2
- [Checkbox] Remove optional icon and put checkbox on the right

# v0.18.1
- [TextField] Add an onClear callback when clicking on clear button, or clearing the field's value
- [Autocomplete] Listen to TextField new onClear event and propagate it + rename onChange to onSelect

# v0.18.0 (2018-03-09)
- [Autocomplete] Revert blur event to hide results & add showList prop

# v0.17.0 (2018-03-08)
- Remove Chip component
- [Autocomplete] Blur event to hide results
- [Modal] Allow Modal scroll

# v0.16.2 (2018-03-02)
- [Why] Precise the button type to avoid submit

# v0.16.1 (2018-02-28)
- [Modal] Make the modal body as flex container

# v0.16.0 (2018-02-27)
- [TextField] Fix a setSelectionRange cursor position bug on Safari mobile
- [Loader] Replace CSS loader by SVG circle loader
- [Button] Update loading icon color
- [ItemChoice] Add a `valid` prop
- [Why] Added a Why component

# v0.15.3 (2018-02-20)
- [Textfield] Changed proptypes on `autoComplete` attribute to be a string

# v0.15.2 (2018-02-16)
- [Button] Fix button bordered styles

# v0.15.1 (2018-02-14)
- [ItemChoice] Fix separator height
- [Title] Fix missing font-weight
- [Checkbox] Fix display when using `box-sizing: border-box` reset

# v0.15.0 (2018-02-12)
- Added a Loader component

# v0.14.6 (2018-02-09)
- [DatePicker] Add a hover state on navigation buttons
- [AutoComplete] Add a `bodyClassName` prop

# v0.14.5 (2018-02-09)
- [Itinerary] Add compatibility with box-sizing: border-box

# v0.14.4 (2018-02-08)
- [Drawer] Add a `className` prop

# v0.14.3 (2018-02-07)
- [DatePicker] Removed default box-shadow on vertical scrollable
- [Drawer] Increased z-index

# v0.14.2 (2018-02-07)
- [DatePicker] Fixed CSS styles react-dates v16+
- [AutoComplete] Fixed a race condition between searchForItemsMinChars and searchForItems

# v0.14.1 (2018-02-02)
- Update the font family of storybook (new brand)
- Update the tripcard font-weight
- Textfield color to midnightGreen
- Update kirk dependencies (but no styled-jsx, react-date & moment)
- [TimePicker] Add hover state
- Fix bug on icon height (IE 11)
- [DatePicker] Update react-dates version to `v16.2.1`

# v0.14.0 (2018-01-29)
- New palette colors

# v0.13.4 (2018-01-26)
- Update icons
- Added FacebookIcon, VkontakteIcon

# v0.13.3 (2018-01-25)
- [ItemChoice] Handle labels on multiple lines
- [AutoComplete] Add an `itemClassName` prop

# v0.13.2 (2018-01-24)
- [ItemChoice] Accept element type in href
- [ItemChoice] Tweak component height

# v0.13.1 (2018-01-24)
- [Button] Use ItemChoice for radio type

# v0.13.0 (2018-01-23)
- [Button] Remove un-needed CSS transition rules on span
- [AutoComplete] Added a `loadingItemIndex` prop
- [DatePicker] Remove webkit tap highlight on day buttons
- Added an ItemChoice component

# v0.12.2 (2018-01-17)
- [TextField] Added an `autoCorrect` prop
- [TextField] Increase border radius
- [TextField] Fix a display glitch when clearing value on Safari Mobile
- [TripCard] Change price `font-size`
- [ComfortIcon, LadyIcon, LightningIcon] Lower `stroke-width` to `1`

# v0.12.1 (2018-01-12)
- [AutoComplete] Add an `onInputChange` prop
- [DropdownButton] Add a `dropdownWithPointer` prop

# v0.12.0 (2018-01-11)
- Added a Drawer component
- Added an HamburgerButton component
- Added a DropdownButton component
- Added a Menu component

# v0.11.1 (2018-01-09)
- [Radio] Add a `className` prop

# v0.11.0 (2018-01-08)
- Added TripCard component
- Added Lady icon
- Added Comfort icon
- Added Lightning icon
- [Avatar] Fix bad behavior when stretched

# v0.10.1 (2018-01-03)
- [Radio] Update UI of Radio component

# v0.10.0 (2018-01-02)
- [Button] Added a `bordered` prop
- Added Itinerary component
- Added `fontWeight` in branding
- Fixed `flush` and `flushToHTML` not exported anymore
- [DatePicker] Fixed onChange value

# v0.9.10 (2017-12-13)
- [TextField] Display numeric keyboard for input type `number`
- [DatePicker] Add a `locale` prop
- [Button] Added a `title` prop
- [AutoComplete] Renamed `onSelect` by `onChange`
- [AutoComplete] Add a `renderQuery` prop

# v0.9.9 (2017-12-08)
- [AutoComplete] Add a `onBlur` prop
- Add space and radius none in branding

# v0.9.8 (2017-12-06)
- [AutoComplete] Add a `defaultValue` prop
- [AutoComplete] Add list items `hover` styles
- [AutoComplete] Prevents default Enter when typing search

# v0.9.7 (2017-12-04)
- [AutoComplete] Add a `focus` prop

# v0.9.6 (2017-12-01)
- [DatePicker] Tweak CSS for vertical scrollable orientation
- [DatePicker] Added `daySize` prop

# v0.9.5 (2017-11-24)
- [AutoComplete] Add an autoFocus prop
- [Title] Changed children propType from string to node
- [TopBar] Remove `role="banner"`
- [DatePicker] Renamed `onDateChange` into `onChange`
- [DatePicker] Added a `getValue` method

# v0.9.4 (2017-11-22)
- [AutoComplete] renderNoResults & renderBusy can now accept a React element

# v0.9.3 (2017-11-20)
- [AutoComplete] Disable native browser autocomplete

# v0.9.2 (2017-11-16)
- [AutoComplete] Allows renderItem, renderBusy, renderNoResults props to take a stateless component
- [AutoComplete] Fixes default export + support for SSR rendering

# v0.9.1 (2017-11-15)
- [Textfield] Changed rendering of button in input

# v0.9.0 (2017-11-14)
- [Icon] Added Chevron icon
- [Icon] Added Search icon
- [Icon] Removed MagnifyingGlass icon
- Export flush and flushToHTML from styled-jsx

# v0.8.1 (2017-11-08)
- [AutoComplete] Fixed missing debounce dependency

# v0.8.0 (2017-11-08)
- [TopBar] Enhanced with leftItem, rightItem, centerItem props
- Added AutoComplete component
- Added TimePicker component
- Moved unit tests to Jest

# v0.7.1 (2017-11-03)
- Fixed value of buttonIconSize

# v0.7.0 (2017-11-03)
- Added Modal component
- [Button] Fix button radio with icon on Firefox
- Added buttonIconSize variable

# v0.6.13 (2017-10-27)
- [Button] Reset hover styles on non capable devices
- [Textfield] Added ref callback

# v0.6.11 (2017-10-25)
- [TextField] Removed unnecessary padding on input
- Update v3 palette colors

# v0.6.10 (2017-10-23)
- [Title] Fix line-height
- [Button] Remove margins
- [Checkbox] Fix margin between input and label + Add padding to have a wider click area
- Update branding colors
- Fixed unique "key" warning on DatePicker

# v0.6.9 (2017-10-20)
- [Button] Removed `max-width: 0` in button loading & valid states
- [Button] Added focus prop
- [TextField] Keep focus on input after clear or show password
- [TextField] Fixed clear button position on Safari 10
- Update branding colors
- Added DatePicker component

# v0.6.8 (2017-10-11)
- [TextField] Fixed textFieldError CSS animation
- [Button] Set border to 1px & icon to the right
- [TextField] Fixed reset button background with Chrome autocomplete

# v0.6.7 (2017-10-10)
- Update the dependencies
- Add a unit test global setup
- Add maxLength property on the Textfield
- Remove useless attributes on the Textfield when not set
- Add the autoComplete property to the Textfield
- Fix disabled Textfield color
- Fixed button icon vertical alignment
- Remove the tabindex on the reset button in Textfield
- Remove iOS textfield inner shadow
- Add optional addon element at the beginning of the Textfield
- Allow to pass error prop as a boolean in TextField
- Renamed `space.gutter` into `space.xl`

# v0.6.6
- update on Button to better align icon and text

# v0.6.5
- update onChange callback signature on form components
- added check on falsy defaultValue for Textfield
- new `radio` style for Button

# v0.6.4
- Removed required value prop from checkbox
- Added focus prop on textfield
- Fixed warning proptype on Topbar
- On Textfield, replaced event with value in onChange callback
- Added required attribute for Textfield

# v0.6.3
- Fixed/reverted icons export

# v0.6.2
- Fixed unable to import an icon by: `import {icon} from 'kirk/icon'`
- Update the callback of the Textfield to be sure the state is always up to date.
- Added transparant background to button loading state so you see the loading icon
- Separate Radio component from RadioGroup
- Add callback on RadioGroup
- Added className on textfield error component

# v0.6.1
- Fixed issue with button styling in textField and topBar component
- Fixed wrong path to index in package.json

# v0.6.0
- Replaced bem function with more flexible prefix
- Output icons in subfolder on build
- Added on change event to the textfield clear button
- Added morphing states to the button

# v0.5.3 -> v0.5.16
- Changed package.json to use prepublishOnly on npm5

# v0.5.2
- Adding 'event' in `<Button />` callback
- Adding 'kirk' prefix on .error class in `<Textfield />`
- Fixed warning in topbar
- cleaned up textfield clear button styling

# v0.5.1
- Added autofocus on Textfield component
- Fixed changelog typo in v0.5.0

# v0.5.0
- Removed Quote component
- Added Message component
- Added Caption component
- Fixed broken componentWillReceiveProps on textField, Radio and Checkbox
- Fixed styling of the clear textField button
- Added TopBar component
- Updated branding file to unify new spacing, font-sizes, transition times
- Fixed allowing for a button child event

# v0.4.0
- Added RadioGroup component
- Added eslint rule on label/input a11y
- Added Checkbox component
- Update button component with updated styling and props
- Update Storybook React to 3.2.3
- Prefixing all CSS classes with `kirk-`
- Adding specific classes on specific icon (for Kairos TabBar)

# v0.3.0
- Update the libraries
- Fix the Avatar icon
- Replaced hero component with title component
- Implemented a new icon generator
- Removed svg symbols
- Added check, increase, decrease, cross, magnifyingGlass, user, blablacar and bubble icons
- Added textField component to replace the too generic input component
- removed input component
- Updated the avatar component with sizes and id check icon
- Added star component
- Added the rating and star component
- Updated the icon component with better proptypes and aria roles
- Added the profile and the card component

# v0.2.1
- Fix the flux import not at the right place

# v0.2.0
- CSS in JS
- Update the Hero, change the avatar prop to media
- Fix hero tests
- documentation update for release process

# v0.1.0
- inlined modifiers
- React to v15.5.4
