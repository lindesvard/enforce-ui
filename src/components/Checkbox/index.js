import React from 'react'
import PropTypes from 'prop-types'
import {
  CheckboxContainer,
  HiddenCheckbox,
  StyledCheckbox,
  Icon,
  Title,
} from './styled'
import { FiCheck } from 'react-icons/fi'

const CheckboxComponent = props => {
  const { label, checked } = props

  return (
    <CheckboxContainer {...props}>
      <HiddenCheckbox {...props} />
      <StyledCheckbox checked={checked}>
        <FiCheck color="white" />
      </StyledCheckbox>
      {label && <Title>{label}</Title>}
    </CheckboxContainer>
  )
}

CheckboxComponent.propTypes = {
  label: PropTypes.string,
  checked: PropTypes.bool,
}

export default CheckboxComponent
