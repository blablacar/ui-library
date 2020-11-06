import styled from 'styled-components'

export const StyledAutoComplete = styled.div`
  display: flex;
  flex-direction: column;

  & .kirk-autoComplete-body {
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    min-height: 300px;
  }

  /**
   * Address appearance set to searchfield in Safari and Chrome.
   * Address box-sizing set to border-box in Safari and Chrome
   */
  & input[type='search'] {
    -webkit-appearance: textfield;
    box-sizing: content-box;
  }

  /**
   * Remove inner padding and search cancel button in Safari and Chrome on OS X.
   * Safari (but not Chrome) clips the cancel button when the search input has
   * padding (and textfield appearance).
   */
  & input[type='search']::-webkit-search-cancel-button,
  & input[type='search']::-webkit-search-decoration {
    -webkit-appearance: none;
  }
`
