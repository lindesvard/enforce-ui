import styled from 'styled-components'
import { theme, values } from '../../lib/mixins'

export const Base = styled.button`
  ${theme('css.font')};
  ${theme('css.button')};
  ${theme('css.boxShadow')};
  font-weight: 500;
  height: ${values([
    ['large', '50px'],
    ['small', '25px'],
    '42px',
  ])};
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
    'default',
  ])};
  transition: transform .2s ease-in-out, background .2s ease-in-out;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translate3d(0, -1px, 0);
    background: ${values([
      ['error', 'error|90'],
      ['warning', 'warning|90'],
      ['success', 'success|90'],
      ['info', 'primary|90'],
      'default|90',
    ])};
  }
`