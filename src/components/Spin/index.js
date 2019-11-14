import React, { memo } from 'react';
import { Base } from './styled';

const RotateComponent = ({ children, disabled, ...props }) => (
    <Base {...props} disabled={disabled}>
      {children}
    </Base>
  );

RotateComponent.propTypes = {};

export default RotateComponent;
