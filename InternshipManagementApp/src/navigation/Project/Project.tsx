import React, { useMemo } from 'react';
import { Provider } from 'react-redux';

import { APP_SCREEN } from '../screenType';
import { ProjectsList } from '../../features/Projects/design';
import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack';
import { store } from '../../features/redux_saga/store';
import { Projects_Detail } from '../../features/ProjectDetail/design';
import { Tabs } from '../TabNavigation';
import { AddTodoRX } from '../../features/ProjectDetail/AddComment/design/AddToDo';


const Stack = createStackNavigator();
export const Project = ({ navigation, route }) => {
    if (route.state && route.state.index > 0) {
        navigation.setOptions({ tabBarVisible: false })
    } else {
        navigation.setOptions({ tabBarVisible: true })
    }
    const screenOptions = useMemo<StackNavigationOptions>(
        () => ({
            headerShown: false,
        }),
        [],
    );
    return (
        <Provider store={store} >
            <Stack.Navigator
                screenOptions={screenOptions}
            >
                <Stack.Screen name={APP_SCREEN.PROJECTS} component={ProjectsList} />
                <Stack.Screen
                    name={APP_SCREEN.PROJECT_DETAIL}
                    component={Projects_Detail}
                />
                
                
            </Stack.Navigator>
        </Provider>
    )
}