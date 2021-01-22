import React, { useContext, useMemo } from 'react'
import styled from 'styled-components'

const ToggleContext = React.createContext()
const Hidden = styled('div')`
  display: none;
`

function useEffectAfterMount(cb, dependencies) {
  const justMounted = React.useRef(true)
  React.useEffect(() => {
    if (!justMounted.current) {
      return cb()
    }
    justMounted.current = false
  }, dependencies)
}

const Toggle = props => {
  const [on, setOn] = React.useState(false)

  const toggle = React.useCallback(() => setOn(oldOn => !oldOn), [])

  useEffectAfterMount(() => {
    props.onToggle(on)
  }, [on])

  const value = React.useMemo(() => ({ on, toggle }), [on])
  return <ToggleContext.Provider value={value}>{props.children}</ToggleContext.Provider>
}

export const useToggleContext = () => {
  const context = React.useContext(ToggleContext)
  if (!context) {
    throw new Error('Toggle compound components cannot be rendered outside the Toggle component')
  }
  return context
}

function On({ children }) {
  const { on } = useToggleContext()

  return on ? children : <Hidden>{children}</Hidden>
}

function Off({ children }) {
  const { on } = useToggleContext()

  return on ? <Hidden>{children}</Hidden> : children
}

function Button({ element: Component, children, ...otherProps }) {
  const { on, toggle } = useToggleContext()
  return (
    <Component onClick={toggle} {...otherProps}>
      {children}
    </Component>
  )
}

// for convenience, but totally not required...
Toggle.On = On
Toggle.Off = Off
Toggle.Button = Button

export { Toggle }
