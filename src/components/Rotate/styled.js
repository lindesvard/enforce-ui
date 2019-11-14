import styled, { css } from 'styled-components'

export const Base = styled.div((props) => css`
  transform: rotate(${props.deg});
  transform-origin: ${props.origin};
  display: inline-block;
`)
