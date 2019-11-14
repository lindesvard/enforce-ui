import styled from 'styled-components'

export const Base = styled.div`
  animation: spin 2.5s infinite linear;
  display: inline-flex;
  animation-play-state: ${(props) => (props.disabled ? 'paused' : 'running')};
  
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(359deg);
    }
  }
`
