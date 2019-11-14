import React from 'react'
import PropTypes from 'prop-types'
import { RadioContainer, HiddenRadio, StyledRadio, Icon, Title } from './styled'

const RadioComponent = props => {
  const { label, checked } = props

  return (
    <RadioContainer {...props}>
      <HiddenRadio {...props} />
      <StyledRadio checked={checked}>
        <Icon />
      </StyledRadio>
      {label && <Title>{label}</Title>}
    </RadioContainer>
  )
}

RadioComponent.propTypes = {
  label: PropTypes.string,
  checked: PropTypes.bool,
}

export default RadioComponent
