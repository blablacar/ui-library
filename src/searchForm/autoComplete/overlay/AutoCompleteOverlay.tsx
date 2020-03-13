import React from 'react'
import AutoComplete, { AutoCompleteProps } from 'autoComplete'
import Bullet, { BulletTypes } from 'bullet'

export const AutoCompleteOverlay = (props: AutoCompleteProps) => {
  const icon = (
    <div className="kirk-autoComplete-icon">
      <Bullet type={BulletTypes.SEARCH} />
    </div>
  )

  return <AutoComplete {...props} inputAddon={icon} embeddedInSearchForm />
}

export default AutoCompleteOverlay
