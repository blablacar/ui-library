import React from 'react'

import { ButtonStatus } from 'button'
import TextDisplay1 from 'typography/display1'
import uuidv4 from 'uuid/v4'

// TODO: fix alias resolving path on build
// Must use relative path since alias is broken
import { ModalProps } from '../modal'
import SuccessModalElements from './elements'

export type SuccessModalProps = ModalProps &
  Readonly<{
    confirmLabel?: string
    imageSrc: string
    imageText?: string
  }>

const SuccessModal = (props: SuccessModalProps): JSX.Element => {
  const {
    isOpen = false,
    onClose = () => {},
    forwardedRef = null,
    confirmLabel,
    imageSrc,
    imageText = '',
    children,
    className,
  } = props

  const baseClassName = 'kirk-successModal'
  const successContentId = `${baseClassName}-content-${uuidv4()}`

  const {
    StyledSuccessModal,
    Media,
    Figure,
    Content,
    SuccessTitle,
    SuccessAction,
    SuccessButton,
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
      ariaLabelledBy={successContentId}
      data-test="success-modal"
    >
      <Media>
        <Figure>
          <img src={imageSrc} alt={imageText} />
        </Figure>
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

export default SuccessModal
