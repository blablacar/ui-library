import css from 'styled-jsx/css'
import { color, space, font } from '_utils/branding'

const bottomBorderWidth = '2px'
const bottomBorderOffset = '1px'
const badgeOffset = '2px'

export default css`
  .kirk-tablist {
    display: flex;
    border-bottom: 1px solid ${color.border};
    overflow: auto; // Make tabs scrollable horizontally
    // Remove scrollbar visually
    -ms-overflow-style: none; // IE 10+
    scrollbar-width: none; // Firefox
  }
  // Remove scrollbar visually
  .kirk-tablist::-webkit-scrollbar {
    display: none;
  }

  .kirk-tab {
    outline: none;
    padding: ${space.m};
    padding-bottom: calc(${space.m} + ${bottomBorderWidth});
    background: none;
    border: none;
    background-color: ${color.white};
    color: ${color.primary};
    font-size: ${font.base.size};
    white-space: nowrap;
  }

  .kirk-tab-container {
    margin-left: ${space.l};
  }

  .kirk-tab-relative {
    display: inline;
    position: relative;
  }

  .kirk-tabs-fixed .kirk-tablist {
    overflow: initial;
  }

  .kirk-tabs-fixed .kirk-tab-container {
    margin-left: 0;
    flex: 1;
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: 0;
    text-align: center;
    align-self: flex-end;
  }

  .kirk-tabs-fixed .kirk-tab {
    white-space: normal;
  }

  .kirk-tab-selected {
    border-bottom: 2px solid ${color.primaryText};
    margin-bottom: -${bottomBorderOffset};
  }

  .kirk-tab-selected .kirk-tab {
    color: ${color.primaryText};
    // Re-position selected tab so that the active border is over the generic border
    // This is not working so far with scrollable tabs because of the overflow property
    padding-bottom: calc(${space.m} + ${bottomBorderOffset});
  }

  .kirk-tab:not(.kirk-tab-selected):hover {
    cursor: pointer;
  }

  :global(.kirk-tab-container .kirk-badge) {
    position: absolute;
    z-index: 1;
    top: calc(-1 * (${space.m} + ${badgeOffset}));
    right: calc(-1 * (${space.m} + ${badgeOffset}));
  }
`
