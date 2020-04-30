import { ConfirmationModalSize } from 'confirmationModal/ConfirmationModal'
import { ModalSize } from 'modal/Modal'

export const assertModalSizes = (
  modalSize: typeof ModalSize | typeof ConfirmationModalSize,
  size: string,
): void => {
  const correctModalSize = Object.values(modalSize).includes(size)
  if (!correctModalSize) {
    throw new Error(
      `This modal only accepts following size(s): ${JSON.stringify(Object.keys(modalSize))}`,
    )
  }
}
