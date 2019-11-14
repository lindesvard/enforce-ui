import styled from 'styled-components';
import {theme} from '../../lib/mixins';

export const Base = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: ${props => props.background || 'rgba(0, 0, 0, .5)'};
  display: flex;
  align-items: center;
  justify-content: center;
`
