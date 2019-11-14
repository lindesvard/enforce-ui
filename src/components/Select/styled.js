import styled, { css } from 'styled-components'
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
  height: 45px;
  position: relative;
  box-sizing: border-box;
  align-items: center;
  display: flex;
  padding: 0 10px;
`

export const Select = styled.select`
  ${theme('css.font')}
  color: ${theme('colors.text')};
  min-height: 100%;
  outline: 0;
  max-width: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  min-width: 100px;
  -webkit-appearance: none;
  border: 0;
  outline: 0;
  background: none;
`

export const SelectedValue = styled.div`
  ${theme('css.font')}
  color: ${theme('colors.text')};
  flex: 1;
`

export const DropDown = styled.div`
  ${theme('css.boxShadow')};
  position: absolute;
  border: 1px solid ${theme('colors.border')};
  border-radius: 3px;
  margin-top: 5px;
  transition: transform .1s ease-in-out;
  
  ${props => props.visible ? css`
    visibility: visible;
    transform: translate3d(0, 0, 0);
  ` : css`
    transform: translate3d(0, -10px, 0);
    visibility: hidden;
  `}

  top: 100%;
  left: -1px;
  right: -1px;

  max-height: 200px;
  overflow-y: auto;
  overflow-x: hidden;
`

export const DropDownItem = styled.button`
  ${theme('css.button')}
  ${theme('css.font')}
  border-bottom: 1px solid ${theme('colors.border')};
  height: 42px;
  display: flex;
  align-items: center;
  padding: ${props => props.empty ? 0 : '0 10px'};
  width: 100%;

  &:last-child {
    border-bottom: 0;
  }
`