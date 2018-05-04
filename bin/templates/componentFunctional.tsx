import React from 'react'
import cc from 'classcat'

import style from '${name}/style'

export default ({ className }) => {
  return <div className={cc('${componentKebabCase}', className)}>Your new awesome component</div>
}
