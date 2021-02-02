import React, { useState } from 'react'

import { BaseSection } from '../layout/section/baseSection'
import { SuccessModal, SuccessModalProps } from './index'

export const ModalWithButton = ({ illustration }: Partial<SuccessModalProps>): JSX.Element => {
  const [isOpened, setOpened] = useState(false)
  return (
    <BaseSection>
      <button
        onClick={() => {
          setOpened(true)
        }}
      >
        Open SuccessModal
      </button>
      <SuccessModal
        isOpen={isOpened}
        onClose={() => {
          setOpened(false)
        }}
        illustration={illustration}
        confirmLabel="Got it!"
        closeOnEsc
      >
        Booking approved! Buddy will travel with you
      </SuccessModal>
    </BaseSection>
  )
}
