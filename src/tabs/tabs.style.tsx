import styled from 'styled-components'

import { color, font, space, transition } from '../_utils/branding'

const highlightHeight = '2px'

export const StyledTabs = styled.div`
  & {
    position: relative;
  }

  & .kirk-tabs {
    border-bottom: 1px solid ${color.gray};
  }

  & .kirk-tablist {
    display: flex;
    margin: 0 auto;
    overflow: auto; /* Make tabs scrollable horizontally */
    -ms-overflow-style: none; /* Remove scrollbar visually IE 10+ */
    scrollbar-width: none; /* Remove scrollbar visually Firefox */
  }

  /* Remove scrollbar */
  & .kirk-tablist::-webkit-scrollbar {
    display: none;
  }

  & .kirk-tab {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    outline: none;
    padding: ${space.l};
    background: none;
    border: none;
    background-color: ${color.white};
    color: ${color.blue};

    /* Make sure the diacritics are not cropped. */
    line-height: normal;

    font-size: ${font.m.size};
  }

  & .kirk-tab-content {
    max-width: 100%;
    display: flex;
    align-items: center;
    position: relative;
    white-space: nowrap;
    flex-grow: 1;
  }

  & .kirk-tab-content > .kirk-icon {
    flex-shrink: 0;
  }

  & .kirk-tab-text {
    text-overflow: ellipsis;
    overflow: hidden;
  }

  & .kirk-tab-text--with-icon {
    margin-left: ${space.l};
    text-align: left;
  }

  & .kirk-tab-second-line {
    margin-top: ${space.m};
    max-width: 100%;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  & .kirk-tab-container {
    display: flex;
    justify-content: center;
    align-items: last baseline;
  }

  & .kirk-tabs-fixed .kirk-tab-content {
    white-space: normal;
    flex-grow: 1;
  }

  & .kirk-tab-selected .kirk-tab {
    color: ${color.midnightGreen};
  }

  & .kirk-tab:not(.kirk-tab-selected):hover {
    cursor: pointer;
  }

  & .kirk-tab-container .kirk-badge {
    position: relative;
    left: 0;
    top: calc(-1 * ${space.s});
    align-self: flex-start;
  }

  & .kirk-tab-highlight {
    position: absolute;
    z-index: 2;
    left: 0;
    bottom: 0;
    width: 0;
    height: ${highlightHeight};
    background-color: ${color.midnightGreen};
    transition-property: width, left;
    transition-duration: ${transition.duration.base};
    transition-timing-function: ease-in-out;
  }
`
