import React from 'react'
import { Flex, Row, Column } from './components/Structure'
import { Text } from './components/Typography'
import useTheme from './hooks/useTheme'
import theme from './lib/theme'

export default {
  title: 'Colors',
}

const Color = ({ color }) => {
  const bg = useTheme(`colors.${color}`)
  return (
    <Column m="10px" alignItems="center" width="200px">
      <Flex
        width="200px"
        height="50px"
        bg={bg}
        borderRadius="3px"
        alignItems="center"
        justifyContent="center"
      />
      <Row justifyContent="space-between" width="100%" mt={2}>
        <Text small>{color}</Text>
        <Text small>{bg}</Text>
      </Row>
    </Column>
  )
}

const colors = Object.keys(theme.colors)

export const Default = () => (
  <Column>
    {colors.map(color => (
      <Color color={color} key={color} />
    ))}
  </Column>
)
