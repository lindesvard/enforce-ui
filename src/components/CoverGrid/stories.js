import React from 'react'
import CoverGrid from './'

export default {
  title: 'CoverGrid',
}

const src = 'https://images.unsplash.com/photo-1448026763598-2b08c76e75ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1347&q=80'

export const Default = () => {
  return <CoverGrid src={src} />
}