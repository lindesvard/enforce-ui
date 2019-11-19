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
} from 'styled-system'

export const Flex = styled.div`
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
`

export const Row = styled(Flex)`
  flex-direction: row;
`

export const Column = styled(Flex)`
  flex-direction: column;
`
