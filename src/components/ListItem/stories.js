import React, { Fragment } from 'react'
import { FiChevronRight } from 'react-icons/fi'
import ListItemOne from './One'
import Seperator from '../Seperator'

export default {
  title: 'ListItem',
}

const props = {
  title: 'Wild animals jumping on the street',
  image: 'https://images.unsplash.com/photo-1480321182142-e77f14b9aa64?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80',
  RightIcon: FiChevronRight,
}

const description = 'They have been going the entire day'
const author = { name: 'Homer Simpson', image: 'https://avatarfiles.alphacoders.com/693/69306.jpg' }

export const ListItemOneBasic = () => <ListItemOne {...{ ...props, image: null }} />

export const ListItemOneBasicWithDescription = () => <ListItemOne {...{ ...props, image: null, description }} />

export const ListItemOneDescription = () => <ListItemOne {...{ ...props, description }} />

export const ListItemOneAuthor = () => <ListItemOne {...{ ...props, author }} />

export const ListItemOneAsList = () => [...Array(5)].map((_, i) => (
  <Fragment key={i}>
    <ListItemOne {...{ ...props, author }} />
    <Seperator ml={65} small />
  </Fragment>
))
