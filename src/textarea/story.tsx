import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withKnobs, text, boolean, number, select } from '@storybook/addon-knobs'
import SendMessageIcon from 'icon/sendMessageIcon'

import TextArea from 'textarea'

const stories = storiesOf('Textarea', module)
stories.addDecorator(withKnobs)

stories.add('Basic text area', () => (
  <div style={{width: '300px'}}>
      <TextArea
        id={text('id')}
        name={text('name', 'inputName')}
        placeholder={text('placeholder', 'Some placeholder text')}
        labelledBy={text('aria label')}
        disabled={boolean('disabled', false)}
        readOnly={boolean('readOnly', false)}
        label={text('label')}
        error={text('error message', '')}
        onChange={action('changed')}
        onFocus={action('focused')}
        onBlur={action('blurred')}
        focus={boolean('focus', false)}
        required={boolean('required', false)}
        maxLength={number('maxLength')}
        autoComplete={select('autocomplete', ['on', 'off'])}
        title={text('title', 'accessibility text')}
      />
  </div>
))

stories.add('Text area with icon', () => (
    <div style={{width: '300px'}}>
        <TextArea
            id={text('id')}
            name={text('name', 'inputName')}
            placeholder={text('placeholder', 'Some placeholder text')}
            labelledBy={text('aria label')}
            disabled={boolean('disabled', false)}
            readOnly={boolean('readOnly', false)}
            label={text('label')}
            error={text('error message', '')}
            onChange={action('changed')}
            onFocus={action('focused')}
            onBlur={action('blurred')}
            focus={boolean('focus', false)}
            required={boolean('required', false)}
            maxLength={number('maxLength')}
            autoComplete={select('autocomplete', ['on', 'off'])}
            title={text('title', 'accessibility text')}
            buttonIcon={<SendMessageIcon />}
            buttonTitle='Button action'
            onButtonClick={() => { window.alert('button clicked')}}
        />
    </div>
))

stories.add('Text area with icon and fit to content', () => (
    <div style={{width: '300px'}}>
        <TextArea
            fitContent={boolean('fitContent', true)}
            id={text('id')}
            defaultValue={text('Value', '')}
            name={text('name', 'inputName')}
            placeholder={text('placeholder', 'Some placeholder text')}
            labelledBy={text('aria label')}
            disabled={boolean('disabled', false)}
            readOnly={boolean('readOnly', false)}
            label={text('label')}
            error={text('error message', '')}
            onChange={action('changed')}
            onFocus={action('focused')}
            onBlur={action('blurred')}
            focus={boolean('focus', false)}
            required={boolean('required', false)}
            maxLength={number('maxLength')}
            autoComplete={select('autocomplete', ['on', 'off'])}
            title={text('title', 'accessibility text')}
            buttonIcon={<SendMessageIcon />}
            buttonTitle='Send'
            onButtonClick={() => { window.alert('button clicked')}}
        />
    </div>
))
