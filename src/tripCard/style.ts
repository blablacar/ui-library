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

  .kirk-tripCard-price {
    color: ${color.primaryText};
    font-size: ${font.m.size};
    line-height: ${font.m.lineHeight};
    font-weight: ${fontWeight.medium};
  }

  .kirk-tripCard--highlighted .kirk-tripCard-price {
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
    color: ${color.primaryText};
    font-size: ${font.m.size};
    line-height: ${font.m.lineHeight};
  }

  .kirk-tripCard :global(.kirk-tripCard-driver > div) {
    /* Adding the width of the step point to get the right alignment */
    margin-right: calc(${space.xl} + 6px);
  }

  .kirk-tripCard :global(.kirk-tripCard-flags svg) {
    display: inline-block;
    margin-left: ${space.m};
  }

  .kirk-tripCard-topText {
    color: ${color.success};
    font-weight: ${fontWeight.medium};
  }
`
