import React, { Component } from 'react'
import uuidv4 from 'uuid/v4'
import styled from 'styled-components'

import { color, space, responsiveBreakpoints, grid } from '_utils/branding'

import Modal, { ModalProps } from 'modal'
import Button, { ButtonStatus } from 'button'
import TextDisplay1 from 'typography/display1'

const StyledSuccessModal = styled(Modal)`
  padding: 0;
  text-align: center;
  background-color: ${color.successBackground};

  /* overrides */
  .kirk-modal-dialog {
    display: flex;
    justify-content: center;
    padding: 0;
    margin: 0 auto;
    height: 100%;
  }

  .kirk-modal-body {
    display: flex;
    min-height: 100vh;
    flex-direction: column;

    @media (${responsiveBreakpoints.isMediaLarge}) {
      max-width: ${grid.wide};
      flex-direction: row;
      align-items: center;
      flex-wrap: wrap;
    }
  }
`

const Figure = styled.figure`
  display: flex;
  margin: 0;
  justify-content: center;
  align-items: center;
  padding-top: ${space.xxl};
  height: 33vh;
  /* background-color: purple; */

  @media (${responsiveBreakpoints.isMediaLarge}) {
    padding: 0;
    width: calc(7 * ${grid.column} + 6 * ${grid.gutter});
    margin: 0 ${grid.gutter} 0 ${space.xl};
  }
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: ${space.xl};

  @media (${responsiveBreakpoints.isMediaLarge}) {
    flex: 1;
    width: calc(5 * ${grid.column} + 4 * ${grid.gutter});
    height: auto;
  }
`

const Main = styled.h1`
  flex: 1;
  margin-bottom: ${space.xl};
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

    const successContentId = `kirk-successModal-content-${uuidv4()}`

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
        <Figure>
          <img
            src={imageSrc}
            alt={imageText}
            aria-hidden // This image is always decorative
          />
        </Figure>
        <Content id={successContentId}>
          <Main>
            <TextDisplay1 isInverted>{children}</TextDisplay1>
          </Main>
          <Footer>
            <SuccessButton status={ButtonStatus.SECONDARY} onClick={onClose}>
              {confirmLabel}
            </SuccessButton>
          </Footer>
        </Content>
      </StyledSuccessModal>
    )
  }
}

export default SuccessModal
