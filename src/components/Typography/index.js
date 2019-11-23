import React from 'react'
import styled, { css } from 'styled-components'
import { space } from 'styled-system'
import { theme } from '../../lib/mixins'

// - Display (26, 30, 34)
// - Heading (18, 22, 24)
// - Text (10, 12, 14, 16, 18)

const getSize = sizes => ({ xsmall, small, large, xlarge, size }) => {
  if (size) {
    return size
  }

  if (xsmall) {
    return sizes.xsmall || sizes.small
  }

  if (small) {
    return sizes.small
  }

  if (large) {
    return sizes.large
  }

  if (xlarge) {
    return sizes.xlarge || sizes.large
  }

  return sizes.default
}

const getFontSize = type => props => {
  switch (type) {
    case 'text': {
      const fontSize = getSize({
        xsmall: 10,
        small: 12,
        default: 14,
        large: 16,
        xlarge: 18,
      })(props)
      return css`
        font-size: ${fontSize}px;
        line-height: ${fontSize + 2}px;
      `
    }
    case 'heading': {
      const fontSize = getSize({
        xsmall: 16,
        small: 18,
        default: 22,
        large: 24,
      })(props)
      return css`
        font-size: ${fontSize}px;
        line-height: ${fontSize + 2}px;
      `
    }
    case 'display': {
      const fontSize = getSize({ small: 26, default: 30, large: 34 })(props)
      return css`
        font-size: ${fontSize}px;
        line-height: ${fontSize + 2}px;
      `
    }
  }

  return css``
}

const getFontWeight = ({ bold, medium, thin }) => {
  if (bold) {
    return 700
  }

  if (medium) {
    return 500
  }

  if (thin) {
    return 200
  }

  return 400
}

const getColor = ({ meta, light, color, white, ...props }) => {
  if (color) {
    return color
  }

  if (white) {
    return theme('colors.text_inverse')(props)
  }

  if (light) {
    return theme('colors.text_light')(props)
  }

  return theme('colors.text')(props)
}

export const Text = styled.p`
  ${theme('css.font')};
  ${getFontSize('text')};
  font-weight: ${getFontWeight};
  color: ${getColor};
  margin: ${props => (props.paragraph ? '5px' : 0)} 0;
  ${space};
`

export const Heading = styled(props => (
  <Text {...props} thin={false} medium={false} bold paragraph={false} />
))`
  ${getFontSize('heading')};
  color: ${theme('colors.text_title')};
`

export const Display = styled(props => (
  <Text {...props} thin={false} medium={false} bold paragraph={false} />
))`
  ${getFontSize('display')};
  color: ${theme('colors.text_title')};
`
