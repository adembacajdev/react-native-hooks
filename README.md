# @adembacaj/react-native-hooks

Custom hooks that can help during development

## Installation

```sh
npm install @adembacaj/react-native-hooks
or if you are using Expo
npx expo install @adembacaj/react-native-hooks
```

## Usage

### useAppActive

```js
import { useAppActive } from '@adembacaj/react-native-hooks';

const isAppActive = useAppActive();
```

### useDimensions

```js
import { useDimensions } from '@adembacaj/react-native-hooks';

const { windowWidth, windowHeight, screenWidth, screenHeight } =
  useDimensions();
```

### useIsMounted

```js
import { useIsMounted } from '@adembacaj/react-native-hooks';

const isMounted = useIsMounted();
```

### useKeyboard

```js
import { useKeyboard } from '@adembacaj/react-native-hooks';

const { isKeyboardOpen } = useKeyboard();
```

### useOrientation

```js
import { useOrientation } from '@adembacaj/react-native-hooks';

const orientation = useOrientation();
if (orientation === 'PORTRAIT') {
  //do something
} else if (orientation === 'LANDSCAPE') {
  //do something
}
```

### useForceUpdate

```js
import { useForceUpdate } from '@adembacaj/react-native-hooks';

const { showForceUpdate, setOptions } = useForceUpdate();

const checkForceUpdate = () => {
  setOptions({
    minRequiredVersion: '1.9.0',
    currentVersion: '1.7.6', // you can use react-native-device-info to get app version installed
  });
};

useEffect(() => {
  if (showForceUpdate) {
    Alert.alert('Update!', 'There is a new update');
  }
}, [showForceUpdate]);
```

### useTimeout

```js
import { useTimeout } from '@adembacaj/react-native-hooks';

const { clear, reset } = useTimeout(() => setCount(0), 1000);
```

### useDebounce

```js
import { useDebounce } from '@adembacaj/react-native-hooks';
useDebounce(() => alert(count), 1000, [count]);
```

### useArray

```js
import { useArray } from '@adembacaj/react-native-hooks';
const { array, set, push, remove, filter, update, clear } = useArray([
  1, 2, 3, 4, 5, 6,
]);
```

### useAsyncEffect

```js
import { useAsyncEffect } from '@adembacaj/react-native-hooks';
useAsyncEffect(async () => {
  const data = await fetchData();
  // Do something with the data
  return () => {
    // Cleanup (if needed)
  };
}, [someDependency]);
```

### useModal

```js
import { useModal } from '@adembacaj/react-native-hooks';

const { isVisible, showModal, hideModal } = useModal();
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
