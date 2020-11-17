// Note: can't use styled components the same way we do for all other components,
// as buttons are created dynamically with React.createElement (and can be a "a", "button" or
// even every other React component => SlugLink for instance).
export { ButtonStatus } from './Button'
export type ButtonProps = ButtonProps
export { StyledButton as Button } from './Button.style'
export { StyledButton as default } from './Button.style'
