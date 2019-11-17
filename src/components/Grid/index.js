import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Flex } from '../Structure'

const breakpoints = ['xs', 'sm', 'md', 'lg']

const defaults = (obj = {}) => {
  if (typeof obj === 'number') {
    return obj
  }

  if (Array.isArray(obj)) {
    return obj
  }

  return breakpoints.reduce((acc, key) => ({ ...acc, [key === 'xs' ? '_' : key]: obj[key] || 1 }), {})
}

const Container = styled(Flex)`
  max-width: 1100px;
  width: 100%;
  padding: 0 15px;
`

Container.defaultProps = {
  mx: 'auto',
}

const Column = ({ width, ...props }) => {
  if (!width) {
    return <Flex {...props} flex={1} px={15} flexDirection="column" />
  }

  return (
    <Flex {...props} width={defaults(width)} flex="0 1 auto" px={15} flexDirection="column" />
  )
}

Column.propTypes = {
  width: PropTypes.any,
}

const Row = (props) => <Flex flexWrap="wrap" {...props} mx={-15} flex={1} flexDirection="row" />
const Main = (props) => <Column width={{ sm: 2 / 3, md: 2 / 3, lg: 2 / 3 }} {...props} />
const Sidebar = (props) => <Column width={{ sm: 1 / 3, md: 1 / 3, lg: 1 / 3 }} {...props} />

const Grid = {
  Row,
  Column,
  Container,
  Main,
  Sidebar,
}

export default Grid
