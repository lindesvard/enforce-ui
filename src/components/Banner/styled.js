import styled from 'styled-components'
import { theme, values } from '../../lib/mixins'

export const Base = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px 15px;
  border-radius: 3px;
  background: ${values([
    ['error', 'error'],
    ['warning', 'warning'],
    ['success', 'success'],
    ['info', 'primary'],
    'default',
  ])};
`

export const Text = styled.p`
  ${theme('css.font')};
  color: ${values([
    // ['error', 'text_inverse'],
    // ['warning', 'text_inverse'],
    // ['success', 'text_inverse'],
    // ['info', 'text_inverse'],
    'text_inverse',
  ])};
  margin: 0;
`

export const Close = styled.button`
  ${theme('css.button')};
  margin-left: auto;
`
