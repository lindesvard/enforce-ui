import React from 'react'
import PropTypes from 'prop-types'
import { Base } from './styled'
import { Flex } from '../Structure'
import Overlay from '../Overlay'
import Loading from '../Loading'
import { Text } from '../Typography'
import useTheme from '../../hooks/useTheme'

const ButtonComponent = ({
  children,
  LeftIcon,
  RightIcon,
  loading,
  disabled,
  large,
  small,
  error,
  info,
  warning,
  success,
  ...props
}) => {
  const variants = {
    error,
    info,
    success,
    warning,
    large,
    small,
  }
  const iconColor = useTheme('colors.icon_inverse', { ignoreTheme: true })
  return (
    <Base {...variants} {...props} disabled={loading || disabled}>
      {loading && (
        <Overlay>
          <Loading white ignoreTheme />
        </Overlay>
      )}
      {Boolean(LeftIcon) && (
        <Flex mr={2}>
          <LeftIcon color={iconColor} />
        </Flex>
      )}
      <Text white ignoreTheme>
        {children}
      </Text>
      {Boolean(RightIcon) && (
        <Flex ml={2}>
          <RightIcon color={iconColor} />
        </Flex>
      )}
    </Base>
  )
}

ButtonComponent.propTypes = {
  children: PropTypes.bool,
  LeftIcon: PropTypes.node,
  RightIcon: PropTypes.node,
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
  large: PropTypes.bool,
  small: PropTypes.bool,
  error: PropTypes.bool,
  info: PropTypes.bool,
  warning: PropTypes.bool,
  success: PropTypes.bool,
}

export default ButtonComponent
