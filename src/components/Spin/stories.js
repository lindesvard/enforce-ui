import React, { useState } from 'react'
import Spin from './'
import {Text} from '../Typography'

export default {
  title: 'Spin',
}

export const Active = () => {
  return <Spin><Text>Spinning text</Text></Spin>
}

export const Disabled = () => {
  return <Spin disabled><Text>Spinning text</Text></Spin>
}