import React, { Component } from 'react'
import uuidv4 from 'uuid/v4'
import styled from 'styled-components'

import { color, space, modalSize, responsiveBreakpoints } from '_utils/branding'

import Modal, { ModalProps } from 'modal'
import Button, { ButtonStatus } from 'button'
import TextDisplay1 from 'typography/display1'

const StyledSuccessModal = styled(Modal)`
  padding: 0;
  text-align: center;
  background-color: ${color.successBackground};

  /* overrides */
  .kirk-modal-dialog {
    padding: 0;
    margin: 0 auto;
    height: 100%;
    max-width: ${modalSize.m};
  }

  .kirk-modal-body {
    display: flex;
    min-height: 100vh;
    flex-flow: column;
  }
`

const Figure = styled.img`
  width: 100%;
  max-height: 33vh; /* why? */
  object-fit: cover;

  @media (${responsiveBreakpoints.isMediaLarge}) {
    margin-bottom: 0;
  }
`

const Content = styled.div`
  flex: 1;
  padding: ${space.xl};
`

const Footer = styled.footer`
  padding: 0 0 ${space.xl};
  text-align: center;
`

const SuccessButton = styled(Button)`
  margin: ${space.xl};
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
        <Figure
          src={imageSrc}
          alt={imageText}
          aria-hidden // This image is always decorative
        />
        <Content id={successContentId}>
          <TextDisplay1 isInverted>{children}</TextDisplay1>
        </Content>
        <Footer>
          <SuccessButton status={ButtonStatus.SECONDARY} onClick={onClose}>
            {confirmLabel}
          </SuccessButton>
        </Footer>
      </StyledSuccessModal>
    )
  }
}

export default SuccessModal
