import React from 'react'
import Spin from '.'
import { Text } from '../Typography'

export default {
  title: 'Spin',
}

export const Active = () => (
  <Spin>
    <Text>Spinning text</Text>
  </Spin>
)

export const Disabled = () => (
  <Spin disabled>
    <Text>Spinning text</Text>
  </Spin>
)
