import styled from 'styled-components'
import TextareaAutosize from 'react-textarea-autosize'
import { values, theme } from '../../lib/mixins'

export const Base = styled.div`
  border: 1px solid
    ${values([
    ['error', 'focus', 'error'],
    ['error', 'error'],
    ['focus', 'primary'],
    'border',
  ])};
  border-radius: 3px;
  min-height: 45px;
  position: relative;
  box-sizing: border-box;
`

export const Input = styled(TextareaAutosize)`
  display: block;
  border: 0;
  width: 100%;
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  background: transparent;
  outline: 0;
  ${theme('css.font')};
  color: ${theme('colors.text')};
  padding: 0 10px;
  resize: none;
  min-height: 45px;
  padding-top: ${({ focus, active, label }) => ((focus || active) && label ? '19px' : '10px')};
  padding-bottom: ${({ label }) => (label ? '5px' : '10px')};
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
  padding: 0 9px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
  box-sizing: border-box;
`
