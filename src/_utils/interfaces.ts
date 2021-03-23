export interface CommonFieldsProps {
  id?: string
  name: string
  className?: string
  value: string
  disabled?: boolean
  autoFocus?: boolean
  required?: boolean
}

export interface A11yProps {
  id?: string
  role?: string
  title?: string
  tabIndex?: number
  'aria-label'?: string
  'aria-labelledby'?: string
  'aria-describedby'?: string
  'aria-controls'?: string
}

type A11yKeys = keyof A11yProps

export function pickA11yProps<T extends A11yProps>(source: T): Pick<T, A11yKeys> {
  const initialValue = {} as Pick<T, A11yKeys>
  const keys: A11yKeys[] = [
    'id',
    'role',
    'title',
    'tabIndex',
    'aria-label',
    'aria-labelledby',
    'aria-describedby',
    'aria-controls',
  ]

  return keys.reduce(
    (acc, key) => ({
      ...acc,
      [key]: source[key],
    }),
    initialValue,
  )
}
