import React, { Fragment, useState } from 'react'
import { boolean } from '@storybook/addon-knobs'

import { color, font } from '../_utils/branding'
import { Avatar } from '../avatar'
import { Button, ButtonStatus } from '../button'
import { ArrowIcon } from '../icon/arrowIcon'
import { BankIcon } from '../icon/bankIcon'
import { BubbleIcon } from '../icon/bubbleIcon'
import { CoinIcon } from '../icon/coinIcon'
import { CrossDiscIcon } from '../icon/crossDiscIcon'
import { HomeIcon } from '../icon/homeIcon'
import { MyRidesIcon } from '../icon/myRides'
import { ProfileIcon } from '../icon/profileIcon'
import { ItemChoice } from '../itemChoice'
import { Drawer, DropdownButton, Menu, TopBar } from './index'

const leftAction = (
  <Button isBubble status={ButtonStatus.UNSTYLED} onClick={() => {}} aria-label="back">
    <ArrowIcon iconColor={color.blue} />
  </Button>
)

const rightAction = (
  <span
    style={{
      ...font.m,
      padding: '12px',
      color: color.blue,
    }}
  >
    Need help?
  </span>
)

const centerContent = (
  <div>
    <span
      style={{
        ...font.m,
        color: color.midnightGreen,
      }}
    >
      Trip
    </span>
    <span
      style={{
        ...font.s,
        display: 'block',
        color: color.lightMidnightGreen,
      }}
    >
      Paris → Lyon
    </span>
  </div>
)

export const SimpleTopBar = (): JSX.Element => (
  <TopBar
    zIndex={50}
    leftItem={boolean('With leftItem', true) && leftAction}
    centerItem={boolean('With centerItem', true) && centerContent}
    rightItem={boolean('With rightItem', true) && rightAction}
  />
)

export const LoggedOutTopBar = (): JSX.Element => {
  const [drawerOpened, setDrawerOpened] = useState(false)
  const dropdownButton = (
    <DropdownButton onClick={(): void => setDrawerOpened(!drawerOpened)}>
      <Avatar
        isSmall
        image="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3R5bGU9ImJhY2tncm91bmQ6I2RkZCI+PHBhdGggZmlsbD0iI0RERCIgZD0iTTAgMGg0OHY0OEgweiIvPjxwYXRoIGQ9Ik0yNCAyOWMyLjM3IDAgNS4yNC4yNDggNy42MTEuNzQ1IDMuODk5LjU0NCA2LjU4IDMuMTQzIDcuNzQgNy4wNzNDMzUuNjg1IDQxLjIwOCAzMC4xNjkgNDQgMjQgNDRjLTYuMTggMC0xMS43MDYtMi44MDMtMTUuMzc1LTcuMjA4IDEuMTA2LTMuNzk0IDMuNjgtNi4yMzcgNy43NjQtNy4wNDdDMTguNzU5IDI5LjI0OCAyMS42MjkgMjkgMjQgMjl6bTAtMjFhOCA4IDAgMDE4IDh2MmE4IDggMCAxMS0xNiAwdi0yYTggOCAwIDAxOC04eiIgZmlsbD0iI0ZGRiIvPjwvc3ZnPg=="
      />
    </DropdownButton>
  )

  return (
    <Fragment>
      <TopBar zIndex={50} leftItem={dropdownButton} />
      <Drawer zIndex={40} open={drawerOpened} onClose={(): void => setDrawerOpened(false)}>
        <Menu>
          <ItemChoice label="Log in" />
          <ItemChoice label="Sign up" />
        </Menu>
      </Drawer>
    </Fragment>
  )
}

export const LoggedInTopBar = (): JSX.Element => {
  const [drawerOpened, setDrawerOpened] = useState(false)
  const dropdownButton = (
    <DropdownButton onClick={(): void => setDrawerOpened(!drawerOpened)}>
      <Avatar
        isSmall
        image="https://cdn.blablacar.com/kairos/assets/build/images/default-db7a681a76da6d17918951bc2df77a25.png"
      />
    </DropdownButton>
  )

  return (
    <Fragment>
      <TopBar zIndex={50} leftItem={dropdownButton} />
      <Drawer zIndex={40} open={drawerOpened} onClose={(): void => setDrawerOpened(false)}>
        <Menu>
          <ItemChoice label="Dashboard" leftAddon={<HomeIcon />} />
          <ItemChoice label="Your rides" leftAddon={<MyRidesIcon />} />
          <Menu.Divider />
          <ItemChoice label="Inbox" leftAddon={<BubbleIcon />} />
          <Menu.Divider />
          <ItemChoice label="Profile" leftAddon={<ProfileIcon />} />
          <Menu.Divider />
          <ItemChoice label="Transfers" leftAddon={<CoinIcon />} />
          <ItemChoice label="Payments & refunds" leftAddon={<BankIcon />} />
          <Menu.Divider />
          <ItemChoice label="Log out" leftAddon={<CrossDiscIcon />} />
        </Menu>
      </Drawer>
    </Fragment>
  )
}
