import { ClassAttributes, ComponentType, RefForwardingComponent } from 'react'

interface RefObject<T> {
  // immutable
  readonly current: T | null
}

declare function createRef<T>(): RefObject<T>

declare function forwardRef<T, P = {}>(
  Component: RefForwardingComponent<T, P>,
): ComponentType<P & ClassAttributes<T>>
