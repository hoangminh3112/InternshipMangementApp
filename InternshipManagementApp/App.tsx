import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {AppNavigation} from './src/navigation/AppNavigation';

export const App = () => {
  return (
    <SafeAreaProvider>
      <AppNavigation />
    </SafeAreaProvider>
  );
};
export default App;