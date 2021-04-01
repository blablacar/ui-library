import styled from 'styled-components'

import {
  color,
  componentSizes,
  horizontalSpace,
  modalSize,
  radius,
  responsiveBreakpoints,
  space,
} from '../_utils/branding'

export const StyledModal = styled.div<{
  layoutModeEnabled: boolean
  noHorizontalSpacing: boolean
}>`
  &.kirk-modal-dimmer,
  &.kirk-modal-dimmer--fullscreen {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    overflow: hidden;
    z-index: 999;
  }

  &.kirk-modal-dimmer--visible {
    background-color: rgba(0, 0, 0, 0.5);
  }

  &.kirk-modal-dimmer--hide {
    background-color: ${color.white};
  }

  &.kirk-modal-dimmer--fullscreen {
    background-color: transparent;
  }

  &.kirk-modal-dimmer--inactive {
    background-color: transparent;
    pointer-events: none;
  }

  & .kirk-modal {
    position: fixed;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    overflow-y: auto;
  }

  & .kirk-modal-dialog {
    position: relative;
    display: flex;
    padding-top: ${space.xl};
    padding-bottom: ${props => (props.layoutModeEnabled ? 0 : space.xl)};
    padding-left: ${props => (props.noHorizontalSpacing ? 0 : horizontalSpace.global)};
    padding-right: ${props => (props.noHorizontalSpacing ? 0 : horizontalSpace.global)};
    margin: ${space.xl} auto;
    width: ${modalSize.m};
    background-color: ${color.white};
    border-radius: ${radius.m};
  }

  & .kirk-modal--small .kirk-modal-dialog {
    width: ${modalSize.s};
  }

  & .kirk-modal--large .kirk-modal-dialog {
    width: ${modalSize.l};
  }

  & .kirk-modal-body {
    display: ${props => (props.layoutModeEnabled ? 'flex' : '')};
    flex-direction: ${props => (props.layoutModeEnabled ? 'column' : '')};
    flex: 1;
  }

  &.kirk-modal-dimmer--fullscreen .kirk-modal-dialog {
    margin: 0;
    border-radius: 0;
    box-shadow: none;
    width: auto;
    min-height: 100%;
  }

  & .kirk-modal--hasCloseButton .kirk-modal-dialog {
    padding-top: ${componentSizes.modalTopPadding};
  }

  & .kirk-modal--hasCloseButton .kirk-modal-closeButton {
    position: absolute;
    top: 8px;
    left: 8px;
    background-color: transparent;
  }

  /* MediaSection is fullwith on small media. Counter the default padding with this */
  /* Ideally, the Modal should not define any internal paddings and let the contained sections take care of the horizontal layout. */
  @media (${responsiveBreakpoints.isMediaSmall}) {
    & .media-section {
      margin-left: -${space.xl};
      margin-right: -${space.xl};
    }
  }
`

export const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  position: relative;
`

export const ModalFooter = styled.div`
  position: -webkit-sticky;
  position: sticky;
  border-bottom-right-radius: ${radius.m};
  border-bottom-left-radius: ${radius.m};
  bottom: 0;
  background-color: ${color.white};
  flex-shrink: 0;
  z-index: 2;

  .kirk-modal-modalFooterBorder & {
    border-top: 1px solid ${color.gray};
  }
`
