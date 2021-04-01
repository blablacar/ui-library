import React from 'react'

import uuidv4 from 'uuid/v4'

import { ButtonStatus } from '../button'
import { ModalProps } from '../modal'
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
      className={className}
      modalContentClassName={baseClassName}
      aria-labelledby={successContentId}
      data-test="success-modal"
    >
      <Media>
        <Figure>{illustration}</Figure>
        <Content>
          <SuccessTitle data-test="success-title">{children}</SuccessTitle>
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
