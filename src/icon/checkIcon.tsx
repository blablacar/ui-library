// tslint:disable:max-line-length
import React, { Fragment } from 'react'
import cc from 'classcat'
import css from 'styled-jsx/css'
import BaseIcon from '_utils/icon'

interface CheckProps extends Icon {
  readonly absolute?: boolean
  readonly validate?: boolean
  readonly backgroundColor?: string
  readonly thin?: boolean
}

const style = css`
  :global(.kirk-icon-check.absolute) {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
  }
  :global(.kirk-icon-check.validate path) {
    stroke-dasharray: 24;
    stroke-dashoffset: 24;
    stroke-linecap: round;
    animation: dash 0.5s cubic-bezier(0.65, 0, 0.45, 1) forwards;
  }
  @keyframes dash {
    from {
      stroke-dashoffset: 24;
    }
    to {
      stroke-dashoffset: 0;
    }
  }
`

export const CheckIcon = (props: CheckProps) => (
  <BaseIcon {...props} className={cc([
    'kirk-icon-check',
    props.className,
    {
      validate: props.validate,
      absolute: props.absolute
    }
  ])}>
    <Fragment>
      <path
        d="M6.5 12.5l4 4 8-8"
        fill="none"
        stroke={props.iconColor}
        strokeWidth={props.thin ? '1' : '2'}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
      />
      <style jsx>{style}</style>
      <style jsx>{`
        :global(.kirk-icon-check) {
          background-color: ${props.backgroundColor};
          border-radius: 100%;
        }
      `}</style>
    </Fragment>
  </BaseIcon>
)

CheckIcon.defaultProps = {
  ...BaseIcon.defaultProps,
  absolute: false,
  validate: false,
  backgroundColor: 'transparent',
  thin: false,
}

export default React.memo(CheckIcon)
