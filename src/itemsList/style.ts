import css from 'styled-jsx/css'

import { space, color } from '_utils/branding'

export default css`
  .kirk-items-list {
    display: flex;
    flex-direction: column;
    list-style-type: none;
  }
  .kirk-items-list--withSeparators :global(.kirk-items-list-item + .kirk-items-list-item),
  .kirk-items-list :global(.kirk-items-list-item--withSeparator) {
    margin-top: ${space.l};
    position: relative;
  }
  .kirk-items-list--withSeparators :global(.kirk-items-list-item + .kirk-items-list-item::before),
  .kirk-items-list :global(.kirk-items-list-item--withSeparator::before) {
    content: '';
    position: absolute;
    top: -8px;
    right: 0px;
    left: 0px;
    border-bottom: 1px solid ${color.divider};
  }
`
