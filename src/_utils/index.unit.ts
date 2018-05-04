import { prefix } from '_utils'

it('Should render prefix syntax with the base class', () => {
  expect(prefix({}, 'base')).toEqual([])
  expect(prefix({ modifiers: true }, 'base')).toEqual(['base-modifiers'])
  expect(prefix({ modifiers: false }, 'base')).toEqual([])
  expect(prefix({ 'modifier-1': true, 'modifier-2': false }, 'base')).toEqual(['base-modifier-1'])
})
