import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'styled-components'
import { IconContext } from 'react-icons'
import defaultTheme from '../../lib/theme'

const iconStyles = { style: { verticalAlign: 'middle' }, className: 'icon' }

const ProviderComponent = ({ children, mode = 'light' }) => (
  <ThemeProvider theme={{ mode, ...defaultTheme }}>
    <IconContext.Provider value={iconStyles}>
      {children}
    </IconContext.Provider>
  </ThemeProvider>
)

ProviderComponent.propTypes = {
  children: PropTypes.node,
  mode: PropTypes.string,
}

export default ProviderComponent
