import React, { Component } from 'react'
import uuidv4 from 'uuid/v4'
import styled from 'styled-components'

import { color, space, responsiveBreakpoints } from '_utils/branding'

import Modal, { ModalProps } from 'modal'
import Button, { ButtonStatus } from 'button'
import TextDisplay1 from 'typography/display1'

const footerHeight = '96px' /* = padding + content */

const StyledSuccessModal = styled(Modal)`
  text-align: center;
  background-color: ${color.successBackground};
`

const Body = styled.div`
  @media (${responsiveBreakpoints.isMediaLarge}) {
    width: 50%;

    &:nth-child(odd) {
      padding-right: ${space.xl};
    }

    &:nth-child(even) {
      padding-left: ${space.xl};
    }
  }
`

const Media = styled.img`
  width: 80%;
  margin-bottom: ${space.xl};

  @media (${responsiveBreakpoints.isMediaLarge}) {
    margin-bottom: 0;
  }
`

const Footer = styled.footer`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: ${footerHeight};
  padding: ${space.xl};
  text-align: center;

  @media (${responsiveBreakpoints.isMediaLarge}) {
    position: relative;
    display: block;
    margin: 0 auto;

    .kirk-button {
      margin: ${space.l} ${space.xl} 0;
    }
  }
`

export interface SuccessModalProps extends ModalProps {
  readonly confirmLabel?: string
  readonly imageSrc: string
  readonly imageText?: string
}

class SuccessModal extends Component<SuccessModalProps> {
  static defaultProps: Partial<SuccessModalProps> = {
    isOpen: false,
    closeOnEsc: false,
    forwardedRef: null,
    imageText: '',
  }

  render() {
    const {
      children,
      isOpen,
      onClose,
      confirmLabel,
      forwardedRef,
      imageSrc,
      imageText,
      className,
    } = this.props

    const successContentId = `kirk-successModal-bodyItem-${uuidv4()}`

    return (
      <StyledSuccessModal
        onClose={onClose}
        isOpen={isOpen}
        closeOnEsc={false}
        displayCloseButton={false}
        displayDimmer={false}
        forwardedRef={forwardedRef}
        className={className}
        ariaLabelledBy={successContentId}
      >
        <Media
          src={imageSrc}
          alt={imageText}
          aria-hidden // This image is always decorative
        />
        <Body id={successContentId}>
          <TextDisplay1 isInverted>{children}</TextDisplay1>
          <Footer>
            <Button status={ButtonStatus.SECONDARY} onClick={onClose}>
              {confirmLabel}
            </Button>
          </Footer>
        </Body>
      </StyledSuccessModal>
    )
  }
}

export default SuccessModal
