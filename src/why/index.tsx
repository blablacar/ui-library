import React from 'react'
import cc from 'classcat'

import prefix from '_utils'
import style from 'why/style'
import QuestionIcon from 'icon/questionIcon'

interface WhyProps {
  readonly children: string,
  readonly title: string,
  readonly className?: Classcat.Class,
  readonly onClick?: () => void,
}

const Why = ({ className, children, title, onClick }: WhyProps) => (
  <button
    type="button"
    className={cc([prefix({ why: true }), className])}
    title={title}
    onClick={onClick}
  >
    <QuestionIcon />
    <span>{children}</span>
    <style jsx>{style}</style>
  </button>
)

export default Why
