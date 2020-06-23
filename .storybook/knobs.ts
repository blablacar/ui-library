import { select } from '@storybook/addon-knobs'

/**
 * Numeric enums include a reverse mapping which is present in the JavaScript
 * object at runtime.
 * This function return an object without these mappings so it can be used to
 * enumerate the enum members.
 *
 * @see {@link https://www.typescriptlang.org/docs/handbook/enums.html#reverse-mappings|Enum reverse mappings}
 * @see {@link https://stackoverflow.com/a/50396312|Generic type to get enum keys as union string in typescript?}
 */
function removeReverseMappingFromEnum<TypeEnum>(
  enumObject: TypeEnum,
): { [key in keyof TypeEnum]: TypeEnum[key] } {
  const keys = (Object.keys(enumObject) as Array<keyof TypeEnum>)
    // Remove the keys used by reverse mapping.
    // An enum member cannot have a numeric name (ts(2452)).
    .filter(key => Number.isNaN(Number(key)))

  return keys.reduce(
    (acc, key) => ({ ...acc, [key]: enumObject[key] }),
    {} as { [key in keyof TypeEnum]: TypeEnum[key] },
  )
}

export type KnobEnumOptionsForOptionalProp<TypeEnum> = {
  isPropOptional: true
  initialValue?: TypeEnum[keyof TypeEnum]
}

export type KnobEnumOptionsForRequiredProp<TypeEnum> = {
  isPropOptional?: false
  initialValue: TypeEnum[keyof TypeEnum]
}

export type KnobEnumOptions<TypeEnum> = (
  | KnobEnumOptionsForOptionalProp<TypeEnum>
  | KnobEnumOptionsForRequiredProp<TypeEnum>
) & {
  group?: string
}

const KNOB_ENUM_USE_DEFAULT_VALUE = 'USE_DEFAULT_VALUE'

/**
 * Create a knob to list all entries of an enum.
 *
 * @example
 * enum Status {
 *   VALID,
 *   ERROR,
 * }
 *
 * // Display a select with "VALID" and "ERROR" options.
 * const status: Status = knobEnum('status', Status, {
 *   initialValue: Status.VALID
 * })
 *
 * // Let the component use it's default value when a prop is optional.
 * // A "Use default value" option is added which, when chosen, will be evaluated
 * // to `undefined` to let JavaScript fallback to default values.
 * const status: Status | undefined = knobEnum('status', Status, {
 *   isPropOptional: true,
 * })
 */
export function knobEnum<TypeEnum>(
  label: string,
  enumObject: TypeEnum,
  { isPropOptional = false, initialValue, group }: KnobEnumOptions<TypeEnum>,
): TypeEnum[keyof TypeEnum] | undefined {
  const enumObjectWithoutReverseMapping = removeReverseMappingFromEnum(enumObject)

  let options: typeof enumObjectWithoutReverseMapping & {
    'Use default value'?: typeof KNOB_ENUM_USE_DEFAULT_VALUE
  }

  if (isPropOptional) {
    options = {
      // We can't directly use `undefined` as value because `select` return it
      // as an empty string which can, theorically, be a valid member value in
      // a string enum.
      'Use default value': KNOB_ENUM_USE_DEFAULT_VALUE,

      ...enumObjectWithoutReverseMapping,
    }
  } else {
    options = enumObjectWithoutReverseMapping
  }

  const value: TypeEnum[keyof TypeEnum] | typeof KNOB_ENUM_USE_DEFAULT_VALUE = select(
    label,
    options,
    initialValue ?? KNOB_ENUM_USE_DEFAULT_VALUE,
    group,
  )

  return value === KNOB_ENUM_USE_DEFAULT_VALUE ? undefined : value
}
