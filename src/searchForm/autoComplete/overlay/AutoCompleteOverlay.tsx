import React from 'react'
import Bullet, { BulletTypes } from 'bullet'
import { AutoCompleteProps } from 'autoComplete'

export interface AutoCompleteOverlayProps {
  readonly name: string
  readonly autocompleteComponent: React.ReactElement<AutoCompleteProps>
  readonly className?: Classcat.Class
  readonly onSelect?: (obj: AutocompleteOnChange) => void
}

export const AutoCompleteOverlay = (props: AutoCompleteOverlayProps) => {
  const icon = (
    <div className="kirk-autoComplete-icon">
      <Bullet type={BulletTypes.SEARCH} />
    </div>
  )

  return React.cloneElement(props.autocompleteComponent, {
    ...props,
    autoFocus: true,
    inputAddon: icon,
    embeddedInSearchForm: true,
  })
}

export default AutoCompleteOverlay
