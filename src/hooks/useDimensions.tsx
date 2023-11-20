/**
 *
 * @param windowWidth
 * @param windowHeight
 * @param screenWidth
 * @param screenHeight
 * @returns
 * Usually when we only get Dimensions by Dimensions.get, if the screen orientation changes, the Dimensions will not be updated.
 * This hook will help us to get the updated Dimensions when the screen orientation changes.
 */
import { useEffect, useState } from 'react';
import { Dimensions } from 'react-native';

const windowSize = Dimensions.get('window');
const screenSize = Dimensions.get('screen');

export function useDimensions(): {
  windowWidth: number;
  windowHeight: number;
  screenWidth: number;
  screenHeight: number;
} {
  // State to hold the connection status
  const [windowWidth, setWindowWidth] = useState<number>(windowSize?.width);
  const [windowHeight, setWindowHeight] = useState<number>(windowSize?.height);
  const [screenWidth, setScreenWidth] = useState<number>(screenSize?.width);
  const [screenHeight, setScreenHeight] = useState<number>(screenSize?.height);

  useEffect(() => {
    const listenToDimensions = Dimensions.addEventListener(
      'change',
      ({ window, screen }) => {
        setWindowHeight(window?.height);
        setWindowWidth(window?.width);
        setScreenHeight(screen?.height);
        setScreenWidth(screen?.width);
      }
    );

    return () => {
      listenToDimensions.remove();
    };
  }, []);

  return { windowWidth, windowHeight, screenWidth, screenHeight };
}
