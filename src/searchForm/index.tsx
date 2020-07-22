import styled from 'styled-components'

import {
  color,
  componentSizes,
  font,
  radius,
  responsiveBreakpoints,
  shadow,
  space,
} from '../_utils/branding'
import { SearchForm } from './SearchForm'

const formWidth = '928px'
const formHeight = '56px'
const primaryFieldsWidth = '240px'
const secondaryFieldsWidth = '160px'
const buttonHeight = '48px'
const buttonHeightSmall = '40px'
const submitButtonWidth = '88px'
const positionAutocompleteFrom = '-8px'
const positionAutocompleteTo = '268px'
const positionDateStepper = '473px'

const StyledSearchForm = styled(SearchForm)`
  & {
    box-sizing: border-box;
    background-color: ${color.white};
    box-shadow: ${shadow.searchForm};
    padding: ${space.m};
    padding-right: 0;
    width: ${formWidth};
    border-radius: ${radius.l};
    height: ${formHeight};
    display: flex;
    align-items: center;
    position: relative;
  }

  & .kirk-searchForm-from-container,
  & .kirk-searchForm-dateSeat-container {
    display: flex;
  }

  & .kirk-searchForm-from,
  & .kirk-searchForm-to {
    /* Hide the overflowing parts of the button during the animation. */
    overflow: hidden;
  }

  & .kirk-searchForm-to,
  & .kirk-searchForm-seats {
    border-left: 1px solid ${color.lightGray};
  }

  & .kirk-searchForm-textfield .kirk-textField-wrapper {
    height: auto;
    background: none;
    border: none;
  }

  & .kirk-search-placeholder {
    color: ${color.lightMidnightGreen};
  }

  & .kirk-searchForm-textfield input {
    background: none;
  }

  & .kirk-searchForm-button {
    color: ${color.lightMidnightGreen};
  }

  & .kirk-searchForm-invert .kirk-icon {
    transform: rotate(90deg);
  }

  & .kirk-search-button {
    display: flex;
    cursor: pointer;
    border: none;
    font-size: inherit;
    font-family: inherit;
    color: ${color.lightMidnightGreen};
    background: none;
    height: ${buttonHeight};
    box-sizing: border-box;
    line-height: ${font.l.lineHeight};
    width: 100%;
    min-width: 0;
    text-align: left;
    white-space: nowrap;
    overflow: hidden;
    align-items: center;

    & > *:not(:first-child) {
      margin-left: ${space.m};
    }

    &:disabled {
      cursor: default;
    }
  }

  & .kirk-searchForm-from .kirk-search-button,
  & .kirk-searchForm-to .kirk-search-button {
    width: ${primaryFieldsWidth};
    padding-left: ${space.m};
    line-height: ${componentSizes.bulletSizeSearch};
  }

  & .kirk-searchForm-invert .kirk-search-button {
    width: initial;
    padding: 0;
    margin-right: ${space.m};

    &:disabled {
      opacity: 0;
      cursor: default;
    }
  }

  & .kirk-searchForm-date .kirk-search-button,
  & .kirk-searchForm-seats .kirk-search-button {
    width: ${secondaryFieldsWidth};
    padding-left: ${space.m};
  }

  & .kirk-searchForm-date {
    border-left: 1px solid ${color.lightGray};
  }

  & .kirk-searchForm-submit .kirk-search-button {
    width: ${submitButtonWidth};
    height: ${formHeight};
    border-radius: 0 ${radius.l} ${radius.l} 0;
    background-color: ${color.blue};
    padding: 0;
    justify-content: center;
  }

  & .kirk-searchForm-submit .kirk-icon {
    margin: 0;
  }

  & .kirk-search-button svg {
    flex: none;
  }

  & .kirk-searchForm-overlay {
    position: absolute;
    top: -${space.m};
  }

  & .kirk-searchForm-autocomplete-from {
    left: ${positionAutocompleteFrom};
  }

  & .kirk-searchForm-autocomplete-to {
    left: ${positionAutocompleteTo};
  }

  & .kirk-searchForm-datepicker {
    left: ${positionDateStepper};
  }

  & .kirk-search-ellipsis {
    flex: 0 1 auto;
    min-width: 0;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }

  @media (${responsiveBreakpoints.isMediaSmall}) {
    & {
      flex-direction: column;
      width: auto;
      height: auto;
      padding: ${space.xl};
      padding-bottom: 0;
      align-items: stretch;
      padding-top: ${space.l};
    }

    & .kirk-searchForm-from .kirk-search-button,
    & .kirk-searchForm-to .kirk-search-button,
    & .kirk-searchForm-invert .kirk-search-button,
    & .kirk-searchForm-date .kirk-search-button,
    & .kirk-searchForm-seats .kirk-search-button {
      padding: 0;
      width: 100%;
      height: ${buttonHeightSmall};
      padding-top: ${space.m};
      padding-bottom: ${space.m};
    }

    & .kirk-searchForm-invert .kirk-search-button {
      width: initial;
      margin-right: 0;
    }

    & .kirk-searchForm-seats {
      padding-left: ${space.m};
    }

    & .kirk-searchForm-from {
      flex: 1;
      min-width: 0;
    }

    & .kirk-searchForm-invert {
      padding: 0;
    }

    & .kirk-searchForm-to,
    & .kirk-searchForm-date {
      border: none;
    }

    & .kirk-searchForm-date,
    & .kirk-searchForm-seats {
      flex: 1;
      min-width: 0;
    }

    & .kirk-searchForm-dateSeat-container {
      padding-bottom: ${space.l};
    }

    & .kirk-searchForm-submit {
      margin-left: -${space.xl};
      margin-right: -${space.xl};
    }

    & .kirk-searchForm-submit .kirk-search-button {
      width: 100%;
      border-radius: 0 0 ${radius.l} ${radius.l};
    }
  }
`

export * from './SearchForm'
export { StyledSearchForm as SearchForm }
export default StyledSearchForm
