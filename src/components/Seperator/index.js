import React, { memo } from 'react';
import { Base, Line } from './styled';

const SeperatorComponent = (props) => {
  return (
    <Base {...props}>
      <Line />
    </Base>
  )
};

SeperatorComponent.propTypes = {}

export default SeperatorComponent
