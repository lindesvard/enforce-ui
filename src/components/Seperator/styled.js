import styled from 'styled-components';
import { theme } from '../../lib/mixins'

const getSize = ({ xsmall, small, large, xlarge }) => {
  if (xsmall) {
    return 5
  }

  if (small) {
    return 10
  }

  if (large) {
    return 30
  }

  if (xlarge) {
    return 60
  }

  return 15
}

export const Base = styled.div`
  padding: 10px ${props => props.mr || 0}px 10px ${props => props.ml || 0}px;
  width: 100%;
`

export const Line = styled.div`
  height: 1px;
  width: 100%;
  background: ${theme('colors.border')};
`
