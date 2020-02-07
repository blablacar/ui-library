import styled from 'styled-components'
import { color } from '_utils/branding'

import TabsSection from './tabsSection'

const StyledTabsSection = styled(TabsSection)`
  & .kirk-tabs:after {
    /**
     * Render a line separating the tabs from the tab panel content.
     * This line should be as wide as the viewport to create a visual section.
     */
    content: ' ';
    position: absolute;
    left: -100vw;
    right: -100vw;
    bottom: 0;
    border-bottom: 1px solid ${color.border};
  }
`

export default StyledTabsSection
