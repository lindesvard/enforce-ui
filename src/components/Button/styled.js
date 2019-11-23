import styled, { css } from 'styled-components'
import { space } from 'styled-system'
import { theme, values } from '../../lib/mixins'

const getHeight = values([
  ['large', '50px'],
  ['small', '25px'],
  '42px',
])

export const Base = styled.button`
  ${theme('css.font')};
  ${theme('css.button')};
  
  font-weight: 500;
  height: ${getHeight};
  padding: ${values([
    ['large', '0 30px'],
    ['small', '0 10px'],
    '0 20px',
  ])};
  font-size: ${values([
    ['large', '18px'],
    ['small', '12px'],
    '15px',
  ])};
  border-radius: 3px;
  
  background: ${values([
    ['error', 'error'],
    ['warning', 'warning'],
    ['success', 'success'],
    ['info', 'primary'],
    ['light', 'transparent'],
    'default',
  ])};
  transition: transform .2s ease-in-out, background .2s ease-in-out;
  position: relative;
  overflow: hidden;
  text-align: center;

  ${(props) => props.circle && css`
    display: flex;
    width: ${getHeight(props)};
    align-items: center;
    justify-content: center;
    padding: 0;
    border-radius: 100%;
  `}

  ${(props) => (props.light ? css`
    box-shadow: 0 0 0 1px ${theme('colors.border')};
  ` : theme('css.boxShadow')(props))}

  &:hover {
    transform: translate3d(0, -2px, 0);
    background: ${values([
    ['error', 'error|90'],
    ['warning', 'warning|90'],
    ['success', 'success|90'],
    ['info', 'primary|90'],
    ['light', 'grey_5|90'],
    'default|90',
  ])};
  }

  ${space};
`
