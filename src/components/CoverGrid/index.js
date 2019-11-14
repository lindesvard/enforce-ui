import React from 'react';
import PropTypes from 'prop-types';
import Cover from '../Cover';
import { Row, Column } from '../Structure';

const CoverGridComponent = (props) => {
  const { src } = props;

  return (
    <Row>
      <Column flex={1}>
        <Cover src={src} ratio={1} p={1} />
      </Column>
      <Column flex={1}>
        <Cover src={src} ratio={0.5} p={1} />
        <Row>
          <Cover src={src} ratio={1} p={1} />
          <Cover src={src} ratio={1} p={1} />
        </Row>
      </Column>
    </Row>
  );
};

CoverGridComponent.propTypes = {
  src: PropTypes.string.isRequired,
};

export default CoverGridComponent;
