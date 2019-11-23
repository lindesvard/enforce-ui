import React from 'react'
import CardOne from './One'
import CardTwo from './Two'

export default {
  title: 'Card',
}

const props = {
  title: 'Wild animals jumping on the street',
  description: 'They have been going the entire day',
  image:
    'https://images.unsplash.com/photo-1480321182142-e77f14b9aa64?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80',
  author: { name: 'Homer Simpson', image: 'https://avatarfiles.alphacoders.com/693/69306.jpg' },
  date: '3m ago',
}

export const _CardOne = () => (
  <div style={{ maxWidth: '300px' }}>
    <CardOne {...props} />
  </div>
)

export const _CardTwo = () => (
  <div style={{ maxWidth: '300px' }}>
    <CardTwo {...props} />
  </div>
)
