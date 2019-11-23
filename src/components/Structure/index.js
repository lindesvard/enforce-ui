import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {
  space,
  color,
  width,
  height,
  fontSize,
  flexWrap,
  flexDirection,
  alignItems,
  justifyContent,
  flex,
  order,
  alignSelf,
  borderRadius,
  layout,
  position,
} from 'styled-system'

export const StyledFlex = styled.div`
  ${space};
  ${color};
  ${width};
  ${height};
  ${fontSize};
  ${flexWrap};
  ${flexDirection};
  ${alignItems};
  ${justifyContent};
  ${flex};
  ${order};
  ${alignSelf};
  ${borderRadius};
  ${layout};
  ${position};
`

export const Flex = ({ display, ...props }) => <StyledFlex {...props} display={display || 'flex'} />

Flex.propTypes = {
  display: PropTypes.any,
}

export const Row = styled(Flex)`
  display: flex;
  flex-direction: row;
`

export const Column = styled(Flex)`
  display: flex;
  flex-direction: column;
`
