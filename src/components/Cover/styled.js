import styled from 'styled-components'
import { space } from 'styled-system'

export const Base = styled.div`
  width: ${props => props.maxWidth ? `${props.maxWidth}px` : '100%'};
  max-width: ${props => props.maxWidth ? `${props.maxWidth}px` : '100%'};
  position: relative;

  &:after {
    content: '';
    display: block;
    padding-bottom: ${props => props.ratio || 56}%;
  }
`

export const Inner = styled.div`
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  position: absolute;
  ${space};
`

export const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: ${props => props.borderRadius || 10}px;
`