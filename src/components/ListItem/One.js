import React, { memo } from 'react';
import PropTypes from 'prop-types';
import Cover from '../Cover';
import Author from '../Author';
import { Heading, Text } from '../Typography';
import { Row, Column } from '../Structure';

const ListItem = (props) => {
  const {
 image, title, description, author 
} = props;

  return (
    <Row alignItems="center">
      <Column mr={3}>
        <Cover src={image} width={50} height={50} />
      </Column>
      <Column>
        <Heading xsmall mt="-3px">{title}</Heading>
        {description && <Text light>{description}</Text>}
        {author && <Author {...author} />}
      </Column>
    </Row>
  );
};

ListItem.propTypes = {
  children: PropTypes.node,
};

export default ListItem;
