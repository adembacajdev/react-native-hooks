/* eslint-disable react-hooks/exhaustive-deps */
/**
 *
 * @param {Function} effect
 * @param {Array} deps
 * @returns
 *
 * @example
 * useAsyncEffect(async () => {
 *  const result = await fetch('https://api.example.com');
 * console.log(result);
 * }, []);
 */
import { useEffect } from 'react';

export const useAsyncEffect = (effect: any, deps: any[]) => {
  useEffect(() => {
    const cleanupPromise = effect();

    return () => {
      if (cleanupPromise instanceof Promise) {
        cleanupPromise.then((cleanup) => cleanup && cleanup());
      }
    };
  }, deps);
};
