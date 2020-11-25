import styled from 'styled-components'

import { color, componentSizes, font, radius, shadow, space } from '../_utils/branding'
import {
  enterTransitionSectionDuration,
  exitTransitionSectionDuration,
  reducedMotionTransitionDuration,
  TRANSITION_SECTION_CLASS_NAME,
} from './transitionConfig'

export const overlayBaseStyle = `
  box-sizing: border-box;
  width: ${componentSizes.searchOverlayWidth};
  border: 1px solid ${color.gray};
  border-radius: ${radius.l};
  padding: ${space.xl};
  padding-top: ${space.s};
  box-shadow: ${shadow.searchForm};
  background: ${color.white};
`

export const sectionBaseStyle = `
  box-sizing: border-box;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: ${color.white};
  overflow: auto;
  z-index: 999` /** Same as Modal component for now */

export const autoCompleteBaseStyle = `
  .kirk-textField-wrapper {
    background: transparent !important;
    border-radius: 0 !important;
    border: 0 !important;

    input {
      font-size: ${font.m.size};
      line-height: ${font.m.lineHeight};
      background: transparent;
      border-radius: 0;
    }

    .kirk-autoComplete-loader {
      padding-top: 12px;
    }
  }

  .kirk-items-list.kirk-autoComplete-list {
    padding: 0;
  }
`

export const TransitionSection = styled.div`
  &.${TRANSITION_SECTION_CLASS_NAME}-enter {
    opacity: 0;
    top: 50%;
  }

  &.${TRANSITION_SECTION_CLASS_NAME}-enter-active {
    top: 0;
    opacity: 1;
    transition: opacity ${enterTransitionSectionDuration}ms ease-in-out,
      top ${enterTransitionSectionDuration}ms ease-in-out;
  }

  &.${TRANSITION_SECTION_CLASS_NAME}-exit-active {
    top: 50%;
    opacity: 0;
    transition: top ${exitTransitionSectionDuration}ms ease-in-out,
      opacity ${exitTransitionSectionDuration}ms ease-in-out;
  }

  @media (prefers-reduced-motion: reduce) {
    &.kirk-searchForm-section-transition-enter-active,
    &.kirk-searchForm-section-transition-exit-active {
      transition-duration: ${reducedMotionTransitionDuration}ms !important;
    }
  }
`
