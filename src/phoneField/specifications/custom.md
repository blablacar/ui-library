# Custom PhoneField

```js
import { PhoneField } from '@blablacar/ui-library'
```

## Playground

<!-- STORY -->

## Custom usage

```js
<div>
  <h1 id="labelId">Accessibility label</h1>
  <PhoneField
    id="phoneFieldId"
    name="phoneField"
    className="additionalClass"
    aria-labelledby="labelId"
    selectFieldLabel="Phone country code"
    textFieldTitle="Phone number"
    textFieldPlaceholder="Phone number"
    defaultRegionValue="FR"
    defaultPhoneValue="0778674534"
    countriesWhiteList={['FR', 'ES']}
    customCountriesName={{
      FR: 'fr label',
      ES: 'es label',
    }}
    isInline={false}
  />
</div>
```
