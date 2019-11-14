import React, { useState, useEffect } from 'react'
import { configure, addDecorator } from '@storybook/react';
import addons from '@storybook/addons';
import Provider from '../src/components/Provider'

const channel = addons.getChannel();

addDecorator((storyFn) => {
  // this example uses hook but you can also use class component as well
  const [isDark, setDark] = useState(false);

  useEffect(() => {
    // listen to DARK_MODE event
    channel.on('DARK_MODE', setDark);
    return () => channel.off('DARK_MODE', setDark);
  }, [channel, setDark]);
  
  return (
    <Provider mode={isDark ? 'dark' : 'light'}>
      {storyFn()}
    </Provider>
  )
})

// automatically import all files ending in *.stories.js
configure(require.context('../src', true, /stories\.js$/), module);
