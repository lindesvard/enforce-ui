import React from 'react'
import PropTypes from 'prop-types'
import { FiAlertCircle, FiAlertTriangle, FiCheckCircle, FiInfo, FiX } from 'react-icons/fi'
import { Base, Close } from './styled'
import { Flex } from '../Structure'
import { Text } from '../Typography'

const BannerComponent = ({ text, error, info, warning, success, onClose }) => {
  const props = {
    error,
    info,
    success,
    warning,
  }
  const showIcon = info || success || error || warning

  return (
    <Base {...props}>
      {showIcon && (
        <Flex mr="10px">
          {info && <FiInfo color="white" />}
          {success && <FiCheckCircle color="white" />}
          {error && <FiAlertCircle color="white" />}
          {warning && <FiAlertTriangle color="white" />}
        </Flex>
      )}

      <Text {...props} white ignoreTheme>
        {text}
      </Text>

      {onClose && (
        <Close onClick={onClose}>
          <FiX color="white" />
        </Close>
      )}
    </Base>
  )
}

BannerComponent.propTypes = {
  text: PropTypes.string,
  error: PropTypes.bool,
  info: PropTypes.bool,
  warning: PropTypes.bool,
  success: PropTypes.bool,
  onClose: PropTypes.func,
}

export default BannerComponent
