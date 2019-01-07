import css from 'styled-jsx/css'
import { color, font } from '_utils/branding'

/* Kirk overrides */
export default css`
  :global(.datePicker) {
    height: 100%;
  }
  :global(.DayPicker__horizontal),
  :global(.DayPicker__verticalScrollable) {
    box-shadow: none;
  }
  :global(.DayPickerNavigation_button) {
    background: none;
    border: 0;
    border-radius: 50%;
    width: 48px;
    height: 48px;
    -webkit-tap-highlight-color: ${color.tapHighlight};
  }
  :global(.DayPickerNavigation_button:hover) {
    background-color: ${color.lightBackground};
  }
  /* Reset hover styles on devices not supporting hover state (e.g. touch devices). */
  @media (hover: none), (hover: on-demand) {
    :global(.DayPickerNavigation_button:hover) {
      background-color: transparent;
    }
  }
  :global(.DayPicker_weekHeader) {
    color: ${color.primaryText};
  }
  :global(.DayPicker_weekHeader small) {
    font-size: ${font.base.size};
  }
  :global(.DayPicker_weekHeader_ul) {
    display: flex;
    align-items: center;
    height: 48px;
  }
  :global(.CalendarMonth_caption) {
    padding-top: 28px;
    padding-bottom: 58px;
    color: ${color.primaryText};
    font-size: ${font.l.size};
    font-weight: normal;
  }
  :global(.CalendarMonth_caption::first-letter) {
    text-transform: uppercase;
  }
  :global(.CalendarMonth_caption strong) {
    font-weight: normal;
  }
  :global(.CalendarDay__default),
  :global(.CalendarDay__default:hover) {
    font: inherit;
    border-color: transparent;
    color: ${color.secondaryText};
    background: none;
    cursor: pointer;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }
  :global(.CalendarDay__blocked_out_of_range),
  :global(.CalendarDay__blocked_out_of_range:active),
  :global(.CalendarDay__blocked_out_of_range:hover) {
    color: ${color.disabled};
  }
  :global(.CalendarDay__button) {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    border-radius: 50%;
    width: 36px;
    height: 36px;
  }
  :global(.CalendarDay__default
      :not(.CalendarDay__blocked_out_of_range)
      :not(.CalendarDay__selected)
      .CalendarDay__button:hover) {
    background-color: ${color.lightBackground};
  }
  :global(.CalendarDay__selected .CalendarDay__button) {
    background-color: ${color.primary};
    color: ${color.white};
  }

  /* Kirk theme: vertical orientation only */

  :global(.DayPicker_transitionContainer__verticalScrollable) {
    padding-top: 30px;
    -webkit-overflow-scrolling: touch;
  }
  :global(.CalendarMonth_caption__verticalScrollable) {
    padding-top: 30px;
    padding-bottom: 7px;
  }
  :global(.CalendarMonthGrid__vertical_scrollable) {
    margin: 0;
  }
  :global(.DayPicker__verticalScrollable .CalendarMonth) {
    padding: 0;
  }
  :global(.DayPicker__verticalScrollable .CalendarMonth_caption) {
    padding-left: 12px;
    padding-bottom: 16px;
    text-align: left;
  }
  :global(.DayPicker_weekHeader__verticalScrollable) {
    padding: 0;
    border: 0;
  }
  :global(.DayPicker__verticalScrollable .DayPicker_weekHeader_li) {
    font-size: ${font.base.size};
    padding: 0;
  }
`
