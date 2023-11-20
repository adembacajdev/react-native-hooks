import * as React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import { useAppActive } from '@adembacaj/react-native-hooks';

export default function App() {
  const isAppActive = useAppActive();
  return (
    <View style={styles.container}>
      <Text>Is app active: {isAppActive}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
