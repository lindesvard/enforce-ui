import styled from 'styled-components'
import { values, theme } from '../../lib/mixins'
import { Text } from '../Typography'

export const CheckboxContainer = styled.label`
  display: ${props => (props.block ? 'flex' : 'inline-flex')};
  align-items: center;
  flex-direction: row;
  cursor: pointer;
  margin: ${props => (props.block ? '0 0 10px' : '0 20px 10px 0')};
`
// Hide checkbox visually but remain accessible to screen readers.
// Source: https://polished.js.org/docs/#hidevisually
export const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
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

export const StyledCheckbox = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  background: ${values([['checked', 'primary'], 'border'])};
  border-radius: 3px;
  transition: all 150ms;

  ${HiddenCheckbox}:focus + & {
    box-shadow: 0 0 0 3px ${values([['checked', 'primary|30'], 'border|30'])};
  }

  .icon {
    visibility: ${props => (props.checked ? 'visible' : 'hidden')};
  }
`

export const Title = styled(Text)`
  margin-left: 10px;
  user-select: none;
`
