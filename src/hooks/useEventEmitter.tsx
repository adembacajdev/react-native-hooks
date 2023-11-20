import { useMemo, useEffect } from 'react';
import EventEmitter from 'events';

const defaultMaxListeners = 10;

export interface UseEventEmitterParams {
  maxListeners: number;
  defaultEmitter?: EventEmitter;
}

export function useEventEmitter(
  {
    maxListeners = defaultMaxListeners,
    defaultEmitter,
  }: UseEventEmitterParams = { maxListeners: defaultMaxListeners }
): EventEmitter {
  const eventEmitter = useMemo(() => {
    const emitter = defaultEmitter || new EventEmitter();
    if (!defaultEmitter && maxListeners) {
      emitter.setMaxListeners(maxListeners);
    }
    return emitter;
  }, [maxListeners, defaultEmitter]);

  useEffect(
    () => () => {
      eventEmitter.removeAllListeners();
    },
    [eventEmitter, maxListeners]
  );
  return eventEmitter;
}
