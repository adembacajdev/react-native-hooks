import { useEffect, useState } from 'react';
import { compare } from '../helpers/compare';

type ForceUpdateResults = {
  showForceUpdate: boolean;
  setOptions: (options: IOptions) => void;
};

interface IOptions {
  minRequiredVersion: string;
  currentVersion: string;
}

export function useForceUpdate(): ForceUpdateResults {
  const [showForceUpdate, setShowForceUpdate] = useState<boolean>(false);
  const [options, setOptions] = useState<IOptions | null>(null);

  useEffect(() => {
    if (options) {
      const isRequired = compare(
        options?.minRequiredVersion,
        options?.currentVersion,
        '>'
      );
      setShowForceUpdate(isRequired);
    }
  }, [options]);

  return { showForceUpdate, setOptions };
}
