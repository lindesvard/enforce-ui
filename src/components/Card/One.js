import React from 'react'
import PropTypes from 'prop-types'
import { Base } from './styled'
import Cover from '../Cover'
import { Heading, Text } from '../Typography'
import Author from '../Author'
import { Column, Row } from '../Structure'

const Card = ({ image, title, description, author, date }) => {
  const showDescription = Boolean(description || author)

  return (
    <Base>
      <Column m="-1px">
        <Cover src={image} borderRadius={0} />
      </Column>
      <Column px={3} py={3}>
        <Heading xsmall>{title}</Heading>
        {description && (
          <Text light mt={1}>
            {description}
          </Text>
        )}
        {showDescription && (
          <Row mt={4} alignItems="center" justifyContent="space-between">
            {author && <Author {...author} />}
            {date && <Text light>{date}</Text>}
          </Row>
        )}
      </Column>
    </Base>
  )
}

Card.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  date: PropTypes.string,
  description: PropTypes.string,
  author: PropTypes.shape({
    name: PropTypes.string,
    image: PropTypes.string,
  }),
}

export default Card
