import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import { FiLoader } from 'react-icons/fi'
import { Base, Label, Input } from './styled'
import useFocus from '../../hooks/useFocus'
import useTheme from '../../hooks/useTheme'
import { Column } from '../Structure'
import Spin from '../Spin'

const InputComponent = (props) => {
  const input = useRef()
  const iconColor = useTheme('colors.icon')
  const {
    label,
    error,
    border = true,
    loading = false,
    Icon,
  } = props
  const {
    focus, active, onFocus, onBlur,
  } = useFocus(props)

  return (
    <Base active={active} focus={focus} error={error} border={border} onClick={() => input.current.focus()}>
      {Icon && <Icon color={iconColor} />}
      <Column flex={1} pl={Icon && '10px'} pr={loading && '10px'}>
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
          ref={input}
        />
      </Column>
      {loading && <Spin><FiLoader color={iconColor} /></Spin>}
    </Base>
  )
}

InputComponent.propTypes = {
  label: PropTypes.node,
  error: PropTypes.bool,
  border: PropTypes.bool,
  loading: PropTypes.bool,
  Icon: PropTypes.elementType,
}

export default InputComponent
