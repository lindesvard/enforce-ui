import { useEffect, useRef } from 'react';

const useClickOutside = (
  ref,
  callback,
  eventType = 'click'
) => {
  const handlerRef = useRef(callback);

  /**
   * Update callback if it changes
   */
  useEffect(() => {
    handlerRef.current = callback;
  });

  /**
   * Add and remove event listeners
   */
  useEffect(() => {
    const listener = (event) => {
      if (ref && ref.current) {
        if (event.target.shadowRoot) {
          if (!event.target.shadowRoot.contains(ref.current)) {
            handlerRef.current(event);
          }
        } else {
          if (!ref.current.contains(event.target)) {
            handlerRef.current(event);
          }
        }
      }
    };

    document && document.addEventListener(eventType, listener);
    document && document.addEventListener('touchstart', listener);

    return () => {
      document && document.removeEventListener(eventType, listener);
      document && document.removeEventListener('touchstart', listener);
    };
  });
};

export default useClickOutside;