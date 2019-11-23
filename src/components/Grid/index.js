import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Flex } from '../Structure'

const Container = styled(Flex)`
  max-width: 1100px;
  width: 100%;
  padding: 0 15px;
`

Container.defaultProps = {
  mx: 'auto',
}

const Column = ({ width, display = ['flex'], ...props }) => {
  if (!width) {
    return <Flex {...props} flex={1} px={15} flexDirection="column" display={display} />
  }

  return (
    <Flex
      {...props}
      width={width}
      flex="0 1 auto"
      px={15}
      flexDirection="column"
      display={display}
    />
  )
}

Column.propTypes = {
  width: PropTypes.any,
  display: PropTypes.any,
}

const Row = props => (
  <Flex flexWrap="wrap" {...props} mx={-15} flex={1} flexDirection="row" display="flex" />
)
const Main = props => <Column width={{ sm: 2 / 3, md: 2 / 3, lg: 2 / 3 }} {...props} />
const Sidebar = props => <Column width={{ sm: 1 / 3, md: 1 / 3, lg: 1 / 3 }} {...props} />

const Grid = {
  Row,
  Column,
  Container,
  Main,
  Sidebar,
}

export default Grid
