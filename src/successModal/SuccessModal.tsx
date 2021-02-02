import React from 'react'

import uuidv4 from 'uuid/v4'

import { ButtonStatus } from '../button'
// TODO: fix alias resolving path on build
// Must use relative path since alias is broken
import { ModalProps } from '../modal'
import { TextDisplay1 } from '../typography/display1'
import { SuccessModalElements } from './SuccessModal.style'

export type SuccessModalProps = ModalProps &
  Readonly<{
    confirmLabel?: string
    illustration: JSX.Element
  }>

export const SuccessModal = (props: SuccessModalProps): JSX.Element => {
  const {
    isOpen = false,
    onClose = () => {},
    forwardedRef = null,
    confirmLabel,
    illustration,
    children,
    className,
  } = props

  const baseClassName = 'kirk-successModal'
  const successContentId = `${baseClassName}-content-${uuidv4()}`
  const {
    Content,
    Figure,
    Media,
    StyledSuccessModal,
    SuccessAction,
    SuccessButton,
    SuccessTitle,
  } = SuccessModalElements

  return (
    <StyledSuccessModal
      onClose={onClose}
      isOpen={isOpen}
      closeOnEsc={false}
      displayCloseButton={false}
      displayDimmer={false}
      forwardedRef={forwardedRef}
      className={className}
      modalContentClassName={baseClassName}
      aria-labelledby={successContentId}
      data-test="success-modal"
    >
      <Media>
        <Figure>{illustration}</Figure>
        <Content>
          <SuccessTitle data-test="success-title">
            <TextDisplay1 isInverted>{children}</TextDisplay1>
          </SuccessTitle>
          <SuccessAction>
            <SuccessButton
              status={ButtonStatus.SECONDARY}
              data-test="success-button"
              onClick={onClose}
            >
              {confirmLabel}
            </SuccessButton>
          </SuccessAction>
        </Content>
      </Media>
    </StyledSuccessModal>
  )
}
