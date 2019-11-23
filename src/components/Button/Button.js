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
  IconLeft,
  IconRight,
  loading,
  disabled,
  large,
  small,
  error,
  info,
  warning,
  success,
  light,
  ...props
}) => {
  const variants = {
    error,
    info,
    success,
    warning,
    large,
    small,
    light,
  }
  const iconColor = useTheme(light ? 'colors.icon' : 'colors.icon_inverse', { ignoreTheme: true })
  return (
    <Base {...variants} {...props} disabled={loading || disabled}>
      {loading && (
        <Overlay>
          <Loading white ignoreTheme />
        </Overlay>
      )}
      {Boolean(IconLeft) && (
        <Flex mr={2}>
          <IconLeft color={iconColor} />
        </Flex>
      )}
      <Text white={!light} ignoreTheme>
        {children}
      </Text>
      {Boolean(IconRight) && (
        <Flex ml={2}>
          <IconRight color={iconColor} />
        </Flex>
      )}
    </Base>
  )
}

ButtonComponent.propTypes = {
  children: PropTypes.node,
  IconLeft: PropTypes.elementType,
  IconRight: PropTypes.elementType,
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
  large: PropTypes.bool,
  small: PropTypes.bool,
  error: PropTypes.bool,
  info: PropTypes.bool,
  warning: PropTypes.bool,
  success: PropTypes.bool,
  light: PropTypes.bool,
}

export default ButtonComponent
