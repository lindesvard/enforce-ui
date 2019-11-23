import React from 'react'
import PropTypes from 'prop-types'
import { Base } from './styled'

const RotateComponent = ({ children, deg, origin, ...props }) => (
  <Base {...props} deg={deg} origin={origin}>
    {children}
  </Base>
)

RotateComponent.propTypes = {
  children: PropTypes.node,
  deg: PropTypes.number,
  origin: PropTypes.string,
}

export default RotateComponent
