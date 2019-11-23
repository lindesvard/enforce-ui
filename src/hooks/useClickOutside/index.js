import { useEffect, useRef } from 'react'

const useClickOutside = (ref, callback, eventType = 'click') => {
  const handlerRef = useRef(callback)

  useEffect(() => {
    handlerRef.current = callback
  })

  useEffect(() => {
    const listener = event => {
      if (ref && ref.current) {
        if (event.target.shadowRoot) {
          if (!event.target.shadowRoot.contains(ref.current)) {
            handlerRef.current(event)
          }
        } else if (!ref.current.contains(event.target)) {
          handlerRef.current(event)
        }
      }
    }

    if (document) {
      document.addEventListener(eventType, listener)
      document.addEventListener('touchstart', listener)
    }

    return () => {
      if (document) {
        document.removeEventListener(eventType, listener)
        document.removeEventListener('touchstart', listener)
      }
    }
  })
}

export default useClickOutside
