import React from 'react'
import { Row, Column, Flex } from '.'

export default {
  title: 'Structure',
}

const Box = () => <Flex width="100px" height="100px" bg="#f4f4f4" borderRadius="3px" m="10px" />

export const _Row = () => (
  <Row>
    <Box />
    <Box />
    <Box />
  </Row>
)

export const _Column = () => (
  <Column>
    <Box />
    <Box />
    <Box />
  </Column>
)

export const _Flex = () => <Flex width="100px" height="100px" bg="#f4f4f4" borderRadius="3px" m="10px" />
