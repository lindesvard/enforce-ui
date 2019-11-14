import { useState } from 'react'

export default function useFocus({ value, onBlur, onFocus }) {
  const [focus, setFocus] = useState(false)
  const active = focus || Boolean(value)

  return {
    focus,
    active,
    onFocus: event => {
      onFocus && onFocus(event)
      setFocus(true)
    },
    onBlur: event => {
      onBlur && onBlur(event)
      setFocus(false)
    },
  }
}
