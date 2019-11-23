import React from 'react'
import PropTypes from 'prop-types'
import { Base } from './styled'
import Cover from '../Cover'
import { Heading, Text } from '../Typography'
import { Column, Row } from '../Structure'
import styled from 'styled-components'

const Author = styled(Row)`
  position: absolute;
  bottom: -25px;
  left: 0;
  padding: 0 15px;
`

const Logo = styled(Cover)`
  box-shadow: 0 0 0 5px #fff;
`

const Card = ({ image, title, description, author, date }) => {
  return (
    <Base>
      <Column m="-1px" position="relative">
        <Cover src={image} borderRadius={0} ratio={1 / 3} />
        <Author>
          <Logo src={image} borderRadius={5} ratio={1} width={60} />
          <Text light mt="auto" mb={0} ml={3}>
            Carl-Gerhard Lindesvärd
          </Text>
        </Author>
      </Column>
      <Column p={4} pt={7}>
        <Heading>{title}</Heading>
        {description && (
          <Text light mt={3}>
            {description}
          </Text>
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
