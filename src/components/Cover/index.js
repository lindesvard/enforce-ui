import React, { memo, useState } from 'react';
import PropTypes from 'prop-types';
import { Base, Inner, Image } from './styled';

const CoverComponent = (props) => {
  const { src, width, height } = props;
  const ratio = (props.ratio || height / width) * 100;

  return (
    <Base ratio={ratio} maxWidth={width}>
      <Inner {...props}>
        <Image src={src} />
      </Inner>
    </Base>
  );
};

CoverComponent.propTypes = {
  src: PropTypes.string,
};

export default CoverComponent;
