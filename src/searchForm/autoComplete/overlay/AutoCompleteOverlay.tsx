import React from 'react'

import { AutoCompleteProps } from '../../../autoComplete'
import { Bullet, BulletTypes } from '../../../bullet'

export type AutoCompleteOverlayProps = Omit<
  AutoCompleteProps,
  | 'autoFocus'
  | 'inputAddon'
  | 'embeddedInSearchForm'
  // Adding searchForItems because AutoComplete needs to be passed from the
  // renderAutocompleteComponent method
  | 'searchForItems'
> & {
  renderAutocompleteComponent: (props: Omit<AutoCompleteProps, 'searchForItems'>) => JSX.Element
}

export const AutoCompleteOverlay = ({
  renderAutocompleteComponent,
  ...props
}: AutoCompleteOverlayProps) => {
  const icon = (
    <div className="kirk-autoComplete-icon">
      <Bullet type={BulletTypes.SEARCH} />
    </div>
  )
  return renderAutocompleteComponent({
    ...props,
    autoFocus: true,
    inputAddon: icon,
    embeddedInSearchForm: true,
  })
}
