import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withKnobs, text, select, number, boolean } from '@storybook/addon-knobs'
import { color } from '_utils/branding'

import ArrowIcon from 'icon/arrowIcon'
import CheckIcon from 'icon/checkIcon'
import ChevronIcon from 'icon/chevronIcon'
import CircleIcon from 'icon/circleIcon'
import ComfortIcon from 'icon/comfortIcon'
import CrossIcon from 'icon/crossIcon'
import DecreaseIcon from 'icon/decreaseIcon'
import DoubleArrowIcon from 'icon/doubleArrowIcon'
import EyeIcon from 'icon/eyeIcon'
import FacebookIcon from 'icon/facebookIcon'
import IncreaseIcon from 'icon/increaseIcon'
import InstagramIcon from 'icon/instagramIcon'
import LadyIcon from 'icon/ladyIcon'
import LightningIcon from 'icon/lightningIcon'
import PinIcon from 'icon/pinIcon'
import QuestionIcon from 'icon/questionIcon'
import StarIcon from 'icon/starIcon'
import SearchIcon from 'icon/searchIcon'
import TrashIcon from 'icon/trashIcon'
import TwitterIcon from 'icon/twitterIcon'
import VkontakteIcon from 'icon/vkontakteIcon'
import YoutubeIcon from 'icon/youtubeIcon'
import ClockIcon from 'icon/clockIcon'
import CrosshairIcon from 'icon/crosshairIcon'
import ProximityIcon from 'icon/proximityIcon'

const stories = storiesOf('Icons', module)
stories.addDecorator(withKnobs)

const c = Object.keys(color).reduce((acc, key) => ({
  ...acc,
  [color[key]]: key,
}), {})

stories.add(
  'Arrow icon',
  withInfo('')(() => (<ArrowIcon
    size={text('size', '24')}
    iconColor={select('icon color', c)}
    right={boolean('pointing right', false)}
  />)),
)

stories.add(
  'Check icon',
  withInfo('')(() => (<CheckIcon
    iconColor={select('icon color', c)}
    size={text('size', '24')}
    title={text('title', 'check icon')}
    validate={boolean('validate', false)}
  />)),
)

stories.add(
  'Chevron icon',
  withInfo('')(() => (<ChevronIcon
    down={boolean('pointing down', false)}
    left={boolean('pointing left', false)}
    iconColor={select('icon color', c)}
    size={text('size', '24')}
    title={text('title', 'chevron icon')}
  />)),
)

stories.add(
  'Circle icon',
  withInfo('')(() => (<CircleIcon
    iconColor={select('icon color', c)}
    size={text('size', '24')}
    spinning={boolean('spinning', false)}
    title={text('title', 'check icon')}
  />)),
)

stories.add(
  'Cross icon',
  withInfo('')(() => (<CrossIcon
    iconColor={select('icon color', c)}
    size={text('size', '24')}
    title={text('title', 'cross icon')}
  />)),
)

stories.add(
  'Decrease icon',
  withInfo('')(() => (<DecreaseIcon
    iconColor={select('icon color', c)}
    size={text('size', '24')}
    title={text('title', 'decrease icon')}
  />)),
)

stories.add(
  'Double Arrow icon',
  withInfo('')(() => (<DoubleArrowIcon
    iconColor={select('icon color', c)}
    size={text('size', '24')}
    title={text('title', 'double arrow icon')}
  />)),
)

stories.add(
  'Eye icon',
  withInfo('')(() => (<EyeIcon
    iconColor={select('icon color', c)}
    size={text('size', '24')}
    title={text('title', 'Eye icon')}
  />)),
)

stories.add(
  'Eye off icon',
  withInfo('')(() => (<EyeIcon
    iconColor={select('icon color', c)}
    off
    title={text('title', 'Eye off icon')}
    size={text('size', '24')}
  />)),
)

stories.add(
  'Facebook icon',
  withInfo('')(() => (<FacebookIcon
    iconColor={select('icon color', c)}
    size={text('size', '24')}
    title={text('title', 'facebook icon')}
  />)),
)

stories.add(
  'Increase icon',
  withInfo('')(() => (<IncreaseIcon
    iconColor={select('icon color', c)}
    size={text('size', '24')}
    title={text('title', 'increase icon')}
  />)),
)

stories.add(
  'Instagram icon',
  withInfo('')(() => (<InstagramIcon
    iconColor={select('icon color', c)}
    size={text('size', '24')}
    title={text('title', 'instagram icon')}
  />)),
)

stories.add(
  'Ladies only icon',
  withInfo('')(() => (<LadyIcon
    iconColor={select('icon color', c)}
    size={text('size', '24')}
    title={text('title', 'ladies only icon')}
  />)),
)

stories.add(
  'Lightning icon',
  withInfo('')(() => (<LightningIcon
    iconColor={select('icon color', c)}
    size={text('size', '24')}
    title={text('title', 'lightning icon')}
  />)),
)

stories.add(
  'Max 2 in the back icon',
  withInfo('')(() => (<ComfortIcon
    iconColor={select('icon color', c)}
    size={text('size', '24')}
    title={text('title', 'max 2 in the back icon icon')}
  />)),
)

stories.add(
  'Pin icon',
  withInfo('')(() => (<PinIcon
    bgColor={select('background color', c)}
    size={text('size', '24')}
    strokeColor={select('icon color', c)}
    title={text('title', 'pin icon')}
  />)),
)

stories.add(
  'Question icon',
  withInfo('')(() => (<QuestionIcon
    iconColor={select('icon color', c)}
    size={text('size', '24')}
    title={text('title', 'Question icon')}
  />)),
)

stories.add(
  'Search icon',
  withInfo('')(() => (<SearchIcon
    iconColor={select('icon color', c)}
    size={text('size', '24')}
    title={text('title', 'search icon')}
  />)),
)

stories.add(
  'Star icon',
  withInfo('')(() => (<StarIcon
    bgColor={select('background color', c)}
    fill={number('star fill(between 0 and 1)', 0)}
    iconColor={select('icon color', c)}
    size={text('size', '24')}
    title={text('title', 'star icon')}
  />)),
)

stories.add(
  'Trash icon',
  withInfo('')(() => (<TrashIcon
    iconColor={select('icon color', c)}
    size={text('size', '24')}
    title={text('title', 'trash icon')}
  />)),
)

stories.add(
  'Twitter icon',
  withInfo('')(() => (<TwitterIcon
    iconColor={select('icon color', c)}
    size={text('size', '24')}
    title={text('title', 'twitter icon')}
  />)),
)

stories.add(
  'Vkontakte icon',
  withInfo('')(() => (<VkontakteIcon
    iconColor={select('icon color', c)}
    size={text('size', '24')}
    title={text('title', 'vkontakte icon')}
  />)),
)

stories.add(
  'Youtube icon',
  withInfo('')(() => (<YoutubeIcon
    iconColor={select('icon color', c)}
    size={text('size', '24')}
    title={text('title', 'youtube icon')}
  />)),
)

stories.add(
  'Clock icon',
  withInfo('')(() => (<ClockIcon
    iconColor={select('icon color', c)}
    size={text('size', '24')}
    title={text('title', 'clock')}
  />)),
)

stories.add(
  'CrosshairIcon icon',
  withInfo('')(() => (<CrosshairIcon
    iconColor={select('icon color', c)}
    size={text('size', '24')}
    title={text('title', 'clock')}
  />)),
)

stories.add(
  'Proximity icon',
  withInfo('')(() => (<ProximityIcon
    iconColor={select('icon color', c)}
    size={text('size', '24')}
    title={text('title', 'clock')}
  />)),
)
