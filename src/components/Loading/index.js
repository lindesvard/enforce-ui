import React from 'react'
import { FiLoader } from 'react-icons/fi'
import Spin from '../Spin'
import useTheme from '../../hooks/useTheme'

const LoadingComponent = (props) => {
  const color = useTheme('colors.icon')
  return <Spin><FiLoader color={color} /></Spin>
}

LoadingComponent.propTypes = {}

export default LoadingComponent
