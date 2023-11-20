/**
 *
 * @param {string} orientation - PORTRAIT or LANDSCAPE
 * @returns
 * Usually when we only get Dimensions by Dimensions.get, if the screen orientation changes, the Dimensions will not be updated.
 * This hook will help us to get the updated Dimensions when the screen orientation changes.
 */
import { useEffect, useState } from 'react';
import { Dimensions } from 'react-native';

export function useOrientation(): 'PORTRAIT' | 'LANDSCAPE' {
  const isPortrait = () => {
    const dim = Dimensions.get('screen');
    return dim.height >= dim.width;
  };
  // State to hold the connection status
  const [orientation, setOrientation] = useState<'PORTRAIT' | 'LANDSCAPE'>(
    isPortrait() ? 'PORTRAIT' : 'LANDSCAPE'
  );

  useEffect(() => {
    const callback = () =>
      setOrientation(isPortrait() ? 'PORTRAIT' : 'LANDSCAPE');

    const listenToDimensions = Dimensions.addEventListener('change', callback);

    return () => {
      listenToDimensions.remove();
    };
  }, []);

  return orientation;
}
