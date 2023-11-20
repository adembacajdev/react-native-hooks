/**
 *
 * @param {boolean} active
 * @returns
 * This hook will help us to get the updated app state when the app is active or inactive.
 * Usually when we only get AppState by AppState.currentState, if the app is active or inactive, the AppState will not be updated.
 * This hook will help us to get the updated AppState when the app is active or inactive.
 */

import { useEffect, useState } from 'react';
import { AppState, Platform } from 'react-native';
import type { AppStateStatus } from 'react-native';

function appStateToFocused(appState: AppStateStatus): boolean {
  return (
    appState === 'active' || (Platform.OS === 'ios' && appState === 'inactive')
  );
}

export function useAppActive(): boolean {
  const [active, setIsActive] = useState(
    appStateToFocused(AppState.currentState)
  );
  useEffect(() => {
    const onChangeHandler = (nextAppState: AppStateStatus) => {
      setIsActive(appStateToFocused(nextAppState));
    };

    const subscription = AppState.addEventListener('change', onChangeHandler);

    return () => {
      subscription.remove();
    };
  }, []);

  return active;
}
