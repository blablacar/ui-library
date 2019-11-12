import { pxToInteger } from './branding'

it('should convert a string px value to integer', () => {
  expect(pxToInteger('10px')).toEqual(10)
})
