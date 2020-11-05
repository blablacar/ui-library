import React, { useState } from 'react'

import { BaseSection } from '../layout/section/baseSection'
import { ConfirmationModal, ConfirmationModalProps } from './index'

export const ConfirmationModalWithButton = ({ status }: ConfirmationModalProps) => {
  const [isOpened, setOpened] = useState(false)
  return (
    <BaseSection>
      <button
        onClick={() => {
          setOpened(true)
        }}
      >
        Open ConfirmationModal {status}
      </button>
      <ConfirmationModal
        status={status}
        confirmLabel="Fhtagn"
        closeOnEsc
        confirmIsLoading={false}
        onClose={() => {
          setOpened(false)
        }}
        onConfirm={() => {
          setOpened(false)
        }}
        isOpen={isOpened}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua.
      </ConfirmationModal>
    </BaseSection>
  )
}
