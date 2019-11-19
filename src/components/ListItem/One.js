import React from 'react'
import PropTypes from 'prop-types'
import Cover from '../Cover'
import Author from '../Author'
import { Text } from '../Typography'
import { Row, Column } from '../Structure'
import { Base } from './styled'

const ListItem = (props) => {
  const {
    image, title, description, author, RightIcon,
  } = props

  const showDescription = Boolean(description || author)

  return (
    <Base>
      {Boolean(image) && (
        <Column mr={3}>
          <Cover src={image} width={45} height={45} />
        </Column>
      )}
      <Column flex={1} justifyContent="center">
        <Text bold>{title}</Text>
        {showDescription && (
          <Row mt={1}>
            {description && <Text light>{description}</Text>}
            {author && <Author {...author} />}
          </Row>
        )}
      </Column>

      <Column>
        {Boolean(RightIcon) && <RightIcon />}
      </Column>
    </Base>
  )
}

ListItem.propTypes = {
  children: PropTypes.node,
  image: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  RightIcon: PropTypes.element,
  author: PropTypes.shape({
    name: PropTypes.string,
    image: PropTypes.string,
  }),
}

export default ListItem
