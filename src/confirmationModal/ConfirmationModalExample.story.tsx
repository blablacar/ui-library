import React, { useState } from 'react'

import { BaseSection } from '../layout/section/baseSection'
import { ConfirmationModal, ConfirmationModalProps } from './index'

// <Story> needs to have a JSX element wrapping
// the component in the story otherwise the smart knobs
// will override the props passed.
type DivProps = Readonly<{
  children: React.ReactNode
}>
export const Div = ({ children }: DivProps) => <div>{children}</div>

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
