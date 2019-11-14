import React from 'react'
import Label from './'

export default {
  title: 'Label',
}

export const Default = () => {
  return <Label>Your name</Label>
}

export const WithError = () => {
  return <Label error>Your name</Label>
}
