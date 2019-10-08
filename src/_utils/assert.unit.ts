import { assertModalSizes } from './assert'
import { ModalSize } from 'modal/Modal'
import { ConfirmationModalSize } from 'confirmationModal/ConfirmationModal'

describe('assertModalSizes', () => {
  it('Should throw if modal size is not in the allowed size list', () => {
    expect(() => assertModalSizes(ConfirmationModalSize, ModalSize.FULLSCREEN)).toThrowError(
      'This modal only accepts following size(s): ["SMALL","LARGE"]',
    )
  })
  it('Should return undefined when', () => {
    expect(assertModalSizes(ConfirmationModalSize, ConfirmationModalSize.LARGE)).toBeUndefined()
  })
})
