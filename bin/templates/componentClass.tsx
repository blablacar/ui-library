import React, { PureComponent } from 'react'
import cc from 'classcat'

import style from '${name}/style'

export default class extends PureComponent {
  render() {
    return (
      <div className={cc('${componentKebabCase}', this.props.className)}>Your new awesome component</div>
    )
  }
}
