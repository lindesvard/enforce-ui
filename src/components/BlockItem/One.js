import React from 'react'
import PropTypes from 'prop-types'
import { Base } from './styled'
import Cover from '../Cover'
import Spacer from '../Spacer'
import { Heading, Text } from '../Typography'
import Author from '../Author'
import { Column } from '../Structure'

const BlockItem = ({ image, title, description, author }) => {
  const showDescription = Boolean(description || author)

  return (
    <Base>
      <Cover src={image} />
      <Spacer xsmall />
      <Heading xsmall>{title}</Heading>
      {showDescription && (
        <Column mt={1}>
          {description && <Text light>{description}</Text>}
          {author && <Author {...author} />}
        </Column>
      )}
    </Base>
  )
}

BlockItem.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  author: PropTypes.shape({
    name: PropTypes.string,
    image: PropTypes.string,
  }),
}

export default BlockItem
