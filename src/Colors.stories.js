import React from 'react'
import { Flex, Column } from './components/Structure'
import { Text } from './components/Typography'
import useTheme from './hooks/useTheme'
import theme from './lib/theme'

export default {
  title: 'Colors',
}

const Color = ({ color }) => {
  const bg = useTheme(`colors.${color}`)
  return (
    <Flex width="100px" height="100px" bg={bg} borderRadius="3px" m="10px" alignItems="center" justifyContent="center">
      <Text>{bg}</Text>
    </Flex>
  )
}

const colors = Object.keys(theme.colors)


export const Default = () => (
  <Column>
    {colors.map((color) => <Color color={color} key={color} />)}
  </Column>
)
