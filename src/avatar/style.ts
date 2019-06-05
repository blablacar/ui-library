import css from 'styled-jsx/css'
import { color } from '_utils/branding'

export default css`
  .kirk-avatar {
    border: 2px dashed ${color.border};
    box-sizing: border-box;
    border-radius: 50%;
    position: relative;
    width: 48px;
    height: 48px;
  }

  .kirk-avatar--small {
    height: 40px;
    width: 40px;
  }

  .kirk-avatar--medium {
    height: 96px;
    width: 96px;
  }

  .kirk-avatar--large {
    height: 156px;
    width: 156px;
  }

  .kirk-avatar--image {
    border: none;
  }

  .kirk-avatar--image img {
    border-radius: 50%;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  :global(.kirk-avatar .kirk-badge.kirk-avatar-badge--unreadNotifications),
  :global(.kirk-avatar .kirk-badge.kirk-avatar-badge--idCheck) {
    z-index: 2;
    position: absolute;
  }

  :global(.kirk-avatar .kirk-badge.kirk-avatar-badge--unreadNotifications) {
    top: -6px;
    right: -6px;
  }

  :global(.kirk-avatar .kirk-badge.kirk-avatar-badge--idCheck) {
    bottom: -3px;
    right: -3px;
    width: 18px;
    height: 18px;
    padding: 0;
    border-radius: 50%;
    background-color: ${color.success};
  }

  :global(.kirk-avatar.kirk-avatar--medium .kirk-badge.kirk-avatar-badge--idCheck),
  :global(.kirk-avatar.kirk-avatar--large .kirk-badge.kirk-avatar-badge--idCheck) {
    bottom: 0;
    right: 0;
  }

  :global(.kirk-avatar--medium .kirk-badge.kirk-avatar-badge--idCheck) {
    width: 24px;
    height: 24px;
  }

  :global(.kirk-avatar--large .kirk-badge.kirk-avatar-badge--idCheck) {
    width: 36px;
    height: 36px;
  }

  :global(.kirk-avatar--medium .kirk-badge.kirk-avatar-badge--unreadNotifications) {
    height: 24px;
    line-height: 23px;
    font-size: 14px;
    padding: 0 6px;
  }

  :global(.kirk-avatar--large .kirk-badge.kirk-avatar-badge--unreadNotifications) {
    height: 36px;
    line-height: 34px;
    font-size: 18px;
    padding: 0 8px;
  }
`
