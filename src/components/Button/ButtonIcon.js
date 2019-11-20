import React from 'react'
import PropTypes from 'prop-types'
import { Base } from './styled'
import Overlay from '../Overlay'
import Loading from '../Loading'
import useTheme from '../../hooks/useTheme'

const ButtonIconComponent = ({
  Icon,
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
    <Base {...variants} {...props} disabled={loading || disabled} circle>
      {loading && (
        <Overlay>
          <Loading white ignoreTheme />
        </Overlay>
      )}
      {Boolean(Icon) && (
        <Icon color={iconColor} />
      )}
    </Base>
  )
}

ButtonIconComponent.propTypes = {
  Icon: PropTypes.node,
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
  large: PropTypes.bool,
  small: PropTypes.bool,
  error: PropTypes.bool,
  info: PropTypes.bool,
  warning: PropTypes.bool,
  success: PropTypes.bool,
}

export default ButtonIconComponent
