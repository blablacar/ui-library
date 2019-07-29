import styled from 'styled-components'
import { color, space, font } from '_utils/branding'

import Message from './Message'

const StyledMessage = styled(Message)`
  & {
    margin: 0;
  }
  & .kirk-label {
    position: relative;
    padding: ${space.l};
    border-radius: 20px;
    border-top-left-radius: 0;
    background: ${color.lightBackground};
    color: ${color.primaryText};
    font-size: ${font.base.size};
    line-height: ${font.base.lineHeight};
  }

  & .kirk-label p {
    margin: 0;
  }

  &.kirk-active .kirk-label {
    background: ${color.primaryText};
    color: ${color.white};
    border-top-left-radius: 20px;
    border-bottom-right-radius: 0;
  }

  & cite {
    display: block;
    margin-bottom: ${space.m};
    color: ${color.secondaryText};
    font-style: normal;
  }

  &.active cite {
    text-align: right;
  }

  & .kirk-date {
    font-size: ${font.s.size};
    line-height: ${font.s.lineHeight};
    color: ${color.secondaryText};
  }
`

export { MessageProps } from './Message'
export default StyledMessage
