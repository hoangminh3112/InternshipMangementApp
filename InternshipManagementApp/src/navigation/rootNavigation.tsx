import React, { useMemo } from 'react';
import {
    createStackNavigator,
    StackNavigationOptions,
  } from '@react-navigation/stack';
import { APP_SCREEN, RootStackParamList } from './screenType';

import { StackNavigation } from './StackNavigation';
import { Tabs } from './TabNavigation';

const RootStack = createStackNavigator<RootStackParamList>();



export const RootNavigation = () => {
    //state 
    const screenOptions = useMemo<StackNavigationOptions>(
        () => ({
          headerShown: false,
        }),
        [],
    );
    //render
    return (
        <RootStack.Navigator
        screenOptions={screenOptions}
        >
            <RootStack.Screen 
                name={APP_SCREEN.STACK_NAVIGATION}
                component = {StackNavigation} 
            />
            <RootStack.Screen 
                name={APP_SCREEN.TABS}
                component = {Tabs} 
            />
        </RootStack.Navigator>
    )
}

