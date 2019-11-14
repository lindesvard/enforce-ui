import React from 'react'
import PropTypes from 'prop-types'
import { Base, Label, Input } from './styled'
import useFocus from '../../hooks/useFocus'

const TextareaComponent = ({ label, error, ...props }) => {
  const {
    focus, active, onFocus, onBlur,
  } = useFocus(props)

  return (
    <Base active={active} focus={focus} error={error}>
      {label && (
        <Label active={active} focus={focus} error={error}>
          {error || label}
        </Label>
      )}
      <Input
        {...props}
        onFocus={onFocus}
        onBlur={onBlur}
        focus={focus}
        active={active}
        label={Boolean(label)}
      />
    </Base>
  )
}

TextareaComponent.propTypes = {
  label: PropTypes.string,
  error: PropTypes.bool,
}

export default TextareaComponent
