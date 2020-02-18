import styled from 'styled-components'
import { color, font, space, transition } from '_utils/branding'

import Tabs from './Tabs'

const highlightHeight = '2px'

const StyledTabs = styled(Tabs)`
  & {
    position: relative;
  }

  & .kirk-tabs {
    margin-bottom: ${space.l};
    border-bottom: 1px solid ${color.border};
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
    align-items: center;
    justify-content: center;
    position: relative;
    width: 100%;
    height: 100%;
    outline: none;
    padding: ${space.l};
    background: none;
    border: none;
    background-color: ${color.white};
    color: ${color.primary};
    font-size: ${font.base.size};
    white-space: nowrap;
  }

  & .kirk-tab > .kirk-icon {
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

  & .kirk-tab-container {
    display: flex;
    justify-content: center;
    align-items: last baseline;
  }

  & .kirk-tabs-fixed .kirk-tab {
    white-space: normal;
  }

  & .kirk-tab-selected .kirk-tab {
    color: ${color.primaryText};
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
    background-color: ${color.primaryText};
    transition-property: width, left;
    transition-duration: ${transition.duration.base};
    transition-timing-function: ease-in-out;
  }
`

export { TabStatus, TabsProps, Tab } from './Tabs'
export default StyledTabs
