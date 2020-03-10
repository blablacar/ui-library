import styled from 'styled-components'
import { color, componentSizes } from '_utils/branding'
import Bullet from './Bullet'

const StyledBullet = styled(Bullet)`
  & {
    box-sizing: border-box;
    width: ${componentSizes.bulletSize};
    height: ${componentSizes.bulletSize};
    background-color: ${color.white};
    border: 2px solid ${color.primaryText};
    border-radius: 50%;
  }

  &.kirk-bullet--addon {
    border-color: ${color.border};
  }

  &.kirk-bullet--small {
    width: ${componentSizes.bulletSizeSmall};
    height: ${componentSizes.bulletSizeSmall};
  }

  &.kirk-bullet--map-active,
  &.kirk-bullet--map-inactive,
  &.kirk-bullet--search {
    border-width: 3px;
  }

  &.kirk-bullet--map-active,
  &.kirk-bullet--map-inactive {
    width: ${componentSizes.bulletSizeMap};
    height: ${componentSizes.bulletSizeMap};
  }

  &.kirk-bullet--search {
    width: ${componentSizes.bulletSizeSearch};
    height: ${componentSizes.bulletSizeSearch};
  }

  &.kirk-bullet--map-active {
    border-color: ${color.polylinePrimary};
    box-shadow: 0 0 0 1px ${color.polylineStrokePrimary};
  }

  &.kirk-bullet--map-inactive {
    border-color: ${color.polylineSecondary};
    box-shadow: 0 0 0 1px ${color.polylineStrokeSecondary};
  }

  &.kirk-bullet--search {
    border-width: 4px;
    border-color: ${color.secondaryText};
  }
`
export { BulletTypes, BulletProps } from './Bullet'
export default StyledBullet
