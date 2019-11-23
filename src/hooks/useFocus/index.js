import { useState } from 'react'

export default function useFocus({ value, onBlur, onFocus }) {
  const [focus, setFocus] = useState(false)
  const active = focus || Boolean(value)

  return {
    focus,
    active,
    onFocus: event => {
      if (onFocus) {
        onFocus(event)
      }
      setFocus(true)
    },
    onBlur: event => {
      if (onBlur) {
        onBlur(event)
      }
      setFocus(false)
    },
  }
}
