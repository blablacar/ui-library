import React from 'react'
import cc from 'classcat'

import style from 'avatar/style'
import Check from 'icon/checkIcon'
import prefix from '_utils'
import { color } from '_utils/branding'

export interface IdCheck {
  readonly checked?: boolean,
  readonly title?: string,
}

export interface AvatarInterface extends IdCheck {
  readonly className?: Classcat.Class,
  readonly image?: string,
  readonly alt?: string,
  readonly medium?: boolean,
  readonly large?: boolean,
}

export const IdCheck = ({ checked = false, title = null }: IdCheck) => (
  <span className="kirk-idCheck">
    <Check size="100%" title={title} iconColor={color.success} />
    <style jsx>{style}</style>
  </span>
)

const Avatar = ({ medium, large, className, checked, image, alt, title }: AvatarInterface) => (
  <div className={cc([prefix({ medium, large, image: !!image }), className])}>
    { image && <img src={image} alt={alt} /> }
    { checked && <IdCheck checked={checked} title={title} /> }
    <style jsx>{style}</style>
  </div>
)

export default Avatar
