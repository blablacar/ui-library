import styled from 'styled-components'

import { color, font, radius, space } from '../_utils/branding'
import Message from './Message'

const StyledMessage = styled(Message)`
  & blockquote {
    margin: 0;
    display: inline-block;
    padding-bottom: ${space.s};
  }

  & {
    display: flex;
    flex-direction: column;
  }

  & .kirk-message-content {
    word-break: break-word;
  }

  & .kirk-message-content,
  & .kirk-message-annotation {
    display: flex;
    margin-left: ${space.xxl};
    margin-right: ${space.xxl};
  }

  &.kirk-active .kirk-message-content,
  &.kirk-active .kirk-message-annotation {
    margin-left: 96px;
    margin-right: 0;
    justify-content: flex-end;
  }

  & .kirk-label {
    position: relative;
    padding: ${space.l};
    border-radius: ${radius.l};
    border-top-left-radius: 0;
    background: ${color.lightGray};
    color: ${color.midnightGreen};
    font-size: ${font.base.size};
    line-height: ${font.base.lineHeight};
  }

  & .kirk-label p {
    margin: 0;
    white-space: pre-line;
  }

  &.kirk-active .kirk-label {
    background: ${color.midnightGreen};
    color: ${color.white};
    border-top-left-radius: ${radius.l};
    border-bottom-right-radius: 0;
  }

  & .kirk-message-annotation {
    padding-left: ${space.l};
  }
  &.kirk-active .kirk-message-annotation {
    padding-right: ${space.l};
  }
`

export { MessageProps } from './Message'
export default StyledMessage
