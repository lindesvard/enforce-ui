import styled from 'styled-components'
import { values } from '../../lib/mixins'
import { Text } from '../Typography'

export const RadioContainer = styled.label`
  display: ${(props) => (props.block ? 'flex' : 'inline-flex')};
  align-items: center;
  flex-direction: row;
  cursor: pointer;
  margin: ${(props) => (props.block ? '0 0 10px' : '0 20px 10px 0')};
`

export const Icon = styled.svg`
  width: 8px;
  height: 8px;
  border-radius: 4px;
  background: #fff;
`
// Hide radio visually but remain accessible to screen readers.
// Source: https://polished.js.org/docs/#hidevisually
export const HiddenRadio = styled.input.attrs({ type: 'radio' })`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`

export const StyledRadio = styled.div`
  display: flex;
  width: 20px;
  height: 20px;
  background: ${values([['checked', 'primary'], 'border'])};
  border-radius: 10px;
  transition: all 150ms;
  align-items: center;
  justify-content: center;

  ${HiddenRadio}:focus + & {
    box-shadow: 0 0 0 3px ${values([['checked', 'primary|30'], 'border|30'])};
  }

  ${Icon} {
    visibility: ${(props) => (props.checked ? 'visible' : 'hidden')};
  }
`

export const Title = styled(Text)`
  margin-left: 10px;
  user-select: none;
`
