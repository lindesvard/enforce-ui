import React from 'react'
import { Row } from '../Structure'
import { Text } from '../Typography'
import Avatar from '../Avatar'

const AuthorComponent = (props) => {
  const { name, image } = props
  return (
    <Row alignItems="center">
      <Avatar src={image} fallback={name} size={19} mr={2} />
      <Text light>{name}</Text>
    </Row>
  )
}

AuthorComponent.propTypes = {}

export default AuthorComponent
