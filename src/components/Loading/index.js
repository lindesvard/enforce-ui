import React from 'react'
import PropTypes from 'prop-types'
import { FiLoader } from 'react-icons/fi'
import Spin from '../Spin'
import useTheme from '../../hooks/useTheme'

const LoadingComponent = ({ ignoreTheme, white, size = 15 }) => {
  const color = useTheme(white ? 'colors.icon_inverse' : 'colors.icon', { ignoreTheme })
  return (
    <Spin size={size}>
      <FiLoader color={color} size={size} />
    </Spin>
  )
}

LoadingComponent.propTypes = {
  ignoreTheme: PropTypes.bool,
  white: PropTypes.bool,
  size: PropTypes.number,
}

export default LoadingComponent
