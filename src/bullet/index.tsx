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

  &.kirk-bullet--map {
    width: 12px;
    height: 12px;
    border-width: 3px;
    border-color: ${color.polylinePrimary};
  }
`
export { BulletTypes, BulletProps } from './Bullet'
export default StyledBullet
