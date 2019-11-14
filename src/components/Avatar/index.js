import React, { useState } from 'react';
import { Base, Fallback } from './styled';
import { Text } from '../Typography';

const getInitials = (string) => {
  if (string.length <= 2) {
    return string.toUpperCase();
  }

  const names = string.split(' ');
  let initials = names[0].substring(0, 1).toUpperCase();

  if (names.length > 1) {
    initials += names[names.length - 1].substring(0, 1).toUpperCase();
  }

  return initials;
};

const AvatarComponent = (props) => {
  const { fallback, src } = props;
  const [noImage, setNoImage] = useState(!src);

  if (noImage) {
    return (
      <Fallback {...props}>
        <Text white ignoreTheme>{getInitials(fallback)}</Text>
      </Fallback>
    );
  }

  return (
    <Base {...props} onError={() => setNoImage(true)} />
  );
};

AvatarComponent.propTypes = {};

export default AvatarComponent;
