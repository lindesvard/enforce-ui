import React from 'react'
import Rotate from '.'
import { Text } from '../Typography'

export default {
  title: 'Rotate',
}

export const Default = () => <Rotate><Text>No rotate</Text></Rotate>

export const with45Deg = () => <Rotate deg="45deg" origin="left"><Text>Rotate this 45 deg</Text></Rotate>

export const with180Deg = () => <Rotate deg="180deg" origin="center"><Text>Rotate this 45 deg</Text></Rotate>
