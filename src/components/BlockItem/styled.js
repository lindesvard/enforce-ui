import styled from 'styled-components'
import { Column } from '../Structure'
import { theme } from '../../lib/mixins'

export const Base = styled(Column)`
  ${theme('css.borderRadius.large')};
  padding: 5px;
  transition: background .2s ease-in-out;
  
  &:hover {
    background: ${theme('colors.grey_5')}
  }
`
