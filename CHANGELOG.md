# Unreleased

- **[FIX]** Fix `Profile` medium size rendering
- [...]

# v24.1.0 (25/03/2020)

- **[NEW]** Add `Card` util component, add `QrCard` component and use `Card` in `TripCard`
- **[NEW]** Add `Hint` component
- **[UPDATE]** Add explicit support for generic aria attributes on `Item`-like components and `Button`
- **[FIX]** Fix `MainContent` height when inside a `Modal` with close button
- **[FIX]** Fix `MediaSection` display inside a `Modal`

# v24.0.0 (23/03/2020)

- **[BREAKING CHANGE]** Improve & rename `TripSection` as `CardsSection` to be able to handle `TripCard` and `QrCard` elements

# v23.2.1 (23/03/2020)

- **[NEW]** Add `Card` util component, add `QrCard` component and use `Card` in `TripCard`
- **[FIX]** Fix `Item` Button focus visual indicator

# v23.2.0 (20/03/2020)

- **[NEW]** Add `ZoomIn` and `ZoomOut` icons
- **[FIX]** Fix story for `Review` widget
- **[FIX]** Add `small` prop to `TimePicker` component

# v23.1.0 (13/03/2020)

- **[NEW]** Add `MediaSection`, a fullscreen without spacing on small devices section
- **[NEW]** Add new `Review` widget.

# v23.0.0 (12/03/2020)

- **[FIX]** Remove horizontal padding override in `MessagingSummaryItem`
- **[BREAKING CHANGE]** Remove `highlighted` prop from `TripCard` component.

# v22.4.0 (11/03/2020)

- **[NEW]** Add an `ItemsSection` to display two `ItemInfo` in a row
- **[UPDATE]** Improve `TripCard` layout to allow text to truncate.
- **[FIX]** Add vertical padding to `Paragraph`
- **[FIX]** Fix padding for title in `ColumnedContentSection`
- **[FIX]** Update `Profile` component type for `info` prop (`string | JSX.Element`)
- **[NEW]** `MediaSizeProvider` component

# v22.3.1 (10/03/2020)

- **[FIX]** Set explicit vertical margins on `ColumnedContentSection` main title.

# v22.3.0 (09/03/2020)

- **[UPDATE]** Add ariaLabel attribute to `ItemInfo` and `Item`.
- **[FIX]** Improve a11y on `Stepper` for keyboard navigation and screen readers
- **[NEW]** New typographic components
  --`TextDisplay1`
  --`TextDisplay2`
  --`TextBody`
  --`TextBodyStrong`
  --`TextCaption`
  --`TextSubHeader`
  --`TextSubHeaderStrong`
  --`TextTitle`
  --`TextTitleStrong`

# v22.2.0 (06/03/2020)

- **[UPDATE]** Add autoComplete attribute on `SelectField` and `PhoneField` components.
- **[UPDATE]** Change autoComplete type on `TextField` to allow other values than `on` and `off`.
- **[FIX]** Fix `TripsSection` left scroll padding issue
- **[FIX]** Fix `Datepicker` previous month selection on vertical mode if selected date is far in the future

# v22.1.1 (28/02/2020)

- **[FIX]** Fix `Stepper` button visual issue

# v22.1.0 (27/02/2020)

- **[NEW]** Add `IllustratedSection` component
- **[NEW]** Add `LockIcon`
- **[UPDATE]** Fix `Button` with `Icon` display case

# v22.0.0 (26/02/2020)

- **[NEW]** Add `SearchRecap` component
- **[BREAKING CHANGE]** Add `kirk-` prefix to classNames in `UneditableTextField`
- **[UPDATE]** Storybook dependency
- **[FIX]** Fix unclickable arrow in `TimePicker`
- **[NEW]** `MainContent` and children components to handle layout vertical composition

# v21.2.0 (20/02/2020)

- **[NEW]** Introduce `LayoutNormalizer` with legacy global layout overrides. Not activated by default.
- **[NEW]** Add Bus Ride Details story page
- **[NEW]** Implement `ColumnedContentSection` widget.
- **[UPDATE]** Use semantic html (ul/li) for `Columns` and `Column` widgets.
- **[UPDATE]** Add new `Your rides`, `Ride history` and `Search result` pages
- **[UPDATE]** Add new `Your rides`
- `Ride history` and `Search result` pages
- **[UPDATE]** Make price props on `TripCard` non-mandatory

# v21.1.0 (19/02/2020)

- **[UPDATE]** Update `TheVoice` component to be applied on dark backgrounds. `ConfirmationModal` and `SuccessModal` now use `TheVoice` component.
- **[FIX]** Removed `ItineraryCollapsible` useless css rules
- **[FIX]** Restore multiline text on `Tabs` when `fixed`

# v21.0.1 (17/02/2020)

- **[FIX]** Fix `RotateIcon` viewbox

# v21.0.0 (14/02/2020)

- **[NEW]** Implement `Paragraph` widget
- **[BREAKING CHANGE]** `Tabs` and `TabsSection` layout/spacing overhaul

# v20.1.2 (12/02/2020)

- **[FIX]** Fix text alignment and image covering for `MediaContentSection`

# v20.1.1 (12/02/2020)

- **[FIX]** `Itinerary` subLabel rendered in case of stopovers
- **[FIX]** Add border radius, article tag name, proper image position and title alignment for `MediaContentSection` section.

# v20.1.0 (12/02/2020)

- **[NEW]** Allow to disable the backgroundhover color for `ItemAction`
- **[UPDATE]** Create new `MediaContentSection` section based on `Columns` and `Column` private components.
- **[UPDATE]** Move more rendering logic to `HighlightSection`

# v20.0.2 (11/02/2020)

- **[FIX]** Fix `Itinerary` margin with only one stopover and no time

# v20.0.1 (11/02/2020)

- **[UPDATE]** `Itinerary` displays `subLabel` instead of `mainLabel` when collapsed

# v20.0.0 (10/02/2020)

- **[BREAKING CHANGE]** Replace `TopTripCardList` component with `TripsSection` section.
- **[UPDATE]** Add new Pages leftnav category and a few messaging & ridedetails pages
- **[BREAKING CHANGE]** Fix background/content classname props on `BaseSection` and `HighlightSection`
- **[NEW]** Add `ariaLabel` prop to `Text`
- **[NEW]** Add `rightTitleAriaLabel` prop to `Item`
- **[NEW]** Add `dataAriaLabel` prop to `ItemData`

# v19.1.1 (07/02/2020)

- **[UPDATE]** Itinerary is no longer collapsed when we have only one stopover

# v19.1.0 (07/02/2020)

- **[NEW]** Add `RotateIcon`
- **[FIX]** Fix background for `HighlightSection`
- **[UPDATE]** Rename left nav widget section from 'Others' to 'Widgets'
- **[NEW]** Create new `TabsSection` (a full-width `Tabs` section)
- **[UPDATE]** Fix children type for `BaseSection` to allow list of React elements.
- **[UPDATE]** Improve widgets story visual display (by wrapping in Section)
- **[FIX]** Fix broken `Datepicker` stories

# v19.0.0 (06/02/2020)

- **[NEW]** Added `BaseSection`, the core section for layouts.
- **[NEW]** Added `HighlightSection`, a specialized section with a green background.
- **[BREAKING CHANGE]** Rename our section branding sizes to use better names.

# v18.3.0 (04/02/2020)

- **[UPDATE]** Refactored `Itinerary` to use `ItineraryLocation` and `ItineraryCollapsible`
- **[UPDATE]** `Bullet` component size is no longer based on 'content-box' but 'border-box'
- **[NEW]** Added `ClockMapIcon`

# v18.2.0 (03/02/2020)

- **[NEW]** Create new `HeroSection` section.

# v18.1.0 (30/01/2020)

- **[NEW]** Add `shadowed` prop `MeetingPointIcon`
- **[UPDATE]** Changed `MeetingPointIcon` active display
- **[UPDATE]** Add `highlightRoad` prop to `Itinerary`

# v18.0.2 (24/01/2020)

- **[UPDATE]** Add `MAP_ACTIVE` and `MAP_INACTIVE` types for `Bullet` component
- **[UPDATE]** Removed z-index rules from `Itinerary`

# v18.0.1 (23/01/2020)

- **[UPDATE]** Added scrolling snap on `topTripCardList`
- **[FIX]** Removed icon imports which were directly importing from icon/index. This fixes code splitting on Icon in the SPA.

# v18.0.0 (22/01/2020)

- **[NEW]** `Bullet` component
- **[UPDATE]** Refactor `Itinerary`
- **[NEW]** Added `plugUsbSocket`, `priorityService`, `quiet`, `qrCode`, `recliningSeat`, `seatBelt`, `seatWithTable`, `snack`, `airConditioning`, `audio`, `bikeArea`, `blanket`, `child`, `comfortSeat`, `crew`, `drink`, `genericAmenity`, `handLuggage`, `holdLuggage`, `legRest`, `legRoom`, `light`, `magazine`, `meal`, `seatSliding`, `sleep`, `standardSeat`, `videoSystem`, `vipLounge`, `wc`, `wifi` icons
- **[BREAKING CHANGE]** Change `petIcon` filename

# v17.4.1 (20/01/2020)

- **[FIX]** Fix the font size of `TheVoice` component on small screens

# v17.4.0 (15/01/2020)

- **[NEW]** Add d.ts declaration and sourcemaps
- **[NEW]** Export TypeScript interfaces

# v17.3.0 (09/01/2020)

- **[NEW]** Add `MeetingPointIcon`
- **[FIX]** Hide input range track on Safari for `Stepper` component

# v17.2.0 (07/01/2020)

- **[NEW]** Add `leftTitleButtonAddon` prop to `Item`
- **[NEW]** Add `mainTitleButtonAddon` prop to `ItemData`

# v17.1.0 (06/01/2020)

- **[FIX]** Fix `Itinerary` component display with only one stopover
- **[FIX]** Fix `Itinerary` component display without time
- **[NEW]** Added rating prop to `TripCard`

# v17.0.0 (24/12/2019)

- **[BREAKING CHANGE]** Moved `classcat` to `peerDependencies`
- **[UPDATE]** Add keyboard controls to `Stepper`
- **[UPDATE]** Dependencies update
- **[DEV]** Migrated from `tslint` to `eslint`
- **[DEV]** Fix code analysis not run in travis

# v16.2.0 (16/12/2019)

- **[FIX]** Fix layout issue on `TopTripCardList`
- **[NEW]** Add `rightTitleStrikeThrough` prop to `Item` and `ItemData`

# v16.1.1 (12/12/2019)

- **[FIX]** Remove `type="button"` from `ItemAction` (caused <a> to have the prop)

# v16.1.0 (12/12/2019)

- **[FIX]** Add `type="button"` to `ItemAction` default tag to avoid form submission
- **[NEW]** Add `TopTripCardList` component

# v16.0.4 (09/12/2019)

- **[NEW]** Allow rendering of non-highlighted `ItemAction`.

# v16.0.3 (09/12/2019)

- **[NEW]** Add `ariaLabel` prop to `ItemChoice`

# v16.0.2 (04/12/2019)

- **[NEW]** Add `onClick` prop to `ItemRadio` and `ItemRadioGroup`

# v16.0.1 (28/11/2019)

- **[FIX]** Fix focus behavior for`Textarea` when clicking its margins.
- **[NEW]** Add `ariaLabel` prop to `TripCard` (a11y)

# v16.0.0 (25/11/2019)

- **[BREAKING CHANGE]** `AutoComplete` prop `renderNoResults` now expects a string
- **[FIX]** Update no-results rendering for `AutoComplete`
- **[FIX]** `Button` alignment issues on Safari 10

# v15.1.3 (25/11/2019)

- **[NEW]** Add `ariaLabel` prop to `Profile` (a11y)

# v15.1.2 (25/11/2019)

- **[FIX]** Fix `Tabs` state not updated in situations such as back navigation
- **[FIX]** Ensure that image in `SuccessModal` doesn't take more than a third of screen height

# v15.1.1 (21/11/2019)

- **[FIX]** Fix styles targeting for `Itinerary` with small mode

# v15.1.0 (21/11/2019)

- **[NEW]** Show month corresponding to `initialDate` in `DatePicker`
- **[FIX]** Fix random font-size issue in `Stepper` using `StepperDisplay.LARGE`
- **[NEW]** Add `id` prop to `Title`
- **[NEW]** Add `id` prop to `TheVoice`
- **[NEW]** Add focus styles to `ItemRadio` (a11y)
- **[NEW]** Add `ariaLabelledBy` prop to `ItemRadioGroup` (a11y)
- **[FIX]** Enhance a11y by linking the content id with aria attributes on `SuccessModal`

# v15.0.4 (20/11/2019)

- **[FIX]** Fix missing classname on `Itinerary` root element
- **[FIX]** Enhance a11y by adding optional labels with aria attributes on `ItemData`

# v15.0.3 (18/11/2019)

- **[FIX]** Fix a11y by adding labels with aria attributes on `Itinerary`

# v15.0.2 (12/11/2019)

- **[FIX]** Fix text wrapping and clamping in `MessageSummaryItem`

# v15.0.1 (12/11/2019)

- **[FIX]** Disable `Stepper` autoresize when `display` is `StepperDisplay.SMALL`

# v15.0.0 (12/11/2019)

- **[BREAKING CHANGE]** `display` replaces `buttonSize` prop in `Stepper` component
- **[NEW]** `Stepper` component now renders its value depending on available space
- **[NEW]** Focus the select when `focus` prop changes on `TimePicker`
- **[FIX]** Fix right margin on `MarketingMessage`

# v14.0.1 (08/11/2019)

- **[NEW]** `focus` prop on `TimePicker`

# v14.0.0 (08/11/2019)

- **[FIX]** Restore outline on `Button`, `Dropdown`, `HamburgerButton` and `ToggleButton`
- **[BREAKING CHANGE]** - Overhaul on `Message` component: Correct layout and support for message annotation.

# v13.0.3 (06/11/2019)

- **[FIX]** Fix scrolling visual for `Textarea`.

# v13.0.2 (04/11/2019)

- **[NEW]** Export new colors

# v13.0.1 (30/10/2019)

- **[FIX]** Restore focus and click when Modal component unmounts.

# v13.0.0 (22/10/2019)

- **[NEW]** Add `MarketingMessage` Pixar widget.
- **[BREAKING CHANGE]** - Make `Tabs` and their panels layouts independent at DOM level.
- **[FIX]** Fix various alignment issues and some a11y for `Itinerary` and `TripCard`.

# v12.0.0 (09/10/2019)

- **[BREAKING CHANGE]** - Replaced `fullscreen` prop from `Modal` with new entry in enum `ModalSize`
- **[NEW]** Add `SubHeader` Pixar widget.

# v11.4.0 (09/10/2019)

- **[NEW]** Add `Divider` Pixar widget.
- **[NEW]** Add `BlankSeparator` Pixar widget.
- **[UPDATE]** Add `highlighted` option to `ItemRadio`
- **[UPDATE]** Fix `Tabs` content aligned to the left
- **[UPDATE]** Add new display modes for `Disclaimer` widget (isCaption and deprecatedHelpUrl).

# v11.3.1 (07/10/2019)

- **[UPDATE]** Force equal width among fixed `Tabs`
- **[UPDATE]** Upgraded React to 16.9.0
- **[UPDATE]** Downgraded storybook breaking knobs
- **[UPDATE]** Removed deprecated `componentWillReceiveProps`

# v11.3.0 (04/10/2019)

- **[NEW]** Add `Disclaimer` component
- **[NEW]** Add `TheVoice` widget.
- **[NEW]** Add a breakpoint for responsive design in branding.

# v11.2.5 (24/09/2019)

- **[FIX]** Fix font-size for `MessagingSummaryItem` sublabel.
- **[UPDATE]** Add possibility to use icons in `Tabs`
- **[NEW]** Add `BusIcon` and `CarpoolIcon`

# v11.2.4 (16/09/2019)

- **[FIX]** Replace IE11 unsupported property closest() used in `Tabs`

# v11.2.3 (16/09/2019)

- **[UPDATE]** Add highlight animation on `Tabs`

# v11.2.2 (05/09/2019)

- **[FIX]** Restore `SendIcon` and add separate `SendMessageIcon`

# v11.2.1 (04/09/2019)

- **[FIX]** Fix viewbox for `DetourIcon`
- **[FIX]** `<Snackbar>`: Fix alignment on IE11.
- **[NEW]** New prop `errorClassName` on `<TextField>` and `<Textarea>`
- **[NEW]** Loading state for `ConfirmationModal` confirm button

# v11.2.0 (04/09/2019)

- **[NEW]** Add `DetourIcon`

# v11.1.0 (03/09/2019)

- **[NEW]** Add new `CarIcon`, `MailIcon`, `PhotoIcon`
- **[UPDATE]** Update visual of `SendIcon`
- **[FIX]** Update height of `Textarea` when its content is changed programmatically while using the `fitContent` behavior.
- **[FIX]** Fix icon jump when focusing `Textarea`

# v11.0.3 (30/08/2019)

- **[FIX]** `<DatePicker>`: add highlight for today's date.

# v11.0.2 (26/08/2019)

- **[FIX]** `<Tabs>`: Added padding on tab when `isWrapped` is true

# v11.0.1 (21/08/2019)

- **[FIX]** `<TripCard>`: Fix hover style.
- **[FIX]** `<Textarea>`: Fix on focus exception.

# v11.0.0 (20/08/2019)

- **[BREAKING CHANGE]** Extract `Textarea` from `TextField`
- **[NEW]** Add ability to add a bottom/right button icon to `Textarea`
- **[NEW]** Add fitContent feature to `Textarea` which allow the textarea to grow/shrink with its content.

# v10.0.2 (16/08/2019)

- **[FIX]** `<Snackbar>`: Reinforce style specificities to avoid children components to override text color and padding

# v10.0.1 (07/08/2019)

- **[FIX]** `<Profile>`: name should be display in DISPLAY1 instead of DISPLAY2 when medium

# v10.0.0 (07/08/2019)

- **[FIX]** Non-valid CSS property on Snackbar
- **[UPDATE]** `<Itinerary>`: Change font weight of the headline to medium
- **[BREAKING CHANGE]** `<Profile>`: will have medium font weight when isMedium is true
- **[BREAKING CHANGE]** `DISPLAY1` and `DISPLAY2` css has been inverted to comply to the design specification names

# v9.0.0 (01/08/2019)

- **[FIX]** Fix pointy corner on active `Message` (from top-right to bottom-right)
- **[UPDATE]** Update Node version to 10.15.0
- **[BREAKING CHANGE]** Removed locale props from TimePicker
- **[BREAKING CHANGE]** `<Text>`: changed export for `TextDisplayType` `TextTagType`
- **[BREAKING CHANGE]** `<Tabs>`: changed export for `TabsStatus`
- **[BREAKING CHANGE]** `Button`: changed export for `Button.STATUS` to new `ButtonStatus`
- **[BREAKING CHANGE]** `DatePicker`: changed export of `DatePicker.constants` to `DatePickerOrientation`
- **[BREAKING CHANGE]** `<ItemRadio>`: changed export for `ItemRadioStatus`
- **[BREAKING CHANGE]** `<ToggleButton>`: changed export for `ToggleButtonStatus`
- **[BREAKING CHANGE]** `ItemCheckbox`: changed export of `ItemCheckbox.STATUS` to `ItemCheckboxStatus`
- **[BREAKING CHANGE]** `Transitions`: changed export for `CustomTransition.TYPES` to new `AnimationType`
- **[BREAKING CHANGE]** `ConfirmationModal`: changed export of `ConfirmationModal.STATUS` to `ConfirmationModalStatus`
- **[BREAKING CHANGE]** `ItemsList`: changed export of `ItemsList.Divider` to `ItemsListDivider`
- **[BREAKING CHANGE]** `<ItemChoice>`: changed export for `ItemChoice.STATUS` to `ItemChoiceStatus` and `ItemChoice.STYLE` to `ItemChoiceStyle`
- **[BREAKING CHANGE]** `<Modal>`: changed export for `Modal.SIZE` to `ModalSize`
- **[BREAKING CHANGE]** `<Modal>`: rename `className` props to `modalContentClassName`
- **[BREAKING CHANGE]** `<PhoneField>`: changed `className` prop position to the root element, added `innerWrapperClassName` prop as replacement
- **[BREAKING CHANGE]** Migrated every component to Styled Components which is now a peer dependency of this project
- **[BREAKING CHANGE]** `<BaseIcon>`: rename `className` props to `iconClassName`

# v8.8.0 (24/07/2019)

- **[NEW]** Add new `CreditCardIcon`, `ExclamationIcon`, `GiftIcon`, `idCheckIcon`
- **[UPDATE]** `Badge` now contained within a `span` instead of a `div`
- **[FIX]** Selected tab highlight correctly displayed in `Tabs` with scrollable status
- **[UPDATE]** Extended click area for tabs in the `Tabs` component
- **[UPDATE]** Added a new prop `isWrapped` and a second wrapper `div` to the `Tabs` component to limit width to content
- **[UPDATE]** Added a new prop `tablistWrapperClassName` to `Tabs` component to allow for more customisation

# v8.7.0 (19/07/2019)

- **[UPDATE]** Components in Tabs panel are not rendered if not displayed
- **[UPDATE]** Add support for HTML sub-labels for `MessaginSummaryItem`.

# v8.6.0 (18/07/2019)

- **[NEW]** Created new `MessagingSummaryItem`
- **[UPDATE]** Dependencies update
- **[UPDATE]** Added `onChange`, `status`, `badgeContent`, `badgeAriaLabel` props, and various UI changes to `Tabs`

# v8.5.0 (09/07/2019)

- **[NEW]** Added `ref` and `focus` properties on `SelectField`
- **[NEW]** Added `focus` property on `PhoneField`

# v8.4.0 (05/07/2019)

**[NEW]** Added new `Tabs` Pixar component

# v8.3.3 (28/06/2019)

- **[FIX]** Display `Itinerary` as small if we don't provide date or subLabel in places
- **[FIX]** Added background for transparent avatars in `TripCard`
- **[FIX]** Update `Title` style in `TripCard`
- **[FIX]** Update margins in `EmptyState` component

# v8.3.2 (27/06/2019)

- **[NEW]** Added `BanIcon`

# v8.3.1 (26/06/2019)

- **[FIX]** `TextField` Typescript validation into `PhoneField` and `AutoComplete`

# v8.3.0 (26/06/2019)

- **[NEW]** Added `pattern` and `inputMode` properties on `TextField`

# v8.2.0 (25/06/2019)

- **[NEW]** Add `EmptyState` component
- **[FIX]** `Profile` gets back its hovering effect (similar to other clickable items)
- **[FIX]** Remove extra attributes on `Item`-like components when `href` attribute is a string

# v8.1.0 (24/06/2019)

- **[NEW]** Added `MyRidesIcon`
- **[NEW]** Added `badgeContent` and `badgeAriaLabel` to all icons
- **[UPDATE]** Refactored icons to have common props & options

# v8.0.0 (21/06/2019)

- **[BREAKING CHANGE]** Removed forwardProps and added `SIZE` static property on `Modal`

# v7.0.0 (20/06/2019)

- **[BREAKING CHANGE]** Removed `Modal` large prop and added `size` with 3 preset values instead

# v6.0.2 (18/06/2019)

- **[FIX]** Fix `AutoComplete` key stringify and allow customization from outside

# v6.0.1 (17/06/2019)

- **[UPDATE]** Remove tripCard border
- **[FIX]** Fix `createFocusTrap` in `<Modal>` initialized in the wrong place

# v6.0.0 (13/06/2019)

- **[NEW]** Complete refactoring of `ItemChoice` to now use `Item` as its base component.
- **[BREAKING CHANGE]** `Checkbox`, `Radio` and `RadioGroup` have been removed.
- **[BREAKING CHANGE]** `ItemDeclaredChoice` and `ItemDeclaredChoiceGroup` have been renamed to `ItemRadio` and `ItemRadioGroup`.
- **[NEW]** `ItemsList` is a new component that's in charge of handling separators and listing of `ItemChoice`-like components.
- **[NEW]** `ItemCheckbox` replaces the old `Checkbox` component and uses `Item` as its base component. Its API is similar to `ItemRadio`.
- **[BREAKING CHANGE]** `AutoComplete`, `Menu` and `Drawer` now use `ItemChoice` and `ItemsList`, their API have been edited accordingly to `ItemChoice` API changes.
- **[BREAKING CHANGE]** `renderItem` prop on `AutoComplete` has been removed.

# v5.3.1 (13/06/2019)

- **[FIX]** Handle display for 5+ passengers in `TripCard`
- **[FIX]** `metaUrl` property is now optional for `TripCard`

# v5.3.0 (11/06/2019)

- **[NEW]** Added `title` option to `TripCard`

# v5.2.1 (10/06/2019)

- **[NEW]** Added `error` property to `PhoneField`
- **[FIX]** Make `dropdown icon` clickable on `SelectField`

# v5.2.0 (06/06/2019)

- **[NEW]** Added `passengers` option to `TripCard`
- **[NEW]** Added `badge` option to `TripCard`
- **[NEW]** Added `statusInformation` option to `TripCard`
- **[NEW]** Added css shadow to `TripCard`
- **[NEW]** Added `status` prop to `ItemAction`
- **[FIX]** Fixed button with `CHECKED` status in `ButtonGroup`
- **[DEV]** Added typescript check in pre-commit hook

# v5.1.1 (04/06/2019)

- **[DEV]** Fixed typescript issues in `ButtonGroup`

# v5.1.0 (unreleased)

- **[NEW]** Added `loadingIndex` property to `ButtonGroup` to handle loading/disabled state of child `Button`

# v5.0.0 (28/05/2019)

- **[BREAKING CHANGE]** `PhoneField` Fix wrong payload value by changing prefix logic to region

# v4.1.0 (17/05/2019)

- **[NEW]** Added `ItemDeclaredChoice` and `ItemDeclaredChoiceGroup`
- **[FIX]** `PhoneField` Use region code on option to have unique value

# v4.0.0 (02/05/2019)

- **[BREAKING CHANGE]** Moved `react` and `react-dom` to `peerDependencies`

# v3.2.0 (30/04/2019)

- **[NEW]** Added `AvatarIcon`
- **[NEW]** Added `FlagsIcon`
- **[NEW]** Added `HourglassIcon`
- **[NEW]** Added `MapIcon`
- **[NEW]** Added `ShareIcon`

# v3.1.0 (24/04/2019)

- **[FIX]** Fix fade-in animation for Drawer dimmer
- **[UPDATE]** Added border on `TextField`, `PhoneField` and `SelectField` focus

# v3.0.0 (12/04/2019)

- **[BREAKING CHANGE]** `ConfirmationModal` & `SuccessModal` use `Modal` (`onConfirm` on `SuccessModal` is replaced with `onClose`)

# v2.0.2 (12/04/2019)

- **[UPDATE]** Added aria attributes and focus trap on `Modal`, `ConfirmationModal` and `SuccessModal`
- **[FIX]** `Button` doesn't display children on LOADING and CHECKED statuses

# v2.0.1 (05/04/2019)

- **[NEW]** Added `WheelchairIcon`
- **[UPDATE]** Refactor and change disabled color for `musicIcon`, `petIcon`, `smokeIcon`

# v2.0.0 (28/03/2019)

- **[FIX]** Update `TextField` state when the user text is formatted.
- **[BREAKING CHANGE]** `PhoneField` Renaming API props
- **[UPDATE]** `PhoneField` Add region countries data into state and onChange

# v1.3.1 (26/03/2019)

- **[UPDATE]** Support previousValue in `TextField` format callback

# v1.3.0 (21/03/2019)

- **[BREAKING CHANGE]** Migrate `DatePicker` to ReactDayPicker instead of React Dates, parts of the API of the component has been changed, and it no longer supports any language by default
- **[BREAKING CHANGE]** Remove Moment dependency

# v1.2.0 (20/03/2019)

- **[UPDATE]** Remove the kirk internal CLI
- **[UPDATE]** Add a way to attach specifications to components (with the example of the Button)
- **[FIX]** `Avatar` story is now able to render its different sizes

# v1.1.0 (20/03/2019)

- **[NEW]** `PhoneField` component
- **[UPDATE]** `SelectField` remove forwardRef prop and rename defaultValue
- **[UPDATE]** `TextField` Add tel type

# v1.0.1 (19/03/2019)

- **[UPDATE]** Export the react dates constants in the date picker component
- **[FIX]** Ensure that autocomplete texfield is updated when its defaultValue props is updated.

# v1.0.0 (13/03/2019)

- **[UPDATE]** Storybook moving to V5
- **[NEW]** Adding accessibility & viewport storybook plugins
- **[UPDATE]** Moving to Babel 7
- **[UPDATE]** Removing tslint deprecated warnings
- **[UPDATE]** Removing unused libraries
- **[UPDATE]** Removing implicit shallow & mount in UT
- **[UPDATE]** Using husky instead of precommit for the git hooks
- **[UPDATE]** Removing css linter (legacy, targeting CSS files which does not exist anymore on this repository)
- **[UPDATE]** Moving to styled-jsx V3
- **[UPDATE]** Re-organize the dependencies (dev & prod dependencies)

# v0.24.1 (12/03/2019)

- **[FIX]** Pass `status` from `Menu` configuration to nested `ItemChoice` items.

# v0.24.0 (8/03/2019)

- **[NEW]** `ButtonGroup` component
- **[FIX]** Do not render empty itinerary steps when its title is a string made of whitespaces.
- **[FIX]** `Menu` component configures correctly its items onClick handlers.

# v0.23.0 (28/02/2019)

- **[NEW]** Add call and send icons
- **[UPDATE]** update `Itinerary` colors
- **[NEW]** Add SelectField component

# v0.22.1 (22/02/2019)

- **[FIX]** `Item` should not have an empty href on non A tags.
- **[FIX]** Check icon animation not played correctly on Safari
- **[FIX]** `Button` alignment issues fixed with `inline-flex` instead of `flex`

# v0.22.0 (11/02/2019)

- **[BREAKING CHANGE]** `TextField` no more boolean accepted in the error field
- **[UPDATE]** `Button` no more span in the Button
- **[UPDATE]** `Button` no more whitespace no wrap & text-ellipsis
- **[BREAKING CHANGE]** `Button` is now using a "isBubble" property instead of "icon" to round.
- **[Fix]** Remove the breaking change that added horizontal padding on Toggle button and profile in the previous version
- **[Fix]** Forward href props to the Item component
- **[UPDATE]** Remove the `ItemChoice` padding reduced when there is a sublabel

# v0.21.1 (12/02/2019)

- **[Fix]** Remove the breaking change that added horizontal padding on Toggle button and profile in the previous version
- **[Fix]** Forward href props to the Item component

# v0.21.0 (11/02/2019)

- **[NEW]** Add the ItemAction component
- **[NEW]** Add href and onClick on Profile
- **[UPDATE]** Add the hover state on Toggle button
- **[UPDATE]** Add the hover state on profile
- **[BREAKING CHANGE]** Add horizontal padding on Toggle button
- **[BREAKING CHANGE]** Add horizontal padding on profile

# v0.20.7 (18/01/2019)

- **[UPDATE]** Added optional property key in `Itinerary`'s place
- **[FIX]** `Itinerary` component without unnecessary z-index
- **[FIX]** `Itinerary` component using place' subLabel object as part of keys
- **[UPDATE]** `SuccessModal` Use `Text` component to display text content
- **[UPDATE]** Move `replaceNewLineWithBR` function to utils

# v0.20.6 (16/01/2019)

- **[UPDATE]** Support icon + text in Button

# v0.20.5 (11/01/2019)

- **[UPDATE]** Allow `format` prop on TextField component

# v0.20.4 (10/01/2019)

- **[FIX]** `SuccessModal` display with small content

# v0.20.3 (09/01/2019)

- **[NEW]** `SuccessModal` component
- **[UPDATE]** Move keycodes into a single util
- **[UPDATE]** Add possibility to have a role attribute on `<Text>`
- **[UPDATE]** Add the role "alert" on `<Snackbar>` for accessibility
- **[UPDATE]** Add aria-hidden on the `<Textfield>` clear button
- **[UPDATE]** `<Badge>` now also accepts numbers as children
- **[UPDATE]** `Dependencies` update
- **[UPDATE]** `ACI & ALUMCIGR` remove deprecated folders for CI

# v0.20.2 (02/01/2019)

- **[UPDATE]** Add `location` itemprop to `<Itinerary>`
- **[UPDATE]** You can now set a `textColor` prop to `<Text>` (hexadecimal only)

# v0.20.1 (19/12/2018)

- **[FIX]** Revert `styled-jsx` version to 2.2.7

# v0.20.0 (19/12/2018)

- **[BREAKING CHANGE]** Rename `WarningModal` to `ConfirmationModal`
- **[BREAKING CHANGE]** `ConfirmationModal` remove `title` and `displayCloseButton` props
- **[BREAKING CHANGE]** `ConfirmationModal` add `status` prop to display it as `WARNING/REMINDER`

# v0.19.1 (19/12/2018)

- **[NEW]** `WarningIcon` component
- **[FIX]** `TopBar` children styles now load correctly

# v0.19.0 (12/12/2018)

- **[BREAKING CHANGE]** Refactor `<Profile>` based on `<Item>`
- **[NEW]** `ToggleButton` component
- **[NEW]** `Prettier` added
- **[UPDATE]** `thin` prop on `CircleIcon` and `CheckIcon` for thinner stroke width

# v0.18.0 (30/11/2018)

- **[NEW]** Add brand colors for polyline
- **[UPDATE]** `<Button>` is `disabled` while in loading or checked state

# v0.17.7 (27/11/2018)

- **[UPDATE]** `SearchOnMount` boolean added to `<AutoComplete>`
- **[UPDATE]** `<Stepper>` added `align-self: center` to value

# v0.17.6 (19/11/2018)

- **[UPDATE]** `<Stepper>` added `className`, `valueClassName` & `buttonSize`

# v0.17.5 (19/11/2018)

- **[UPDATE]** `<ItemChoice>` `rightAddon` prop support for `<Menu>`

# v0.17.4 (14/11/2018)

- **[UPDATE]** `<Checkbox>` now supports loading state
- **[UPDATE]** `<ItemChoice>` and `<Radio>` now have a `declared` prop displaying the selected value

# v0.17.3 (23/10/2018)

- **[UPDATE]** `<BubbleIcon>` and `<HomeIcon>` have `ariaLabel` prop sent to `<Badge>`
- **[FIX]** `<Itinerary>` subLabel bug (div inside p)

# v0.17.2 (19/10/2018)

- **[FIX]** Typo in `<ItemChoice>` CSS
- **[FIX]** Remove wrong className in `<Itinerary>`
- **[FIX]** Fix regression on button display

# v0.17.1 (19/10/2018)

- **[UPDATE]** Content of the `<Button>` is now taking 100% of the width
- **[FIX]** Fix `<Button>` content ellipsis

# v0.17.0 (17/10/2018)

- **[BREAKING CHANGE]** `fromDistance` and `toDistance` props are now `fromAddon` and `toAddon` and expect to get a string as value (no more boolean)
- **[UPDATE]** `<Itinerary>` is now using `<Text>` component
- **[UPDATE]** `<Itinerary>` can now display links/buttons as city steps
- **[FIX]** Chevron in `<ItemChoice>` is now well centered vertically

# v0.16.2 (08/10/2018)

- **[FIX]** `CheckShieldIcon` well centered

# v0.16.1 (05/10/2018)

- **[FIX]** Style for `Badge` in `Avatar`

# v0.16.0 (03/10/2018)

- **[UPDATE]** Use `Badge` in `BubbleIcon` and `HomeIcon`
- **[BREAKING CHANGE]** Use `Badge` for ID Check in `Avatar` and renamed props
- **[NEW]** `Badge` component
- **[FIX]** Rename `IdCardVerifiedIcon`

# v0.15.0 (03/10/2018)

- **[BREAKING CHANGE]** Rename `Notification` to `Snackbar`

# v0.14.0 (03/10/2018)

- **[BREAKING CHANGE]** `Dropdown` moved `className` on parent element instead of `<button>`

# v0.13.0 (02/10/2018)

- **[UPDATE]** `Stepper` & `Button` Add touch event
- **[BREAKING CHANGE]** `DropdownButton` no longer handles the dropdown content, added a `onClick()` callback

# v0.12.0 (01/10/2018)

- **[UPDATE]** The autocomplete now trigger a search on mount if a defaultValue is provided
- **[BREAKING CHANGE]** The autocomplete query doesn't change when the defaultValue change

# v0.11.3 (28/09/2018)

- **[FIX]** `Stepper` Add onChange callback for external components

# v0.11.2 (27/09/2018)

- **[FIX]** `Stepper` keep the right value after min and max props changes
- **[UPDATE]** `Stepper` component can increase/decrease value easily by keeping buttons pressed
- **[NEW]** Added icons: `checkShieldIcon`, `departureIcon`, `directionIcon`, `idCardVerifiedIcon`

# v0.11.1 (26/09/2018)

- **[UPDATE]** Changed `<Drawer>` transition from top to bottom
- **[UPDATE]** Changed `<HamburgerButton>` color

# v0.11.0 (19/09/2018)

- **[BREAKING CHANGE]** Added an `open` & `innerClassName` props on `<Drawer>`
- **[FIX]** Remove wrong coloring on AutoComplete when using keyboard to navigate

# v0.10.2 (10/09/2018)

- **[FIX]** Force scroll to top on `Drawer` when opening
- **[FIX]** Added `type=button` on `DrodpdownButton`
- **[FIX]** Lock scroll on body when `Drawer` is opened

# v0.10.1 (28/08/2018)

- **[UPDATE]** `Text` component is now replacing \n by `<br/>` tags by default
- **[UPDATE]** Use Facebook and VK brand color as default icon color

# v0.10.0 (27/08/2018)

- **[FIX]** Wrong flush import from 'styled-jsx/server' (issue #42)
- **[UPDATE]** Add ref attribute on Modal using forwardRef new API
- **[BREAKING CHANGE]** `Menu` component is now using `ItemChoice`

# v0.9.0 (24/08/2018)

- **[NEW]** ItemInfo component
- **[NEW]** Icons for Navigation (BankIcon, BellIcon, BubbleIcon, CoinIcon, CrossDiscIcon, HomeIcon, NewspaperIcon, ProfileIcon, TicketIcon)
- **[UPDATE]** `IncreaseIcon` and `DecreaseIcon` are now `PlusIcon` and `MinusIcon`
- **[UPDATE]** `TripCard` is now using `Text` component
- **[FIX]** Margin between the elements on the bottom part of the `TripCard` when resizing

# v0.8.0 (16/08/2018)

- **[BREAKING CHANGE]** Change name of the `container` prop on the `<Text>` component into `tag` (harmonization)
- **[FIX]** Handling of the colors on the `<PinIcon>`

# v0.7.0 (26/07/2018)

- **[NEW]** ItemData component

# v0.6.6 (26/07/2018)

- [PushInfo] Fix stretched display issue
- [Timepicker] Fix safari issue with timezone

# v0.6.5 (26/07/2018)

- [TopBar] Add an inner wrapper
- [Modal] Fix server side rendering
- [Notification] Fix server side rendering

# v0.6.4 (26/07/2018)

- [Modal] Fix double scrollbars display

# v0.6.2 (24/07/2018)

- [Proximity] Adjust margins
- [PushInfo] Fixed IE11 issues
- [UneditableTextField] Fixed IE11 issues
- [Timepicker] Added prop `timeStart`
- [Avatar] IdCheck display update

# v0.6.1 (19/07/2018)

- [Timepicker] Fixed timepicker issue in negative timezone

# v0.6.0 (17/07/2018)

- [Notification] Add the notification component
- [Text] Add the text component

# v0.5.3 (06/07/2018)

- [Modal] Fix server side modal render

# v0.5.2 (06/07/2018)

- [Icons] Add prefs icons
- [Modal & WarningModal] Only listen to events when the modal is opened

# v0.5.1 (04/07/2018)

- [WarningModal] fix missing z-index
- [Avatar] fix non square pictures

# v0.5.0 (28/06/2018)

- [Icons] Add Info
- [Icons] Add new Pinterest & Odnoklassniki
- [Icons] Improve the Icons import in the main file
- [WarningModal] Add new WarningModal component

# v0.4.1 (26/06/2018)

- [Dependencies] Update external dependencies
- [C.I.] Fix linter on dev & CI
- [Icons] Generate automatically the icons on storybook with its knobs.
- [Icons] Remove the warning/errors generated by the icons.
- [Stepper] Removed onChange callback when mounting

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
