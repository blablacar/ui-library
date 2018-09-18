import css from 'styled-jsx/css'
import { color, font, radius, space } from '_utils/branding'

export default css`
  .kirk-autoComplete-list {
    list-style: none;
    padding: 0;
    margin-top: ${space.m};
    flex: 1;
  }

  :global(.kirk-autoComplete-item) {
    position: relative;
    padding: 0 ${space.xl};
  }

  :global(.kirk-autoComplete-item:hover),
  :global(.kirk-autoComplete-item[aria-selected="true"]) {
    background-color: ${color.lightBackground};
    border-radius: ${radius.l};
  }

  :global(.kirk-autoComplete-item + .kirk-autoComplete-item) {
    margin-top: ${space.l};
  }

  :global(.kirk-autoComplete-item + .kirk-autoComplete-item::before) {
    content : '';
    position: absolute;
    top: -${space.m};
    right: 0;
    left: 0;
    border-bottom: 1px solid ${color.border};
  }
`
