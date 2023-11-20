/**
 *
 * @param {boolean} isMounted
 * @returns
 * This hook will help us to check if the component is mounted or not.
 * Usually when we use useEffect, we will get a warning if we try to set state on an unmounted component.
 * This hook will help us to avoid that warning.
 */
import { useCallback, useEffect, useRef } from 'react';

export function useIsMounted() {
  const isMounted = useRef(false);

  useEffect(() => {
    isMounted.current = true;

    return () => {
      isMounted.current = false;
    };
  }, []);

  return useCallback(() => isMounted.current, []);
}
