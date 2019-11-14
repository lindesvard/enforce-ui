import React from 'react'
import PropTypes from 'prop-types'
import { Base } from './styled'

const RotateComponent = ({ children, disabled, ...props }) => (
  <Base {...props} disabled={disabled}>
    {children}
  </Base>
)

RotateComponent.propTypes = {
  children: PropTypes.node,
  disabled: PropTypes.bool,
}

export default RotateComponent
