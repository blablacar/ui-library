import React from 'react'

import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { action } from '@storybook/addon-actions'
import { withKnobs, text, boolean, number, select } from '@storybook/addon-knobs'

import TextField from 'textField'
import ArrowIcon from 'icon/arrowIcon'
import Button from 'button'

const stories = storiesOf('TextField', module)
stories.addDecorator(withKnobs)

const inputTypes = ['text', 'email', 'number', 'password']

stories.add(
  'input',
  withInfo("TextField with all it's default props")(() => {
    const error = boolean('error', false)
    return (
      <TextField
        type={select('type', inputTypes, 'text')}
        id={text('id')}
        name={text('name', 'inputName')}
        placeholder={text('placeholder')}
        labelledBy={text('aria label')}
        disabled={boolean('disabled', false)}
        readOnly={boolean('readOnly', false)}
        label={text('label')}
        error={error ? text('error message', 'something went wrong') : null}
        onChange={action('changed')}
        onFocus={action('focused')}
        onBlur={action('blurred')}
        focus={boolean('focus', false)}
        required={boolean('required', false)}
        maxLength={number('maxLength')}
        autoComplete={select('autocomplete', ['on', 'off'])}
      />
    )
  }),
)

stories.add(
  'input with default value',
  withInfo('TextField with a default value')(() => {
    const error = boolean('error', false)
    return (
      <TextField
        type={select('type', inputTypes, 'text')}
        id={text('id')}
        defaultValue="starting value"
        name={text('name')}
        placeholder={text('placeholder')}
        disabled={boolean('disabled', false)}
        readOnly={boolean('readOnly', false)}
        label={text('label')}
        error={error ? text('error message', 'something went wrong') : ''}
        onChange={action('changed')}
        onFocus={action('focused')}
        onBlur={action('blurred')}
        maxLength={number('maxLength')}
        autoComplete={select('autocomplete', ['on', 'off'])}
      />
    )
  }),
)

stories.add(
  'input disabled',
  withInfo('TextField with a disabled true')(() => {
    const error = boolean('error', false)
    return (
      <TextField
        type={select('type', inputTypes, 'text')}
        id={text('id')}
        defaultValue="starting value"
        name={text('name')}
        placeholder={text('placeholder')}
        disabled
        readOnly={boolean('readOnly', false)}
        label={text('label')}
        error={error ? text('error message', 'something went wrong') : ''}
        onChange={action('changed')}
        onFocus={action('focused')}
        onBlur={action('blurred')}
        maxLength={number('maxLength')}
        autoComplete={select('autocomplete', ['on', 'off'])}
      />
    )
  }),
)

stories.add(
  'input password',
  withInfo('TextField with a password')(() => {
    const error = boolean('error', false)
    return (
      <TextField
        type={select('type', inputTypes, 'password')}
        id={text('id')}
        defaultValue="starting value"
        name={text('name')}
        placeholder={text('placeholder')}
        readOnly={boolean('readOnly', false)}
        label={text('label')}
        error={error ? text('error message', 'something went wrong') : ''}
        onChange={action('changed')}
        onFocus={action('focused')}
        onBlur={action('blurred')}
        maxLength={number('maxLength')}
        autoComplete={select('autocomplete', ['on', 'off'])}
      />
    )
  }),
)

stories.add(
  'input with autofocus',
  withInfo('TextField with autofocus')(() => {
    const error = boolean('error', false)
    return (
      <TextField
        type={select('type', inputTypes, 'text')}
        id={text('id')}
        name={text('name')}
        placeholder={text('placeholder')}
        disabled={boolean('disabled', false)}
        readOnly={boolean('readOnly', false)}
        label={text('label')}
        error={error ? text('error message', 'something went wrong') : ''}
        onChange={action('changed')}
        onFocus={action('focused')}
        onBlur={action('blurred')}
        autoFocus
        maxLength={number('maxLength')}
        autoComplete={select('autocomplete', ['on', 'off'])}
      />
    )
  }),
)

stories.add(
  'input with addon',
  withInfo('TextField with an addon')(() => {
    const error = boolean('error', false)
    return (
      <TextField
        addon={
          <Button status={Button.STATUS.UNSTYLED} icon tabIndex="-1">
            <ArrowIcon size="18" />
          </Button>
        }
        type={select('type', inputTypes, 'text')}
        id={text('id')}
        defaultValue="starting value"
        name={text('name')}
        placeholder={text('placeholder')}
        disabled={boolean('disabled', false)}
        readOnly={boolean('readOnly', false)}
        label={text('label')}
        error={error ? text('error message', 'something went wrong') : ''}
        onChange={action('changed')}
        onFocus={action('focused')}
        onBlur={action('blurred')}
        maxLength={number('maxLength')}
        autoComplete={select('autocomplete', ['on', 'off'])}
      />
    )
  }),
)

stories.add(
  'textarea',
  withInfo('TextField for multiline text(textarea)')(() => {
    const error = boolean('error', false)
    return (
      <TextField
        isTextArea
        id={text('id')}
        name={text('name')}
        placeholder={text('placeholder')}
        disabled={boolean('disabled', false)}
        readOnly={boolean('readOnly', false)}
        label={text('label')}
        error={error ? text('error message', 'something went wrong') : ''}
        onChange={action('changed')}
        onFocus={action('focused')}
        onBlur={action('blurred')}
        maxLength={number('maxLength')}
        autoComplete={select('autocomplete', ['on', 'off'])}
      />
    )
  }),
)
