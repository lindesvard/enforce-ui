import styled from 'styled-components'
import { theme } from '../../lib/mixins'

const getSize = ({ small, large }) => {
  if (small) {
    return 5
  }

  if (large) {
    return 15
  }

  return 10
}

export const Base = styled.div`
  padding: ${getSize}px ${props => props.mr || 0}px ${getSize}px ${props => props.ml || 0}px;
  width: 100%;
`

export const Line = styled.div`
  height: 1px;
  width: 100%;
  background: ${theme('colors.border')};
`
