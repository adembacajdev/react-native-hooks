/**
 *
 * @packageDocumentation
 * @module Hooks
 */
import { useEffect, useState } from 'react';
import { Keyboard } from 'react-native';

export function useKeyboard(): { isKeyboardOpen: boolean } {
  const [isKeyboardOpen, setIsKeyboardOpen] = useState<boolean>(false);

  useEffect(() => {
    const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
      setIsKeyboardOpen(true);
    });
    const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
      setIsKeyboardOpen(false);
    });
    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  return { isKeyboardOpen };
}
