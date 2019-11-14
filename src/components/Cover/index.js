import React from 'react'
import PropTypes from 'prop-types'
import { Base, Inner, Image } from './styled'

const getRatio = ({ ratio, width, height }) => (ratio || height / width) * 100

const CoverComponent = ({
  borderRadius = 10,
  src,
  width,
  height,
  ratio,
  ...props
}) => (
  <Base ratio={getRatio({ ratio, width, height })} maxWidth={width}>
    <Inner {...props}>
      <Image src={src} borderRadius={borderRadius} />
    </Inner>
  </Base>
)

CoverComponent.propTypes = {
  src: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  ratio: PropTypes.number,
  borderRadius: PropTypes.number,
}

export default CoverComponent
