import styled from 'styled-components'
import { space } from 'styled-system'
import { theme, values } from '../../lib/mixins'

const size = ({ size, ...props}) => size ? `${size}px` : values([
  ['small', '30px'],
  ['large', '60px'],
  '45px',
])(props)

export const Base = styled.img`
  width: ${size}; 
  height: ${size}; 
  border-radius: ${size};
  object-fit: cover;
  ${space};
`

export const Fallback = styled.div`
  ${theme('css.font')};
  text-align: center;
  width: ${size}; 
  height: ${size}; 
  border-radius: ${size};
  background: ${theme('colors.primary')};
  display: flex;
  align-items: center;
  justify-content: center;
  ${space};
`