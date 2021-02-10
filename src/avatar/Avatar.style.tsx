import styled from 'styled-components'

import { color } from '../_utils/branding'

export const StyledAvatar = styled.div`
  border: 2px dashed ${color.gray};
  box-sizing: border-box;
  border-radius: 50%;
  position: relative;
  width: 48px;
  height: 48px;

  &.kirk-avatar--small {
    height: 24px;
    width: 24px;
  }

  &.kirk-avatar--medium {
    height: 96px;
    width: 96px;
  }

  &.kirk-avatar--large {
    height: 156px;
    width: 156px;
  }

  &.kirk-avatar--image {
    border: none;
  }

  &.kirk-avatar--image img {
    border-radius: 50%;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  & .kirk-badge.kirk-avatar-badge--unreadNotifications,
  & .kirk-badge.kirk-avatar-badge--idCheck {
    z-index: 2;
    position: absolute;
  }

  & .kirk-badge.kirk-avatar-badge--unreadNotifications {
    top: -6px;
    right: -6px;
  }

  & .kirk-badge.kirk-avatar-badge--idCheck {
    bottom: -3px;
    right: -3px;
    width: 18px;
    height: 18px;
    padding: 0;
    border-radius: 50%;
    background-color: ${color.green};
  }

  &.kirk-avatar--medium .kirk-badge.kirk-avatar-badge--idCheck,
  &.kirk-avatar--large .kirk-badge.kirk-avatar-badge--idCheck {
    bottom: 0;
    right: 0;
  }

  .kirk-avatar--medium .kirk-badge.kirk-avatar-badge--idCheck {
    width: 24px;
    height: 24px;
  }

  .kirk-avatar--large .kirk-badge.kirk-avatar-badge--idCheck {
    width: 36px;
    height: 36px;
  }

  .kirk-avatar--medium .kirk-badge.kirk-avatar-badge--unreadNotifications {
    height: 24px;
    line-height: 23px;
    font-size: 14px;
    padding: 0 6px;
  }

  .kirk-avatar--large .kirk-badge.kirk-avatar-badge--unreadNotifications {
    height: 36px;
    line-height: 34px;
    font-size: 18px;
    padding: 0 8px;
  }
`
