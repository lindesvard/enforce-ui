import React from 'react'
import Grid from '.'
import { Flex } from '../Structure'

export default {
  title: 'Grid',
}

const Box = (props) => <Flex width="100%" height="100px" borderRadius="3px" {...props} />

export const Default = () => (
  <Grid.Container>
    <Grid.Row>
      <Grid.Main>
        <Box bg="pink" />
      </Grid.Main>
      <Grid.Sidebar>
        <Box bg="blue" />
      </Grid.Sidebar>
    </Grid.Row>
  </Grid.Container>
)
