import styled from 'styled-components'

import {
  space,
  color,
  radius,
  responsiveBreakpoints,
  shadow,
  font,
  componentSizes,
} from '_utils/branding'
import SearchForm from './SearchForm'

const formWidth = '928px'
const formHeight = '56px'
const primaryFieldsWidth = '240px'
const secondaryFieldsWidth = '160px'
const buttonHeight = '48px'
const submitButtonWidth = '88px'

const StyledSearchForm = styled(SearchForm)`
  & {
    box-sizing: border-box;
    background-color: ${color.defaultBackground};
    box-shadow: ${shadow.searchForm};
    padding: ${space.m};
    padding-right: 0;
    width: ${formWidth};
    border-radius: ${radius.l};
    height: ${formHeight};
    display: flex;
    align-items: center;
  }

  & .kirk-searchForm-from-container,
  & .kirk-searchForm-dateSeat-container {
    display: flex;
  }

  & .kirk-searchForm-textfield .kirk-textField-wrapper {
    height: auto;
    background: none;
    border: none;
  }

  & .kirk-searchForm-textfield input {
    background: none;
  }

  & .kirk-searchForm-button {
    color: ${color.secondaryText};
  }

  & .kirk-bullet--searchForm {
    margin-right: ${space.m};
  }

  & .kirk-searchForm-invert {
    border-right: 1px solid ${color.inputBorder};
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
    color: ${color.secondaryText};
    background: none;
    display: flex;
    height: ${buttonHeight};
    box-sizing: border-box;
    line-height: ${font.l.lineHeight};
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
  }

  & .kirk-searchForm-from .kirk-search-button,
  & .kirk-searchForm-to .kirk-search-button {
    width: ${primaryFieldsWidth};
    border-right: 1px solid ${color.inputBorder};
    padding-left: ${space.m};
    line-height: ${componentSizes.bulletSizeSearch};
  }

  & .kirk-searchForm-date .kirk-search-button,
  & .kirk-searchForm-seats .kirk-search-button {
    width: ${secondaryFieldsWidth};
    padding-left: ${space.m};
  }

  & .kirk-searchForm-from .kirk-search-button {
    border-right: none;
  }

  & .kirk-searchForm-date .kirk-search-button {
    border-right: 1px solid ${color.inputBorder};
  }

  & .kirk-searchForm-submit .kirk-search-button {
    width: ${submitButtonWidth};
    height: ${formHeight};
    border-radius: 0 ${radius.l} ${radius.l} 0;
    background-color: ${color.primary};
  }

  & .kirk-searchForm-submit .kirk-icon {
    margin: 0;
  }

  & .kirk-search-button svg {
    margin: 0;
    margin-right: ${space.m};
  }

  & .kirk-searchForm-submit .kirk-icon {
    flex: 1;
  }

  @media (${responsiveBreakpoints.isMediaSmall}) {
    & {
      flex-direction: column;
      width: auto;
      height: auto;
      padding: ${space.xl};
      padding-bottom: 0;
      align-items: stretch;
    }

    & .kirk-searchForm-from .kirk-search-button,
    & .kirk-searchForm-to .kirk-search-button,
    & .kirk-searchForm-date .kirk-search-button,
    & .kirk-searchForm-seats .kirk-search-button {
      padding: 0;
      width: 100%;
    }

    & .kirk-searchForm-date {
      margin-right: ${space.m};
    }

    & .kirk-searchForm-from {
      flex-grow: 1;
    }

    & .kirk-searchForm-invert {
      padding: 0;
      border: none;
    }

    & .kirk-searchForm-to .kirk-search-button {
      border: none;
    }

    & .kirk-searchForm-date,
    & .kirk-searchForm-seats {
      flex: 1;
    }

    & .kirk-searchForm-dateSeat-container {
      padding-bottom: ${space.m};
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
export default StyledSearchForm
