import styled from 'styled-components';

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
  height: ${getSize}px;
  width: ${getSize}px;
`
