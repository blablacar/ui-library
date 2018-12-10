declare interface onChangeParameters {
  readonly name: string
  readonly value: string | number | boolean
}

declare type tag =
  | string
  | JSX.Element
  | React.Component
  | React.ComponentClass
  | React.PureComponent
  | React.StatelessComponent<any>
