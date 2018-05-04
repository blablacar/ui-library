import React, { PureComponent } from 'react'
import cc from 'classcat'

import prefix from '_utils'
import { color } from '_utils/branding'
import CircleIcon from 'icon/circleIcon'
import style from './style'

interface Loader {
  className?: Classcat.Class,
  inline?: boolean,
  size?: number,
}

const Loader = ({ className, inline = false, size = 48 }: Loader) => (
  <div className={cc([prefix({ loader: true, 'loader--fullScreen': !inline }), className])}>
    <CircleIcon
      iconColor={color.success}
      size={size}
      spinning
    />
    <style jsx>{style}</style>
  </div>
)

export default Loader
