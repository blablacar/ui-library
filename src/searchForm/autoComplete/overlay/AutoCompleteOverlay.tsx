import React, { useRef } from 'react'
import Bullet, { BulletTypes } from 'bullet'
import { AutoCompleteProps } from 'autoComplete'

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
  closeOnBlur: () => void
  className?: string
}

export const AutoCompleteOverlay = ({
  renderAutocompleteComponent,
  closeOnBlur,
  className,
  ...props
}: AutoCompleteOverlayProps) => {
  const overlayRef = useRef<HTMLDivElement>(null)

  const icon = (
    <div className="kirk-autoComplete-icon">
      <Bullet type={BulletTypes.SEARCH} />
    </div>
  )
  return (
    <div
      className={className}
      ref={overlayRef}
      onBlur={evt => {
        if (!overlayRef.current.contains(evt.relatedTarget as Node)) {
          closeOnBlur()
        }
      }}
    >
      {renderAutocompleteComponent({
        ...props,
        autoFocus: true,
        inputAddon: icon,
        embeddedInSearchForm: true,
      })}
    </div>
  )
}

export default AutoCompleteOverlay
