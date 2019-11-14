import React from 'react';
import {
  FiAlertCircle, FiAlertTriangle, FiCheckCircle, FiInfo, FiX,
} from 'react-icons/fi';
import { Base, Close } from './styled';
import { Flex } from '../Structure';
import { Text } from '../Typography';

const BannerComponent = ({
  text, error, info, warning, success, onClose,
}) => {
  const props = {
    error, info, success, warning,
  };
  const showIcon = info || success || error || warning;

  return (
    <Base {...props}>
      {showIcon && (
      <Flex mr="10px" mt="3px">
        {info && <FiInfo color="white" />}
        {success && <FiCheckCircle color="white" />}
        {error && <FiAlertCircle color="white" />}
        {warning && <FiAlertTriangle color="white" />}
      </Flex>
      )}

      <Text {...props} white ignoreTheme>{text}</Text>

      {onClose && (
      <Close onClick={onClose}>
        <FiX color="white" />
      </Close>
      )}
    </Base>
  );
};

BannerComponent.propTypes = {};

export default BannerComponent;
