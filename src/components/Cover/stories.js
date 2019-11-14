import React from 'react'
import Cover from './'

export default {
  title: 'Cover',
}

const src = 'https://images.unsplash.com/photo-1448026763598-2b08c76e75ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1347&q=80'

export const Default = () => {
  return <Cover src={src} />
}

export const Ratio = () => {
  return <Cover src={src} ratio={1} />
}

export const WidthAndHeight = () => {
  return <Cover src={src} width={300} height={200} />
}