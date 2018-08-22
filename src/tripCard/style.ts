import css from 'styled-jsx/css'
import { color, font, radius, space, fontWeight } from '_utils/branding'

export default css`
  li {
    border: 1px solid ${color.border};
    border-radius: ${radius.l};
    list-style-type: none;
  }

  .kirk-tripCard :global(a) {
    display: block;
    padding: ${space.l};
    text-decoration: none;
  }

  .kirk-tripCard-main {
    display: flex;
    margin-bottom: ${space.l};
  }

  .kirk-tripCard :global(.kirk-tripCard-itinerary) {
    flex: 1;
  }

  .kirk-tripCard--highlighted :global(.kirk-tripCard-price) {
    color: ${color.success};
  }

  .kirk-tripCard-bottom {
    display: flex;
    align-items: center;
  }

  .kirk-tripCard-driver {
    display: flex;
    align-items: center;
    flex: 1;
    margin-right: ${space.l};
  }

  /* To match the width of the time area of the Itinerary */
  :global(.kirk-tripCard-avatar) {
    min-width: 64px;
    margin-right: ${space.l};
  }

  .kirk-tripCard :global(.kirk-tripCard-flags svg) {
    display: inline-block;
    margin-left: ${space.m};
  }

  :global(.kirk-tripCard-topText) {
    color: ${color.success};
  }
`
