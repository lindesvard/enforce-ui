import styled from 'styled-components'
import { Row } from '../Structure'
import { theme } from '../../lib/mixins'

export const Base = styled(Row)`
  ${theme('css.borderRadius.large')};
  min-height: 45px;
  padding: 5px;
  transition: background 0.2s ease-in-out;

  &:hover {
    background: ${theme('colors.grey_5')};
  }
`
