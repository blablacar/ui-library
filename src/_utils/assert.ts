import { ModalSize } from 'modal/Modal'

export const assertModalSizes = (modalSize: typeof ModalSize): void => {
  const correctModalSize = Object.values(modalSize)
  if (!correctModalSize) {
    throw new Error(
      `This modal only accepts following size(s): ${JSON.stringify(Object.keys(modalSize))}`,
    )
  }
}
