import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { is } from 'rambda'
import { Base } from './styled'
import { Text } from '../Typography';

const isString = is(String);

const LabelComponent = ({ error, children }) => (
    <Base error={error}>
      <Text medium>{isString(error) ? error : children}</Text>
    </Base>
  );

LabelComponent.propTypes = {
  children: PropTypes.node,
  error: PropTypes.string,
};

export default LabelComponent;
