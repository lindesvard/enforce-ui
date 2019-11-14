import React, { memo } from 'react';
import { Base } from './styled';

const RotateComponent = ({
 children, deg, origin, ...props 
}) => (
    <Base {...props} deg={deg} origin={origin}>
      {children}
    </Base>
  );

RotateComponent.propTypes = {};

export default RotateComponent;
