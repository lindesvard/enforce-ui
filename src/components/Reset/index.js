import { createGlobalStyle } from 'styled-components'
import { theme } from '../../lib/mixins'

const Reset = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    background: ${props => props.background};
    ${theme('css.font')};
  }
`

export default Reset
