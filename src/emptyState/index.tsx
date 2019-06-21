import React from 'react'
import cc from 'classcat'
import Title from 'title'
import style from './style'

interface EmptyState {
  readonly className?: Classcat.Class
  readonly image: string
  readonly text: string
  readonly button?: JSX.Element
}

const EmptyState = ({ className, image, text, button}: EmptyState) => (
  <div className={cc(['kirk-empty-state', className])}>
    <img src={image} alt="" />
    <Title>{text}</Title>
    {button}
    <style jsx>{style}</style>
  </div>
)

export default EmptyState
