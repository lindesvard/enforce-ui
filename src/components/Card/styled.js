import styled from 'styled-components'
import { Column } from '../Structure'
import { theme } from '../../lib/mixins'

export const Base = styled(Column)`
  border: 1px solid ${theme('colors.border')};
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: translate3d(0, -2px, 0);
  }
`
