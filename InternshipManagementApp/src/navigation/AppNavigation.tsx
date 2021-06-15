
import { NavigationContainer } from '@react-navigation/native';
import React, {memo} from 'react';
import isEqual from 'react-fast-compare';

import {navigationRef} from './navigationService';
import {RootNavigation} from './rootNavigation';


const AppNavigationComponent = () => {
  // render
  return (
    <NavigationContainer ref={navigationRef}>
      <RootNavigation />
    </NavigationContainer>
  );
};

export const AppNavigation = memo(AppNavigationComponent, isEqual);