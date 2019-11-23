import React from 'react'
import BlockItemOne from './One'

export default {
  title: 'BlockItem',
}

const props = {
  title: 'Wild animals jumping on the street',
  image:
    'https://images.unsplash.com/photo-1480321182142-e77f14b9aa64?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80',
}

const description = 'They have been going the entire day'
const author = { name: 'Homer Simpson', image: 'https://avatarfiles.alphacoders.com/693/69306.jpg' }

export const _BlockItemOne_Description = () => {
  return (
    <div style={{ maxWidth: '300px' }}>
      <BlockItemOne {...{ ...props, description }} />
    </div>
  )
}

export const _BlockItemOne_Author = () => {
  return (
    <div style={{ maxWidth: '300px' }}>
      <BlockItemOne {...{ ...props, author }} />
    </div>
  )
}
