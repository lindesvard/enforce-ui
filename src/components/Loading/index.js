import React from 'react'
import PropTypes from 'prop-types'
import { FiLoader } from 'react-icons/fi'
import Spin from '../Spin'
import useTheme from '../../hooks/useTheme'

const LoadingComponent = ({ ignoreTheme, white }) => {
  const color = useTheme(white ? 'colors.icon_inverse' : 'colors.icon', { ignoreTheme })
  return <Spin><FiLoader color={color} /></Spin>
}

LoadingComponent.propTypes = {
  ignoreTheme: PropTypes.bool,
  white: PropTypes.bool,
}

export default LoadingComponent
