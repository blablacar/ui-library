# Hint

Use it to show the member there’s a new action they can take on this page. Only use for actions that previously didn’t exist on this page.

<!-- STORY -->

## Usage

`TextComponents` are exported individually.

```js
import Hint from '@blablacar/ui-library/build/hint'

;<Hint
  title="Title"
  description="A longer description"
  closeButtonTitle="Close button"
  onClose={onClose}
  hidden={isHidden}
>
  {a11yAttrs => <ItemChoice leftAddon={<QrCodeIcon />} label="Your tickets" {...a11yAttrs} />}
</Hint>
```

## Props

| **Props**          | **Value**        | **Description**                     |
| ------------------ | ---------------- | ----------------------------------- |
| `title`            | `string`         | Title content                       |
| `description`      | `string`         | Description content                 |
| `closeButtonTitle` | `string`         | A11y content for the close button   |
| `position`         | `ABOVE`\|`BELOW` | Define how the content is displayed |
| `hidden`           | `true`\|`false`  | The component is render when false  |
