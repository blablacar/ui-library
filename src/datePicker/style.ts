// DO NOT EDIT
// This CSS contents is extracted from 'react-dates/lib/css/_datepicker.css'
import css from 'styled-jsx/css'

export default css`
  :global(.SingleDatePicker) {
    position: relative;
    display: inline-block;
  }
  :global(.SingleDatePicker__block) {
    display: block;
  }
  :global(.SingleDatePicker_picker) {
    z-index: 1;
    background-color: #fff;
    position: absolute;
  }
  :global(.SingleDatePicker_picker__rtl) {
    direction: rtl;
  }
  :global(.SingleDatePicker_picker__directionLeft) {
    left: 0;
  }
  :global(.SingleDatePicker_picker__directionRight) {
    right: 0;
  }
  :global(.SingleDatePicker_closeButton) {
    background: 0 0;
    border: 0;
    color: inherit;
    font: inherit;
    line-height: normal;
    overflow: visible;
    cursor: pointer;
    position: absolute;
    top: 0;
    right: 0;
    padding: 15px;
    z-index: 2;
  }
  :global(.SingleDatePicker_closeButton:focus),
  :global(.SingleDatePicker_closeButton:hover) {
    color: darken(#cacccd, 10%);
    text-decoration: none;
  }
  :global(.SingleDatePicker_closeButton_svg) {
    height: 15px;
    width: 15px;
    fill: #cacccd;
  }
  :global(.DayPicker) {
    background: #fff;
    position: relative;
    text-align: left;
  }
  :global(.DayPicker__horizontal) {
    background: #fff;
  }
  :global(.DayPicker__verticalScrollable) {
    height: 100%;
  }
  :global(.DayPicker__hidden) {
    visibility: hidden;
  }
  :global(.DayPicker__withBorder) {
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(0, 0, 0, 0.07);
    border-radius: 3px;
  }
  :global(.DayPicker_portal__horizontal) {
    box-shadow: none;
    position: absolute;
    left: 50%;
    top: 50%;
  }
  :global(.DayPicker_portal__vertical) {
    position: initial;
  }
  :global(.DayPicker_focusRegion) {
    outline: 0;
  }
  :global(.DayPicker_weekHeaders) {
    position: relative;
  }
  :global(.DayPicker_weekHeaders__horizontal) {
    margin-left: 9px;
  }
  :global(.DayPicker_weekHeader) {
    color: #757575;
    position: absolute;
    top: 62px;
    z-index: 2;
    padding: 0 13px;
    text-align: left;
  }
  :global(.DayPicker_weekHeader__vertical) {
    left: 50%;
  }
  :global(.DayPicker_weekHeader__verticalScrollable) {
    top: 0;
    display: table-row;
    border-bottom: 1px solid #dbdbdb;
    background: #fff;
    margin-left: 0;
    left: 0;
    width: 100%;
    text-align: center;
  }
  :global(.DayPicker_weekHeader_ul) {
    list-style: none;
    margin: 1px 0;
    padding-left: 0;
    padding-right: 0;
    font-size: 14px;
  }
  :global(.DayPicker_weekHeader_li) {
    display: inline-block;
    text-align: center;
  }
  :global(.DayPicker_transitionContainer) {
    position: relative;
    overflow: hidden;
    border-radius: 3px;
  }
  :global(.DayPicker_transitionContainer__horizontal) {
    transition: height 0.2s ease-in-out;
  }
  :global(.DayPicker_transitionContainer__vertical) {
    width: 100%;
  }
  :global(.DayPicker_transitionContainer__verticalScrollable) {
    padding-top: 20px;
    height: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    overflow-y: scroll;
  }
  :global(.DayPickerKeyboardShortcuts_buttonReset) {
    background: 0 0;
    border: 0;
    border-radius: 0;
    color: inherit;
    font: inherit;
    line-height: normal;
    overflow: visible;
    padding: 0;
    cursor: pointer;
    font-size: 14px;
  }
  :global(.DayPickerKeyboardShortcuts_buttonReset:active) {
    outline: 0;
  }
  :global(.DayPickerKeyboardShortcuts_show) {
    width: 22px;
    position: absolute;
    z-index: 2;
  }
  :global(.DayPickerKeyboardShortcuts_show__bottomRight) {
    border-top: 26px solid transparent;
    border-right: 33px solid #00a699;
    bottom: 0;
    right: 0;
  }
  :global(.DayPickerKeyboardShortcuts_show__bottomRight:hover) {
    border-right: 33px solid #008489;
  }
  :global(.DayPickerKeyboardShortcuts_show__topRight) {
    border-bottom: 26px solid transparent;
    border-right: 33px solid #00a699;
    top: 0;
    right: 0;
  }
  :global(.DayPickerKeyboardShortcuts_show__topRight:hover) {
    border-right: 33px solid #008489;
  }
  :global(.DayPickerKeyboardShortcuts_show__topLeft) {
    border-bottom: 26px solid transparent;
    border-left: 33px solid #00a699;
    top: 0;
    left: 0;
  }
  :global(.DayPickerKeyboardShortcuts_show__topLeft:hover) {
    border-left: 33px solid #008489;
  }
  :global(.DayPickerKeyboardShortcuts_showSpan) {
    color: #fff;
    position: absolute;
  }
  :global(.DayPickerKeyboardShortcuts_showSpan__bottomRight) {
    bottom: 0;
    right: -28px;
  }
  :global(.DayPickerKeyboardShortcuts_showSpan__topRight) {
    top: 1px;
    right: -28px;
  }
  :global(.DayPickerKeyboardShortcuts_showSpan__topLeft) {
    top: 1px;
    left: -28px;
  }
  :global(.DayPickerKeyboardShortcuts_panel) {
    overflow: auto;
    background: #fff;
    border: 1px solid #dbdbdb;
    border-radius: 2px;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 2;
    padding: 22px;
    margin: 33px;
  }
  :global(.DayPickerKeyboardShortcuts_title) {
    font-size: 16px;
    font-weight: 700;
    margin: 0;
  }
  :global(.DayPickerKeyboardShortcuts_list) {
    list-style: none;
    padding: 0;
    font-size: 14px;
  }
  :global(.DayPickerKeyboardShortcuts_close) {
    position: absolute;
    right: 22px;
    top: 22px;
    z-index: 2;
  }
  :global(.DayPickerKeyboardShortcuts_close:active) {
    outline: 0;
  }
  :global(.DayPickerKeyboardShortcuts_closeSvg) {
    height: 15px;
    width: 15px;
    fill: #cacccd;
  }
  :global(.DayPickerKeyboardShortcuts_closeSvg:focus),
  :global(.DayPickerKeyboardShortcuts_closeSvg:hover) {
    fill: #82888a;
  }
  :global(.KeyboardShortcutRow) {
    list-style: none;
    margin: 6px 0;
  }
  :global(.KeyboardShortcutRow__block) {
    margin-bottom: 16px;
  }
  :global(.KeyboardShortcutRow_keyContainer) {
    display: inline-block;
    white-space: nowrap;
    text-align: right;
    margin-right: 6px;
  }
  :global(.KeyboardShortcutRow_keyContainer__block) {
    text-align: left;
    display: inline;
  }
  :global(.KeyboardShortcutRow_key) {
    font-family: monospace;
    font-size: 12px;
    text-transform: uppercase;
    background: #f2f2f2;
    padding: 2px 6px;
  }
  :global(.KeyboardShortcutRow_action) {
    display: inline;
    word-break: break-word;
    margin-left: 8px;
  }
  :global(.DayPickerNavigation_container) {
    position: relative;
    z-index: 2;
  }
  :global(.DayPickerNavigation_container__vertical) {
    background: #fff;
    box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.1);
    position: absolute;
    bottom: 0;
    left: 0;
    height: 52px;
    width: 100%;
  }
  :global(.DayPickerNavigation_container__verticalScrollable) {
    position: relative;
  }
  :global(.DayPickerNavigation_button) {
    cursor: pointer;
    line-height: 0.78;
    user-select: none;
  }
  :global(.DayPickerNavigation_button__default) {
    border: 1px solid #e4e7e7;
    background-color: #fff;
    color: #757575;
  }
  :global(.DayPickerNavigation_button__default:focus),
  :global(.DayPickerNavigation_button__default:hover) {
    border: 1px solid #c4c4c4;
  }
  :global(.DayPickerNavigation_button__default:active) {
    background: #f2f2f2;
  }
  :global(.DayPickerNavigation_button__horizontal) {
    border-radius: 3px;
    padding: 6px 9px;
    top: 18px;
    position: absolute;
  }
  :global(.DayPickerNavigation_leftButton__horizontal) {
    left: 22px;
  }
  :global(.DayPickerNavigation_rightButton__horizontal) {
    right: 22px;
  }
  :global(.DayPickerNavigation_button__vertical) {
    display: inline-block;
    position: relative;
    height: 100%;
    width: 50%;
  }
  :global(.DayPickerNavigation_button__vertical__default) {
    padding: 5px;
  }
  :global(.DayPickerNavigation_nextButton__vertical__default) {
    border-left: 0;
  }
  :global(.DayPickerNavigation_nextButton__verticalScrollable) {
    width: 100%;
  }
  :global(.DayPickerNavigation_svg__horizontal) {
    height: 19px;
    width: 19px;
    fill: #82888a;
  }
  :global(.DayPickerNavigation_svg__vertical) {
    height: 42px;
    width: 42px;
    fill: #565a5c;
  }
  :global(.CalendarMonthGrid) {
    background: #fff;
    text-align: left;
    z-index: 0;
  }
  :global(.CalendarMonthGrid__animating) {
    z-index: 1;
  }
  :global(.CalendarMonthGrid__horizontal) {
    position: absolute;
    left: 9px;
  }
  :global(.CalendarMonthGrid__vertical) {
    margin: 0 auto;
  }
  :global(.CalendarMonthGrid__vertical_scrollable) {
    margin: 0 auto;
    overflow-y: scroll;
  }
  :global(.CalendarMonthGrid_month__horizontal) {
    display: inline-block;
    vertical-align: top;
    min-height: 100%;
  }
  :global(.CalendarMonthGrid_month__hideForAnimation) {
    position: absolute;
    z-index: -1;
    opacity: 0;
    pointer-events: none;
  }
  :global(.CalendarMonthGrid_month__hidden) {
    visibility: hidden;
  }
  :global(.CalendarMonth) {
    background: #fff;
    text-align: center;
    padding: 0 13px;
    vertical-align: top;
    user-select: none;
  }
  :global(.CalendarMonth_table) {
    border-collapse: collapse;
    border-spacing: 0;
  }
  :global(.CalendarMonth_caption) {
    color: #565a5c;
    font-size: 18px;
    text-align: center;
    padding-top: 22px;
    padding-bottom: 37px;
    caption-side: initial;
  }
  :global(.CalendarMonth_caption__verticalScrollable) {
    padding-top: 12px;
    padding-bottom: 7px;
  }
  :global(.CalendarDay) {
    box-sizing: border-box;
    cursor: pointer;
    font-size: 14px;
    text-align: center;
  }
  :global(.CalendarDay:active) {
    outline: 0;
  }
  :global(.CalendarDay__defaultCursor) {
    cursor: default;
  }
  :global(.CalendarDay__default) {
    border: 1px solid #e4e7e7;
    color: #565a5c;
    background: #fff;
  }
  :global(.CalendarDay__default:hover) {
    background: #e4e7e7;
    border: 1px double #e4e7e7;
    color: inherit;
  }
  :global(.CalendarDay__hovered_offset) {
    background: #f4f5f5;
    border: 1px double #e4e7e7;
    color: inherit;
  }
  :global(.CalendarDay__outside) {
    border: 0;
    background: #fff;
    color: #565a5c;
  }
  :global(.CalendarDay__blocked_minimum_nights) {
    background: #fff;
    border: 1px solid #eceeee;
    color: #cacccd;
  }
  :global(.CalendarDay__blocked_minimum_nights:active),
  :global(.CalendarDay__blocked_minimum_nights:hover) {
    background: #fff;
    color: #cacccd;
  }
  :global(.CalendarDay__highlighted_calendar) {
    background: #ffe8bc;
    color: #565a5c;
  }
  :global(.CalendarDay__highlighted_calendar:active),
  :global(.CalendarDay__highlighted_calendar:hover) {
    background: #ffce71;
    color: #565a5c;
  }
  :global(.CalendarDay__selected_span) {
    background: #66e2da;
    border: 1px solid #33dacd;
    color: #fff;
  }
  :global(.CalendarDay__selected_span:active),
  :global(.CalendarDay__selected_span:hover) {
    background: #33dacd;
    border: 1px solid #33dacd;
    color: #fff;
  }
  :global(.CalendarDay__last_in_range) {
    border-right: #00a699;
  }
  :global(.CalendarDay__selected),
  :global(.CalendarDay__selected:active),
  :global(.CalendarDay__selected:hover) {
    background: #00a699;
    border: 1px solid #00a699;
    color: #fff;
  }
  :global(.CalendarDay__hovered_span),
  :global(.CalendarDay__hovered_span:hover) {
    background: #b2f1ec;
    border: 1px solid #80e8e0;
    color: #007a87;
  }
  :global(.CalendarDay__hovered_span:active) {
    background: #80e8e0;
    border: 1px solid #80e8e0;
    color: #007a87;
  }
  :global(.CalendarDay__blocked_calendar),
  :global(.CalendarDay__blocked_calendar:active),
  :global(.CalendarDay__blocked_calendar:hover) {
    background: #cacccd;
    border: 1px solid #cacccd;
    color: #82888a;
  }
  :global(.CalendarDay__blocked_out_of_range),
  :global(.CalendarDay__blocked_out_of_range:active),
  :global(.CalendarDay__blocked_out_of_range:hover) {
    background: #fff;
    border: 1px solid #e4e7e7;
    color: #cacccd;
  }
`
