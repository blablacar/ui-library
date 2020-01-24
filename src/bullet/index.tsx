import styled from 'styled-components'
import { color } from '_utils/branding'
import Bullet from './Bullet'

const StyledBullet = styled(Bullet)`
  & {
    box-sizing: content-box;
    width: 6px;
    height: 6px;
    background-color: ${color.white};
    border: 2px solid ${color.primaryText};
    border-radius: 50%;
  }

  &.kirk-bullet--addon {
    border-color: ${color.border};
  }

  &.kirk-bullet--small {
    width: 4px;
    height: 4px;
  }

  &.kirk-bullet--map-active,
  &.kirk-bullet--map-inactive {
    width: 11px;
    height: 11px;
    border-width: 3px;
  }

  &.kirk-bullet--map-active {
    border-color: ${color.polylinePrimary};
    box-shadow: 0 0 0 1px ${color.polylineStrokePrimary};
  }

  &.kirk-bullet--map-inactive {
    border-color: ${color.polylineSecondary};
    box-shadow: 0 0 0 1px ${color.polylineStrokeSecondary};
  }
`
export { BulletTypes, BulletProps } from './Bullet'
export default StyledBullet
