import React from 'react';
import { Base } from './styled';
import { Flex } from '../Structure';
import Overlay from '../Overlay';
import Loading from '../Loading';
import { Text } from '../Typography';
import useTheme from '../../hooks/useTheme';

const ButtonComponent = ({
  children, leftIcon: LeftIcon, rightIcon: RightIcon, loading,  disabled, large, small, error, info, warning, success,
}) => {
  const props = {
    error, info, success, warning, large, small,
  };
  const iconColor = useTheme('colors.icon');
  return (
    <Base {...props} disabled={loading || disabled}>
      {loading && (
        <Overlay>
          <Loading />
        </Overlay>
      )}
      {Boolean(LeftIcon) && (
        <Flex mr={2}>
          <LeftIcon color={iconColor} />
        </Flex>
      )}
      <Text white ignoreTheme>
        {children}
      </Text>
      {Boolean(RightIcon) && (
        <Flex ml={2}>
          <RightIcon color={iconColor} />
        </Flex>
      )}
    </Base>
  );
};

ButtonComponent.propTypes = {};

export default ButtonComponent;
