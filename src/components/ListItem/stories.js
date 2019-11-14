import React from 'react'
import ListItemOne from './One'
import { Row } from '../Structure'
import Seperator from '../Seperator'

export default {
  title: 'ListItem',
}

const props = {
  title: 'Wild animals jumping on the street',
  image: 'https://images.unsplash.com/photo-1480321182142-e77f14b9aa64?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80'
}

const description = 'They have been going the entire day'
const author = { name: 'Homer Simpson', image: 'https://avatarfiles.alphacoders.com/693/69306.jpg' }

export const _ListItemOne_Description = () => {
  return <ListItemOne {...{...props, description}} />
}

export const _ListItemOne_Author = () => {
  return <ListItemOne {...{...props, author}} />
}

export const _ListItemOne_AsList = () => {
  return [...Array(5)].map((_, i) => (
    <>
      <ListItemOne {...{...props, author }}/>
      <Seperator ml={65} />
    </>
  ))
}