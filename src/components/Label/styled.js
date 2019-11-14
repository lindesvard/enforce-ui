import styled from 'styled-components'
import { values, theme } from '../../lib/mixins'

export const Base = styled.div`
  pointer-events: none;
  color: ${values([['error', 'error'], 'text'])};
  padding: 0 0 5px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
  box-sizing: border-box;
`
