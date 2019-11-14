import styled from 'styled-components'
import TextareaAutosize from 'react-textarea-autosize'
import { values, theme } from '../../lib/mixins'

export const Base = styled.div`
  border: 1px solid
    ${values([
    ['!border', 'transparent'],
    ['error', 'focus', 'error'],
    ['error', 'error'],
    ['focus', 'primary'],
    'border',
  ])};
  border-radius: 3px;
  height: 45px;
  position: relative;
  box-sizing: border-box;
  flex-grow: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 10px;
  cursor: text;
`

export const Input = styled.input`
  border: 0;
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  background: transparent;
  outline: 0;
  ${theme('css.font')};
  color: ${theme('colors.text')};
  transform: translate3d(
    0,
    ${({ focus, active, label }) => ((focus || active) && label ? '6px' : 0)},
    0
  );
`

export const Label = styled.label`
  ${theme('css.font')};
  pointer-events: none;
  position: absolute;
  top: 11px;
  transform-origin: left;
  transform: translate3d(
    0,
    ${({ focus, active }) => (focus || active ? '-6px' : 0)},
    0
  );
  font-size: ${({ focus, active }) => (focus || active ? '10px' : '15px')};
  transition: all 0.2s ease-in-out;
  color: ${values([
    ['error', 'focus', 'error'],
    ['error', 'error'],
    ['focus', 'text_active'],
    'text',
  ])};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
  box-sizing: border-box;
`
