import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Base } from './styled';
import Cover from '../Cover';
import Spacer from '../Spacer';
import { Heading, Text } from '../Typography';
import { Row } from '../Structure';
import Author from '../Author';

const BlockItem = (props) => {
  const {
 image, title, description, author 
} = props;

  return (
    <Base>
      <Cover src={image} />
      <Spacer xsmall />
      <Heading xsmall>{title}</Heading>
      {description && <Text light>{description}</Text>}
      {author && <Author {...author} />}
    </Base>
  );
};

BlockItem.propTypes = {
  children: PropTypes.node,
};

export default  BlockItem;
