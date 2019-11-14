import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components'
import { IconContext } from "react-icons";
import defaultTheme from '../../lib/theme'

const ProviderComponent = ({ children, mode }) => {
  console.log('mode', mode);
  return (
    <ThemeProvider theme={{ mode, ...defaultTheme }}>
      <IconContext.Provider value={{ style: { verticalAlign: 'middle' }, className: 'icon' }}>
        {children}
      </IconContext.Provider>
    </ThemeProvider>
  );
};

ProviderComponent.propTypes = {
  children: PropTypes.node,
};

export default ProviderComponent;
